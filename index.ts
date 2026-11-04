// EasyVocab KI-Funktion für Supabase Edge Functions (Deno).
// Der Claude-Schlüssel liegt NUR hier als Secret (ANTHROPIC_API_KEY), nie in der App.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (o: unknown, status = 200) =>
  new Response(JSON.stringify(o), { status, headers: { ...CORS, "Content-Type": "application/json" } });

const DAILY = parseInt(Deno.env.get("AI_DAILY_LIMIT") || "30", 10);        // Aufrufe pro Nutzer und Tag
const MODEL_QUICK = Deno.env.get("AI_MODEL_QUICK") || "claude-haiku-5-5";    // günstig
const MODEL_SMART = Deno.env.get("AI_MODEL_SMART") || "claude-haiku-5-5";    // bei Bedarf "claude-sonnet-5-5"

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST erforderlich" }, 405);
  try {
    const url = Deno.env.get("SUPABASE_URL")!;
    const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
    const svc = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const key = Deno.env.get("ANTHROPIC_API_KEY");
    if (!key) return json({ error: "KI nicht eingerichtet" }, 503);

    // 1) Nur angemeldete Nutzer (der anon-Schlüssel allein reicht nicht)
    const auth = req.headers.get("Authorization") || "";
    const user = await createClient(url, anon, { global: { headers: { Authorization: auth } } }).auth.getUser();
    const uid = user.data?.user?.id;
    if (!uid) return json({ error: "Bitte anmelden" }, 401);

    // 2) Tageslimit pro Nutzer
    const admin = createClient(url, svc);
    const day = new Date().toISOString().slice(0, 10);
    const cur = await admin.from("ai_usage").select("n").eq("user_id", uid).eq("day", day).maybeSingle();
    const n = (cur.data?.n || 0) + 1;
    if (n > DAILY) return json({ error: "Tageslimit erreicht", limit: DAILY }, 429);
    await admin.from("ai_usage").upsert({ user_id: uid, day, n });

    // 3) Eingabe prüfen
    const body = await req.json();
    const prompt = String(body.prompt || "").slice(0, 20000);
    const images = Array.isArray(body.images) ? body.images.slice(0, 6) : [];
    if (!prompt) return json({ error: "Leere Anfrage" }, 400);
    let bytes = 0;
    const content: unknown[] = [];
    for (const im of images) {
      const data = String(im?.data || "");
      const mt = String(im?.media_type || "image/jpeg");
      bytes += data.length;
      if (!/^image\/(jpeg|png|webp|gif)$/.test(mt) || bytes > 12_000_000) return json({ error: "Bild ungültig oder zu groß" }, 400);
      content.push({ type: "image", source: { type: "base64", media_type: mt, data } });
    }
    content.push({ type: "text", text: prompt });

    // 4) Claude fragen
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({
        model: body.tier === "smart" ? MODEL_SMART : MODEL_QUICK,
        max_tokens: 4000,
        system: "Antworte ausschließlich mit gültigem JSON, ohne Erklärung und ohne Codeblock.",
        messages: [{ role: "user", content }],
      }),
    });
    if (!r.ok) return json({ error: "KI-Fehler", status: r.status }, 502);
    const out = await r.json();
    const text = (out.content || []).filter((c: { type: string }) => c.type === "text").map((c: { text: string }) => c.text).join("");
    return json({ text, left: Math.max(0, DAILY - n) });
  } catch (e) {
    return json({ error: "Serverfehler" }, 500);
  }
});
