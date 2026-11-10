(function(){try{var r=localStorage.getItem('gl-vokabeln-v2'),d=null;if(r){var o=JSON.parse(r);if(o&&o.darkMode!==undefined&&o.darkMode!==null)d=!!o.darkMode;}if(d===null)d=!!(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches);var h=document.documentElement;h.setAttribute('data-theme',d?'dark':'light');h.style.backgroundColor=d?'#14171C':'#EEF1F6';h.style.colorScheme=d?'dark':'light';h.classList.add('nt');setTimeout(function(){h.classList.remove('nt');},600);}catch(e){}})();
(function(){var l=document.querySelector('link[href*="styles.css"]');if(l)l.remove();var s=document.createElement('style');s.id='evcss';s.textContent="\n/* layout idea: EasyVocab liquid glass: aurora gradient background, blurred glass cards with a specular bloom, blue-to-violet primary, heavy buttons, widths 460 / 700 / 960 */\n:root{--bg:#E8F2FF;--aur1:rgba(34,211,238,.50);--aur2:rgba(59,130,246,.42);--aur3:rgba(139,92,246,.36);--ink:#0F1B33;--ink2:#46566F;--line:rgba(15,27,51,.12);--glass:rgba(255,255,255,.78);--glass-soft:rgba(255,255,255,.55);--glass-line:rgba(255,255,255,.85);--bloom:rgba(255,255,255,.75);--glass-shadow:0 8px 32px rgba(40,80,160,.12),inset 0 1px 0 rgba(255,255,255,.9);--surface:#FFFFFF;--accent:#2563EB;--accent-ink:#FFFFFF;--accent-soft:rgba(59,130,246,.14);--grad:linear-gradient(135deg,#22B8E8 0%,#3B82F6 50%,#8B5CF6 100%);--pri:linear-gradient(135deg,#2F7BF5 0%,#8A5CF6 100%);--good:#14803F;--good-soft:rgba(34,197,94,.18);--bad:#B42318;--bad-soft:rgba(239,68,68,.16);--warn:#9A5B07;--warn-soft:rgba(245,158,11,.2);--font:-apple-system,BlinkMacSystemFont,\"SF Pro Text\",\"Segoe UI\",Roboto,system-ui,sans-serif}\n@media (prefers-color-scheme:dark){:root:not([data-theme=\"light\"]){--bg:#070D1C;--aur1:rgba(34,211,238,.22);--aur2:rgba(59,130,246,.26);--aur3:rgba(139,92,246,.28);--ink:#EAF0FF;--ink2:#9FB0D0;--line:rgba(255,255,255,.14);--glass:rgba(255,255,255,.07);--glass-soft:rgba(255,255,255,.05);--glass-line:rgba(255,255,255,.14);--bloom:rgba(255,255,255,.16);--glass-shadow:0 8px 32px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.1);--surface:#121B30;--accent:#7FB0FF;--accent-ink:#FFFFFF;--accent-soft:rgba(96,150,255,.2);--good:#5BD08A;--good-soft:rgba(34,197,94,.2);--bad:#FF8E80;--bad-soft:rgba(239,68,68,.22);--warn:#F2B866;--warn-soft:rgba(245,158,11,.2);color-scheme:dark}}\n:root[data-theme=\"dark\"]{--bg:#070D1C;--aur1:rgba(34,211,238,.22);--aur2:rgba(59,130,246,.26);--aur3:rgba(139,92,246,.28);--ink:#EAF0FF;--ink2:#9FB0D0;--line:rgba(255,255,255,.14);--glass:rgba(255,255,255,.07);--glass-soft:rgba(255,255,255,.05);--glass-line:rgba(255,255,255,.14);--bloom:rgba(255,255,255,.16);--glass-shadow:0 8px 32px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.1);--surface:#121B30;--accent:#7FB0FF;--accent-ink:#FFFFFF;--accent-soft:rgba(96,150,255,.2);--good:#5BD08A;--good-soft:rgba(34,197,94,.2);--bad:#FF8E80;--bad-soft:rgba(239,68,68,.22);--warn:#F2B866;--warn-soft:rgba(245,158,11,.2);color-scheme:dark}\n*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}\nhtml,body{height:100%;margin:0}\nbody{background:var(--bg);color:var(--ink);font-family:var(--font);font-size:calc(16px*var(--fs,1));line-height:1.4;overflow-x:hidden}\nbody::before{content:\"\";position:fixed;inset:-25%;z-index:-1;pointer-events:none;background:radial-gradient(45% 40% at 18% 14%,var(--aur1),transparent 70%),radial-gradient(45% 40% at 84% 22%,var(--aur2),transparent 70%),radial-gradient(50% 45% at 68% 88%,var(--aur3),transparent 70%),radial-gradient(40% 35% at 10% 80%,var(--aur2),transparent 70%);animation:aurora 14s ease-in-out infinite alternate}\n@keyframes aurora{0%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(3%,-2%,0) scale(1.06)}100%{transform:translate3d(-3%,3%,0) scale(1.1)}}\nbutton,select{font:inherit;color:inherit;cursor:pointer}\n#app{min-height:100%;display:flex;flex-direction:column;align-items:center;padding-bottom:max(64px,env(safe-area-inset-bottom))}\n.hdr{width:100%;position:sticky;top:0;z-index:10;padding:max(10px,env(safe-area-inset-top)) 16px 10px;display:flex;justify-content:center}\n.hin{width:100%;max-width:460px;display:flex;align-items:center;gap:8px}\n.logo{font-weight:800;font-size:calc(20px*var(--fs,1));letter-spacing:-.02em}\n.gradient-text{background:var(--pri);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}\n.sp{flex:1}\nmain{width:100%;max-width:460px;padding:12px 16px 0;display:flex;flex-direction:column;align-items:center;gap:12px}\n@media (min-width:768px){.hin,main{max-width:700px}}\n@media (min-width:1024px){.hin,main{max-width:960px}}\n.glass{background:linear-gradient(135deg,var(--bloom) 0%,transparent 42%),var(--glass);border:1px solid var(--glass-line);border-radius:20px;box-shadow:var(--glass-shadow);-webkit-backdrop-filter:blur(44px) saturate(2.4);backdrop-filter:blur(44px) saturate(2.4)}\n.gtap{cursor:pointer;transition:transform .15s}\n.gtap:active{transform:scale(.96)}\n@media (hover:hover){.gtap:hover{transform:scale(1.035)}.gtap:active{transform:scale(.96)}}\n.gbadge{background:var(--glass-soft);border:1px solid var(--glass-line);border-radius:999px;padding:6px 12px;font-size:calc(13px*var(--fs,1));font-weight:800;display:flex;align-items:center;gap:6px;-webkit-backdrop-filter:blur(28px) saturate(2);backdrop-filter:blur(28px) saturate(2)}\n.gbtn{width:40px;height:40px;border-radius:999px;border:1px solid var(--glass-line);background:var(--glass-soft);-webkit-backdrop-filter:blur(28px) saturate(2);backdrop-filter:blur(28px) saturate(2);display:grid;place-items:center;font-size:calc(19px*var(--fs,1));line-height:1;padding:0;font-weight:800;transition:transform .15s}\n.gbtn:active{transform:scale(.94)}\n.btn{border:1px solid var(--glass-line);background:linear-gradient(135deg,var(--bloom) 0%,transparent 55%),var(--glass-soft);border-radius:16px;padding:13px 20px;min-height:48px;font-weight:800;font-size:calc(15px*var(--fs,1));-webkit-backdrop-filter:blur(28px) saturate(2);backdrop-filter:blur(28px) saturate(2);transition:transform .15s,filter .15s}\n@media (hover:hover){.btn:hover{transform:scale(1.035)}}\n.btn:active{transform:scale(.96)}\n.btn.pri{background:var(--pri);color:#fff;border-color:transparent;box-shadow:0 6px 20px rgba(80,100,245,.35)}\n.btn.bad{background:var(--bad-soft);color:var(--bad);border-color:transparent}\n.btn.good{background:var(--good-soft);color:var(--good);border-color:transparent}\n.btn.full{width:100%}\n.pad{padding:20px}\n.w{width:100%}\n.lab{font-size:calc(11px*var(--fs,1));font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--ink2)}\n.hero .hd{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}\n.hero .n{font-size:calc(28px*var(--fs,1));font-weight:800;font-variant-numeric:tabular-nums;line-height:1}\n.hero .n small{font-size:calc(18px*var(--fs,1));color:var(--ink2);font-weight:600}\n.prog{height:12px;background:var(--glass-soft);border:1px solid var(--glass-line);border-radius:999px;overflow:hidden}\n.prog.thin{height:8px}\n.prog i{display:block;height:100%;background:var(--grad);border-radius:999px;box-shadow:0 0 14px rgba(80,120,255,.55);transition:width .3s}\n.hero p{margin:10px 0 0;font-size:calc(12px*var(--fs,1));font-weight:800;color:var(--ink2)}\n.grid{width:100%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}\n@media (min-width:1024px){.grid{grid-template-columns:repeat(4,minmax(0,1fr))}.tile.lg2{grid-column:span 2}}\n.tile{display:flex;align-items:center;gap:12px;padding:12px;text-align:left;color:inherit}\n.tile .ico{font-size:calc(26px*var(--fs,1));line-height:1}\n.tile .tt{min-width:0}\n.tile b{display:block;font-size:calc(14px*var(--fs,1));font-weight:800;line-height:1.15;overflow-wrap:anywhere}\n.tile small{display:block;font-size:calc(11px*var(--fs,1));color:var(--ink2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.dt{width:100%;padding:0 14px}\n.dt summary{cursor:pointer;padding:12px 0;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:10px}\n.dt summary::-webkit-details-marker{display:none}\n.dt summary .car{color:var(--ink2);transition:transform .2s;display:inline-block}\n.dt[open] summary .car{transform:rotate(180deg)}\n.dt .body{padding:0 0 12px}\n.week{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;align-items:end;height:110px}\n.week div{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:3px;height:100%;font-size:calc(12px*var(--fs,1));color:var(--ink2);font-variant-numeric:tabular-nums;font-weight:600}\n.week i{display:block;width:100%;max-width:26px;background:var(--grad);border-radius:6px 6px 3px 3px}\n.week i.z{background:var(--line)}\n.cnt{width:100%;display:flex;justify-content:flex-end;font-size:calc(14px*var(--fs,1));font-weight:600;color:var(--ink2);font-variant-numeric:tabular-nums}\n.stage{width:100%;perspective:1200px}\n.flip{position:relative;height:300px;transition:transform .5s;transform-style:preserve-3d;cursor:pointer}\n.flip.flipped{transform:rotateY(180deg)}\n.face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:28px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:24px;text-align:center;background:linear-gradient(135deg,var(--bloom) 0%,transparent 42%),var(--glass);border:1px solid var(--glass-line);box-shadow:var(--glass-shadow);-webkit-backdrop-filter:blur(44px) saturate(2.4);backdrop-filter:blur(44px) saturate(2.4)}\n.face.back{transform:rotateY(180deg);background:linear-gradient(135deg,var(--bloom) 0%,transparent 42%),var(--accent-soft)}\n.lang{font-size:calc(11px*var(--fs,1));letter-spacing:.16em;text-transform:uppercase;color:var(--ink2);font-weight:800}\n.word{font-size:calc(30px*var(--fs,1));line-height:1.15;font-weight:800;text-wrap:balance;overflow-wrap:anywhere}\n.word.sm{font-size:calc(24px*var(--fs,1))}\n.hint{font-size:calc(13px*var(--fs,1));color:var(--ink2);font-weight:500}\n.spk{border:1px solid var(--glass-line);background:var(--glass-soft);border-radius:999px;padding:6px 14px;font-size:calc(14px*var(--fs,1));color:var(--accent);font-weight:800}\n.row2{width:100%;display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.q{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;text-align:center;min-height:180px;padding:24px 20px;border-radius:28px}\n.opts{width:100%;display:grid;gap:8px}\n@media (min-width:768px){.opts{grid-template-columns:1fr 1fr}}\n.opt{display:flex;align-items:center;gap:12px;border:1.5px solid var(--glass-line);background:linear-gradient(135deg,var(--bloom) 0%,transparent 55%),var(--glass);border-radius:18px;padding:14px;text-align:left;font-size:calc(16px*var(--fs,1));font-weight:700;min-height:56px;-webkit-backdrop-filter:blur(28px) saturate(2);backdrop-filter:blur(28px) saturate(2)}\n.opt .kn{flex:none;width:26px;height:26px;border-radius:8px;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center;font-size:calc(13px*var(--fs,1));font-weight:800}\n.opt.right{border-color:var(--good);background:var(--good-soft);color:var(--good)}\n.opt.wrong{border-color:var(--bad);background:var(--bad-soft);color:var(--bad)}\ninput.in{width:100%;font:inherit;font-size:calc(18px*var(--fs,1));font-weight:600;padding:14px;border-radius:16px;border:1.5px solid var(--glass-line);background:var(--glass);color:var(--ink)}\ninput.in.right{border-color:var(--good);background:var(--good-soft)}\ninput.in.wrong{border-color:var(--bad);background:var(--bad-soft)}\ninput.in:focus-visible,button:focus-visible,select:focus-visible,summary:focus-visible{outline:3px solid var(--accent);outline-offset:2px}\n.err{color:var(--bad);font-size:calc(14px*var(--fs,1));margin-top:6px;font-weight:600}\n.sheet{width:100%;border-radius:22px;padding:16px;display:flex;flex-direction:column;gap:10px}\n.sheet.right{background:var(--good-soft);color:var(--good)}\n.sheet.wrong{background:var(--bad-soft);color:var(--bad)}\n.sheet b{font-size:calc(18px*var(--fs,1));font-weight:800}\n.sheet .sol{color:var(--ink);font-size:calc(17px*var(--fs,1));font-weight:600}\n.sheet .btn{background:var(--ink);color:var(--bg);border-color:transparent}\n.link{background:none;border:0;color:var(--ink2);text-decoration:underline;font-size:calc(14px*var(--fs,1));padding:4px;align-self:flex-start;font-weight:600}\n.center{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px}\n.big-ico{font-size:calc(40px*var(--fs,1));line-height:1}\n.center h2{margin:0;font-size:calc(20px*var(--fs,1));font-weight:800}\n.center p{margin:0;font-size:calc(14px*var(--fs,1));color:var(--ink2);font-weight:600}\n.res .big{font-size:calc(52px*var(--fs,1));font-weight:800;line-height:1;background:var(--pri);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}\n.goal{width:100%;background:var(--good-soft);color:var(--good);border-radius:18px;padding:12px 14px;font-weight:800;text-align:center;font-size:calc(14px*var(--fs,1))}\n.dirs{width:100%;display:grid;gap:8px}\n.dirb{display:flex;align-items:center;justify-content:space-between;text-align:left;padding:14px 16px;border:1.5px solid var(--glass-line);background:linear-gradient(135deg,var(--bloom) 0%,transparent 55%),var(--glass);border-radius:18px;font-weight:800;-webkit-backdrop-filter:blur(28px) saturate(2);backdrop-filter:blur(28px) saturate(2)}\n.dirb.on{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}\n.fld{width:100%;display:flex;flex-direction:column;gap:6px}\n.fld select,.set select{border:1px solid var(--glass-line);background:var(--glass);border-radius:14px;padding:12px;color:var(--ink);font-weight:600}\n.set{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 0;border-top:1px solid var(--line);font-weight:600}\n.set:first-of-type{border-top:0}\n.wl{display:flex;align-items:center;gap:10px;padding:9px 0;border-top:1px solid var(--line);font-size:calc(14px*var(--fs,1))}\n.wl span:first-child{flex:1.1;font-weight:800}\n.wl span:nth-child(2){flex:1.2;color:var(--ink2);font-weight:500}\n.dots{flex:none;display:flex;gap:3px}\n.dots i{width:7px;height:7px;border-radius:50%;background:var(--line)}\n.dots i.f{background:var(--accent)}\n.chip{display:inline-block;font-size:calc(11px*var(--fs,1));font-weight:800;background:var(--warn-soft);color:var(--warn);border-radius:999px;padding:1px 8px;margin-left:6px}\n.chip.ok{background:var(--good-soft);color:var(--good)}\n.toast{position:fixed;top:16px;left:50%;transform:translateX(-50%) translateY(-24px);opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;background:var(--ink);color:var(--bg);padding:10px 16px;border-radius:999px;font-size:calc(14px*var(--fs,1));font-weight:700;z-index:50;max-width:90vw;text-align:center}\n.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}\n@media (max-width:768px){.glass,.face{-webkit-backdrop-filter:blur(24px) saturate(1.8);backdrop-filter:blur(24px) saturate(1.8)}}\n@media (prefers-reduced-motion:reduce){body::before{animation:none}.flip,.prog i,.toast,.gtap,.btn{transition:none}}\n\n.ex{font-size:calc(13px*var(--fs,1));font-weight:500;font-style:italic;color:var(--ink2);max-width:92%;overflow-wrap:anywhere}\n.nx{font-size:calc(13px*var(--fs,1));font-weight:700;color:var(--ink2)}\n.sheet .ex,.sheet .nx{color:var(--ink)}\ntextarea.ta{width:100%;font:inherit;font-size:calc(13px*var(--fs,1));padding:10px;border-radius:14px;border:1px solid var(--glass-line);background:var(--glass);color:var(--ink);resize:vertical}\ninput.in[type=search]{-webkit-appearance:none;appearance:none}\n.banner{background:var(--warn-soft);color:var(--warn);font-weight:700;font-size:calc(14px*var(--fs,1));text-align:center}\n.resume{display:flex;flex-direction:column;align-items:flex-start;gap:2px;text-align:left;font-weight:800;color:inherit}\n.resume small{font-weight:500;color:var(--ink2);font-size:calc(13px*var(--fs,1))}\n.hd2{display:flex;justify-content:space-between;align-items:center;gap:8px}\n.col{display:flex;flex-direction:column;gap:10px}\n.step{display:flex;gap:12px;padding:10px 0;border-top:1px solid var(--line)}\n.step:first-child{border-top:0}\n.step b{flex:none;width:28px;height:28px;border-radius:9px;background:var(--pri);color:#fff;display:grid;place-items:center;font-weight:800}\n.step span{display:flex;flex-direction:column}\n.step small{color:var(--ink2);font-size:calc(13px*var(--fs,1));font-weight:500}\n.x{flex:none;border:0;background:var(--bad-soft);color:var(--bad);width:28px;height:28px;border-radius:8px;font-weight:800;font-size:calc(16px*var(--fs,1));line-height:1;padding:0}\n.chk{display:flex;align-items:center;gap:10px;padding:6px 0;font-weight:600;font-size:calc(15px*var(--fs,1))}\n.chk input{width:20px;height:20px;accent-color:var(--accent)}\n.hm{display:grid;grid-template-columns:repeat(7,1fr);gap:5px}\n.hm i{aspect-ratio:1;border-radius:6px;background:var(--line);display:block}\n.hm i.h1{background:var(--accent-soft)}\n.hm i.h2{background:var(--accent);opacity:.55}\n.hm i.h3{background:var(--accent)}\n.hm i.hf{background:transparent;border:1px dashed var(--line)}\n.hmh{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;font-size:calc(11px*var(--fs,1));color:var(--ink2);text-align:center;font-weight:700}\n.stack{display:flex;height:16px;border-radius:999px;overflow:hidden;background:var(--line)}\n.stack i{display:block;height:100%}\n.lgd{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:calc(12px*var(--fs,1));color:var(--ink2);font-weight:600}\n.lgd em{display:inline-block;width:9px;height:9px;border-radius:3px;margin-right:5px}\n.spark{width:100%;height:auto}\n.sgrid{width:100%;display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.sg{padding:14px;display:flex;flex-direction:column;gap:4px}\n.sg b{font-size:calc(26px*var(--fs,1));font-weight:800;line-height:1}\n.sg small{font-size:calc(12px*var(--fs,1));color:var(--ink2);font-weight:600}\n.orow{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;padding:12px 0;border-top:1px solid var(--line);font-weight:700;font-size:calc(15px*var(--fs,1))}\n.orow:first-child{border-top:0}\n.orow>span{display:flex;flex-direction:column;flex:1;min-width:150px}\n.orow small{font-weight:500;color:var(--ink2);font-size:calc(12px*var(--fs,1))}\n.orow .btn{min-height:40px;padding:8px 14px}\n.tg{flex:none;width:50px;height:30px;border-radius:999px;border:1px solid var(--glass-line);background:var(--line);position:relative;padding:0;transition:background .2s}\n.tg::after{content:\"\";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;transition:transform .2s;box-shadow:0 1px 3px rgba(0,0,0,.3)}\n.tg.on{background:var(--pri);box-shadow:0 0 14px rgba(80,120,255,.55)}\n.tg.on::after{transform:translateX(20px)}\n.chs{display:flex;gap:6px;flex-wrap:wrap}\n.cb{padding:8px 14px;border-radius:12px;border:1px solid var(--glass-line);background:var(--glass-soft);font-weight:800;font-size:calc(14px*var(--fs,1));min-height:40px}\n.cb.on{background:var(--pri);color:#fff;border-color:transparent}\n.adv{border-top:1px solid var(--line);width:100%}\n.adv summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;padding:12px 0;font-weight:700}\n.adv summary::-webkit-details-marker{display:none}\n.adv summary .car{transition:transform .2s;display:inline-block}\n.adv[open] summary .car{transform:rotate(180deg)}\n.hintline{width:100%;text-align:center;font-weight:800;letter-spacing:.12em;font-size:calc(20px*var(--fs,1));color:var(--accent)}\n@media (min-width:768px){.grid{grid-template-columns:repeat(4,minmax(0,1fr))}.tile.w2{grid-column:span 2}}\n/* liquid glass v2: gradient rims, deeper blur, floating orbs, floating tab bar; iPad gets the strongest settings */\n:root{--blur:44px;--sat:2.4;--rad:20px;--rim1:rgba(255,255,255,.95);--rim2:rgba(255,255,255,.1);--pill:rgba(255,255,255,.72);--glass-shadow:0 12px 40px rgba(40,70,160,.14),0 2px 8px rgba(40,70,160,.08),inset 0 1px 0 rgba(255,255,255,.9),inset 0 -1px 0 rgba(255,255,255,.25),inset 0 0 28px rgba(255,255,255,.2)}\n@media (prefers-color-scheme:dark){:root:not([data-theme=\"light\"]){--rim1:rgba(255,255,255,.38);--rim2:rgba(255,255,255,.03);--pill:rgba(255,255,255,.17);--glass-shadow:0 14px 44px rgba(0,0,0,.45),0 2px 8px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.14),inset 0 -1px 0 rgba(255,255,255,.04),inset 0 0 28px rgba(255,255,255,.05)}}\n:root[data-theme=\"dark\"]{--rim1:rgba(255,255,255,.38);--rim2:rgba(255,255,255,.03);--pill:rgba(255,255,255,.17);--glass-shadow:0 14px 44px rgba(0,0,0,.45),0 2px 8px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.14),inset 0 -1px 0 rgba(255,255,255,.04),inset 0 0 28px rgba(255,255,255,.05)}\n@media (min-width:768px){:root{--blur:72px;--sat:2.9;--rad:28px}:root:not([data-theme=\"dark\"]){--aur1:rgba(34,211,238,.62);--aur2:rgba(59,130,246,.55);--aur3:rgba(139,92,246,.5)}}\n.glass{position:relative;border-radius:var(--rad);-webkit-backdrop-filter:blur(var(--blur)) saturate(var(--sat)) brightness(1.04);backdrop-filter:blur(var(--blur)) saturate(var(--sat)) brightness(1.04)}\n.glass::before{content:\"\";position:absolute;inset:0;border-radius:inherit;padding:1.2px;background:linear-gradient(135deg,var(--rim1) 0%,var(--rim2) 38%,var(--rim2) 62%,var(--rim1) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0);mask-composite:exclude;pointer-events:none}\n.orbs{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden}\n.orbs i{position:absolute;border-radius:50%;will-change:transform}\n.orbs i:nth-child(1){width:55vmin;height:55vmin;left:6%;top:12%;background:radial-gradient(circle at 35% 30%,#7DE7FF,rgba(125,231,255,0) 68%);opacity:.55;animation:o1 19s ease-in-out infinite alternate}\n.orbs i:nth-child(2){width:62vmin;height:62vmin;right:-8%;top:34%;background:radial-gradient(circle at 40% 35%,#A78BFA,rgba(167,139,250,0) 68%);opacity:.5;animation:o2 23s ease-in-out infinite alternate}\n.orbs i:nth-child(3){width:48vmin;height:48vmin;left:28%;bottom:-6%;background:radial-gradient(circle at 40% 40%,#60A5FA,rgba(96,165,250,0) 68%);opacity:.55;animation:o3 21s ease-in-out infinite alternate}\n@keyframes o1{to{transform:translate(12vmin,10vmin) scale(1.15)}}\n@keyframes o2{to{transform:translate(-14vmin,-8vmin) scale(1.1)}}\n@keyframes o3{to{transform:translate(10vmin,-12vmin) scale(1.2)}}\n@media (prefers-color-scheme:dark){:root:not([data-theme=\"light\"]) .orbs{opacity:.5}}\n:root[data-theme=\"dark\"] .orbs{opacity:.5}\n#app{padding-bottom:max(124px,env(safe-area-inset-bottom))}\n.tabbar{position:fixed;left:50%;bottom:max(14px,env(safe-area-inset-bottom));transform:translateX(-50%);width:min(calc(100% - 28px),520px);height:70px;padding:6px;display:flex;z-index:30;touch-action:none;-webkit-user-select:none;user-select:none;--rad:999px}\n.tab{flex:1;position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;border:0;background:none;color:var(--ink2);font-size:calc(10.5px*var(--fs,1));font-weight:800;padding:0;min-width:0}\n.tab .ti{font-size:calc(21px*var(--fs,1));line-height:1;filter:grayscale(.35);transition:transform .3s,filter .3s}\n.tab.on{color:var(--accent)}\n.tab.on .ti{filter:none;transform:scale(1.1)}\n.tpill{position:absolute;top:6px;bottom:6px;left:6px;width:calc((100% - 12px)/5);border-radius:999px;background:var(--pill);box-shadow:0 4px 16px rgba(40,70,160,.2),inset 0 1px 0 rgba(255,255,255,.9),inset 0 -1px 0 rgba(255,255,255,.3);transition:transform .5s cubic-bezier(.3,1.5,.5,1)}\n.tpill.drag{transition:none}\n@media (min-width:768px){.tabbar{height:78px;width:min(calc(100% - 40px),640px)}.tab{font-size:calc(12px*var(--fs,1))}.tab .ti{font-size:calc(24px*var(--fs,1))}}\nmain.sl{animation:slL .36s cubic-bezier(.2,.8,.2,1)}\nmain.sr{animation:slR .36s cubic-bezier(.2,.8,.2,1)}\n@keyframes slL{from{opacity:0;transform:translateX(30px)}}\n@keyframes slR{from{opacity:0;transform:translateX(-30px)}}\n.pt{width:100%;display:flex;flex-direction:column;gap:2px;padding:4px 6px 0}\n.pt.row{flex-direction:row;align-items:center;justify-content:space-between;gap:12px}\n.pt h1{margin:0;font-size:calc(30px*var(--fs,1));font-weight:800;letter-spacing:-.02em;line-height:1.1}\n.pt small{color:var(--ink2);font-size:calc(13px*var(--fs,1));font-weight:600}\n.btn.sm{min-height:40px;padding:8px 14px;font-size:calc(14px*var(--fs,1));border-radius:14px}\n.hero2{padding:16px;display:flex;flex-direction:column;gap:14px}\n.hr{display:flex;align-items:center;gap:14px}\n.ringw{position:relative;width:72px;height:72px;flex:none}\n.ring{width:72px;height:72px;display:block}\n.rt{fill:none;stroke:var(--line);stroke-width:7}\n.rf{fill:none;stroke:url(#rg);stroke-width:7;stroke-linecap:round;transition:stroke-dashoffset .6s}\n.ringw b{position:absolute;inset:0;display:grid;place-items:center;font-size:calc(20px*var(--fs,1));font-weight:800}\n.ht{display:flex;flex-direction:column;gap:2px;min-width:0}\n.ht strong{font-size:calc(18px*var(--fs,1));font-weight:800}\n.ht small{color:var(--ink2);font-size:calc(13px*var(--fs,1));font-weight:600}\n.lrow{display:flex;align-items:center;gap:12px;padding:12px 14px;text-align:left;color:inherit;width:100%}\n.li{font-size:calc(22px*var(--fs,1));flex:none}\n.lt{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}\n.lt b{font-weight:800;font-size:calc(15px*var(--fs,1))}\n.lt small{font-size:calc(12.5px*var(--fs,1));color:var(--ink2);font-weight:600}\n.lt .prog{margin-top:6px}\n.chev{color:var(--ink2);font-size:calc(24px*var(--fs,1));flex:none;line-height:1}\n.banner{padding:12px 14px}\n.tile{padding:10px 12px}\n.tile.wl2{grid-column:span 2}\n.sect{width:100%;display:flex;flex-direction:column;gap:6px}\n.st{font-size:calc(12px*var(--fs,1));font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--ink2);padding:0 8px}\n.grp{overflow:hidden}\n.srow{display:flex;align-items:center;gap:12px;padding:11px 14px;border-top:1px solid var(--line)}\n.srow:first-child{border-top:0}\n.sic{flex:none;width:30px;height:30px;border-radius:9px;display:grid;place-items:center;font-size:calc(16px*var(--fs,1));box-shadow:inset 0 1px 0 rgba(255,255,255,.35)}\n.sl{flex:1;min-width:0;display:flex;flex-direction:column}\n.sl b{font-weight:700;font-size:calc(15px*var(--fs,1))}\n.sl small{font-size:calc(12px*var(--fs,1));color:var(--ink2);font-weight:500}\n.segc{flex:none;display:flex;background:var(--line);border-radius:11px;padding:2px;gap:2px}\n.segc button{border:0;background:transparent;padding:6px 9px;border-radius:9px;font-weight:800;font-size:calc(13px*var(--fs,1));min-width:32px;color:var(--ink2)}\n.segc button.on{background:var(--surface);color:var(--ink);box-shadow:0 1px 4px rgba(0,0,0,.2)}\n.more{border-top:1px solid var(--line)}\n.more summary{padding:12px 14px;font-weight:700;display:flex;justify-content:space-between;cursor:pointer;list-style:none;color:var(--accent)}\n.more summary::-webkit-details-marker{display:none}\n.more summary .car{transition:transform .2s;display:inline-block}\n.more[open] summary .car{transform:rotate(180deg)}\n.paste{padding:12px 14px;display:flex;flex-direction:column;gap:8px;border-top:1px solid var(--line)}\n.sn{margin:0;padding:0 8px;font-size:calc(12px*var(--fs,1));color:var(--ink2);font-weight:500}\n@media (prefers-reduced-motion:reduce){.orbs i,main.sl,main.sr{animation:none}.tpill,.tab .ti,.rf{transition:none}}\n/* v3: water tab bar, compact stats, status/AZ words, planner chips, ink canvas, bigger logo */\n.logo{font-size:calc(27px*var(--fs,1));letter-spacing:-.02em}\n@media (min-width:768px){.logo{font-size:calc(34px*var(--fs,1))}}\n.tpill{left:0;transition:none!important;will-change:transform;-webkit-backdrop-filter:blur(10px) saturate(2.2) brightness(1.12);backdrop-filter:blur(10px) saturate(2.2) brightness(1.12);box-shadow:0 6px 20px rgba(40,70,160,.22),inset 0 1px 0 rgba(255,255,255,.95),inset 0 -2px 6px rgba(255,255,255,.35),inset 0 0 14px rgba(255,255,255,.3)}\n.tab .ti{transition:filter .25s;transform-origin:50% 60%;will-change:transform}\n.tab.on .ti{transform:none}\n.segc.wide{width:100%;display:grid;grid-template-columns:repeat(3,1fr);background:var(--glass-soft);border:1px solid var(--glass-line);padding:3px}\n.segc.wide button{padding:9px 6px;font-size:calc(14px*var(--fs,1))}\n.letter{font-size:calc(12px*var(--fs,1));font-weight:800;color:var(--accent);padding:10px 4px 2px;letter-spacing:.1em}\n.dot{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:8px;vertical-align:0}\n.sgrid{width:100%;display:grid;grid-template-columns:repeat(2,1fr);gap:8px}\n@media (min-width:768px){.sgrid{grid-template-columns:repeat(4,1fr)}}\n.sg{padding:12px 14px;gap:2px}\n.sg b{font-size:calc(22px*var(--fs,1))}\n.lg4{display:grid;grid-template-columns:1fr 1fr;gap:10px 14px;font-size:calc(14px*var(--fs,1));font-weight:700}\n.lg4 small{display:block;font-weight:500;color:var(--ink2);font-size:calc(11.5px*var(--fs,1));margin-left:18px}\n.two{width:100%;display:grid;gap:8px;grid-template-columns:1fr}\n@media (min-width:768px){.two{grid-template-columns:1fr 1fr}}\n.week{height:92px}\n.hm{max-width:260px;gap:4px}\n.hmh{max-width:260px;gap:4px}\n.chips{display:flex;flex-wrap:wrap;gap:6px}\n.chip2{border:1px solid var(--glass-line);background:var(--glass-soft);border-radius:999px;padding:8px 13px;font-weight:800;font-size:calc(13px*var(--fs,1));min-height:38px;color:var(--ink2)}\n.chip2.on{background:var(--pri);color:#fff;border-color:transparent;box-shadow:0 4px 14px rgba(80,100,245,.3)}\n.inkw{width:100%;padding:0;overflow:hidden;position:relative}\n.inkw canvas{display:block;width:100%;height:210px;touch-action:none;cursor:crosshair}\n@media (min-width:768px){.inkw canvas{height:300px}}\n.inkhint{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);text-align:center;color:var(--ink2);opacity:.65;font-weight:600;font-size:calc(14px*var(--fs,1));pointer-events:none;transition:opacity .2s}\n.inkw.has .inkhint{opacity:0}\n.inkbar{position:absolute;right:10px;top:10px;display:flex;gap:6px}\n.x2{border:1px solid var(--glass-line);background:var(--glass-soft);border-radius:12px;min-width:38px;height:36px;padding:0 12px;font-weight:800;font-size:calc(14px*var(--fs,1))}\n/* v4: living canvas background, range slider planner, compact stats */\n.sgrid3{width:100%;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}\n.sgrid3 .sg b{font-size:calc(22px*var(--fs,1))}\n.lg4{grid-template-columns:repeat(4,auto);justify-content:space-between;gap:8px;font-size:calc(13px*var(--fs,1))}\n@media (max-width:520px){.lg4{grid-template-columns:1fr 1fr}}\n.rng{position:relative;height:36px;margin:0 2px}\n.rtrack{position:absolute;left:14px;right:14px;top:15px;height:6px;border-radius:3px;background:var(--line)}\n.rtrack i{position:absolute;top:0;height:100%;border-radius:3px;background:var(--grad)}\n.rng input[type=range]{position:absolute;left:0;top:0;width:100%;height:36px;margin:0;background:none;pointer-events:none;-webkit-appearance:none;appearance:none}\n.rng input[type=range]::-webkit-slider-runnable-track{background:transparent;height:36px}\n.rng input[type=range]::-moz-range-track{background:transparent;height:36px}\n.rng input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;pointer-events:auto;width:28px;height:28px;margin-top:4px;border-radius:50%;background:#fff;border:2px solid var(--accent);box-shadow:0 3px 10px rgba(40,70,160,.3);cursor:grab}\n.rng input[type=range]::-moz-range-thumb{pointer-events:auto;width:24px;height:24px;border-radius:50%;background:#fff;border:2px solid var(--accent);box-shadow:0 3px 10px rgba(40,70,160,.3);cursor:grab}\ninput.in.big{font-size:calc(24px*var(--fs,1));font-weight:700;text-align:center;min-height:68px;padding:16px;border-radius:20px}\n@media (min-width:768px){input.in.big{font-size:calc(32px*var(--fs,1));min-height:104px;border-radius:26px}}\n/* v5: orbs with preset colours, practice/today fill, planner rows, word rows, swatches, stronger glass */\n:root{--o1:#22D3EE;--o2:#3B82F6;--o3:#8B5CF6}\n.orbs i:nth-child(1){background:radial-gradient(circle at 35% 30%,var(--o1),transparent 68%)}\n.orbs i:nth-child(2){background:radial-gradient(circle at 40% 35%,var(--o3),transparent 68%)}\n.orbs i:nth-child(3){background:radial-gradient(circle at 40% 40%,var(--o2),transparent 68%)}\nhtml.still .orbs i,html.still body::before{animation:none!important}\nmain.tall{min-height:calc(100dvh - 205px)}\n.grow{flex:1}\n.grow .week{flex:1;height:auto;min-height:120px}\n.hero2{padding:18px;gap:16px}\n.ringw.big,.ringw.big .ring{width:96px;height:96px}\n.ringw.big b{font-size:calc(26px*var(--fs,1))}\n.ringw.sm,.ringw.sm .ring{width:64px;height:64px}\n.ringw.sm b{font-size:calc(16px*var(--fs,1))}\n.ringw.sm b small{font-size:calc(10px*var(--fs,1));margin-left:1px}\n.ht strong{font-size:calc(20px*var(--fs,1))}\n.quick{width:100%;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}\n.qk{display:flex;flex-direction:column;align-items:center;gap:4px;padding:14px 8px;color:inherit}\n.qk span{font-size:calc(26px*var(--fs,1));line-height:1}\n.qk b{font-size:calc(14px*var(--fs,1));font-weight:800}\n.bigcard{display:flex;align-items:center;gap:14px;padding:18px 18px;text-align:left;width:100%;color:inherit}\n.bigcard .bi{font-size:calc(36px*var(--fs,1));line-height:1}\n.bigcard .bt{flex:1;display:flex;flex-direction:column;gap:2px}\n.bigcard b{font-size:calc(19px*var(--fs,1));font-weight:800}\n.bigcard small{color:var(--ink2);font-size:calc(13px*var(--fs,1));font-weight:600}\n.grid.fill{flex:1;grid-auto-rows:minmax(112px,1fr)}\n.tile.v{flex-direction:column;align-items:flex-start;justify-content:space-between;gap:10px;padding:16px}\n.tile.v .ico{font-size:calc(34px*var(--fs,1))}\n.tile.v b{font-size:calc(16px*var(--fs,1));white-space:normal}\n.tile.v small{white-space:normal}\n.exam{width:100%;display:grid;grid-template-columns:64px 1fr;gap:6px 14px;padding:16px;align-items:center}\n.exam .exm{display:flex;flex-direction:column;gap:2px;min-width:0}\n.exam .exm small{color:var(--ink2);font-weight:600;font-size:calc(12.5px*var(--fs,1))}\n.exam .exm p{margin:4px 0 0;font-size:calc(13.5px*var(--fs,1));font-weight:700}\n.exb2{grid-column:1/-1;margin-top:8px}\n.dchip{font-size:calc(12px*var(--fs,1));font-weight:800;border-radius:999px;padding:3px 10px;background:var(--good-soft);color:var(--good);white-space:nowrap}\n.exam.soon .dchip{background:var(--warn-soft);color:var(--warn)}\n.exam.urg .dchip{background:var(--bad-soft);color:var(--bad)}\n.exam.past{opacity:.6}\ninput.in.inl{width:auto;flex:0 1 190px;min-height:40px;padding:8px 12px;font-size:calc(16px*var(--fs,1));text-align:right;border-radius:12px}\n.chiprow{justify-content:flex-start}\n.slr{padding-top:2px;padding-bottom:10px;border-top:0}\n.slr .rng{width:100%}\n.wr{display:flex;align-items:center;gap:10px;padding:9px 0;border-top:1px solid var(--line)}\n.wr:first-child{border-top:0}\n.wb{width:4px;align-self:stretch;min-height:30px;border-radius:2px;flex:none}\n.wm{flex:1;min-width:0;display:flex;flex-direction:column}\n.wm b{font-weight:800;font-size:calc(15px*var(--fs,1))}\n.wm small{color:var(--ink2);font-size:calc(13px*var(--fs,1));font-weight:500;overflow-wrap:anywhere}\n.ltag{font-style:normal;font-size:calc(10px*var(--fs,1));font-weight:800;background:var(--accent-soft);color:var(--accent);border-radius:6px;padding:1px 6px;margin-left:8px;vertical-align:1px}\n.segc.wide{grid-template-columns:repeat(4,1fr)}\n.segc.wide button{font-size:calc(13px*var(--fs,1));padding:9px 2px}\n.swrow{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;padding:12px 14px;border-top:1px solid var(--line)}\n.sw{border:0;background:none;display:flex;flex-direction:column;align-items:center;gap:6px;padding:4px 0;color:var(--ink2);font-size:calc(11px*var(--fs,1));font-weight:700}\n.sw i{width:44px;height:44px;border-radius:50%;display:block;box-shadow:inset 0 1px 0 rgba(255,255,255,.6),0 3px 10px rgba(40,70,160,.2);border:2px solid transparent;transition:transform .2s}\n.sw.on i{border-color:var(--ink);transform:scale(1.08)}\n.sw.on{color:var(--ink)}\n.two select{width:100%;border:1px solid var(--glass-line);background:var(--glass);border-radius:14px;padding:12px;color:var(--ink);font-weight:600;min-width:0}\n.glass{box-shadow:var(--glass-shadow)}\n.grid.fill{grid-template-columns:repeat(2,minmax(0,1fr))!important}\n.tile.v .ico{font-size:calc(40px*var(--fs,1))}\n.tile.v b{font-size:calc(17px*var(--fs,1))}\n@media (min-width:768px){.tile.v .ico{font-size:calc(50px*var(--fs,1))}.tile.v b{font-size:calc(20px*var(--fs,1))}.tile.v small{font-size:calc(13px*var(--fs,1))}}\n.grow .week{min-height:0}\n.ringw.sm b{display:flex;align-items:baseline;justify-content:center;gap:1px}\n/* liquid segmented controls */\n.segc{position:relative;touch-action:pan-y;-webkit-user-select:none;user-select:none}\n.segc button{position:relative;z-index:1}\n.segc.liq button.on{background:transparent;box-shadow:none}\n.spill{position:absolute;top:2px;bottom:2px;left:0;border-radius:9px;background:var(--surface);box-shadow:0 3px 10px rgba(30,60,140,.22),inset 0 1px 0 rgba(255,255,255,.9),inset 0 -1px 0 rgba(255,255,255,.25);pointer-events:none;will-change:transform,width;transform-origin:50% 50%}\n.segc.wide .spill{border-radius:11px}\n/* planner form fields: equal width */\ninput.in.inl{width:190px;max-width:52%;flex:0 0 auto;min-width:0;box-sizing:border-box;text-align:right;-webkit-appearance:none;appearance:none;height:40px}\ninput.in.inl::-webkit-date-and-time-value{text-align:right}\n.srow .sl{min-width:0}\n/* v6: sticky glass header, compact today, planner hints, stats chart + badges */\n.hdr{transition:none}\n.hdr::before{content:\"\";position:absolute;inset:0 0 -14px 0;-webkit-backdrop-filter:blur(22px) saturate(1.9);backdrop-filter:blur(22px) saturate(1.9);background:linear-gradient(180deg,var(--glass) 0%,transparent 100%);-webkit-mask-image:linear-gradient(#000 62%,transparent);mask-image:linear-gradient(#000 62%,transparent);opacity:0;transition:opacity .25s;pointer-events:none}\n.hdr.sc::before{opacity:1}\n.hin{position:relative}\n.hero2.compact{padding:14px 16px;gap:0}\n.ringw.md,.ringw.md .ring{width:68px;height:68px}\n.ringw.md b{font-size:calc(20px*var(--fs,1))}\n.hr .go{flex:none;width:auto;min-height:46px;padding:0 22px;margin-left:auto}\n.hero2.compact .ht strong{font-size:calc(18px*var(--fs,1))}\n.qk{flex-direction:row;justify-content:center;padding:11px 8px;gap:8px}\n.qk span{font-size:calc(20px*var(--fs,1))}\n.qk b{font-size:calc(14px*var(--fs,1))}\n.tight{padding:14px 16px}\n.wk2 .week{height:84px}\n.rends{position:absolute;left:14px;right:14px;top:30px;display:flex;justify-content:space-between;font-size:calc(10.5px*var(--fs,1));color:var(--ink2);font-weight:700;pointer-events:none}\n.slr{padding-bottom:22px}\n.hrow{border-top:0;padding-top:0}\n.chart{width:100%;height:auto;display:block}\n.badges{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}\n@media (min-width:768px){.badges{grid-template-columns:repeat(6,1fr)}}\n.bdg{display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 4px;border-radius:14px;background:var(--glass-soft);opacity:.45;filter:grayscale(1)}\n.bdg.got{opacity:1;filter:none;background:var(--accent-soft)}\n.bdg span{font-size:calc(26px*var(--fs,1));line-height:1}\n.bdg small{font-size:calc(11px*var(--fs,1));font-weight:800;text-align:center;line-height:1.15}\n.cnt2{justify-content:space-between;align-items:center}\n.undo{border:1px solid var(--glass-line);background:var(--glass-soft);border-radius:999px;padding:6px 12px;font-size:calc(13px*var(--fs,1));font-weight:800;color:var(--accent);min-height:34px}\n.emo{font-size:calc(46px*var(--fs,1));line-height:1;animation:popin .5s cubic-bezier(.3,1.7,.5,1) both}\n@keyframes popin{from{transform:scale(.3);opacity:0}to{transform:scale(1);opacity:1}}\n.sheet .emo{font-size:calc(38px*var(--fs,1));align-self:center}\n@media (prefers-reduced-motion:reduce){.emo{animation:none}}\n\n/* v7: add flow, AI bits, badges, planner labels */\n.vh{position:absolute;opacity:0;width:1px;height:1px;pointer-events:none}\n.scanbtn{display:flex;flex-direction:column;align-items:center;gap:6px;padding:30px 20px;text-align:center;cursor:pointer;width:100%;position:relative}\n.scanbtn .si{font-size:calc(40px*var(--fs,1));line-height:1}\n.scanbtn b{font-size:calc(17px*var(--fs,1));font-weight:800}\n.scanbtn small{color:var(--ink2);font-size:calc(13px*var(--fs,1));font-weight:600;max-width:340px}\n.fr{display:flex;align-items:center;gap:12px;padding:9px 0;border-top:1px solid var(--line);cursor:pointer}\n.fr input{width:22px;height:22px;accent-color:var(--accent);flex:none}\n.fw{flex:1;min-width:0;display:flex;flex-direction:column}\n.fw b{font-weight:800;font-size:calc(15px*var(--fs,1))}\n.fw small{color:var(--ink2);font-size:calc(13px*var(--fs,1));overflow-wrap:anywhere}\n.ft{font-style:normal;font-size:calc(18px*var(--fs,1));flex:none}\n.spin{width:30px;height:30px;border-radius:50%;border:3px solid var(--line);border-top-color:var(--accent);animation:sp .8s linear infinite}\n@keyframes sp{to{transform:rotate(360deg)}}\n.w3wrap .segc{display:grid;grid-template-columns:repeat(3,1fr);width:100%;background:var(--glass-soft);border:1px solid var(--glass-line);padding:3px}\n.w3wrap .segc button{padding:10px 4px;font-size:calc(13px*var(--fs,1))}\n.memo{font-size:calc(13.5px*var(--fs,1));font-weight:600;background:var(--accent-soft);color:var(--ink);border-radius:12px;padding:8px 12px;max-width:94%}\n.rlab{display:flex;justify-content:space-between;gap:12px;margin-top:6px}\n.rlab span{display:flex;flex-direction:column;min-width:0;max-width:48%}\n.rlab .r{text-align:right;align-items:flex-end}\n.rlab small{font-size:calc(11px*var(--fs,1));font-weight:700;color:var(--ink2);text-transform:uppercase;letter-spacing:.08em}\n.rlab b{font-size:calc(14px*var(--fs,1));font-weight:800;overflow-wrap:anywhere}\n.slr{padding-bottom:10px}\n.bdrow{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}\n.bd1{aspect-ratio:1;border-radius:50%;border:1px solid var(--glass-line);background:var(--glass-soft);display:grid;place-items:center;font-size:calc(22px*var(--fs,1));opacity:.4;filter:grayscale(1);padding:0}\n.bd1.got{opacity:1;filter:none;background:var(--accent-soft)}\n.bd1.new{opacity:1;filter:none;background:var(--pri);box-shadow:0 0 0 0 rgba(80,100,245,.5);animation:pl 1.8s infinite}\n@keyframes pl{70%{box-shadow:0 0 0 10px rgba(80,100,245,0)}100%{box-shadow:0 0 0 0 rgba(80,100,245,0)}}\nbutton.bdg{border:0;color:inherit}\n.bdg.new{box-shadow:0 0 0 2px var(--accent)}\n.bdg em{font-style:normal;font-size:calc(10px*var(--fs,1));font-weight:800;background:var(--pri);color:#fff;border-radius:999px;padding:1px 8px}\n@media (prefers-reduced-motion:reduce){.bd1.new,.spin{animation:none}}\n.bdrow{display:flex;justify-content:space-between;gap:6px}\n.bd1{width:48px;height:48px;aspect-ratio:auto;flex:none}\n@media (min-width:768px){.bd1{width:56px;height:56px;font-size:calc(26px*var(--fs,1))}}\n/* v8: list rows, add flow, compact badges */\n.xr{display:flex;align-items:center;gap:12px;width:100%;padding:12px 16px;border:0;border-top:1px solid var(--line);background:transparent;text-align:left;color:inherit}\n.xr:active{background:var(--accent-soft)}\n.xc{flex:none;width:24px;height:24px;border-radius:50%;border:2px solid var(--ink2);opacity:.6;display:grid;place-items:center;transition:all .2s}\n.xr.on .xc{background:var(--pri);border-color:transparent;opacity:1}\n.xr.on .xc::after{content:\"\u2713\";color:#fff;font-size:calc(14px*var(--fs,1));font-weight:800;line-height:1}\n.xn{flex:1;min-width:0;font-weight:700;font-size:calc(15px*var(--fs,1));overflow-wrap:anywhere}\n.xs{flex:none;font-size:calc(13px*var(--fs,1));font-weight:700;color:var(--ink2)}\n.xall .xn{font-weight:800}\n.askrow{display:flex;gap:8px;align-items:stretch}\n.askrow .in{flex:1;min-width:0}\n.askrow .btn{flex:none;width:auto}\n.resbox{display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:16px;background:var(--accent-soft)}\n.resbox .ft small{font-size:calc(11px*var(--fs,1));font-weight:700;color:var(--ink2)}\n.bi2{display:flex;gap:10px;flex-wrap:wrap;font-size:calc(13px*var(--fs,1));font-weight:800}\n.okc{color:var(--good)}.warnc{color:var(--warn)}\n.bulkinfo:empty{display:none}\n.bulkinfo{border-radius:14px;background:var(--glass-soft);padding:10px 12px}\n.badges.sm{grid-template-columns:repeat(3,1fr);gap:6px}\n@media (min-width:768px){.badges.sm{grid-template-columns:repeat(6,1fr)}}\n.badges.sm .bdg{padding:7px 3px;gap:2px;border-radius:12px}\n.badges.sm .bdg span{font-size:calc(20px*var(--fs,1))}\n.badges.sm .bdg small{font-size:calc(10px*var(--fs,1))}\n.tile.span2{grid-column:1/-1}\n/* v9 */\n.bdrow.all{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;justify-items:center}\n.bdrow.all .bd1{width:100%;max-width:52px;height:auto;aspect-ratio:1}\nmain.home{min-height:calc(100dvh - 205px);display:flex;flex-direction:column;gap:16px}\nmain.home .hero2.compact{padding:22px 18px}\nmain.home .hero2.compact .ringw.md{transform:scale(1.12)}\nmain.home .glass.pad{padding:16px}\nmain.home .lrow{padding:16px 16px}\n/* v11 */\nmain span,main b,main small,main p,main .hint,.opt,.xn,.wm{overflow-wrap:anywhere;min-width:0}\n.opt{min-width:0;max-width:100%}\n.week{padding:6px 6px 0;font-size:calc(15px*var(--fs,1))}\n@media (min-height:900px){main.qz{min-height:calc(100dvh - 170px);display:flex;flex-direction:column;justify-content:center}}\n.bdrow .bd1{width:auto;flex:1 1 0;max-width:56px;height:auto;aspect-ratio:1;min-width:0}\n/* v12 */\n.exb2{display:grid!important;grid-template-columns:1fr 1fr auto;gap:8px}\n.exb2 .btn{padding:12px 14px;white-space:nowrap}\n.exb2 .btn.bad{padding:12px 14px}\n.btn.sm{white-space:nowrap}\n@media (max-width:430px){.hdr .logo{font-size:calc(21px*var(--fs,1))}.gbadge{padding:5px 8px;font-size:calc(12px*var(--fs,1));gap:4px}.gbtn{width:36px;height:36px;font-size:calc(17px*var(--fs,1))}.hin{gap:6px}}\nmain.sl,main.sr{animation:none!important}\n/* v13 */\nmark.dm{background:rgba(255,69,58,.25);color:inherit;border-radius:4px;padding:0 1px;font-weight:800;text-decoration:underline;text-decoration-color:#FF453A}\n.hint.nudge{animation:nudge .35s}\n@keyframes nudge{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}\n@media (prefers-reduced-motion:reduce){.hint.nudge{animation:none}}\n/* v14: use the width on iPad / fullscreen, bigger flashcards */\n@media (min-width:768px){.hin,main{max-width:min(calc(100% - 40px),880px)}}\n@media (min-width:1024px){.hin,main{max-width:min(calc(100% - 64px),1120px)}}\n.flip{height:clamp(300px,44vh,560px)}\n.face .word,.glass.q .word{font-size:clamp(32px,5.2vw,60px)}\n.face .word.sm,.glass.q .word.sm{font-size:clamp(26px,4vw,42px)}\n.face .lang,.face .hint{font-size:clamp(13px,1.6vw,18px)}\n.face .ex,.glass.q .ex{font-size:clamp(15px,2vw,22px)}\n.face .emo{font-size:clamp(40px,6vw,72px)}\n@media (min-width:1024px){.grid.fill{grid-template-columns:repeat(3,minmax(0,1fr))!important}}\n@media (min-width:1024px){main.home{display:grid;grid-template-columns:1fr 1fr;align-items:start}main.home>*{width:100%}main.home>.hero2,main.home>.banner{grid-column:1/-1}}\n@media (min-width:1024px){main.home{align-content:start;grid-auto-rows:min-content;min-height:0}}\n.face .word,.glass.q .word{font-size:clamp(34px,6.6vw,78px)}\n.face .word.sm,.glass.q .word.sm{font-size:clamp(28px,5vw,52px)}\n@media (max-width:520px){.face .word,.glass.q .word{font-size:clamp(30px,9vw,40px)}.face .word.sm,.glass.q .word.sm{font-size:calc(24px*var(--fs,1))}}\n/* v15: consistent structure */\n.btn,.in,.ta,select.in{box-sizing:border-box;max-width:100%}\n.pt{padding-left:2px;padding-right:2px}\n.chart{max-height:190px}\n@media (min-width:768px){\n  main.tall{min-height:0}\n  .grid.fill{flex:none;grid-auto-rows:minmax(140px,170px)}\n  .tile.span2{min-height:150px}\n  .tile.v{padding:18px 20px}\n}\n.sect .st,.st{padding-left:4px}\n/* v16 */\n@media (min-width:1024px){\n  main.home{align-items:stretch}\n  main.home>*{grid-column:1/-1}\n  main.home>.half{grid-column:span 1}\n  main.home>.half.glass{height:100%}\n}\n/* v17: no purple, system fonts */\n:root{--grad:linear-gradient(135deg,#14B8A6 0%,#2F7BF5 100%);--pri:linear-gradient(135deg,#1E9BE8 0%,#2F6BF0 100%);--aur3:rgba(20,184,166,.34)}\n:root[data-theme=\"dark\"]{--aur3:rgba(20,184,166,.2)}\n:root[data-theme=\"dark\"]{--aur3:rgba(20,184,166,.2)}\n@media (min-width:768px){:root:not([data-theme=\"dark\"]){--aur3:rgba(20,184,166,.4)}}\nh1,h2,.word,.big,.logo,.gradient-text,.hero2 strong,.ringw b,.gbadge,.tile.v b{font-family:ui-rounded,\"SF Pro Rounded\",-apple-system,BlinkMacSystemFont,\"SF Pro Display\",\"Segoe UI\",system-ui,sans-serif}\n/* v18: natural look + accent colours */\n:root[data-accent=\"blue\"]{--acc:#2F6FEB;--accrgb:47,111,235}\n:root[data-accent=\"green\"]{--acc:#2E8B6A;--accrgb:46,139,106}\n:root[data-accent=\"orange\"]{--acc:#D9722B;--accrgb:217,114,43}\n:root[data-accent=\"teal\"]{--acc:#1F9D8F;--accrgb:31,157,143}\n:root[data-accent=\"slate\"]{--acc:#475569;--accrgb:71,85,105}\n:root[data-theme=\"dark\"][data-accent=\"blue\"]{--acc:#6C9BFF;--accrgb:108,155,255}\n:root[data-theme=\"dark\"][data-accent=\"green\"]{--acc:#4CC38F;--accrgb:76,195,143}\n:root[data-theme=\"dark\"][data-accent=\"orange\"]{--acc:#F0954D;--accrgb:240,149,77}\n:root[data-theme=\"dark\"][data-accent=\"teal\"]{--acc:#3CC4B4;--accrgb:60,196,180}\n:root[data-theme=\"dark\"][data-accent=\"slate\"]{--acc:#94A3B8;--accrgb:148,163,184}\n\n :root[data-theme=\"dark\"][data-accent=\"blue\"]{--acc:#6C9BFF;--accrgb:108,155,255}\n :root[data-theme=\"dark\"][data-accent=\"green\"]{--acc:#4CC38F;--accrgb:76,195,143}\n :root[data-theme=\"dark\"][data-accent=\"orange\"]{--acc:#F0954D;--accrgb:240,149,77}\n :root[data-theme=\"dark\"][data-accent=\"teal\"]{--acc:#3CC4B4;--accrgb:60,196,180}\n :root[data-theme=\"dark\"][data-accent=\"slate\"]{--acc:#94A3B8;--accrgb:148,163,184}\n\n:root[data-look=\"natural\"]{--grad:linear-gradient(135deg,var(--acc),var(--acc));--pri:linear-gradient(135deg,var(--acc),var(--acc));--accent:var(--acc);--accent-soft:rgba(var(--accrgb),.14);--bg:#EEECE7;--ink:#1D2330;--ink2:#485060;--glass-shadow:0 8px 28px rgba(30,36,48,.09),0 1px 3px rgba(30,36,48,.06),inset 0 1px 0 rgba(255,255,255,.85),inset 0 -1px 0 rgba(255,255,255,.3)}\n:root[data-look=\"natural\"][data-theme=\"dark\"]{--bg:#14171C;--ink:#ECEFF5;--ink2:#B4BCCA;--glass-shadow:0 10px 30px rgba(0,0,0,.4),0 1px 3px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.1),inset 0 -1px 0 rgba(255,255,255,.03)}\n:root[data-look=\"natural\"][data-theme=\"dark\"]{--bg:#14171C;--ink:#ECEFF5;--ink2:#B4BCCA}\n:root[data-look=\"natural\"] .btn.pri{box-shadow:0 4px 14px rgba(var(--accrgb),.28)}\n:root[data-look=\"natural\"] .tg.on{background:var(--acc)}\n.row2c{display:flex;gap:6px;flex:none}\n/* v19: Apple-style Liquid Glass: specular edges, inner light, capsule controls */\n:root{--sp1:rgba(255,255,255,.95);--sp2:rgba(255,255,255,.55);--sp3:rgba(255,255,255,.22);--rad:28px}\n:root[data-theme=\"dark\"]{--sp1:rgba(255,255,255,.5);--sp2:rgba(255,255,255,.2);--sp3:rgba(255,255,255,.06)}\n:root[data-theme=\"dark\"]{--sp1:rgba(255,255,255,.5);--sp2:rgba(255,255,255,.2);--sp3:rgba(255,255,255,.06)}\n@media (max-width:520px){:root{--rad:24px}}\n.glass{border:0;background:linear-gradient(135deg,var(--bloom) 0%,rgba(255,255,255,0) 46%,rgba(255,255,255,.06) 100%),var(--glass);box-shadow:0 14px 40px rgba(20,30,60,.10),0 2px 8px rgba(20,30,60,.06),inset 0 0 0 1px rgba(255,255,255,.14)}\n:root[data-theme=\"dark\"] .glass{box-shadow:0 16px 44px rgba(0,0,0,.4),0 2px 8px rgba(0,0,0,.25),inset 0 0 0 1px rgba(255,255,255,.08)}\n.glass::after{content:\"\";position:absolute;inset:0;border-radius:inherit;pointer-events:none;box-shadow:inset 1.5px 2px 3px -1px var(--sp1),inset -1.5px -2px 3px -1px var(--sp2),inset 0 0 22px var(--sp3)}\n.tabbar.glass{border-radius:999px}\n.btn,.gbtn,.gbadge{box-shadow:inset 1px 1.5px 2px -0.5px var(--sp1),inset -1px -1.5px 2px -0.5px var(--sp2),0 4px 14px rgba(20,30,60,.08)}\n.btn{border-radius:999px}\n.btn.pri{box-shadow:inset 1px 1.5px 2px -0.5px rgba(255,255,255,.7),inset -1px -1.5px 2px -0.5px rgba(255,255,255,.28),0 8px 22px rgba(47,111,235,.32)}\n:root[data-look=\"natural\"] .btn.pri{background:linear-gradient(180deg,rgba(var(--accrgb),.94),rgba(var(--accrgb),.8));box-shadow:inset 1px 1.5px 2px -0.5px rgba(255,255,255,.75),inset -1px -1.5px 2px -0.5px rgba(255,255,255,.3),0 8px 22px rgba(var(--accrgb),.34)}\n.tpill{box-shadow:inset 1.5px 2px 3px -1px var(--sp1),inset -1.5px -2px 3px -1px var(--sp2),inset 0 0 14px rgba(255,255,255,.3),0 6px 18px rgba(20,30,60,.16)!important}\n.exm,.sheet{border-radius:20px}\n/* v20: fill iPad, compact stats */\n.fill-extra{display:none}\n@media (min-width:768px){.fill-extra{display:flex;flex-direction:column}}\n.wkrow{display:flex;justify-content:space-between;gap:6px}\n.wkd{display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;color:var(--ink2)}\n.wkd i{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font-style:normal;font-weight:800;background:var(--glass-soft);border:1px solid var(--glass-line);color:#fff}\n.wkd.on i{background:var(--acc,#2F6FEB);border-color:transparent}\n.wkd.td i{outline:2px solid var(--acc,#2F6FEB);outline-offset:2px}\n.wkd small{font-size:calc(11px*var(--fs,1));font-weight:700}\n.xr.lst{border-top:0;padding:8px 4px}\n.xr.lst .lp{width:30%;min-width:70px;flex:none}\n.pair{display:contents}\n@media (min-width:768px){.pair{display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;align-items:stretch}.pair>*{height:100%;box-sizing:border-box}.pair>.sgrid3{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.pair>.sgrid3>.glass{height:100%}}\nmain.stats{gap:10px}\nmain.stats .glass.pad,main.stats .hero2.compact{padding:12px 16px}\nmain.stats .chart{max-height:140px}\n@media (min-width:768px){main.stats .chart{max-height:130px}main.home>.fill-extra,main.home>.half.fill-extra{display:flex}}\n/* v21: shop */\n.collbig{font-size:calc(64px*var(--fs,1));line-height:1;width:92px;height:92px;display:grid;place-items:center;border-radius:28px;background:var(--glass-soft);border:1px solid var(--glass-line)}\n.collbig.lock{filter:grayscale(1);opacity:.45}\n.avgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:10px}\n.av{display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px 6px;border-radius:20px;border:1px solid var(--glass-line);background:var(--glass-soft);color:var(--ink)}\n.av span{font-size:calc(34px*var(--fs,1));line-height:1}\n.av small{font-size:calc(12px*var(--fs,1));font-weight:700;color:var(--ink2)}\n.av.on{outline:2px solid var(--acc,#2F6FEB);outline-offset:1px}\n.av:disabled{opacity:.45}\n/* v22: avatar animation, xp chip */\n.am{display:inline-block;transform-origin:50% 80%}\n.am.a0{animation:avBob 3.2s ease-in-out infinite}\n.am.a1{animation:avWig 2.8s ease-in-out infinite}\n.am.a2{animation:avPulse 3.6s ease-in-out infinite}\n.am.a3{animation:avHop 2.6s ease-in-out infinite}\n@keyframes avBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}\n@keyframes avWig{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}\n@keyframes avPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}\n@keyframes avHop{0%,70%,100%{transform:translateY(0) scaleY(1)}78%{transform:translateY(0) scaleY(.88)}88%{transform:translateY(-9px) scaleY(1.06)}}\n@media (prefers-reduced-motion:reduce){.am{animation:none!important}}\n.av b{font-size:calc(13px*var(--fs,1))}\n.xpchip{display:inline-block;margin-left:8px;padding:2px 9px;border-radius:999px;background:rgba(var(--accrgb,47,111,235),.16);color:var(--acc,#2F6FEB);font-weight:800;font-size:calc(12px*var(--fs,1));animation:xpIn .5s cubic-bezier(.3,1.6,.5,1)}\n@keyframes xpIn{from{opacity:0;transform:translateY(6px) scale(.8)}}\n/* v23: calmer avatar motion */\n.am.a0,.am.a1,.am.a2,.am.a3{animation:avBreath 5.5s ease-in-out infinite}\n.am.a1{animation-delay:-1.4s}.am.a2{animation-delay:-2.8s}.am.a3{animation-delay:-4.1s}\n@keyframes avBreath{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-1.5px) scale(1.045)}}\n.av:active .am,.collbig:active .am{animation:avJoy .5s ease-out}\n@keyframes avJoy{0%{transform:scale(1)}40%{transform:scale(1.22) rotate(-6deg)}70%{transform:scale(.97) rotate(4deg)}100%{transform:scale(1)}}\n.av.lockd{opacity:.45;filter:grayscale(1)}\n.av.lockd .am{animation:none}\n.hero2.gtap{cursor:pointer}\n/* v24: pet, emoji picker, more accents */\n:root[data-accent=\"poppy\"]{--acc:#D6452F;--accrgb:214,69,47}\n:root[data-accent=\"rose\"]{--acc:#D6618F;--accrgb:214,97,143}\n:root[data-accent=\"mustard\"]{--acc:#C99A2E;--accrgb:201,154,46}\n:root[data-accent=\"wine\"]{--acc:#9B2D45;--accrgb:155,45,69}\n:root[data-accent=\"olive\"]{--acc:#6B8E23;--accrgb:107,142,35}\n:root[data-theme=\"dark\"][data-accent=\"poppy\"]{--acc:#FF7A66;--accrgb:255,122,102}\n:root[data-theme=\"dark\"][data-accent=\"rose\"]{--acc:#F08FB4;--accrgb:240,143,180}\n:root[data-theme=\"dark\"][data-accent=\"mustard\"]{--acc:#E6BE5C;--accrgb:230,190,92}\n:root[data-theme=\"dark\"][data-accent=\"wine\"]{--acc:#E0708A;--accrgb:224,112,138}\n:root[data-theme=\"dark\"][data-accent=\"olive\"]{--acc:#A5C75A;--accrgb:165,199,90}\n:root[data-theme=\"dark\"][data-accent=\"poppy\"]{--acc:#FF7A66;--accrgb:255,122,102}:root[data-theme=\"dark\"][data-accent=\"rose\"]{--acc:#F08FB4;--accrgb:240,143,180}:root[data-theme=\"dark\"][data-accent=\"mustard\"]{--acc:#E6BE5C;--accrgb:230,190,92}:root[data-theme=\"dark\"][data-accent=\"wine\"]{--acc:#E0708A;--accrgb:224,112,138}:root[data-theme=\"dark\"][data-accent=\"olive\"]{--acc:#A5C75A;--accrgb:165,199,90}\n.petbox{gap:10px}\n.petbig{border:0;background:var(--glass-soft);width:150px;height:150px;border-radius:44px;display:grid;place-items:center;font-size:calc(92px*var(--fs,1));line-height:1;cursor:pointer;box-shadow:inset 1px 2px 3px -1px var(--sp1),inset -1px -2px 3px -1px var(--sp2),0 10px 26px rgba(20,30,60,.12)}\n.petbox.weak .petbig{filter:grayscale(.6) saturate(.7);opacity:.85}\n.bubble{min-height:34px;padding:6px 16px;border-radius:999px;background:var(--glass-soft);border:1px solid var(--glass-line);font-weight:800;color:var(--ink)}\n.bubble.pop{animation:xpIn .5s cubic-bezier(.3,1.6,.5,1)}\n.hungry{display:inline-grid;place-items:center;width:16px;height:16px;border-radius:50%;background:#FF453A;color:#fff;font-size:calc(11px*var(--fs,1));font-weight:800;margin-left:3px}\n.emgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(52px,1fr));gap:8px}\n.emb{font-size:calc(26px*var(--fs,1));padding:8px 0;border-radius:16px;border:1px solid var(--glass-line);background:var(--glass-soft)}\n.emb.on{outline:2px solid var(--acc,#2F6FEB);outline-offset:1px}\n/* v26: vivid palettes (varied hues), lively pets, word screen */\n:root{--g1:var(--acc,#2F6FEB);--g2:var(--acc,#2F6FEB)}\n:root[data-pal=\"sun\"]{--g1:#FF9A3D;--g2:#F4476B;--va:#E8453C;--varg:244,71,107;--vbg:#FFF2E4;--vbgd:#1B1114}\n:root[data-pal=\"ice\"]{--g1:#4DB3F7;--g2:#3F6FD8;--va:#2F6FD8;--varg:63,111,216;--vbg:#EAF3FA;--vbgd:#0E1722}\n:root[data-pal=\"sage\"]{--g1:#6DB67A;--g2:#2F8F83;--va:#2F8F5C;--varg:47,143,92;--vbg:#EDF3EA;--vbgd:#111A14}\n:root[data-pal=\"berry\"]{--g1:#EE6A8E;--g2:#B83280;--va:#C23674;--varg:194,54,116;--vbg:#FBEEF2;--vbgd:#1F1017}\n:root[data-pal=\"stone\"]{--g1:#8794A6;--g2:#4B5563;--va:#4B5563;--varg:75,85,99;--vbg:#EFEEEB;--vbgd:#17181B}\n:root[data-look=\"vivid\"]{--bg:var(--vbg,#FFF2E4);--grad:linear-gradient(135deg,var(--g1),var(--g2));--pri:linear-gradient(135deg,var(--g1),var(--g2));--accent:var(--va,#E8453C);--accent-soft:rgba(var(--varg,244,71,107),.14);--acc:var(--va,#E8453C);--accrgb:var(--varg,244,71,107);--ink:#1D2330;--ink2:#485060}\n:root[data-look=\"vivid\"][data-theme=\"dark\"]{--bg:var(--vbgd,#1B1114);--ink:#ECEFF5;--ink2:#B4BCCA}\n:root[data-look=\"vivid\"][data-theme=\"dark\"]{--bg:var(--vbgd,#1B1114);--ink:#ECEFF5;--ink2:#B4BCCA}\n:root[data-look=\"vivid\"] .btn.pri{box-shadow:inset 1px 1.5px 2px -0.5px rgba(255,255,255,.7),inset -1px -1.5px 2px -0.5px rgba(255,255,255,.28),0 8px 22px rgba(var(--varg,244,71,107),.34)}\n:root[data-look=\"vivid\"] .tg.on{background:var(--va)}\n:root[data-look=\"vivid\"] .tab.on,:root[data-look=\"vivid\"] .link{color:var(--va)}\n.tilt{display:inline-block;animation:avTilt 9s ease-in-out infinite 1.5s}\n@keyframes avTilt{0%,82%,100%{transform:rotate(0)}86%{transform:rotate(-9deg)}92%{transform:rotate(8deg)}96%{transform:rotate(-3deg)}}\n@media (prefers-reduced-motion:reduce){.tilt{animation:none}.heart{display:none}}\n.petbox{position:relative;overflow:hidden}\n.heart{position:absolute;bottom:42%;font-size:calc(22px*var(--fs,1));opacity:0;pointer-events:none;animation:heartUp 1.4s ease-out forwards}\n@keyframes heartUp{0%{opacity:0;transform:translateY(0) scale(.6)}20%{opacity:1}100%{opacity:0;transform:translateY(-130px) scale(1.2)}}\n.collbig{padding:0}\n/* v27: richer gradients */\n:root[data-pal=\"sun\"]{--gm:#FF6F61;--vbg2:#FFE0CC;--vbg2d:#24151A}\n:root[data-pal=\"ice\"]{--g1:#5CC8FF;--gm:#4C9BF5;--g2:#3566E8;--va:#2D63E0;--varg:45,99,224;--vbg:#EEF6FC;--vbg2:#D6E8F8;--vbg2d:#122033}\n:root[data-pal=\"sage\"]{--g1:#7CC98E;--gm:#4DAA8C;--g2:#2A8A86;--vbg2:#DCEAD8;--vbg2d:#16221A}\n:root[data-pal=\"berry\"]{--g1:#F27A9A;--gm:#DB4C86;--g2:#B02F7E;--vbg2:#F6D9E3;--vbg2d:#2A141E}\n:root[data-pal=\"stone\"]{--g1:#9AA7B8;--gm:#6E7A8C;--g2:#475465;--vbg2:#E3E1DC;--vbg2d:#1E2023}\n:root[data-look=\"vivid\"]{--grad:linear-gradient(135deg,var(--g1) 0%,var(--gm,var(--g1)) 52%,var(--g2) 100%);--pri:linear-gradient(135deg,var(--g1) 0%,var(--gm,var(--g1)) 52%,var(--g2) 100%)}\n:root[data-look=\"vivid\"] body{background:linear-gradient(160deg,var(--vbg,#FFF2E4) 0%,var(--vbg2,#FFE0CC) 100%) fixed}\n:root[data-look=\"vivid\"][data-theme=\"dark\"] body{background:linear-gradient(160deg,var(--vbgd,#1B1114) 0%,var(--vbg2d,#24151A) 100%) fixed}\n:root[data-look=\"vivid\"][data-theme=\"dark\"] body{background:linear-gradient(160deg,var(--vbgd,#1B1114) 0%,var(--vbg2d,#24151A) 100%) fixed}\n.btn.pri{background-image:linear-gradient(180deg,rgba(255,255,255,.30) 0%,rgba(255,255,255,0) 52%),var(--pri)}\n:root[data-look=\"natural\"] .btn.pri{background-image:linear-gradient(180deg,rgba(255,255,255,.26) 0%,rgba(255,255,255,0) 52%),linear-gradient(180deg,rgba(var(--accrgb),.94),rgba(var(--accrgb),.8))}\n.prog i,.rf{filter:saturate(1.1)}\n:root[data-theme=\"dark\"][data-pal=\"ice\"]{--va:#7DB0FF;--varg:125,176,255}\n:root[data-theme=\"dark\"][data-pal=\"sun\"]{--va:#FF8A78;--varg:255,138,120}\n:root[data-theme=\"dark\"][data-pal=\"sage\"]{--va:#7FD3A6;--varg:127,211,166}\n:root[data-theme=\"dark\"][data-pal=\"berry\"]{--va:#F28FB5;--varg:242,143,181}\n:root[data-theme=\"dark\"][data-pal=\"stone\"]{--va:#AEB9C8;--varg:174,185,200}\n:root[data-theme=\"dark\"][data-pal=\"ice\"]{--va:#7DB0FF;--varg:125,176,255}:root[data-theme=\"dark\"][data-pal=\"sun\"]{--va:#FF8A78;--varg:255,138,120}:root[data-theme=\"dark\"][data-pal=\"sage\"]{--va:#7FD3A6;--varg:127,211,166}:root[data-theme=\"dark\"][data-pal=\"berry\"]{--va:#F28FB5;--varg:242,143,181}:root[data-theme=\"dark\"][data-pal=\"stone\"]{--va:#AEB9C8;--varg:174,185,200}\n/* v28: games */\n.grid.mini{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;width:100%}\n@media (min-width:768px){.grid.mini{grid-template-columns:repeat(4,minmax(0,1fr))}}\n.grid.mini .tile.v{min-height:112px;padding:14px}\n.memgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:100%}\n@media (min-width:768px){.memgrid{grid-template-columns:repeat(4,1fr)}}\n.mc{aspect-ratio:1.15;border-radius:20px;border:1px solid var(--glass-line);background:var(--glass-soft);font-weight:800;font-size:calc(17px*var(--fs,1));padding:6px;color:var(--ink);display:grid;place-items:center;text-align:center;overflow-wrap:anywhere;box-shadow:inset 1px 2px 3px -1px var(--sp1),inset -1px -2px 3px -1px var(--sp2)}\n.mc:not(.up){background:linear-gradient(135deg,rgba(var(--accrgb,47,111,235),.22),rgba(var(--accrgb,47,111,235),.08));font-size:calc(26px*var(--fs,1));color:var(--ink2)}\n.mc.up{background:var(--glass);outline:2px solid var(--acc,#2F6FEB)}\n.mc.done{opacity:.55;outline:2px solid #34C759;background:rgba(52,199,89,.14)}\n.glass.q.fl-ok{outline:3px solid #34C759}.glass.q.fl-no{outline:3px solid #FF453A}\nmark.wd{background:rgba(var(--accrgb,47,111,235),.18);color:inherit;border-radius:6px;padding:0 3px;font-weight:800;cursor:pointer}\n.story,.pl{font-size:calc(17px*var(--fs,1));line-height:1.55;margin:4px 0}\n.exb2{grid-template-columns:repeat(2,minmax(0,1fr)) auto}\n@media (max-width:520px){.exb2{grid-template-columns:repeat(2,minmax(0,1fr))}.exb2 .btn.bad{grid-column:1/-1}}\n.exb2 .btn{overflow:hidden;text-overflow:ellipsis}\n/* v29: leave dialog */\n.modal{position:fixed;inset:0;z-index:80;display:grid;place-items:center;padding:20px;background:rgba(15,20,30,.35);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);animation:xpIn .25s ease-out}\n.mbox{width:min(100%,420px);gap:12px;background:var(--glass-soft)}\n.mbox.glass{background:rgba(255,255,255,.82)}\n:root[data-theme=\"dark\"] .mbox.glass{background:rgba(32,36,48,.85)}\n:root[data-theme=\"dark\"] .mbox.glass{background:rgba(32,36,48,.85)}\n@keyframes fadeIn{from{opacity:0}}\n.modal{animation:fadeIn .2s ease-out}\n.mbox{animation:xpIn .3s cubic-bezier(.3,1.4,.5,1)}\n@media (prefers-reduced-motion:reduce){.modal,.mbox{animation:none}}\n/* v30: memory big grid, confetti */\n.memgrid.big{grid-template-columns:repeat(4,1fr);gap:8px}\n.memgrid.big .mc{font-size:calc(14px*var(--fs,1));border-radius:16px}\n@media (min-width:768px){.memgrid.big{grid-template-columns:repeat(8,1fr)}}\n.confetti{position:fixed;inset:0;pointer-events:none;z-index:90;overflow:hidden}\n.confetti i{position:absolute;top:-10%;font-style:normal;animation:cf 2.6s ease-in forwards}\n@keyframes cf{0%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(115vh) rotate(540deg);opacity:.9}}\n.mc{font-size:clamp(15px,2.2vw,22px)}\n/* v31: light-mode glass with depth, consistent glass scale */\n:root{--sp1:rgba(255,255,255,.98);--sp2:rgba(60,80,120,.16);--sp3:rgba(255,255,255,.34)}\n:root[data-theme=\"dark\"]{--sp1:rgba(255,255,255,.5);--sp2:rgba(255,255,255,.2);--sp3:rgba(255,255,255,.06)}\n:root[data-theme=\"dark\"]{--sp1:rgba(255,255,255,.5);--sp2:rgba(255,255,255,.2);--sp3:rgba(255,255,255,.06)}\n:root[data-look=\"natural\"]{--bg:#E8E6E1}\n.glass{box-shadow:0 16px 44px rgba(20,30,60,.13),0 2px 8px rgba(20,30,60,.07),0 0 0 .5px rgba(20,30,60,.10),inset 0 0 0 1px rgba(255,255,255,.4)}\n:root[data-theme=\"dark\"] .glass{box-shadow:0 16px 44px rgba(0,0,0,.4),0 2px 8px rgba(0,0,0,.25),0 0 0 .5px rgba(255,255,255,.08),inset 0 0 0 1px rgba(255,255,255,.08)}\n:root[data-theme=\"dark\"] .glass{box-shadow:0 16px 44px rgba(0,0,0,.4),0 2px 8px rgba(0,0,0,.25),0 0 0 .5px rgba(255,255,255,.08),inset 0 0 0 1px rgba(255,255,255,.08)}\n.glass{-webkit-backdrop-filter:blur(var(--blur)) saturate(calc(var(--sat)*1.05)) brightness(1.05);backdrop-filter:blur(var(--blur)) saturate(calc(var(--sat)*1.05)) brightness(1.05)}\n/* v32: lern-clip */\n.clipbox{position:relative;width:100%;min-height:360px;border-radius:32px;padding:18px;display:grid;align-content:center;overflow:hidden;cursor:pointer;background:linear-gradient(145deg,rgba(var(--accrgb,47,111,235),.20),rgba(var(--accrgb,47,111,235),.05)),var(--glass);border:1px solid var(--glass-line);box-shadow:var(--glass-shadow)}\n.clipprog{position:absolute;top:12px;left:16px;right:16px;display:flex;gap:4px}\n.clipprog i{flex:1;height:4px;border-radius:2px;background:var(--line)}\n.clipprog i.d{background:var(--acc,#2F6FEB)}.clipprog i.c{background:var(--acc,#2F6FEB);opacity:.55}\n.cscene{display:flex;flex-direction:column;align-items:center;text-align:center;gap:12px;padding:18px 6px}\n.cemo{font-size:calc(72px*var(--fs,1));line-height:1;animation:cPop .6s cubic-bezier(.3,1.6,.5,1)}\n.cword{font-size:calc(clamp(38px,8vw,72px)*var(--fs,1));font-weight:800;letter-spacing:-.02em;animation:cZoom .6s cubic-bezier(.2,.9,.3,1.2)}\n.cmean{font-size:calc(clamp(24px,5vw,40px)*var(--fs,1));font-weight:700;color:var(--acc,#2F6FEB);animation:cUp .5s ease-out}\n.cmean .blur{filter:blur(10px);display:inline-block}\n.cmean small{display:block;margin-top:6px;font-size:calc(13px*var(--fs,1))}\n.cex{font-size:calc(clamp(17px,3vw,24px)*var(--fs,1));color:var(--ink2);max-width:34ch;animation:cUp .6s ease-out .15s both}\n@keyframes cZoom{from{opacity:0;transform:scale(.7)}}\n@keyframes cUp{from{opacity:0;transform:translateY(14px)}}\n@keyframes cPop{from{opacity:0;transform:scale(.3) rotate(-12deg)}}\n@media (prefers-reduced-motion:reduce){.cword,.cmean,.cex,.cemo{animation:none}}\n/* v33: mini games */\n@media (min-width:768px){.grid.mini{grid-template-columns:repeat(4,minmax(0,1fr))}}\n.slots{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;width:100%}\n.slot{width:46px;height:54px;border-radius:14px;border:2px dashed var(--line);background:var(--glass-soft);font-size:calc(24px*var(--fs,1));font-weight:800;text-transform:uppercase;color:var(--ink)}\n.slot.f{border-style:solid;border-color:var(--acc,#2F6FEB)}.slot.ok{border-color:#34C759;background:rgba(52,199,89,.15)}.slot.no{border-color:#FF453A;background:rgba(255,69,58,.12)}\n.letters{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;width:100%}\n.lt2{width:50px;height:54px;border-radius:16px;border:1px solid var(--glass-line);background:var(--glass);font-size:calc(24px*var(--fs,1));font-weight:800;text-transform:uppercase;color:var(--ink);box-shadow:inset 1px 2px 3px -1px var(--sp1),inset -1px -2px 3px -1px var(--sp2),0 4px 10px rgba(20,30,60,.08)}\n.lt2.used{opacity:.25}\n.hang{text-align:center;width:100%}.lives{font-size:calc(22px*var(--fs,1));letter-spacing:2px}\n.mask{font-size:calc(34px*var(--fs,1));font-weight:800;letter-spacing:.12em;margin-top:6px}.mask.lostw{color:#FF453A}\n.kbd{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;width:100%}\n.key{width:44px;height:46px;border-radius:12px;border:1px solid var(--glass-line);background:var(--glass);font-weight:800;color:var(--ink)}\n.key.hit{background:rgba(52,199,89,.2);border-color:#34C759}.key.miss{background:rgba(255,69,58,.14);border-color:#FF453A;opacity:.6}\n.key:disabled{opacity:.5}\n/* v34: Heute redesign, planner plan, stronger light glass */\n.greet{padding:2px 6px 0}.greet small{color:var(--ink2);font-weight:700;font-size:calc(13px*var(--fs,1))}.greet h1{margin:0;font-size:calc(28px*var(--fs,1));font-weight:800;letter-spacing:-.02em;line-height:1.1}\n.chips3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}\n.chip3{display:flex;flex-direction:column;gap:4px;padding:12px 14px;text-align:left;color:inherit}\n.chip3 b{font-size:calc(17px*var(--fs,1))}.chip3 small{color:var(--ink2);font-weight:700;font-size:calc(12px*var(--fs,1))}\n.chip3 .prog{height:6px}\n.qa{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n@media (min-width:768px){.qa{grid-template-columns:repeat(4,minmax(0,1fr))}}\n.qb{display:flex;align-items:center;gap:10px;padding:14px;color:inherit;text-align:left}\n.qb span{font-size:calc(26px*var(--fs,1))}.qb b{font-size:calc(15px*var(--fs,1))}\n.petrow{display:flex;align-items:center;gap:12px}\n.petrow .lt{flex:1;min-width:0;display:flex;flex-direction:column}.petrow .lt small{color:var(--ink2);font-weight:600;font-size:calc(13px*var(--fs,1))}\n.petrow.weak .petmini{filter:grayscale(.6);opacity:.85}\n.petmini{border:0;width:54px;height:54px;border-radius:18px;background:var(--glass-soft);font-size:calc(32px*var(--fs,1));display:grid;place-items:center;flex:none}\n.wotd .wm{display:flex;flex-direction:column;gap:2px;min-width:0}\n.planrow{display:grid;grid-template-columns:84px 1fr 80px;align-items:center;gap:10px;padding:8px 0;border-top:1px solid var(--line);font-size:calc(14px*var(--fs,1))}\n.planrow:first-of-type{border-top:0}.planrow .pd{font-weight:800}.planrow .pt2{color:var(--ink2);font-weight:600}.planrow.today{background:rgba(var(--accrgb,47,111,235),.07);border-radius:12px;padding-left:8px;padding-right:8px}\n.planrow .pp{height:6px}\n/* Max glass, light mode: clearer lens look */\n:root[data-glass=\"3\"][data-lm=\"1\"] .glass{background:linear-gradient(180deg,rgba(255,255,255,.42) 0%,rgba(255,255,255,0) 42%),linear-gradient(135deg,var(--bloom) 0%,rgba(255,255,255,0) 46%,rgba(255,255,255,.1) 100%),var(--glass)}\n:root[data-glass=\"3\"][data-lm=\"1\"] .glass::after{box-shadow:inset 2px 3px 4px -1px rgba(255,255,255,1),inset -2px -3px 5px -1px rgba(60,80,120,.22),inset 0 0 34px rgba(255,255,255,.5)}\n:root[data-glass=\"3\"][data-lm=\"1\"]{--sat:2.3}\n/* v59 iOS-Normen */\nhtml{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}\nbutton,.btn,.gbtn,.chip2,.x2,.undo,[data-act],.tab,.seg button{touch-action:manipulation;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}\ninput,textarea,.sel,.sel *{-webkit-user-select:text;user-select:text}\nbody{overscroll-behavior-y:none}\n.gbtn,.x2,.chip2,.undo,.btn.sm,.bubble{position:relative}\n.gbtn::after,.x2::after,.chip2::after,.undo::after,.btn.sm::after,.bubble::after{content:\"\";position:absolute;left:50%;top:50%;width:max(100%,44px);height:max(100%,44px);transform:translate(-50%,-50%)}\n.hdr{padding-left:max(16px,env(safe-area-inset-left));padding-right:max(16px,env(safe-area-inset-right))}\n.edge{position:fixed;left:0;top:0;bottom:0;width:4px;z-index:70;pointer-events:none;background:linear-gradient(90deg,var(--accent),transparent);opacity:0;transform:scaleX(0);transform-origin:left}\n@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}}\n/* v60 iOS Stufe 2 */\n.hin .ctit{position:absolute;left:0;top:50%;transform:translateY(calc(-50% + 8px));font-weight:700;font-size:calc(19px*var(--fs,1));letter-spacing:-.01em;opacity:0;pointer-events:none;transition:opacity .22s ease,transform .26s cubic-bezier(.2,.8,.3,1)}\n.hdr.ct .ctit{opacity:1;transform:translateY(-50%)}\n.hdr .logo{transition:opacity .2s ease,transform .26s cubic-bezier(.2,.8,.3,1)}\n.hdr.ct .logo{opacity:0;transform:translateY(-8px)}\n.hdr.sc.ct::before{opacity:1}\nmain.push{animation:pushIn .34s cubic-bezier(.22,.8,.3,1)}\nmain.pop{animation:popIn .3s cubic-bezier(.22,.8,.3,1)}\nmain.xfade{animation:fadeIn .22s ease-out}\n@keyframes pushIn{from{opacity:0;transform:translateX(32px)}to{opacity:1;transform:none}}\n@keyframes popIn{from{opacity:0;transform:translateX(-22px)}to{opacity:1;transform:none}}\n.shbk{position:fixed;inset:0;z-index:90;background:rgba(10,14,22,.38);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);animation:fadeIn .2s ease-out}\n.sh2{position:fixed;left:0;right:0;margin:0 auto;bottom:max(10px,env(safe-area-inset-bottom));width:min(calc(100% - 20px),520px);z-index:91;border-radius:28px;padding:6px 10px 10px;background:var(--glass);border:1px solid var(--glass-line);-webkit-backdrop-filter:blur(var(--blur,28px)) saturate(var(--sat,1.8));backdrop-filter:blur(var(--blur,28px)) saturate(var(--sat,1.8));box-shadow:0 20px 60px rgba(0,0,0,.28);animation:shUp .34s cubic-bezier(.2,.9,.3,1.05);touch-action:none}\n@keyframes shUp{from{transform:translateY(110%)}to{transform:none}}\n.sh2 .grab{display:grid;place-items:center;height:22px}\n.sh2 .grab i{width:38px;height:5px;border-radius:3px;background:var(--line,rgba(120,120,128,.4))}\n.sh2 .sht{display:flex;flex-direction:column;gap:2px;padding:2px 10px 10px;text-align:center}\n.sh2 .sht b{font-size:calc(17px*var(--fs,1))}\n.sh2 .sht small{font-size:calc(14px*var(--fs,1));opacity:.7}\n.sh2 .shl{display:flex;flex-direction:column;border-radius:18px;overflow:hidden;background:var(--glass-soft)}\n.shi{display:flex;align-items:center;gap:12px;min-height:52px;padding:0 18px;border:0;border-top:1px solid var(--glass-line);background:transparent;color:var(--accent);font:inherit;font-size:calc(17px*var(--fs,1));text-align:left;cursor:pointer}\n.shl .shi:first-child{border-top:0}\n.shi.dg{color:#ff3b30}\n.shi.cancel{width:100%;margin-top:8px;justify-content:center;border:1px solid var(--glass-line);border-radius:18px;background:var(--glass-soft);font-weight:600}\n@media (prefers-reduced-motion:reduce){main.push,main.pop,main.xfade,.sh2,.shbk{animation:none!important}}\n#app{overflow-x:clip}\n/* v60 Recht */\n.legalf{display:flex;justify-content:center;gap:10px;align-items:center;padding:6px 0 0;font-size:calc(13px*var(--fs,1));opacity:.65}\n.legalf .link{font-size:inherit;padding:8px 6px}\n.legal .lh{font-weight:700;margin-top:10px;font-size:calc(16px*var(--fs,1))}\n.legal .lh:first-child{margin-top:0}\n.legal .lp{margin:0;line-height:1.45;font-size:calc(15px*var(--fs,1));overflow-wrap:anywhere}\n/* v61 iPad: Heute aufger\u00e4umt */\n.qb b{white-space:nowrap;overflow-wrap:normal;word-break:normal;overflow:hidden;text-overflow:ellipsis}\n@media (min-width:768px){\n  main.home{display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:start;align-content:start;grid-auto-rows:min-content;min-height:0}\n  main.home>*{width:100%;box-sizing:border-box}\n  main.home>.greet,main.home>.hero2,main.home>.banner,main.home>.qa,main.home>.lrow{grid-column:1/-1;height:auto!important}\n  main.home>.chips3,main.home>.badgec,main.home>.fill-extra{display:none!important}\n  main.home>.wotd,main.home>.nextc{grid-column:span 1;height:100%!important}\n  main.home>.lrow{order:9;min-height:0;padding:14px 18px}\n  main.home>.petrow{grid-column:1/-1}\n  .qb{justify-content:center}\n}\n.hdr.sc::before{background:linear-gradient(180deg,var(--glass) 0%,var(--glass) 70%,transparent 100%);-webkit-backdrop-filter:blur(30px) saturate(1.9);backdrop-filter:blur(30px) saturate(1.9)}\n:root[data-lm=\"0\"] .hdr.sc::before{background:linear-gradient(180deg,rgba(18,22,32,.88) 0%,rgba(18,22,32,.82) 70%,transparent 100%)}\n.legalf .link{text-decoration:none;color:inherit;font-weight:500}\n/* v62 Einstellungen strukturiert */\n.setgrid{display:block}\n@media (min-width:768px){.setgrid{column-count:2;column-gap:18px}.setgrid>.sect{break-inside:avoid;-webkit-column-break-inside:avoid;margin-bottom:14px;display:inline-block;width:100%}}\n.setgrid .sect{margin-top:4px}\n.srow select.in.inl{max-width:170px}\n.undo{display:inline-flex;align-items:center;gap:7px;padding:6px 14px 6px 11px;font-weight:600;min-height:36px}\n.undo svg{flex:none}\n/* v63 iPad: \u00dcben kompakt */\n@media (min-width:768px){\n  .grid.fill{flex:none!important;grid-auto-rows:auto!important;gap:12px}\n  .tile.v,.grid.mini .tile.v{flex-direction:row!important;align-items:center!important;justify-content:flex-start!important;gap:14px;padding:12px 16px!important;min-height:0!important}\n  .tile.v .ico{font-size:calc(32px*var(--fs,1))!important;flex:none;line-height:1}\n  .tile.v .tt{display:flex;flex-direction:column;align-items:flex-start;text-align:left;min-width:0}\n  .tile.v b{font-size:calc(17px*var(--fs,1))!important}\n  .tile.v small{font-size:calc(13px*var(--fs,1))!important}\n  .grid.mini{gap:12px}\n}\n.tile.v small,.qb small{color:var(--ink,#1c1c1e);opacity:.7}\n/* v64 gr\u00f6\u00dfere Kn\u00f6pfe, Einstellungszeilen stapeln */\n.gbtn.gback{width:46px!important;height:46px!important;display:grid;place-items:center;font-size:0}\n.gbtn.gback svg{width:13px;height:21px}\n@media (max-width:430px){.hdr .gbtn:not(.gback){width:40px!important;height:40px!important}}\n@media (min-width:431px){.hdr .gbtn{width:44px;height:44px}}\n@media (max-width:560px){\n  .srow:has(.segc){flex-wrap:wrap;row-gap:10px}\n  .srow:has(.segc) .sl{flex:1 1 calc(100% - 52px)}\n  .srow:has(.segc) .segc{flex:1 1 100%;order:3;width:100%}\n  .srow:has(.segc) .segc button{flex:1}\n}\n.banner.col{display:flex;flex-direction:column;gap:8px;align-items:flex-start}\n/* v66 Glas: Aus = flach, Max = klar mit Farbe dahinter */\n.qb b{white-space:normal;overflow:visible;text-overflow:clip}\n@media (min-width:768px){.qb b{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}\n:root[data-glass=\"0\"] .glass{background:var(--glass)!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;box-shadow:0 1px 2px rgba(0,0,0,.08),0 4px 14px rgba(0,0,0,.06)!important}\n:root[data-glass=\"0\"] .glass::after,:root[data-glass=\"0\"] .glass::before{display:none}\n:root[data-glass=\"0\"][data-lm=\"0\"] .glass{background:rgb(30,35,48)!important;box-shadow:0 1px 0 rgba(255,255,255,.06) inset,0 4px 14px rgba(0,0,0,.35)!important}\n:root[data-glass=\"0\"][data-lm=\"1\"] .glass{background:#fff!important}\n:root[data-glass=\"0\"] .orbs{opacity:.18!important}\n:root[data-glass=\"3\"] .orbs{opacity:1!important}\n:root[data-glass=\"3\"] .orbs i{filter:saturate(1.7)}\n:root[data-glass=\"3\"] .orbs i:nth-child(1){opacity:.95}\n:root[data-glass=\"3\"] .orbs i:nth-child(2){opacity:.9}\n:root[data-glass=\"3\"] .orbs i:nth-child(3){opacity:.95}\n:root[data-glass=\"3\"][data-lm=\"0\"] .glass{box-shadow:0 18px 50px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.28)}\n:root[data-glass=\"3\"] .glass::before{padding:1.6px}\n/* v67 Logo glasig, Header-Hintergrund, Max-Glas mit Farbe */\n.hdr .logo.gradient-text{background:linear-gradient(180deg,rgba(255,255,255,.95) 0%,var(--accent) 42%,var(--accent) 100%);background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 22%,#fff) 0%,color-mix(in srgb,var(--accent) 88%,transparent) 46%,color-mix(in srgb,var(--accent) 62%,transparent) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;-webkit-text-stroke:.8px rgba(255,255,255,.7);paint-order:stroke fill;filter:drop-shadow(0 1px 0 rgba(255,255,255,.55)) drop-shadow(0 7px 14px color-mix(in srgb,var(--accent) 38%,transparent));letter-spacing:-.02em}\n:root[data-lm=\"0\"] .hdr .logo.gradient-text{-webkit-text-stroke:.8px rgba(255,255,255,.5);filter:drop-shadow(0 0 1px rgba(255,255,255,.35)) drop-shadow(0 6px 16px color-mix(in srgb,var(--accent) 55%,transparent))}\n:root[data-lm=\"0\"] .hdr::before{background:linear-gradient(180deg,rgba(14,18,28,.9) 0%,rgba(14,18,28,.82) 72%,transparent 100%)!important}\n:root[data-lm=\"1\"] .hdr::before{background:linear-gradient(180deg,rgba(244,246,250,.88) 0%,rgba(244,246,250,.8) 72%,transparent 100%)!important}\n:root[data-glass=\"3\"] .orbs::after{content:\"\";position:absolute;inset:0;background:radial-gradient(55% 32% at 12% 14%,rgba(56,189,248,.55),transparent 70%),radial-gradient(50% 36% at 92% 42%,rgba(167,139,250,.55),transparent 70%),radial-gradient(60% 34% at 28% 88%,rgba(52,211,153,.5),transparent 70%),radial-gradient(45% 26% at 85% 96%,rgba(251,146,60,.42),transparent 70%)}\n:root[data-glass=\"2\"] .orbs::after{content:\"\";position:absolute;inset:0;background:radial-gradient(55% 32% at 12% 14%,rgba(56,189,248,.22),transparent 70%),radial-gradient(50% 36% at 92% 42%,rgba(167,139,250,.22),transparent 70%),radial-gradient(60% 34% at 28% 88%,rgba(52,211,153,.2),transparent 70%)}\n/* v68 Akzent und Hintergrund getrennt */\n.swlab{display:flex;flex-direction:column;gap:2px;padding:12px 16px 0;border-top:1px solid var(--line)}\n.swlab b{font-size:calc(15px*var(--fs,1))}\n.swlab small{font-size:calc(12.5px*var(--fs,1));color:var(--ink2)}\n.swrow{border-top:0!important;padding-top:8px!important}\n.swrow.bgrow{grid-template-columns:repeat(6,1fr);gap:4px}\n.swrow.bgrow .sw span{font-size:calc(10.5px*var(--fs,1));white-space:nowrap}\n/* Hintergrund unabh\u00e4ngig vom Akzent */\n:root[data-bgk=\"vivid\"]{--bg:var(--vbg,#FFF2E4)}\n:root[data-bgk=\"vivid\"][data-theme=\"dark\"]{--bg:var(--vbgd,#1B1114)}\n:root[data-bgk=\"vivid\"][data-theme=\"dark\"]{--bg:var(--vbgd,#1B1114)}\n:root[data-bgk=\"vivid\"] body{background:linear-gradient(160deg,var(--vbg,#FFF2E4) 0%,var(--vbg2,#FFE0CC) 100%) fixed}\n:root[data-bgk=\"vivid\"][data-theme=\"dark\"] body{background:linear-gradient(160deg,var(--vbgd,#1B1114) 0%,var(--vbg2d,#24151A) 100%) fixed}\n:root[data-bgk=\"vivid\"][data-theme=\"dark\"] body{background:linear-gradient(160deg,var(--vbgd,#1B1114) 0%,var(--vbg2d,#24151A) 100%) fixed}\n:root[data-lm=\"1\"] .hdr .logo.gradient-text{background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 78%,#fff) 0%,var(--accent) 48%,color-mix(in srgb,var(--accent) 86%,#000) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-stroke:.7px rgba(255,255,255,.6)}\n/* v70 nat\u00fcrlichere Hintergr\u00fcnde */\n:root[data-pal=\"sand\"]{--vbg:#F4EEE3;--vbg2:#E9DFCC;--vbgd:#1A1814;--vbg2d:#24201A}\n:root[data-pal=\"forest\"]{--vbg:#EAEFE6;--vbg2:#D8E2D3;--vbgd:#121813;--vbg2d:#19231B}\n:root[data-pal=\"clay\"]{--vbg:#F4E9E4;--vbg2:#EAD6CC;--vbgd:#1C1412;--vbg2d:#261B17}\n.swrow.bgrow{grid-template-columns:repeat(5,1fr)!important}\n:root[data-glass=\"3\"] .orbs::after{background:radial-gradient(55% 32% at 12% 14%,color-mix(in srgb,var(--o1) 62%,transparent),transparent 70%),radial-gradient(50% 36% at 92% 42%,color-mix(in srgb,var(--o2) 58%,transparent),transparent 70%),radial-gradient(60% 34% at 28% 88%,color-mix(in srgb,var(--o3) 58%,transparent),transparent 70%),radial-gradient(45% 26% at 85% 96%,color-mix(in srgb,var(--o1) 40%,transparent),transparent 70%)}\n:root[data-glass=\"2\"] .orbs::after{background:radial-gradient(55% 32% at 12% 14%,color-mix(in srgb,var(--o1) 26%,transparent),transparent 70%),radial-gradient(50% 36% at 92% 42%,color-mix(in srgb,var(--o2) 24%,transparent),transparent 70%),radial-gradient(60% 34% at 28% 88%,color-mix(in srgb,var(--o3) 24%,transparent),transparent 70%)}\n:root[data-glass=\"3\"] .orbs i{filter:saturate(1.1)}\n:root[data-glass=\"3\"] .orbs i:nth-child(1){opacity:.7}\n:root[data-glass=\"3\"] .orbs i:nth-child(2){opacity:.65}\n:root[data-glass=\"3\"] .orbs i:nth-child(3){opacity:.7}\n:root[data-glass=\"3\"] .orbs::after{background:radial-gradient(55% 32% at 12% 14%,color-mix(in srgb,var(--o1) 42%,transparent),transparent 70%),radial-gradient(50% 36% at 92% 42%,color-mix(in srgb,var(--o2) 38%,transparent),transparent 70%),radial-gradient(60% 34% at 28% 88%,color-mix(in srgb,var(--o3) 38%,transparent),transparent 70%),radial-gradient(45% 26% at 85% 96%,color-mix(in srgb,var(--o1) 26%,transparent),transparent 70%)}\n:root[data-glass=\"3\"][data-lm=\"0\"] .orbs::after{opacity:.75}\n/* v72 Logo ruhiger: kein Leuchten */\n.hdr .logo.gradient-text,:root[data-lm=\"0\"] .hdr .logo.gradient-text,:root[data-lm=\"1\"] .hdr .logo.gradient-text{background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 62%,#fff) 0%,var(--accent) 52%,color-mix(in srgb,var(--accent) 82%,#000) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;-webkit-text-stroke:0;filter:drop-shadow(0 1px 1px rgba(0,0,0,.2));font-weight:800;letter-spacing:-.02em}\n:root[data-lm=\"0\"] .hdr .logo.gradient-text{background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 70%,#fff) 0%,var(--accent) 55%,color-mix(in srgb,var(--accent) 88%,#000) 100%);-webkit-background-clip:text;background-clip:text;filter:drop-shadow(0 1px 2px rgba(0,0,0,.5))}\n/* v72 Memory-Vorschau */\n.peekbar{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 14px}\n.peekbar span{font-weight:700}\n.memgrid.peeking .mc{pointer-events:none}\n/* v72 Lerntipps wechseln, Avatar-Raster */\n#tipt{transition:opacity .2s ease}\n#tipt.tfade{opacity:0}\n.tipc{cursor:pointer}\n.avgrid{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:8px!important}\n.avgrid .av b{font-size:calc(12.5px*var(--fs,1));overflow-wrap:anywhere}\n.avgrid .av small{font-size:calc(11px*var(--fs,1))}\n@media (min-width:600px){.avgrid{grid-template-columns:repeat(5,minmax(0,1fr))!important}}\n@media (min-width:1024px){.avgrid{grid-template-columns:repeat(10,minmax(0,1fr))!important}}\n/* v75 Lern-Feed TikTok + \u00dcben-Banner */\nmain.feedm{padding:0 0 6px!important;margin:0 auto;width:100%;max-width:560px;gap:0}\nhtml:has(.feedm),html:has(.feedm) body{overflow:hidden;overscroll-behavior:none}\n#app:has(.feedm){padding-bottom:0!important}\n.feed{height:70vh;overflow-y:auto;scroll-snap-type:y mandatory;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;scrollbar-width:none;border-radius:28px}\n.feed::-webkit-scrollbar{display:none}\n.fc{height:100%;scroll-snap-align:start;scroll-snap-stop:always;display:flex;align-items:stretch;padding:2px 0;box-sizing:border-box}\n.fcard{position:relative;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 16px 18px;text-align:center;box-sizing:border-box;user-select:none;-webkit-user-select:none;cursor:pointer;overflow:hidden;transition:box-shadow .3s}\n.fcard.okd{box-shadow:0 0 0 2px rgba(52,199,89,.55),var(--glass-shadow,0 10px 30px rgba(0,0,0,.15))}\n.fcard.nod{box-shadow:0 0 0 2px rgba(255,159,10,.6),var(--glass-shadow,0 10px 30px rgba(0,0,0,.15))}\n.fcard.fend{cursor:default}\n.ftop{display:flex;justify-content:space-between;width:100%}\n.fpill{padding:5px 12px;border-radius:999px;background:var(--glass-soft);border:1px solid var(--glass-line);font-size:calc(12.5px*var(--fs,1));font-weight:700}\n.fpill.soft{opacity:.8}\n.fmid{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;flex:1;width:100%;padding-right:62px;box-sizing:border-box}\n.fcard.fend .fmid{padding-right:0}\n.fword{font-size:calc(38px*var(--fs,1));font-weight:800;letter-spacing:-.02em;line-height:1.1;overflow-wrap:anywhere}\n.fword.sm{font-size:calc(30px*var(--fs,1))}\n.fmid .emo{font-size:calc(54px*var(--fs,1))}\n.fans{visibility:hidden;display:flex;flex-direction:column;gap:8px;align-items:center;opacity:0;transform:translateY(8px);transition:opacity .25s,transform .25s}\n.fcard.rev .fans{visibility:visible;opacity:1;transform:none}\n.ftr{font-size:calc(25px*var(--fs,1));font-weight:700;color:var(--accent)}\n.fex{font-size:calc(15px*var(--fs,1));opacity:.75;font-style:italic;max-width:28ch}\n.fbar{position:absolute;right:10px;bottom:84px;display:flex;flex-direction:column;gap:14px;align-items:center}\n.fact{display:flex;flex-direction:column;align-items:center;gap:3px;border:0;background:none;color:inherit;cursor:pointer;padding:0}\n.fact span{display:grid;place-items:center;width:52px;height:52px;border-radius:50%;background:var(--glass-soft);border:1px solid var(--glass-line);font-size:calc(24px*var(--fs,1));transition:transform .15s,background .2s}\n.fact.on span{background:rgba(var(--accrgb),.22);transform:scale(1.08)}\n.fact small{font-size:calc(11px*var(--fs,1));font-weight:700;opacity:.8}\n.fhint{font-size:calc(12.5px*var(--fs,1));opacity:.55;line-height:1.35;padding-right:62px}\n.fcard.fend .fhint{display:none}\n.frate{display:flex;flex-direction:column;gap:10px;width:100%}\n.burst{position:absolute;font-size:calc(96px*var(--fs,1));transform:translate(-50%,-50%) scale(.3);opacity:0;pointer-events:none;animation:burst .75s ease-out forwards;z-index:5}\n@keyframes burst{0%{opacity:0;transform:translate(-50%,-50%) scale(.3)}25%{opacity:1;transform:translate(-50%,-60%) scale(1.15)}100%{opacity:0;transform:translate(-50%,-140%) scale(1)}}\n@media (prefers-reduced-motion:reduce){.burst{animation-duration:.01s}}\n.feedban{display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;text-align:left;color:inherit;margin-bottom:12px}\n.feedban .ico{font-size:calc(34px*var(--fs,1))}\n.feedban .tt{display:flex;flex-direction:column;flex:1}\n.feedban .tt b{font-size:calc(18px*var(--fs,1))}\n.feedban small{opacity:.7;font-size:calc(13px*var(--fs,1))}\n.feedban .chev{font-size:calc(26px*var(--fs,1));opacity:.5}\n/* v76 neue Lernspiele, Konto, Feed (TikTok) */\n.newgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;width:100%}\n@media (min-width:768px){.newgrid{grid-template-columns:repeat(4,minmax(0,1fr))}}\n.clz{gap:12px;padding:20px 16px}\n.clzs{font-size:calc(21px*var(--fs,1));line-height:1.35;font-weight:600;text-align:center;overflow-wrap:anywhere}\n.clzs.hid{opacity:.7;font-weight:700}\n.clzs .blank{display:inline-block;min-width:3.2em;border-bottom:3px solid var(--accent);color:transparent;margin:0 2px}\n.clzs mark{background:transparent;font-weight:800;border-radius:6px;padding:0 4px}\n.clzs mark.ok{color:#1b9a4a;background:rgba(52,199,89,.16)}\n.clzs mark.bad{color:#d9362b;background:rgba(255,59,48,.14)}\n.micw{display:flex;flex-direction:column;align-items:center;gap:10px;padding:8px 0}\n.mic{width:96px;height:96px;border-radius:50%;border:1px solid var(--glass-line);background:var(--glass);font-size:calc(40px*var(--fs,1));cursor:pointer;box-shadow:var(--glass-shadow,0 8px 24px rgba(0,0,0,.18))}\n.mic.on{background:var(--accent);animation:micp 1.1s ease-in-out infinite}\n@keyframes micp{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}\n@media print{.hdr,.tabbar,.legalf,.orbs,.noprint,.btn,#toast,.modal,.sh2,.shbk{display:none!important}body,html{background:#fff!important;overflow:visible!important}.glass{background:#fff!important;box-shadow:none!important;border:1px solid #ccc!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;color:#000!important}*{color:#000!important}}\n\n.tile.v .tt b.lg{font-size:calc(15px*var(--fs,1));letter-spacing:-.02em}\n\n.segc.wide.two{grid-template-columns:repeat(2,1fr)}\n.segc.wide.two button{font-size:calc(15px*var(--fs,1));padding:10px 6px}\n.tile.v .tt b{overflow-wrap:normal;word-break:normal;hyphens:manual}\n.tile.v .tt b.lg{font-size:calc(14px*var(--fs,1));letter-spacing:-.03em}\n@media (min-width:700px){.tile.v{gap:8px;padding-left:12px;padding-right:10px}.tile.v .ico{font-size:calc(30px*var(--fs,1))}}\n@media (min-width:700px){.tile.v .tt b.lg{font-size:calc(13px*var(--fs,1))}.tile.v .tt{min-width:0}}\n.tile.feat{background-image:linear-gradient(135deg,rgba(10,132,255,.18),rgba(94,92,230,.12))}\n.tile.feat .tt b{font-size:calc(19px*var(--fs,1))}\n.tile.v .tt b.lg{font-size:inherit;letter-spacing:-.02em}\n@media (min-width:700px){.tile.v .tt b.lg{font-size:calc(13px*var(--fs,1))}}\n.tile.feat .tt b,.tile.feat .tt b.lg{font-size:calc(19px*var(--fs,1))}\n@media (min-width:700px){.tile.v .tt b.lg{overflow-wrap:anywhere;hyphens:auto;max-width:100%}.tile.v{min-width:0;overflow:hidden}}\n.newgrid .tile.feat{background-image:linear-gradient(135deg,rgba(10,132,255,.18),rgba(94,92,230,.12))}\n/* v81 Einrichtung, Quests, Empfehlung */\n.obw{display:flex;flex-direction:column;gap:10px;width:100%;max-width:520px;margin:0 auto;padding-top:14px}\n.obdots{display:flex;gap:6px;justify-content:center;margin:4px 0 6px}\n.obdots i{width:26px;height:5px;border-radius:3px;background:var(--glass-line);transition:background .3s}\n.obdots i.on{background:var(--accent)}\n.obh{text-align:center;display:flex;flex-direction:column;gap:4px;align-items:center;padding:6px 8px}\n.obh h2{margin:0;font-size:calc(24px*var(--fs,1))}\n.obh p{margin:0;opacity:.75}\n.obq{font-size:calc(22px*var(--fs,1));font-weight:800;letter-spacing:-.02em;margin:6px 4px 2px}\n.obopt{display:flex;align-items:center;gap:12px;width:100%;padding:13px 16px;text-align:left;color:inherit;border:1px solid transparent;transition:border-color .2s,background .2s}\n.obopt.on{border-color:var(--accent)}\n.obopt .oi{font-size:calc(28px*var(--fs,1))}.obopt .ot{display:flex;flex-direction:column;flex:1}\n.obopt .ot b{font-size:calc(17px*var(--fs,1))}.obopt .ot small{opacity:.7;font-size:calc(13px*var(--fs,1))}\n.obopt .ock{color:var(--accent);font-weight:800;font-size:calc(20px*var(--fs,1));min-width:18px}\n.obgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}\n.obg{padding:18px 0;font-size:calc(22px*var(--fs,1));font-weight:800;color:inherit;text-align:center;border:1px solid transparent}\n.obg.on{border-color:var(--accent);color:var(--accent)}\n.obnav{display:flex;gap:10px;justify-content:space-between;margin-top:8px;position:sticky;bottom:12px}\n.obnav .btn{flex:1}\n.obsum{display:flex;justify-content:space-between;gap:10px;padding:6px 0;border-bottom:1px solid var(--glass-line)}\n.obsum:last-child{border-bottom:0}\n.quests .qrow{display:flex;align-items:center;gap:12px;padding:6px 0}\n.quests .qi{font-size:calc(24px*var(--fs,1))}.quests .qt{display:flex;flex-direction:column;gap:5px;flex:1}\n.quests .qt b{font-size:calc(15px*var(--fs,1))}\n.quests .qd{font-size:calc(22px*var(--fs,1));color:#34C759;font-weight:800}.quests .qs{font-size:calc(13px*var(--fs,1));opacity:.7;font-weight:700}\n.quests .qrow.cl{opacity:.6}\n.tile{position:relative}\n.recb{position:absolute;top:8px;right:8px;font-style:normal;font-size:calc(10.5px*var(--fs,1));font-weight:800;padding:2px 7px;border-radius:999px;background:var(--accent);color:#fff}\n/* v82 Auswahl-Fenster: lesbar und ruhig */\n.sh2{background:rgba(255,255,255,.95)!important;-webkit-backdrop-filter:blur(30px) saturate(1.6);backdrop-filter:blur(30px) saturate(1.6)}\n:root[data-theme=\"dark\"] .sh2{background:rgba(32,34,44,.95)!important}\n.sh2 .shl{background:rgba(120,120,128,.10);max-height:54vh;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}\n.shi{color:inherit;min-height:56px;padding:8px 14px 8px 12px}\n.shi.dg{color:#ff3b30}\n.shi .shic{display:grid;place-items:center;flex:0 0 38px;width:38px;height:38px;border-radius:11px;background:rgba(120,120,128,.14);font-size:calc(21px*var(--fs,1))}\n.shi .shtx{display:flex;flex-direction:column;flex:1;min-width:0;gap:1px}\n.shi .shtx b{font-weight:600;font-size:calc(16.5px*var(--fs,1));line-height:1.25}\n.shi .shtx small{font-size:calc(12.5px*var(--fs,1));opacity:.62;line-height:1.3}\n.shi .shck{color:var(--accent);font-weight:800;font-size:calc(20px*var(--fs,1))}\n.shi.sel{background:rgba(47,111,235,.10)}\n.shi.sel .shic{background:var(--accent);color:#fff}\n.shi.cancel{color:var(--accent);font-weight:700;justify-content:center;background:rgba(120,120,128,.10);min-height:52px}\n:root[data-theme=\"dark\"] .sh2{background:rgba(32,34,44,.95)!important}\n.morebtn{margin-top:2px}\n.wkd.fz i{background:#7DD3FC;color:#fff}\n/* v84 Coach */\n.coban .ico{font-size:calc(30px*var(--fs,1))}\n.col-chat{display:flex;flex-direction:column;gap:8px;width:100%;max-height:46vh;overflow-y:auto;padding:4px 2px;overscroll-behavior:contain}\n.cob{max-width:86%;padding:10px 14px;border-radius:20px;font-size:calc(15.5px*var(--fs,1));line-height:1.35;overflow-wrap:anywhere;animation:fadeIn .2s ease-out}\n.cob.me{align-self:flex-end;background:var(--accent);color:#fff;border-bottom-right-radius:6px}\n.cob.ai{align-self:flex-start;background:var(--glass-soft);border:1px solid var(--glass-line);border-bottom-left-radius:6px}\n.coplan{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:8px;padding-top:8px;border-top:1px solid var(--glass-line)}\n.coplan b{font-size:calc(13.5px*var(--fs,1))}\n.cochips{display:flex;gap:8px;overflow-x:auto;padding:4px 0;width:100%;scrollbar-width:none}\n.cochips::-webkit-scrollbar{display:none}\n.chipb{flex:0 0 auto;padding:8px 14px;border-radius:999px;border:1px solid var(--glass-line);background:var(--glass-soft);color:inherit;font:inherit;font-size:calc(13.5px*var(--fs,1));cursor:pointer;white-space:nowrap}\n.coin{display:flex;gap:8px;width:100%;align-items:center}\n.coin .in{flex:1;min-width:0}\n.callbtn{margin-top:4px}\n.dots3{display:inline-flex;gap:4px}.dots3 i{width:7px;height:7px;border-radius:50%;background:currentColor;opacity:.4;animation:dt 1s infinite}\n.dots3 i:nth-child(2){animation-delay:.15s}.dots3 i:nth-child(3){animation-delay:.3s}\n@keyframes dt{0%,100%{opacity:.25;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}\n.callw{display:flex;flex-direction:column;align-items:center;gap:14px;width:100%;max-width:520px;margin:0 auto;padding-top:28px;min-height:80vh}\n.orb{position:relative;width:150px;height:150px;display:grid;place-items:center;margin:6px 0}\n.orb span{font-size:calc(54px*var(--fs,1));position:relative;z-index:2}\n.orb i{position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.85),var(--accent) 70%);opacity:.22}\n.orb i:nth-child(1){opacity:.5;inset:14px}\n.orb.listen i,.orb.speak i{animation:orbp 1.6s ease-in-out infinite}\n.orb i:nth-child(2){animation-delay:.25s!important}.orb i:nth-child(3){animation-delay:.5s!important}\n@keyframes orbp{0%,100%{transform:scale(.92);opacity:.25}50%{transform:scale(1.18);opacity:.5}}\n.callst{font-weight:700;font-size:calc(17px*var(--fs,1))}\n.callbox{min-height:110px}\n.callsay{font-size:calc(18px*var(--fs,1));font-weight:600;line-height:1.35}\n.callbar{display:flex;gap:28px;align-items:center;justify-content:center;margin-top:8px}\n.callmic,.callend{width:72px;height:72px;border-radius:50%;border:0;font-size:calc(30px*var(--fs,1));cursor:pointer;display:grid;place-items:center;color:#fff}\n.callmic{background:linear-gradient(135deg,#1E9BE8,#2F6BF0);box-shadow:0 8px 24px rgba(47,107,240,.4)}\n.callend{background:#FF3B30;box-shadow:0 8px 24px rgba(255,59,48,.4)}\n@media (prefers-reduced-motion:reduce){.orb i,.dots3 i{animation:none!important}}\n.bangrid{display:grid;grid-template-columns:minmax(0,1fr);gap:12px;width:100%}\n.bangrid .feedban{margin-bottom:0}\n@media (min-width:768px){.bangrid{grid-template-columns:repeat(2,minmax(0,1fr))}.newgrid.feat2{grid-template-columns:repeat(2,minmax(0,1fr))}}\n.morebtn .li{opacity:1}\n/* v86 */\n.chip.nw{background:rgba(10,132,255,.14);color:var(--accent)}\n.homeacts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;width:100%}\n.hact{display:flex;flex-direction:column;align-items:center;gap:2px;padding:12px 6px;color:inherit;text-align:center;border:0}\n.hact span{font-size:calc(26px*var(--fs,1))}.hact b{font-size:calc(14px*var(--fs,1))}.hact small{font-size:calc(11.5px*var(--fs,1));opacity:.65}\n.fcast p{font-size:calc(15px*var(--fs,1));line-height:1.4}\n.fbarw{position:relative;height:10px;border-radius:5px;background:var(--glass-line);overflow:hidden}\n.fbarw i{position:absolute;left:0;top:0;bottom:0;border-radius:5px}\n.fbarw .fprj{background:rgba(47,111,235,.35)}.fbarw .fnow{background:var(--accent);z-index:2}\n#toast.toast{top:auto!important;bottom:calc(104px + env(safe-area-inset-bottom))!important}\n.exb2{grid-template-columns:1fr 1fr!important}\n.exb2 .bad{grid-column:1/-1;background:transparent!important;box-shadow:none!important;border:0!important;color:#FF3B30;min-height:34px}\n/* v87 Einstellungen als Gruppen, Heute symmetrisch */\n.sect.acc{margin-bottom:10px}\n.acch{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;padding:14px 16px;border:0;color:inherit;text-align:left;font:inherit;cursor:pointer;border-radius:20px}\n.acch .acct{display:flex;flex-direction:column;gap:2px;min-width:0}\n.acch .acct b{font-size:calc(17px*var(--fs,1))}\n.acch .acct small{font-size:calc(13px*var(--fs,1));opacity:.65;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.acch .accchev{font-size:calc(20px*var(--fs,1));opacity:.55;flex:0 0 auto}\n.sect.acc.open>.acch{margin-bottom:8px}\n.chip3{align-items:center!important;text-align:center}\n.chip3 b,.chip3 small{text-align:center}\n.chip3 .prog{width:70%;align-self:center}\n@media (min-width:768px){main.home>.homeacts,main.home>.quests{grid-column:1/-1}.homeacts .hact{flex-direction:row;justify-content:center;gap:10px;padding:14px}}\n.setgrid .sect.acc,.sect.acc{padding:0!important;margin-left:0!important;margin-right:0!important;width:100%;box-sizing:border-box}\n.sect.acc>.glass.grp{margin:0}\n.sect.acc>.sn{padding:6px 8px 0}\n\n/* v88 Leistungsmodus */\nhtml.lite .glass,html.lite .hdr::before,html.lite .hdr.sc::before,html.lite .modal,html.lite .shbk,html.lite .sh2,html.lite .tabbar,html.lite [class*=\"glass\"]{-webkit-backdrop-filter:none!important;backdrop-filter:none!important}\nhtml.lite .glass{background:var(--glass-solid,rgba(255,255,255,.86))!important;box-shadow:0 1px 2px rgba(0,0,0,.08)!important}\nhtml.lite[data-lm=\"0\"] .glass{background:rgba(34,40,54,.94)!important}\nhtml.lite .hdr::before,html.lite .hdr.sc::before{background:var(--glass-solid,rgba(255,255,255,.92))!important}\nhtml.lite[data-lm=\"0\"] .hdr::before,html.lite[data-lm=\"0\"] .hdr.sc::before{background:rgba(24,28,40,.96)!important}\nhtml.lite .orbs{display:none}\nhtml.lite *,html.lite *::before,html.lite *::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;text-shadow:none!important;filter:none!important}\nhtml.lite .sp,html.lite .spin{animation-duration:.8s!important;animation-iteration-count:infinite!important}\nhtml.lite body{background-attachment:scroll}\nhtml.lite .sh2{background:rgba(255,255,255,.98)!important}\nhtml.lite[data-lm=\"0\"] .sh2{background:rgba(30,35,48,.98)!important}\n\n/* v90 Serie, Undo, Sounds */\n.runbar{display:flex;align-items:center;gap:10px;margin:8px 0 2px;padding:8px 12px;border-radius:16px;background:rgba(255,149,0,.14);border:1px solid rgba(255,149,0,.28);color:inherit}\n.runbar b{font-size:calc(14px*var(--fs,1));white-space:nowrap}\n.runbar .rbt{flex:1;height:6px;border-radius:6px;background:rgba(120,120,128,.22);overflow:hidden}\n.runbar .rbt i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#FFB020,#FF6A00);transition:width .35s}\n.runbar small{font-size:calc(11px*var(--fs,1));opacity:.7;white-space:nowrap}\n.runbar.hot{background:rgba(255,95,0,.2);border-color:rgba(255,95,0,.45)}\n.runbar.pop{animation:runpop .5s cubic-bezier(.2,1.4,.4,1)}\n@keyframes runpop{0%{transform:scale(.9)}60%{transform:scale(1.06)}100%{transform:scale(1)}}\n.undob{display:flex;align-items:center;gap:12px;padding:12px 16px;border:0;text-align:left;cursor:pointer;color:inherit;font:inherit}\n.undob .ui{width:36px;height:36px;border-radius:12px;display:grid;place-items:center;background:rgba(10,132,255,.14);color:var(--accent,#0A84FF);flex:none}\n.undob .ut{display:flex;flex-direction:column;min-width:0}\n.undob .ut b{font-size:calc(15px*var(--fs,1))}\n.undob .ut small{font-size:calc(12px*var(--fs,1));opacity:.65;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n\n.lenrow{display:grid;grid-template-columns:repeat(6,1fr);gap:6px}\n.lenb{position:relative;padding:10px 0;border-radius:12px;border:1px solid rgba(120,120,128,.25);background:var(--glass-soft,rgba(255,255,255,.5));font:inherit;font-weight:600;color:inherit;cursor:pointer}\n.lenb.on{background:var(--accent,#0A84FF);color:#fff;border-color:transparent}\n.lenb.dim{opacity:.45}\n.lenb i{position:absolute;top:-5px;right:-2px;font-size:calc(11px*var(--fs,1));font-style:normal;color:#F59E0B}\n\n/* v92 */\n.mcgq{margin-top:8px}\n.mcgopts{display:grid;gap:10px;margin:10px 0}\n.mcgo{display:flex;align-items:center;gap:12px;padding:14px 16px;border:0;text-align:left;font:inherit;color:inherit;cursor:pointer;border-radius:20px}\n.mcgo .nm{width:26px;height:26px;border-radius:8px;display:grid;place-items:center;background:rgba(120,120,128,.18);font-size:calc(13px*var(--fs,1));font-weight:700;flex:none}\n.mcgo.right{background:rgba(52,199,89,.22)!important;outline:2px solid rgba(52,199,89,.7)}\n.mcgo.wrong{background:rgba(255,69,58,.18)!important;outline:2px solid rgba(255,69,58,.6)}\n.mnem{margin-top:6px;padding:8px 10px;border-radius:12px;background:rgba(255,204,0,.16);font-size:calc(13px*var(--fs,1))}\n\n.fre{display:flex;align-items:center;gap:10px;padding:6px 0}\n.fre .fw{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}\n.fin{padding:7px 10px!important;font-size:calc(14px*var(--fs,1))!important;min-height:0!important}\n:focus-visible{outline:3px solid var(--accent,#0A84FF);outline-offset:2px}\nhtml.hc{--glass:rgba(255,255,255,.96)!important}\nhtml.hc[data-lm=\"0\"]{--glass:rgba(20,24,34,.97)!important}\nhtml.hc .glass{border:1.5px solid rgba(0,0,0,.55)!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}\nhtml.hc[data-lm=\"0\"] .glass{border-color:rgba(255,255,255,.6)!important}\nhtml.hc small,html.hc .hint{opacity:1!important;color:inherit!important}\nhtml.hc .orbs{display:none}\n\n/* v93 Liga */\n.ligal{padding:6px 0!important}\n.lgr{display:flex;align-items:center;gap:10px;padding:9px 14px}\n.lgr .lgn{width:22px;text-align:right;font-weight:700;opacity:.7}\n.lgr .lge{font-size:calc(22px*var(--fs,1));width:28px;text-align:center}\n.lgr .lgm{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.lgr.me{background:rgba(10,132,255,.16);font-weight:700}\n.lgz{padding:5px 14px;font-size:calc(11px*var(--fs,1));font-weight:700;letter-spacing:.04em;text-transform:uppercase}\n.lgz.up{color:#1a9c3f}.lgz.dn{color:#d9382c}\n.lgh{display:flex;justify-content:space-between;font-size:calc(14px*var(--fs,1));padding:3px 0}\n\n.notel{display:grid;gap:6px;margin-top:4px}\n.noter{display:grid;grid-template-columns:minmax(0,1.2fr) 1fr 38px 40px;align-items:center;gap:8px;font-size:calc(13px*var(--fs,1))}\n.noter .nn{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.noter .nb{height:6px;border-radius:6px;background:rgba(120,120,128,.22);overflow:hidden}\n.noter .nb i{display:block;height:100%;background:linear-gradient(90deg,#34C759,#0A84FF)}\n.noter b{text-align:right}.noter small{opacity:.6;text-align:right}\n\n/* v95 Onboarding */\n.obw .emgrid{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}\n.obw .emb{aspect-ratio:1;border-radius:14px;border:1px solid rgba(120,120,128,.25);background:var(--glass-soft,rgba(255,255,255,.5));font-size:calc(24px*var(--fs,1));cursor:pointer}\n.obw .emb.on{outline:3px solid var(--accent,#0A84FF);background:rgba(10,132,255,.14)}\n\n.obseg{display:flex;gap:4px;padding:3px;border-radius:12px;background:rgba(120,120,128,.18)}\n.obseg button{flex:1;border:0;background:transparent;font:inherit;font-weight:600;font-size:calc(13px*var(--fs,1));padding:8px 6px;border-radius:9px;color:inherit;cursor:pointer;white-space:nowrap}\n.obseg button.on{background:var(--accent,#0A84FF);color:#fff}\n\n.shopt{border:1.5px solid rgba(10,132,255,.35)!important}\n.shopt.can{border-color:rgba(52,199,89,.8)!important;background:linear-gradient(135deg,rgba(52,199,89,.16),transparent)!important}\n.shopt .prog{margin-top:6px}\n/* v97: Liquid-Glass Segmente */\n.obseg{background:rgba(120,120,128,.16);border:1px solid rgba(255,255,255,.14);box-shadow:inset 0 1px 2px rgba(0,0,0,.12);-webkit-backdrop-filter:blur(14px) saturate(1.6);backdrop-filter:blur(14px) saturate(1.6);border-radius:14px}\n.obseg button{border-radius:11px;min-width:40px;min-height:36px;transition:transform .15s,background .2s,box-shadow .2s;-webkit-tap-highlight-color:transparent}\n.obseg button:active{transform:scale(.94)}\n.obseg button.on{background:linear-gradient(180deg,rgba(255,255,255,.28),rgba(255,255,255,0) 55%),var(--accent,#0A84FF);color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.45)}\nhtml.lite .obseg{-webkit-backdrop-filter:none;backdrop-filter:none}\n\n/* v97: Serien-Popup */\n#stkpop{position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px}\n#stkpop .stk-bg{position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,rgba(255,149,0,.45),rgba(0,0,0,.82));animation:stkfade .35s both}\n#stkpop.out{opacity:0;transition:opacity .25s}\n.stk-card{position:relative;width:min(92vw,420px);text-align:center;padding:30px 22px 22px;border-radius:32px;background:linear-gradient(160deg,rgba(255,255,255,.22),rgba(255,255,255,.06));border:1.5px solid rgba(255,255,255,.3);-webkit-backdrop-filter:blur(26px) saturate(1.8);backdrop-filter:blur(26px) saturate(1.8);box-shadow:0 30px 80px rgba(0,0,0,.5),0 0 90px rgba(255,149,0,.4);color:#fff;overflow:hidden;animation:stkin .6s cubic-bezier(.2,1.4,.4,1) both}\n.stk-rays{position:absolute;left:50%;top:70px;width:520px;height:520px;margin:-260px 0 0 -260px;background:repeating-conic-gradient(rgba(255,200,60,.22) 0 8deg,transparent 8deg 22deg);-webkit-mask:radial-gradient(circle,#000 0,transparent 65%);mask:radial-gradient(circle,#000 0,transparent 65%);animation:stkspin 14s linear infinite}\n.stk-fire{position:relative;font-size:calc(104px*var(--fs,1));line-height:1;filter:drop-shadow(0 0 24px rgba(255,140,0,.9));animation:stkfire 1.1s ease-in-out infinite alternate,stkpop .7s .1s cubic-bezier(.2,1.6,.4,1) both}\n.stk-num{position:relative;font-size:calc(92px*var(--fs,1));font-weight:900;line-height:1;margin-top:4px;background:linear-gradient(180deg,#FFE27A,#FF9500);-webkit-background-clip:text;background-clip:text;color:transparent;animation:stkpop .7s .25s cubic-bezier(.2,1.6,.4,1) both}\n.stk-lab{position:relative;font-size:calc(22px*var(--fs,1));font-weight:800;letter-spacing:.5px;margin-top:2px}\n.stk-msg{position:relative;opacity:.85;margin-top:8px;font-weight:600}\n.stk-week{position:relative;display:flex;justify-content:space-between;gap:4px;margin:20px 0 18px}\n.stk-week .sd{flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;animation:stkpop .5s both}\n.stk-week .sd i{width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;font-style:normal;font-size:calc(18px*var(--fs,1))}\n.stk-week .sd.ok i{background:linear-gradient(180deg,#FFB340,#FF7A00);box-shadow:0 0 14px rgba(255,140,0,.7)}\n.stk-week .sd.cur i{outline:2px solid #fff;outline-offset:2px}\n.stk-week .sd b{font-size:calc(12px*var(--fs,1));opacity:.8}\n.stk-ok{position:relative;width:100%;font-size:calc(18px*var(--fs,1));padding:14px}\n@keyframes stkin{from{transform:scale(.6) translateY(40px);opacity:0}to{transform:none;opacity:1}}\n@keyframes stkpop{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}\n@keyframes stkfade{from{opacity:0}to{opacity:1}}\n@keyframes stkspin{to{transform:rotate(360deg)}}\n@keyframes stkfire{from{transform:scale(1) rotate(-3deg)}to{transform:scale(1.1) rotate(3deg)}}\nhtml.lite .stk-card{-webkit-backdrop-filter:none;backdrop-filter:none;background:#2a2118}\nhtml.lite .stk-rays{animation:none}\n@media (prefers-reduced-motion:reduce){.stk-card,.stk-fire,.stk-num,.stk-rays,.stk-week .sd{animation:none}}\n.stk-card{background:linear-gradient(160deg,rgba(60,36,12,.82),rgba(24,16,10,.88))!important}\n.stk-num{filter:drop-shadow(0 4px 14px rgba(255,140,0,.6))}\n#stkpop .stk-bg{background:radial-gradient(circle at 50% 40%,rgba(255,149,0,.4),rgba(0,0,0,.85))}\n\n/* v98 */\n.fl{display:inline-block;transition:transform .3s}\n.fl1{filter:drop-shadow(0 0 3px rgba(255,140,0,.6))}\n.fl2{font-size:1.15em;filter:drop-shadow(0 0 6px rgba(255,140,0,.8));animation:flick 1.4s ease-in-out infinite alternate}\n.fl3{font-size:1.3em;filter:drop-shadow(0 0 9px rgba(255,90,0,.9)) hue-rotate(-12deg);animation:flick 1.1s ease-in-out infinite alternate}\n.fl4{font-size:1.4em;filter:drop-shadow(0 0 12px rgba(80,160,255,.95)) hue-rotate(160deg);animation:flick .9s ease-in-out infinite alternate}\n@keyframes flick{from{transform:scale(1) rotate(-4deg)}to{transform:scale(1.12) rotate(4deg)}}\nhtml.lite .fl{animation:none!important}\n.bossc{border:1.5px solid rgba(255,59,48,.5)!important;background:linear-gradient(135deg,rgba(255,59,48,.14),transparent)!important}\n\n/* v102 */\n.callword{font-size:clamp(26px,6vw,40px);font-weight:800;margin:8px 0 4px;word-break:break-word}\n\n/* v103 Feed: symmetrisch, gr\u00f6\u00dfer, iPad */\nmain.feedm{max-width:min(720px,100%)}\n.feed{height:calc(100vh - 170px);height:calc(100dvh - 170px);min-height:420px;max-height:900px}\n.fmid{padding:0 84px;gap:16px}\n.fhint{padding:0 84px;text-align:center}\n.fbar{right:14px;top:50%;bottom:auto;transform:translateY(-50%);gap:16px}\n.fact span{width:58px;height:58px;font-size:calc(26px*var(--fs,1))}\n.fword{font-size:calc(46px*var(--fs,1))}\n.fword.sm{font-size:calc(34px*var(--fs,1))}\n.ftr{font-size:calc(30px*var(--fs,1))}\n.fex{font-size:calc(17px*var(--fs,1));max-width:32ch}\n.fprog{position:absolute;left:18px;right:18px;top:8px;height:3px;border-radius:3px;background:var(--glass-line);overflow:hidden}\n.fprog i{display:block;height:100%;background:var(--accent);border-radius:3px;transition:width .3s}\n.fcard{padding-top:22px}\n@media (max-width:520px){.fmid{padding:0 70px}.fhint{padding:0 70px}.fword{font-size:calc(38px*var(--fs,1))}.fact span{width:52px;height:52px}}\n@media (min-width:1000px){.fword{font-size:calc(54px*var(--fs,1))}}\n\n@keyframes fpulse{0%{box-shadow:0 0 0 0 rgba(52,199,89,.6)}100%{box-shadow:0 0 0 26px rgba(52,199,89,0)}}\n@keyframes fshake{0%,100%{transform:translateX(0)}20%{transform:translateX(-9px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(3px)}}\n@keyframes fpop{0%{transform:scale(.92);opacity:0}100%{transform:scale(1);opacity:1}}\n.fcard.okd{animation:fpulse .6s ease-out}\n.fcard.nod{animation:fshake .45s ease-out}\n.fcard .fword{animation:fpop .35s cubic-bezier(.2,.9,.3,1.3)}\n.fcard.rev .ftr{animation:fpop .4s cubic-bezier(.2,.9,.3,1.3)}\n.fact:active span{transform:scale(.88)}\n.burst{font-size:calc(128px*var(--fs,1))}\n@media (prefers-reduced-motion:reduce){.fcard.okd,.fcard.nod,.fcard .fword,.fcard.rev .ftr{animation:none}}\n.fcard.fend .fmid{padding:0 18px}\n\n/* v106 Coach als sauberer Chat */\n.cowrap{display:flex;flex-direction:column;width:100%;max-width:760px;margin:0 auto;height:calc(100vh - 120px);height:calc(100dvh - 120px);min-height:420px;gap:10px}\n.cohead{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;padding:0 4px}\n.cohead h1{margin:0;font-size:calc(30px*var(--fs,1));letter-spacing:-.02em}\n.cohead small{opacity:.65;font-size:calc(14px*var(--fs,1))}\n.callpill{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:999px;border:1px solid var(--glass-line);background:linear-gradient(135deg,rgba(52,199,89,.28),rgba(52,199,89,.12));color:inherit;font-weight:700;font-size:calc(15px*var(--fs,1));cursor:pointer;white-space:nowrap}\n.callpill:active{transform:scale(.96)}\n.cowrap .col-chat{flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;gap:12px;padding:6px 2px;-webkit-overflow-scrolling:touch}\n.corow{display:flex;gap:10px;align-items:flex-end;max-width:92%}\n.coav{flex:none;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:var(--glass-soft);border:1px solid var(--glass-line);font-size:calc(18px*var(--fs,1))}\n.corow .cob.ai{max-width:none}\n.cosuggrid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:auto}\n.cosug{display:flex;flex-direction:column;align-items:flex-start;gap:8px;text-align:left;padding:14px 16px;border-radius:20px;border:1px solid var(--glass-line);background:var(--glass-soft);color:inherit;font-size:calc(15px*var(--fs,1));font-weight:600;line-height:1.3;cursor:pointer;transition:transform .15s,background .2s}\n.cosug:active{transform:scale(.97)}\n.cosi{font-size:calc(26px*var(--fs,1))}\n@media (max-width:520px){.cosuggrid{grid-template-columns:1fr}.cosug{flex-direction:row;align-items:center}}\n.cowrap .cochips{flex:none}\n.cocomp{flex:none;display:flex;align-items:center;gap:6px;padding:6px 6px 6px 18px;border-radius:999px;background:var(--glass);border:1px solid var(--glass-line);box-shadow:0 6px 24px rgba(0,0,0,.12);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)}\n.cocomp:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px rgba(var(--accrgb),.25)}\n.cocomp input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:inherit;font-size:calc(17px*var(--fs,1));padding:10px 0;font-family:inherit}\n.cobtn{flex:none;width:44px;height:44px;border-radius:50%;border:0;display:grid;place-items:center;background:var(--glass-soft);color:inherit;cursor:pointer}\n.cobtn.pri{background:var(--accent);color:#fff}\n.cobtn:active{transform:scale(.92)}\n\n/* v107 Coach im Knowunity-Stil */\n.cowrap{position:relative;height:calc(100vh - 96px);height:calc(100dvh - 96px);gap:12px}\n.cowrap>.callpill{position:absolute;right:4px;top:-6px;z-index:2}\n.cowrap .col-chat{padding-top:34px}\n.cowrap.empty .col-chat{justify-content:center}\n.comascot{display:flex;flex-direction:column;align-items:center;gap:14px;margin:auto 0;width:100%}\n.copeek{height:58px;overflow:hidden;font-size:calc(96px*var(--fs,1));line-height:1.1;text-align:center;animation:peek .6s cubic-bezier(.2,.9,.3,1.2) both;margin-bottom:-14px;z-index:0}\n@keyframes peek{from{transform:translateY(60px)}to{transform:none}}\n.cobubble{position:relative;z-index:1;max-width:min(520px,92%);padding:20px 26px;border-radius:30px;background:var(--glass);border:1px solid var(--glass-line);text-align:center;font-family:\"Avenir Next Condensed\",\"Arial Narrow\",\"Helvetica Neue\",system-ui,sans-serif;font-weight:800;font-size:calc(34px*var(--fs,1));line-height:1.05;letter-spacing:-.01em}\n.cochoices{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;width:min(640px,100%);padding:14px 10px 10px;border-radius:30px;background:var(--glass-soft);border:1px solid var(--glass-line)}\n.cochoice{display:flex;flex-direction:column;align-items:center;gap:8px;border:0;background:none;color:inherit;font-weight:700;font-size:calc(13.5px*var(--fs,1));cursor:pointer;padding:6px 2px;line-height:1.15;text-align:center}\n.cochoice:active{transform:scale(.95)}\n.cocic{display:grid;place-items:center;width:68px;height:68px;border-radius:22px;border:2px solid;font-size:calc(34px*var(--fs,1))}\n.copill{padding:12px 22px;border-radius:999px;border:1px solid var(--glass-line);background:var(--glass-soft);color:inherit;font-weight:700;font-size:calc(16px*var(--fs,1));cursor:pointer}\n.comodes{flex:none;display:flex;gap:8px;overflow-x:auto;padding:2px 2px;scrollbar-width:none}\n.comodes::-webkit-scrollbar{display:none}\n.comode{flex:none;display:inline-flex;align-items:center;gap:8px;padding:11px 18px;border-radius:999px;border:1px solid var(--glass-line);background:var(--glass-soft);color:inherit;font-weight:700;font-size:calc(16px*var(--fs,1));cursor:pointer;white-space:nowrap}\n.comode.on{background:var(--accent);color:#fff;border-color:var(--accent)}\n.comode span{font-size:calc(18px*var(--fs,1))}\n.cocompw{flex:none;display:flex;gap:10px;align-items:flex-end}\n.coplus{flex:none;width:52px;height:52px;border-radius:50%;border:1px solid var(--glass-line);background:var(--glass-soft);color:inherit;display:grid;place-items:center;cursor:pointer}\n.cowrap .cocomp{flex:1;min-width:0;flex-direction:column;align-items:stretch;gap:2px;border-radius:28px;padding:8px 8px 8px 18px}\n.cotagrow{padding:2px 0 0}\n.cotagc{display:inline-flex;align-items:center;gap:8px;padding:6px 6px 6px 14px;border-radius:999px;background:var(--glass-soft);border:1px solid var(--glass-line);font-weight:700;font-size:calc(14px*var(--fs,1))}\n.cotagc button{border:0;background:none;color:inherit;opacity:.7;font-size:calc(14px*var(--fs,1));cursor:pointer;padding:2px 8px}\n.cocrow{display:flex;align-items:center;gap:4px}\n.cocrow input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:inherit;font-size:calc(17px*var(--fs,1));padding:10px 0;font-family:inherit}\n.cowrap .cobtn{background:transparent}\n.cowrap .cobtn.pri{background:var(--accent)}\n@media (max-width:620px){.cochoices{grid-template-columns:repeat(4,1fr)}.cocic{width:56px;height:56px;font-size:calc(28px*var(--fs,1));border-radius:18px}.cobubble{font-size:calc(28px*var(--fs,1))}.cochoice{font-size:calc(12px*var(--fs,1))}}\n.cowrap .col-chat{max-height:none!important}\n.cowrap{max-height:none}\n/* v108: Lern-Clip wie ein Film */\n.clipbox{--ch:215;min-height:min(62vh,560px);padding:0;display:grid;align-items:center;justify-items:center;isolation:isolate;background:var(--glass)}\n.clipbg{position:absolute;inset:-20%;z-index:-1;filter:blur(60px) saturate(1.3);pointer-events:none}\n.clipbg b{position:absolute;border-radius:50%;opacity:.5;transition:background-color 1.2s ease;will-change:transform}\n.clipbg b:nth-child(1){width:55%;height:55%;left:2%;top:4%;background:hsl(var(--ch) 85% 55%);animation:cDrift1 14s ease-in-out infinite alternate}\n.clipbg b:nth-child(2){width:50%;height:50%;right:0;top:30%;background:hsl(calc(var(--ch) + 50) 80% 55%);animation:cDrift2 17s ease-in-out infinite alternate}\n.clipbg b:nth-child(3){width:45%;height:45%;left:25%;bottom:-4%;background:hsl(calc(var(--ch) - 40) 80% 50%);animation:cDrift3 19s ease-in-out infinite alternate}\n@keyframes cDrift1{to{transform:translate(28%,18%) scale(1.25)}}\n@keyframes cDrift2{to{transform:translate(-30%,-14%) scale(.85)}}\n@keyframes cDrift3{to{transform:translate(18%,-26%) scale(1.3)}}\n.clipprog{top:14px;left:18px;right:18px;gap:5px}\n.clipprog i{position:relative;overflow:hidden;background:rgba(255,255,255,.22)}\n.clipprog i b{position:absolute;left:0;top:0;bottom:0;width:0;background:#fff;border-radius:2px}\n.clipst{display:grid;width:100%;height:100%;align-items:center;justify-items:center}\n.clipst .cscene{grid-area:1/1;padding:40px 22px;gap:14px;animation:none;will-change:transform,opacity;max-width:100%}\n.cscene.in{animation:cIn .75s cubic-bezier(.2,.8,.2,1) both}\n.cscene.out{animation:cOut .5s cubic-bezier(.4,0,.8,.4) both;pointer-events:none}\n@keyframes cIn{from{opacity:0;transform:translateY(34px) scale(.94);filter:blur(10px)}to{opacity:1;transform:none;filter:none}}\n@keyframes cOut{to{opacity:0;transform:translateY(-34px) scale(1.05);filter:blur(10px)}}\n.clipst .cword{font-size:calc(clamp(46px,10vw,104px)*var(--fs,1));animation:none;text-shadow:0 6px 30px rgba(0,0,0,.25);line-height:1.05}\n.cscene.in .cword{animation:cWord 1s cubic-bezier(.16,1,.3,1) .12s both}\n.cscene.in .cemo{animation:cEmo .9s cubic-bezier(.3,1.5,.5,1) both}\n@keyframes cWord{from{opacity:0;transform:scale(.82);letter-spacing:.08em}to{opacity:1;transform:none}}\n@keyframes cEmo{from{opacity:0;transform:scale(.2) rotate(-14deg)}to{opacity:1;transform:none}}\n.clipst .cemo{font-size:calc(clamp(64px,13vw,132px));animation:none;filter:drop-shadow(0 10px 18px rgba(0,0,0,.28))}\n.clipst .cmean,.clipst .cex{animation:none!important;opacity:0;transform:translateY(18px);max-height:0;overflow:hidden;transition:opacity .7s ease,transform .8s cubic-bezier(.2,.8,.2,1),max-height .8s ease;margin:0}\n.clipst .cmean.v{opacity:1;transform:none;max-height:140px;color:var(--ink);font-weight:700;font-size:calc(clamp(26px,5.5vw,48px)*var(--fs,1))}\n.clipst .cmean.v span{color:color-mix(in srgb,hsl(var(--ch) 85% 48%) 55%,var(--ink))}\n.clipst .cex.v{opacity:1;transform:none;max-height:200px;transition-delay:.15s}\n.clippause{position:absolute;inset:0;display:grid;place-items:center;font-size:calc(72px*var(--fs,1));background:rgba(0,0,0,.25);backdrop-filter:blur(4px);z-index:3;animation:cIn .3s both}\n.clippause[hidden]{display:none}\n@media (prefers-reduced-motion:reduce){.clipbg b,.cscene.in,.cscene.out{animation:none}}\n/* v108: Galgen-Tastatur, Memory-Fit, Becherspiel */\n.kbd{flex-direction:column;flex-wrap:nowrap;gap:8px;align-items:center}\n.kbd .kr{display:flex;gap:6px;justify-content:center;width:100%;max-width:760px}\n.kbd .key{flex:1 1 0;min-width:0;width:auto;max-width:62px;height:clamp(44px,7vw,62px);font-size:clamp(15px,2.4vw,22px)}\n.memgrid.fit{grid-template-columns:repeat(var(--mc),1fr)!important;grid-template-rows:repeat(var(--mr),1fr);gap:clamp(6px,1.2vw,12px);width:min(100%,var(--mw));margin:0 auto;aspect-ratio:calc(var(--mc)/(var(--mr)*.92));max-height:calc(100dvh - 330px);min-height:240px}\n.memgrid.fit .mc{aspect-ratio:auto;height:100%;min-height:0;font-size:clamp(13px,2.2vw,22px);border-radius:clamp(12px,2vw,20px)}\n.brq{padding:14px 18px;text-align:center}\n.brarena{position:relative;width:100%;max-width:760px;height:clamp(210px,34vh,300px);margin:6px auto 0}\n.brtable{position:absolute;left:4%;right:4%;bottom:6px;height:10px;border-radius:50%;background:rgba(0,0,0,.18);filter:blur(5px)}\n.brcup{position:absolute;bottom:14px;left:calc((var(--s) + .5) / var(--n) * 100%);width:calc(86% / var(--n));max-width:150px;height:58%;transform:translateX(-50%);transition:left .5s cubic-bezier(.45,.05,.2,1);background:none;border:0;padding:0;display:block;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.brlab{position:absolute;left:50%;bottom:0;transform:translateX(-50%);max-width:130%;padding:6px 12px;border-radius:12px;background:var(--glass);border:1px solid var(--glass-line);font-weight:800;font-size:clamp(15px,2.6vw,24px);color:var(--ink);white-space:nowrap}\n.brbody{position:absolute;left:0;right:0;bottom:0;top:0;transition:transform .55s cubic-bezier(.3,1.3,.5,1);transform-origin:50% 100%;filter:drop-shadow(0 10px 12px rgba(0,0,0,.25))}\n.brbody i{position:absolute;inset:0;clip-path:polygon(10% 0,90% 0,100% 100%,0 100%);background:linear-gradient(100deg,hsl(var(--ch,215) 80% 62%),hsl(var(--ch,215) 80% 44%) 55%,hsl(var(--ch,215) 80% 52%))}\n.brbody::before{content:\"\";position:absolute;left:6%;right:6%;top:-2px;height:14%;border-radius:50%/60%;background:rgba(255,255,255,.35);z-index:1}\n.brcup:nth-child(2) .brbody i{filter:hue-rotate(40deg)}.brcup:nth-child(3) .brbody i{filter:hue-rotate(90deg)}.brcup:nth-child(4) .brbody i{filter:hue-rotate(150deg)}\n.brarena.lift .brbody,.brcup.open .brbody{transform:translateY(-66%) rotate(-8deg)}\n.brcup.good .brlab{background:rgba(52,199,89,.28);border-color:#34C759}.brcup.bad .brlab{background:rgba(255,69,58,.2);border-color:#FF453A}\n.brarena:not(.lift) .brlab{opacity:0;transition:opacity .25s}.brarena .brcup.open .brlab,.brarena.lift .brlab{opacity:1}\n.brmsg{min-height:44px;text-align:center;font-weight:700;color:var(--ink2);padding:6px 4px}\n@media (prefers-reduced-motion:reduce){.brcup,.brbody{transition-duration:.01s}}\n/* v109: Feed klar bedienbar */\n.fbar{display:none!important}\n.fmid,.fhint{padding:0 18px!important}\n.fcard{touch-action:pan-y;padding-bottom:16px}\n.fdock{width:100%;display:flex;flex-direction:column;gap:10px;align-items:center;position:relative}\n.fshow{width:100%;border:1px solid var(--glass-line);border-radius:20px;padding:14px;background:rgba(var(--accrgb),.2);color:var(--ink);cursor:pointer;display:flex;flex-direction:column;gap:2px}\n.fshow b{font-size:calc(18px*var(--fs,1))}.fshow small{opacity:.7;font-size:calc(12.5px*var(--fs,1))}\n.frate2{display:none;width:100%;flex-direction:column;gap:8px}\n.fq{text-align:center;font-weight:700;opacity:.75;font-size:calc(14px*var(--fs,1))}\n.fbtns{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.fbn{border-radius:20px;padding:14px 8px;border:2px solid transparent;color:var(--ink);cursor:pointer;display:flex;flex-direction:column;gap:2px;transition:transform .15s}\n.fbn b{font-size:calc(18px*var(--fs,1))}.fbn small{font-size:calc(12px*var(--fs,1));opacity:.75}\n.fbn.no{background:rgba(255,159,10,.2);border-color:rgba(255,159,10,.55)}\n.fbn.yes{background:rgba(52,199,89,.22);border-color:rgba(52,199,89,.6)}\n.fbn.on{transform:scale(1.03);box-shadow:0 0 0 3px rgba(255,255,255,.35) inset}\n.fbn:active{transform:scale(.96)}\n.fspk{position:absolute;right:0;top:-62px;width:46px;height:46px;border-radius:50%;border:1px solid var(--glass-line);background:var(--glass-soft);font-size:calc(20px*var(--fs,1));cursor:pointer}\n.fcard.rev .fshow{display:none}.fcard.rev .frate2{display:flex}\n.fhint{display:block;text-align:center;opacity:.6;min-height:1.4em}\n.fhint span{display:none}.fhint .h0{display:inline}\n.fcard.rev .fhint .h0{display:none}.fcard.rev .fhint .h1{display:inline}\n.fcard.okd .fhint .h1,.fcard.nod .fhint .h1{display:none}.fcard.okd .fhint .h2,.fcard.nod .fhint .h2{display:inline}\n.fcard.swr{box-shadow:0 0 0 4px rgba(52,199,89,.8)}.fcard.swl{box-shadow:0 0 0 4px rgba(255,159,10,.85)}\n.fcard.swr::after,.fcard.swl::after{position:absolute;top:14%;font-size:calc(30px*var(--fs,1));font-weight:900;padding:8px 16px;border-radius:14px;z-index:3;pointer-events:none}\n.fcard.swr::after{content:\"\u2713 Gewusst\";right:14px;background:rgba(52,199,89,.9);color:#fff}\n.fcard.swl::after{content:\"\u2717 Noch nicht\";left:14px;background:rgba(255,159,10,.95);color:#fff}\n.fcard.fend .fdock{display:none}\n.fcard.swr::after,.fcard.swl::after{inset:auto!important;width:auto!important;height:auto!important;top:14%!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;mix-blend-mode:normal!important;opacity:1!important;box-shadow:none!important;border:0!important}\n.fcard.swr::after{right:14px!important;left:auto!important}.fcard.swl::after{left:14px!important;right:auto!important}\n.fcard.swr::after,.fcard.swl::after{left:50%!important;right:auto!important;transform:translateX(-50%);white-space:nowrap;font-size:calc(24px*var(--fs,1))!important}\n.swhint{text-align:center;font-size:calc(12.5px*var(--fs,1));opacity:.6;margin-top:8px}\n.stage{position:relative}\n.stage.swr::after,.stage.swl::after{position:absolute;top:10px;left:50%;transform:translateX(-50%);z-index:5;font-size:calc(22px*var(--fs,1));font-weight:900;padding:8px 16px;border-radius:14px;color:#fff;white-space:nowrap;pointer-events:none}\n.stage.swr::after{content:\"\u2713 Gewusst\";background:rgba(52,199,89,.92)}\n.stage.swl::after{content:\"\u2717 Noch nicht\";background:rgba(255,159,10,.95)}\n/* v111: Korrektur wie in der Klassenarbeit */\n.korr{--red:#D70015}\n.krow{display:grid;grid-template-columns:1fr 1fr 28px;gap:2px 10px;padding:8px 0;border-bottom:1px solid var(--glass-line);align-items:baseline}\n.kq{font-size:calc(14px*var(--fs,1));opacity:.8}\n.ka{font-family:\"Bradley Hand\",\"Segoe Print\",\"Comic Sans MS\",cursive;font-size:calc(18px*var(--fs,1));color:var(--ink);text-decoration:underline;text-decoration-color:rgba(120,120,120,.5)}\n.km{font-family:\"Bradley Hand\",\"Segoe Print\",cursive;font-weight:900;font-size:calc(22px*var(--fs,1));color:var(--red);text-align:center}\n.km.ok{color:#d9232e}\n.ks{grid-column:1/-1;font-family:\"Bradley Hand\",\"Segoe Print\",cursive;color:var(--red);font-size:calc(17px*var(--fs,1))}\n.ks small{opacity:.8;font-size:.75em;margin-left:6px}\n.kfoot{display:flex;justify-content:space-between;padding-top:12px;font-family:\"Bradley Hand\",\"Segoe Print\",cursive;font-size:calc(22px*var(--fs,1));color:var(--red)}\n/* v112 */\nhtml.calm *,html.calm *::before,html.calm *::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}\nhtml.calm .clipbg,html.calm .bgblob{display:none!important}\n/* v113: Coach h\u00f6her, Optionen */\n.cowrap{height:calc(100vh - 78px);height:calc(100dvh - 78px - env(safe-area-inset-bottom,0px))}\n.coopts{display:flex;flex-direction:column;gap:8px;margin-top:10px}\n.coopt{padding:12px 14px;border-radius:16px;border:1px solid var(--glass-line);background:rgba(var(--accrgb),.18);color:var(--ink);font-weight:700;text-align:left;cursor:pointer}\n.coopt:active{transform:scale(.98)}\n.cob.ai{white-space:normal}\n/* v114: \u00dcben-Raster sauber und symmetrisch */\n.newgrid{grid-auto-rows:1fr}\n.newgrid .tile.v{flex-direction:column!important;align-items:flex-start!important;justify-content:flex-start!important;gap:6px;padding:14px 14px 12px!important;min-height:116px;overflow:hidden;min-width:0}\n.newgrid .tile.v .ico{font-size:calc(32px*var(--fs,1));line-height:1}\n.newgrid .tile.v .tt{display:flex;flex-direction:column;gap:3px;width:100%;min-width:0}\n.newgrid .tile.v .tt b,.newgrid .tile.v .tt b.lg{font-size:calc(clamp(14px,3.9vw,16px)*var(--fs,1));hyphens:manual;-webkit-hyphens:manual;overflow-wrap:normal;word-break:normal;letter-spacing:-.01em;line-height:1.15;max-width:100%}\n.newgrid .tile.v .tt small{font-size:calc(12.5px*var(--fs,1));line-height:1.25;opacity:.72;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n.newgrid.feat2 .tile.v{flex-direction:row!important;align-items:center!important;gap:14px;min-height:88px;padding:16px 18px!important}\n.newgrid.feat2 .tile.v .ico{font-size:calc(40px*var(--fs,1))}\n.newgrid.feat2 .tile.v .tt b,.newgrid.feat2 .tile.v .tt b.lg{font-size:calc(19px*var(--fs,1))}\n@media (min-width:768px){\n .newgrid:not(.feat2)>.tile.v:last-child:nth-child(4n+1){grid-column:1/-1;flex-direction:row!important;align-items:center!important;min-height:84px;gap:14px}\n .newgrid:not(.feat2)>.tile.v:last-child:nth-child(4n+2),.newgrid:not(.feat2)>.tile.v:nth-last-child(2):nth-child(4n+1),.newgrid:not(.feat2)>.tile.v:nth-last-child(3):nth-child(4n+1){grid-column:span 2}\n}\n@media (max-width:767px){\n .newgrid:not(.feat2)>.tile.v:last-child:nth-child(2n+1){grid-column:1/-1;flex-direction:row!important;align-items:center!important;min-height:84px;gap:14px}\n}\n@media (max-width:767px){.newgrid.feat2 .tile.v{flex-direction:column!important;align-items:flex-start!important;gap:8px;min-height:116px;padding:14px!important}.newgrid.feat2 .tile.v .ico{font-size:calc(34px*var(--fs,1))}.newgrid.feat2 .tile.v .tt b,.newgrid.feat2 .tile.v .tt b.lg{font-size:calc(17px*var(--fs,1))}.newgrid.feat2 .tile.v .tt small{-webkit-line-clamp:2}}\n\n/* v115 Apple-Designsystem (gilt f\u00fcr alle Looks au\u00dfer \"vivid\") */\n:root[data-ui=\"apple\"]{--ink:#000!important;--ink2:#6C6C70!important;--line:rgba(60,60,67,.16)!important;--glass:#fff!important;--glass-soft:rgba(118,118,128,.12)!important;--glass-line:rgba(60,60,67,.12)!important;--bg:#F2F2F7!important;--grad:var(--acc)!important;--pri:var(--acc)!important;--accent:var(--acc)!important;--rad:16px!important;--glass-shadow:none!important;--blur:0px}\n:root[data-ui=\"apple\"][data-lm=\"0\"]{--ink:#fff!important;--ink2:#98989F!important;--line:rgba(84,84,88,.5)!important;--glass:#1C1C1E!important;--glass-soft:rgba(118,118,128,.24)!important;--glass-line:rgba(84,84,88,.45)!important;--bg:#000!important}\n:root[data-ui=\"apple\"][data-accent=\"blue\"]{--acc:#007AFF!important;--accrgb:0,122,255!important}\n:root[data-ui=\"apple\"][data-theme=\"dark\"][data-accent=\"blue\"],:root[data-ui=\"apple\"][data-lm=\"0\"][data-accent=\"blue\"]{--acc:#0A84FF!important;--accrgb:10,132,255!important}\n:root[data-ui=\"apple\"],:root[data-ui=\"apple\"] body,:root[data-ui=\"apple\"] html{background:var(--bg)!important}\n:root[data-ui=\"apple\"] body{background:var(--bg)!important;color:var(--ink)}\n:root[data-ui=\"apple\"] .orbs,:root[data-ui=\"apple\"] body::before,:root[data-ui=\"apple\"] body::after{display:none!important}\n:root[data-ui=\"apple\"] body,:root[data-ui=\"apple\"] button,:root[data-ui=\"apple\"] input,:root[data-ui=\"apple\"] select,:root[data-ui=\"apple\"] textarea{font-family:-apple-system,BlinkMacSystemFont,\"SF Pro Text\",\"Helvetica Neue\",system-ui,sans-serif}\n:root[data-ui=\"apple\"] h1,:root[data-ui=\"apple\"] h2,:root[data-ui=\"apple\"] .word,:root[data-ui=\"apple\"] .big,:root[data-ui=\"apple\"] .logo,:root[data-ui=\"apple\"] .gradient-text,:root[data-ui=\"apple\"] .hero2 strong,:root[data-ui=\"apple\"] .ringw b,:root[data-ui=\"apple\"] .gbadge,:root[data-ui=\"apple\"] .tile.v b{font-family:-apple-system,BlinkMacSystemFont,\"SF Pro Display\",\"Helvetica Neue\",system-ui,sans-serif}\n:root[data-ui=\"apple\"] h1{font-size:calc(32px*var(--fs,1));font-weight:700;letter-spacing:-.022em;line-height:1.1}\n:root[data-ui=\"apple\"] h2{font-weight:600;letter-spacing:-.012em}\n:root[data-ui=\"apple\"] .glass{background:var(--glass)!important;border:0!important;border-radius:16px;box-shadow:0 0 0 .5px rgba(60,60,67,.08)!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}\n:root[data-ui=\"apple\"][data-lm=\"0\"] .glass{box-shadow:none!important}\n:root[data-ui=\"apple\"] .glass .glass{background:var(--glass-soft)!important;box-shadow:none!important}\n:root[data-ui=\"apple\"] .hdr::before{background:var(--bg);-webkit-mask-image:none;mask-image:none;border-bottom:.5px solid var(--line);inset:0}\n:root[data-ui=\"apple\"] .hdr.sc::before{-webkit-backdrop-filter:saturate(1.8) blur(20px);backdrop-filter:saturate(1.8) blur(20px);background:color-mix(in srgb,var(--bg) 78%,transparent)}\n:root[data-ui=\"apple\"] .logo,:root[data-ui=\"apple\"] .logo.gradient-text{background:none!important;-webkit-background-clip:border-box!important;background-clip:border-box!important;-webkit-text-fill-color:var(--ink)!important;color:var(--ink)!important;font-size:calc(19px*var(--fs,1));font-weight:700;letter-spacing:-.02em}\n:root[data-ui=\"apple\"] .gbadge,:root[data-ui=\"apple\"] .gbtn{background:var(--glass-soft)!important;border:0!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;color:var(--ink)}\n:root[data-ui=\"apple\"] .gbadge{font-weight:600;font-size:calc(13px*var(--fs,1))}\n:root[data-ui=\"apple\"] .btn,:root[data-ui=\"apple\"] .gbtn{box-shadow:none!important}\n:root[data-ui=\"apple\"] .btn{border-radius:14px!important;font-weight:600;letter-spacing:-.01em;min-height:50px;background:var(--acc);color:#fff;border:0}\n:root[data-ui=\"apple\"] .btn.ghost,:root[data-ui=\"apple\"] .btn.sec,:root[data-ui=\"apple\"] .btn.alt,:root[data-ui=\"apple\"] .btn.soft,:root[data-ui=\"apple\"] .btn.line{background:var(--glass-soft)!important;color:var(--acc)!important}\n:root[data-ui=\"apple\"] .btn:active,:root[data-ui=\"apple\"] .gbtn:active,:root[data-ui=\"apple\"] .tile:active{opacity:.7;transform:scale(.985)}\n:root[data-ui=\"apple\"] .lab{font-size:calc(12px*var(--fs,1));font-weight:500;letter-spacing:.03em;color:var(--ink2)}\n:root[data-ui=\"apple\"] .hint{color:var(--ink2)}\n:root[data-ui=\"apple\"] .segc{background:rgba(118,118,128,.12)!important;border:0!important;border-radius:10px!important;padding:2px!important;box-shadow:none!important}\n:root[data-ui=\"apple\"][data-lm=\"0\"] .segc{background:rgba(118,118,128,.24)!important}\n:root[data-ui=\"apple\"] .segc button{border-radius:8px;font-weight:600;font-size:calc(13px*var(--fs,1));color:var(--ink)!important;background:transparent}\n:root[data-ui=\"apple\"] .segc button.on{background:#fff;box-shadow:0 3px 8px rgba(0,0,0,.12),0 3px 1px rgba(0,0,0,.04)}\n:root[data-ui=\"apple\"][data-lm=\"0\"] .segc button.on{background:#636366;color:#fff!important}\n:root[data-ui=\"apple\"] .segc.liq button.on{background:transparent;box-shadow:none}\n:root[data-ui=\"apple\"] .spill{background:#fff!important;border-radius:8px!important;border:0!important;box-shadow:0 3px 8px rgba(0,0,0,.12),0 3px 1px rgba(0,0,0,.04)!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}\n:root[data-ui=\"apple\"][data-lm=\"0\"] .spill{background:#636366!important}\n:root[data-ui=\"apple\"] .in,:root[data-ui=\"apple\"] .ta,:root[data-ui=\"apple\"] select.in,:root[data-ui=\"apple\"] .srow input[type=text]{background:var(--glass-soft)!important;border:0!important;border-radius:12px!important;box-shadow:none!important;color:var(--ink)}\n/* Tab-Leiste: iOS-Stil, volle Breite, Hairline oben */\n:root[data-ui=\"apple\"] .tabbar,:root[data-ui=\"apple\"] .tabbar.glass{position:fixed;left:0;right:0;bottom:0;top:auto;transform:none;width:100%;max-width:none;margin:0;border-radius:0;display:flex;justify-content:center;gap:0;padding:6px max(8px,env(safe-area-inset-left)) calc(4px + env(safe-area-inset-bottom)) max(8px,env(safe-area-inset-right));background:color-mix(in srgb,var(--bg) 80%,transparent)!important;-webkit-backdrop-filter:saturate(1.8) blur(22px)!important;backdrop-filter:saturate(1.8) blur(22px)!important;box-shadow:0 -.5px 0 var(--line)!important;border-top:0!important}\n:root[data-ui=\"apple\"] .tpill{display:none!important}\n:root[data-ui=\"apple\"] .tab{flex:1;max-width:120px;background:transparent!important;border:0;box-shadow:none!important;display:flex;flex-direction:column;align-items:center;gap:2px;padding:4px 0 2px;color:#8E8E93;font-size:calc(10px*var(--fs,1));font-weight:500;letter-spacing:.01em}\n:root[data-ui=\"apple\"] .tab.on{color:var(--acc)}\n:root[data-ui=\"apple\"] .tab .ti{font-size:0;line-height:0;display:block;height:26px;filter:none!important;transform:none!important}\n:root[data-ui=\"apple\"] .tab .ti svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}\n:root[data-ui=\"apple\"] .tab.on .ti svg{stroke-width:2;fill:rgba(var(--accrgb),.16)}\n:root[data-ui=\"apple\"] #toast.toast{bottom:calc(72px + env(safe-area-inset-bottom))!important;background:rgba(40,40,44,.92);color:#fff;border-radius:999px;font-weight:600;box-shadow:0 6px 20px rgba(0,0,0,.18)}\n/* Listen: Hairlines, weniger Rauschen */\n:root[data-ui=\"apple\"] .modal .mbox,:root[data-ui=\"apple\"] .mbox.glass{border-radius:20px}\n:root[data-ui=\"apple\"] .sect.acc>.acch{font-weight:600}\n:root[data-ui=\"apple\"] .tag,:root[data-ui=\"apple\"] .pillx{font-weight:600}\n\n\n/* v115b: flache Fl\u00e4chen statt Verl\u00e4ufe */\n:root[data-ui=\"apple\"] .btn.pri,:root[data-ui=\"apple\"] .btn.pri.sm,:root[data-ui=\"apple\"] button.pri{background:var(--acc)!important;background-image:none!important;box-shadow:none!important;color:#fff!important}\n:root[data-ui=\"apple\"] .prog i,:root[data-ui=\"apple\"] .week i,:root[data-ui=\"apple\"] .bd1.new,:root[data-ui=\"apple\"] .bdg em,:root[data-ui=\"apple\"] .xr.on .xc{background:var(--acc)!important;box-shadow:none!important}\n:root[data-ui=\"apple\"] .prog,:root[data-ui=\"apple\"] .bar{background:var(--glass-soft)!important}\n:root[data-ui=\"apple\"] .callmic{background:var(--acc);box-shadow:none}\n:root[data-ui=\"apple\"] .res .big{background:none!important;-webkit-text-fill-color:var(--ink)!important;color:var(--ink)!important}\n:root[data-ui=\"apple\"] .dchip,:root[data-ui=\"apple\"] .tag{box-shadow:none}\n\n/* v115c: Feinschliff nach Apple-Design-Skill */\n.setgrid{width:100%;box-sizing:border-box}\n:root[data-ui=\"apple\"] .tabbar,:root[data-ui=\"apple\"] .tabbar.glass{background:color-mix(in srgb,var(--bg) 86%,transparent)!important}\n:root[data-ui=\"apple\"] .tile,:root[data-ui=\"apple\"] .btn,:root[data-ui=\"apple\"] .gbtn,:root[data-ui=\"apple\"] .tab,:root[data-ui=\"apple\"] [data-act].glass,:root[data-ui=\"apple\"] .segc button{transition:transform .22s cubic-bezier(.2,.8,.2,1),opacity .22s ease,background-color .2s ease}\n:root[data-ui=\"apple\"] .tile:active,:root[data-ui=\"apple\"] [data-act].glass:active{transform:scale(.97);opacity:.85;transition-duration:.08s}\n:root[data-ui=\"apple\"] .tab:active{opacity:.55;transition-duration:.05s}\n:root[data-ui=\"apple\"] body{-webkit-font-smoothing:antialiased;font-optical-sizing:auto}\n:root[data-ui=\"apple\"] .hint,:root[data-ui=\"apple\"] .tab,:root[data-ui=\"apple\"] small,:root[data-ui=\"apple\"] .lab{letter-spacing:.01em}\n:root[data-ui=\"apple\"] .tile.v b,:root[data-ui=\"apple\"] .hero2 strong{letter-spacing:-.018em}\n@media (prefers-reduced-transparency:reduce){:root[data-ui=\"apple\"] .tabbar,:root[data-ui=\"apple\"] .tabbar.glass{background:var(--bg)!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}:root[data-ui=\"apple\"] .hdr.sc::before{background:var(--bg);-webkit-backdrop-filter:none;backdrop-filter:none}}\n@media (prefers-contrast:more){:root[data-ui=\"apple\"] .glass{box-shadow:0 0 0 1px var(--ink2)!important}:root[data-ui=\"apple\"] .tab{color:var(--ink2)}:root[data-ui=\"apple\"] .tab.on{color:var(--acc)}}\n@media (prefers-reduced-motion:reduce){:root[data-ui=\"apple\"] .tile:active,:root[data-ui=\"apple\"] [data-act].glass:active{transform:none}}\n\n:root[data-ui=\"apple\"] .glass::before,:root[data-ui=\"apple\"] .glass::after{display:none!important}\nhtml.lite[data-ui=\"apple\"] .glass,html.lite[data-ui=\"apple\"][data-lm=\"0\"] .glass,html.lite[data-ui=\"apple\"][data-lm=\"1\"] .glass{background:var(--glass)!important;box-shadow:0 0 0 .5px rgba(60,60,67,.08)!important}\nhtml.lite[data-ui=\"apple\"][data-lm=\"0\"] .glass{box-shadow:none!important}\nhtml.lite[data-ui=\"apple\"] .glass .glass{background:var(--glass-soft)!important}\n\n/* Tab-Icons (SVG) in beiden Stilen */\n.tab .ti svg{width:26px;height:26px;display:block;margin:0 auto;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}\n.tab .ti{display:block;line-height:0}\n\n/* Apple: wei\u00dfer Hintergrund (Karten werden hellgrau) */\n:root[data-ui=\"apple\"][data-abg=\"weiss\"]{--bg:#fff!important;--glass:#F2F2F7!important;--glass-soft:rgba(118,118,128,.12)!important}\n:root[data-ui=\"apple\"][data-abg=\"weiss\"][data-lm=\"0\"]{--bg:#000!important;--glass:#1C1C1E!important}\n:root[data-ui=\"apple\"][data-abg=\"weiss\"] .glass .glass{background:#fff!important}\nhtml.lite[data-ui=\"apple\"][data-abg=\"weiss\"] .glass{background:#F2F2F7!important}\nhtml.lite[data-ui=\"apple\"][data-abg=\"weiss\"][data-lm=\"0\"] .glass{background:#1C1C1E!important}\n\n/* Becherspiel: Stufen */\n.brcup{transition:left var(--dur,.5s) cubic-bezier(.45,.05,.2,1)}\n.brbody i{transition:filter .7s ease}\n.brcup:nth-child(5) .brbody i{filter:hue-rotate(210deg)}\n.brcup .brbody i{filter:none!important}.brarena.mono .brcup{--ch:215!important}\n\n/* Alter: Kinder bekommen gr\u00f6\u00dfere, verspieltere Bedienung; \u00c4ltere ruhigere */\nhtml.age-kid .btn{min-height:58px;font-size:calc(18px*var(--fs,1))}\nhtml.age-kid .tile,html.age-kid .glass{border-radius:24px}\nhtml.age-kid .brq .word,html.age-kid .q .word{font-size:calc(40px*var(--fs,1))}\nhtml.age-kid .hint{font-size:calc(15px*var(--fs,1))}\nhtml.age-adult .orbs i{opacity:.7}\n\n.qtools{display:inline-flex;gap:6px;margin-left:8px;vertical-align:middle}\n.qtools .qt{min-width:40px;min-height:40px;border-radius:12px;border:0;background:var(--glass-soft);color:var(--ink);font-size:calc(18px*var(--fs,1));cursor:pointer}\n.qtools .qt[aria-pressed=\"true\"]{color:#FF9F0A}\n.mnem{margin:6px 0 0;padding:8px 12px;border-radius:12px;background:var(--glass-soft);font-size:calc(14px*var(--fs,1))}\n\n/* ===== Build 121 ===== */\n[hidden]{display:none!important}\n.setwrap{width:100%;display:flex;flex-direction:column;gap:12px}\n.setsplit{display:grid;grid-template-columns:minmax(260px,320px) minmax(0,1fr);gap:18px;align-items:start;width:100%}\n.setnav{display:flex;flex-direction:column;padding:6px!important}\n.setsplit .setnav{position:sticky;top:88px}\n.snav{display:flex;align-items:center;gap:12px;width:100%;padding:10px 12px;border:0;background:none;color:inherit;font:inherit;text-align:left;border-radius:16px;cursor:pointer;min-height:56px}\n.snav+.snav{border-top:1px solid var(--line,rgba(0,0,0,.08));border-radius:0}\n.snav .sic{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;font-size:calc(18px*var(--fs,1));flex:none}\n.snav .sl{display:flex;flex-direction:column;gap:1px;min-width:0;flex:1}\n.snav .sl b{font-size:calc(16px*var(--fs,1))}\n.snav .sl small{font-size:calc(12.5px*var(--fs,1));opacity:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.snav .chev{opacity:.4;font-size:calc(20px*var(--fs,1))}\n.snav.on{background:var(--acc,#0A84FF);color:#fff;border-radius:14px;border-top-color:transparent}\n.snav.on+.snav{border-top-color:transparent}\n.setpane{display:flex;flex-direction:column;gap:10px;min-width:0}\n.setpane .pt h2,.setwrap .pt h2{margin:0;font-size:calc(24px*var(--fs,1))}\n.setbk{align-self:flex-start;padding:6px 2px;font-size:calc(16px*var(--fs,1))}\n.swlab.sgap{padding-top:14px}\n.sfl{display:flex;flex-direction:column;gap:6px;margin-bottom:8px}\n#sq{margin-top:2px}\n/* Liquid-Glass-Schalter */\n:root[data-ui=\"glass\"] .tg{width:58px;height:34px;background:rgba(120,130,150,.26);-webkit-backdrop-filter:blur(10px) saturate(1.6);backdrop-filter:blur(10px) saturate(1.6);border:1px solid rgba(255,255,255,.6);box-shadow:inset 0 2px 4px rgba(0,0,0,.14),inset 0 -1px 0 rgba(255,255,255,.45)}\n:root[data-ui=\"glass\"] .tg.on{background:color-mix(in srgb,var(--acc,#0A84FF) 70%,transparent);box-shadow:inset 0 2px 4px rgba(0,0,0,.16),0 0 0 .5px rgba(255,255,255,.5)}\n:root[data-ui=\"glass\"] .tg::after{top:2px;left:2px;width:38px;height:28px;border-radius:999px;background:linear-gradient(180deg,rgba(255,255,255,.98),rgba(238,243,250,.86));box-shadow:0 2px 7px rgba(0,0,0,.24),inset 0 1px 1px #fff,inset 0 -2px 3px rgba(120,140,180,.28);transition:transform .25s cubic-bezier(.3,1.3,.5,1)}\n:root[data-ui=\"glass\"] .tg.on::after{transform:translateX(18px)}\nhtml.lite[data-ui=\"glass\"] .tg{-webkit-backdrop-filter:none;backdrop-filter:none}\n/* \u00dcben: symmetrische Raster */\n.newgrid.g3{grid-template-columns:repeat(3,minmax(0,1fr))}\n@media (max-width:767px){.newgrid.g3{grid-template-columns:repeat(2,minmax(0,1fr))}.newgrid.g3>.tile.v:last-child{grid-column:1/-1}}\n@media (min-width:768px){.newgrid.g3>.tile.v:last-child{grid-column:auto!important;flex-direction:column!important;min-height:116px!important;gap:6px!important}}\n/* R\u00fcckg\u00e4ngig */\n.undob{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(100px + env(safe-area-inset-bottom,0px));z-index:40;padding:10px 18px;border-radius:999px;border:1px solid var(--glass-line,rgba(255,255,255,.5));color:inherit;font:inherit;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.18)}\n/* Kreuzwortr\u00e4tsel */\n.cwg{display:grid;grid-template-columns:repeat(var(--cols),minmax(0,1fr));gap:3px;width:100%;max-width:calc(var(--cols)*46px);margin:0 auto}\n.cwb{aspect-ratio:1}\n.cwc{position:relative;aspect-ratio:1}\n.cwc b{position:absolute;top:2px;left:4px;font-size:calc(10px*var(--fs,1));font-weight:700;opacity:.55;pointer-events:none;z-index:1}\n.cx{width:100%;height:100%;box-sizing:border-box;text-align:center;text-transform:uppercase;font:inherit;font-weight:800;font-size:clamp(15px,4.4vw,22px);padding:8px 0 0;border-radius:8px;border:1.5px solid var(--line,rgba(0,0,0,.18));background:var(--glass-soft,rgba(255,255,255,.7));color:inherit;caret-color:transparent}\n.cwc.hl .cx{background:color-mix(in srgb,var(--acc,#0A84FF) 18%,#fff);border-color:var(--acc,#0A84FF)}\n.cx:focus{outline:2px solid var(--acc,#0A84FF);background:#fff;color:#111}\n.cx.bad{background:#ffd9d6!important;border-color:#e0453a!important;color:#a01c14}\n.cx.ok{background:#d9f5df;border-color:#2e9e4f}\n.cwcl{display:block;width:100%;text-align:left;border:0;background:none;color:inherit;font:inherit;padding:8px 6px;border-radius:10px;cursor:pointer}\n.cwcl.act{background:color-mix(in srgb,var(--acc,#0A84FF) 16%,transparent)}\n.cwcl b{display:inline-block;min-width:22px}\n/* Skittles */\n.skq .skch{margin-top:6px;font-size:calc(20px*var(--fs,1));letter-spacing:4px}\n.skq .skx{opacity:.5;font-size:calc(16px*var(--fs,1));margin-left:6px;color:#d63a2f}\n.skbahn{display:flex;flex-direction:column;align-items:center;gap:10px;padding:18px 8px;width:100%;box-sizing:border-box;border-radius:24px;background:linear-gradient(180deg,rgba(220,180,120,.28),rgba(200,150,90,.16))}\n.skrow{display:flex;gap:10px;justify-content:center;width:100%}\n.skpin{position:relative;flex:0 1 150px;min-width:0;padding:14px 8px 12px;border:1.5px solid var(--glass-line,rgba(0,0,0,.12));border-radius:26px 26px 18px 18px;background:linear-gradient(180deg,#fff,#eef1f6);color:#1c2233;font:inherit;font-weight:700;font-size:calc(15px*var(--fs,1));box-shadow:0 6px 14px rgba(0,0,0,.14);cursor:pointer;transition:transform .3s,opacity .3s}\n.skpin i{position:absolute;left:50%;top:6px;width:44%;height:5px;border-radius:3px;background:#e0453a;transform:translateX(-50%)}\n.skpin span{display:block;margin-top:6px;overflow-wrap:anywhere}\n.skpin.dn{transform:rotate(78deg) translateY(8px);opacity:.28}\n.skpin.lo{background:linear-gradient(180deg,#ffe9e6,#ffd2cc)}\n.skpin.shk{animation:skshk .4s}\n@keyframes skshk{0%,100%{transform:translateX(0)}25%{transform:translateX(-7px) rotate(-3deg)}75%{transform:translateX(7px) rotate(3deg)}}\n/* Bedienhilfen */\nhtml.bigtap .btn,html.bigtap .srow,html.bigtap .snav,html.bigtap .opt,html.bigtap .tab{min-height:56px}\nhtml.bigtap .tg{transform:scale(1.15);transform-origin:right center}\nhtml.bigtap .key,html.bigtap .lt2{min-height:52px}\n:focus-visible{outline:3px solid var(--acc,#0A84FF);outline-offset:2px}\n@media (prefers-contrast:more){.glass{border:1.5px solid rgba(0,0,0,.5)}}\n@media (max-width:739px){.setsplit{display:block}}\n/* Wisch zum L\u00f6schen */\n.wrs{position:relative;overflow:hidden;touch-action:pan-y;border-top:1px solid var(--line)}\n.wrs:first-child{border-top:0}\n.wrs>.wr{border-top:0;position:relative}\n.swbg{position:absolute;inset:0;border:0;background:#FF3B30;color:#fff;font:inherit;font-weight:700;display:flex;align-items:center;justify-content:flex-end;padding:0 26px;clip-path:inset(0 0 0 100%);cursor:pointer}\n.swbg.lf{justify-content:flex-start}\n/* Lesbarkeit */\n.snav.on{background:color-mix(in srgb,var(--acc,#0A84FF) 22%,transparent);color:inherit;box-shadow:inset 0 0 0 1.5px var(--acc,#0A84FF)}\n.snav.on .sl small{opacity:.8}.snav.on .chev{opacity:.7}\n.tabbar .tab:not(.on){opacity:1;color:var(--ink2)}\n:root[data-ui=\"glass\"] .tabbar{background:rgba(255,255,255,.74)!important}\n:root[data-ui=\"glass\"][data-lm=\"0\"] .tabbar{background:rgba(22,26,36,.82)!important}\n:root[data-ui=\"apple\"] .tab:not(.on){color:#6B6B70}\n:root[data-ui=\"apple\"][data-lm=\"0\"] .tab:not(.on){color:#A5A5AD}\n:root[data-ui=\"glass\"] .pt small,:root[data-ui=\"glass\"] .lab,:root[data-ui=\"glass\"] .hint{color:color-mix(in srgb,var(--ink) 84%,transparent)}\n:root[data-glass=\"3\"] .orbs::after{opacity:.55}\n/* Kontrast-Korrekturen (Audit) */\n.chip.nw{color:var(--acctxt,#1B4DB3)}\n.chip.ok{color:#0E6B33}\n:root[data-lm=\"0\"] .chip.ok{color:#8BE8AB}\n.btn.pri,.btn.sm.pri{background:linear-gradient(180deg,var(--accbtn,#2F6FEB),color-mix(in srgb,var(--accbtn,#2F6FEB) 88%,#000))!important;color:#fff!important}\n.tab.on{color:var(--acctxt)}\n:root[data-lm=\"0\"][data-ui=\"glass\"] .tpill{background:rgba(255,255,255,.16)!important}\n.srow .sl small,.snav .sl small,.lrow small{color:color-mix(in srgb,var(--ink) 80%,transparent)}\n.link{color:var(--acctxt,var(--acc))}\n\n.snav .sl small{opacity:1!important}\n:root[data-lm=\"0\"] .tab.on{color:#fff}\n:root[data-ui=\"apple\"] .btn{background:var(--accbtn,var(--acc))}\n:root[data-ui=\"apple\"] .btn.pri,:root[data-ui=\"apple\"] .btn.pri.sm,:root[data-ui=\"apple\"] button.pri{background:var(--accbtn,var(--acc))!important}\n.pt small,.hint,.lrow small,.tile .tt small{opacity:1}\n.legalf .link{color:var(--ink2);text-decoration:underline}\n:root[data-ui=\"apple\"] .tab.on{color:var(--acctxt,var(--acc))}\n.legalf{opacity:1}\n/* Kontrast Spiele und Karten */\n.btn.good{background:linear-gradient(180deg,#27883F,#1D6E32)!important;color:#fff!important}\n.btn.bad{background:linear-gradient(180deg,#D13A33,#B32A25)!important;color:#fff!important}\n:root[data-ui=\"apple\"] .btn.good{background:#1D7A36!important}\n:root[data-ui=\"apple\"] .btn.bad{background:#C4302B!important}\n.swhint{opacity:1;color:var(--ink2)}\n.spk{color:var(--acctxt,var(--acc))}\n.opt .kn{color:var(--ink);background:color-mix(in srgb,var(--ink) 10%,transparent)}\n.cwc b{opacity:1;color:var(--ink2)}\n.av.lockd{opacity:1;filter:grayscale(1)}\n.av.lockd .am{opacity:.45}\n.av.lockd small,.av.lockd span:not(.am){color:var(--ink2)}\n:root[data-ui=\"apple\"] .tab:not(.on){color:#5A5A5F}\n.bdg{opacity:1}\n.bdg:not(.got) span{opacity:.4}\n.bdg:not(.got) small{color:var(--ink2)}\n.bdg.got small{color:var(--ink)}\n:root[data-ui=\"apple\"] .cwc b{color:#444}\n:root[data-ui=\"apple\"][data-lm=\"0\"] .cwc b{color:#C8CEDB}\n.bdg:not(.got) small{color:var(--ink)}\n/* Build 122: Sicherheitsnetz Dunkel + Glas \u2013 Schrift nie dunkler als Mindestkontrast */\nhtml[data-lm=\"0\"] body,html[data-lm=\"0\"] .glass,html[data-lm=\"0\"] .sh2{color:#f2f4f8}\nhtml[data-lm=\"0\"] .hint,html[data-lm=\"0\"] small,html[data-lm=\"0\"] .sub,html[data-lm=\"0\"] .muted,html[data-lm=\"0\"] .lbl{color:#d2d8e4}\nhtml[data-lm=\"0\"] .glass{text-shadow:none}\nhtml[data-lm=\"0\"][data-ui=\"glass\"] .tile small,html[data-lm=\"0\"][data-ui=\"glass\"] .tile .d{color:#d2d8e4}\n\n/* Build 122: Skittles feiner */\n.skbahn{position:relative;overflow:visible;padding:20px 10px 74px;background:repeating-linear-gradient(90deg,rgba(255,255,255,.07) 0 2px,transparent 2px 38px),linear-gradient(180deg,rgba(230,190,130,.34),rgba(196,146,86,.22));box-shadow:inset 0 0 0 1px rgba(255,255,255,.16),inset 0 -18px 30px rgba(90,55,20,.18)}\n.skbahn::before{content:\"\";position:absolute;left:0;right:0;bottom:0;height:20px;border-radius:0 0 24px 24px;background:linear-gradient(180deg,transparent,rgba(40,25,10,.28))}\n.skarr{position:absolute;left:50%;bottom:62px;width:150px;height:28px;transform:translateX(-50%);background:linear-gradient(135deg,transparent 48%,rgba(120,70,30,.28) 50%,transparent 52%) 0 0/30px 28px;opacity:.5;pointer-events:none}\n.skball{position:absolute;left:calc(50% - 20px);bottom:16px;width:40px;height:40px;border-radius:50%;background:radial-gradient(circle at 32% 28%,#6b7794 0,#232a3d 38%,#0c101b 100%);box-shadow:0 6px 10px rgba(0,0,0,.4),inset -3px -4px 7px rgba(0,0,0,.45);pointer-events:none;z-index:3}\n.skball::before{content:\"\";position:absolute;left:11px;top:9px;width:5px;height:5px;border-radius:50%;background:#050810;box-shadow:8px 3px 0 #050810,3px 9px 0 #050810}\n.skball.rest{animation:skidle 2.4s ease-in-out infinite}\n@keyframes skidle{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}\n.skpin{transform-origin:50% 90%}\n.skpin::after{content:\"\";position:absolute;left:12%;right:12%;bottom:-8px;height:8px;border-radius:50%;background:radial-gradient(ellipse,rgba(0,0,0,.28),transparent 70%);pointer-events:none}\n.skpin.dn{transform:rotate(var(--r,78deg)) translateY(8px);opacity:.28}\n.skpin.dn::after{display:none}\n.skpin.skin{animation:skin .5s cubic-bezier(.2,.8,.3,1.15) both;animation-delay:var(--dl,0ms)}\n@keyframes skin{0%{transform:translateY(-26px) scale(.9);opacity:0}100%{transform:none;opacity:1}}\n.skpin:not(:disabled):active{transform:scale(.96)}\n.skdust{position:absolute;width:7px;height:7px;border-radius:50%;background:rgba(255,246,226,.95);pointer-events:none;z-index:4}\nhtml.calm .skball.rest{animation:none}\n@media (prefers-reduced-motion:reduce){.skball.rest{animation:none}.skpin.skin{animation:none}}\n\n/* Build 123: Hell/Dunkel eindeutig. Farbschema und Hintergrund folgen immer data-theme */\n:root[data-theme=\"dark\"]{color-scheme:dark}\n:root[data-theme=\"light\"]{color-scheme:light}\nhtml[data-theme=\"dark\"] body{background-color:#14171C}\nhtml[data-theme=\"light\"] body{background-color:#EEF1F6}\nhtml.nt *,html.nt *::before,html.nt *::after{transition:none!important}\n\n/* Build 123: Sprachfilter und Latein */\n.langbar{margin:0 0 10px;width:100%;max-width:100%}\n.lattab{width:100%;border-collapse:collapse;font-size:calc(15px*var(--fs,1));margin:4px 0}\n.lattab th,.lattab td{padding:6px 8px;border-bottom:1px solid var(--line,rgba(120,130,150,.25));text-align:left}\n.lattab th{font-weight:600;color:var(--ink2);font-size:calc(13px*var(--fs,1))}\n.lattab td{color:var(--ink);font-weight:600}\n.lattw{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px 14px}\n.latchips{display:flex;flex-wrap:wrap;gap:6px;margin:2px 0 6px}\n.latchips span{padding:4px 10px;border-radius:999px;font-size:calc(12.5px*var(--fs,1));font-weight:600;color:var(--ink);background:color-mix(in srgb,var(--ink) 10%,transparent)}\n/* Skittles: echte Kegelform, Wort verschwindet beim Treffer */\n.skpin{margin-top:14px}\n.skpin::before{content:\"\";position:absolute;left:50%;top:-15px;width:30px;height:30px;margin-left:-15px;border-radius:50%;background:linear-gradient(180deg,#fff,#eef1f6);border:1.5px solid var(--glass-line,rgba(0,0,0,.12));border-bottom-color:transparent;z-index:0}\n.skpin>*{position:relative;z-index:1}\n.skpin.dn span{opacity:0;transition:opacity .2s}\n.skpin.dn{opacity:.4}\n.ltag{color:var(--ink)!important;background:color-mix(in srgb,var(--ink) 12%,transparent)!important;font-size:calc(11px*var(--fs,1))!important;font-weight:700}\n\n/* Build 123: Einstellungen: Liste links bleibt fest, Inhalt rechts scrollt mit der Seite */\n@media (min-width:740px){\n .setsplit{align-items:start}\n .setsplit .setnav{position:sticky;top:96px;max-height:calc(100dvh - 96px - 118px);overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;scrollbar-width:none;align-self:start}\n .setsplit .setnav::-webkit-scrollbar{display:none}\n .setsplit .setpane{min-height:calc(100dvh - 300px)}\n main:has(.setsplit){padding-bottom:130px}\n}\n\n/* Build 123: Einstellungen ohne \u00dcberscrollen, Latein-Antworten, Skittles-Strike */\nhtml:has(.setwrap),html:has(.setwrap) body{overscroll-behavior-y:none}\n@media (min-width:740px){main:has(.setsplit){padding-bottom:112px}}\n.langbar button small{opacity:.75;font-size:.8em;margin-left:2px}\n.latopts .opt.ok{background:color-mix(in srgb,#30B464 24%,var(--card,transparent))!important;box-shadow:inset 0 0 0 1.5px #30B464;animation:latpulse .45s ease}\n.latopts .opt.bad{background:color-mix(in srgb,#E5484D 22%,var(--card,transparent))!important;box-shadow:inset 0 0 0 1.5px #E5484D;animation:skshk .4s}\n@keyframes latpulse{0%{transform:scale(1)}40%{transform:scale(1.03)}100%{transform:scale(1)}}\n.skbahn.strike{animation:skstrike 1s ease}\n@keyframes skstrike{0%{box-shadow:inset 0 0 0 1px rgba(255,255,255,.16)}30%{box-shadow:inset 0 0 0 3px #FFD25A,0 0 30px rgba(255,210,90,.6)}100%{box-shadow:inset 0 0 0 1px rgba(255,255,255,.16)}}\n.langbar button:not(.on){color:var(--ink)!important}\n.langbar button small{opacity:1!important;font-weight:700}\n\n/* Build 125: symmetrische Kachelreihen, ruhigere Palette, Breitenbegrenzung */\n@media (min-width:768px){\n .newgrid.gs{grid-template-columns:repeat(12,minmax(0,1fr))}\n html .newgrid.gs.gs>.tile.v.v{grid-column:span var(--sp,3)!important;flex-direction:column!important;align-items:flex-start!important;min-height:116px!important;gap:6px!important}\n}\n[data-pal=\"flat\"]{--vbg:#F2F2F7;--vbg2:#F2F2F7;--vbgd:#000;--vbg2d:#0A0A0C}\n.tile:active,.lrow:active{transform:scale(.975);transition:transform .08s}\n@media (min-width:1280px){main,.hdr .hin{max-width:1240px;margin-left:auto;margin-right:auto}}\n\n/* Skittles: getroffene Kegel verschwinden ganz, der Platz bleibt frei */\n.skpin.dn{opacity:0!important;visibility:hidden;pointer-events:none;transform:rotate(var(--r,78deg)) translateY(8px) scale(.7)}\n.pt .lab{letter-spacing:.14em}\n@media (max-width:859px){main:has(.setwrap){padding-bottom:120px}}\n.setbar{position:sticky;top:64px;z-index:5;margin:0 -4px;padding:6px 4px}\n.setbk2{display:inline-flex;align-items:center;gap:4px;min-height:44px;padding:0 16px 0 10px;border-radius:22px;border:0;font:600 17px/1 inherit;color:var(--ink);cursor:pointer;background:rgba(255,255,255,.55);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);box-shadow:0 0 0 1px rgba(128,128,128,.25)}\n.setbk2 span{font-size:calc(30px*var(--fs,1));line-height:1;margin-top:-4px;color:var(--ac,#0A84FF)}\nhtml[data-theme=\"dark\"] .setbk2{background:rgba(40,44,54,.7)}\n.setbk3{width:100%;min-height:52px;margin-top:14px;font-weight:600;font-size:calc(17px*var(--fs,1));color:var(--ink);text-align:center}\n@media (min-width:740px){.setbar,.setbk3{display:none}}\n.vh{position:absolute;width:1px;height:1px;opacity:0;overflow:hidden;pointer-events:none;clip:rect(0 0 0 0)}\n.setq{margin-bottom:12px}\n.setq .swlab{padding:10px 16px 2px}\nlabel.btn{cursor:pointer;display:inline-flex;align-items:center;justify-content:center}\nhtml[data-theme=\"light\"] .segc button:not(.on){color:#1d2330}\nhtml[data-theme=\"dark\"] .hact small,html[data-theme=\"dark\"] .legalf .link,html[data-theme=\"dark\"] .wm small{color:#dfe5f0!important;opacity:1}\n/* Build 130: Vokabel-Duell */\n.duel{position:fixed;inset:0;z-index:300;display:flex;flex-direction:column;background:var(--bg,#0f1217);touch-action:manipulation;-webkit-user-select:none;user-select:none;padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}\nhtml[data-theme=\"light\"] .duel{background:#eef1f6}\n.dside{flex:1 1 0;min-height:0;display:flex;flex-direction:column;gap:10px;padding:14px 18px 12px;box-sizing:border-box;border-radius:0}\n.dside.flip{transform:rotate(180deg)}\n.dside.p0{background:linear-gradient(180deg,rgba(10,132,255,.14),rgba(10,132,255,.05))}\n.dside.p1{background:linear-gradient(180deg,rgba(255,159,10,.14),rgba(255,159,10,.05))}\n.dside.win{box-shadow:inset 0 0 0 4px #34C759}\n.dhd{display:flex;justify-content:space-between;align-items:center;font-size:calc(18px*var(--fs,1))}\n.dsc{font-size:calc(30px*var(--fs,1));font-weight:800;min-width:48px;text-align:right}\n.dq{text-align:center;display:flex;flex-direction:column;gap:4px}\n.dq small{opacity:1;font-size:calc(15px*var(--fs,1));color:var(--ink2,inherit)}\n.dw{font-size:clamp(34px,7.5vw,88px);font-weight:800;line-height:1.1;word-break:break-word}\n.dbuz{flex:1;border:0;border-radius:28px;font:800 clamp(26px,5vw,44px)/1 inherit;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;cursor:pointer;background:linear-gradient(180deg,#34c759,#1f9e41);box-shadow:0 10px 26px rgba(31,158,65,.38),inset 0 2px 2px rgba(255,255,255,.4)}\n.dbuz small{font:600 15px/1.2 inherit;opacity:.95}\n.dbuz:active{transform:scale(.985)}\n.dbuz.sm{flex:0 0 auto;padding:14px;font-size:calc(20px*var(--fs,1));background:linear-gradient(180deg,#0A84FF,#0763c7);box-shadow:none}\n.dopts{display:grid;grid-template-columns:1fr 1fr;gap:10px;flex:1;min-height:0}\n.dopt{border:0;border-radius:22px;font:700 clamp(18px,3.4vw,28px)/1.15 inherit;padding:10px;color:var(--ink);background:rgba(255,255,255,.7);box-shadow:inset 0 0 0 1px rgba(128,128,128,.3);cursor:pointer;word-break:break-word}\nhtml[data-theme=\"dark\"] .dopt{background:rgba(255,255,255,.12);color:#fff}\n.dopt.bad{opacity:.35;text-decoration:line-through}\n.dopt:active{transform:scale(.97)}\n.dwait{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;font-size:calc(22px*var(--fs,1));font-weight:700;color:var(--ink)}\n.dwait.big{font-size:clamp(24px,5vw,40px)}\n.djg{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center}\n.dans{font-size:clamp(26px,5vw,44px);font-weight:800;color:var(--accent,#0A84FF)}\n.djb{display:flex;gap:12px}\n.djb .btn{min-width:130px;min-height:56px;font-size:calc(20px*var(--fs,1))}\n.dres{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;font-size:calc(24px*var(--fs,1));font-weight:800;text-align:center}\n.dres.ok{color:#1f9e41}.dres.no{color:var(--ink)}\nhtml[data-theme=\"dark\"] .dres.ok{color:#5ee287}\n.dmid{flex:0 0 auto;display:flex;justify-content:space-between;align-items:center;padding:6px 18px;font-weight:700;background:rgba(128,128,128,.18);font-size:calc(16px*var(--fs,1))}\n.dmid .link{font-size:calc(16px*var(--fs,1));min-height:36px}\n.dfin{display:flex;gap:24px;font-size:calc(20px*var(--fs,1))}\n.dfin b{font-size:calc(28px*var(--fs,1))}\n.dbuz{background:linear-gradient(180deg,#23903f,#146c2c)!important}\n.dbuz,.dbuz small,.dbuz span{color:#fff!important;opacity:1!important}\n.dbuz.sm{background:linear-gradient(180deg,#0A6FE0,#0757b5)!important}\n@media (pointer:coarse){.wm{min-height:46px}}\nmain:has(.wlist,#wres){padding-bottom:128px}\n\n/* Build 132 */\n.stkrow{display:flex;gap:8px;flex-wrap:wrap}.stk1{font-size:calc(28px*var(--fs,1));line-height:1;width:44px;height:44px;display:grid;place-items:center;border-radius:14px;background:var(--accent-soft)}\n.donet{font-size:calc(20px*var(--fs,1))}.emptyc{gap:10px;padding:22px}.emptyc .big-ico{font-size:calc(40px*var(--fs,1))}\n@media (min-width:768px) and (max-width:1023px){main.home{display:grid;grid-template-columns:1fr 1fr;align-items:start;align-content:start;grid-auto-rows:min-content;min-height:0}main.home>*{width:100%}main.home>.hero2,main.home>.banner,main.home>.greet,main.home>.chips3,main.home>.homeacts,main.home>.morebtn{grid-column:1/-1}}\n@media (min-width:1024px){main.home>.greet,main.home>.chips3,main.home>.homeacts,main.home>.morebtn{grid-column:1/-1}}\n\n/* ===== Build 133 ===== */\n.sic{display:block;margin:0 auto}\n.tile.v .ico .sic,.feedban .ico .sic{width:30px;height:30px;color:var(--accent)}\n.feedban .ico{display:grid;place-items:center;width:40px}\n.hact .ic{display:grid;place-items:center;color:var(--accent)}.hact .ic .sic{width:24px;height:24px}\n:root .chips3.c2{grid-template-columns:repeat(2,minmax(0,1fr))}\n/* Hero: Knopf volle Breite auf schmalen Ger\u00e4ten */\n@media (max-width:560px){main.home .hero2.compact .hr{display:grid;grid-template-columns:auto 1fr;grid-template-areas:\"r t\" \"b b\";gap:10px 14px;align-items:center}\nmain.home .hero2.compact .ringw{grid-area:r}main.home .hero2.compact .ht{grid-area:t;min-width:0}main.home .hero2.compact .go{grid-area:b;width:100%;min-height:50px;font-size:calc(17px*var(--fs,1))}\nmain.home .hero2.compact .ht strong{font-size:calc(20px*var(--fs,1))}\n.homeacts .hact small{display:none}.homeacts .hact{padding:10px 4px;min-height:74px}.homeacts .hact b{font-size:calc(13px*var(--fs,1))}}\n.homeacts .hact{box-shadow:none;background:color-mix(in srgb,var(--card,#fff) 70%,transparent)}\n/* Platz unter der schwebenden Navigation */\nmain{padding-bottom:max(128px,calc(110px + env(safe-area-inset-bottom)))}\n:root .tabbar,:root .tabbar.glass{background:color-mix(in srgb,var(--bg) 90%,transparent)!important}\n/* \u00dcben */\n.bangrid.b3{display:grid;grid-template-columns:1fr;gap:10px}\n@media (min-width:768px){.bangrid.b3{grid-template-columns:repeat(3,minmax(0,1fr))}}\n.feedban .tt b{font-size:calc(16px*var(--fs,1));line-height:1.2}\n/* Wortlisten */\n.lstrow>summary{display:grid!important;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:8px}\n.lstrow .lrt{display:flex;flex-direction:column;gap:2px;min-width:0}.lstrow .lrt b{font-size:calc(17px*var(--fs,1));overflow-wrap:anywhere}\n.lstrow .lrt small{font-size:calc(13px*var(--fs,1));color:var(--ink2);font-weight:600}\n.lstrow .lpc{white-space:nowrap;font-weight:800}\n.langbar{overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}.langbar::-webkit-scrollbar{display:none}\n.langbar button{white-space:nowrap}\n.langbar button.on[data-l=\"en\"]{box-shadow:inset 0 -3px 0 #2F6BFF}.langbar button.on[data-l=\"fr\"]{box-shadow:inset 0 -3px 0 #E4405F}.langbar button.on[data-l=\"la\"]{box-shadow:inset 0 -3px 0 #2FA36B}\n.prog.thin{background:color-mix(in srgb,var(--ink2) 18%,transparent)!important;min-height:6px;border-radius:99px}\n/* Planer: Knopf bleibt sichtbar */\n.stickycta{position:sticky;bottom:calc(86px + env(safe-area-inset-bottom));z-index:5;padding:8px 0;background:linear-gradient(to top,var(--bg) 70%,transparent)}\n/* Lernkarte */\nmain.qz .prog.thin{height:10px;background:color-mix(in srgb,var(--accent) 22%,transparent)!important}\nmain.qz .prog.thin i{background:var(--accent)!important}\nmain.qz .cnt{font-size:calc(15px*var(--fs,1));font-weight:800;color:var(--ink)}\nhtml[data-scr=\"quiz\"] .hdr .gbadge,html[data-scr=\"learn\"] .hdr .gbadge{display:none}\nmain.qz .stage .word{font-size:clamp(40px,9vw,64px)}\nmain.qz .emo{font-size:clamp(56px,14vw,96px);line-height:1.1;margin:6px 0}\n@media (min-width:768px){main.qz{max-width:min(calc(100% - 64px),760px)}main.qz .stage .face{min-height:420px}}\n/* Lernpfad */\n.pathw{display:flex;flex-direction:column;align-items:center;gap:8px;padding:10px 0 4px}\n.pnode{display:flex;flex-direction:column;align-items:center;gap:4px;transform:translateX(var(--o));position:relative}\n.pnode:not(:last-child)::after{content:\"\";position:absolute;left:50%;top:76px;width:4px;height:12px;border-radius:4px;background:var(--line);transform:translateX(-50%)}\n.pbtn{width:76px;height:76px;border-radius:50%;border:0;display:grid;place-items:center;font-size:calc(26px*var(--fs,1));font-weight:800;color:#fff;background:#8A94A8;box-shadow:0 6px 0 rgba(0,0,0,.18);cursor:pointer}\n.pbtn .sic{width:34px;height:34px}\n.pnode.done .pbtn{background:#2FA36B}.pnode.cur .pbtn{background:var(--accent,#2F6BFF);animation:pcur 1.8s ease-in-out infinite}\n.pnode.fin.todo .pbtn{background:#B8A04A}.pnode.fin.cur .pbtn{background:#E0A800}\nhtml.calm .pnode.cur .pbtn{animation:none}\n@keyframes pcur{0%,100%{box-shadow:0 6px 0 rgba(0,0,0,.18),0 0 0 0 rgba(47,107,255,.45)}50%{box-shadow:0 6px 0 rgba(0,0,0,.18),0 0 0 12px rgba(47,107,255,0)}}\n.pbtn:active{transform:translateY(3px);box-shadow:0 3px 0 rgba(0,0,0,.18)}\n.plb{display:flex;flex-direction:column;align-items:center;text-align:center}.plb b{font-size:calc(15px*var(--fs,1))}.plb small{font-size:calc(13px*var(--fs,1));color:var(--ink2);font-weight:600}\n/* Text-Mindestgr\u00f6\u00dfen */\n.lab,.hd2 .lab{font-size:calc(12.5px*var(--fs,1))!important;color:var(--ink2)}\n/* Build 133b: Einstellungen zweispaltig \u2013 rechter Bereich scrollt in sich und endet \u00fcber der Navigation */\n@media (min-width:740px){\n.setsplit .setpane{position:sticky;top:96px;max-height:calc(100dvh - 96px - 126px - env(safe-area-inset-bottom));overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;scrollbar-width:none;align-self:start;padding-bottom:28px;-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 26px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 26px),transparent)}\n.setsplit .setpane::-webkit-scrollbar{display:none}\n.setsplit .setnav{max-height:calc(100dvh - 96px - 126px - env(safe-area-inset-bottom))}\nmain:has(.setsplit){padding-bottom:calc(126px + env(safe-area-inset-bottom))}\n}\n@media (min-width:740px){.setsplit .setpane>*{flex-shrink:0}}\n@media (min-width:740px){.setsplit{min-height:calc(100dvh - 96px - 126px - env(safe-area-inset-bottom))}}\n\n/* ===== Build 134: Look \"Spielerisch\" (data-play=1, baut auf data-ui=apple auf) ===== */\n:root[data-play=\"1\"]{--bg:#FFFFFF!important;--glass:#FFFFFF!important;--glass-soft:#F2F5F7!important;--line:#E5E5E5!important;--glass-line:#E5E5E5!important;--ink:#3C3C3C!important;--ink2:#6B6B6B!important;--rad:20px!important;--pdk:#E5E5E5;--pfont:ui-rounded,\"SF Pro Rounded\",\"Nunito\",\"Segoe UI Rounded\",system-ui,sans-serif}\n:root[data-play=\"1\"][data-lm=\"0\"]{--bg:#131F24!important;--glass:#1F2C33!important;--glass-soft:#2B3A42!important;--line:#37464F!important;--glass-line:#37464F!important;--ink:#F1F7FB!important;--ink2:#AEB9C0!important;--pdk:#37464F}\n:root[data-play=\"1\"][data-accent=\"green\"]{--acc:#58CC02!important;--accrgb:88,204,2!important;--accbtn:#58CC02!important;--acctxt:#3E8F00}\n:root[data-play=\"1\"][data-lm=\"0\"][data-accent=\"green\"]{--acctxt:#7BE020}\n:root[data-play=\"1\"][data-accent=\"blue\"]{--acc:#1CB0F6!important;--accrgb:28,176,246!important;--accbtn:#1CB0F6!important;--acctxt:#0B84C0}\n:root[data-play=\"1\"][data-lm=\"0\"][data-accent=\"blue\"]{--acctxt:#4CC4FA}\n:root[data-play=\"1\"][data-accent=\"poppy\"]{--acc:#FF4B4B!important;--accrgb:255,75,75!important;--accbtn:#FF4B4B!important;--acctxt:#D63030}\n:root[data-play=\"1\"][data-accent=\"mustard\"]{--acc:#FFB100!important;--accrgb:255,177,0!important;--accbtn:#F5A400!important;--acctxt:#B87A00}\n:root[data-play=\"1\"][data-accent=\"rose\"]{--acc:#FF6FB0!important;--accrgb:255,111,176!important;--accbtn:#FF6FB0!important;--acctxt:#D6408A}\n:root[data-play=\"1\"][data-lm=\"0\"][data-accent=\"poppy\"]{--acctxt:#FF7A7A}\n:root[data-play=\"1\"][data-lm=\"0\"][data-accent=\"mustard\"]{--acctxt:#FFC94D}\n:root[data-play=\"1\"][data-lm=\"0\"][data-accent=\"rose\"]{--acctxt:#FF9CCB}\n:root[data-play=\"1\"],:root[data-play=\"1\"] body,:root[data-play=\"1\"] button,:root[data-play=\"1\"] input,:root[data-play=\"1\"] select,:root[data-play=\"1\"] textarea{font-family:var(--pfont)}\n:root[data-play=\"1\"] h1,:root[data-play=\"1\"] h2,:root[data-play=\"1\"] .word,:root[data-play=\"1\"] .big,:root[data-play=\"1\"] .logo,:root[data-play=\"1\"] .hero2 strong,:root[data-play=\"1\"] .ringw b,:root[data-play=\"1\"] .gbadge,:root[data-play=\"1\"] .tile.v b{font-family:var(--pfont)!important;font-weight:800!important;letter-spacing:-.01em}\n:root[data-play=\"1\"] h1{font-size:calc(30px*var(--fs,1))}\n:root[data-play=\"1\"] b,:root[data-play=\"1\"] strong{font-weight:800}\n/* Karten: Rand + dicke Unterkante */\n:root[data-play=\"1\"] .glass{border:2px solid var(--line)!important;border-radius:20px!important;box-shadow:0 3px 0 var(--line)!important}\n:root[data-play=\"1\"] .glass .glass{background:var(--glass-soft)!important;box-shadow:none!important;border-radius:16px!important}\n:root[data-play=\"1\"] [data-act].glass:active,:root[data-play=\"1\"] .tile:active{transform:translateY(3px);box-shadow:0 0 0 var(--line)!important;opacity:1}\n:root[data-play=\"1\"] .lrow{border-radius:0}\n/* Kn\u00f6pfe: 3D wie bei Duolingo */\n:root[data-play=\"1\"] .btn{border-radius:16px!important;font-weight:800;min-height:52px;letter-spacing:.02em;background:var(--glass)!important;color:var(--acctxt)!important;border:2px solid var(--line)!important;box-shadow:0 4px 0 var(--line)!important}\n:root[data-play=\"1\"] .btn.ghost,:root[data-play=\"1\"] .btn.sec,:root[data-play=\"1\"] .btn.alt,:root[data-play=\"1\"] .btn.soft,:root[data-play=\"1\"] .btn.line{background:var(--glass)!important;color:var(--acctxt)!important}\n:root[data-play=\"1\"] .btn.pri,:root[data-play=\"1\"] .btn.pri.sm,:root[data-play=\"1\"] button.pri{background:var(--accbtn,var(--acc))!important;background-image:none!important;color:#fff!important;border:0!important;text-transform:uppercase;letter-spacing:.05em;font-size:calc(15px*var(--fs,1));box-shadow:0 4px 0 color-mix(in srgb,var(--accbtn,var(--acc)) 68%,#000)!important}\n:root[data-play=\"1\"] .btn.sm{min-height:40px;border-radius:12px!important;box-shadow:0 3px 0 var(--line)!important;font-size:calc(13px*var(--fs,1))}\n:root[data-play=\"1\"] .btn.pri.sm{box-shadow:0 3px 0 color-mix(in srgb,var(--accbtn,var(--acc)) 68%,#000)!important}\n:root[data-play=\"1\"] .btn.good{background:#58CC02!important;color:#fff!important;border:0!important;box-shadow:0 4px 0 #3E8F00!important}\n:root[data-play=\"1\"] .btn.bad{background:#FF4B4B!important;color:#fff!important;border:0!important;box-shadow:0 4px 0 #C93030!important}\n:root[data-play=\"1\"] .btn:active{transform:translateY(4px);box-shadow:0 0 0 transparent!important;opacity:1}\n:root[data-play=\"1\"] .btn.sm:active{transform:translateY(3px)}\n:root[data-play=\"1\"] .gbtn,:root[data-play=\"1\"] .gbadge{background:var(--glass)!important;border:2px solid var(--line)!important;box-shadow:0 2px 0 var(--line)!important;border-radius:14px;font-weight:800}\n/* Kopfzeile, Fortschritt, Schalter, Eingaben */\n:root[data-play=\"1\"] .hdr::before{background:var(--bg);border-bottom:2px solid var(--line)}\n:root[data-play=\"1\"] .logo,:root[data-play=\"1\"] .logo.gradient-text{-webkit-text-fill-color:var(--acctxt)!important;color:var(--acctxt)!important;font-size:calc(22px*var(--fs,1));font-weight:900!important}\n:root[data-play=\"1\"] .prog,:root[data-play=\"1\"] .bar{height:14px;border-radius:999px;background:var(--glass-soft)!important}\n:root[data-play=\"1\"] .prog i,:root[data-play=\"1\"] .bar i{border-radius:999px;background:var(--acc)!important;box-shadow:inset 0 4px 0 rgba(255,255,255,.28)!important}\n:root[data-play=\"1\"] .segc{border:2px solid var(--line)!important;background:var(--glass)!important;border-radius:14px!important;padding:3px!important}\n:root[data-play=\"1\"] .segc button{border-radius:10px;font-weight:800;color:var(--ink2)!important}\n:root[data-play=\"1\"] .segc button.on{background:var(--acc)!important;color:#fff!important;box-shadow:0 2px 0 color-mix(in srgb,var(--acc) 68%,#000)}\n:root[data-play=\"1\"] .spill{background:var(--acc)!important;border-radius:10px!important;box-shadow:0 2px 0 color-mix(in srgb,var(--acc) 68%,#000)!important}\n:root[data-play=\"1\"] .in,:root[data-play=\"1\"] .ta,:root[data-play=\"1\"] select.in{background:var(--glass)!important;border:2px solid var(--line)!important;border-radius:14px!important;font-weight:700}\n:root[data-play=\"1\"] .in:focus,:root[data-play=\"1\"] .ta:focus{border-color:var(--acc)!important;outline:0}\n:root[data-play=\"1\"] .tg.on{background:var(--acc)!important}\n/* Tab-Leiste unten */\n:root[data-play=\"1\"] .tabbar,:root[data-play=\"1\"] .tabbar.glass{background:var(--bg)!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;border:0!important;border-top:2px solid var(--line)!important;box-shadow:none!important;padding-top:8px}\n:root[data-play=\"1\"] .tab{border:2px solid transparent;border-radius:14px;padding:5px 0 3px;font-size:calc(11px*var(--fs,1));font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:var(--ink2)!important}\n:root[data-play=\"1\"] .tab.on{border-color:color-mix(in srgb,var(--acc) 55%,transparent);background:rgba(var(--accrgb),.14)!important;color:var(--acctxt)!important}\n:root[data-play=\"1\"] .tab .ti svg{width:28px;height:28px;stroke-width:2.2}\n:root[data-play=\"1\"] .tab.on .ti svg{fill:rgba(var(--accrgb),.28)}\n:root[data-play=\"1\"] #toast.toast{border-radius:16px;font-weight:800;background:#1F2C33;border:2px solid #37464F}\n/* Pfad-Knoten, Heute-Held */\n:root[data-play=\"1\"] .pnode{box-shadow:0 6px 0 color-mix(in srgb,var(--acc) 62%,#000)}\n:root[data-play=\"1\"] .hero2.glass{border-color:color-mix(in srgb,var(--acc) 45%,var(--line))!important;box-shadow:0 4px 0 color-mix(in srgb,var(--acc) 45%,var(--line))!important}\n:root[data-play=\"1\"] .tabbar,:root[data-play=\"1\"] .tabbar.glass{border-radius:0!important}\n/* Seitenleiste auf breiten Bildschirmen (iPad quer, PC) */\n@media (min-width:1024px){\n:root[data-play=\"1\"] #app{margin-left:232px}\n:root[data-play=\"1\"] .tabbar,:root[data-play=\"1\"] .tabbar.glass{position:fixed!important;left:0!important;right:auto!important;top:0!important;bottom:0!important;width:232px!important;max-width:232px!important;height:100dvh;flex-direction:column;justify-content:flex-start!important;align-items:stretch;gap:6px!important;padding:84px 14px 20px!important;border-top:0!important;border-right:2px solid var(--line)!important;transform:none!important}\n:root[data-play=\"1\"] .tab{flex:none;max-width:none;flex-direction:row!important;align-items:center;justify-content:flex-start;gap:14px!important;padding:10px 14px!important;font-size:calc(14px*var(--fs,1));letter-spacing:.06em}\n:root[data-play=\"1\"] .tab .ti{height:28px!important}\n:root[data-play=\"1\"] main{padding-bottom:40px}\n:root[data-play=\"1\"] .setsplit{min-height:0}\n:root[data-play=\"1\"] main.home,:root[data-play=\"1\"] main.tall{min-height:0}\n}\n@media (min-width:1024px){\n:root[data-play=\"1\"] .tabbar::before{display:block!important;content:\"EasyVocab\";position:absolute;left:24px;top:26px;font-size:calc(24px*var(--fs,1));font-weight:900;letter-spacing:-.01em;color:var(--acctxt);font-family:var(--pfont)}\n:root[data-play=\"1\"] .hdr .logo{display:none}\n}\n@media (min-width:1024px){:root[data-play=\"1\"] .tabbar::before{border:0!important;background:none!important;box-shadow:none!important;inset:auto!important;left:24px!important;top:26px!important;width:auto;height:auto;border-radius:0!important}}\n@media (min-width:1024px){:root[data-play=\"1\"] .hdr .logo{display:block!important}}\n\n/* Build 135: Duell handlicher */\n.dside{padding:18px clamp(28px,7vw,72px) 14px;gap:12px}\n.dhd{font-size:calc(20px*var(--fs,1))}.dhd b{font-weight:800}\n.dsc{font-size:calc(38px*var(--fs,1));min-width:60px}\n.dw{font-size:clamp(40px,8.5vw,104px)}\n.dbuz{min-height:150px;border-radius:32px;font-size:clamp(34px,6.5vw,60px)}\n.dbuz:active{transform:scale(.975)}\n.dbuz.sm{min-height:76px;border-radius:24px}\n.dopts{gap:14px;grid-auto-rows:minmax(84px,1fr)}\n.dopt{min-height:84px;border-radius:24px;font-size:clamp(20px,4vw,34px);padding:12px 14px;box-shadow:inset 0 0 0 2px rgba(128,128,128,.35),0 4px 0 rgba(128,128,128,.25)}\n.dopt:active{transform:translateY(3px);box-shadow:inset 0 0 0 2px rgba(128,128,128,.35)}\n.djb .btn{min-width:170px;min-height:72px;font-size:calc(24px*var(--fs,1))}\n.dmid{flex:0 0 auto;display:flex;align-items:center;justify-content:center;gap:20px;padding:6px 16px;font-size:calc(16px*var(--fs,1));font-weight:700;background:var(--glass-soft,rgba(128,128,128,.14));border-top:1px solid rgba(128,128,128,.25);border-bottom:1px solid rgba(128,128,128,.25)}\n.dmid .link{min-height:44px;padding:0 18px;border-radius:999px;font-weight:800}\n.dmid .link.dq2{background:rgba(255,59,48,.12);color:#d12a20}\n@media (max-height:560px){.dbuz{min-height:90px}.dopts{grid-auto-rows:minmax(60px,1fr)}.dopt{min-height:60px}.dw{font-size:clamp(30px,6vw,60px)}}\n.dside{overflow:hidden}\n.dopts{grid-template-rows:1fr 1fr;grid-auto-rows:auto}\n.dopt{min-height:56px;font-size:clamp(18px,min(4vw,5.2vh),34px)}\n.dw{font-size:clamp(32px,min(8.5vw,10.5vh),104px)}\n.dbuz{font-weight:800;min-height:0}\n.dbuz span{font-weight:800}.dbuz small{font-weight:600}\n.dsc{font-size:clamp(28px,5vh,38px)}\n.dside{padding-top:clamp(8px,1.6vh,18px);gap:clamp(6px,1.4vh,12px)}\n:root{--fs:1}*{box-sizing:border-box}body{font:14px/1.4 -apple-system,Helvetica,Arial,sans-serif;color:#111;background:#fff;margin:0}.box{border:1px solid #333;padding:10px 14px;margin-bottom:18px}.box b{font-size:15px}table{width:100%;border-collapse:collapse}td{border-bottom:1px solid #ccc;padding:7px 6px;vertical-align:top}td.n{width:28px;color:#666}td.hw{font-family:\"Bradley Hand\",\"Segoe Print\",\"Comic Sans MS\",cursive;font-size:17px}td.m{width:30px;text-align:center;font-weight:900;font-size:20px}.red{color:#d70015;font-family:\"Bradley Hand\",\"Segoe Print\",\"Comic Sans MS\",cursive}.foot{margin-top:18px;display:flex;justify-content:space-between;font-size:22px}.foot .red{font-size:26px}small{font-size:.7em}@page{margin:14mm}";document.head.appendChild(s);try{document.documentElement.style.backgroundColor='';document.documentElement.style.colorScheme='';}catch(e){}})();

const W=[
["to lean on sb/sth","sich an jmdn./etw. anlehnen"],["beneath","unter; unterhalb"],["to shrug (one's shoulders)","mit den Schultern zucken"],["collar","Kragen"],["leather","Leder"],["breast","Brust"],["denim","Jeans-"],["to rip sth off","etw. abreißen"],["sleeve","Ärmel"],["to imitate sb/sth","jmdn./etw. nachahmen"],
["authentic","authentisch; echt; glaubwürdig"],["to approach","sich nähern"],["to cough","husten"],["to glance at sb/sth","jmdn./etw. anblicken"],["sly","durchtrieben; listig"],["awestruck","von Ehrfurcht ergriffen; beeindruckt"],["fist","Faust"],["to respond","antworten"],["to be unaware of sb/sth","jmdn./etw. nicht bemerken"],["imaginary","imaginär; eingebildet"],
["jaw","Kiefer"],["fellow","Mit-"],["property","Eigentum; Grundbesitz; Besitz"],["word spreads","es spricht sich herum"],["jerk","Trottel"],["countless","unzählig; zahllos"],["lanky","schlaksig"],["timber","Holz; Bauholz"],["to transfer","transferieren; (die Schule) wechseln"],["to slide","gleiten (lassen); rutschen"],
["to pride oneself on (doing) sth","auf etw. stolz sein; sich mit etw. rühmen"],["to regret","bedauern"],["to keep score","den Spielstand mitschreiben"],["stroke","Strich"],["blaze","Strahl; Glanzlicht"],["to quit","aufhören; aufgeben"],["underneath","darunter; unten"],["at the crack of dawn","beim Morgengrauen"],["meanwhile","unterdessen; inzwischen"],["to be tempted to do sth","versucht sein, etw. zu tun"],
["be relieved","erleichtert sein"],["thumb","Daumen"],["spark","Funke"],["to slam","(zu)schlagen"],["to be surrounded (by sb)","(von jmdm.) umzingelt/umringt sein"],["to beat","schlagen; klopfen"],["pale","bleich; blass"],["moustache","Oberlippenbart; Schnurrbart"],["to be determined to do sth","entschlossen sein, etw. zu tun"],["to recover","sich erholen"],
["spot","Fleck"],["ash","Asche"],["to breathe","atmen"],["rib","Rippe"],["to squeeze","drücken"],["chest","Brust (Brustkorb)"],["satisfaction","Befriedigung; Zufriedenheit"],["numb","taub"],["to bend forward","sich vorbeugen"],["bright","hell"],
["to drip","tropfen"],["to darken","dunkler werden"],["loose","locker"],["swollen","(an)geschwollen"],["to figure sth","sich etw. vorstellen"],["stain","Fleck"],["to be worth sth","etw. wert sein"],["to consider","berücksichtigen"],["to symbolise","symbolisieren"],["to be concerned about sth","besorgt sein um etw.; sich Sorgen machen"],
["contradictory","widersprüchlich"],["to deny","ablehnen; verweigern"],["immaturity","Unreife"],["internship (AE)","Praktikum"],["to turn","werden"],["discouraged","entmutigt; mutlos"],["in the long term","langfristig"],["to pass down","weitergeben; vermachen"],["civic","bürgerlich; Bürger-"],["failure","Erfolglosigkeit; Versagen"],
["to be down to sth","an etw. liegen; auf etw. zurückzuführen sein"],["disability","Behinderung"],["dusk","(Abend-)Dämmerung"],["to peer","spähen"],["fence","Zaun"],["streetlight","Straßenlampe"],["blurred","unscharf; verschwommen"],["to grip sb/sth","sich an jmdm./etw. festhalten"],["steam","Dampf"],["kettle","(Tee-)Kessel; Wasserkocher"],
["to boil","kochen; sieden"],["to litter","übersäen; wegwerfen"],["to instruct","anleiten"],["to rush","hetzen; eilen"],["forehead","Stirn"],["hurriedly","eilig; fluchtartig"],["to clasp","(um)klammern"],["glance","Blick"]
];
const E=[
"Don't lean on that wall! It has just been painted.",
"There's a river beneath the bridge.",
"If you shrug your shoulders, it can mean you don't know about sth, or you aren't interested.",
"I've got a white shirt with a red collar.",
"I want to buy that leather jacket, but it's very expensive.",
"When the doctor told her that she had breast cancer, she was shocked.",
"a denim jacket/skirt",
"He ripped the paper off the parcel.",
"My pullover has got long sleeves.",
"My brother can imitate different celebrities. · Fr. imiter",
"Your English sounds authentic.",
"to approach = to get closer · to approach → approach (n)",
"I think I've got a cold. I can't stop coughing. · to cough → cough (n)",
"I glanced at my watch and saw that I was already late. · to glance at → glance (n)",
"He looked at me with a sly smile.",
"When my sister got her first part in a film, I was awestruck.",
"He hit the table with his fist.",
"to respond = to answer · Fr. répondre",
"to be unaware of sb/sth = not to notice sb/sth",
"imaginary → imagination (n) → to imagine (v)",
"He broke his jaw in a car accident.",
"Jack's fellow students didn't like him. · sb who is in the same position or is involved in the same activity",
"This beach is private property – keep out! · property = ownership",
"",
"Don't call anyone a jerk! It will make them very angry.",
"countless → to count (v)",
"",
"wood that is used for building houses and furniture",
"to move (sb or sth) from one place to another · Fr. transférer; Lat. transferre",
"He slid down the hill. · to slide, slid, slid",
"to pride oneself on sth = to be proud of sth · → pride (n) → proud (adj)",
"When you feel sorry about something you said or did, then you regret it. · to regret → regret (n) · Fr. regretter",
"",
"What do these strokes in your calendar mean? – They show the number of days before my holidays.",
"",
"I don't feel like working on this Biology project for another second. But if I quit now, I know I'll never finish. · to quit, quit, quit",
"underneath ↔ above",
"dawn ↔ dusk",
"meanwhile = at the same time",
"He found a $50 bill and, although he was tempted to keep it, he took it to the police station.",
"to be relieved → relief (n)",
"You use your thumb to write text messages.",
"Sparks were flying around the fire.",
"Don't slam the door, Peter! Your sister is asleep.",
"They were surrounded by a dozen people.",
"I heard a strange noise and my heart began to beat wildly. · to beat, beat, beaten",
"Are you sick? You look very pale.",
"The criminal had brown eyes and a black moustache. · Fr. moustache (f)",
"When he found out that his friend was in trouble, he was determined to help him.",
"I've been ill, but I'm slowly recovering.",
"My T-shirt is dirty. There are a lot of spots on it.",
"You've dropped cigarette ash on the carpet!",
"Breathe slowly and deeply! · to breathe → breath (n)",
"I broke a rib in a basketball match.",
"to squeeze = to press",
"He felt his heart beating in his chest.",
"After he had done a good job, he had a feeling of satisfaction. · satisfaction → to satisfy (v) → satisfied (adj)",
"After the accident he couldn't feel his leg. It had gone numb.",
"He bent forward to press the button. · to bend, bent, bent",
"bright ↔ dark",
"Rain was dripping down his neck.",
"to darken = to become darker · to darken → dark (adj)",
"My shoe fell off because it was loose.",
"I've been dancing all night. My feet are swollen.",
"to figure sth = to imagine sth",
"stain = spot",
"This jewellery is worth 500,000 dollars.",
"If you have to take a decision, you should consider the advantages and disadvantages. · Fr. considérer",
"to symbolise → symbol · Fr. symboliser",
"Many parents are concerned about the violent computer games their children play. · to be concerned about sth = to be worried about sth · → concern (n): a matter of great concern",
"contradictory → contradiction (n) → to contradict (v) · Lat. contradicere",
"They denied the people the right to free speech.",
"immaturity ↔ maturity · immaturity → immature (adj)",
"AE: internship · BE: (work) placement",
"My brother turned 18 yesterday. · to turn = to become",
"discouraged ↔ encouraged · Fr. découragé/-e",
"long-term ↔ short-term",
"to pass sth down to your children",
"Citizens have civic duties, like paying taxes, voting and not breaking the law.",
"failure ↔ success · failure → to fail (v)",
"to be down to sth = to be caused by sth",
"The Fragile X Syndrome is a disability. · disability → disabled (adj)",
"You must be home before dusk. · dusk ↔ dawn",
"He was peering through the window.",
"There's a fence round the park.",
"Suddenly all the streetlights went out and it was completely dark.",
"After I had hit my head, everything was blurred.",
"I gripped the rail because I was afraid of falling down.",
"A cloud of steam was rising from the hot soup.",
"Where's the kettle? I'd like to make some tea.",
"The water is boiling now. Let's put the pasta in.",
"The floor was littered with newspapers.",
"Can you instruct me how to use this machine? · to instruct → instruction (n) → instructor (n)",
"to rush = to hurry",
"I think you've got a temperature. Your forehead is hot.",
"After the argument she left the house hurriedly. · hurriedly → to hurry",
"She clasped her bag because she was afraid that someone could steal it.",
"glance → to glance (v)"
];
const BS=10,BASE=W.length;
const INT=[0,0,1,3,7,21];
const CAP={mc:3,cards:4,write:4,type:5};
const MODE={auto:{i:'🚀',t:'Smart-Training',d:'Dein persönlicher Trainer'},cards:{i:'📋',t:'Karteikarten',d:'Aufdecken und bewerten'},mc:{i:'🧠',t:'Probetest',d:'Antwort auswählen'},type:{i:'✍️',t:'Tippen',d:'Tastatur oder Apple Pencil'},write:{i:'✍️',t:'Schreiben',d:'Mit dem Apple Pencil'},test:{i:'📝',t:'Tipp-Test',d:'Wie in der Klausur'},weak:{i:'🎯',t:'Knifflige Wörter',d:'Gezielt wiederholen'},learn:{i:'👀',t:'Lernen',d:'Wörter erst ansehen'},planner:{i:'📅',t:'Planer',d:'Testplaner'},stats:{i:'📈',t:'Statistik',d:'Dein Fortschritt'},words:{i:'📚',t:'Wörter',d:'Verwalten'}};
const app=document.getElementById('app');
const KEY='gl-vokabeln-v2';
const DEF=function(){return {v:4,box:{},due:{},wrong:{},days:{},gd:{},hist:{},st:{ok:0,no:0},custom:[],exams:[],run:null,onb:0,dailyGoal:10,quizLength:10,flashcardCount:10,fontSize:'M',shuffleCards:true,autoNext:true,examSec:20,vA:'',vB:'',vC:'',sfx:true,mins:{},weekGoal:4,weekPaid:'',haptic:true,autoCloud:true,ease:{},newsV:0,coins:0,freeze:0,xp:0,xpBoostUntil:0,tokens:0,marathonDay:'',owned:{},nick:'',emoji:'',fedAt:0,avatar:'',boostUntil:0,coll:{},loginDay:'',look:'natural',ui:'play',playMig:1,accent:'green',frozen:{},goalPaid:'',avgSec:8,darkMode:null,remindersEnabled:false,remHour:17,speak:false,bg:'ice',bgMotion:true,lang2:'none',aiOn:true,glass:2,claimed:{},memo:{},aiCalls:0,aiDays:{},emo:'all',retP:90,wkJ:true,fs:{},q:{},use:{},prof:null,strictFrom:''};};
const APP_NAME='EasyVocab';
function mmq(q){try{return !!(window.matchMedia&&matchMedia(q).matches);}catch(e){return false;}}
let P=DEF();
function fmt(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function addDays(n){const d=new Date();d.setDate(d.getDate()+n);return fmt(d);}
let SAVEFAIL=false;
let NOSAVE=false;
function isHosted(){return !(window.claude&&window.claude.use);}
function cloudMode(){if(!isHosted())return 'claude';return (typeof sbIn==='function'&&sbIn())?'sb':null;}
function save(){if(NOSAVE)return;try{localStorage.setItem(KEY,JSON.stringify(P));SAVEFAIL=false;}catch(e){SAVEFAIL=true;}if(!CSAVING)cloudQueue();}
let CSAVING=false,CQ=null,CLAST=0,CBUSY=false,CCHK=false;
function sanitize(o){const d=DEF();if(!o.strictFrom)o.strictFrom=fmt(new Date());['box','due','wrong','days','gd','hist','claimed','memo','aiDays','ease','fs','q','use'].forEach(function(k){if(!o[k]||typeof o[k]!=='object'||Array.isArray(o[k]))o[k]=d[k]||{};});
  ['custom','exams'].forEach(function(k){if(!Array.isArray(o[k]))o[k]=[];});
  o.custom=o.custom.filter(function(c){return c&&typeof c.en==='string'&&typeof c.de==='string';});
  o.exams=o.exams.filter(function(e){return e&&typeof e.date==='string'&&Array.isArray(e.ids);});
  ['owned','coll'].forEach(function(k){if(!o[k]||typeof o[k]!=='object'||Array.isArray(o[k]))o[k]={};});if(typeof o.avatar!=='string')o.avatar='';if(!o.mins||typeof o.mins!=='object'||Array.isArray(o.mins))o.mins={};if(typeof o.nick!=='string')o.nick='';if(typeof o.weekGoal!=='number'||o.weekGoal<1||o.weekGoal>7)o.weekGoal=4;if(typeof o.weekPaid!=='string')o.weekPaid='';if(typeof o.emoji!=='string')o.emoji='';if(typeof o.fedAt!=='number')o.fedAt=0;if(typeof o.boostUntil!=='number')o.boostUntil=0;if(typeof o.loginDay!=='string')o.loginDay='';
  if(!o.frozen||typeof o.frozen!=='object'||Array.isArray(o.frozen))o.frozen={};['coins','freeze','xp','tokens','xpBoostUntil'].forEach(function(k){if(typeof o[k]!=='number'||o[k]<0||!isFinite(o[k]))o[k]=0;});if(typeof o.avgSec!=='number'||!(o.avgSec>0)||o.avgSec>120)o.avgSec=8;
  if(!o.st||typeof o.st!=='object'||typeof o.st.ok!=='number'||typeof o.st.no!=='number')o.st={ok:0,no:0};
  Object.keys(o.gd).forEach(function(k){if(!Array.isArray(o.gd[k]))delete o.gd[k];});
  Object.keys(o.days).forEach(function(k){if(typeof o.days[k]!=='number')delete o.days[k];});
  return o;}
function nearest(v,arr){return arr.reduce(function(a,b){return Math.abs(b-v)<Math.abs(a-v)?b:a;});}
function migrate(){
  let ch=false;
  if(!P.playMig){P.playMig=1;P.ui='play';P.accent='green';ch=true;}
  ['box','due'].forEach(function(f){Object.keys(P[f]).forEach(function(k){if(k.indexOf('|')<0){P[f][k+'|en']=P[f][k];P[f][k+'|de']=P[f][k];delete P[f][k];ch=true;}});});
  if(P.goal!==undefined){P.dailyGoal=nearest(P.goal,[5,10,20,50]);delete P.goal;ch=true;}
  if(P.qlen!==undefined){P.quizLength=nearest(P.qlen,[5,10,15,20]);P.flashcardCount=nearest(P.qlen,[5,10,15,20,30]);delete P.qlen;ch=true;}
  if(P.speak===0||P.speak===1){P.speak=!!P.speak;ch=true;}
  delete P.theme;delete P.size;
  if(P.owned&&P.owned['🚀']){P.owned['🦘']=true;delete P.owned['🚀'];ch=true;}
  if(P.avatar==='🚀'){P.avatar='🦘';ch=true;}
  {const mp={sun:'sand',sage:'forest',berry:'clay'};if(mp[P.bg]){P.bg=mp[P.bg];ch=true;}if(P.bg==='stone'){P.bg='ice';if(P.look==='vivid')P.look='natural';ch=true;}}
  P.v=4;if(ch)save();
}
try{const r=localStorage.getItem(KEY);if(r){const o=JSON.parse(r);if(o&&typeof o==='object'&&o.box&&typeof o.box==='object')P=sanitize(Object.assign(DEF(),o));}}catch(e){}
migrate();
let BC=null,BCk='';
function applyCustom(){W.length=BASE;E.length=BASE;(P.custom||[]).forEach(function(c){W.push([c.en,c.de]);E.push(c.ex||'');});BC=null;}
const BGP={ice:{n:'Blau',c:[[172,196,224],[198,214,234],[228,236,246]]},forest:{n:'Grün',c:[[176,198,180],[202,218,204],[230,238,230]]},clay:{n:'Rosé',c:[[214,184,186],[228,206,206],[242,230,228]]},sand:{n:'Sand',c:[[214,198,172],[228,216,196],[242,236,224]]},lilac:{n:'Lila',c:[[190,182,212],[208,202,226],[232,230,242]]},graphite:{n:'Grau',c:[[172,176,184],[198,201,207],[228,229,233]]},flat:{n:'Pur',c:[[242,242,247],[242,242,247],[242,242,247]]}};
function applyBg(){
  const el=document.documentElement;const nat=(P.look!=='vivid');el.setAttribute('data-look','natural');el.setAttribute('data-ui',(P.ui==='apple'||P.ui==='play')?'apple':'glass');el.setAttribute('data-play',P.ui==='play'?'1':'0');el.setAttribute('data-abg',P.abg==='weiss'?'weiss':'grau');el.setAttribute('data-bgk',nat?'natural':'vivid');el.setAttribute('data-pal',BGP[P.bg]?P.bg:'ice');el.setAttribute('data-accent',['blue','poppy','mustard','green','rose'].indexOf(P.accent)>=0?P.accent:'blue');
  const p=nat?{c:isDark()?[[52,68,98],[62,64,96],[78,74,74]]:[[160,186,224],[192,202,228],[224,216,210]]}:(BGP[P.bg]||BGP.ice);const a=nat?(isDark()?[0.28,0.28,0.24]:[0.6,0.52,0.48]):(P.bg==='flat'?[0,0,0]:(isDark()?[0.2,0.22,0.24]:[0.55,0.45,0.4]));
  p.c.forEach(function(c,i){el.style.setProperty('--aur'+(i+1),'rgba('+c.join(',')+','+a[i]+')');el.style.setProperty('--o'+(i+1),'rgb('+(isDark()?c.map(function(v){return Math.round(v*0.4);}):c).join(',')+')');});
  el.classList.toggle('still',!P.bgMotion);
}
function applyGlass(){
  const el=document.documentElement;const L=(P.glass==null?2:P.glass);const dark=isDark();el.setAttribute('data-glass',L);el.setAttribute('data-lm',dark?'0':'1');
  el.style.setProperty('--blur',[0,30,26,22][L]+'px');el.style.setProperty('--sat',[1,1.3,1.7,2.4][L]);
  el.style.setProperty('--glass',dark?'rgba(30,35,48,'+[1,0.8,0.5,0.4][L]+')':'rgba(255,255,255,'+[1,0.8,0.5,0.42][L]+')');
  el.style.setProperty('--bloom','rgba(255,255,255,'+(dark?[0.03,0.06,0.08,0.08][L]:[0.7,0.55,0.36,0.2][L])+')');
  el.style.setProperty('--glass-soft','rgba(255,255,255,'+(dark?[0.08,0.07,0.06,0.05][L]:[0.92,0.62,0.4,0.2][L])+')');
  el.style.setProperty('--glass-line','rgba(255,255,255,'+(dark?[0.14,0.16,0.2,0.26][L]:[0.85,0.8,0.85,0.9][L])+')');
  el.style.setProperty('--rim1','rgba(255,255,255,'+(dark?[0.12,0.25,0.38,0.5][L]:[0.5,0.8,0.95,1][L])+')');
}
const SEED5=[
['Chalk',[['fellow','Mit-',"Jack's fellow students didn't like him."],['property','Eigentum; Grundbesitz; Besitz','This beach is private property – keep out!'],['word spreads','es spricht sich herum',''],['jerk','Trottel',"Don't call anyone a jerk! It will make them very angry."],['countless','unzählig; zahllos',''],['lanky','schlaksig',''],['timber','Holz; Bauholz','wood that is used for building houses and furniture'],['to transfer','transferieren; hier: (die Schule) wechseln','to move (sb or sth) from one place to another'],['to slide','gleiten (lassen); rutschen','He slid down the hill.'],['to pride oneself on (doing) sth','auf etw. stolz sein; sich mit etw. rühmen','to pride oneself on sth = to be proud of sth'],['to regret','bedauern','When you feel sorry about something you said or did, then you regret it.'],['to keep score','den Spielstand mitschreiben',''],['stroke','Strich','What do these strokes in your calendar mean? – They show the number of days before my holidays.'],['blaze','Strahl; Glanzlicht',''],['to quit','aufhören; aufgeben',"I don't feel like working on this Biology project for another second. But if I quit now, I know I'll never finish."],['underneath','darunter; unten','underneath ↔ above'],['at the crack of dawn','beim Morgengrauen; in aller Frühe','dawn ↔ dusk'],['wounded','verwundet; verletzt','wounded → wound (n)'],['alarm','Wecker','An alarm (or alarm clock) wakes you up in the morning.'],['deed','Tat','deed → to do (v)']]],
['VIP file',[['currently','gegenwärtig; momentan',"My sister is currently working in our dad's company."],['to reside','wohnen','to reside = to be living']]],
['On the bridge',[['to lean on sb/sth','sich an jmdn./etw. anlehnen',"Don't lean on that wall! It has just been painted."],['beneath','unter; unterhalb',"There's a river beneath the bridge."],["to shrug (one's shoulders)",'mit den Schultern zucken',"If you shrug your shoulders, it can mean you don't know about sth, or you aren't interested."],['collar','Kragen',"I've got a white shirt with a red collar."],['leather','Leder',"I want to buy that leather jacket, but it's very expensive."],['breast','Brust','When the doctor told her that she had breast cancer, she was shocked.'],['denim','Jeans-','a denim jacket/skirt'],['to rip sth off','etw. abreißen','He ripped the paper off the parcel.'],['sleeve','Ärmel','My pullover has got long sleeves.'],['to imitate sb/sth','jmdn./etw. nachahmen','My brother can imitate different celebrities.'],['authentic','authentisch; echt; glaubwürdig','Your English sounds authentic.'],['to approach','sich nähern','to approach = to get closer'],['to cough','husten',"I think I've got a cold. I can't stop coughing."],['to glance at sb/sth','jmdn./etw. anblicken','I glanced at my watch and saw that I was already late.'],['sly','durchtrieben; listig','He looked at me with a sly smile.'],['awestruck','von Ehrfurcht ergriffen; beeindruckt','When my sister got her first part in a film, I was awestruck.'],['fist','Faust','He hit the table with his fist.'],['to respond','antworten','to respond = to answer'],['to be unaware of sb/sth','jmdn./etw. nicht bemerken','to be unaware of sb/sth = not to notice sb/sth'],['imaginary','imaginär; eingebildet','imaginary → imagination (n) → to imagine (v)'],['jaw','Kiefer','He broke his jaw in a car accident.']]],
['Oberstufe Seite 2',[['meanwhile','unterdessen; inzwischen','meanwhile = at the same time'],['to be tempted to do sth','versucht sein, etw. zu tun','He found a $50 bill and, although he was tempted to keep it, he took it to the police station.'],['be relieved','erleichtert sein','to be relieved → relief (n)'],['thumb','Daumen','You use your thumb to write text messages.'],['spark','Funke','Sparks were flying around the fire.'],['to slam','(zu)schlagen',"Don't slam the door, Peter! Your sister is asleep."],['to be surrounded (by sb)','(von jmdm.) umzingelt/umringt sein','They were surrounded by a dozen people.'],['to beat','schlagen; klopfen','I heard a strange noise and my heart began to beat wildly.'],['pale','bleich; blass','Are you sick? You look very pale.'],['moustache','Oberlippenbart; Schnurrbart','The criminal had brown eyes and a black moustache.'],['to be determined to do sth','entschlossen sein, etw. zu tun','When he found out that his friend was in trouble, he was determined to help him.'],['to recover','sich erholen',"I've been ill, but I'm slowly recovering."],['spot','Fleck','My T-shirt is dirty. There are a lot of spots on it.'],['ash','Asche',"You've dropped cigarette ash on the carpet!"],['to breathe','atmen','Breathe slowly and deeply!'],['rib','Rippe','I broke a rib in a basketball match.'],['to squeeze','drücken','to squeeze = to press'],['chest','Brust','He felt his heart beating in his chest.'],['satisfaction','Befriedigung; Zufriedenheit','After he had done a good job, he had a feeling of satisfaction.'],['numb','taub',"After the accident he couldn't feel his leg. It had gone numb."],['to bend forward','sich vorbeugen','He bent forward to press the button.'],['bright','hell','bright ↔ dark']]],
['Oberstufe Seite 3',[['to drip','tropfen','Rain was dripping down his neck.'],['to darken','dunkler werden','to darken = to become darker'],['loose','locker','My shoe fell off because it was loose.'],['swollen','(an)geschwollen',"I've been dancing all night. My feet are swollen."],['to figure sth','sich etw. vorstellen','to figure sth = to imagine sth'],['stain','Fleck','stain = spot'],['to be worth sth','etw. wert sein','This jewellery is worth 500,000 dollars.'],['to consider','berücksichtigen','If you have to take a decision, you should consider the advantages and disadvantages.'],['to symbolise','symbolisieren','to symbolise → symbol']]]
];
function seedPages(){if(!P.sfxV){P.sfx=true;P.sfxV=1;save();}if((P.seedV||0)>=1)return;let n=0;SEED5.forEach(function(g){g[1].forEach(function(w){if(addWord(w[0],w[1],w[2],9,'en',g[0])==='ok')n++;});});P.seedV=1;save();BC=null;}
/* ===== v92 ===== */
function relParse(){const out=[];allIds().forEach(function(id){if(wlang(id)!=='en')return;const x=String(E[id]||'').trim();const m=x.match(/^(.+?)\s*(↔|=|→)\s*(.+)$/);if(!m)return;const l=m[1].trim(),r=m[3].trim();if(!l||!r||l.length>40||r.length>60)return;if(l.toLowerCase()===r.toLowerCase())return;out.push({id:id,l:l,t:m[2],r:r});});return out;}
function relClean(r){return String(r).replace(/\s*→.*$/,'').trim();}
function mcgPick(correct,pool,n){const seen={};seen[correct.toLowerCase()]=1;const d=[];shuffle(pool.slice()).forEach(function(x){const k=String(x).toLowerCase();if(!seen[k]&&d.length<n){seen[k]=1;d.push(x);}});return d;}
function mcgStart(kind){
  const ids=allIds().filter(function(id){return wlang(id)==='en';});let items=[];
  if(kind==='rel'){const R=relParse();if(R.length<3){toast('Dafür brauchst du Wörter mit Gegenteil (↔), Gleichung (=) oder Wortfamilie (→) in der Hilfe-Spalte.');return;}
    const rights=R.map(function(x){return relClean(x.r);});const lefts=R.map(function(x){return x.l;});
    items=shuffle(R.slice()).slice(0,10).map(function(x){const ans=x.t==='→'?relClean(x.r)+(/\((n|v|adj|adv)\)/.test(x.r)?'':''):x.r;const aw=x.t==='→'?x.r:x.r;const pool=R.filter(function(y){return y.t===x.t&&y!==x;}).map(function(y){return y.r;}).concat(rights,lefts);const opts=shuffle([aw].concat(mcgPick(aw,pool,3)));
      return {q:x.t==='↔'?'Gegenteil von':(x.t==='='?'Gleiche Bedeutung wie':'Wortfamilie von'),w:x.l,opts:opts,a:opts.indexOf(aw),say:x.l,id:x.id};});
    S.mcg={kind:kind,t:'Beziehungen',ic:'🔗',items:items};}
  else if(kind==='hear'){if(!canSpeak){toast('Vorlesen wird auf diesem Gerät nicht unterstützt.');return;}if(ids.length<4){toast('Dafür gibt es noch zu wenige Wörter.');return;}
    const pick=shuffle(ids.slice()).slice(0,10);const all=ids.map(function(i){return gShort(W[i][1]);});
    items=pick.map(function(id){const ans=gShort(W[id][1]);const opts=shuffle([ans].concat(mcgPick(ans,all,3)));return {q:'Hör zu und wähle die Bedeutung',w:'🔊',opts:opts,a:opts.indexOf(ans),say:gEn(id),id:id,hide:true};});
    S.mcg={kind:kind,t:'Hörverstehen',ic:'👂',items:items};}
  else return;
  setFrom();S.mcg.i=0;S.mcg.ok=0;S.mcg.no=0;S.mcg.pick=-1;S.mcg.rw=null;S.screen='mcg';render();setTimeout(mcgSay,250);
}
function mcgSay(){const g=S.mcg;if(!g||!g.items[g.i])return;const it=g.items[g.i];if(it.say&&(g.kind==='hear'||P.speak))try{sayEn(it.say,g.kind==='hear'?0.85:0.9);}catch(e){}}
function mcgView(){
  const g=S.mcg;if(!g)return '<div class="glass pad w center">Nichts offen.</div>';
  if(g.i>=g.items.length){
    if(!g.rw){g.rw=gameReward(Math.min(30,g.ok*3+4),3);if(g.ok>=g.items.length-1){sfx('done');confetti();}save();}
    const f=g.rw;
    return '<div class="pt"><h1>'+g.t+'</h1></div><div class="glass pad w col center"><div class="big-ico">'+(g.ok===g.items.length?'🏆':'🎉')+'</div><b>'+g.ok+' von '+g.items.length+' richtig</b>'+(f?'<p class="hint" style="margin:2px 0">'+(f.capped?'Für heute gibt es keine Belohnung mehr.':'+'+f.xp+' XP und +'+f.coins+' 🪙')+'</p>':'')+'</div><div class="row2"><button class="btn" data-act="mcgagain">Nochmal</button><button class="btn pri" data-act="home">Zum Menü</button></div>';}
  const it=g.items[g.i];const done=g.pick>=0;
  let h='<div class="cnt">'+g.ic+' '+g.t+' · Aufgabe '+(g.i+1)+' von '+g.items.length+'</div><div class="prog thin w"><i style="width:'+Math.round(g.i/g.items.length*100)+'%"></i></div>';
  h+='<div class="glass pad w center mcgq"><span class="lab">'+esc(it.q)+'</span><div class="word'+(String(it.w).length>22?' sm':'')+'" style="font-size:30px;font-weight:800;margin:8px 0">'+esc(it.w)+'</div>'+(it.say?'<button class="btn sm" data-act="mcgsay">🔊 Anhören</button>':'')+'</div>';
  h+='<div class="mcgopts w">'+it.opts.map(function(o,i){const c=done?(i===it.a?' right':(i===g.pick?' wrong':'')):'';return '<button class="mcgo glass gtap'+c+'" data-act="mcgpick" data-v="'+i+'"'+(done?' disabled':'')+'><span class="nm">'+(i+1)+'</span><span>'+esc(o)+'</span></button>';}).join('')+'</div>';
  if(done)h+='<div class="sheet '+(g.pick===it.a?'right':'wrong')+'" role="status"><b>'+(g.pick===it.a?'Richtig':'Nicht ganz')+'</b>'+(it.hide?'<div class="sol">'+esc(W[it.id][0])+' = '+esc(W[it.id][1])+'</div>':'')+'<button class="btn" data-act="mcgnext">Weiter</button></div>';
  return h;
}
/* Sätze schreiben (braucht KI) */
function sentStart(){
  if(!aiOK()){toast('Sätze prüfen braucht Claude. Hier ist es gerade nicht verfügbar.');return;}
  const ids=allIds().filter(function(id){return wlang(id)==='en';});if(!ids.length){toast('Füge zuerst Wörter hinzu.');return;}
  const pool=shuffle(ids.filter(function(id){return (P.wrong[id]||0)>0;}).concat(ids));
  setFrom();S.sent={ids:pool.slice(0,5),i:0,val:'',busy:false,res:null,err:'',ok:0};S.screen='sent';render();
}
function sentView(){
  const s=S.sent;if(!s)return '';
  if(s.i>=s.ids.length)return '<div class="pt"><h1>Sätze schreiben</h1></div><div class="glass pad w col center"><div class="big-ico">✍️</div><b>'+s.ok+' von '+s.ids.length+' Sätzen richtig</b></div><button class="btn pri full" data-act="home">Zum Menü</button>';
  const id=s.ids[s.i];
  let h='<div class="cnt">Satz '+(s.i+1)+' von '+s.ids.length+'</div><div class="prog thin w"><i style="width:'+Math.round(s.i/s.ids.length*100)+'%"></i></div>';
  h+='<div class="glass pad w center"><span class="lab">Schreibe einen Satz mit</span><div style="font-size:26px;font-weight:800;margin:8px 0">'+esc(gEn(id))+'</div><div class="hint">'+esc(W[id][1])+'</div></div>';
  h+='<div class="w"><textarea id="s-in" class="ta" rows="3" placeholder="Dein Satz auf Englisch" aria-label="Dein Satz"'+(s.res?' readonly':'')+'>'+esc(s.val)+'</textarea></div>';
  if(s.err)h+='<div class="err" role="alert">'+esc(s.err)+'</div>';
  if(s.busy)h+='<div class="center" style="padding:10px"><div class="spin"></div></div>';
  else if(!s.res)h+='<button class="btn pri full" data-act="sentcheck">Prüfen</button><button class="btn full" data-act="sentskip">Überspringen</button>';
  else h+='<div class="sheet '+(s.res.ok?'right':'wrong')+'" role="status"><b>'+(s.res.ok?(ageBand()==='kid'?'Super gemacht! 🎉':(ageBand()==='adult'?'Richtig':'Gut gemacht')):'Fast')+'</b>'+(s.res.fix?'<div class="sol">Besser: '+esc(s.res.fix)+'</div>':'')+(s.res.tip?'<div class="hint">'+esc(s.res.tip)+'</div>':'')+'<button class="btn" data-act="sentnext">Weiter</button></div>';
  return h;
}
function sentCheck(){
  const s=S.sent;const el=document.getElementById('s-in');const v=el?el.value.trim():'';if(v.length<6){toast('Schreibe einen ganzen Satz.');return;}
  s.val=v;s.busy=true;s.err='';render(true);aiTrack();const id=s.ids[s.i];
  AI.json('Ein Schüler lernt Englisch (Schulstufe '+((P.prof&&P.prof.grade)||'unbekannt')+'). Aufgabe: Satz mit dem Wort "'+gEn(id).replace(/"/g,"'")+'" ('+W[id][1].replace(/"/g,"'")+'). Satz des Schülers: "'+v.replace(/"/g,"'")+'". Antworte NUR mit JSON: {"ok":true oder false (Wort richtig benutzt UND Satz fehlerfrei genug),"fix":"verbesserte Fassung oder leer","tip":"ein kurzer Tipp auf Deutsch, höchstens 15 Wörter"}.',{modelTier:'quick'}).then(function(r){
    s.busy=false;s.res={ok:!!(r&&r.ok),fix:String((r&&r.fix)||'').slice(0,160),tip:String((r&&r.tip)||'').slice(0,120)};if(s.res.ok){s.ok++;sfx('ok');}else sfx('no');if(s.res.ok)earnXp(8);save();render(true);
  }).catch(function(e){s.busy=false;s.err=aiErr(e&&e.code);render(true);});
}
/* Kalibrierung: Trefferquote bei fälligen Wörtern vs. Erwartung */
function calNote(R,ok){if(!P.cal||!Array.isArray(P.cal))P.cal=[0,0,0];P.cal[0]++;P.cal[1]+=R;P.cal[2]+=ok?1:0;if(P.cal[0]>400){P.cal[0]*=0.5;P.cal[1]*=0.5;P.cal[2]*=0.5;}}
function calMult(){const c=P.cal;if(!c||c[0]<120)return 1;const diff=c[2]/c[0]-c[1]/c[0];return Math.max(0.75,Math.min(1.3,1+diff*2.5));}
function calCard(){const c=P.cal;if(!c||c[0]<30)return '';const act=Math.round(c[2]/c[0]*100),exp=Math.round(c[1]/c[0]*100);const m=calMult();
  return '<div class="glass pad w col tight"><div class="hd2"><span class="lab">Selbstkalibrierung</span><span class="hint">'+Math.round(c[0])+' Antworten</span></div><p class="hint" style="margin:0">Bei fälligen Wörtern erwartet die App '+exp+' % richtig. Du hast '+act+' %. '+(c[0]<120?'Ab 120 Antworten passt sie die Abstände an dich an.':(m>1.02?'Du behältst besser als gedacht, die Abstände werden etwa '+Math.round((m-1)*100)+' % länger.':(m<0.98?'Du vergisst schneller als gedacht, die Abstände werden etwa '+Math.round((1-m)*100)+' % kürzer.':'Das passt gut, nichts wird geändert.')))+'</p></div>';}
/* Beste Uhrzeit */
function hrNote(ok){const h=new Date().getHours();if(!P.hr||typeof P.hr!=='object'||Array.isArray(P.hr))P.hr={};const a=P.hr[h]||[0,0];a[1]++;if(ok)a[0]++;P.hr[h]=a;}
function bestHour(){const hr=P.hr||{};let best=null;Object.keys(hr).forEach(function(k){const a=hr[k];if(a[1]<15)return;const r=a[0]/a[1];if(!best||r>best.r)best={h:parseInt(k,10),r:r,n:a[1]};});return best;}
function hourCard(){const b=bestHour();if(!b)return '';return '<div class="glass pad w col tight"><div class="hd2"><span class="lab">Deine beste Uhrzeit</span></div><p class="hint" style="margin:0">Gegen '+b.h+' Uhr triffst du am besten ('+Math.round(b.r*100)+' % richtig bei '+b.n+' Antworten).</p>'+(P.remHour!==b.h?'<button class="btn sm" data-act="besthr" data-v="'+b.h+'">Erinnerung auf '+b.h+' Uhr setzen</button>':'<p class="hint" style="margin:0">Deine Erinnerung ist schon darauf eingestellt.</p>')+'</div>';}
/* Prognose */
function progPct(date){const ne=nextExam();let ids=ne?examIds(ne):(focusOn()?focusIds():allIds());if(!ids.length)return null;const tgt=date?new Date(date).getTime():Date.now();let sum=0,n=0,seen=0;ids.forEach(function(id){['en','de'].forEach(function(d){const st=fsGet(kk(id,d),bx(id,d));n++;if(st){seen++;const t=Math.max(0,(tgt-st.l)/864e5);sum+=fsR(t,st.s);}});});return (n&&seen>=Math.max(6,n*0.15))?{pct:Math.round(sum/n*100),n:ids.length,ne:ne}:null;}
function gradeNote(p){p=Math.max(0,Math.min(100,p));const B=[[100,92],[91,81],[80,67],[66,50],[49,30],[29,0]];let k=5;for(let i=0;i<B.length;i++){if(p>=B[i][1]){k=i;break;}}const hi=B[k][0],lo=B[k][1];let n=(k+0.5)+(hi-p)/(hi-lo+1);n=Math.max(1,Math.min(6,n));return n;}
function noteTxt(n){return (Math.round(n*10)/10).toFixed(1).replace('.',',');}
function progSeen(ids,tgt){let sum=0,seen=0;ids.forEach(function(id){['en','de'].forEach(function(d){const st=fsGet(kk(id,d),bx(id,d));if(st){seen++;const t=Math.max(0,(tgt-st.l)/864e5);sum+=fsR(t,st.s);}});});return {pct:seen?sum/seen*100:0,seen:seen};}
function progCard(){const ne=nextExam();const tgt=ne?new Date(ne.date).getTime():Date.now()+864e5;const ids=ne?examIds(ne):(focusOn()?focusIds():allIds());if(!ids.length)return '';const o=progSeen(ids,tgt);if(o.seen<6)return '';
  const wordsSeen=ids.filter(function(id){return fsGet(kk(id,'en'),bx(id,'en'))||fsGet(kk(id,'de'),bx(id,'de'));}).length;
  const nt=gradeNote(o.pct);
  let h='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Note aus deinen geübten Wörtern</span><span class="hint">'+wordsSeen+' von '+ids.length+'</span></div><div class="row" style="align-items:center;gap:14px"><b style="font-size:34px;white-space:nowrap">≈ '+noteTxt(nt)+'</b><span class="hint" style="margin:0">'+Math.round(o.pct)+' % der geübten Wörter '+(ne?'wären am '+esc(fmt2(ne.date))+' ':'sitzen morgen ')+'noch. Wörter, die du noch nie geübt hast, zählen nicht mit.</span></div>';
  const rows=[];blocks().forEach(function(b,k){const bi=b.ids.filter(isAlive);if(!bi.length)return;const r=progSeen(bi,tgt);if(r.seen<2)return;const ws=bi.filter(function(id){return fsGet(kk(id,'en'),bx(id,'en'))||fsGet(kk(id,'de'),bx(id,'de'));}).length;rows.push([b.name,r.pct,ws,bi.length]);});
  if(rows.length)h+='<div class="notel">'+rows.map(function(r){return '<div class="noter"><span class="nn">'+esc(r[0])+'</span><span class="nb"><i style="width:'+Math.round(r[1])+'%"></i></span><b>'+noteTxt(gradeNote(r[1]))+'</b><small>'+r[2]+'/'+r[3]+'</small></div>';}).join('')+'</div>';
  return h+'<p class="hint" style="margin:0">Eine Schätzung aus dem Lernalgorithmus, kein Versprechen für die echte Note.</p></div>';}
function fmt2(d){try{const x=new Date(d);return x.getDate()+'.'+(x.getMonth()+1)+'.';}catch(e){return d;}}
/* Serie erklären und zurückholen */
function streakInfo(){S.sheet={title:'So zählt deine Serie',sub:'Nur echtes Lernen zählt, nicht nur Öffnen',items:[{i:'✅',t:'Ein Tag zählt ab '+STREAK_MIN+' richtigen Wörtern',a:'shclose'},{i:'🏖️',t:'Samstag und Sonntag sind frei (Wochenend-Joker)',a:'shclose'},{i:'🧊',t:'Eisschutz rettet dich an einem verpassten Tag',a:'shclose'},{i:'🔁',t:'Serie weg? Nach 7+ Tagen kannst du sie in 3 Lerntagen zurückholen',a:'shclose'}]};render(true);}
function brokenInfo(){if(P.rest&&P.rest.on)return null;if(streak()>0)return null;const d=new Date();d.setDate(d.getDate()-1);let gap=0;while(gap<4&&!dayValid(fmt(d))){if(P.frozen&&P.frozen[fmt(d)]){}else if(P.wkJ!==false&&(d.getDay()===0||d.getDay()===6)){}else gap++;d.setDate(d.getDate()-1);if(gap>=4)return null;}
  if(!dayValid(fmt(d)))return null;let n=0;const e=new Date(d);for(let g=0;g<400;g++){const k=fmt(e);const wk=e.getDay()===0||e.getDay()===6;if(dayValid(k))n++;else if(P.frozen&&P.frozen[k]){}else if(P.wkJ!==false&&wk){}else break;e.setDate(e.getDate()-1);}
  return n>=7?{n:n,last:fmt(d)}:null;}
function restoreCard(){const r=P.rest;if(r&&r.on){const have=Object.keys(r.d||{}).length;return '<div class="glass pad w col tight"><div class="hd2"><span class="lab">🔁 Serie zurückholen</span><span class="hint">'+have+' von 3 Tagen</span></div><div class="prog thin"><i style="width:'+Math.round(have/3*100)+'%"></i></div><p class="hint" style="margin:0">Lerne an 3 Tagen je '+STREAK_MIN+' richtige Wörter, dann ist deine alte Serie von '+r.n+' Tagen wieder da.</p></div>';}
  const b=brokenInfo();if(!b)return '';return '<div class="glass pad w col tight"><div class="hd2"><span class="lab">Deine Serie von '+b.n+' Tagen ist unterbrochen</span></div><p class="hint" style="margin:0">Kein Drama. Du kannst sie in 3 Lerntagen zurückholen.</p><button class="btn pri sm" data-act="reststart">Zurückholen starten</button></div>';}
function restCheck(){const r=P.rest;if(!r||!r.on)return;const t=fmt(new Date());if(dayValid(t)&&!(r.d&&r.d[t])){r.d=r.d||{};r.d[t]=1;}
  if(Object.keys(r.d||{}).length>=3){const d=new Date();for(let g=0;g<14;g++){d.setDate(d.getDate()-1);const k=fmt(d);if(k<=r.last)break;if(!dayValid(k)){P.frozen=P.frozen||{};P.frozen[k]=true;}}P.rest={on:false,done:Date.now()};save();setTimeout(function(){toast('Serie zurück! 🔥 '+streak()+' Tage');sfx('level');confetti();},400);}
  else if(fmt(new Date(r.from))<fmt(new Date(Date.now()-6*864e5))){P.rest={on:false};save();}}
/* ===== v93 Liga (Computer-Gegner, bis es Online-Mitspieler gibt) ===== */
const LG_T=[['Bronze','🥉'],['Silber','🥈'],['Gold','🥇'],['Saphir','💠'],['Rubin','🔴'],['Smaragd','🟢'],['Diamant','💎']];
const LG_N=['Mia','Ben','Lena','Noah','Emma','Paul','Hanna','Finn','Lea','Leon','Sophie','Elias','Clara','Jonas','Nele','Luca','Ida','Tim','Marie','Felix','Anna','Max','Lotta','Ole','Jule','Tom','Emil','Nina','Jan','Greta','Theo','Pia','Luis','Frieda','Karl'];
const LG_E=['🦊','🐼','🐨','🦁','🐯','🐸','🦉','🐙','🦋','🐢','🦄','🐧','🐬','🦔','🐝','🦦','🐰','🐳','🦜','🐞'];
function lgSeed(str){let h=1779033703;for(let i=0;i<str.length;i++){h=Math.imul(h^str.charCodeAt(i),3432918353);h=h<<13|h>>>19;}return function(){h=Math.imul(h^h>>>16,2246822507);h=Math.imul(h^h>>>13,3266489909);h^=h>>>16;return (h>>>0)/4294967296;};}
function lgState(){if(!P.lg||typeof P.lg!=='object'||Array.isArray(P.lg))P.lg={t:0,hist:[]};if(!Array.isArray(P.lg.hist))P.lg.hist=[];if(!P.wxp||typeof P.wxp!=='object'||Array.isArray(P.wxp))P.wxp={k:weekKey(),xp:0};if(!Array.isArray(P.wxpHist))P.wxpHist=[];return P.lg;}
function lgAdd(n){lgState();if(P.wxp.k!==weekKey())lgRoll();P.wxp.xp+=n;}
function lgBase(t){const h=(P.wxpHist||[]).filter(function(x){return x>0;});const b=h.length?h.reduce(function(a,c){return a+c;},0)/h.length:Math.max(250,(P.dailyGoal||10)*14*4);return Math.max(200,Math.min(4000,b))*(1+0.1*t);}
function lgFrac(){const st=weekStart(0).getTime();return Math.max(0,Math.min(1,(Date.now()-st)/6048e5));}
function lgBots(k,t,frac){const out=[];const base=lgBase(t);const rn=lgSeed(k+'|'+t+'|names');const nm=LG_N.slice();for(let q=nm.length-1;q>0;q--){const j=Math.floor(rn()*(q+1));const x=nm[q];nm[q]=nm[j];nm[j]=x;}for(let i=0;i<19;i++){const r=lgSeed(k+'|'+t+'|'+i);const fin=base*(0.3+1.4*Math.pow(r(),0.9));const d=frac*7;const full=Math.floor(d);let acc=0;const daily=[];for(let j=0;j<7;j++){daily.push(0.4+r()*1.2);}const tot=daily.reduce(function(a,c){return a+c;},0);for(let j=0;j<full&&j<7;j++)acc+=daily[j];if(full<7){const p=d-full;acc+=daily[full]*Math.min(1,p*1.4);}out.push({n:nm[i],e:LG_E[Math.floor(r()*LG_E.length)],xp:Math.round(fin*acc/tot)});}
  const used={};out.forEach(function(b,i){let nn=b.n;if(used[nn])nn=nn+' '+String.fromCharCode(65+i%26);used[b.n]=1;used[nn]=1;b.n=nn;});return out;}
function lgRank(k,t,xp,frac){const list=lgBots(k,t,frac).map(function(b){b.me=false;return b;});list.push({n:P.nick||'Du',e:P.avatar||P.emoji||'🙂',xp:xp,me:true});list.sort(function(a,b){return b.xp-a.xp||(a.me?1:-1);});let rank=1;list.forEach(function(x,i){if(x.me)rank=i+1;});return {rank:rank,list:list};}
function lgRoll(){lgState();const k=weekKey();if(P.wxp.k===k)return;const old=P.wxp,t0=P.lg.t;const res=lgRank(old.k,t0,old.xp,1);let msg='';
  if(old.xp>=50){if(res.rank<=5&&t0<6){P.lg.t++;const c=20+10*t0;P.coins+=c;msg='Aufstieg in die '+LG_T[P.lg.t][0]+'-Liga! +'+c+' 🪙';}else if(res.rank>16&&t0>0){P.lg.t--;msg='Abstieg in die '+LG_T[P.lg.t][0]+'-Liga. Nächste Woche geht es wieder hoch.';}else msg='Platz '+res.rank+' in der '+LG_T[t0][0]+'-Liga.';}
  P.lg.hist.push({k:old.k,t:t0,r:res.rank,xp:old.xp});if(P.lg.hist.length>8)P.lg.hist.shift();if(old.xp>0)P.wxpHist=P.wxpHist.concat(old.xp).slice(-6);P.wxp={k:k,xp:0};save();
  if(msg&&old.xp>=50)setTimeout(function(){toast(msg);if(/Aufstieg/.test(msg)){sfx('level');confetti();}},1200);}
function ligaCard(){lgState();const t=P.lg.t;const r=lgRank(weekKey(),t,P.wxp.xp,lgFrac());const left=Math.max(1,Math.ceil((1-lgFrac())*7));
  return '<button class="glass gtap lrow w ligac" data-act="liga"><span class="li">'+LG_T[t][1]+'</span><span class="lt"><b>'+LG_T[t][0]+'-Liga · Platz '+r.rank+' von 20</b><small>'+P.wxp.xp+' XP diese Woche · noch '+left+(left===1?' Tag':' Tage')+(r.rank<=5&&t<6?' · Aufstiegszone':(r.rank>16&&t>0?' · Abstiegszone':''))+'</small></span><span class="chev">›</span></button>';}
function ligaView(){lgState();lgRoll();const t=P.lg.t;const r=lgRank(weekKey(),t,P.wxp.xp,lgFrac());const left=Math.max(1,Math.ceil((1-lgFrac())*7));
  let h='<div class="pt"><h1>'+LG_T[t][1]+' '+LG_T[t][0]+'-Liga</h1><small>Woche endet in '+left+(left===1?' Tag':' Tagen')+' · Platz '+r.rank+' von 20</small></div>';
  h+='<div class="glass grp w ligal">';
  r.list.forEach(function(x,i){const rk=i+1;let z='';if(rk===1&&t<6)z='<div class="lgz up">⬆ Aufstiegszone (Top 5)</div>';if(rk===17&&t>0)z='<div class="lgz dn">⬇ Abstiegszone</div>';
    h+=z+'<div class="lgr'+(x.me?' me':'')+'"><span class="lgn">'+rk+'</span><span class="lge">'+esc(x.e)+'</span><span class="lgm">'+esc(x.n)+(x.me&&x.n!=='Du'?' (du)':'')+'</span><b>'+x.xp+' XP</b></div>';});
  h+='</div>';
  h+='<div class="glass pad w col tight"><span class="lab">So funktioniert es</span><p class="hint" style="margin:0">Du sammelst XP durch Lernen. Am Wochenende zählen die Top 5 als Aufsteiger, die letzten 4 steigen ab. Deine Gegner sind Computer-Spieler, die ungefähr so viel lernen wie ein typischer Schüler deiner Stufe. Echte Mitspieler gibt es erst mit einem Online-Konto.</p></div>';
  if(P.lg.hist.length){h+='<div class="glass pad w col tight"><span class="lab">Letzte Wochen</span>'+P.lg.hist.slice().reverse().slice(0,5).map(function(x){return '<div class="lgh"><span>'+LG_T[x.t][1]+' '+LG_T[x.t][0]+'</span><span>Platz '+x.r+'</span><span>'+x.xp+' XP</span></div>';}).join('')+'</div>';}
  return h;}

function stkMile(n){return n===3||n===5||(n>=10&&n%5===0);}
function stkCheck(){try{if(S.screen==='quiz'||S.screen==='practice'&&false)return;if(document.getElementById('stkpop'))return;const t=fmt(new Date());if(!dayValid(t))return;const n=streak();if(!stkMile(n)||P.stkKey===t+':'+n)return;P.stkKey=t+':'+n;save();stkShow(n);}catch(e){}}
function stkShow(n){try{sfx('streak',n);}catch(e){}const ov=document.createElement('div');ov.id='stkpop';ov.setAttribute('role','dialog');ov.setAttribute('aria-label','Serie '+n+' Tage');
 const dn=['Mo','Di','Mi','Do','Fr','Sa','So'];const now=new Date();const wd=(now.getDay()+6)%7;let dots='';
 for(let i=0;i<7;i++){const d=new Date(now);d.setDate(now.getDate()-(wd-i));const ok=dayValid(fmt(d));const cur=i===wd;dots+='<span class="sd'+(ok?' ok':'')+(cur?' cur':'')+'" style="animation-delay:'+(0.9+i*0.09)+'s"><i>'+(ok?'🔥':'')+'</i><b>'+dn[i]+'</b></span>';}
 const msg=n<5?'Starker Start! Weiter so.':n<10?'Du bist auf einem guten Weg!':n<20?'Unglaublich konstant!':n<50?'Du bist eine Maschine!':'Legendär!';
 ov.innerHTML='<div class="stk-bg"></div><div class="stk-card"><div class="stk-rays"></div><div class="stk-fire">🔥</div><div class="stk-num" id="stkn">0</div><div class="stk-lab">Tage Serie</div><div class="stk-msg">'+msg+'</div><div class="stk-week">'+dots+'</div><button class="btn pri stk-ok" data-act="stkclose">Weiter</button></div>';
 document.body.appendChild(ov);sfx('streak');if(!RM)confetti(['🔥','✨','⭐','🧡','🌟']);
 if(navigator.vibrate)try{navigator.vibrate([20,40,20]);}catch(e){}
 const el=document.getElementById('stkn');if(RM){el.textContent=n;}else{let c=0;const st=Math.max(1,Math.ceil(n/14));const iv=setInterval(function(){c=Math.min(n,c+st);el.textContent=c;if(c>=n)clearInterval(iv);},60);}}

function flameTier(){const n=streak();return n>=100?4:n>=30?3:n>=7?2:n>=3?1:0;}
function wkKey(){return fmt(weekStart(0));}
function weekIds(){const st=weekStart(0);const seen={};const out=[];for(let i=0;i<7;i++){const d=new Date(st);d.setDate(st.getDate()+i);(P.gd[fmt(d)]||[]).forEach(function(id){if(!seen[id]&&isAlive(id)){seen[id]=1;out.push(id);}});}return out;}
function bossDone(){if(!Q||!Q.boss||Q.free||P.bossWk===wkKey())return;P.bossWk=wkKey();const c=Math.round(30*rwF());P.coins=(P.coins||0)+c;earnXp(60);save();S.confetti=true;setTimeout(function(){toast('👹 Boss besiegt! +'+c+' 🪙 und +60 XP');},600);}
function chestOpen(){const t=fmt(new Date());if(P.chestDay===t)return;P.chestDay=t;const r=Math.random();let m;
 if(r<0.55){const c=Math.max(3,Math.round((5+Math.floor(Math.random()*16))*rwF()));P.coins=(P.coins||0)+c;m='🎁 Tages-Truhe: +'+c+' 🪙';}
 else if(r<0.8){earnXp(40);m='🎁 Tages-Truhe: +40 XP';}
 else if(r<0.93){activateXpBoost(15);m='🎁 Tages-Truhe: 15 Min. Doppel-XP ⭐';}
 else{P.freeze=(P.freeze||0)+1;m='🎁 Tages-Truhe: ein Eisschutz 🧊 (selten!)';}
 save();setTimeout(function(){toast(m);},1800);}
function weekCards(){let h='';const dow=new Date().getDay();
 try{const wk=weekIds().length;
  if(P.bossWk!==wkKey()&&weakIds().length>=5)h+='<button class="glass gtap lrow w bossc" data-act="boss"><span class="li">👹</span><span class="lt"><b>Boss-Runde</b><small>Deine schwersten Wörter · Belohnung einmal pro Woche</small></span><span class="chev">›</span></button>';
  if((dow===5||dow===6||dow===0)&&wk>=5)h+='<button class="glass gtap lrow w" data-act="weekrep"><span class="li">🔁</span><span class="lt"><b>Wochen-Wiederholung</b><small>'+wk+' Wörter aus dieser Woche noch einmal</small></span><span class="chev">›</span></button>';
  const bk=P.lastBackup||0;const wn=allIds().filter(function(i){return i>=BASE;}).length;
  if(evBkNeed())h+='<div class="glass gtap lrow w"><span class="li">💾</span><span class="lt"><b>Sicherung fällig</b><small>'+(bk?'Zuletzt vor '+Math.round((Date.now()-bk)/864e5)+' Tagen':'Noch nie gesichert')+'</small></span><button class="btn sm" data-act="bkgo">Sichern</button></div>';
 }catch(e){}
 return h;}
function reportText(){const w=weekInfo(0);const nm=P.nick?P.nick:'Der Lernende';const nt=(typeof noteTxt==='function'&&typeof gradeNote==='function')?'':'';
 return 'EasyVocab · Wochenbericht\n'+nm+'\n\nLerntage diese Woche: '+w.days+' von 7\nWörter geübt: '+w.words+'\nSerie: '+streak()+' Tage\nGemeisterte Wörter: '+mastered()+'\nTagesziel: '+P.dailyGoal+' Wörter\n\nGesendet aus der EasyVocab-App.';}
function testPts(q){let c=0;q.log.forEach(function(x){if(x.ok)c++;else if(x.half)c+=0.5;});return c;}
function ptsTxt(c){return String(c).replace('.',',');}
/* Klassenarbeits-Schema: 20 Punkte, kleiner Fehler = -0,5 (Strich), falsch/leer = -1 (Balken), Note mit Plus/Minus */
const GOFF=[[5,2,0],[7,4,0],[5,3,0],[11,6,0],[12,6,0]];
function gkey(){const k=P.gkey;return (Array.isArray(k)&&k.length===5&&k.every(function(x){return typeof x==='number'&&x>0&&x<100;}))?k:[92,81,67,50,30];}
function gradeMark(p){const k=gkey();for(let i=0;i<5;i++){const lo=k[i];if(p>=lo){const pl=['+','',  '-'];const o=GOFF[i];const hi=i===0?100:k[i-1];const mx=Math.max(0,hi-lo-1);if(p>=lo+Math.min(o[0],mx*0.66))return (i+1)+'+';if(p>=lo+Math.min(o[1],mx*0.33))return String(i+1);return (i+1)+'-';}}return '6';}
function cr20(q){const t=q.total||q.log.length||1;return Math.round(testPts(q)/t*20*2)/2;}
function korrCard(q){
  const tot=q.total||q.log.length||1;
  if(!q.thDone){q.thDone=1;P.th=P.th||[];P.th.push({t:Date.now(),c:cr20(q),m:gradeMark(testPts(q)/tot*100)});if(P.th.length>30)P.th=P.th.slice(-30);save();}const per=20/tot;const c20=cr20(q);const p=testPts(q)/tot*100;
  let h='<div class="glass pad w korr"><div class="lab" style="margin-bottom:8px">Korrektur wie in der Klassenarbeit</div>';
  q.log.forEach(function(x,k){
    const qq=x.d==='en'?W[x.id][0]:W[x.id][1];const sol=x.d==='en'?W[x.id][1]:W[x.id][0];
    const mk=x.ok?'<span class="km ok">✓</span>':(x.half?'<span class="km hf" title="Kleiner Fehler: minus 0,5 Punkt">–</span>':'<span class="km no" title="Falsch: Punkt weg">|</span>');
    const lost=x.ok?0:(x.half?0.5:1)*per;
    h+='<div class="krow"><div class="kq">'+(k+1)+') '+esc(qq)+'</div><div class="ka">'+(x.val&&String(x.val).trim()?esc(x.val):'—')+'</div>'+mk+(x.ok?'':'<div class="ks">'+esc(sol)+'<small> −'+ptsTxt(Math.round(lost*10)/10)+'</small></div>')+'</div>';});
  h+='<div class="kfoot"><span>Punkte: <b>'+ptsTxt(c20)+'</b> / 20</span><span>Note: <b>'+gradeMark(p)+'</b></span></div>'+(P.th&&P.th.length>1?'<p class="hint" style="margin:8px 0 0">Verlauf: '+P.th.slice(-6).map(function(x){return ptsTxt(x.c);}).join(' → ')+' von 20</p>':'')+'<p class="hint" style="margin:8px 0 0;font-size:12px">✓ richtig · Strich = kleiner Fehler, −0,5 · Balken = falsch, volle Punkte weg</p></div>';
  return h;}


function printRes(){try{
 const rows=(Q&&Q.log||[]).map(function(x){const q=x.d==='en'?W[x.id][0]:W[x.id][1];const ans=x.d==='en'?W[x.id][1]:W[x.id][0];return '<tr class="'+(x.ok?'ok':x.half?'hf':'no')+'"><td>'+esc(q)+'</td><td>'+(x.val&&String(x.val).trim()?esc(x.val):'–')+'</td><td>'+esc(ans)+'</td><td class="m">'+(x.ok?'✓':x.half?'½':'✗')+'</td></tr>';}).join('');
 const c=testPts(Q),tot=Q.total||Q.log.length||1,pc=Math.round(c/tot*100);
 const d=new Date();const ds=d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear();
 const c20=cr20(Q),mk=gradeMark(pc);const per=20/tot;
 const rows2=(Q&&Q.log||[]).map(function(x,k){const q=x.d==='en'?W[x.id][0]:W[x.id][1];const ans=x.d==='en'?W[x.id][1]:W[x.id][0];const lost=x.ok?0:(x.half?0.5:1)*per;return '<tr><td class="n">'+(k+1)+'</td><td>'+esc(q)+'</td><td class="hw">'+(x.val&&String(x.val).trim()?esc(x.val):'—')+(x.ok?'':'<div class="red">'+esc(ans)+' <small>−'+ptsTxt(Math.round(lost*10)/10)+'</small></div>')+'</td><td class="m red">'+(x.ok?'✓':x.half?'–':'|')+'</td></tr>';}).join('');
 const html='<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>Vokabeltest</title><style>*{box-sizing:border-box}body{font:14px/1.4 -apple-system,Helvetica,Arial,sans-serif;color:#111;background:#fff;margin:0}.box{border:1px solid #333;padding:10px 14px;margin-bottom:18px}.box b{font-size:15px}table{width:100%;border-collapse:collapse}td{border-bottom:1px solid #ccc;padding:7px 6px;vertical-align:top}td.n{width:28px;color:#666}td.hw{font-family:"Bradley Hand","Segoe Print","Comic Sans MS",cursive;font-size:17px}td.m{width:30px;text-align:center;font-weight:900;font-size:20px}.red{color:#d70015;font-family:"Bradley Hand","Segoe Print","Comic Sans MS",cursive}.foot{margin-top:18px;display:flex;justify-content:space-between;font-size:22px}.foot .red{font-size:26px}small{font-size:.7em}@page{margin:14mm}</style></head><body><div class="box"><b>Vocabulary Test</b> · EasyVocab'+(Q.sim?' · Klausur-Test':'')+'<br>Name: '+esc(P.nick||'_______________')+' &nbsp; Datum: '+ds+'</div><table><tbody>'+rows2+'</tbody></table><div class="foot"><span>credits: <span class="red"><b>'+ptsTxt(c20)+'</b></span> / 20</span><span>mark: <span class="red"><b>'+mk+'</b></span></span></div></body></html>';
 const fr=document.createElement('iframe');fr.setAttribute('aria-hidden','true');fr.style.cssText='position:fixed;right:0;bottom:0;width:0;height:0;border:0';document.body.appendChild(fr);
 const dc=fr.contentWindow.document;dc.open();dc.write(html);dc.close();
 setTimeout(function(){try{fr.contentWindow.focus();fr.contentWindow.print();}catch(e){toast('Drucken geht hier nicht.');}setTimeout(function(){if(fr.parentNode)fr.parentNode.removeChild(fr);},4000);},300);
}catch(e){toast('Drucken geht hier nicht.');}}
function pickCover(arr,n){P.tseen=P.tseen||{};const sorted=arr.map(function(id,i){return [id,P.tseen[id]||0,i];}).sort(function(a,b){return (a[1]-b[1])||(a[2]-b[2]);}).slice(0,n).map(function(x){return x[0];});sorted.forEach(function(id){P.tseen[id]=(P.tseen[id]||0)+1;});save();return shuffle(sorted);}
function errIds(){const o={};try{Array.from(Q.missed||[]).forEach(function(i){o[i]=1;});(Q.log||[]).forEach(function(x){if(!x.ok)o[x.id]=1;});}catch(e){}return Object.keys(o).map(Number).filter(isAlive);}
function callWord(cur){try{const w=W[cur.id];return cur.toEn?String(w[1]).split(';')[0].trim():String(w[0]).trim();}catch(e){return '';}}
var PERF_AUTO=null;
function perfLite(){const m=P.perf||'auto';if(m==='on')return true;if(m==='off')return false;if(PERF_AUTO!==null)return PERF_AUTO;try{const n=navigator.hardwareConcurrency||8,mem=navigator.deviceMemory||8;if(n<=2||mem<=2)return true;if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches)return true;}catch(e){}return false;}
function perfProbe(){if(PERF_AUTO!==null||(P.perf&&P.perf!=='auto')||!window.requestAnimationFrame)return;try{if((navigator.maxTouchPoints||0)===0&&(navigator.hardwareConcurrency||8)>=4){PERF_AUTO=false;return;}}catch(e){}let n=0,t0=0,bad=0;function f(t){if(document.hidden||(document.hasFocus&&!document.hasFocus())){t0=0;setTimeout(function(){requestAnimationFrame(f);},500);return;}if(t0){const dt=t-t0;if(dt>55)bad++;n++;}t0=t;if(n<60)requestAnimationFrame(f);else{PERF_AUTO=bad>=36;document.documentElement.classList.toggle('lite',perfLite());}}requestAnimationFrame(f);}
function applyPrefs(){{const ab=ageBand();document.documentElement.classList.toggle('age-kid',ab==='kid');document.documentElement.classList.toggle('age-adult',ab==='adult'||ab==='youth');}document.documentElement.classList.toggle('lite',perfLite());document.documentElement.classList.toggle('hc',!!P.hc||(P.hc==null&&mmq('(prefers-contrast: more)')));document.documentElement.classList.toggle('bigtap',!!P.bigtap);
  const el=document.documentElement;
  {const th=isDark()?'dark':'light';if(el.getAttribute('data-theme')!==th){el.classList.add('nt');el.setAttribute('data-theme',th);try{let m=document.querySelector('meta[name="theme-color"]');if(!m){m=document.createElement('meta');m.name='theme-color';document.head.appendChild(m);}m.content=th==='dark'?'#14171C':'#EEF1F6';}catch(e){}setTimeout(function(){el.classList.remove('nt');},450);}}
  el.style.setProperty('--fs',{S:0.9,M:1,L:1.18}[P.fontSize]||1);
  applyBg();
  applyGlass();
}
function isDark(){return (P.darkMode===null||P.darkMode===undefined)?window.matchMedia('(prefers-color-scheme: dark)').matches:!!P.darkMode;}
applyCustom();applyPrefs();
const TABS=[{k:'menu',i:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11.2 12 4l8.5 7.2"/><path d="M5.5 9.8V20h13V9.8"/><path d="M10 20v-5.5h4V20"/></svg>',t:'Heute'},{k:'practice',i:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="1.1"/></svg>',t:'Üben'},{k:'planner',i:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',t:'Planer'},{k:'words',i:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 5.5A2 2 0 0 1 6.5 3.5H19.5v13H6.5a2 2 0 0 0-2 2z"/><path d="M4.5 18.5a2 2 0 0 0 2 2H19.5"/></svg>',t:'Wörter'},{k:'stats',i:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 20V12M12 20V4.5M18.5 20V9"/></svg>',t:'Statistik'}];
function isRoot(s){return ['menu','practice','planner','words','stats'].indexOf(s)>=0;}
function showBar(){return isRoot(S.screen)||S.screen==='legal'||S.screen==='add'||S.screen==='settings'||S.screen==='shop'||S.screen==='profile'||S.screen==='pet'||S.screen==='word';}
function tabIndex(){for(let i=0;i<TABS.length;i++)if(TABS[i].k===S.screen)return i;return -1;}
function setFrom(){if(isRoot(S.screen))S.from=S.screen;}
function tabBar(){
  const ix=tabIndex();
  let h='<nav class="tabbar glass" aria-label="Hauptnavigation"><span class="tpill"></span>';
  TABS.forEach(function(t,i){h+='<button class="tab'+(i===ix?' on':'')+'" data-act="tab" data-k="'+t.k+'"'+(i===ix?' aria-current="page"':'')+'><span class="ti">'+t.i+'</span><span>'+t.t+'</span></button>';});
  return h+'</nav>';
}
function encodeBackup(){return 'EV1:'+btoa(unescape(encodeURIComponent(JSON.stringify(P))));}
function decodeBackup(t){t=t.trim();if(t.indexOf('EV1:')===0)t=decodeURIComponent(escape(atob(t.slice(4))));return JSON.parse(t);}
function doImport(txt){
  try{const o=decodeBackup(txt);if(!o||typeof o!=='object'||Array.isArray(o)||!o.box||typeof o.box!=='object')throw new Error('x');const keep={};['ui','abg','look','accent','bg','bgMotion','darkMode','glass','perf','hc','fontSize','haptic','sfx','vA','vB','vC','speak','bgk','pal','lm','remindersEnabled','remHour'].forEach(function(k){if(P&&P[k]!==undefined)keep[k]=P[k];});P=sanitize(Object.assign(DEF(),o,keep));P.onb=1;migrate();applyCustom();applyPrefs();save();S.paste=false;S.bk='';render();toast('Stand wiederhergestellt');}
  catch(e){toast('Das ist keine gültige Sicherung.');}
}
const CATS=[{n:'Neu',c:'#9CA3AF',d:'noch nie geübt'},{n:'Wackelig',c:'#F59E0B',d:'Box 1–2, kommt oft wieder'},{n:'Fast sicher',c:'#3B82F6',d:'Box 3, fast geschafft'},{n:'Sicher',c:'#22C55E',d:'Box 4–5, kommt selten wieder'}];
function pcat(b){return b===0?0:(b<=2?1:(b===3?2:3));}
function wcat(id){return pcat(Math.min(bx(id,'en'),bx(id,'de')));}
function sortKey(id){return W[id][0].toLowerCase().replace(/^to /,'').replace(/^\(|\)/g,'');}
let INK={cur:null,id:null,penSeen:false};
function prs(e){return e.pressure&&e.pressure>0?e.pressure:0.5;}
function inkColor(){return (getComputedStyle(document.documentElement).getPropertyValue('--ink')||'#000').trim()||'#000';}
function inkSeg(ctx,a,b,w,h){ctx.lineWidth=1.5+((a[2]+b[2])/2)*3.6;ctx.beginPath();ctx.moveTo(a[0]*w,a[1]*h);ctx.lineTo(b[0]*w,b[1]*h);ctx.stroke();}
function inkRedraw(){
  const cv=document.getElementById('ink');if(!cv||!Q)return;
  const dpr=window.devicePixelRatio||1;const w=cv.clientWidth,h=cv.clientHeight;
  cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);
  const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.strokeStyle='rgba(120,130,150,.45)';ctx.lineWidth=1;ctx.setLineDash([6,6]);ctx.beginPath();ctx.moveTo(16,h*0.72);ctx.lineTo(w-16,h*0.72);ctx.stroke();ctx.setLineDash([]);
  ctx.strokeStyle=inkColor();ctx.lineCap='round';ctx.lineJoin='round';
  Q.strokes.forEach(function(s){if(s.length===1){const a=s[0];ctx.fillStyle=ctx.strokeStyle;ctx.beginPath();ctx.arc(a[0]*w,a[1]*h,1.5+a[2]*1.8,0,6.3);ctx.fill();}for(let i=1;i<s.length;i++)inkSeg(ctx,s[i-1],s[i],w,h);});
  const box=document.querySelector('.inkw');if(box)box.classList.toggle('has',Q.strokes.length>0);
}
function initInk(){
  const cv=document.getElementById('ink');if(!cv)return;
  inkRedraw();
  cv.addEventListener('pointerdown',function(e){
    if(e.pointerType==='pen')INK.penSeen=true;
    if(e.pointerType==='touch'&&INK.penSeen)return;
    e.preventDefault();try{cv.setPointerCapture(e.pointerId);}catch(x){}
    const r=cv.getBoundingClientRect();INK.cur=[[(e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height,prs(e)]];INK.id=e.pointerId;Q.strokes.push(INK.cur);
    const box=document.querySelector('.inkw');if(box)box.classList.add('has');
    const ctx=cv.getContext('2d');ctx.fillStyle=inkColor();ctx.beginPath();ctx.arc(INK.cur[0][0]*r.width,INK.cur[0][1]*r.height,1.5+INK.cur[0][2]*1.8,0,6.3);ctx.fill();
  });
  cv.addEventListener('pointermove',function(e){
    if(!INK.cur||e.pointerId!==INK.id)return;e.preventDefault();
    const r=cv.getBoundingClientRect();const ctx=cv.getContext('2d');ctx.strokeStyle=inkColor();ctx.lineCap='round';ctx.lineJoin='round';
    const evs=e.getCoalescedEvents?e.getCoalescedEvents():[e];
    (evs.length?evs:[e]).forEach(function(ev){const pt=[(ev.clientX-r.left)/r.width,(ev.clientY-r.top)/r.height,prs(ev)];const last=INK.cur[INK.cur.length-1];inkSeg(ctx,last,pt,r.width,r.height);INK.cur.push(pt);});
  });
  const end=function(e){if(INK.cur&&e.pointerId===INK.id)INK.cur=null;};
  cv.addEventListener('pointerup',end);cv.addEventListener('pointercancel',end);
}
const TOPICS=[{n:'Körper & Gesundheit',e:'🫀'},{n:'Kleidung & Aussehen',e:'👕'},{n:'Gefühle & Charakter',e:'😊'},{n:'Bewegung & Handlung',e:'🏃'},{n:'Denken & Sprechen',e:'💬'},{n:'Natur, Licht & Wetter',e:'🌤️'},{n:'Haus & Alltag',e:'🏠'},{n:'Schule & Gesellschaft',e:'🎓'},{n:'Ort, Zeit & Menge',e:'📍'},{n:'Eigene Wörter',e:'✏️'}];
const CATID=[3,8,0,1,1,0,1,3,1,3, 2,3,0,3,2,2,0,4,4,4, 0,7,7,4,2,8,1,6,7,3, 2,2,7,8,5,3,8,8,8,2, 2,0,5,3,8,3,1,1,2,0, 6,5,0,0,3,0,2,0,3,5, 5,5,6,0,4,6,7,4,4,2, 4,7,2,7,8,2,8,7,7,7, 4,0,5,3,6,6,5,3,6,6, 6,6,7,3,0,3,3,3];
function wtopic(id){if(id<BASE)return CATID[id];const c=P.custom[id-BASE];return (c&&c.cat!=null)?c.cat:9;}
function wlang(id){if(id<BASE)return 'en';const c=P.custom[id-BASE];return (c&&c.lang)||'en';}
const LNAME={en:'Englisch',fr:'Französisch',la:'Latein'};
const LADJ={en:'Englisches Wort',fr:'Französisches Wort',la:'Lateinisches Wort'};
function fl(){const v=P.view;if(v&&v!=='all')return LNAME[v]||'Englisch';const L=langsHave();return L.length?L.map(function(l){return LNAME[l];}).join('/'):'Englisch';}
const STARTER={fr:[['bonjour','Guten Tag',4],['merci','danke',4],["s'il vous plaît",'bitte',4],['la maison','das Haus',6],["l'école",'die Schule',7],['le livre','das Buch',7],['manger','essen',6],['boire','trinken',6],['parler','sprechen',4],['aimer','lieben, mögen',2],['heureux','glücklich',2],['triste','traurig',2],['grand','groß',1],['petit','klein',1],['la tête','der Kopf',0],['la main','die Hand',0],['le matin','der Morgen',8],['le soir','der Abend',8],['la pluie','der Regen',5],['le soleil','die Sonne',5]],
 la:[['amicus','Freund',7],['puella','Mädchen',7],['puer','Junge',7],['domus','Haus',6],['aqua','Wasser',5],['terra','Erde, Land',5],['videre','sehen',3],['audire','hören',3],['dicere','sagen',4],['venire','kommen',3],['ire','gehen',3],['laudare','loben',2],['amare','lieben',2],['timere','fürchten',2],['magnus','groß',1],['parvus','klein',1],['bonus','gut',2],['malus','schlecht',2],['dies','Tag',8],['nox','Nacht',8]]};
let AI=null,AIIMG=false;
const AGEL={kid:'bis 10',teen:'11–14',youth:'15–17',adult:'ab 18'};
function ageBand(){if(P.age&&AGEL[P.age])return P.age;const p=P.prof;if(p){if(p.role==='schule'){const g=parseInt(p.grade,10)||0;return g<=6?'kid':(g<=9?'teen':'youth');}if(p.role==='uni'||p.role==='beruf'||p.role==='reisen')return 'adult';}return '';}
function ageApply(b){const D={kid:{dailyGoal:5,quizLength:10,fontSize:'L',sfx:true,ui:'play'},teen:{dailyGoal:10,quizLength:10,fontSize:'M',ui:'play'},youth:{dailyGoal:15,quizLength:15,fontSize:'M',ui:'play'},adult:{dailyGoal:15,quizLength:15,fontSize:'M',ui:'apple'}}[b];if(!D)return;Object.keys(D).forEach(function(k){P[k]=D[k];});}
function profCtx(){const p=P.prof;if(!p)return '';const gr=parseInt(p.grade,10)||0;const who=p.role==='schule'?'Schüler/in, Klasse '+(p.grade||'?'):({uni:'Studierende/r oder Azubi',beruf:'berufstätig',reisen:'lernt für Reisen und Hobby'})[p.role]||'';const goal=({klausur:'bereitet bald eine Klausur vor',schule:'begleitet den Schulstoff',abi:'bereitet sich langfristig auf Abitur oder Prüfung vor',alltag:'will im Alltag sprechen können'})[p.goal]||'';const st=(p.styles||[]).map(function(x){return ({hear:'Hören und Sprechen',see:'Bilder',write:'Schreiben',play:'Spielen',fast:'kurze Runden'})[x];}).filter(Boolean).join(', ');const ab=ageBand();const tone=ab==='kid'?'Schreibe sehr einfach, mit ganz kurzen Sätzen, freundlich und ermutigend, für ein Kind bis 10 Jahre.':ab==='teen'?'Schreibe einfach, locker und motivierend, für Jugendliche von 11 bis 14.':ab==='adult'?'Schreibe sachlich und erwachsen, ohne Kindersprache.':(p.role==='schule'&&gr&&gr<=7)?'Schreibe sehr einfach, mit kurzen Sätzen und freundlich.':((p.role==='schule'&&gr>=11)||p.role==='uni'?'Schreibe sachlich und präzise.':'Schreibe klar und freundlich.');return ' [Kontext zum Lernenden: '+(P.nick?'Name '+P.nick+'. ':'')+who+(goal?', '+goal:'')+(st?'; lernt am liebsten mit: '+st:'')+'. '+tone+' Antworte trotzdem exakt im verlangten Format.]';}
function aiOK(){return !!AI&&P.aiOn!==false;}
function aiTrack(){P.aiCalls=(P.aiCalls||0)+1;const t=fmt(new Date());P.aiDays[t]=(P.aiDays[t]||0)+1;save();}
function aiErr(c){if(typeof c==='string'&&c.indexOf('H:')===0)return c.slice(2);return ({not_granted:'Claude darf hier nicht genutzt werden. Erlaube es im Dialog.',sampling_disabled:'Claude ist für dieses Konto nicht verfügbar.',rate_limited:'Gerade zu viele Anfragen. Versuche es gleich noch einmal.',image_rejected:'Das Bild passt nicht. Probiere ein anderes Foto.',invalid_json:'Ich konnte die Liste nicht sicher lesen. Mach ein schärferes Foto oder tippe auf „Genauer lesen“.',empty_completion:'Ich habe keine Wörter erkannt. Probiere ein schärferes Foto.',cancelled:'Abgebrochen.'}[c])||'Das hat nicht geklappt. Versuche es noch einmal.';}
function blobB64(b){return new Promise(function(res,rej){const f=new FileReader();f.onload=function(){const t=String(f.result);res({media_type:(b&&b.type)||'image/jpeg',data:t.slice(t.indexOf(',')+1)});};f.onerror=function(){rej(new Error('Bild nicht lesbar'));};f.readAsDataURL(b);});}
function parseJ(t){t=String(t||'').trim().replace(/^```(?:json)?/i,'').replace(/```$/,'').trim();try{return JSON.parse(t);}catch(e){const m=t.match(/[\[{][\s\S]*[\]}]/);if(m)return JSON.parse(m[0]);throw e;}}
async function hostedAI(pr,op){
  if(!sbIn())throw (function(){const e=new Error('Für KI bitte zuerst anmelden (Einstellungen > Konto).');e.code='H:Für KI bitte zuerst anmelden (Einstellungen > Konto).';return e;})();
  await sbEnsure();
  const imgs=(op&&op.images)?await Promise.all(op.images.map(blobB64)):[];
  const body={prompt:(typeof pr==='string'&&!imgs.length)?pr+profCtx():pr,images:imgs,tier:(op&&op.modelTier)==='smart'?'smart':'quick'};
  const r=await fetch(String(SBC.supabaseUrl).replace(/\/$/,'')+'/functions/v1/ai',{method:'POST',headers:{'apikey':SBC.supabaseKey,'Authorization':'Bearer '+SBS.access_token,'Content-Type':'application/json'},body:JSON.stringify(body)});
  let j=null;try{j=await r.json();}catch(e){}
  if(!r.ok){if(r.status===429)throw (function(){const e=new Error('Tageslimit für KI erreicht. Morgen geht es weiter.');e.code='H:Tageslimit für KI erreicht. Morgen geht es weiter.';return e;})();if(r.status===401)throw (function(){const e=new Error('Bitte neu anmelden.');e.code='H:Bitte neu anmelden.';return e;})();if(r.status===503||r.status===404)throw (function(){const e=new Error('KI ist auf dem Server noch nicht eingerichtet.');e.code='H:KI ist auf dem Server noch nicht eingerichtet.';return e;})();throw (function(){const e=new Error('KI gerade nicht erreichbar.');e.code='H:KI gerade nicht erreichbar.';return e;})();}
  return parseJ(j&&j.text);
}
async function aiInit(){
  try{
    if(isHosted()&&sbOn()){AI={json:hostedAI,limits:async function(){return {images:true};}};AIIMG=true;if(['add','settings','words'].indexOf(S.screen)>=0)render(true);return;}
    if(!(window.claude&&window.claude.use))return;
    const s=await window.claude.use('sample');if(!s)return;AI=new Proxy(s,{get:function(t,k){if(k==='json')return function(pr,op){return t.json((typeof pr==='string'&&!(op&&op.images))?pr+profCtx():pr,op);};const v=t[k];return typeof v==='function'?v.bind(t):v;}});
    try{const l=await s.limits();AIIMG=!!(l&&l.images);}catch(e){}
    if(['add','settings','words'].indexOf(S.screen)>=0)render(true);
  }catch(e){}
}
let CLOUD=null,CLOUDERR='';
async function cloudInit(){
  if(CLOUD)return CLOUD;
  try{
    if(!(window.claude&&window.claude.use))throw new Error('x');
    const u=await Promise.race([window.claude.use('user'),new Promise(function(r){setTimeout(function(){r(null);},8000);})]);
    const d=await Promise.race([window.claude.use('db'),new Promise(function(r){setTimeout(function(){r(null);},8000);})]);
    if(!u||!d)throw new Error('x');
    const id=await u.id();if(!id)throw new Error('x');
    CLOUD={db:d,id:String(id)};
  }catch(e){CLOUD=null;}
  return CLOUD;
}
function cloudRef(){return CLOUD.db.collection('data/users/'+CLOUD.id).doc('backup');}
function isFresh(){return !((P.st&&(P.st.ok+P.st.no))||P.xp||(P.custom&&P.custom.length)||Object.keys(P.days||{}).length);}
async function cloudSave(silent){
  if(cloudMode()==='sb')return sbSave(silent);
  const c=await cloudInit();
  if(!c){S.cloudErr='nicht angemeldet oder hier nicht verfügbar';if(!silent)toast('Die Cloud ist in dieser Ansicht nicht verfügbar. Du musst angemeldet sein.');return false;}
  try{
    await cloudRef().set({txt:encodeBackup(),at:Date.now(),words:allIds().length,score:progScore(P)});
    CSAVING=true;P.cloudAt=Date.now();save();CSAVING=false;S.cloudErr='';
    if(!silent){toast('In der Cloud gesichert.');render(true);}
    return true;
  }catch(e){CSAVING=false;S.cloudErr=String((e&&(e.message||e.code))||e).slice(0,60);if(!silent)toast('Cloud-Sicherung fehlgeschlagen. Versuche es später.');return false;}
}
function cloudQueue(){if(P.autoCloud===false||NOSAVE||!cloudMode())return;clearTimeout(CQ);CQ=setTimeout(cloudAuto,6000);}
function progScore(o){try{return (o.xp||0)+((o.st&&(o.st.ok+o.st.no))||0)+Object.keys(o.days||{}).length*5+((o.custom&&o.custom.length)||0);}catch(e){return 0;}}
async function cloudPeek(){
  if(cloudMode()==='sb')return sbPeek();
  const c=await cloudInit();if(!c)return null;
  try{
    const snap=await cloudRef().get();
    const data=(snap&&typeof snap.data==='function')?snap.data():snap;
    const ex=(snap&&typeof snap.exists==='function')?snap.exists():(snap&&snap.exists!==undefined?snap.exists:!!data);
    if(!ex||!data||typeof data.txt!=='string')return null;
    let sc=typeof data.score==='number'?data.score:null;if(sc===null){try{sc=progScore(decodeBackup(data.txt));}catch(e){sc=0;}}
    return {at:data.at||0,words:data.words||0,txt:data.txt,score:sc};
  }catch(e){return null;}
}
function previewUi(f){
  try{const o=decodeBackup(f.txt);['darkMode','look','bg','accent','glass','perf','fontSize','bgMotion','haptic','sfx'].forEach(function(k){if(o[k]!==undefined)P[k]=o[k];});CSAVING=true;save();CSAVING=false;applyPrefs();}catch(e){CSAVING=false;}
}
async function cloudAuto(){
  if(NOSAVE||P.autoCloud===false||S.cloudFound||isFresh())return;
  if(CBUSY){CQ=setTimeout(cloudAuto,8000);return;}
  const wait=15000-(Date.now()-CLAST);if(wait>0){CQ=setTimeout(cloudAuto,wait);return;}
  CBUSY=true;
  if(!CCHK){CCHK=true;const f=await cloudPeek();if(f&&f.score>progScore(P)+5){S.cloudFound=f;CBUSY=false;render(true);return;}}
  await cloudSave(true);CBUSY=false;CLAST=Date.now();
  if(S.screen==='settings')render(true);
}
async function cloudCheck(){
  const f=await cloudPeek();CCHK=true;
  if(f&&(isFresh()||f.score>progScore(P)+5)){if(S.screen==='onb'&&!P.prof){P.onb=1;setCookieOnb();S.screen='menu';}S.cloudFound=f;if(isFresh())previewUi(f);render(true);}
}
const BUILD=134,BUILD_DATE='10.11.2026';
const NEWS_LOG=[
{b:133,t:[['🧭','Neu: Lernpfad pro Liste. Die Wörter einer Liste sind in kleine Stationen geteilt, du siehst immer den nächsten Schritt'],['🏠','Heute aufgeräumt: ein klarer Hauptknopf, kompaktes Tagesziel, Serie und Level ohne Doppelungen'],['🌍','Sprachen mit ganzem Namen und Flagge: Englisch, Französisch, Latein'],['📚','Wörterlisten übersichtlicher, Planer-Knopf bleibt sichtbar, Statistik ohne leere Kästen'],['🃏','Lernkarten größer, Fortschrittsbalken deutlicher, weniger Ablenkung in der Runde'],['🖼️','Einheitliche Symbole auf Heute und Üben'],['📱','Einstellungen auch auf dem iPad hochkant zweispaltig']]},
{b:132,t:[['🧒','Neu für Kinder und Jugendliche: Wenn das Tagesziel geschafft ist, gibt es einen Sticker und ein kleines Fest. Die letzten Sticker stehen auf Heute'],['5️⃣','Neu auf Heute: „Nur 5 Wörter“ als kleiner Einstieg, wenn die Lust fehlt'],['🧹','Heute ist ruhiger: Wochenkarten, Liga und Shop-Hinweis sind unter „Mehr von heute“'],['📱','iPad hochkant zeigt Heute jetzt in zwei Spalten'],['📊','Statistik zeigt vor der ersten Runde einen freundlichen Hinweis statt leerer Flächen']]},
{b:131,t:[['🎳','Skittles-Animationen laufen jetzt auch auf PCs und Laptops. Die automatische Erkennung „schwaches Gerät“ war zu streng'],['🎞️','Neu in Einstellungen > Lernen: „Animationen“ mit Auto, Voll und Sparsam'],['📑','Auf Heute erscheint nur noch eine Hinweis-Karte statt mehrerer'],['👆','Wörterliste: größere Tippflächen, Fußlinks nicht mehr von der Tab-Leiste verdeckt']]},
{b:130,t:[['⚔️','Neu: Vokabel-Duell für zwei Spieler an einem iPad. Einer sitzt oben, einer unten, wer zuerst tippt, darf antworten'],['🗣️','Zwei Arten: Antwort auswählen oder laut sagen, dann prüft der Gegner'],['🔁','Falsch beantwortet? Dann darf der andere übernehmen']]},
{b:129,t:[['🗂️','Sicherung als Datei: Teilen-Fenster oder Download, dazu „Aus Datei laden“'],['♻️','Automatische Kopie im Browser (täglich, 3 Tage) mit Wiederherstellen-Angebot, wenn der Stand fehlt'],['📲','Hinweis „Als App auf den Home-Bildschirm“, weil iOS Daten im Browser-Tab löschen kann'],['🩺','Neuer Gerätecheck: Speicher, Offline, Installation, Diagnose zum Kopieren'],['⏰','Sicherungs-Erinnerung schon nach 7 Tagen'],['📦','Startpakete: Englisch Alltag, Französisch Reise, Latein Grundwortschatz'],['⚡','„Nur 5 Wörter“, sanfter Wiedereinstieg nach Pause und Hinweis bei vielen fälligen Wörtern'],['🧩','Knifflige Wörter: eigene Eselsbrücke bei jedem Wort speichern'],['⚙️','Einstellungen auf dem Handy: „Häufig genutzt“ ganz oben']]},
{b:128,t:[['🐞','Behoben: bei „Neue Wörter pro Tag“ standen mehrmals „undefined“ statt der Zahlen 5, 10, 20, 40']]},
{b:127,t:[['‹','Einstellungen auf dem Handy: oben steht jetzt immer „‹ Einstellungen“ als klare Zurück-Taste, bleibt beim Scrollen sichtbar'],['⬅️','Am Ende jeder Kategorie gibt es zusätzlich den großen Knopf „Zurück zu allen Einstellungen“']]},
{b:126,t:[['📱','Einstellungen auf dem Handy: in einer Kategorie startet der Inhalt jetzt ganz oben, ohne großen Titel, Suche und Profil-Karte davor'],['‹','Der Zurück-Pfeil oben führt aus der Kategorie zurück zur Liste, danach erst zum Menü'],['📜','Die Liste lässt sich bis zum Ende scrollen, ohne dass die Tab-Leiste das Letzte verdeckt']]},
{b:125,t:[['🎳','Skittles: getroffene Kegel verschwinden komplett, du siehst nur noch die übrigen Wörter'],['🧩','Üben: alle Kachelreihen sind symmetrisch, jede Reihe füllt die volle Breite gleichmäßig'],['🎨','Neue ruhige Hintergrund-Palette im Apple-Stil, dazu „Pur“ als schlichter Hintergrund ohne Farbverlauf'],['📐','Auf großen iPads bleibt der Inhalt in angenehmer Breite, Kopfzeile bündig'],['👆','Kacheln und Listenzeilen reagieren beim Antippen sichtbar']]},
{b:124,t:[['📌','Einstellungen: Seite federt am Ende nicht mehr nach, die letzte Einstellung bleibt sauber über der Leiste'],['📚','Einstellungen merken sich die zuletzt geöffnete Kategorie'],['🔢','Sprach-Filter zeigt die Anzahl der Wörter je Sprache'],['🏛️','Latein: Adjektive (bonus, -a, -um) mit Tabelle für m, f, n'],['🏛️','Latein: sum, esse, fui mit allen Formen'],['🎯','Latein-Training: nur Nomen oder nur Verben wählbar'],['🔁','Latein-Training: am Ende nur die Fehler wiederholen'],['✨','Latein-Training: richtige Antwort leuchtet, falsche wackelt'],['📝','Hinzufügen: Latein-Formathilfe und Starterpaket direkt dort'],['📋','Wort-Detail: Wort mit Übersetzung kopieren'],['🔍','Suche: die letzten 5 Suchen als Schnellwahl'],['👈','Von der linken Kante nach rechts wischen = zurück (wie iOS)'],['⌨️','Tastatur: Esc geht zurück, Ziffern 1 bis 5 wählen Antworten'],['👆','Doppeltippen auf die Kopfzeile scrollt nach oben'],['📳','Leichtes Vibrieren beim Umschalten von Schaltern und Auswahl'],['💬','Hinweis-Meldungen lassen sich antippen und schließen sich'],['🌓','Statusleiste im Browser passt sich Hell und Dunkel an'],['🔴','App-Symbol zeigt die Zahl fälliger Wörter (wo das Gerät es erlaubt)'],['📡','Meldung, wenn du offline gehst oder wieder online bist'],['🎳','Skittles: goldener Strike-Effekt bei allen sechs Kegeln']]},
{b:123,t:[['📌','Einstellungen auf dem iPad: Kategorien-Liste bleibt fest stehen, nichts springt mehr beim Wechseln und Scrollen'],['🏛️','Latein komplett: Wortart, Genus und Deklination/Konjugation werden erkannt, Formentabellen bei jedem Wort'],['🧠','Neu: Latein-Training mit Kasus bestimmen, Formen bilden und Stammformen'],['📚','Latein-Starterpaket mit 50 Wörtern (Üben → Latein oder Wörter hinzufügen)'],['🌍','Alle Sprachen gleichzeitig: Filter Alle / EN / FR / LA oben in der App'],['🎳','Skittles: echte Kegelform, Wort verschwindet beim Treffer']]},
{b:122,t:[['🌓','Hell/Dunkel stabil: Wählst du „Dunkel“ bei hellem Gerät, gelten jetzt alle dunklen Farben, Akzente und Hintergründe. Weniger Blitzen beim Laden und Umschalten'],['🎳','Skittles neu animiert: Kugel rollt zum Kegel, Kegel kippen, Nachbarn wackeln, Staub-Effekt, schönere Bahn'],['🐞','Fix: Wechselt dein iPhone von Hell auf Dunkel (z. B. abends), passt sich die App jetzt sofort an – vorher gab es Mischfarben mit unlesbarer Schrift'],['🔔','Update-Hinweis: Nach jedem Update siehst du hier, was sich geändert hat'],['🌓','Dunkelmodus mit 3 Stufen: Hell, Dunkel oder Automatisch (folgt dem Gerät)'],['⌨️','Suche per Tastatur: Strg/Cmd + K oder die Taste „/“'],['↩️','Wort-Menü per Langdruck bleibt, jetzt auch mit Rechtsklick am Computer']]},
{b:121,t:[['🔎','Globale Wortsuche und Suche in den Einstellungen'],['↩️','Rückgängig für das zuletzt gelöschte Wort'],['👈','Wort in „Wörter“ nach links oder rechts wischen zum Löschen'],['🎚️','Stufen für Memory, Galgen und Blitz'],['🧩','Neues Kreuzworträtsel aus deinen Wörtern'],['🎳','Neues Spiel: Skittles mit eigenen Regeln'],['⚙️','Einstellungen neu sortiert in Kategorien'],['🎨','Normalere Hintergrundfarben, Schalter im Liquid-Glass-Stil'],['👁️','Bessere Lesbarkeit in Dunkelmodus und Glas, Bedienhilfen für VoiceOver']]},
{b:120,t:[['🧹','Übersicht in „Üben“ aufgeräumt'],['🐞','Mehrere kleine Fehler behoben']]}
];
function showNews(all){P.newsV=BUILD;save();const last=all?0:(S.newsFrom||0);let list=NEWS_LOG.filter(function(e){return all||e.b>(last>=100?last:119);});if(!list.length)list=[NEWS_LOG[0]];const items=[];list.forEach(function(e){e.t.forEach(function(x){items.push({i:x[0],t:x[1],a:'shclose'});});});S.sheet={title:'Neu in EasyVocab',sub:all?'Alle Änderungen':'Build '+BUILD,items:items};render(true);}
const ERRLOG=[];
window.addEventListener('error',function(e){try{ERRLOG.push(String(e.message||'Fehler').slice(0,80)+' @'+String(e.filename||'').split('/').pop()+':'+(e.lineno||0));if(ERRLOG.length>5)ERRLOG.shift();}catch(x){}});
window.addEventListener('unhandledrejection',function(e){try{ERRLOG.push('Promise: '+String((e.reason&&e.reason.message)||e.reason||'').slice(0,80));if(ERRLOG.length>5)ERRLOG.shift();}catch(x){}});
function errTxt(){return ERRLOG.length?'\nFehler: '+ERRLOG.join(' | '):'';}
function cloudBanner(){const f=S.cloudFound;if(!f)return '';return '<div class="glass banner w col"><b>☁️ Ein gesicherter Stand mit mehr Fortschritt wurde gefunden</b><span class="hint" style="margin:0">'+(f.at?'Gesichert '+ago(f.at)+'. ':'')+'Wiederherstellen holt Fortschritt, Wörter und Einstellungen zurück.</span><span class="row2c"><button class="btn sm pri" data-act="cloudrestore">Wiederherstellen</button><button class="btn sm" data-act="clouddismiss">Neu anfangen</button></span></div>';}
async function cloudLoad(){
  if(cloudMode()==='sb'){const f=await sbPeek();if(!f){toast('Im Konto liegt noch keine Sicherung.');return;}doImport(f.txt);return;}
  const c=await cloudInit();
  if(!c){toast('Die Cloud ist in dieser Ansicht nicht verfügbar. Du musst angemeldet sein.');return;}
  try{
    const snap=await cloudRef().get();
    const data=(snap&&typeof snap.data==='function')?snap.data():snap;
    const ex=(snap&&typeof snap.exists==='function')?snap.exists():(snap&&snap.exists!==undefined?snap.exists:!!data);
    if(!ex||!data||typeof data.txt!=='string'){toast('In der Cloud liegt noch keine Sicherung.');return;}
    doImport(data.txt);
  }catch(e){toast('Cloud laden fehlgeschlagen. Versuche es später.');}
}
const SCANPROMPT='Du liest ein oder mehrere Fotos von Vokabellisten (mehrere Fotos gehören zur selben Liste: fasse sie zusammen, doppelte Wörter nur einmal). Lies ein Foto einer Vokabelliste (Schulbuch, Heft oder Tabelle). Extrahiere alle Vokabelpaare. Antworte NUR mit JSON in dieser Form: {"title":"kurzer Listenname, höchstens 28 Zeichen, aus Überschrift oder Thema","lang":"en|fr|la","words":[{"f":"Wort oder Wendung in der Fremdsprache","d":"deutsche Übersetzung","ex":"Beispielsatz aus dem Foto oder leer","t":Themennummer,"e":"ein einzelnes Emoji, nur wenn es das Wort wirklich anschaulich macht (konkrete Dinge, Gefühle), sonst leer"}]}. Themen: 0 Körper & Gesundheit, 1 Kleidung & Aussehen, 2 Gefühle & Charakter, 3 Bewegung & Handlung, 4 Denken & Sprechen, 5 Natur Licht Wetter, 6 Haus & Alltag, 7 Schule & Gesellschaft, 8 Ort Zeit Menge. Regeln: erfinde nichts, nur sichtbare Wörter; mehrere Bedeutungen mit Semikolon trennen; Kürzel wie jmdn./etw. und sb/sth beibehalten; höchstens 120 Wörter.';
function downscale(file){return new Promise(function(res){const img=new Image();const url=URL.createObjectURL(file);img.onload=function(){const m=1600;let w=img.naturalWidth,h=img.naturalHeight;const s=Math.min(1,m/Math.max(w,h));w=Math.round(w*s);h=Math.round(h*s);const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);c.toBlob(function(b){URL.revokeObjectURL(url);res(b||file);},'image/jpeg',0.85);};img.onerror=function(){URL.revokeObjectURL(url);res(file);};img.src=url;});}
async function scanRun(blob,tier){
  const n=document.getElementById('a-name');if(n)S.add.name=n.value;
  S.add.busy=true;S.add.err='';S.add.found=null;S.add.file=blob;render(true);
  try{
    aiTrack();
    const imgs=Array.isArray(blob)?blob:[blob];const r=await AI.json(SCANPROMPT,{images:imgs,modelTier:tier||'quick'});
    const words=((r&&r.words)||[]).filter(function(w){return w&&w.f&&w.d;}).slice(0,300).map(function(w){return {f:String(w.f).trim(),d:String(w.d).trim(),ex:String(w.ex||'').trim(),t:(Number.isInteger(w.t)&&w.t>=0&&w.t<=8)?w.t:9,e:(typeof w.e==='string'&&/^[^\x00-\x7F]{1,10}$/.test(w.e.trim()))?w.e.trim():'',on:true};});
    if(!words.length)throw {code:'empty_completion'};
    const lg=(S.add.lang&&S.add.lang!=='auto')?S.add.lang:(['en','fr','la'].indexOf(r.lang)>=0?r.lang:langOf(words[0].f,words[0].d,'auto'));
    S.add.found={title:String(r.title||'').slice(0,40),words:words};S.add.lang=lg;
    if(!S.add.name&&S.add.found.title)S.add.name=S.add.found.title;
  }catch(e){S.add.err=aiErr(e&&e.code);}
  S.add.busy=false;render(true);
}
async function aiTopics(ids){
  const sub=ids.slice(0,100);if(!sub.length||!aiOK())return 0;
  aiTrack();
  const list=sub.map(function(id,i){return i+': '+W[id][0]+' = '+W[id][1];}).join('\n');
  const arr=await AI.json('Ordne jedes Vokabelpaar genau einem Thema zu. Themen: '+TOPICS.slice(0,9).map(function(t,i){return i+' '+t.n;}).join('; ')+'. Antworte NUR mit einem JSON-Array aus Objekten {"t":Zahl von 0 bis 8,"e":"ein einzelnes Emoji, nur wenn es das Wort wirklich anschaulich macht, sonst leer"}, eins pro Zeile, in gleicher Reihenfolge.\n\n'+list,{modelTier:'quick'});
  let n=0;if(Array.isArray(arr))arr.forEach(function(o,i){if(sub[i]===undefined)return;const t=(o&&typeof o==='object')?o.t:o;if(Number.isInteger(t)&&t>=0&&t<=8){const c=P.custom[sub[i]-BASE];c.cat=t;if(o&&typeof o==='object'&&typeof o.e==='string'&&/^[^\x00-\x7F]{1,10}$/.test(o.e.trim()))c.emo=o.e.trim();n++;}});
  save();return n;
}
async function aiMemo(id){
  if(P.memo&&P.memo[id])return P.memo[id];
  aiTrack();
  const r=await AI.json('Gib eine kurze Eselsbrücke auf Deutsch für dieses Vokabelpaar: ein Satz, höchstens 18 Wörter, mit Klang oder Bild. Antworte NUR mit JSON {"m":"..."}.\n'+W[id][0]+' = '+W[id][1],{modelTier:'quick'});
  const m=String((r&&r.m)||'').trim();if(!m)throw {code:'empty_completion'};
  P.memo=P.memo||{};P.memo[id]=m;save();return m;
}
function speakTest(){
  const parts=['Sprachausgabe: '+(canSpeak?'vorhanden':'fehlt')];
  if(!canSpeak){S.diag=parts.join(' · ');render(true);return;}
  loadVoices();parts.push('Stimmen: '+VOICES.length);
  try{
    const u=new SpeechSynthesisUtterance('Hello, this is a test.');u.lang='en-GB';let st=false;
    const v=pickVoice('en-GB');if(v){u.voice=v;u.lang=v.lang;}
    u.onstart=function(){st=true;S.diag=parts.concat(['Start: ja']).join(' · ');render(true);};
    u.onerror=function(ev){S.diag=parts.concat(['Fehler: '+((ev&&ev.error)||'unbekannt')]).join(' · ');render(true);};
    u.onend=function(){if(st){S.diag=parts.concat(['Start: ja','Ende: ja']).join(' · ');render(true);}};
    speechSynthesis.cancel();speechSynthesis.speak(u);
    setTimeout(function(){if(!st){S.diag=parts.concat(['Start: nein (blockiert oder stumm)']).join(' · ');render(true);}},2200);
    S.diag='Test läuft…';render(true);
  }catch(e){S.diag=parts.concat(['Fehler: '+e.message]).join(' · ');render(true);}
}
const EMO={'leather':'🧥','denim':'👖','collar':'👔','sleeve':'👕','fist':'✊','thumb':'👍','moustache':'🥸','kettle':'🫖','fence':'🚧','streetlight':'🏮','steam':'♨️','timber':'🪵','spark':'✨','blaze':'🔥','to boil':'♨️','to cough':'😷','to breathe':'🌬️','rib':'🦴','dusk':'🌆','at the crack of dawn':'🌅','bright':'☀️','to drip':'💧','to darken':'🌑','internship (AE)':'💼','civic':'🏛️','disability':'♿','sly':'🦊','awestruck':'🤩','be relieved':'😮‍💨','to shrug (one\'s shoulders)':'🤷','to glance at sb/sth':'👀','to peer':'🔍','to slam':'🚪','to slide':'🛝','to rush':'🏃','hurriedly':'💨','to recover':'🩹','lanky':'🦒','to litter':'🗑️','to instruct':'🧑‍🏫','to be concerned about sth':'😟','discouraged':'😞','to imitate sb/sth':'🦜','satisfaction':'😌','to beat':'💓','to squeeze':'🍋','to clasp':'🤗','to bend forward':'🙇','to consider':'🤔','to deny':'🙅','in the long term':'⏳','meanwhile':'⏱️','to regret':'😔','word spreads':'📣','to pass down':'👨‍👧','beneath':'⬇️','underneath':'⬇️','failure':'❌'};
function emojiOf(id){if(P.wemo&&P.wemo[id])return P.wemo[id];if(id<BASE)return EMO[W[id][0]]||'';const c=P.custom[id-BASE];return (c&&c.emo)||'';}
function emoBlock(id,ctx){if(P.emo==='off')return '';if(ctx==='right'&&P.emo!=='all')return '';const e=emojiOf(id);return e?'<div class="emo" aria-hidden="true">'+e+'</div>':'';}
function memoBlock(id){
  if(P.memo&&P.memo[id])return '<div class="memo">💡 '+esc(P.memo[id])+'</div>';
  return aiOK()?'<button class="link" data-act="memo" data-id="'+id+'">✨ Eselsbrücke</button>':'';
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const t=a[i];a[i]=a[j];a[j]=t;}return a;}
function isAlive(id){if(id<BASE)return false;if(P.hid&&P.hid[id])return false;const c=P.custom[id-BASE];return !!c&&!c.del&&(!P.view||P.view==='all'||(c.lang||'en')===P.view);}
function allIds(){const a=[];for(let i=0;i<W.length;i++)if(isAlive(i))a.push(i);return a;}
const CHAPTERS=[{n:'On the bridge',a:0,b:20},{n:'Chalk',a:21,b:37},{n:'Chalk · Teil 2',a:38,b:59},{n:'Chalk · Teil 3',a:60,b:68},{n:'Zukunft & Gesellschaft',a:69,b:78},{n:'Film: Bro',a:79,b:97}];
function blocks(){
  const key=W.length+':'+P.custom.filter(function(c){return c.del;}).length+':'+(P.view||'all');
  if(BC&&BCk===key)return BC;
  const bl=[];
  
  const groups={},order=[];
  for(let i=BASE;i<W.length;i++){if(!isAlive(i))continue;const ch=P.custom[i-BASE].ch||'Eigene Wörter';if(!groups[ch]){groups[ch]=[];order.push(ch);}groups[ch].push(i);}
  order.forEach(function(ch){bl.push({ids:groups[ch],custom:true,name:ch});});
  BC=bl;BCk=key;return bl;
}
function nb(){return blocks().length;}
function range(k){return blocks()[k]?blocks()[k].ids:[];}
function kk(id,d){return id+'|'+d;}
function bx(id,d){return P.box[kk(id,d)]||0;}
function bAvg(id){return (bx(id,'en')+bx(id,'de'))/2;}
function dueD(id,d){const v=P.due[kk(id,d)];return !v||v<=fmt(new Date());}
function dueAny(id){return dueD(id,'en')||dueD(id,'de');}
function isDue(id){return S.dir==='en'?dueD(id,'en'):(S.dir==='de'?dueD(id,'de'):dueAny(id));}
function dueOf(ids,any){return ids.filter(any?dueAny:isDue);}
function weakIds(){return allIds().filter(function(id){return (P.wrong[id]||0)>0&&bAvg(id)<4;}).sort(function(a,b){return ((P.wrong[b]||0)-(P.wrong[a]||0))||(bAvg(a)-bAvg(b));}).slice(0,15);}
function examById(id){return P.exams.filter(function(e){return e.id===id;})[0];}
function examIds(e){return e.ids.filter(isAlive);}
function focusList(){const a=Array.isArray(P.focus)?P.focus:[];return a.filter(function(k){return typeof k==='number'&&blocks()[k];});}
function focusOn(){return focusList().length>0;}
function focusIds(){const seen={},out=[];focusList().forEach(function(k){range(k).forEach(function(id){if(!seen[id]&&isAlive(id)){seen[id]=1;out.push(id);}});});return out;}
function focusPicker(){const f=focusList();const items=blocks().map(function(b,k){return {i:'📖',t:bName(k),d:b.ids.length+' Wörter',a:'focustoggle',id:k,sel:f.indexOf(k)>=0};});if(f.length)items.push({i:'🧹',t:'Fokus aufheben (alle Listen)',a:'focusclear'});S.sheet={title:'Lernfokus',sub:f.length?'Nur diese Listen werden geübt':'Wähle die Listen, die du gerade lernst',items:items,pick:true};render(true);}
function fail7Ids(){const lim=Date.now()-7*864e5;return allIds().filter(function(id){return P.wd&&P.wd[id]>lim;}).sort(function(a,b){return (P.wd[b]||0)-(P.wd[a]||0);});}
function starIds(){return Object.keys(P.star||{}).map(Number).filter(function(id){return P.star[id]&&isAlive(id);});}
function nightIds(){const w=weakIds();const f=fail7Ids();const o=[];w.concat(f).forEach(function(id){if(o.indexOf(id)<0)o.push(id);});return o.slice(0,5);}
function scope(b){if(b==='fail7')return fail7Ids();if(b==='star')return starIds();if(b==='night')return nightIds();if(b==='wk')return weekIds();if(b==='custom')return (S.customIds||[]).filter(isAlive);if(b==='focus')return focusIds();if(typeof b==='string'&&/^t\d+$/.test(b)){const n=parseInt(b.slice(1),10);return allIds().filter(function(id){return wtopic(id)===n;});}if(b==='all')return allIds();if(b==='weak')return weakIds();if(b==='exam'){const e=examById(S.examId);return e?examIds(e):[];}return range(b);}
function pct(ids){if(!ids.length)return 0;let s=0;ids.forEach(function(id){s+=bAvg(id);});return Math.round(s/(5*ids.length)*100);}
function secureShare(ids){if(!ids.length)return 0;let n=0;ids.forEach(function(id){n+=(bx(id,'en')>=3?1:0)+(bx(id,'de')>=3?1:0);});return Math.round(n/(2*ids.length)*100);}
function securePairs(){let n=0,t=0;allIds().forEach(function(id){['en','de'].forEach(function(d){t++;if(bx(id,d)>=3)n++;});});return [n,t];}
function mastered(){return allIds().filter(function(id){return bx(id,'en')>=5&&bx(id,'de')>=5;}).length;}

/* ===== v81: Einrichtung nur einmal, FSRS, ehrliche Serie, Quests, Teilen ===== */
const STREAK_MIN=5;
function cookieOnb(){try{return /(?:^|; )ev_onb=1/.test(document.cookie||'');}catch(e){return false;}}
function setCookieOnb(){try{document.cookie='ev_onb=1; max-age=31536000; path=/; SameSite=Lax';}catch(e){}}
function isOnboarded(){try{return !!P.onb||!!(P.st&&(P.st.ok+P.st.no)>0)||Object.keys(P.days||{}).length>0||(P.custom&&P.custom.length>0)||!!P.prof||cookieOnb();}catch(e){return false;}}
/* FSRS-5 mit Standardwerten */
const FW=[0.40255,1.18385,3.173,15.69105,7.1949,0.5345,1.4604,0.0046,1.54575,0.1192,1.01925,1.9395,0.11,0.29605,2.2698,0.2315,2.9898,0.51655,0.6621];
function fsClamp(d){return Math.min(10,Math.max(1,d));}
function fsD0(g){return fsClamp(FW[4]-Math.exp(FW[5]*(g-1))+1);}
function fsR(t,s){return Math.pow(1+(19/81)*t/s,-0.5);}
function fsInt(s,r){return s/(19/81)*(Math.pow(r,-2)-1);}
function fsGet(key,b){const a=P.fs&&P.fs[key];if(a&&a.length>=3)return {s:a[0],d:a[1],l:a[2]};if(b>0){const s=Math.max(0.5,INT[b]||1);return {s:s,d:5.5,l:Date.now()-s*864e5};}return null;}
function fsNext(st,g,now){
  if(!st)return {s:FW[g-1],d:fsD0(g),l:now};
  const t=Math.max(0,(now-st.l)/864e5);const R=fsR(t,st.s);
  let d=st.d-FW[6]*(g-3)*1;d=st.d+(-FW[6]*(g-3))*(10-st.d)/9;d=fsClamp(FW[7]*fsD0(4)+(1-FW[7])*d);
  let s;
  if(t<1){s=st.s*Math.exp(FW[17]*(g-3+FW[18]));if(g>=3)s=Math.max(s,st.s);}
  else if(g>1){s=st.s*(1+Math.exp(FW[8])*(11-st.d)*Math.pow(st.s,-FW[9])*(Math.exp(FW[10]*(1-R))-1)*(g===2?FW[15]:1)*(g===4?FW[16]:1));}
  else{const sf=FW[11]*Math.pow(st.d,-FW[12])*(Math.pow(st.s+1,FW[13])-1)*Math.exp(FW[14]*(1-R));s=Math.min(sf,st.s/Math.exp(FW[17]*FW[18]));}
  s=Math.min(36500,Math.max(0.1,s));
  return {s:s,d:d,l:now};
}
function fsInterval(s,id){
  const r=Math.min(0.97,Math.max(0.7,(P.retP||90)/100));let I=Math.max(1,Math.round(fsInt(s,r)*calMult()));I=Math.min(I,365);
  const ne=nextExam();if(ne){const left=daysLeft(ne);if(left>1&&examIds(ne).indexOf(id)>=0)I=Math.min(I,Math.max(1,left-1));}
  return I;
}
/* Tagesquests */
function qTouch(){const t=fmt(new Date());if(!P.q||P.q.d!==t)P.q={d:t,ok:0,rev:0,nw:0,gm:0,cl:{},need:null};if(!P.q.cl)P.q.cl={};return P.q;}
function questList(){
  const q=qTouch();
  if(!q.need){const dn=dueSplit(allIds()).r;q.need={ok:Math.max(5,Math.min(P.dailyGoal||10,30)),rev:dn>=5?5:0,nw:dn>=5?0:3,gm:1};}
  const k2=q.need.rev?'rev':'nw';
  return [{k:'ok',ic:'✅',t:q.need.ok+' Antworten richtig',n:q.need.ok},{k:k2,ic:k2==='rev'?'🔁':'🌱',t:k2==='rev'?'5 fällige Wörter wiederholen':'3 neue Wörter lernen',n:q.need[k2]},{k:'gm',ic:'🎮',t:'Ein Spiel spielen',n:1}].map(function(x){x.have=Math.min(x.n,q[x.k]||0);x.done=x.have>=x.n;x.cl=!!q.cl[x.k];return x;});
}
function questCard(){
  const L=questList();const q=qTouch();const nd=L.filter(function(x){return x.cl;}).length;
  let h='<div class="glass pad w col tight quests"><div class="hd2"><span class="lab">Tagesquests</span><span class="hint">'+nd+' von 3</span></div>';
  L.forEach(function(x){h+='<div class="qrow'+(x.cl?' cl':'')+'"><span class="qi">'+x.ic+'</span><span class="qt"><b>'+x.t+'</b><span class="prog thin"><i style="width:'+Math.round(x.have/x.n*100)+'%"></i></span></span>'+(x.cl?'<span class="qd">✓</span>':(x.done?'<button class="btn sm pri" data-act="questclaim" data-k="'+x.k+'">Abholen</button>':'<span class="qs">'+x.have+'/'+x.n+'</span>'))+'</div>';});
  if(nd===3)h+='<div class="hint" style="margin:0">'+(q.cl.all?'Alle Quests geschafft. Bonus abgeholt 🎉':'')+'</div>';
  return h+'</div>';
}
function questClaim(k){
  const L=questList();const q=qTouch();const x=L.filter(function(y){return y.k===k;})[0];if(!x||!x.done||x.cl)return;
  q.cl[k]=true;earn(5);earnXp(10);let msg='+5 Münzen';
  if(L.every(function(y){return q.cl[y.k];})&&!q.cl.all){q.cl.all=true;earn(15);earnXp(30);msg='Alle Quests! +20 Münzen';sfx('ok');confetti();}
  save();render(true);toast(msg);
}
function usageBump(k){try{if(!k)return;if(!P.use||typeof P.use!=='object')P.use={};P.use[k]=(P.use[k]||0)+1;}catch(e){}}
const USE_NAME={auto:'Smart-Training',learn:'Lernen',cards:'Karteikarten',mc:'Probetest',type:'Tippen',weak:'Knifflige Wörter',feed:'Lern-Feed',cloze:'Lückentext',speak:'Sprechen',conf:'Verwechsler',clip:'Lern-Clip',diktat:'Diktat',story:'Geschichte',pod:'Mini-Podcast',mem:'Memory',blitz:'Blitz',salat:'Wortsalat',galgen:'Galgenmännchen',smart:'Smart-Training',weakq:'Knifflige Wörter',cardsq:'Karteikarten',blitzq:'Blitz'};
function usageCard(){
  const u=P.use||{};const m={};Object.keys(u).forEach(function(k){const n=USE_NAME[k]||k;m[n]=(m[n]||0)+u[k];});
  const rows=Object.keys(m).sort(function(a,b){return m[b]-m[a];});if(!rows.length)return '';
  const mx=m[rows[0]];
  return '<div class="glass pad w col tight"><div class="hd2"><span class="lab">Was du am meisten nutzt</span><span class="hint">nur auf deinem Gerät</span></div>'+rows.slice(0,8).map(function(n){return '<div class="xr"><span class="xn">'+esc(n)+'</span><span class="prog thin lp"><i style="width:'+Math.round(m[n]/mx*100)+'%"></i></span><span class="xs">'+m[n]+'×</span></div>';}).join('')+'</div>';
}
/* Einrichtung (nur beim ersten Mal) */
const OB_STEPS=['name','role','level','lang','goal','style','pace','look','done'];
function obInit(edit){const p=P.prof||{};S.ob={step:0,edit:!!edit,name:P.nick||'',emoji:P.emoji||'',lang:p.lang||(P.lang2&&P.lang2!=='none'?P.lang2:'en'),role:p.role||'',grade:p.grade||'',age:P.age||'',level:p.level||0,goal:p.goal||'',styles:(p.styles||[]).slice(),pace:p.pace||P.dailyGoal||10};}
function obKey(o){return OB_STEPS[Math.max(0,Math.min(OB_STEPS.length-1,o.step))];}
function obAdv(o){o.step=Math.min(OB_STEPS.length-1,o.step+1);}
function obDots(n,i){let h='<div class="obdots" aria-hidden="true">';for(let k=0;k<n;k++)h+='<i class="'+(k<=i?'on':'')+'"></i>';return h+'</div>';}
function obBtn(k,v,ic,t,sel,sub){return '<button class="glass gtap obopt'+(sel?' on':'')+'" data-act="obset" data-k="'+k+'" data-v="'+v+'"><span class="oi">'+ic+'</span><span class="ot"><b>'+t+'</b>'+(sub?'<small>'+sub+'</small>':'')+'</span><span class="ock">'+(sel?'✓':'')+'</span></button>';}
function obSeg(k,vals,cur,labels){return '<div class="obseg" role="group">'+vals.map(function(v){return '<button class="'+(String(cur)===String(v)?'on':'')+'" data-act="obset" data-k="'+k+'" data-v="'+v+'">'+labels[v]+'</button>';}).join('')+'</div>';}
function onbView(){
  if(!S.ob)obInit(false);const o=S.ob;const N=OB_STEPS.length;const key=obKey(o);
  let h='<div class="obw">'+obDots(N,o.step);
  if(key==='name'){
    const EM=['🙂','😎','🤓','🦊','🐼','🦁','🐙','🚀','⭐','🎮','🎧','🌈'];
    h+='<div class="obh"><div class="big-ico">👋</div><h2 class="gradient-text">'+(o.edit?'Dein Profil':'Willkommen bei EasyVocab')+'</h2><p>'+(o.edit?'Passe an, was die App für dich einstellt.':'Ein paar kurze Fragen, dann passt sich die App an dich an. Das dauert etwa eine Minute.')+'</p></div><div class="obq">Wie heißt du?</div>';
    h+='<div class="glass pad w col"><input id="ob-name" class="in" type="text" maxlength="16" placeholder="Dein Vorname oder Spitzname" aria-label="Dein Name" autocomplete="off" autocapitalize="words" value="'+esc(o.name)+'"><span class="hint" style="margin:0">Der Name erscheint auf Heute, in der Liga und im Coach. Er bleibt auf deinem Gerät.</span></div>';
    h+='<div class="obq" style="margin-top:4px">Wähle dein Bild</div><div class="emgrid w">'+EM.map(function(e){return '<button class="emb'+((o.emoji||'🙂')===e?' on':'')+'" data-act="obset" data-k="emoji" data-v="'+e+'" aria-label="Bild '+e+'">'+e+'</button>';}).join('')+'</div>';
  }else if(key==='role'){
    h+='<div class="obq">Wer lernt hier?</div>';
    h+=obBtn('role','schule','🎒','Schüler oder Schülerin',o.role==='schule')+obBtn('role','uni','🎓','Student, Studentin oder Azubi',o.role==='uni')+obBtn('role','beruf','💼','Beruf und Alltag',o.role==='beruf')+obBtn('role','reisen','🌍','Reisen und Hobby',o.role==='reisen');
    h+='<div class="obq" style="margin-top:10px">Wie alt bist du?</div><div class="hint" style="margin:-4px 0 8px">Die App wird einfacher oder ernster. Du kannst es jederzeit ändern.</div><div class="obgrid" style="grid-template-columns:repeat(4,1fr)">'+['kid','teen','youth','adult'].map(function(b){return '<button class="glass gtap obg'+(o.age===b?' on':'')+'" data-act="obset" data-k="age" data-v="'+b+'">'+AGEL[b]+'</button>';}).join('')+'</div>';
  }else if(key==='level'){
    if(o.role==='schule'){h+='<div class="obq">Welche Klasse?</div><div class="obgrid">'+['5','6','7','8','9','10','11','12','13'].map(function(g){return '<button class="glass gtap obg'+(o.grade===g?' on':'')+'" data-act="obset" data-k="grade" data-v="'+g+'">'+g+'</button>';}).join('')+'</div>';}
    else{h+='<div class="obq">Wie gut bist du schon?</div>'+obBtn('level','1','🌱','Anfänger','1'===String(o.level),'Ich fange gerade an')+obBtn('level','2','🌿','Mittel','2'===String(o.level),'Alltag klappt, vieles fehlt')+obBtn('level','3','🌳','Fortgeschritten','3'===String(o.level),'Ich will feiner werden');}
  }else if(key==='lang'){
    h+='<div class="obq">Welche Sprache lernst du?</div>'+obBtn('lang','en','🇬🇧','Englisch',o.lang==='en')+obBtn('lang','fr','🇫🇷','Französisch',o.lang==='fr')+obBtn('lang','la','🏛️','Latein',o.lang==='la','Ohne Vorlesen');
  }else if(key==='goal'){
    h+='<div class="obq">Was ist dein Ziel?</div>'+obBtn('goal','klausur','📝','Klausur oder Test bald',o.goal==='klausur','Mehr Wiederholung, Klausurplan')+obBtn('goal','schule','📚','Schulstoff laufend begleiten',o.goal==='schule')+obBtn('goal','abi','🏆','Langfristig: Abitur oder Prüfung',o.goal==='abi')+obBtn('goal','alltag','🗣️','Sprechen und Alltag',o.goal==='alltag','Lockerer Rhythmus');
  }else if(key==='style'){
    const sb=function(v,ic,t,s2){const on=o.styles.indexOf(v)>=0;return '<button class="glass gtap obopt'+(on?' on':'')+'" data-act="obtog" data-v="'+v+'"><span class="oi">'+ic+'</span><span class="ot"><b>'+t+'</b><small>'+s2+'</small></span><span class="ock">'+(on?'✓':'')+'</span></button>';};
    h+='<div class="obq">Wie lernst du am besten?</div><p class="hint" style="margin:0 6px">Du kannst mehrere wählen.</p>'+sb('hear','🎧','Hören und Sprechen','Vorlesen, Diktat, Mikrofon')+sb('see','👀','Bilder und Farben','Emojis, Karten, Memory')+sb('write','✍️','Schreiben und Tippen','Selbst eintippen')+sb('play','🎮','Spielen','Blitz, Rätsel, Belohnungen')+sb('fast','📱','Kurz und schnell','Wischen, Mini-Runden');
  }else if(key==='pace'){
    h+='<div class="obq">Wie viel pro Tag?</div>'+[[5,'☕','Locker','5 Wörter, ca. 2 Minuten'],[10,'👍','Normal','10 Wörter, ca. 5 Minuten'],[20,'💪','Ernsthaft','20 Wörter, ca. 10 Minuten'],[40,'🔥','Intensiv','40 Wörter, ca. 20 Minuten']].map(function(x){return obBtn('pace',x[0],x[1],x[2],o.pace===x[0],x[3]);}).join('');
  }else if(key==='look'){
    const AC=[['blue','#0A84FF'],['poppy','#FF453A'],['mustard','#F5A400'],['green','#30B35A'],['rose','#FF5C8A']];
    const dk=P.darkMode===null||P.darkMode===undefined?'auto':(P.darkMode?'dark':'light');
    const rm=P.remindersEnabled?String(P.remHour||17):'off';
    h+='<div class="obq">Aussehen und Ton</div><p class="hint" style="margin:0 6px">Alles ändert sich sofort. Du kannst es später in den Einstellungen anpassen.</p><div class="glass grp w">';
    h+=srow('🌙','#374151','Design','',obSeg('dark',['auto','light','dark'],dk,{auto:'Auto',light:'Hell',dark:'Dunkel'}));
    h+='<div class="swlab"><b>Akzentfarbe</b></div><div class="swrow">'+AC.map(function(a){return '<button class="sw'+((P.accent||'blue')===a[0]?' on':'')+'" data-act="obset" data-k="accent" data-v="'+a[0]+'" aria-label="Farbe '+a[0]+'"><i style="background:'+a[1]+'"></i></button>';}).join('')+'</div>';
    h+=srow('🔤','#6B7280','Schriftgröße','',obSeg('fsz',['S','M','L'],P.fontSize||'M',{S:'S',M:'M',L:'L'}));
    h+=srow('🔔','#FF375F','Töne','Richtig, Serie, Level',obSeg('snd',['on','off'],P.sfx?'on':'off',{on:'An',off:'Aus'}));
    h+=srow('🔊','#FF375F','Vorlesen','Bei jeder Frage',obSeg('spk',['on','off'],P.speak?'on':'off',{on:'An',off:'Aus'}));
    h+=srow('⏰','#FF9500','Erinnerung','Uhrzeit, ab der der Hinweis kommt',obSeg('rem',['off','8','16','19'],rm,{off:'Aus','8':'8','16':'16','19':'19'}))+'</div>';
  }else{
    const sm=obSummary(o);
    h+='<div class="obh"><div class="big-ico">✨</div><h2>Fertig'+(o.name?', '+esc(o.name):'')+'. So habe ich es eingestellt:</h2></div><div class="glass pad w col tight">'+sm.map(function(x){return '<div class="obsum"><span>'+x[0]+'</span><b>'+x[1]+'</b></div>';}).join('')+'</div><p class="hint" style="margin:0 6px">Auch Claude richtet sich danach: Erklärungen, Beispielsätze und der Coach passen zu Klasse, Ziel und Lernstil. Alles lässt sich später unter Lernprofil ändern.</p>';
  }
  h+='<div class="obnav">';
  if(o.step>0)h+='<button class="btn" data-act="obback">Zurück</button>';else if(o.edit)h+='<button class="btn" data-act="obcancel">Abbrechen</button>';else h+='<button class="btn" data-act="obskip">Überspringen</button>';
  if(key==='done')h+='<button class="btn pri" data-act="obdone">'+(o.edit?'Speichern':'Erste Runde starten')+'</button>';
  else{const can=obCan(o);h+='<button class="btn pri" data-act="obnext"'+(can?'':' disabled')+'>Weiter</button>';}
  return h+'</div></div>';
}
function obCan(o){const k=obKey(o);if(k==='name')return (o.name||'').trim().length>=1;if(k==='role')return !!o.role;if(k==='level')return o.role==='schule'?!!o.grade:!!o.level;if(k==='lang')return !!o.lang;if(k==='goal')return !!o.goal;if(k==='style')return o.styles.length>0;return true;}
function obLevel(o){if(o.role==='schule'){const g=parseInt(o.grade,10)||8;return g<=7?1:(g<=10?2:3);}return parseInt(o.level,10)||2;}
function obCompute(o){
  const goal=o.goal||'schule';const ret={klausur:95,schule:90,abi:90,alltag:80}[goal]||90;const wk={klausur:5,schule:4,abi:5,alltag:3}[goal]||4;
  const map={hear:['speak','diktat'],see:['mem','learn'],write:['type','salat'],play:['blitz','galgen'],fast:['feed','cards']};
  const rec=[];(o.styles.length?o.styles:['fast']).forEach(function(s){(map[s]||[]).slice(0,1).forEach(function(k){if(rec.indexOf(k)<0&&rec.length<3)rec.push(k);});});
  return {ret:ret,wk:wk,rec:rec,lvl:obLevel(o)};
}
function obSummary(o){
  const c=obCompute(o);const nm={speak:'Sprechen',diktat:'Diktat',mem:'Memory',learn:'Lernen',type:'Tippen',salat:'Wortsalat',blitz:'Blitz',galgen:'Galgenmännchen',feed:'Lern-Feed',cards:'Karteikarten'};
  const r=[['🎯 Tagesziel',o.pace+' Wörter'],['🧠 Behalten',c.ret+' %'],['📆 Lerntage pro Woche',String(c.wk)],['⭐ Für dich markiert',c.rec.map(function(k){return nm[k]||k;}).join(', ')]];
  if(o.styles.indexOf('hear')>=0)r.push(['🔊 Vorlesen','automatisch an']);
  if(o.role==='schule'&&(parseInt(o.grade,10)||8)<=6)r.push(['🔤 Schrift','größer']);
  r.unshift(['🌍 Sprache',({en:'Englisch',fr:'Französisch',la:'Latein'})[o.lang]||'Englisch']);
  if(o.name)r.unshift(['🙂 Name',o.name]);
  return r;
}
function obApply(o){
  const c=obCompute(o);
  P.dailyGoal=o.pace;P.weekGoal=c.wk;P.retP=c.ret;P.quizLength=nearest(({1:10,2:20,3:30})[c.lvl]||15,[10,15,20,30]);
  if(o.styles.indexOf('hear')>=0)P.speak=true;
  if(o.styles.indexOf('see')>=0)P.emo='all';
  if(o.role==='schule'&&(parseInt(o.grade,10)||8)<=6)P.fontSize='L';
  P.nick=String(o.name||'').trim().slice(0,16);if(o.emoji&&!P.avatar)P.emoji=o.emoji;P.lang2=(o.lang==='fr'||o.lang==='la')?o.lang:'none';BC=null;
  if(o.age&&AGEL[o.age])P.age=o.age;P.prof={role:o.role,grade:o.grade,level:c.lvl,goal:o.goal,styles:o.styles.slice(),pace:o.pace,rec:c.rec,lang:o.lang||'en',at:Date.now()};
  P.onb=1;P.newsV=BUILD;setCookieOnb();save();applyPrefs();
}
function tutView(){
  return '<div class="glass pad w center" style="margin-top:24px"><div class="big-ico">📖</div><h2 class="gradient-text" style="font-size:26px">So funktioniert EasyVocab</h2></div>'
  +'<div class="glass pad w"><div class="step"><b>1</b><span><strong>Smart-Training</strong><small>Neue Wörter siehst du erst als Karte, dann kommt die Abfrage. Bekannte Wörter tippst du selbst.</small></span></div>'
  +'<div class="step"><b>2</b><span><strong>Richtungen getrennt</strong><small>Englisch → Deutsch und Deutsch → Englisch zählen einzeln. Gemeistert ist ein Wort erst, wenn du beides getippt kannst.</small></span></div>'
  +'<div class="step"><b>3</b><span><strong>Wiederholung zur richtigen Zeit</strong><small>Nach jeder Antwort siehst du, wann das Wort wiederkommt. Täglich ein paar Minuten schlagen eine lange Nacht.</small></span></div></div>'
  +'<button class="btn pri full" data-act="tutdone">Verstanden</button>';
}
/* Wörter teilen per Link */
function b64e(o){return btoa(unescape(encodeURIComponent(JSON.stringify(o))));}
function b64d(s){return JSON.parse(decodeURIComponent(escape(atob(s))));}
function shareData(){
  let ids=focusOn()?focusIds():allIds().filter(function(id){return id>=BASE;});
  ids=ids.filter(function(id){return isAlive(id)&&id>=BASE;});
  if(!ids.length)return null;
  const names=focusOn()?focusList().map(function(k){return bName(k);}).join(' + '):'Geteilte Liste';
  return {n:String(names).slice(0,40),l:wlang(ids[0])||'en',w:ids.slice(0,200).map(function(id){return [W[id][0],W[id][1],E[id]||''];})};
}
function shareLink(){
  if(!isHosted()){toast('Den Link gibt es in der Web-Version.');return;}
  const d=shareData();if(!d){toast('Zum Teilen brauchst du eigene Wörter (Wörter → Hinzufügen).');return;}
  const url=location.origin+location.pathname+'#list='+b64e(d);
  if(navigator.share){navigator.share({title:'EasyVocab: '+d.n,url:url}).catch(function(){});return;}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(url).then(function(){toast('Link kopiert ('+d.w.length+' Wörter).');},function(){S.shareUrl=url;render(true);});}
  else{S.shareUrl=url;render(true);}
}
function importFromHash(){
  try{
    const m=/#list=([^&]+)/.exec(location.hash||'');if(!m)return;
    try{history.replaceState(null,'',location.pathname+location.search);}catch(e){}
    const d=b64d(m[1]);if(!d||!Array.isArray(d.w)||!d.w.length)return;
    S.imp={n:String(d.n||'Geteilte Liste').slice(0,40),l:['en','fr','la'].indexOf(d.l)>=0?d.l:'en',w:d.w.slice(0,200).filter(function(x){return Array.isArray(x)&&x[0]&&x[1];}).map(function(x){return [String(x[0]).slice(0,80),String(x[1]).slice(0,120),String(x[2]||'').slice(0,160)];})};
    if(!S.imp.w.length)return;
    S.sheet={title:'Liste erhalten',sub:esc(S.imp.n)+' · '+S.imp.w.length+' Wörter',items:[{i:'✅',t:'Zu meinen Wörtern hinzufügen',a:'impgo'},{i:'✖️',t:'Nicht hinzufügen',a:'shclose'}]};render(true);
  }catch(e){}
}
function impGo(){
  const x=S.imp;if(!x)return;let n=0;x.w.forEach(function(w){if(addWord(w[0],w[1],w[2],9,x.l,x.n)==='ok')n++;});
  S.imp=null;save();render(true);toast(n+' Wörter hinzugefügt.');
}
setTimeout(importFromHash,300);


/* ===== Coach: Chat und Anruf ===== */
const NUMW={zwei:2,drei:3,vier:4,fünf:5,fuenf:5,sechs:6,sieben:7,acht:8,neun:9,zehn:10,elf:11,zwölf:12,zwoelf:12,fünfzehn:15,fuenfzehn:15,zwanzig:20,dreißig:30,dreissig:30,vierzig:40,fünfzig:50,fuenfzig:50};
function coNorm(t){return String(t||'').toLowerCase().replace(/[„“”"'.,!?;:]/g,' ').replace(/\s+/g,' ').trim();}
function coListName(k){return bName(k).toLowerCase().replace(/[·.]/g,' ').replace(/\s+/g,' ').trim();}
function coFirstNum(t){const m=/(\d+|[a-zäöüß]+)/g;let r;while((r=m.exec(t))){const w=r[1];if(/^\d+$/.test(w))return parseInt(w,10);if(NUMW[w]!=null)return NUMW[w];}return null;}
function coParse(text){
  const t=coNorm(text);if(!t)return {type:'unknown'};
  if(/\b(stopp|stop|ende|schluss|tschüss|tschüs|tschuess|aufhören|auflegen|aufhoeren)\b/.test(t))return {type:'end'};
  if(/(wie viele|wieviele|status|fortschritt|wie läuft|wie laeuft)/.test(t))return {type:'report'};
  if(/fokus/.test(t)&&/(aufheben|löschen|loeschen|zurücksetzen|ausschalten|aus\b)/.test(t))return {type:'focus',lists:[]};
  let list=-1,best=0,tt=t;
  for(let k=0;k<nb();k++){const nm=coListName(k);if(nm&&(' '+t+' ').indexOf(' '+nm+' ')>=0&&nm.length>best){best=nm.length;list=k;}}
  if(list<0){for(let k=0;k<nb();k++){const w=coListName(k).split(' ').filter(function(x){return x.length>=4&&x!=='teil';});for(let a=0;a<w.length;a++){if(t.indexOf(w[a])>=0){list=k;break;}}if(list>=0)break;}}
  if(list>=0&&best)tt=(' '+t+' ').replace(' '+coListName(list)+' ',' ').trim();
  if(/fokus/.test(t)&&list>=0&&/(setz|nur|wähl|waehl|lerne|stell)/.test(t)&&!/(üben|abfrag|frag)/.test(t))return {type:'focus',lists:[list]};
  let mode=null;
  if(/blitz/.test(t))mode='blitz';else if(/(lückentext|lueckentext|lücke)/.test(t))mode='cloze';else if(/karteikart/.test(t))mode='cards';else if(/\b(feed|wisch|tiktok)\b/.test(t))mode='feed';else if(/(sprech|aussprach|mikro)/.test(t))mode='speak';else if(/(tipp|schreib)/.test(t))mode='type';else if(/(probetest|\btest\b)/.test(t))mode='test';else if(/(multiple|auswahl|quiz)/.test(t))mode='mc';else if(/(anschau|kennenlern|zeig)/.test(t))mode='learn';
  let filter='all';if(/(kniff|schwierig|schwer|fehler|falsch|schwach|unsicher|problem|hakt|nicht gewusst)/.test(t))filter='weak';else if(/(fällig|faellig|wiederhol)/.test(t)&&!/(alle|alles)/.test(t))filter='due';else if(/(\bneue\b|\bneu\b|unbekannt|noch nie)/.test(t))filter='new';
  const exam=/(klausur|prüfung|pruefung|schulaufgabe|vokabeltest|arbeit)/.test(t);
  let dir='mix';if(/(deutsch\s*(zu|nach|auf|ins)\s*englisch|auf englisch|ins englische)/.test(t))dir='de';else if(/(englisch\s*(zu|nach|auf|ins)\s*deutsch|auf deutsch|ins deutsche)/.test(t))dir='en';
  let from=0,to=0,count=0,tail=false;
  let m=/(\d+)\s*(?:bis|-|–)\s*(\d+)/.exec(tt);if(m){from=parseInt(m[1],10);to=parseInt(m[2],10);}
  if(!to){m=/\b(?:ersten|erste|first)\s+([a-zäöüß]+|\d+)/.exec(tt);if(m){const n=/^\d+$/.test(m[1])?parseInt(m[1],10):NUMW[m[1]];if(n)count=n;}}
  if(!to&&!count){m=/\b(?:letzten|letzte)\s+([a-zäöüß]+|\d+)/.exec(tt);if(m){const n=/^\d+$/.test(m[1])?parseInt(m[1],10):NUMW[m[1]];if(n){count=n;tail=true;}}}
  if(!to&&!count){const n=coFirstNum(tt);if(n&&n<=100)count=n;}
  if(list<0){const nm=/\b(?:seite|liste|page|unit|kapitel|nummer|nr)\s*(\d+)\b/.exec(t);if(nm){for(let k=0;k<nb();k++){if(new RegExp('(^| )'+nm[1]+'( |$)').test(coListName(k))){list=k;break;}}}}
  const allw=/(\balle\b|\balles\b|komplett|durchmisch|zufällig|zufaellig|\bmix\b|wiederhol|\büben\b|\bueben\b|\blernen\b|\babfrag|\bfrag\b|vokabeln|wörter|woerter)/.test(t);
  if(list<0&&!mode&&filter==='all'&&!count&&!to&&!exam&&!allw)return {type:'unknown'};
  return {type:'session',mode:mode||'auto',list:list,from:from,to:to,count:count,tail:tail,filter:filter,dir:dir,exam:exam};
}
function coIds(a){
  let base=a.list>=0?range(a.list).filter(isAlive):(focusOn()?focusIds():allIds());
  if(a.exam&&a.list<0){try{const ne=nextExam();if(ne)base=examIds(ne);}catch(e){}}
  if(a.to){base=base.slice(Math.max(0,(a.from||1)-1),a.to);}
  else if(a.count&&!(a.filter!=='all')){base=a.tail?base.slice(-a.count):base.slice(0,a.count);}
  if(a.filter==='weak'){const wk=base.filter(function(id){return (P.wrong[id]||0)>0;});base=wk.length?wk:base.slice().sort(function(x,y){return bAvg(x)-bAvg(y);}).slice(0,15);}
  else if(a.filter==='due')base=dueOf(base,true);
  else if(a.filter==='new')base=base.filter(isNewW);
  if(a.count&&a.filter!=='all')base=a.tail?base.slice(-a.count):base.slice(0,a.count);
  return base.slice(0,60);
}
const CO_MODE={test:'Probetest',blitz:'Blitz',cloze:'Lückentext',auto:'Smart-Training',cards:'Karteikarten',type:'Tippen',mc:'Probetest',feed:'Lern-Feed',speak:'Sprechen',learn:'Lernen'};
function coLabel(a,n){
  let s=n+' Wörter';if(a.list>=0)s+=' · '+bName(a.list);else if(focusOn())s+=' · Mein Fokus';
  if(a.to)s+=' (Nr. '+(a.from||1)+' bis '+a.to+')';else if(a.count&&a.filter==='all')s+=a.tail?' (die letzten)':' (die ersten)';
  if(a.filter==='weak')s+=' · knifflige';else if(a.filter==='due')s+=' · fällige';
  return s+' · '+(CO_MODE[a.mode]||'Üben');
}
function coReport(){const all=allIds();const due=dueOf(all,true);const weak=all.filter(function(id){return (P.wrong[id]||0)>0;});const spl=dueSplit(all);return 'Du hast '+all.length+' Wörter. '+spl.r+' zum Wiederholen, '+spl.n+' neu, '+weak.length+' knifflig. Deine Serie: '+streak()+' Tage.';}
function coValid(a){
  if(!a||typeof a!=='object')return null;
  if(a.type==='session'){const md=['auto','cards','type','mc','feed','speak','learn','test','blitz','cloze'];const fl=['all','weak','due','new'];const dr=['en','de','mix'];
    const n=function(x){x=parseInt(x,10);return (x>0&&x<=200)?x:0;};
    const li=parseInt(a.list,10);return {type:'session',mode:md.indexOf(a.mode)>=0?a.mode:'auto',list:(li>=0&&li<nb())?li:-1,from:n(a.from),to:n(a.to),count:n(a.count),tail:!!a.tail,filter:fl.indexOf(a.filter)>=0?a.filter:'all',dir:dr.indexOf(a.dir)>=0?a.dir:'mix'};}
  if(a.type==='focus'){const ls=Array.isArray(a.lists)?a.lists.map(function(x){return parseInt(x,10);}).filter(function(x){return x>=0&&x<nb();}):[];return {type:'focus',lists:ls};}
  if(a.type==='report'||a.type==='end')return {type:a.type};
  return null;
}
const CO_AIP='Du bist der Lern-Coach der Vokabel-App EasyVocab. Der Nutzer schreibt oder sagt auf Deutsch, was er üben möchte. Antworte NUR mit JSON: {"reply":"kurze freundliche Antwort auf Deutsch, höchstens 2 Sätze","action":null oder {"type":"session","mode":"auto|cards|type|mc|feed|speak|learn","list":Listennummer oder -1,"from":Zahl oder 0,"to":Zahl oder 0,"count":Zahl oder 0,"tail":false,"filter":"all|weak|due","dir":"en|de|mix"} oder {"type":"focus","lists":[Listennummern]} oder {"type":"report"}}. from und to zählen Wörter innerhalb der Liste ab 1. Wenn der Nutzer nur eine Frage zu einem Wort oder zur Sprache hat, antworte in reply und setze action null. Listen: ';
async function coAI(text){
  const lists=[];for(let k=0;k<nb();k++)lists.push(k+' = '+bName(k)+' ('+range(k).length+' Wörter)');
  aiTrack();
  const r=await AI.json(CO_AIP+lists.join('; ')+'\nNutzer: '+String(text).slice(0,300),{modelTier:'quick'});
  return {reply:String((r&&r.reply)||'').slice(0,300),action:coValid(r&&r.action)};
}
async function coResolve(text){
  const loc=coParse(text);const longFree=coNorm(text).split(' ').length>8;
  if(loc.type!=='unknown'&&!(aiOK()&&longFree&&loc.type==='session'))return {reply:null,action:loc};
  if(aiOK()){try{const r=await coAI(text);return r;}catch(e){return {reply:'Die KI ist gerade nicht erreichbar. Versuche es mit einem einfachen Satz, zum Beispiel: „Die ersten 5 Wörter von '+(nb()?bName(0):'meiner Liste')+'“.',action:null};}}
  return {reply:'Das habe ich nicht verstanden. Ohne KI verstehe ich einfache Sätze, zum Beispiel: „Die ersten 5 Wörter von '+(nb()?bName(0):'meiner Liste')+'“, „Nur knifflige Wörter tippen“ oder „Karteikarten“.',action:null};
}
function coPush(r,t,extra){if(!S.coach)S.coach={msgs:[],busy:false,call:null};S.coach.msgs.push(Object.assign({r:r,t:t},extra||{}));if(S.coach.msgs.length>40)S.coach.msgs.shift();}

/* v113: Coach – Erklär's mir, Satz bewerten, Klausur vorbereiten */
function coFindWord(q){
  const x=norm(String(q||'').replace(/^["„“']+|["“”']+$/g,''));if(!x)return null;let best=null;
  allIds().forEach(function(id){if(best!=null)return;const en=norm(W[id][0]);const de=String(W[id][1]).split(';').map(norm).filter(Boolean);if(en===x||de.indexOf(x)>=0)best=id;});
  if(best!=null)return best;
  if(x.length>=5)allIds().forEach(function(id){if(best!=null)return;if(lev(norm(W[id][0]),x)<=1)best=id;});
  return best;
}
function coExplain(q){
  q=String(q||'').trim();
  if(!q)return 'Schreib das Wort dazu, zum Beispiel: „Erklär\'s mir timber“.';
  const id=coFindWord(q);
  if(id==null)return 'Ich finde „'+q+'“ nicht in deiner Liste. Prüfe die Schreibweise, oder füge das Wort mit dem Plus-Knopf hinzu.';
  let t='„'+gEn(id)+'“ heißt „'+gShort(W[id][1])+'“.';
  if(String(W[id][1]).indexOf(';')>=0)t+='\nWeitere Bedeutungen: '+String(W[id][1]).split(';').slice(1).map(function(z){return z.trim();}).join(' · ');
  if(typeof E!=='undefined'&&E[id])t+='\nBeispiel: '+E[id];
  const ff=ffNote(id);if(ff)t+='\n'+ff;
  try{const f=famIds(id);if(f.length)t+='\nÄhnliche Wörter: '+f.map(function(o){return gEn(o);}).join(', ');}catch(e){}
  if(P.memo&&P.memo[id])t+='\nEselsbrücke: '+P.memo[id];
  const w=(P.wrong&&P.wrong[id])||0;if(w>=2)t+='\nDu hattest dieses Wort schon '+w+' Mal falsch. Schreib es einmal mit der Hand auf, das hilft.';
  return t;
}
function coUsed(text){
  const toks=(String(text).toLowerCase().match(/[a-z']+/g)||[]);const out=[];
  allIds().forEach(function(id){if(!isAlive(id)||wlang(id)!=='en')return;const b=gEn(id).toLowerCase().replace(/\(.*?\)/g,'').replace(/^to /,'').trim().split(/\s+/)[0];if(b&&b.length>=4&&toks.some(function(k){return k===b||k.indexOf(b)===0;})&&out.indexOf(gEn(id))<0)out.push(gEn(id));});
  return out.slice(0,6);
}
async function coSentence(text){
  text=String(text||'').trim();
  if(!text)return {reply:'Schreib deinen englischen Satz dazu, zum Beispiel: „Satz bewerten Tim volunteers to help animals“.'};
  const used=coUsed(text);const ul=used.length?'\nLernwörter im Satz: '+used.join(', ')+'. In der Klassenarbeit zählt das („use the new words“).':'\nKein Lernwort aus deiner Liste im Satz. In der Klassenarbeit wird verlangt, die neuen Wörter zu benutzen.';
  if(!aiOK())return {reply:'Die Grammatik kann ich nur mit KI prüfen, und die ist hier noch nicht eingerichtet. Ohne KI kann ich dir sagen, welche deiner Lernwörter im Satz stehen.'+ul};
  try{aiTrack();const r=await AI.json('Ein Schüler (Schulstufe '+((P.prof&&P.prof.grade)||'unbekannt')+') hat diesen englischen Satz geschrieben: "'+text.replace(/"/g,"'").slice(0,240)+'". Bewerte streng wie ein Lehrer. Antworte NUR mit JSON: {"ok":true oder false,"fix":"verbesserte Fassung oder leer","errors":["höchstens 3 kurze Fehlerhinweise auf Deutsch, je höchstens 14 Wörter"],"tip":"ein kurzer Tipp auf Deutsch"}.',{modelTier:'quick'});
    let t=r&&r.ok?'✓ Der Satz passt.':'Da sind Fehler drin.';
    if(r&&r.fix)t+='\nBesser: '+String(r.fix).slice(0,200);
    if(r&&Array.isArray(r.errors)&&r.errors.length)t+='\n'+r.errors.slice(0,3).map(function(e){return '– '+String(e).slice(0,120);}).join('\n');
    if(r&&r.tip)t+='\nTipp: '+String(r.tip).slice(0,140);
    return {reply:t+ul};
  }catch(e){return {reply:aiErr(e&&e.code)+ul};}
}
function coBranch(k,dl){
  const B={w:['Du hast noch Zeit. Wiederhole jeden Tag die fälligen Wörter und lerne ein paar neue dazu. Fang mit den fälligen an.','fällige Wörter üben'],
    t:['Jetzt zählt Sicherheit. Tippe die kniffligen Wörter, genau wie in der Klausur.','knifflige Wörter tippen'],
    d:['Am Tag davor lernst du nichts Neues. Mach einen Probetest und übe danach nur deine Fehler.','Klausur-Test'],
    k:['Kurz davor: ein Probetest zeigt dir die Lücken. Danach nur noch die Fehler, kein Stress mit neuen Wörtern.','Klausur-Test']}[k]||['','fällige Wörter üben'];
  const a=coParse(B[1]);const ids=coIds(a);const pre=dl||'';
  if(!ids.length)return {reply:pre+B[0]};
  return {reply:pre+B[0],extra:{plan:{a:a,ids:ids,label:coLabel(a,ids.length)}}};
}
function coExam(){
  const ne=nextExam();
  if(ne){const n=daysLeft(ne);const k=n>=7?'w':(n>=3?'t':(n>=1?'d':'k'));return coBranch(k,'Deine nächste Klausur „'+(ne.name||'Klausur')+'“ ist '+(n===0?'heute':(n===1?'morgen':'in '+n+' Tagen'))+'.\n');}
  return {reply:'Wann ist deine Klausur?',extra:{opts:[['w','In einer Woche oder mehr'],['t','In ein paar Tagen'],['d','Morgen'],['k','Heute oder gleich']]}};
}
async function coSpecial(text){
  let m;
  if((m=text.match(/^(?:erkl[aä]r(?:e|s|t)?(?:'s)?\s+mir|was hei(?:ß|ss)t|was bedeutet)\s*[:\-]?\s*(.*)$/i)))return {reply:coExplain(m[1])};
  if((m=text.match(/^satz\s+bewerten\s*[:\-]?\s*(.*)$/i)))return await coSentence(m[1]);
  if(/klausur\s+vorbereiten|klassenarbeit|schulaufgabe|wann ist (?:meine |die )?(?:klausur|arbeit)/i.test(text))return coExam();
  return null;
}
async function coSend(text){
  text=String(text||'').trim();if(!text||!S.coach||S.coach.busy)return;
  coPush('u',text);S.coach.busy=true;render(true);coScroll();
  try{const sp=await coSpecial(text);if(sp){S.coach.busy=false;coPush('a',sp.reply,sp.extra);render(true);coScroll();return;}}catch(e){S.coach.busy=false;coPush('a','Das hat nicht geklappt.');render(true);return;}
  let res;try{res=await coResolve(text);}catch(e){res={reply:'Das hat nicht geklappt.',action:null};}
  S.coach.busy=false;coAnswer(res);render(true);coScroll();
}
function coAnswer(res){
  const a=res.action;
  if(!a){coPush('a',res.reply||'Das habe ich nicht verstanden.');return;}
  if(a.type==='report'){coPush('a',res.reply||coReport());return;}
  if(a.type==='focus'){P.focus=a.lists;save();coPush('a',res.reply||(a.lists.length?'Lernfokus gesetzt: '+a.lists.map(function(k){return bName(k);}).join(', ')+'.':'Lernfokus aufgehoben.'));return;}
  if(a.type==='end'){coPush('a',res.reply||'Alles klar. Bis später!');return;}
  const ids=coIds(a);
  if(!ids.length){coPush('a',res.reply||'Dazu finde ich keine Wörter. Probiere eine andere Liste oder einen anderen Filter.');return;}
  coPush('a',res.reply||'Ich habe eine Runde für dich zusammengestellt.',{plan:{a:a,ids:ids,label:coLabel(a,ids.length)}});
}
function coRun(plan){
  const a=plan.a,ids=plan.ids.filter(isAlive);if(!ids.length){toast('Hier sind keine Wörter mehr.');return;}
  usageBump('coach');S.customIds=ids;S.dir=a.dir||'mix';setFrom();
  if(a.mode==='feed'){startFeed('ids');return;}
  if(a.mode==='blitz'){startGame('blitz');return;}
  if(a.mode==='cloze'){startCloze('read');return;}
  if(a.mode==='speak'){if(ids.length<3){toast('Für Sprechen brauche ich mindestens 3 Wörter.');return;}S.coachIds=ids;startSpeak();S.coachIds=null;return;}
  S.b='custom';S.pend=a.mode;
  if(a.mode==='learn'){S.ids=ids;S.screen='learn';S.i=0;S.flip=false;render();return;}
  begin(a.mode,true);
}
function coScroll(){setTimeout(function(){const l=document.getElementById('co-list');if(l)l.scrollTop=l.scrollHeight;window.scrollTo(0,document.body.scrollHeight);const i=document.getElementById('co-in');if(i&&!S.coach.call)i.focus({preventScroll:true});},60);}
function pathBan(){return '<button class="glass gtap feedban" data-act="pathpick"><span class="ico">🛤️</span><span class="tt"><b>Lernpfad</b><small>Schritt für Schritt durch eine Liste</small></span><span class="chev">›</span></button>';}
function coBan(){return '<button class="glass gtap feedban coban" data-act="coach"><span class="ico">🎙️</span><span class="tt"><b>Coach</b><small>Sag oder schreib, was du üben willst</small></span><span class="chev">›</span></button>';}
function coachView(){
  if(!S.coach)S.coach={msgs:[],busy:false,call:null};const c=S.coach;
  if(!c.msgs.length)c.msgs.push({r:'a',t:'Hallo! Sag mir, was du heute üben willst. Zum Beispiel die ersten Wörter einer Liste, nur knifflige Wörter oder eine bestimmte Übung.'+(aiOK()?' Du kannst ganz frei formulieren.':' Ich verstehe einfache Sätze.')});
  const first=nb()?bName(0):'meiner Liste';
  const empty=c.msgs.length<=1&&!c.busy;const pet=P.avatar||'🦜';
  const modes=[['💡',"Erklär's mir"],['✍️','Satz bewerten'],['🃏','Karteikarten'],['📝','Probetest'],['⌨️','Tippen'],['🎤','Sprechen'],['📱','Lern-Feed'],['⚡','Blitz'],['🧩','Lückentext']];
  const ch=[['📆','Fällige Wörter','fällige Wörter üben','#3B82F6'],['🎯','Knifflige Wörter','knifflige Wörter tippen','#F59E0B'],['📝','Klausur','Klausur vorbereiten','#8B5CF6'],['🌱','Neue Wörter','neue Wörter lernen','#22C55E']];
  let h='<div class="cowrap'+(empty?' empty':'')+'"><button class="callpill" data-act="callstart" aria-label="Coach anrufen"><span>📞</span> Anrufen</button><div class="col-chat" id="co-list">';
  if(empty){
    h+='<div class="comascot"><div class="copeek" aria-hidden="true">'+pet+'</div><div class="cobubble">Was möchtest du heute üben'+(P.nick?', '+esc(P.nick):'')+'?</div>';
    h+='<div class="cochoices">'+ch.map(function(x){return '<button class="cochoice" data-act="cochip" data-v="'+esc(x[2])+'"><span class="cocic" style="background:'+x[3]+'33;border-color:'+x[3]+'">'+x[0]+'</span><span>'+x[1]+'</span></button>';}).join('')+'</div>';
    h+='<button class="copill" data-act="cochip" data-v="'+esc('Wörter zufällig abfragen')+'">Einfach loslegen</button></div>';
  }else{
    c.msgs.forEach(function(m,i){
      if(m.r==='u')h+='<div class="cob me">'+esc(m.t)+'</div>';
      else h+='<div class="corow"><span class="coav" aria-hidden="true">'+pet+'</span><div class="cob ai">'+esc(m.t).replace(/\n/g,'<br>')+(m.opts?'<div class="coopts">'+m.opts.map(function(o){return '<button class="coopt" data-act="coexam" data-i="'+i+'" data-v="'+o[0]+'">'+esc(o[1])+'</button>';}).join('')+'</div>':'')+(m.plan?'<div class="coplan"><b>'+esc(m.plan.label)+'</b><button class="btn pri sm" data-act="corun" data-i="'+i+'">Starten</button></div>':'')+'</div></div>';
    });
    if(c.busy)h+='<div class="corow"><span class="coav" aria-hidden="true">'+pet+'</span><div class="cob ai"><span class="dots3"><i></i><i></i><i></i></span></div></div>';
  }
  h+='</div>';
  h+='<div class="comodes">'+modes.map(function(x){return '<button class="comode'+(c.tag===x[1]?' on':'')+'" data-act="cotag" data-v="'+esc(x[1])+'"><span>'+x[0]+'</span>'+esc(x[1])+'</button>';}).join('')+'</div>';
  h+='<div class="cocompw"><button class="coplus" data-act="toadd" aria-label="Wörter hinzufügen"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button><div class="cocomp">'+(c.tag?'<div class="cotagrow"><span class="cotagc">'+esc(c.tag)+'<button data-act="cotagx" aria-label="Entfernen">✕</button></span></div>':'')+'<div class="cocrow"><input id="co-in" type="text" placeholder="Frag deinen Coach …" aria-label="Nachricht an den Coach" autocomplete="off"><button class="cobtn" data-act="toadd" aria-label="Foto scannen"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 8a2 2 0 012-2h2l1.5-2h5L16 6h2a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="12.5" r="3.2" stroke="currentColor" stroke-width="2"/></svg></button><button class="cobtn" data-act="comic" aria-label="Sprechen"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3" stroke="currentColor" stroke-width="2"/><path d="M5 11a7 7 0 0014 0M12 18v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button><button class="cobtn pri" data-act="cosend" aria-label="Senden"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div></div></div></div>';
  return h;
}
/* ---- Sprache ---- */
function srCls(){return window.SpeechRecognition||window.webkitSpeechRecognition;}
function deSpeak(t){return String(t).replace(/jmdn\./g,'jemanden').replace(/jmdm\./g,'jemandem').replace(/jmds\./g,'jemandes').replace(/etw\./g,'etwas').replace(/\//g,' oder ').replace(/\([^)]*\)/g,' ').replace(/\s+/g,' ').trim();}
function speakDe(text,cb){text=deSpeak(text);
  let done=false;const fin=function(){if(done)return;done=true;try{cb&&cb();}catch(e){}};
  if(!canSpeak){setTimeout(fin,50);return;}
  try{
    speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(String(text));const v=pickVoice('de-DE');if(v){u.voice=v;u.lang=v.lang;}else u.lang='de-DE';u.rate=1;
    u.onend=fin;u.onerror=fin;speechSynthesis.speak(u);if(speechSynthesis.paused)speechSynthesis.resume();
    setTimeout(fin,Math.min(20000,String(text).length*95+2500));
  }catch(e){setTimeout(fin,50);}
}
function micMsg(er){
  if(er==='not-allowed')return 'Das Mikrofon ist blockiert. Öffne am iPad: Einstellungen › Safari › Mikrofon › Erlauben. Dann diese Seite neu laden.';
  if(er==='service-not-allowed')return 'Die Spracherkennung ist aus. Schalte am iPad ein: Einstellungen › Allgemein › Tastatur › Diktierfunktion. Danach neu laden.';
  if(er==='audio-capture')return 'Ich finde kein Mikrofon. Prüfe, ob eine andere App es gerade nutzt.';
  if(er==='network')return 'Die Spracherkennung braucht Internet.';
  if(er==='language-not-supported')return 'Diese Sprache wird auf deinem Gerät nicht erkannt.';
  if(er==='unsupported')return 'Dieser Browser kann nicht zuhören. Öffne EasyVocab in Safari.';
  if(er==='aborted')return '';
  return 'Ich habe nichts gehört. Sprich nach dem Tippen sofort los, nah am Mikrofon. Oder tippe die Antwort unten.';
}
function speechOK(alts,sol){
  const tg=String(sol).split(';').map(norm).filter(Boolean);
  return alts.some(function(a){if(check(a,sol))return true;const x=norm(a);if(!x)return false;return tg.some(function(t){const tol=Math.max(1,Math.floor(Math.max(t.length,x.length)/4));return lev(x,t)<=tol||(' '+x+' ').indexOf(' '+t+' ')>=0;});});
}
function listenOnce(lang,cb){
  const SR=srCls();if(!SR){cb('unsupported',[]);return null;}
  let got=false,last=[],tm=null;
  const fin=function(er,al){if(got)return;got=true;clearTimeout(tm);cb(er,al);};
  try{
    try{speechSynthesis.cancel();}catch(e){}
    const r=new SR();r.lang=lang;r.interimResults=true;r.maxAlternatives=5;r.continuous=false;
    r.onresult=function(ev){const res=ev.results[ev.results.length-1];const alts=[];try{for(let k=0;k<res.length;k++)alts.push(res[k].transcript);}catch(e){}if(alts.length)last=alts;if(res.isFinal)fin(null,alts);};
    r.onerror=function(ev){const er=(ev&&ev.error)||'error';if(last.length&&er!=='not-allowed'&&er!=='service-not-allowed'){fin(null,last);return;}fin(er,[]);};
    r.onend=function(){if(last.length)fin(null,last);else fin('no-speech',[]);};
    r.start();tm=setTimeout(function(){try{r.stop();}catch(e){}},9000);return r;
  }catch(e){fin('error',[]);return null;}
}
function coMic(){
  if(!srCls()){toast('Dein Browser kann hier nicht zuhören. Öffne EasyVocab in Safari.');return;}
  S.coach.rec=listenOnce('de-DE',function(err,alts){S.coach.rec=null;if(err||!alts.length){toast(micMsg(err)||'Abgebrochen.');return;}coSend(alts[0]);});
  toast('Ich höre zu …');
}
/* ---- Anruf ---- */
function callStart(){
  if(!S.coach)S.coach={msgs:[],busy:false,call:null};
  S.coach.call={on:true,st:'idle',say:'',heard:'',drill:null,n:0};setFrom();S.screen='call';render();
  usageBump('call');
  callSay('Hallo, hier ist dein Coach. Was möchtest du üben?',function(){callListen('de-DE');});
}
function callEnd(){const c=S.coach&&S.coach.call;if(c){c.on=false;try{c.rec&&c.rec.abort&&c.rec.abort();}catch(e){}}try{speechSynthesis.cancel();}catch(e){}S.screen='coach';render();}
function callSet(st,say){const c=S.coach.call;if(!c)return;c.st=st;if(say!=null)c.say=say;if(S.screen==='call')render(true);}
function callSay(t,cb){const c=S.coach.call;if(!c||!c.on)return;callSet('speak',t);speakDe(t,function(){if(c.on)setTimeout(function(){if(c.on)cb&&cb();},450);});}
function callListen(lang){
  const c=S.coach.call;if(!c||!c.on)return;
  if(!srCls()){callSet('idle','Dein Browser kann nicht zuhören. Tippe unten, was du sagen möchtest.');return;}
  callSet('listen');
  c.rec=listenOnce(lang,function(err,alts){c.rec=null;if(!c.on)return;
    if(err||!alts.length){callSet('idle',micMsg(err)||'Tippe auf das Mikrofon.');return;}
    callHandle(alts);});
}
function callMicTap(){const c=S.coach.call;if(!c||!c.on)return;if(c.st==='listen'){try{c.rec&&c.rec.stop();}catch(e){}return;}try{speechSynthesis.cancel();}catch(e){}callListen(c.drill?c.drill.lang:'de-DE');}
function callType(){const i=document.getElementById('call-in');if(!i||!i.value.trim())return;const v=i.value.trim();i.value='';callHandle([v]);}
async function callHandle(alts){
  const c=S.coach.call;if(!c||!c.on)return;c.heard=alts[0];callSet('think');
  if(c.drill){callDrillAnswer(alts);return;}
  const res=await coResolve(alts[0]);const a=res.action;
  if(!a){callSay(res.reply||'Das habe ich nicht verstanden. Sag zum Beispiel: die ersten fünf Wörter.',function(){callListen('de-DE');});return;}
  if(a.type==='end'){callSay('Alles klar. Bis später!',function(){callEnd();});return;}
  if(a.type==='report'){callSay(res.reply||coReport(),function(){callListen('de-DE');});return;}
  if(a.type==='focus'){P.focus=a.lists;save();callSay(res.reply||(a.lists.length?'Fokus gesetzt.':'Fokus aufgehoben.'),function(){callListen('de-DE');});return;}
  const ids=coIds(a);if(!ids.length){callSay('Dazu finde ich keine Wörter. Sag es anders.',function(){callListen('de-DE');});return;}
  callDrillStart(ids,a,res.reply);
}
function callDrillStart(ids,a,pre){
  const c=S.coach.call;const order=shuffle(ids).slice(0,12);
  c.drill={ids:order,i:0,ok:0,no:0,dir:a.dir||'mix',lang:'en-GB',cur:null,tries:0};
  callSay((pre?pre+' ':'')+'Wir üben '+order.length+' Wörter. Sag „weiß nicht“, wenn du es nicht weißt, und „Stopp“ zum Beenden. Los geht’s.',function(){callAsk();});
}
function callAsk(){
  const c=S.coach.call;const d=c.drill;if(!c.on||!d)return;
  if(d.i>=d.ids.length){const msg='Geschafft. '+d.ok+' von '+d.ids.length+' richtig.'+(d.no?' Die schwierigen Wörter kommen bald wieder.':' Super!')+' Was möchtest du als Nächstes üben?';c.drill=null;callSay(msg,function(){callListen('de-DE');});return;}
  const id=d.ids[d.i];const toEn=d.dir==='de'||(d.dir==='mix'&&Math.random()<0.5);d.cur={id:id,toEn:toEn};d.lang=toEn?'en-GB':'de-DE';
  const q=toEn?'Wie heißt „'+W[id][1].split(';')[0].trim()+'“ auf Englisch?':'Was bedeutet „'+W[id][0].replace(/sb\/sth/g,'etwas').replace(/\bsth\b/g,'etwas').replace(/\bsb\b/g,'jemand')+'“?';
  if(toEn)callSay(q,function(){callListen('en-GB');});
  else{callSet('speak',q);try{speak(id,true);}catch(e){}setTimeout(function(){if(c.on)callSay('Was bedeutet das?',function(){callListen('de-DE');});},1400);}
}
function callDrillAnswer(alts){
  const c=S.coach.call;const d=c.drill;const cur=d.cur;const id=cur.id;const t=coNorm(alts[0]);
  if(/\b(stopp|stop|ende|aufhören|aufhoeren|schluss)\b/.test(t)){c.drill=null;callSay('Okay, wir hören auf. '+d.ok+' richtig. Was möchtest du jetzt tun?',function(){callListen('de-DE');});return;}
  const skip=/(weiß nicht|weiss nicht|keine ahnung|überspringen|ueberspringen|nächste|naechste)/.test(t);
  let ok=false;
  if(!skip){const sol=cur.toEn?W[id][0]:W[id][1];ok=speechOK(alts,sol);}
  sfx(ok?'ok':'no');
  learnCredit(id,ok,cur.toEn?'de':'en','type');d.i++;if(ok)d.ok++;else d.no++;
  const ans=cur.toEn?W[id][0]:W[id][1].split(';')[0].trim();
  const fb=ok?['Richtig!','Genau!','Stimmt!','Sehr gut!'][d.i%4]:(skip?'Kein Problem. ':'Fast. ')+'Es heißt: '+ans.replace(/sb\/sth/g,'etwas').replace(/\bsth\b/g,'etwas').replace(/\bsb\b/g,'jemand');
  S.coach.call.heard=alts[0];
  callSay(fb,function(){if(!ok&&cur.toEn){try{speak(id,true);}catch(e){}setTimeout(function(){callAsk();},1600);}else callAsk();});
}
function callView(){
  const c=S.coach&&S.coach.call;if(!c)return '<div class="glass pad w center">Kein Anruf.</div>';
  const st={idle:'Tippe auf das Mikrofon',listen:'Ich höre zu …',think:'Einen Moment …',speak:'Coach spricht'}[c.st]||'';
  let h='<div class="callw"><div class="orb '+c.st+'" aria-hidden="true"><i></i><i></i><i></i><span>'+(c.st==='listen'?'🎙️':(c.st==='speak'?'🔊':'🧑‍🏫'))+'</span></div><div class="callst">'+st+'</div>';
  h+='<div class="glass pad w col tight callbox"><div class="hint">Coach</div><div class="callsay">'+esc(c.say||'')+'</div>'+(c.drill&&c.drill.cur?'<div class="callword">'+esc(callWord(c.drill.cur))+'</div>':'')+(c.heard?'<div class="hint" style="margin-top:6px">Du: '+esc(c.heard)+'</div>':'')+(c.drill?'<div class="prog thin"><i style="width:'+Math.round(c.drill.i/c.drill.ids.length*100)+'%"></i></div><div class="hint">Wort '+Math.min(c.drill.i+1,c.drill.ids.length)+' von '+c.drill.ids.length+' · '+c.drill.ok+' richtig</div>':'')+'</div>';
  h+='<div class="coin"><input id="call-in" class="in" type="text" placeholder="oder tippe hier" aria-label="Antwort tippen" autocomplete="off"><button class="btn sm" data-act="calltype">Senden</button></div>';
  h+='<div class="callbar"><button class="callmic" data-act="callmic" aria-label="Mikrofon">'+(c.st==='listen'?'■':'🎤')+'</button><button class="callend" data-act="callend" aria-label="Auflegen">📵</button></div></div>';
  return h;
}


/* ===== v86: Neu/Wiederholung, Pausen-Runde, Klausur-Test, Prognose ===== */
function isNewW(id){return bx(id,'en')===0&&bx(id,'de')===0&&!P.due[kk(id,'en')]&&!P.due[kk(id,'de')];}
function dueSplit(ids){let n=0,r=0;ids.forEach(function(id){if(isNewW(id))n++;else if(dueAny(id))r++;});return {n:n,r:r};}
function fmtMS(ms){ms=Math.max(0,Math.round(ms/1000));return Math.floor(ms/60)+':'+String(ms%60).padStart(2,'0');}
function minsFor(n){return Math.max(1,Math.round(n*(P.avgSec||8)/60));}
/* Prognose */
function histRate(){
  const ks=Object.keys(P.hist||{}).sort();if(ks.length<2)return null;
  const use=ks.slice(-14);const a=use[0],b=use[use.length-1];
  const days=Math.max(1,Math.round((new Date(b)-new Date(a))/864e5));
  const gain=(P.hist[b]||0)-(P.hist[a]||0);
  return {perDay:Math.max(0,gain/days),days:days};
}
function forecastCard(){
  const sp=securePairs();const tot=Math.max(1,sp[1]);const nowPct=Math.round(sp[0]/tot*100);
  const r=histRate();const ne=nextExam();
  let txt,proj=null,cap='';
  if(!r||r.days<1){txt='Lerne ein paar Tage, dann sage ich dir, wie viele Wörter bis zur Klausur sicher sind.';}
  else{
    const horizon=ne?Math.max(1,daysLeft(ne)):14;
    const ids=ne?examIds(ne):allIds();const nPairs=Math.max(1,ids.length*2);
    const cur=Math.round(secureShare(ids));
    const add=Math.min(100-cur,Math.round(r.perDay*horizon/nPairs*100));
    proj=Math.min(100,cur+add);
    const need=Math.max(0,Math.ceil((0.9*nPairs-cur/100*nPairs)/horizon));
    cap=ne?esc(ne.name)+' in '+horizon+' '+(horizon===1?'Tag':'Tagen'):'in 14 Tagen';
    txt='Bei deinem Tempo (etwa '+(Math.round(r.perDay*10)/10)+' neue sichere Paare pro Tag) sind '+cap+' ungefähr '+proj+' % sicher. Jetzt: '+cur+' %.'+(proj<90?' Für 90 % brauchst du ca. '+need+' pro Tag.':' Das reicht.');
  }
  let h='<div class="glass pad w col tight fcast"><div class="hd2"><span class="lab">Prognose</span><span class="hint">'+nowPct+' % deiner Paare sicher</span></div><p style="margin:0">'+txt+'</p>';
  if(proj!==null)h+='<div class="fbarw"><i class="fnow" style="width:'+Math.round(secureShare(ne?examIds(ne):allIds()))+'%"></i><i class="fprj" style="width:'+proj+'%"></i></div>';
  return h+'</div>';
}
/* Pausen-Runde */
function pauseStart(){
  const all=allIds().filter(function(id){return isAlive(id);});
  const pool=focusOn()?focusIds():all;
  const rev=shuffle(pool.filter(function(id){return !isNewW(id)&&dueAny(id);}));
  const weak=shuffle(pool.filter(function(id){return (P.wrong[id]||0)>0;}));
  const neu=shuffle(pool.filter(isNewW));
  const seen={},ids=[];[].concat(rev,weak,neu).forEach(function(id){if(!seen[id]&&ids.length<8){seen[id]=1;ids.push(id);}});
  if(ids.length<3){toast('Dafür gibt es noch zu wenige Wörter.');return;}
  usageBump('pause');S.customIds=ids;S.b='custom';S.dir='mix';setFrom();begin('auto',true);
  if(Q&&S.screen==='quiz'){Q.pause=true;Q.pauseEnd=Date.now()+180000;qTimerStart();render(true);}
}
/* Klausur-Test */
function simStart(examId){
  let ids,ex=null;
  if(examId){ex=examById(examId);ids=ex?examIds(ex):[];}
  else{const ne=nextExam();if(ne){ex=ne;ids=examIds(ne);}else ids=focusOn()?focusIds():allIds();}
  ids=pickCover(shuffle(ids.filter(isAlive)),40);
  if(ids.length<5){toast('Für einen Klausur-Test brauche ich mindestens 5 Wörter.');return;}
  usageBump('sim');S.customIds=ids;S.b='custom';S.dir='mix';setFrom();begin('test',true);
  if(Q&&S.screen==='quiz'){Q.sim=true;Q.simExam=ex?ex.name:'';Q.simStart=Date.now();Q.simEnd=Date.now()+ids.length*(P.examSec||20)*1000;qTimerStart();render(true);}
}
function qTimerStart(){
  const q=Q;if(!q)return;clearInterval(q.tmr);
  q.tmr=setInterval(function(){
    if(Q!==q||S.screen!=='quiz'){if(Q!==q||S.screen!=='quiz'&&S.screen!=='result')clearInterval(q.tmr);return;}
    const end=q.sim?q.simEnd:q.pauseEnd;const left=end-Date.now();
    const el=document.getElementById('pz');if(el)el.textContent=fmtMS(left);
    if(left<=0){clearInterval(q.tmr);qTimeUp(q);}
  },500);
}
function qTimeUp(q){
  if(Q!==q||!q.queue)return;
  if(q.sim){q.queue.forEach(function(id,i){q.log.push({id:id,d:q.d||'en',val:'',ok:false});q.missed.add(id);});q.queue=[];simSave(q);P.run=null;save();S.screen='result';render();toast('Zeit abgelaufen. Offene Wörter zählen als falsch.');return;}
  if(q.pause){q.queue=[q.queue[0]];q.ok=true;q.answered=true;toast('3 Minuten sind um.');cont();}
}
function simSave(q){
  try{const c=testPts(q);const p=Math.round(c/Math.max(1,q.total)*100);
    if(!Array.isArray(P.sims))P.sims=[];if(q.simDone)return;q.simDone=true;P.sims.push({d:fmt(new Date()),p:p,n:grade(p),exam:q.simExam||''});P.sims=P.sims.slice(-12);save();}catch(e){}
}
function simKey(){return '92 % = 1 · 81 % = 2 · 67 % = 3 · 50 % = 4 · 30 % = 5';}
/* Heute: Aktionen und Mehr */
function homeActs(){return '<div class="homeacts w"><button class="glass gtap hact" data-act="pause"><span>⏱️</span><b>Pausen-Runde</b><small>3 Minuten</small></button><button class="glass gtap hact" data-act="coach"><span>🎙️</span><b>Coach</b><small>Sag, was du willst</small></button><button class="glass gtap hact" data-act="simstart"><span>📝</span><b>Klausur-Test</b><small>mit Note</small></button></div>';}
function moreBlock(more){
  if(!more)return '';const open=!!P.homeMore;
  return '<button class="glass gtap lrow morebtn'+(open?' open':'')+'" data-act="homemore" aria-expanded="'+open+'"><span class="li">'+(open?'➖':'➕')+'</span><span class="lt"><b>'+(open?'Weniger anzeigen':'Mehr von heute')+'</b><small>'+(open?'Klappt die Karten zu':'Wort des Tages, Abzeichen, Haustier und mehr')+'</small></span><span class="chev">'+(open?'⌃':'⌄')+'</span></button>'+(open?more:'');
}

function applyResult(id,d,ok,m,hinted){
  try{if(isNewW(id)){const t0=fmt(new Date());P.nd=P.nd||{};P.nd[t0]=P.nd[t0]||[];if(P.nd[t0].indexOf(id)<0)P.nd[t0].push(id);Object.keys(P.nd).forEach(function(k){if(k<fmt(new Date(Date.now()-864e6)))delete P.nd[k];});}}catch(e){}
  const key=kk(id,d);const b=P.box[key]||0;const today=fmt(new Date());const wasDue=!!(P.due[key]&&P.due[key]<=today);const q=qTouch();
  const st0=fsGet(key,b);if(st0&&wasDue&&!hinted){try{calNote(fsR(Math.max(0,(Date.now()-st0.l)/864e5),st0.s),ok);}catch(e){}}try{hrNote(ok);}catch(e){}const g=!ok?1:((hinted||m==='mc')?2:3);const nst=fsNext(st0,g,Date.now());
  if(!P.fs)P.fs={};P.fs[key]=[Math.round(nst.s*100)/100,Math.round(nst.d*100)/100,nst.l];
  if(ok&&hinted){P.box[key]=Math.max(b,1);P.due[key]=addDays(1);}
  else if(ok){const cap=CAP[m]||5;const nb2=Math.max(b,Math.min(cap,Math.max(1,b)+1));P.box[key]=nb2;P.due[key]=addDays(fsInterval(nst.s,id));}
  else{P.box[key]=1;P.due[key]=addDays(0);P.wrong[id]=(P.wrong[id]||0)+1;if(!P.wd)P.wd={};P.wd[id]=Date.now();}
  if(ok){q.ok++;if(wasDue)q.rev++;if(b===0)q.nw++;}
}
function dueText(id,d){const v=P.due[kk(id,d)];if(!v)return '';const n=Math.round((new Date(v)-new Date(fmt(new Date())))/864e5);return n<=0?'heute':(n===1?'morgen':'in '+n+' Tagen');}
function markGood(id){const t=fmt(new Date());const a=P.gd[t]||[];if(a.indexOf(id)<0)a.push(id);P.gd[t]=a;}
function dayCount(){return (P.gd[fmt(new Date())]||[]).length;}
function bump(){const t=fmt(new Date());P.days[t]=(P.days[t]||0)+1;}
function updHist(){P.hist[fmt(new Date())]=securePairs()[0];}
function dayValid(k){return P.days[k]>0&&(k<(P.strictFrom||'0000')||(P.gd[k]||[]).length>=STREAK_MIN);}
function streak(){let n=0;const d=new Date();if(!dayValid(fmt(d)))d.setDate(d.getDate()-1);
  for(let g=0;g<4000;g++){const k=fmt(d);const wk=d.getDay()===0||d.getDay()===6;
    if(dayValid(k))n++;else if(P.frozen&&P.frozen[k]){}else if(P.wkJ!==false&&wk){}else break;
    d.setDate(d.getDate()-1);}
  return n;}
function autoFreeze(){
  if(!(P.freeze>0))return;const y=new Date();y.setDate(y.getDate()-1);const y2=new Date();y2.setDate(y2.getDate()-2);
  const ky=fmt(y),ky2=fmt(y2);
  if(P.days[fmt(new Date())]>0||P.days[ky]>0||(P.frozen&&P.frozen[ky]))return;
  if(!(P.days[ky2]>0||(P.frozen&&P.frozen[ky2])))return;
  P.frozen[ky]=true;P.freeze--;save();setTimeout(function(){toast('Eisschutz aktiviert: Deine Serie ist eingefroren ❄️');snow();},400);
}
function bestStreak(){const ks=Object.keys(P.days).filter(function(k){return P.days[k]>0;}).sort();let best=0,cur=0,prev=null;ks.forEach(function(k){const t=new Date(k).getTime();cur=(prev!==null&&Math.round((t-prev)/864e5)===1)?cur+1:1;if(cur>best)best=cur;prev=t;});return best;}
function daysLeft(e){return Math.round((new Date(e.date)-new Date(fmt(new Date())))/864e5);}
function nextExam(){const l=P.exams.filter(function(e){return daysLeft(e)>=0;}).sort(function(a,b){return daysLeft(a)-daysLeft(b);});return l[0]||null;}
function dateDe(s){try{return new Date(s).toLocaleDateString('de-DE',{weekday:'short',day:'numeric',month:'long',timeZone:'UTC'});}catch(e){return s;}}
function inDays(n){return n<=0?'heute':(n===1?'morgen':'in '+n+' Tagen');}
let S={screen:isOnboarded()?'menu':'onb',dir:'en',b:'all',examId:null,pend:'auto',i:0,flip:false,mode:'auto',free:false,confirmReset:false,q:'',adv:false,wmode:'blocks',add:{mode:'paste',name:'',lang:'en',busy:false,found:null,err:'',file:null},confirmList:-1,from:'menu',prevTab:'menu',paste:false,bk:'',anim:'',form:{name:'',date:'',sel:null},formErr:'',addErr:''};
let Q=null;
function toast(msg){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.setAttribute('role','status');document.body.appendChild(t);}t.textContent=msg;t.className='toast show';clearTimeout(toast.h);toast.h=setTimeout(function(){t.className='toast';},2200);}
function eff(){if(S.screen==='quiz'&&Q)return Q.d;if(S.dir==='mix')return S.i%2===0?'en':'de';return S.dir;}
function pr(id){return eff()==='en'?W[id][0]:W[id][1];}
function an(id){return eff()==='en'?W[id][1]:W[id][0];}
function lang(id){return eff()==='en'?LNAME[wlang(id)]:'Deutsch';}
function canSpeakW(id){return canSpeak&&wlang(id)!=='la';}
const canSpeak=('speechSynthesis' in window);
let VOICES=[];
function loadVoices(){try{VOICES=speechSynthesis.getVoices()||[];}catch(e){}}
if(canSpeak){loadVoices();try{speechSynthesis.addEventListener('voiceschanged',loadVoices);}catch(e){}}
function voiceScore(x){const n=(x.name||'').toLowerCase();let sc=0;if(/premium/.test(n))sc+=60;if(/enhanced|erweitert|optimiert/.test(n))sc+=40;if(/siri/.test(n))sc+=50;if(/natural|neural/.test(n))sc+=45;if(/daniel|serena|kate|oliver|thomas|amélie|amelie|anna|marie|aurélie|aurelie|martin|flo|jamie|arthur/.test(n))sc+=15;if(/eloquence|grandma|grandpa|rocko|shelley|sandy|reed|eddy|flo\b|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|albert|fred|junior|kathy|ralph|princess|hysterical|deranged/.test(n)&&!/siri/.test(n))sc-=80;if(x.localService)sc+=5;return sc;}
function pickVoice(l){const pre=l.slice(0,2).toLowerCase();const nl=function(x){return x.lang.toLowerCase().replace('_','-');};const v=VOICES.filter(function(x){return nl(x).indexOf(pre)===0;});if(!v.length)return null;const exact=v.filter(function(x){return nl(x)===l.toLowerCase();});const pool=exact.length?exact:v;return pool.slice().sort(function(a,b){return voiceScore(b)-voiceScore(a);})[0];}
function speak(id,quiet){
  if(!canSpeak){if(!quiet)toast('Vorlesen wird auf diesem Gerät nicht unterstützt.');return;}
  try{
    const t=W[id][0].replace(/\(AE\)/g,'').replace(/sb\/sth/g,'something').replace(/\bsb\b/g,'somebody').replace(/\bsth\b/g,'something');
    const wl=wlang(id);const SL={en:'en-GB',fr:'fr-FR'};if(!SL[wl]){if(!quiet)toast('Latein kann nicht vorgelesen werden.');return;}
    const u=new SpeechSynthesisUtterance(t);const v=pickVoice(SL[wl]);
    if(v){u.voice=v;u.lang=v.lang;}else u.lang=SL[wl];
    u.rate=0.85;u.pitch=1;let started=false;
    u.onstart=function(){started=true;};
    u.onerror=function(ev){if(!quiet&&ev&&ev.error&&ev.error!=='interrupted'&&ev.error!=='canceled')toast('Vorlesen ist hier blockiert ('+ev.error+').');};
    if(speechSynthesis.speaking||speechSynthesis.pending)speechSynthesis.cancel();
    speechSynthesis.speak(u);
    if(speechSynthesis.paused)speechSynthesis.resume();
    if(!quiet)setTimeout(function(){if(!started)toast('Kein Ton? Prüfe Stumm-Schalter und Lautstärke. Vorlesen kann in der App blockiert sein.');},1800);
  }catch(e){if(!quiet)toast('Vorlesen ist auf diesem Gerät nicht möglich.');}
}
function maybeSpeak(){if(P.speak&&Q&&Q.queue.length&&(Q.d==='en'||Q.m==='intro'))speak(Q.queue[0],true);}
function norm(s){
  s=s.toLowerCase().replace(/\([^)]*\)/g,' ').replace(/jmdn\.|jmdm\.|jmds\.|etw\./g,' ').replace(/\b(sb|sth|smb|smth|smbd|sbd|somebody|something|someone|somebodys|sbs|one's|ones|oneself|yourself|jmd|jmdn|jmdm|jmds|etw)(?:'s)?\b/g,' ');
  s=s.replace(/[\/.,;!?'"\-]/g,' ').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ß/g,'ss').replace(/ae/g,'a').replace(/oe/g,'o').replace(/ue/g,'u');
  return s.replace(/\s+/g,' ').trim().replace(/^((to|tu|sich|be) )+/,'');
}
function lev(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=[];for(let j=0;j<=n;j++)p[j]=j;for(let i=1;i<=m;i++){let c=[i];for(let j=1;j<=n;j++){c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));}p=c;}return p[n];}
function diffSol(sol,val){
  const alts=sol.split(';').map(function(a){return a.trim();}).filter(Boolean);if(!alts.length)return esc(sol);
  const v=norm(val);let best=alts[0],bd=1e9;alts.forEach(function(a){const d=lev(v,norm(a));if(d<bd){bd=d;best=a;}});
  const a=best.toLowerCase(),b=(val||'').toLowerCase().trim();const m=a.length,n=b.length;
  if(m>40||n>40)return esc(best);
  const dp=[];for(let i=0;i<=m;i++){dp.push(new Array(n+1).fill(0));}
  for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);
  const keep=new Array(m).fill(false);let i=m,j=n;while(i>0&&j>0){if(a[i-1]===b[j-1]){keep[i-1]=true;i--;j--;}else if(dp[i-1][j]>=dp[i][j-1])i--;else j--;}
  let h='';for(let k=0;k<m;k++){const c=esc(best.charAt(k));h+=keep[k]?c:'<mark class="dm">'+c+'</mark>';}
  return h+(alts.length>1?' <span class="hint">('+esc(sol)+')</span>':'');
}
function sameBag(a,b){const p=a.split(' '),q=b.split(' ');if(p.length<2||p.length!==q.length)return false;return p.slice().sort().join(' ')===q.slice().sort().join(' ');}
var STOPW={the:1,and:1,for:1,with:1,from:1,that:1,this:1,der:1,die:1,das:1,ein:1,eine:1,und:1,sich:1,his:1,her:1,its:1};
function sigT(t){const o=[];t.split(' ').forEach(function(w){if(w.length>2&&!STOPW[w]&&o.indexOf(w)<0)o.push(w);});return o;}
function partialM(input,full){
  const x=norm(input);if(!x)return false;const xt=sigT(x);if(!xt.length)return false;
  return full.split(';').map(norm).filter(Boolean).some(function(t){
    const tt=sigT(t);if(!tt.length)return false;
    const sh=xt.filter(function(w){return tt.indexOf(w)>=0;}).length;
    if(tt.length===1)return sh===1&&xt.length<=3;
    if(sh>=2)return sh/tt.length>=0.5&&sh/xt.length>=0.5;
    return sh===1&&tt.length<=3&&sh/tt.length>=0.5&&sh/xt.length>=0.5&&xt.filter(function(w){return tt.indexOf(w)>=0&&w.length>=4;}).length>=1;
  });
}
function synOK(val,id,d){
  if(!val||!val.trim())return 0;const qs=function(o){return String(d==='en'?W[o][0]:W[o][1]).split(';').map(norm).filter(Boolean);};
  const q0=qs(id);if(!q0.length)return 0;const all=allIds();
  for(let k=0;k<all.length;k++){const o=all[k];if(o===id)continue;const q1=qs(o);if(!q1.some(function(t){return q0.indexOf(t)>=0;}))continue;if(check(val,d==='en'?W[o][1]:W[o][0]))return o+1;}
  return 0;
}
function altKey(id,d){return id+'|'+d;}
function altHit(id,d,v){const a=P.alt&&P.alt[altKey(id,d)];return !!(a&&a.length&&a.indexOf(norm(v))>=0);}
function check(input,full){
  const x=norm(input);if(!x)return false;
  const alts=full.split(';').map(norm).filter(Boolean);alts.push(norm(full));
  const noArt=function(t){return t.replace(/^(der|die|das|le|la|les|un|une|l)\s+(?=\S)/,'');};
  if(!/^(der|die|das|le|la|les|un|une|l)\s/.test(x))alts.slice().forEach(function(t){const u=noArt(t);if(u&&u!==t)alts.push(u);});
  for(let k=0;k<alts.length;k++){const t=alts[k];if(x===t)return true;if(sameBag(x,t))return true;const tol=t.length>=10?2:(t.length>=5?1:0);if(tol&&lev(x,t)<=tol)return true;}
  return false;
}
function leaveMsg(){
  if(S.screen==='quiz'&&Q&&Q.queue&&Q.queue.length&&Q.seen&&Q.seen.size>0){return Q.test?['Test abbrechen?','Dein Ergebnis geht verloren. Du kannst den Test danach neu starten.']:['Runde verlassen?','Dein Fortschritt bleibt gespeichert. Du kannst die Runde später auf Heute fortsetzen.'];}
  if(S.screen==='game'&&S.game&&!S.game.over){const g=S.game;if(g.type==='blitz'&&g.t<60)return ['Blitz beenden?','Dein Stand in dieser Runde geht verloren.'];if(g.type==='mem'&&g.moves>0)return ['Memory beenden?','Dein Stand in diesem Spiel geht verloren.'];}
  if(S.screen==='game'&&S.game&&!S.game.over&&!(S.game.type==='blitz'||S.game.type==='mem')&&(S.game.score>0||S.game.moves>0||S.game.i>0))return ['Spiel beenden?','Dein Stand in diesem Spiel geht verloren.'];
  if(S.screen==='speak'&&S.spk&&!S.spk.rewarded&&S.spk.i>0&&S.spk.i<S.spk.ids.length)return ['Übung beenden?','Du hast '+S.spk.i+' von '+S.spk.ids.length+' Wörtern gesprochen. Beim Verlassen zählt diese Runde nicht.'];
  if(S.screen==='cloze'&&S.cloze&&!S.cloze.rewarded&&S.cloze.i>0&&S.cloze.i<S.cloze.items.length)return ['Übung beenden?','Du bist bei Aufgabe '+(S.cloze.i+1)+' von '+S.cloze.items.length+'. Beim Verlassen zählt diese Runde nicht.'];
  if(S.screen==='conf'&&S.conf&&!S.conf.rewarded&&S.conf.i>0&&S.conf.i<S.conf.items.length)return ['Übung beenden?','Du bist bei Aufgabe '+(S.conf.i+1)+' von '+S.conf.items.length+'. Beim Verlassen zählt diese Runde nicht.'];
  if(S.screen==='quiz'&&Q&&Q.queue&&Q.queue.length&&Q.total>=3&&!(Q.seen&&Q.seen.size>0)&&!Q.answered)return ['Runde verlassen?','Diese Runde hat noch nicht begonnen. Es geht nichts verloren.'];
  return null;
}
let LASTSCR=null;
function header(){
  if(S.screen==='onb'||S.screen==='tut'||S.screen==='call')return '';
  const back=!isRoot(S.screen);
  const CT={practice:'Üben',planner:'Planer',words:'Wörter',stats:'Statistik'}[S.screen];
  return '<header class="hdr"><div class="hin">'+(CT?'<div class="ctit" aria-hidden="true">'+CT+'</div>':'')+(back?'<button class="gbtn gback" data-act="back" aria-label="Zurück"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true"><path d="M10 2L2.5 10 10 18" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>':'<div class="logo gradient-text">'+APP_NAME+'</div>')+'<div class="sp"></div><div class="gbadge" title="Tage in Folge"><span class="fl fl'+flameTier()+'">🔥</span> '+streak()+'</div><div class="gbadge" data-act="shop" role="button" title="Shop" style="cursor:pointer">'+((xpOn()||(P.boostUntil||0)>Date.now())?'⚡ ':'')+((P.avatar||P.emoji)?(P.avatar||P.emoji)+' ':'')+'🪙 '+(P.coins||0)+'</div>'+(isRoot(S.screen)?'<button class="gbtn" data-act="gsearch" aria-label="Suchen"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg></button><button class="gbtn" data-act="toadd" aria-label="Wörter hinzufügen">＋</button>':'')+(S.screen==='settings'?'':'<button class="gbtn" data-act="settings" aria-label="Einstellungen">⚙️</button>')+'</div></header>';
}
function render(keep){
  try{document.documentElement.classList.toggle('calm',!!P.calm||(P.calm==null&&mmq('(prefers-reduced-motion: reduce)')));}catch(e){}
  try{renderInner(keep);}
  catch(err){
    try{console.error(err);}catch(e){}
    S.anim='';
    if(S.screen!=='menu'){S.screen='menu';try{renderInner(false);toast('Die Ansicht ließ sich nicht laden. Du bist zurück auf Heute.');return;}catch(e2){}}
    app.innerHTML='<main><div class="glass pad w center"><div class="big-ico">⚠️</div><p>Die Ansicht ließ sich nicht laden.</p><p class="hint" style="word-break:break-word">'+esc(String(err&&err.message||err).slice(0,200))+'</p><button class="btn pri full" data-act="reloadapp">Neu laden</button></div></main>';
  }
}
function renderInner(keep){
  const sy=window.scrollY;const _pn=document.querySelector('.setpane'),_nv=document.querySelector('.setnav');const _pt=(_pn&&keep&&S.screen==='settings')?_pn.scrollTop:0,_nt=(_nv&&keep)?_nv.scrollTop:0;
  if(keep){try{app.style.minHeight=document.documentElement.scrollHeight+'px';}catch(e){}}
  if(typeof S.b==='number'&&!blocks()[S.b])S.b='all';
  let v='';
  const s=S.screen;
  try{document.documentElement.setAttribute('data-scr',s);}catch(e){}
  if(s==='menu')v=menuView();else if(s==='path')v=pathView();else if(s==='practice')v=practiceView();else if(s==='onb')v=onbView();else if(s==='tut')v=tutView();else if(s==='coach')v=coachView();else if(s==='call')v=callView();else if(s==='pickdir')v=pickView();else if(s==='learn')v=learnView();
  else if(s==='quiz')v=quizView();else if(s==='nodue')v=nodueView();else if(s==='words')v=wordsView();else if(s==='add')v=addView();
  else if(s==='lat')v=latView();else if(s==='planner')v=plannerView();else if(s==='stats')v=statsView();else if(s==='settings')v=settingsView();else if(s==='shop')v=shopView();else if(s==='profile')v=profileView();else if(s==='pet')v=petView();else if(s==='legal')v=legalView();else if(s==='feed')v=feedView();else if(s==='cloze')v=clozeView();else if(s==='speak')v=speakView();else if(s==='conf')v=confView();else if(s==='mcg')v=mcgView();else if(s==='liga')v=ligaView();else if(s==='sent')v=sentView();else if(s==='account')v=acctView();else if(s==='word')v=wordView();else if(s==='search')v=searchView();else if(s==='game')v=gameView();else if(s==='feedback')v=feedbackView();else v=resultView();
  if(['menu','practice','planner','words','stats'].indexOf(s)>=0)v=langBar()+v;
  app.innerHTML=header()+'<main class="'+(S.anim||'')+((s==='practice')?' tall':'')+((s==='menu')?' home':'')+((s==='quiz'||s==='learn')?' qz':'')+((s==='stats')?' stats':'')+((s==='feed')?' feedm':'')+'">'+v+'</main>'+(showBar()?'<footer class="legalf"><button class="link" data-act="legal" data-v="imp">Impressum</button><span>·</span><button class="link" data-act="legal" data-v="dat">Datenschutz</button></footer>'+tabBar():'');
  S.anim='';
  (function(){const prev=LASTSCR;LASTSCR=s;if(!prev||prev===s)return;if(prev==='onb'||s==='onb'||prev==='tut'||s==='tut'||prev==='call'||s==='call')return;const mn=document.querySelector('main');if(!mn)return;
    if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const cls=(isRoot(prev)&&isRoot(s))?'xfade':(isRoot(s)?'pop':'push');mn.classList.add(cls);setTimeout(function(){mn.classList.remove(cls);},420);})();
  if(S.sheet){const sh=S.sheet;let it='';sh.items.forEach(function(x){it+='<button class="shi'+(x.danger?' dg':'')+(x.sel?' sel':'')+'" data-act="shgo" data-v="'+x.a+'" data-id="'+(x.id==null?'':x.id)+'"><span class="shic">'+x.i+'</span><span class="shtx"><b>'+esc(x.t)+'</b>'+(x.d?'<small>'+esc(x.d)+'</small>':'')+'</span>'+(x.sel?'<span class="shck">✓</span>':'')+'</button>';});
    app.insertAdjacentHTML('beforeend','<div class="shbk" data-act="shclose"></div><div class="sh2'+(sh.pick?' pick':'')+'" role="dialog" aria-modal="true" aria-label="'+esc(sh.title)+'"><div class="grab"><i></i></div><div class="sht"><b>'+esc(sh.title)+'</b>'+(sh.sub?'<small>'+esc(sh.sub)+'</small>':'')+'</div><div class="shl">'+it+'</div><button class="shi cancel" data-act="shclose">'+(sh.pick?'Fertig':'Abbrechen')+'</button></div>');}
  if(S.leave){app.insertAdjacentHTML('beforeend','<div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="lvt"><div class="glass pad col center mbox"><h2 id="lvt" style="margin:0">'+esc(S.leave[0])+'</h2><p class="hint" style="margin:0">'+esc(S.leave[1])+'</p><div class="row2" style="width:100%"><button class="btn bad" data-act="leaveyes">Verlassen</button><button class="btn pri" data-act="leaveno">Weitermachen</button></div></div></div>');}
  if(S.confetti&&s==='result'){S.confetti=false;setTimeout(confetti,200);}
  window.scrollTo(0,keep?sy:0);
  {const pn=document.querySelector('.setpane'),nv=document.querySelector('.setnav');if(pn&&_pt)pn.scrollTop=_pt;if(nv&&_nt)nv.scrollTop=_nt;}
  if(keep){requestAnimationFrame(function(){if(Math.abs(window.scrollY-sy)>2)window.scrollTo(0,sy);app.style.minHeight='';});}else{app.style.minHeight='';}
  const hd=document.querySelector('.hdr');if(hd)hd.classList.toggle('sc',window.scrollY>6);
  if(s==='quiz'&&Q&&Q.m==='type'&&!Q.answered&&!P.pen){const el=document.getElementById('ans');if(el){try{el.focus({preventScroll:true});}catch(e){}}}
  if(s==='learn')bindSwipe();
  if(s==='quiz'&&Q&&Q.m==='write')initInk();
  if(s==='stats'){const mn=document.querySelector('main.stats');if(mn){
    const wrap=function(a,b){if(!a||!b||a.parentNode!==mn||b.parentNode!==mn)return;const w=document.createElement('div');w.className='pair';mn.insertBefore(w,a);w.appendChild(a);w.appendChild(b);};
    wrap(mn.querySelector('.hero2'),mn.querySelector('.sgrid3'));wrap(mn.querySelector('.wk'),mn.querySelector('.shp'));
    const lern=mn.querySelector('.stack');const lc=lern?lern.closest('.glass'):null;const hb=mn.querySelector('[data-act="hardgo"]');const hc=hb?hb.closest('.glass'):null;if(lc&&hc)wrap(lc,hc);}}
  if(s==='menu'){const mn=document.querySelector('main.home');if(mn){const kids=Array.prototype.filter.call(mn.children,function(c){return c.classList.contains('lrow')&&!c.classList.contains('morebtn');});kids.forEach(function(c){c.classList.add('half');});if(kids.length%2===1&&kids.length)kids[kids.length-1].classList.remove('half');}}
  stkCheck();
  pillInit();
  segInit();
  ctUpdate();
  if(s==='settings'&&S.sq)setFilter();
  if(S.undo&&undoOK())app.insertAdjacentHTML('beforeend','<button class="undob glass" data-act="undo" aria-label="Letzte Bewertung rückgängig">↶ Rückgängig</button>');
  if(s==='search'){const gq=document.getElementById('gq');if(gq&&!S.gqf){S.gqf=1;try{gq.focus({preventScroll:true});}catch(e){}}}
  if(S.wundo&&Date.now()-S.wundo.at<7000)app.insertAdjacentHTML('beforeend','<button class="undob glass" data-act="wundo">↶ Wort wiederherstellen</button>');
  accFix();
  a11yPass();
  if(s==='feed')feedInit();
  if(s==='cloze')clozeAuto();
}
function bName(b){
  if(b==='all')return 'Alle Listen';if(b==='weak')return 'Knifflige Wörter';
  if(typeof b==='string'&&/^t\d+$/.test(b)){const t=TOPICS[parseInt(b.slice(1),10)];return t.e+' '+t.n;}
  if(b==='exam'){const e=examById(S.examId);return e?e.name:'Klausur';}
  const bl=blocks()[b];if(!bl)return 'Liste';
  if(bl.custom)return '✏️ '+bl.name;
  return bl.name;
}
function weekView(){
  const names=['So','Mo','Di','Mi','Do','Fr','Sa'];let arr=[],max=1;
  for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const c=P.days[fmt(d)]||0;if(c>max)max=c;arr.push([names[d.getDay()],c]);}
  let h='<div class="week" role="img" aria-label="Antworten der letzten 7 Tage">';
  arr.forEach(function(x){h+='<div><span>'+x[1]+'</span><i class="'+(x[1]?'':'z')+'" style="height:'+(x[1]?Math.max(8,Math.round(x[1]/max*60)):4)+'px"></i><span>'+x[0]+'</span></div>';});
  return h+'</div>';
}
function ring(p){
  const c=188.5;
  return '<svg class="ring" viewBox="0 0 72 72" aria-hidden="true"><defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--g1)"/><stop offset="1" style="stop-color:var(--g2)"/></linearGradient></defs><circle class="rt" cx="36" cy="36" r="30"/><circle class="rf" cx="36" cy="36" r="30" stroke-dasharray="'+c+'" stroke-dashoffset="'+(c*(1-p/100)).toFixed(1)+'" transform="rotate(-90 36 36)"/></svg>';
}
const TIPS=['Erst überlegen, dann umdrehen. Erinnern bringt mehr als nochmal Ansehen.','Kurz und oft schlägt lang und selten. Lieber 10 Minuten täglich als eine Stunde am Vorabend.','Abends zu wiederholen kann helfen, weil das Gehirn im Schlaf festigt. Die Belege sind aber gemischt.','Sprich das Wort laut aus, auch wenn es niemand hört. Das gibt dem Wort einen zweiten Weg ins Gedächtnis.','Lerne Wörter im Satz. Ein Beispielsatz hilft mehr als das Wort allein.','Fehler sind nützlich. Wörter, die du falsch hattest, merkst du dir nach der Korrektur oft besser.','Mische die Reihenfolge. Wörter aus verschiedenen Listen abwechselnd zu üben fühlt sich schwerer an, wirkt aber besser.','Teste dich vor dem Test einmal ohne Hilfe. So siehst du ehrlich, wo du stehst.','Sprich Wörter laut aus. Dein Gehirn merkt sich Gehörtes besser als Gelesenes.','Lerne Wörter in Sätzen, nicht allein. Der Zusammenhang hilft beim Erinnern.','Mach nach 25 Minuten eine kurze Pause. Danach sitzen die Wörter besser.','Fehler sind gut. Ein Wort, das du einmal falsch hattest, merkst du dir oft länger.','Schreibe schwere Wörter von Hand auf. Das Schreiben hilft dem Gedächtnis.','Verknüpfe ein Wort mit einem Bild im Kopf. Je witziger, desto besser bleibt es hängen.','Wiederhole kurz vor dem Schlafen. Im Schlaf festigt dein Gehirn das Gelernte.','Lerne ähnlich klingende Wörter nicht am selben Tag. Sonst verwechselst du sie leichter.','Teste dich selbst, statt nur zu lesen. Abfragen ist die stärkste Lernmethode.','Setze dir ein kleines Tagesziel. Lieber jeden Tag 10 Wörter als einmal 70.','Erkläre ein Wort einem Freund. Wer erklärt, behält mehr.','Achte auf Wortfamilien, zum Beispiel to approach und approach. Ein Wort bringt dir zwei.','Schlechter Tag? Übe nur die kniffligen Wörter. Fünf Minuten zählen auch.','Nutze Eselsbrücken. Je persönlicher, desto besser.'];
let TIPI=Math.floor(Math.random()*TIPS.length);
function tipCard(){return '<div class="glass pad w fill-extra tipc" data-act="nexttip" role="button" aria-label="Nächster Lerntipp"><div class="hd2"><span class="lab">💡 Lerntipp</span><span class="hint">Tippen für den nächsten ›</span></div><p id="tipt" style="margin:2px 0 0">'+esc(TIPS[TIPI%TIPS.length])+'</p></div>';}
function tipNext(){TIPI=(TIPI+1)%TIPS.length;const el=document.getElementById('tipt');if(!el)return;el.classList.add('tfade');setTimeout(function(){const e2=document.getElementById('tipt');if(e2){e2.textContent=TIPS[TIPI];e2.classList.remove('tfade');}},200);}
setInterval(function(){if(!document.hidden&&document.getElementById('tipt'))tipNext();},12000);
function weekStrip(){const st=weekStart(0);const L=['Mo','Di','Mi','Do','Fr','Sa','So'];const today=fmt(new Date());let n=0;let h='<div class="wkrow">';
  for(let i=0;i<7;i++){const d=new Date(st);d.setDate(st.getDate()+i);const k=fmt(d);const on=(P.days[k]>0)||(P.frozen&&P.frozen[k]);if(on)n++;const fz=!(P.days[k]>0)&&P.frozen&&P.frozen[k];h+='<div class="wkd'+(on?' on':'')+(fz?' fz':'')+(k===today?' td':'')+'"><i>'+(fz?'❄️':(on?'✓':''))+'</i><small>'+L[i]+'</small></div>';}
  return '<div class="glass pad w col tight fill-extra"><div class="hd2"><span class="lab">Diese Woche</span><span class="hint">'+n+' von 7 Tagen</span></div>'+h+'</div></div>';}
function hardCard(){const hard=allIds().filter(function(id){return (P.wrong[id]||0)>0;}).sort(function(a,b){return P.wrong[b]-P.wrong[a];}).slice(0,3);if(!hard.length)return '';
  let h='<div class="glass pad w tight fill-extra"><div class="hd2"><span class="lab">Hier hakt es</span><span class="hint">'+hard.length+(hard.length===1?' Wort':' Wörter')+'</span></div>';hard.forEach(function(id){h+=wordRow(id,true).replace('</div>','<span class="hint">'+P.wrong[id]+'×</span></div>');});
  return h+'<button class="btn pri full" style="margin-top:8px" data-act="hardgo">Diese Wörter üben</button></div>';}
function listsCard(){const bl=blocks();if(!bl.length)return '';const rows=bl.map(function(b,k){return {k:k,name:bName(k),p:pct(b.ids),n:b.ids.length};}).sort(function(a,b){return a.p-b.p;}).slice(0,5);
  let h='<div class="glass pad w col tight fill-extra"><div class="hd2"><span class="lab">Deine Listen</span><span class="hint">Tippen zum Üben</span></div>';
  rows.forEach(function(r){h+='<button class="xr lst" data-act="listgo" data-k="'+r.k+'"><span class="xn">'+esc(r.name)+'</span><span class="prog thin lp"><i style="width:'+r.p+'%"></i></span><span class="xs">'+r.p+' %</span></button>';});
  return h+'</div>';}
function greetWord(){if(ageBand()==='kid')return 'Hallo';const h=new Date().getHours();return h<11?'Guten Morgen':(h<17?'Guten Tag':'Guten Abend');}
function dateDe2(){const d=new Date();return ['So','Mo','Di','Mi','Do','Fr','Sa'][d.getDay()]+', '+d.getDate()+'. '+['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'][d.getMonth()];}
function wotdCard(){
  const all=allIds().filter(function(id){return wlang(id)==='en'&&isAlive(id);});if(!all.length)return '';
  const weak=all.filter(function(id){return (P.wrong[id]||0)>0;});const due=dueOf(all,true);const pool=weak.length?weak:(due.length?due:all);
  const d=new Date();const n=Math.floor((d-new Date(d.getFullYear(),0,0))/864e5);const id=pool[n%pool.length];
  return '<div class="glass pad w col tight wotd"><div class="hd2"><span class="lab">✨ Wort des Tages</span><span class="hint">'+(weak.length?'aus deinen kniffligen Wörtern':'für heute')+'</span></div><div class="row" style="gap:10px;align-items:center;justify-content:space-between"><span class="wm" data-act="wordopen" data-id="'+id+'" style="cursor:pointer"><b style="font-size:22px">'+esc(gEn(id))+'</b><small style="font-size:15px">'+esc(gShort(W[id][1]))+'</small></span>'+(canSpeakW(id)?'<button class="btn sm" data-act="speak" data-id="'+id+'">🔊 Anhören</button>':'')+'</div>'+(E[id]?'<div class="hint" style="font-style:italic">'+esc(E[id])+'</div>':'')+'</div>';
}
function offReady(){try{return !!(isHosted()&&'serviceWorker' in navigator&&navigator.serviceWorker.controller);}catch(e){return false;}}
function offRow(){return srow('📴','#34C759','Offline nutzen',isHosted()?(offReady()?'Bereit: läuft auch ohne Internet':'Einmal online öffnen, dann geht es offline'):'Gilt für die Web-Version (Vercel)','<button class="btn sm" data-act="offlineinfo">Anleitung</button>');}
function offlineInfo(){S.sheet={title:'Offline lernen',sub:'So installierst du EasyVocab auf deinem Gerät',items:[{i:'🍎',t:'iPhone oder iPad (Safari)',d:'Teilen-Symbol, dann „Zum Home-Bildschirm“. Danach die App von dort öffnen.',a:'shclose'},{i:'🤖',t:'Android (Chrome)',d:'Menü ⋮, dann „App installieren“ oder „Zum Startbildschirm“.',a:'shclose'},{i:'💻',t:'Computer (Chrome oder Edge)',d:'Installieren-Symbol rechts in der Adresszeile.',a:'shclose'},{i:'📶',t:'Wichtig: einmal mit Internet öffnen',d:'Dabei lädt die App sich selbst. Danach funktionieren Lernen, Wörter und Statistik ohne Netz.',a:'shclose'},{i:'☁️',t:'Das geht nicht offline',d:'Claude (Scan, Coach, Satzprüfung), Konto und Sicherung brauchen Internet.',a:'shclose'},{i:'💾',t:'Dein Fortschritt liegt auf dem Gerät',d:'Sichere ihn trotzdem ab und zu in den Einstellungen.',a:'shclose'}]};render(true);}
function shopTeaser(){if(!P.avatar)return '';const nx=AVATARS.filter(function(a){return !P.owned[a];}).sort(function(a,b){return avPrice(a)-avPrice(b);})[0];
  if(!nx)return '';const pr=avPrice(nx),have=P.coins||0,can=have>=pr;
  return '<button class="glass gtap lrow w shopt'+(can?' can':'')+'" data-act="shop"><span class="li"><span class="am a0">'+nx+'</span></span><span class="lt"><b>'+(can?'Du kannst '+esc(petName(nx))+' kaufen':'Nächstes Tier: '+esc(petName(nx)))+'</b><small>'+(can?pr+' 🪙 · tippe zum Shop':'noch '+(pr-have)+' 🪙 bis '+pr)+'</small><span class="prog thin"><i style="width:'+Math.min(100,Math.round(have/pr*100))+'%"></i></span></span><span class="chev">🛍️</span></button>';}
function petCard(){
  if(!P.avatar)return shopLink();
  const a=P.avatar,hl=hungerLvl();const st=['satt und zufrieden','hat Hunger','hat großen Hunger'][Math.max(0,hl)];
  return '<div class="glass pad w tight petrow'+(hl===2?' weak':'')+'"><button class="petmini" data-act="petopen" data-v="'+a+'" aria-label="Tier öffnen"><span class="am a0">'+a+'</span></button><span class="lt"><b>'+esc(petName(a))+'</b><small>'+st+'</small></span>'+(hl>0?'<button class="btn sm pri" data-act="feed">Füttern</button>':'<button class="btn sm" data-act="shop">Shop</button>')+'</div>';
}
function sf(f,d){try{return f();}catch(e){try{console.error(e);S.errTxt=String(e&&e.message||e).slice(0,160);}catch(x){}return d==null?'':d;}}
function menuView(){
  sf(autoFreeze);sf(dailyBonus);sf(weekGoalCheck);let more='';
  const dc=dayCount();const gp=Math.min(100,Math.round(dc/P.dailyGoal*100));
  const due=limitNew(dueOf(allIds(),true));const neu=due.filter(function(id){return bx(id,'en')===0&&bx(id,'de')===0;}).length;
  let h=cloudBanner();
  if(SAVEFAIL)h+='<div class="glass banner w">⚠️ Dein Gerät lässt das Speichern nicht zu. Fortschritt geht beim Schließen verloren. Kopiere in den Einstellungen die Sicherung.</div>';
  if(P.remDis!==fmt(new Date())&&new Date().getHours()<22&&new Date().getHours()>=(P.remindersEnabled?(P.remHour||17):18)&&dc<STREAK_MIN&&streak()>0&&!(P.wkJ!==false&&(new Date().getDay()===0||new Date().getDay()===6)))h+='<div class="glass banner w">🔥 Deine Serie ist in Gefahr. Dir fehlen heute noch '+(STREAK_MIN-dc)+' richtige Wörter. <button class="link" data-act="remdis">Heute nicht mehr zeigen</button></div>';
  const LI=lvlInfo(P.xp);const lvl=LI.lvl;const into=LI.pct;
  h+='<div class="greet w"><div><small>'+dateDe2()+'</small><h1>'+greetWord()+(P.nick?', '+esc(P.nick):'')+'</h1></div></div>';
  const petTop=sf(function(){return kidBand()&&!!P.avatar;},false);if(petTop)h+=sf(petCard);
  h+='<div class="glass hero2 compact w"><div class="hr"><div class="ringw md">'+ring(gp)+'<b>'+dc+'</b></div><div class="ht"><span class="lab">Tagesziel</span><strong>'+dc+' von '+P.dailyGoal+' Wörtern</strong><small>'+(due.length?(function(){const rn=Math.max(1,Math.min(due.length,Math.max(P.quizLength,P.dailyGoal-dc)));return 'Nächste Runde: '+rn+' Wörter, ca. '+Math.max(1,Math.round(rn*(P.avgSec||8)/60))+' Min.';})():'Alles erledigt')+'</small></div><button class="btn pri go" data-act="smart">'+(due.length?(dc>0?'Weiter lernen':'Jetzt lernen'):'Üben')+'</button></div></div>';
  h+='<div class="chips3 w c2"><button class="glass gtap chip3" data-act="tab" data-k="stats"><b>🔥 '+streak()+(streak()===1?' Tag':' Tage')+'</b><small>'+(dc<STREAK_MIN&&!(P.wkJ!==false&&(new Date().getDay()===0||new Date().getDay()===6))?'Noch '+(STREAK_MIN-dc)+' Wörter für die Serie':'in Folge')+(P.freeze>0?' · ❄️'+P.freeze:'')+'</small></button><button class="glass gtap chip3" data-act="profile"><b>⭐ Level '+lvl+'</b><span class="prog thin"><i style="width:'+into+'%"></i></span><small>Diese Woche '+weekInfo(0).days+' von '+(P.weekGoal||4)+' Tagen</small></button></div>';
  try{restCheck();}catch(e){}sf(function(){stkAward(dc);});h+=sf(restoreCard);{const ec=sf(evCards);h+=ec;if(dc>=P.dailyGoal||!ec)h+=sf(function(){return friendCard(dc,due);});}h+=sf(homeActs);h+=sf(questCard);
  if(new Date().getDay()===6||new Date().getDay()===0){const wi=weekInfo(0);if(wi.words>0||wi.days>0)h+=weekCard('📅 Wochenrückblick');}
  const rq=P.run&&P.run.queue?P.run.queue.filter(isAlive).length:0;
  if(rq)h+='<button class="glass gtap lrow" data-act="resume"><span class="li">▶️</span><span class="lt"><b>Runde fortsetzen</b><small>'+rq+' Karten offen</small></span><span class="chev">›</span></button>';
  const ne=nextExam();
  if(ne){
    const ids=examIds(ne);const left=daysLeft(ne);const open=ids.filter(function(id){return bAvg(id)<3;}).length;const sh=secureShare(ids);
    h+='<button class="glass gtap lrow" data-act="examgo" data-id="'+ne.id+'"><span class="li">📅</span><span class="lt"><b>'+esc(ne.name)+' · '+inDays(left)+'</b><small>'+sh+' % sicher · '+(open?'noch '+open+' Wörter':'alles sicher')+'</small><span class="prog thin"><i style="width:'+sh+'%"></i></span></span><span class="chev">›</span></button>';
  }
  more+=sf(weekCards);try{more+=ligaCard();}catch(e){}try{more+=shopTeaser();}catch(e){}
  if(!petTop)more+=sf(petCard);
  more+=sf(wotdCard);
  const bl=badgeList();const gotN=bl.filter(function(b){return b[2];}).length;const newN=bl.filter(function(b){return b[2]&&!P.claimed[b[3]];}).length;
  more+='<div class="glass pad w tight badgec"><div class="hd2"><span class="lab">Abzeichen</span><button class="link" data-act="tab" data-k="stats">'+(newN?newN+' zum Abholen':gotN+' von '+bl.length)+' ›</button></div><div class="bdrow">'+bl.slice().sort(function(x,y){return (y[2]?1:0)-(x[2]?1:0);}).slice(0,6).map(function(b){return '<button class="bd1'+(b[2]?(P.claimed[b[3]]?' got':' new'):'')+'" data-act="claim" data-k="'+b[3]+'" aria-label="'+esc(b[1])+'"><span>'+b[0]+'</span></button>';}).join('')+'</div></div>';
  if(due.length){const spn=dueSplit(due);const nxt=due.filter(function(id){return !isNewW(id);}).sort(function(a,b){return (bAvg(a)-bAvg(b))||(a-b);}).concat(due.filter(isNewW).sort(function(a,b){return a-b;})).slice(0,2);
    more+='<div class="glass pad w tight nextc"><div class="hd2"><span class="lab">Als Nächstes</span><span class="hint">'+(spn.r?spn.r+' Wiederholung':'')+(spn.r&&spn.n?' · ':'')+(spn.n?spn.n+' neu':'')+'</span></div>';nxt.forEach(function(id){more+=wordRow(id,true);});more+='</div>';}
  if(!(new Date().getDay()===6||new Date().getDay()===0))more+=weekStrip();
  more+=sf(hardCard);
  more+=sf(tipCard);
  h+=moreBlock(more);
  return h;
}

/* ---------- Spiele und KI-Geschichten ---------- */
function clipSteps(id){const st=['word','mean'];if(E[id])st.push('ex');return st;}
function clipTempo(){return {slow:1.35,normal:1,fast:.7}[(S.gs&&S.gs.tempo)||'normal']||1;}
function clipDur(){return Math.round(1900*clipTempo());}
function clipStepDur(st){return Math.round(({word:1900,mean:2000,ex:3600}[st]||2000)*clipTempo());}
function clipTotal(id){return clipSteps(id).reduce(function(t,x){return t+clipStepDur(x);},0);}
function clipPlan(g,resume){
  clearTimeout(g.tm);if(g.paused||g.done)return;
  const id=g.ids[g.i];const st=clipSteps(id)[g.step];
  if(S.gs&&S.gs.clipsound!=='off'&&window.speechSynthesis&&canSpeakW(id)){
    if(st==='word'){clipSay(gEn(id));}else if(st==='ex'){clipSay(E[id]);}
  }
  g.tm=setTimeout(function(){if(S.screen!=='game'||S.game!==g||g.paused)return;clipNext(g,1);},clipStepDur(st));
}
function clipSay(t){try{const nm=P.vC;const v=(nm?VOICES.filter(function(x){return x.name===nm;})[0]:null)||enVoices()[0];const u=new SpeechSynthesisUtterance(t);u.lang='en-GB';if(v){try{u.voice=v;u.lang=v.lang;}catch(e){}}u.rate=({slow:0.8,normal:0.92,fast:1.05}[(S.gs&&S.gs.tempo)||'normal'])||0.92;speechSynthesis.cancel();speechSynthesis.speak(u);}catch(e){}}
function clipHue(id){return (id*47+210)%360;}
function clipSceneHtml(g,id){
  const emo=emojiOf(id);const hasE=!!E[id];
  return (emo?'<div class="cemo">'+emo+'</div>':'')+'<div class="cword">'+esc(gEn(id))+'</div><div class="cmean'+(g.step>=1?' v':'')+'"><span>'+esc(gShort(W[id][1]))+'</span></div>'+(hasE?'<div class="cex'+(g.step>=2?' v':'')+'">'+esc(E[id])+'</div>':'');
}
function clipProg(g){
  const bar=document.getElementById('clipprog');if(!bar)return;
  const id=g.ids[g.i];const tot=clipTotal(id);const steps=clipSteps(id);let done=0;for(let k=0;k<g.step;k++)done+=clipStepDur(steps[k]);
  const segs=bar.children;
  for(let k=0;k<segs.length;k++){const f=segs[k].firstChild;f.style.transition='none';f.style.width=k<g.i?'100%':'0%';}
  const f=segs[g.i]&&segs[g.i].firstChild;if(!f)return;
  f.style.width=(done/tot*100)+'%';void f.offsetWidth;
  if(g.paused)return;
  f.style.transition='width '+(tot-done)+'ms linear';f.style.width='100%';
}
function clipFreeze(g){const bar=document.getElementById('clipprog');if(!bar||!bar.children[g.i])return;const f=bar.children[g.i].firstChild;const w=getComputedStyle(f).width;const pw=f.parentNode.clientWidth||1;f.style.transition='none';f.style.width=(parseFloat(w)/pw*100)+'%';}
function clipDom(g){
  const sc=document.getElementById('clipsc');if(!sc)return false;
  const id=g.ids[g.i];const key=g.i+'';
  const cur=sc.lastElementChild;
  if(cur&&cur.getAttribute('data-k')===key){
    const m=cur.querySelector('.cmean'),x=cur.querySelector('.cex');
    if(m)m.classList.toggle('v',g.step>=1);if(x)x.classList.toggle('v',g.step>=2);
  }else{
    const n=document.createElement('div');n.className='cscene in';n.setAttribute('data-k',key);n.innerHTML=clipSceneHtml(g,id);
    if(cur){cur.classList.remove('in');cur.classList.add('out');setTimeout(function(){if(cur.parentNode)cur.parentNode.removeChild(cur);},600);}
    sc.appendChild(n);
    const bx=document.getElementById('clipbox');if(bx)bx.style.setProperty('--ch',clipHue(id));
    const sm=document.getElementById('clipcnt');if(sm)sm.textContent='Wort '+(g.i+1)+' von '+g.ids.length;
  }
  clipProg(g);return true;
}
function clipNext(g,d){
  const id=g.ids[g.i];const n=clipSteps(id).length;g.rev=false;
  if(d>0){if(g.step<n-1)g.step++;else if(g.i<g.ids.length-1){g.i++;g.step=0;}else{g.done=true;clearTimeout(g.tm);render(true);return;}}
  else{if(g.step>0)g.step--;else if(g.i>0){g.i--;g.step=0;}}
  if(!clipDom(g))render(true);
  clipPlan(g);
}


/* v108: Becherspiel */
function brLv(){const k=parseInt((S.gs&&S.gs.stufe)||2,10)||2;return {1:{c:'all',n:[3,3],step:780,dur:.58,sw:0,show:1.35},2:{c:'fade',n:[3,4],step:580,dur:.46,sw:2,show:1.05},3:{c:'mono',n:[4,4],step:440,dur:.36,sw:4,show:1},4:{c:'mono',n:[4,5],step:310,dur:.26,sw:8,show:.9}}[k]||null;}
function brNum(g){const L=brLv();return g.i<Math.ceil(g.ids.length/2)?L.n[0]:L.n[1];}
function brStart(g){
  if(S.game!==g)return;clearTimeout(g.tm);
  const id=g.ids[g.i];const n=brNum(g);const tgt=gEn(id);
  const pool=shuffle(allIds().filter(function(x){return isAlive(x)&&x!==id&&gEn(x)!==tgt&&gEn(x).length<22;}));
  const seen={};seen[tgt.toLowerCase()]=1;const dis=[];
  for(let k=0;k<pool.length&&dis.length<n-1;k++){const w=gEn(pool[k]);if(!seen[w.toLowerCase()]){seen[w.toLowerCase()]=1;dis.push(w);}}
  let cups=[{w:tgt,ok:true}].concat(dis.map(function(w){return {w:w,ok:false};}));
  g.cups=shuffle(cups);g.slot=g.cups.map(function(_,k){return k;});g.phase='show';g.sel=-1;
  render(true);
  const L=brLv();
  g.tm=setTimeout(function(){brDo(g,function(){
    const ar=document.getElementById('brar');if(ar){ar.classList.remove('lift');if(L.c==='fade')ar.classList.add('mono');}
    const msg=document.getElementById('brmsg');if(msg)msg.textContent='Achtung, es wird gemischt …';
    g.phase='shuffle';let swaps=4+g.i+(n-3)*2+L.sw;
    const step=function(){if(S.game!==g||S.screen!=='game')return;
      if(swaps--<=0){g.phase='pick';const m=document.getElementById('brmsg');if(m)m.textContent='Wo steckt die Übersetzung? Tippe einen Becher an.';return;}
      let a=Math.floor(Math.random()*n),b;do{b=Math.floor(Math.random()*n);}while(b===a);
      const ka=g.slot.indexOf(a),kb=g.slot.indexOf(b);g.slot[ka]=b;g.slot[kb]=a;
      const ea=document.getElementById('brc'+ka),eb=document.getElementById('brc'+kb);if(ea)ea.style.setProperty('--s',b);if(eb)eb.style.setProperty('--s',a);
      try{sfx('tog');}catch(e){}
      g.tm=setTimeout(step,L.step);};
    g.tm=setTimeout(step,Math.round(L.step*1.2));
  });},Math.round((2200+n*650)*L.show));
}
function brDo(g,f){if(S.game!==g||S.screen!=='game'||g.over)return;f();}
function brPick(k){
  const g=S.game;if(!g||g.type!=='becher'||g.phase!=='pick')return;
  g.phase='res';const c=g.cups[k];const el=document.getElementById('brc'+k);if(el)el.classList.add('open',c.ok?'good':'bad');
  const id=g.ids[g.i];
  if(c.ok){g.score++;try{sfx('ok');}catch(e){}}
  else{g.miss.push(id);try{sfx('no');}catch(e){}const ok=g.cups.findIndex(function(x){return x.ok;});const e2=document.getElementById('brc'+ok);setTimeout(function(){if(S.game===g&&e2)e2.classList.add('open','good');},650);}
  const m=document.getElementById('brmsg');if(m)m.textContent=c.ok?'Richtig! „'+gShort(W[id][1])+'“ heißt '+gEn(id)+'.':'Leider nicht. „'+gShort(W[id][1])+'“ heißt '+gEn(id)+'.';
  const b=document.getElementById('brnb');if(b){b.removeAttribute('hidden');b.textContent=g.i>=g.ids.length-1?'Ergebnis':'Weiter';}
}
function brNext(){
  const g=S.game;if(!g||g.type!=='becher'||g.phase!=='res')return;
  if(g.i>=g.ids.length-1){g.over=true;g.rw=gameReward(Math.min(40,g.score*4),3);render(true);return;}
  g.i++;brStart(g);
}
function becherView(g){
  if(g.over){
    return '<div class="pt"><h1>Becherspiel</h1></div><div class="glass pad w col center"><div class="big-ico">🥤</div><div class="big">'+g.score+' von '+g.ids.length+'</div><div class="hint">'+(g.miss.length?'Verpasst: '+g.miss.map(function(x){return esc(gEn(x));}).join(', '):'Alles richtig gemerkt!')+'</div>'+(g.rw?'<div class="hint">'+(g.rw.capped?'Für heute gibt es keine Belohnung mehr. Spielen darfst du trotzdem.':'+'+g.rw.xp+' XP und +'+g.rw.coins+' 🪙')+'</div>':'')+(g.miss.length?'<button class="btn full" data-act="brquiz">Verpasste Wörter üben</button>':'')+'<button class="btn pri full" data-act="gostart" data-v="becher">Nochmal</button></div>';
  }
  const id=g.ids[g.i];const n=g.cups.length;
  let h='<div class="pt"><h1>Becherspiel</h1><small>Merke dir die Wörter unter den Bechern</small></div><div class="cnt cnt2"><span>Richtig: '+g.score+'</span><span>Runde '+(g.i+1)+' von '+g.ids.length+'</span></div>';
  h+='<div class="glass q brq"><div class="lang">Gesucht: Übersetzung von</div><div class="word">'+esc(gShort(W[id][1]))+'</div></div>';
  h+='<div class="brarena'+(g.phase==='show'?' lift':'')+(brLv().c==='mono'?' mono':'')+'" id="brar" style="--n:'+n+';--dur:'+brLv().dur+'s">'+g.cups.map(function(c,k){return '<button class="brcup" id="brc'+k+'" style="--s:'+g.slot[k]+';--ch:'+[215,352,150,38,285][k%5]+'" data-act="brpick" data-i="'+k+'" aria-label="Becher"><span class="brlab">'+esc(c.w)+'</span><span class="brbody"><i></i></span></button>';}).join('')+'<div class="brtable"></div></div>';
  h+='<div class="brmsg" id="brmsg" role="status">'+(g.phase==='show'?'Merke dir, wo welches Wort liegt!':'')+'</div><button class="btn pri full" id="brnb" data-act="brnext" hidden>Weiter</button>';
  return h;
}
function wordIds(n,src,list,minL,maxL){
  const ids=gameIds(300,src,list).filter(function(id){const w=gEn(id).replace(/^to /,'');return /^[a-zA-Z]+$/.test(w)&&w.length>=minL&&w.length<=maxL;});
  return ids.slice(0,n);
}
function wcore(id){return gEn(id).replace(/^to /,'').toLowerCase();}
function miniStart(type){
  const gs=S.gs,n=gs.n[type];
  const L=MKLEN[type]?MKLEN[type][stufe()]:[3,12];
  const ids=wordIds(n,gs.src,gs.list,L[0],L[1]);if(ids.length<3){toast('Dafür gibt es hier zu wenige passende Wörter. Wähle eine andere Quelle.');return;}
  const g={type:type,ids:ids,i:0,score:0,miss:0,over:false,state:'play'};
  mkRound(g);S.game=g;render();
  if(type==='diktat')setTimeout(function(){mkSay(g);},250);
}
function mkRound(g){
  const w=wcore(g.ids[g.i]);g.word=w;g.state='play';g.hint=0;
  if(g.type==='salat'){let l=w.split('');let t=0;do{l=shuffle(w.split(''));t++;}while(l.join('')===w&&t<8);g.pool=l.map(function(c,k){return {c:c,k:k,used:false};});g.sel=[];}
  if(g.type==='galgen'){g.guess={};g.maxl=({1:8,2:6,3:5,4:4})[stufe()]||6;g.lives=g.maxl;if(stufe()===1)g.guess[w[0]]=true;}
  if(g.type==='diktat'){g.val='';}
}
function mkSay(g){const id=g.ids[g.i];if(!window.speechSynthesis)return;const reps=parseInt((S.gs&&S.gs.rep)||'1',10)||1;let k=0;const go=function(){if(S.game!==g||S.screen!=='game'||g.ids[g.i]!==id||g.state!=='play'||k>=reps)return;clipSay(gEn(id));k++;if(k<reps)setTimeout(go,({slow:2600,normal:2000,fast:1500}[(S.gs&&S.gs.tempo)||'normal']));};go();}
function mkNext(g,ok){
  (g.log=g.log||[]).push({id:g.ids[g.i],val:g.val||'',ok:!!ok});
  if(ok)g.score++;else g.miss++;
  if(g.i<g.ids.length-1){g.i++;mkRound(g);render(true);if(g.type==='diktat')setTimeout(function(){mkSay(g);},250);}
  else{g.over=true;g.rw=gameReward(Math.min(30,g.score*3+4),3);if(g.score>=g.ids.length-1){sfx('ok');confetti();}render(true);}
}
function mkEndCard(g){
  const rev=(g.type==='diktat'&&g.log)?'<div class="glass pad w col tight"><div class="lab">Dein Diktat</div>'+g.log.map(function(l){return '<div class="wr"><span class="wm"><b>'+(l.ok?'✓ ':'✗ ')+esc(gEn(l.id))+'</b><small>'+(l.ok?esc(gShort(W[l.id][1])):esc(l.val||'(leer)')+' → '+esc(gEn(l.id))+' · '+esc(gShort(W[l.id][1])))+'</small></span></div>';}).join('')+'</div>':'';
  return rev+'<div class="glass pad w col center"><div class="big-ico">'+(g.score===g.ids.length?'🏆':'🎉')+'</div><b>'+g.score+' von '+g.ids.length+' geschafft</b>'+(g.rw?'<div class="hint">'+(g.rw.capped?'Für heute gibt es keine Belohnung mehr. Spielen darfst du trotzdem.':'+'+g.rw.xp+' XP und +'+g.rw.coins+' 🪙')+'</div>':'')+'<button class="btn pri full" data-act="gostart" data-v="'+g.type+'">Nochmal</button></div>';
}
function miniView(g){
  const id=g.ids[g.i];
  const title={salat:'Wortsalat',galgen:'Galgenmännchen',diktat:'Diktat'}[g.type];
  let h='<div class="pt"><h1>'+title+'</h1></div>';
  if(g.over)return h+mkEndCard(g);
  h+='<div class="cnt cnt2"><span>Richtig: '+g.score+'</span><span>Wort '+(g.i+1)+' von '+g.ids.length+'</span></div>';
  if(g.type==='diktat'){
    h+='<div class="glass pad w col center"><div class="hint">Höre das Wort und schreibe es auf Englisch.</div><div class="row2" style="width:100%"><button class="btn" data-act="mkspeak">🔊 Nochmal hören</button><button class="btn" data-act="mkskip">Weiß nicht</button></div>'+((S.gs&&S.gs.mean==='on')?'<div class="hint">Bedeutung: <b>'+esc(gShort(W[id][1]))+'</b></div>':'')+'</div>';
    h+='<div class="w"><input id="dk" class="in big'+(g.state==='ok'?' right':(g.state==='no'?' wrong':''))+'" type="text" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="Hier schreiben" aria-label="Antwort" value="'+esc(g.val||'')+'"'+(g.state!=='play'?' readonly':'')+'></div>';
    if(g.state==='play')h+='<button class="btn pri full" data-act="mkcheck">'+((S.gs&&S.gs.dikt==='now')?'Prüfen':(g.i<g.ids.length-1?'Weiter':'Fertig'))+'</button>';
    else h+='<div class="sheet '+(g.state==='ok'?'right':'wrong')+'" role="status"><b>'+(g.state==='ok'?'Richtig':'Nicht ganz')+'</b>'+(g.state==='ok'?'':'<div class="sol">Lösung: '+esc(gEn(id))+'</div>')+'</div><button class="btn pri full" data-act="mknext">Weiter</button>';
    return h;
  }
  h+='<div class="glass q"><div class="lang">Auf Englisch heißt das</div><div class="word">'+esc(gShort(W[id][1]))+'</div></div>';
  if(g.type==='salat'){
    const slots=g.word.split('').map(function(c,k){const p=g.sel[k];return '<button class="slot'+(p!=null?' f':'')+(g.state==='ok'?' ok':(g.state==='no'?' no':''))+'" data-act="saltaken" data-k="'+k+'" aria-label="Buchstabe '+(k+1)+'">'+(p!=null?esc(g.pool[p].c):'')+'</button>';}).join('');
    h+='<div class="slots">'+slots+'</div><div class="letters">'+g.pool.map(function(p,k){return '<button class="lt2'+(p.used?' used':'')+'" data-act="salput" data-k="'+k+'"'+(p.used?' disabled':'')+'>'+esc(p.c)+'</button>';}).join('')+'</div>';
    h+='<div class="row2"><button class="btn" data-act="salhint">Hinweis</button><button class="btn" data-act="mkskip">Weiß nicht</button></div>';
    if(g.state==='no')h+='<div class="hint" style="text-align:center">Das war es noch nicht. Versuch es nochmal.</div>';
    if(g.state==='ok')h+='<button class="btn pri full" data-act="mknext">Weiter</button>';
    return h;
  }
  // galgen
  const shown=g.word.split('').map(function(c){return (g.guess[c]||g.state==='lost')?c.toUpperCase():'_';}).join(' ');
  h+='<div class="hang"><div class="lives">'+'❤️'.repeat(g.lives)+'🖤'.repeat((g.maxl||6)-g.lives)+'</div><div class="mask'+(g.state==='lost'?' lostw':'')+'">'+shown+'</div></div>';
  const kb=function(arr){return '<div class="kr">'+arr.map(function(c){const t=g.guess[c];return '<button class="key'+(t?(g.word.indexOf(c)>=0?' hit':' miss'):'')+'" data-act="gk" data-v="'+c+'"'+((t||g.state!=='play')?' disabled':'')+'>'+c.toUpperCase()+'</button>';}).join('')+'</div>';};
  h+='<div class="kbd">'+kb('abcdefghijklm'.split(''))+kb('nopqrstuvwxyz'.split(''))+'</div>';
  if(g.state==='won'||g.state==='lost')h+='<div class="sheet '+(g.state==='won'?'right':'wrong')+'" role="status"><b>'+(g.state==='won'?'Richtig!':'Leider nicht')+'</b>'+(g.state==='lost'?'<div class="sol">Lösung: '+esc(gEn(id))+'</div>':'')+'</div><button class="btn pri full" data-act="mknext">Weiter</button>';
  return h;
}
let HAP=null;
function haptic(kind){
  if(P.haptic===false)return;
  try{if(navigator.vibrate){navigator.vibrate(kind==='warn'?[12,40,12]:8);return;}}catch(e){}
  try{
    if(!HAP){const l=document.createElement('label');l.setAttribute('aria-hidden','true');l.style.cssText='position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none';const i=document.createElement('input');i.type='checkbox';i.setAttribute('switch','');l.appendChild(i);document.body.appendChild(l);HAP=l;}
    HAP.click();
  }catch(e){}
}
let ACX=null;
var SFXLAST={};
function sfx(kind,n){
  if(!P.sfx)return;
  try{
    const nowT=Date.now();if(SFXLAST[kind]&&nowT-SFXLAST[kind]<(kind==='tap'?70:120))return;SFXLAST[kind]=nowT;
    const A=window.AudioContext||window.webkitAudioContext;if(!A)return;
    ACX=ACX||new A();if(ACX.state==='suspended')ACX.resume();
    const t=ACX.currentTime;
    const out=ACX.createGain();out.gain.value=0.9;const lp=ACX.createBiquadFilter();lp.type='lowpass';lp.frequency.value=3600;lp.Q.value=0.5;out.connect(lp);lp.connect(ACX.destination);
    /* weicher Ton: Sinus plus leiser Oberton, sanfter Einsatz, lange Ausklingzeit */
    const tone=function(f,st,d,v,ty,sl){
      const o=ACX.createOscillator(),g=ACX.createGain();o.type=ty||'sine';o.frequency.setValueAtTime(f,t+st);
      if(sl)o.frequency.exponentialRampToValueAtTime(sl,t+st+d);
      g.gain.setValueAtTime(0.0001,t+st);g.gain.linearRampToValueAtTime(v,t+st+0.012);g.gain.exponentialRampToValueAtTime(0.0001,t+st+d);
      o.connect(g);g.connect(out);o.start(t+st);o.stop(t+st+d+0.05);
      if(!ty||ty==='sine'){const o2=ACX.createOscillator(),g2=ACX.createGain();o2.type='sine';o2.frequency.setValueAtTime(f*2,t+st);g2.gain.setValueAtTime(0.0001,t+st);g2.gain.linearRampToValueAtTime(v*0.22,t+st+0.012);g2.gain.exponentialRampToValueAtTime(0.0001,t+st+d*0.6);o2.connect(g2);g2.connect(out);o2.start(t+st);o2.stop(t+st+d+0.05);}
    };
    const noise=function(st,d,v,f0,f1){
      const len=Math.floor(ACX.sampleRate*d),buf=ACX.createBuffer(1,len,ACX.sampleRate),dat=buf.getChannelData(0);for(let i=0;i<len;i++)dat[i]=(Math.random()*2-1)*(1-i/len);
      const src=ACX.createBufferSource();src.buffer=buf;const bp=ACX.createBiquadFilter();bp.type='bandpass';bp.Q.value=1.2;bp.frequency.setValueAtTime(f0,t+st);bp.frequency.exponentialRampToValueAtTime(f1,t+st+d);
      const g=ACX.createGain();g.gain.setValueAtTime(v,t+st);g.gain.exponentialRampToValueAtTime(0.0001,t+st+d);src.connect(bp);bp.connect(g);g.connect(out);src.start(t+st);
    };
    if(kind==='tap'){tone(1500,0,0.04,0.035);}
    else if(kind==='tog'){tone(660,0,0.07,0.06);tone(880,0.045,0.09,0.05);}
    else if(kind==='pop'){tone(520,0,0.09,0.07,'sine',780);}
    else if(kind==='flip'){noise(0,0.14,0.05,900,2600);tone(740,0.06,0.07,0.04);}
    else if(kind==='swipe'){noise(0,0.18,0.04,500,2200);}
    else if(kind==='ok'){const k=Math.min(8,Math.max(0,(n||1)-1));const b=784*Math.pow(2,k*2/12);tone(b,0,0.16,0.11);tone(b*1.335,0.085,0.3,0.11);}
    else if(kind==='no'){tone(311,0,0.2,0.1,'sine',247);tone(247,0.1,0.26,0.07,'sine',220);}
    else if(kind==='streak'){const k=Math.min(7,Math.floor((n||3)/2));const b=523*Math.pow(2,k/12);[0,4,7,12,16].forEach(function(x,i){tone(b*Math.pow(2,x/12),i*0.065,0.32,0.09);});}
    else if(kind==='level'){[523,659,784,1047].forEach(function(f,i){tone(f,i*0.1,0.5,0.09);});tone(1319,0.42,0.7,0.1);tone(2093,0.46,0.5,0.03);}
    else if(kind==='done'){[523,659,784].forEach(function(f,i){tone(f,i*0.09,0.4,0.09);});tone(1047,0.28,0.6,0.1);}
    else if(kind==='coin'){tone(1319,0,0.09,0.07);tone(1760,0.07,0.28,0.07);}
    else{tone(311,0,0.2,0.09,'sine',247);}
  }catch(e){}
}
(function(){
  document.addEventListener('click',function(e){
    try{
      if(!P||!P.sfx)return;const t=e.target&&e.target.closest?e.target.closest('button,[data-act],.gtap,.tg,.segc button'):null;if(!t)return;
      if(t.closest('.opt,.mic,.callmic,.callend,#stkpop'))return;
      const a=t.getAttribute('data-act')||'';
      if(t.classList.contains('tg')||(t.parentNode&&t.parentNode.classList&&t.parentNode.classList.contains('segc'))){sfx('tog');return;}
      if(a==='flip'||a==='reveal'){sfx('flip');return;}
      if(a==='cont'||a==='know'||a==='typecheck'||a==='check')return;
      sfx('tap');
    }catch(er){}
  },true);
})();
function snow(){confetti(['❄️','🧊','✨','❄️','💎','🩵']);}
function confetti(ems){if(RM||ageBand()==='adult')return;const box=document.createElement('div');box.className='confetti';box.setAttribute('aria-hidden','true');const E=ems||['🎉','✨','⭐','🎊','💙','🌟'];for(let i=0;i<26;i++){const p=document.createElement('i');p.textContent=E[i%E.length];p.style.left=(Math.random()*100)+'%';p.style.animationDelay=(Math.random()*0.5)+'s';p.style.fontSize=(16+Math.random()*16)+'px';box.appendChild(p);}document.body.appendChild(box);setTimeout(function(){if(box.parentNode)box.parentNode.removeChild(box);},3200);}
function gShort(t){return String(t).split(';')[0].replace(/\s*\(.*?\)\s*/g,' ').replace(/\s+/g,' ').trim();}
function gEn(id){return String(W[id][0]).replace(/\s*\(.*?\)\s*/g,' ').replace(/\bsb\/sth\b|\bsb\b|\bsth\b/g,'').replace(/\s+/g,' ').trim();}
function gameIds(n,src,list){
  const base=allIds().filter(function(id){return wlang(id)==='en'&&isAlive(id)&&gShort(W[id][1]).length<=26&&gEn(id).length<=22;});
  const inList=function(id){return true;};
  let pool=base;
  if(src!=='list'&&focusOn()){const fs={};focusIds().forEach(function(i){fs[i]=1;});const fp=base.filter(function(id){return fs[id];});if(fp.length>=3)pool=fp;}
  if(src==='list'){const b=blocks()[list||0];const set={};(b?b.ids:[]).forEach(function(i){set[i]=1;});pool=base.filter(function(id){return set[id];});}
  const weak=pool.filter(function(id){return (P.wrong[id]||0)>0;}).sort(function(a,b){return P.wrong[b]-P.wrong[a];});
  const due=shuffle(dueOf(pool,true));const rest=shuffle(pool);const seen={},out=[];
  let order;
  if(src==='weak')order=weak.concat(rest);else if(src==='due')order=due.concat(rest);else if(src==='list')order=rest;else order=weak.concat(due).concat(rest);
  order.forEach(function(id){if(!seen[id]&&out.length<n){seen[id]=1;out.push(id);}});
  return out;
}
function gameReward(xp,coins){
  const t=fmt(new Date());if(!P.gameDay||P.gameDay.d!==t)P.gameDay={d:t,n:0};
  const ok=P.gameDay.n<3;P.gameDay.n++;let gx=0,gc=0;
  if(ok){gx=earnXp(xp);earn(coins);gc=coins;}
  save();return {xp:gx,coins:gc,capped:!ok};
}
function startGame(type){
  if(!S.gs)S.gs={src:'mix',list:0,dikt:'end',mean:'off',rep:'1',n:{mem:6,blitz:40,pod:8,story:8,clip:8,salat:8,galgen:8,diktat:8,becher:8},tempo:'normal',expl:'on'};
  setFrom();if(type==='clip'){S.screen='game';beginGame('clip');return;}
  S.game={type:type,setup:true};S.screen='game';render();
}

/* ===== Lern-Feed: wie TikTok, aber du lernst ===== */
function feedPool(src){
  const all=allIds();
  if(src==='weak')return all.filter(function(id){return (P.wrong[id]||0)>0;});
  if(src==='due')return dueOf(all,true);
  if(src==='ids')return (S.customIds||[]).filter(isAlive);
  if(src==='focus')return focusIds();
  if(src&&src.charAt(0)==='l'){const b=blocks()[parseInt(src.slice(1),10)];const set={};(b?b.ids:[]).forEach(function(i){set[i]=1;});return all.filter(function(id){return set[id];});}
  return all;
}
function feedPicker(){
  const cur=P.feedSrc||'smart';const bl=blocks();
  const mk=function(i,t,id,d){return {i:i,t:t,d:d,a:'feedgo',id:id,sel:cur===id};};
  const items=[mk('✨','Gemischt','smart','Knifflige, fällige und frische Wörter, jedes Mal neu')];
  if(focusOn())items.push(mk('⭐','Mein Fokus','focus',focusIds().length+' Wörter aus deinen gewählten Listen'));
  items.push(mk('🎯','Knifflige Wörter','weak','Nur Wörter, bei denen du Fehler gemacht hast'));
  items.push(mk('⏰','Fällige Wörter','due','Was heute wiederholt werden sollte'));
  items.push(mk('📚','Alle Wörter','all',allIds().length+' Wörter'));
  bl.forEach(function(b,k){items.push(mk('📖',bName(k),'l'+k,b.ids.length+' Wörter'));});
  setFrom();S.sheet={title:'Lern-Feed',sub:'Welche Wörter möchtest du sehen?',items:items,pick:true};render(true);
}
function startFeed(src){
  src=src||P.feedSrc||'smart';
  let pool=feedPool(src);
  if(pool.length<3&&src!=='smart'){toast('Dafür gibt es hier zu wenige Wörter. Nimm eine andere Auswahl.');return;}
  if(src==='smart')pool=focusOn()?focusIds():allIds();
  const seen=Array.isArray(P.feedSeen)?P.feedSeen:[];const was={};seen.forEach(function(id){was[id]=1;});
  const fresh=shuffle(pool.filter(function(id){return !was[id];})),old=shuffle(pool.filter(function(id){return was[id];}));
  let out=[];
  if(src==='smart'){
    const weak=shuffle(pool.filter(function(id){return (P.wrong[id]||0)>0;})).slice(0,10);
    const due=shuffle(dueOf(pool,true)).slice(0,14);
    const have={};[].concat(weak,due).forEach(function(id){if(!have[id]){have[id]=1;out.push(id);}});
    fresh.concat(old).forEach(function(id){if(!have[id]&&out.length<40){have[id]=1;out.push(id);}});
  }else{out=fresh.concat(old).slice(0,40);}
  out=shuffle(out);
  if(out.length<3){toast('Dafür gibt es noch zu wenige Wörter.');return;}
  if(src!=='ids')P.feedSrc=src;P.feedSeen=seen.concat(out).slice(-160);save();
  setFrom();S.feed={ids:out,done:{},ok:0,no:0,rewarded:false,rw:null,last:0,lastI:-1};S.screen='feed';render();
}
function feedSecHtml(id,i){const f=S.feed;const wl=wlang(id);const ex=E[id]||'';const d=f.done[i];const rp=f.rep&&f.rep[i];
  return '<section class="fc" data-i="'+i+'"><div class="fcard glass'+(d?(d===1?' okd rev':' nod rev'):'')+'" data-i="'+i+'" data-id="'+id+'">'
      +'<div class="fprog"><i style="width:'+Math.round((i+1)/f.ids.length*100)+'%"></i></div><div class="ftop"><span class="fpill">'+(i+1)+' / '+f.ids.length+'</span><span class="fpill soft">'+(rp?'🔁 Wiederholung · ':'')+esc(LNAME[wl]||'Englisch')+'</span></div>'
      +'<div class="fmid"><div class="fword'+(W[id][0].length>22?' sm':'')+'">'+esc(W[id][0])+'</div>'+emoBlock(id,'learn')
      +'<div class="fans"><div class="ftr">'+esc(W[id][1])+'</div>'+(ex?'<div class="fex">'+esc(ex)+'</div>':'')+'</div></div>'
      +'<div class="fdock">'
      +'<button class="fshow" data-act="feedshow" data-i="'+i+'"><b>👁 Lösung zeigen</b><small>oder auf die Karte tippen</small></button>'
      +'<div class="frate2"><div class="fq">Wusstest du es?</div><div class="fbtns">'
      +'<button class="fbn no'+(d===2?' on':'')+'" data-act="feedmiss" data-i="'+i+'"><b>✗ Noch nicht</b><small>kommt gleich wieder</small></button>'
      +'<button class="fbn yes'+(d===1?' on':'')+'" data-act="feedlike" data-i="'+i+'"><b>✓ Gewusst</b><small>sitzt</small></button></div></div>'
      +(canSpeakW(id)?'<button class="fspk" data-act="feedspk" data-id="'+id+'" aria-label="Anhören">🔊</button>':'')
      +'<div class="fhint"><span class="h0">↑ Hochwischen: überspringen</span><span class="h1">← Noch nicht &nbsp;·&nbsp; Gewusst → &nbsp;(Wischen geht auch)</span><span class="h2">Gespeichert. ↑ Hochwischen für das nächste Wort</span></div></div>'
      +'</div></section>';}
function feedView(){
  const f=S.feed;if(!f)return '<div class="glass pad w center">Hier gibt es keine Karten. Starte den Lern-Feed unter Üben.</div>';
  let h='<div id="feed" class="feed" aria-label="Lern-Feed">';
  f.ids.forEach(function(id,i){h+=feedSecHtml(id,i);});
  h+='<section class="fc"><div class="fcard glass fend" id="fend">'+feedEndHtml()+'</div></section></div>';
  return h;
}
function feedEndHtml(){
  const f=S.feed;if(!f)return '';const n=f.ok+f.no;
  return '<div class="fmid"><div class="big-ico">🎉</div><div class="fword sm">Geschafft</div><p class="hint" style="margin:6px 0">'+(n?f.ok+'× ❤️ gewusst · '+f.no+'× nochmal üben':'Du hast keine Karte bewertet. Tippe nach dem Aufdecken auf „Gewusst“ oder „Noch nicht“.')+'</p>'
    +(f.rw?'<p class="hint" style="margin:2px 0">'+(f.rw.capped?'Für heute gibt es keine Belohnung mehr. Lernen darfst du trotzdem.':'+'+f.rw.xp+' XP und +'+f.rw.coins+' 🪙')+'</p>':'')
    +'</div><div class="frate show"><button class="btn pri full" data-act="feedagain">Nochmal</button><button class="btn full" data-act="back">Fertig</button></div>';
}
function feedCard(i){return document.querySelector('#feed .fcard[data-i="'+i+'"]');}
function feedReveal(i){const c=feedCard(i);if(!c||c.classList.contains('rev'))return;c.classList.add('rev');haptic('tap');}
function feedGoNext(i){const secs=document.querySelectorAll('#feed .fc');const nx=secs[i+1];if(nx)setTimeout(function(){if(S.screen!=='feed')return;try{nx.scrollIntoView({behavior:'smooth',block:'start'});}catch(e){nx.scrollIntoView();}},520);}
function feedRate(i,ok,fx,fy){
  const f=S.feed;if(!f)return;const prev=f.done[i];if(prev===(ok?1:2))return;const id=f.ids[i];if(id==null)return;
  f.done[i]=ok?1:2;f.rep=f.rep||{};const isRep=!!f.rep[i];
  if(prev){if(prev===1){f.ok=Math.max(0,f.ok-1);}else{f.no=Math.max(0,f.no-1);}ok?f.ok++:f.no++;applyResult(id,'en',ok,'cards',false);if(ok)markGood(id);}
  else if(!isRep){applyResult(id,'en',ok,'cards',false);bump();if(ok)markGood(id);P.st[ok?'ok':'no']++;if(ok)earn(1);earnXp(ok?8:2);ok?f.ok++:f.no++;}
  else if(ok){earnXp(3);}
  if(!ok){f.reps=f.reps||{};f.reps[id]=(f.reps[id]||0)+1;if(f.reps[id]<=2){const ni=f.ids.length;f.ids.push(id);f.rep[ni]=true;const endSec=document.getElementById('fend');if(endSec&&endSec.parentNode){endSec.parentNode.insertAdjacentHTML('beforebegin',feedSecHtml(id,ni));}document.querySelectorAll('#feed .fpill:not(.soft)').forEach(function(p,k){p.textContent=(k+1)+' / '+f.ids.length;});toast('Kommt gleich nochmal 🔁');}}
  if(dayCount()>=P.dailyGoal&&P.goalPaid!==fmt(new Date())){P.goalPaid=fmt(new Date());earn(10);earnXp(50);toast('Tagesziel erreicht! 🎉');}
  updHist();save();haptic(ok?'ok':'warn');sfx(ok?'ok':'no');
  const c=feedCard(i);if(c){c.classList.add('rev',ok?'okd':'nod');c.querySelectorAll('.fact').forEach(function(b){b.classList.remove('on');});const sel=c.querySelector('[data-act="'+(ok?'feedlike':'feedmiss')+'"]');if(sel)sel.classList.add('on');
    const el=document.createElement('div');el.className='burst';el.textContent=ok?'❤️':'🔁';const r=c.getBoundingClientRect();el.style.left=((fx!=null?fx:r.left+r.width/2)-r.left)+'px';el.style.top=((fy!=null?fy:r.top+r.height/2)-r.top)+'px';c.appendChild(el);setTimeout(function(){el.remove();},800);}
  feedGoNext(i);
}
function feedCurrent(){const f=document.getElementById('feed');if(!f)return 0;return Math.round(f.scrollTop/Math.max(1,f.clientHeight));}
function cardSwInit(){
  if(!window.__cardSw){window.__cardSw=1;let st=null;
    const okS=function(){return S.screen==='learn'||(S.screen==='quiz'&&Q&&Q.m==='cards'&&!Q.over);};
    document.addEventListener('touchstart',function(e){if(!okS()){st=null;return;}const c=e.target.closest&&e.target.closest('.stage');if(!c||e.target.closest('button')){st=null;return;}const t=e.changedTouches[0];st={c:c,x:t.clientX,y:t.clientY,h:false};},{passive:true});
    document.addEventListener('touchmove',function(e){if(!st)return;const t=e.changedTouches[0];const dx=t.clientX-st.x,dy=t.clientY-st.y;
      if(!st.h){if(Math.abs(dx)>14&&Math.abs(dx)>Math.abs(dy)*1.4)st.h=true;else if(Math.abs(dy)>14){st=null;return;}else return;}
      st.c.style.transition='none';st.c.style.transform='translateX('+(dx*.6)+'px) rotate('+(dx/40)+'deg)';st.c.classList.toggle('swr',dx>70);st.c.classList.toggle('swl',dx<-70);},{passive:true});
    document.addEventListener('touchend',function(e){if(!st)return;const c=st.c,h=st.h;const dx=e.changedTouches[0].clientX-st.x;st=null;if(!h)return;
      c.style.transition='transform .3s cubic-bezier(.2,.9,.3,1)';c.style.transform='';c.classList.remove('swr','swl');
      if(Math.abs(dx)>100){const v=dx>0?'1':'0';if(S.screen==='learn')act('lrate',{v:v});else act('know',{v:v});}},{passive:true});
  }
}
cardSwInit();
function feedInit(){
  const el=document.getElementById('feed');if(!el)return;
  const fit=function(){const e=document.getElementById('feed');const hd=document.querySelector('.hdr');if(!e||!hd)return;const top=hd.getBoundingClientRect().bottom;e.style.height=Math.max(360,window.innerHeight-top-10)+'px';};
  fit();setTimeout(fit,120);
  if(window.IntersectionObserver){
    const io=new IntersectionObserver(function(en){en.forEach(function(x){
      const f=S.feed;if(!f||!x.isIntersecting||x.intersectionRatio<0.7)return;
      if(x.target.id==='fend'){if(!f.rewarded){f.rewarded=true;if(f.ok+f.no>0){f.rw=gameReward(Math.min(30,6+f.ok),2);save();}x.target.innerHTML=feedEndHtml();}return;}
      const i=parseInt(x.target.getAttribute('data-i'),10);if(f.lastI!==i){f.lastI=i;if(P.speak){const id=f.ids[i];if(canSpeakW(id))speak(id,true);}}
    });},{root:el,threshold:[0.7]});
    el.querySelectorAll('.fcard').forEach(function(c){io.observe(c);});
  }
  if(!window.__feedSw){window.__feedSw=1;let st=null;
    document.addEventListener('touchstart',function(e){if(S.screen!=='feed'){st=null;return;}const c=e.target.closest&&e.target.closest('#feed .fcard[data-i]');if(!c||e.target.closest('button')){st=null;return;}const t=e.changedTouches[0];st={c:c,x:t.clientX,y:t.clientY,h:false};},{passive:true});
    document.addEventListener('touchmove',function(e){if(!st)return;const t=e.changedTouches[0];const dx=t.clientX-st.x,dy=t.clientY-st.y;
      if(!st.h){if(Math.abs(dx)>14&&Math.abs(dx)>Math.abs(dy)*1.4)st.h=true;else if(Math.abs(dy)>14){st=null;return;}else return;}
      st.c.style.transition='none';st.c.style.transform='translateX('+(dx*.6)+'px) rotate('+(dx/40)+'deg)';st.c.classList.toggle('swr',dx>70);st.c.classList.toggle('swl',dx<-70);},{passive:true});
    document.addEventListener('touchend',function(e){if(!st)return;const c=st.c,h=st.h;const dx=e.changedTouches[0].clientX-st.x;st=null;if(!h)return;
      c.style.transition='transform .3s cubic-bezier(.2,.9,.3,1)';c.style.transform='';c.classList.remove('swr','swl');
      if(Math.abs(dx)>100){const i=parseInt(c.getAttribute('data-i'),10);feedReveal(i);feedRate(i,dx>0);}},{passive:true});
  }
  if(!window.__feedInit){window.__feedInit=1;
    window.addEventListener('resize',function(){if(S.screen==='feed')fit();});
    document.addEventListener('click',function(e){
      if(S.screen!=='feed')return;const c=e.target.closest&&e.target.closest('#feed .fcard[data-i]');if(!c||e.target.closest('button'))return;
      const i=parseInt(c.getAttribute('data-i'),10);if(!S.feed)return;feedReveal(i);
    });
  }
}
/* ===== Lernen mit Sätzen, Sprechen und Verwechslungswörtern ===== */
function sayEn(t,rate){
  if(!canSpeak)return false;
  try{const u=new SpeechSynthesisUtterance(t);const v=pickVoice('en-GB');if(v){u.voice=v;u.lang=v.lang;}else u.lang='en-GB';u.rate=rate||0.9;
    if(speechSynthesis.speaking||speechSynthesis.pending)speechSynthesis.cancel();speechSynthesis.speak(u);if(speechSynthesis.paused)speechSynthesis.resume();return true;}catch(e){return false;}
}
function learnCredit(id,ok,d,m){
  applyResult(id,d||'de',ok,m||'mc',false);bump();if(ok)markGood(id);P.st[ok?'ok':'no']++;if(ok)earn(1);earnXp(ok?8:2);
  if(dayCount()>=P.dailyGoal&&P.goalPaid!==fmt(new Date())){P.goalPaid=fmt(new Date());earn(10);earnXp(50);toast('Tagesziel erreicht! 🎉');}
  updHist();save();haptic(ok?'ok':'warn');sfx(ok?'ok':'no');
}
function lgEnd(title,icon,ok,total,rw,again,extra){
  return '<div class="glass pad w col center"><div class="big-ico">'+icon+'</div><b>'+title+'</b><p class="hint" style="margin:4px 0">'+ok+' von '+total+' richtig</p>'
    +(rw?'<p class="hint" style="margin:2px 0">'+(rw.capped?'Für heute gibt es keine Belohnung mehr. Üben darfst du trotzdem.':'+'+rw.xp+' XP und +'+rw.coins+' 🪙')+'</p>':'')
    +(extra||'')+'<button class="btn pri full" data-act="'+again+'">Nochmal</button><button class="btn full" data-act="back">Fertig</button></div>';
}
/* ---- Lückentext ---- */
function clozeBuild(){
  const out=[];const rx=function(x){return x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');};
  allIds().forEach(function(id){
    if(wlang(id)!=='en')return;const ex=E[id];if(!ex||ex.length<14)return;
    const core=gEn(id).replace(/^to\s+/i,'').replace(/\(.*?\)/g,'').trim();if(core.length<3||/[\/]/.test(core))return;
    let re;
    if(core.indexOf(' ')>=0)re=new RegExp('\\b'+rx(core)+'\\b','i');
    else{const stem=core.length>5?core.slice(0,core.length-2):(core.length>3?core.slice(0,core.length-1):core);re=new RegExp('\\b'+rx(stem)+'[a-zA-Z]{0,4}\\b','i');}
    const m=ex.match(re);if(!m)return;
    out.push({id:id,pre:ex.slice(0,m.index),surf:m[0],post:ex.slice(m.index+m[0].length),full:ex});
  });
  return out;
}
function startCloze(mode){
  const items=shuffle(clozeBuild());
  if(items.length<6){toast('Dafür gibt es noch zu wenige Wörter mit Beispielsätzen.');return;}
  const pick=items.slice(0,10);
  pick.forEach(function(it){const others=shuffle(items.filter(function(x){return x.id!==it.id&&gEn(x.id)!==gEn(it.id);})).slice(0,3);it.opts=shuffle([it.id].concat(others.map(function(x){return x.id;})));});
  setFrom();S.cloze={items:pick,i:0,ok:0,no:0,pick:-1,mode:mode||'read',rw:null,rewarded:false,spoken:-1};S.screen='cloze';render();
}
function clozeView(){
  const c=S.cloze;if(!c)return '<div class="glass pad w center">Keine Aufgabe. Starte den Lückentext unter Üben.</div>';
  const listen=c.mode==='listen';
  let h='<div class="pt"><h1>Lückentext</h1><small>'+(listen?'Hör genau zu: Welches Wort fehlt?':'Welches Wort passt in die Lücke?')+'</small></div>';
  if(c.i>=c.items.length){if(!c.rewarded){c.rewarded=true;c.rw=gameReward(Math.min(30,8+c.ok),3);save();}return h+lgEnd('Geschafft','🧩',c.ok,c.items.length,c.rw,'clzagain');}
  const it=c.items[c.i];const done=c.pick>=0;
  h+='<div class="cnt cnt2"><span>Aufgabe '+(c.i+1)+' von '+c.items.length+'</span><span>'+c.ok+' richtig</span></div><div class="prog thin w"><i style="width:'+Math.round(c.i/c.items.length*100)+'%"></i></div>';
  h+='<div class="glass pad w col center clz">';
  if(listen&&!done)h+='<div class="clzs hid">🎧 Hör dir den Satz an</div>';
  else h+='<div class="clzs">'+esc(it.pre)+(done?'<mark class="'+(c.items[c.i].opts[c.pick]===it.id?'ok':'bad')+'">'+esc(it.surf)+'</mark>':'<span class="blank">_____</span>')+esc(it.post)+'</div>';
  if(canSpeak)h+='<button class="btn" data-act="clzplay">🔊 '+(listen?'Satz anhören':'Satz vorlesen')+'</button>';
  h+='</div><div class="opts">';
  it.opts.forEach(function(o,i){let cl='opt gtap';if(done){if(o===it.id)cl+=' right';else if(i===c.pick)cl+=' wrong';}
    h+='<button class="'+cl+'" data-act="clzopt" data-i="'+i+'"><span class="kn">'+(i+1)+'</span><span>'+esc(gEn(o))+'</span></button>';});
  h+='</div>';
  if(done)h+='<div class="glass pad w tight"><b>'+esc(gEn(it.id))+'</b> = '+esc(W[it.id][1])+'</div><button class="btn pri full" data-act="clznext">Weiter</button>';
  return h;
}
function clozeAuto(){const c=S.cloze;if(!c||c.mode!=='listen'||c.pick>=0||c.i>=c.items.length||c.spoken===c.i)return;c.spoken=c.i;const it=c.items[c.i];setTimeout(function(){if(S.screen==='cloze'&&S.cloze===c&&c.i<c.items.length)sayEn(it.full,0.9);},350);}
/* ---- Sprechen ---- */
function startSpeak(){
  const ids=shuffle((S.coachIds&&S.coachIds.length>=3?S.coachIds:allIds()).filter(function(id){return wlang(id)==='en'&&gEn(id).length<=26;})).slice(0,10);
  if(ids.length<3){toast('Dafür gibt es noch zu wenige Wörter.');return;}
  setFrom();S.spk={ids:ids,i:0,ok:0,no:0,st:'idle',heard:'',res:null,err:'',rw:null,rewarded:false};S.screen='speak';render();
}
function spkSupported(){return !!(window.SpeechRecognition||window.webkitSpeechRecognition);}
function speakView(){
  const s=S.spk;if(!s)return '<div class="glass pad w center">Keine Aufgabe. Starte das Sprechtraining unter Üben.</div>';
  let h='<div class="pt"><h1>Sprechen</h1><small>Sag das englische Wort laut</small></div>';
  if(s.i>=s.ids.length){if(!s.rewarded){s.rewarded=true;s.rw=gameReward(Math.min(30,8+s.ok),3);save();}return h+lgEnd('Gut gesprochen','🎤',s.ok,s.ids.length,s.rw,'spkagain');}
  const id=s.ids[s.i];
  h+='<div class="cnt cnt2"><span>Wort '+(s.i+1)+' von '+s.ids.length+'</span><span>'+s.ok+' richtig</span></div><div class="prog thin w"><i style="width:'+Math.round(s.i/s.ids.length*100)+'%"></i></div>';
  h+='<div class="glass pad w col center"><div class="lang">Deutsch</div><div class="word">'+esc(W[id][1].split(';')[0])+'</div>'+emoBlock(id,'learn')+'</div>';
  if(!spkSupported()){h+='<div class="glass pad w hint">Dein Browser kann in dieser Ansicht nicht zuhören. Öffne EasyVocab direkt in Safari (nicht in einer anderen App) und erlaube das Mikrofon. Du kannst das Wort auch tippen.</div><div class="coin"><input id="spk-in" class="in" type="text" placeholder="Wort tippen" aria-label="Wort tippen" autocomplete="off" autocapitalize="off"><button class="btn sm" data-act="spktype">Prüfen</button></div><button class="btn full" data-act="spknext">Überspringen</button>';return h;}
  if(s.st==='res'){
    h+='<div class="glass pad w col center '+(s.res?'right':'wrong')+'"><div class="big-ico">'+(s.res?'✅':'❌')+'</div><b>'+(s.res?'Richtig!':'Fast. Hör dir das Wort noch einmal an.')+'</b><div class="hint">Ich habe verstanden: „'+esc(s.heard||'…')+'“</div><div class="word sm">'+esc(W[id][0])+'</div>'+(canSpeakW(id)?'<button class="btn" data-act="spkplay">🔊 Anhören</button>':'')+'</div><button class="btn pri full" data-act="spknext">Weiter</button>';
  }else{
    h+='<div class="micw"><button class="mic'+(s.st==='listen'?' on':'')+'" data-act="spkmic" aria-label="Sprechen">'+(s.st==='listen'?'🎙️':'🎤')+'</button><div class="hint">'+(s.st==='listen'?'Ich höre zu …':'Tippe auf das Mikrofon und sprich')+'</div></div>';
    if(s.err)h+='<div class="glass pad w hint">'+esc(s.err)+'</div>';
    h+='<div class="coin"><input id="spk-in" class="in" type="text" placeholder="oder tippe das Wort" aria-label="Wort tippen" autocomplete="off" autocapitalize="off"><button class="btn sm" data-act="spktype">Prüfen</button></div>';
    h+='<button class="btn full" data-act="spknext">Überspringen</button>';
  }
  return h;
}
function spkListen(){
  const s=S.spk;if(!s)return;const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){s.err='Dein Gerät kann hier nicht zuhören.';render(true);return;}
  if(s.st==='listen'){try{s.rec&&s.rec.stop();}catch(e){}return;}
  try{
    let got=false;s.st='listen';s.err='';render(true);
    s.rec=listenOnce('en-GB',function(er,alts){s.rec=null;if(S.spk!==s||S.screen!=='speak')return;if(er||!alts.length){s.st='idle';s.err=micMsg(er);render(true);return;}got=true;spkResult(alts);});
  }catch(e){s.st='idle';s.err='Das Zuhören ist hier nicht möglich.';render(true);}
}
function spkResult(alts){
  const s=S.spk;if(!s||S.screen!=='speak')return;const id=s.ids[s.i];let ok=false;
  ok=speechOK(alts,W[id][0]);sfx(ok?'ok':'no');
  s.heard=alts[0]||'';s.res=ok;s.st='res';ok?s.ok++:s.no++;learnCredit(id,ok,'de','type');render(true);
}
/* ---- Verwechslungswörter ---- */
const CONF=[
['affect','effect','Too much sugar can ___ your mood.','a','affect = beeinflussen (Verb). effect = Wirkung (Nomen).'],
['affect','effect','Music has a strong ___ on me.','b','effect = Wirkung (Nomen). affect = beeinflussen (Verb).'],
['since','for','I have lived here ___ 2019.','a','since + Zeitpunkt (2019, Monday). for + Zeitspanne (five years).'],
['since','for','I have lived here ___ five years.','b','for + Zeitspanne (five years). since + Zeitpunkt (2019).'],
['borrow','lend','Can I ___ your pen, please?','a','borrow = sich etwas leihen. lend = jemandem etwas leihen.'],
['borrow','lend','Could you ___ me ten euros?','b','lend = verleihen. borrow = sich leihen.'],
['do','make','I have to ___ my homework.','a','do = tun, Aufgaben erledigen. make = herstellen, machen.'],
['do','make','She wants to ___ a cake for the party.','b','make = herstellen. do = tun.'],
['said','told','She ___ that she was tired.','a','say = sagen (ohne Person). tell = jemandem etwas sagen.'],
['said','told','He ___ me the truth.','b','tell + Person: He told me. say ohne Person: He said that …'],
['lose','loose','Don\'t ___ your keys!','a','lose = verlieren (Verb). loose = locker (Adjektiv).'],
['lose','loose','My tooth is ___.','b','loose = locker. lose = verlieren.'],
['advice','advise','Can you give me some ___?','a','advice = Rat (Nomen). advise = raten (Verb).'],
['advice','advise','I ___ you to wait.','b','advise = raten (Verb). advice = Rat (Nomen).'],
['accept','except','I ___ your invitation.','a','accept = annehmen. except = außer.'],
['accept','except','Everyone came ___ Tom.','b','except = außer. accept = annehmen.'],
['quiet','quite','Please be ___, the baby is sleeping.','a','quiet = leise, ruhig. quite = ziemlich.'],
['quiet','quite','It is ___ cold today.','b','quite = ziemlich. quiet = leise.'],
['than','then','She is taller ___ me.','a','than = als (Vergleich). then = dann.'],
['than','then','First we eat, ___ we go out.','b','then = dann. than = als (Vergleich).'],
['its','it\'s','The dog wagged ___ tail.','a','its = sein/ihr (besitzanzeigend). it\'s = it is oder it has.'],
['its','it\'s','___ raining outside.','b','it\'s = it is. its = sein/ihr.'],
['their','there','They lost ___ keys.','a','their = ihr (von mehreren). there = dort.'],
['their','there','Put the bag over ___.','b','there = dort. their = ihr.'],
['your','you\'re','___ my best friend.','b','you\'re = you are. your = dein.'],
['your','you\'re','Is this ___ bag?','a','your = dein. you\'re = you are.'],
['here','hear','Come ___ and look at this!','a','here = hier. hear = hören.'],
['here','hear','I can ___ music from next door.','b','hear = hören. here = hier.'],
['weather','whether','The ___ is nice today.','a','weather = Wetter. whether = ob.'],
['weather','whether','I don\'t know ___ he is coming.','b','whether = ob. weather = Wetter.'],
['much','many','How ___ apples do you have?','b','many bei Dingen, die man zählen kann (apples). much bei nicht Zählbarem (water).'],
['much','many','How ___ water do you need?','a','much bei nicht Zählbarem (water). many bei Zählbarem (apples).'],
['fun','funny','The party was great ___.','a','fun = Spaß. funny = lustig.'],
['fun','funny','He told a very ___ joke.','b','funny = lustig. fun = Spaß.'],
['bring','take','Please ___ me a glass of water.','a','bring = herbringen (zu mir). take = wegbringen, mitnehmen.'],
['bring','take','___ this book to the library, please.','b','take = hinbringen, mitnehmen. bring = herbringen.'],
['watch','see','I like to ___ football on TV.','a','watch = aufmerksam anschauen. see = sehen, wahrnehmen.'],
['watch','see','I can ___ a bird in the tree.','b','see = sehen, wahrnehmen. watch = anschauen.'],
['become','get','I want to ___ a doctor.','a','become = werden. get = bekommen. Typischer Fehler: I become a present.'],
['become','get','I will ___ a present for my birthday.','b','get = bekommen. become = werden.'],
['robbed','stole','They ___ the bank last night.','a','rob + Ort/Person (ausrauben). steal + Sache (stehlen).'],
['robbed','stole','Someone ___ my bike.','b','steal + Sache (stehlen). rob + Ort/Person.']
];
function startConf(){
  const items=shuffle(CONF).slice(0,10).map(function(x){return {a:x[0],b:x[1],s:x[2],ans:x[3],tip:x[4]};});
  setFrom();S.conf={items:items,i:0,ok:0,no:0,pick:'',rw:null,rewarded:false};S.screen='conf';render();
}
function confView(){
  const c=S.conf;if(!c)return '<div class="glass pad w center">Keine Aufgabe. Starte „Verwechsler“ unter Üben.</div>';
  let h='<div class="pt"><h1>Verwechsler</h1><small>Zwei Wörter, die man oft verwechselt</small></div>';
  if(c.i>=c.items.length){if(!c.rewarded){c.rewarded=true;c.rw=gameReward(Math.min(30,8+c.ok),3);save();}return h+lgEnd('Geschafft','🎯',c.ok,c.items.length,c.rw,'confagain');}
  const it=c.items[c.i];const done=!!c.pick;const ansW=it[it.ans];
  h+='<div class="cnt cnt2"><span>Aufgabe '+(c.i+1)+' von '+c.items.length+'</span><span>'+c.ok+' richtig</span></div><div class="prog thin w"><i style="width:'+Math.round(c.i/c.items.length*100)+'%"></i></div>';
  h+='<div class="glass pad w col center clz"><div class="clzs">'+esc(it.s).replace('___',done?'<mark class="'+(c.pick===it.ans?'ok':'bad')+'">'+esc(it[c.pick])+'</mark>':'<span class="blank">_____</span>')+'</div></div><div class="opts">';
  ['a','b'].forEach(function(k,i){let cl='opt gtap';if(done){if(k===it.ans)cl+=' right';else if(k===c.pick)cl+=' wrong';}
    h+='<button class="'+cl+'" data-act="confopt" data-v="'+k+'"><span class="kn">'+(i+1)+'</span><span>'+esc(it[k])+'</span></button>';});
  h+='</div>';
  if(done)h+='<div class="glass pad w tight"><b>'+esc(ansW)+'</b><div class="hint" style="margin-top:4px">'+esc(it.tip)+'</div></div><button class="btn pri full" data-act="confnext">Weiter</button>';
  return h;
}
/* ===== Konto (Supabase) ===== */
const SBC=(window.EV_CONFIG||{});
function sbOn(){return isHosted()&&!!(SBC.supabaseUrl&&SBC.supabaseKey);}
let SBS=null;try{SBS=JSON.parse(localStorage.getItem('ev-sb-session')||'null');}catch(e){}
function sbStore(x){SBS=x;try{if(x)localStorage.setItem('ev-sb-session',JSON.stringify(x));else localStorage.removeItem('ev-sb-session');}catch(e){}}
function sbIn(){return !!(sbOn()&&SBS&&SBS.access_token);}
function sbSess(j){
  if(!j||!j.access_token)return false;
  sbStore({access_token:j.access_token,refresh_token:j.refresh_token||(SBS&&SBS.refresh_token),expires_at:j.expires_at||Math.floor(Date.now()/1000)+(j.expires_in||3600),user:{id:(j.user&&j.user.id)||(SBS&&SBS.user&&SBS.user.id),email:(j.user&&j.user.email)||(SBS&&SBS.user&&SBS.user.email)}});
  return true;
}
async function sbFetch(path,o,auth){
  o=o||{};const h=Object.assign({'apikey':SBC.supabaseKey,'Content-Type':'application/json'},o.headers||{});
  if(auth){await sbEnsure();if(!SBS||!SBS.access_token){const e=new Error('Nicht angemeldet');e.status=401;throw e;}h.Authorization='Bearer '+SBS.access_token;}
  const r=await fetch(String(SBC.supabaseUrl).replace(/\/$/,'')+path,{method:o.method||'GET',headers:h,body:o.body!==undefined?JSON.stringify(o.body):undefined});
  let j=null;try{const t=await r.text();j=t?JSON.parse(t):null;}catch(e){}
  if(!r.ok){const m=(j&&(j.error_description||j.msg||j.message||j.error))||('Fehler '+r.status);const e=new Error(String(m));e.status=r.status;throw e;}
  return j;
}
async function sbEnsure(){
  if(!SBS||!SBS.refresh_token)return;
  if(SBS.expires_at&&SBS.expires_at-Date.now()/1000>90)return;
  try{const j=await sbFetch('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:{refresh_token:SBS.refresh_token}});sbSess(j);}
  catch(e){if(e.status===400||e.status===401||e.status===403)sbStore(null);else throw e;}
}
function sbErr(e){
  const m=String((e&&e.message)||e).toLowerCase();
  if(/invalid login|invalid credentials/.test(m))return 'E-Mail oder Passwort stimmt nicht.';
  if(/already registered|already been registered|user already/.test(m))return 'Diese E-Mail ist schon registriert. Melde dich an.';
  if(/not confirmed|confirm/.test(m)&&/email/.test(m))return 'Bitte bestätige zuerst den Link in deiner E-Mail.';
  if(/password/.test(m)&&/(least|short|weak|characters)/.test(m))return 'Das Passwort ist zu kurz. Nimm mindestens 8 Zeichen.';
  if(/valid email|invalid email|email address/.test(m))return 'Diese E-Mail-Adresse sieht nicht richtig aus.';
  if(/rate limit|too many|security purposes/.test(m))return 'Zu viele Versuche. Warte kurz und versuche es später noch einmal.';
  if(/failed to fetch|network|load failed/.test(m))return 'Keine Verbindung. Prüfe dein Internet.';
  return 'Das hat nicht geklappt: '+String((e&&e.message)||e).slice(0,90);
}
async function sbOAuthReturn(){
  try{
    if(!sbOn()||!/access_token=/.test(location.hash||''))return;
    const q={};location.hash.replace(/^#/,'').split('&').forEach(function(kv){const i=kv.indexOf('=');if(i>0)q[decodeURIComponent(kv.slice(0,i))]=decodeURIComponent(kv.slice(i+1));});
    try{history.replaceState(null,'',location.pathname+location.search);}catch(e){}
    if(!q.access_token)return;
    const r=await fetch(String(SBC.supabaseUrl).replace(/\/$/,'')+'/auth/v1/user',{headers:{apikey:SBC.supabaseKey,Authorization:'Bearer '+q.access_token}});
    const u=await r.json();if(!r.ok||!u||!u.id)throw new Error('user');
    sbSess({access_token:q.access_token,refresh_token:q.refresh_token,expires_in:parseInt(q.expires_in||'3600',10),user:{id:u.id,email:u.email}});
    toast('Angemeldet.');S.screen='account';S.acct=null;render(true);
  }catch(e){toast('Die Anmeldung hat nicht geklappt. Versuche es noch einmal.');}
}
setTimeout(sbOAuthReturn,120);
async function sbSave(silent){
  if(!sbIn()){S.cloudErr='nicht angemeldet';if(!silent)toast('Melde dich zuerst an.');return false;}
  try{
    await sbFetch('/rest/v1/backups?on_conflict=user_id',{method:'POST',headers:{'Prefer':'resolution=merge-duplicates,return=minimal'},body:[{user_id:SBS.user.id,txt:encodeBackup(),score:progScore(P),updated_at:new Date().toISOString()}]},true);
    CSAVING=true;P.cloudAt=Date.now();save();CSAVING=false;S.cloudErr='';
    if(!silent){toast('Im Konto gesichert.');render(true);}return true;
  }catch(e){CSAVING=false;S.cloudErr=sbErr(e).slice(0,70);if(!silent)toast('Sichern hat nicht geklappt. '+sbErr(e));return false;}
}
async function sbPeek(){
  if(!sbIn())return null;
  try{
    const j=await sbFetch('/rest/v1/backups?select=txt,score,updated_at&user_id=eq.'+encodeURIComponent(SBS.user.id)+'&limit=1',{},true);
    if(!j||!j.length||typeof j[0].txt!=='string')return null;
    return {at:Date.parse(j[0].updated_at)||0,words:0,txt:j[0].txt,score:(typeof j[0].score==='number')?j[0].score:0};
  }catch(e){return null;}
}
function acctView(){
  if(!sbOn())return '<div class="pt"><h1>Konto</h1><small>Noch nicht verbunden</small></div><div class="glass pad w"><b>Fortschritt sichern und auf mehreren Geräten lernen.</b><p class="hint">Das Konto ist bereit, aber noch nicht mit einem Server verbunden. Der Betreiber trägt dafür einmal die Supabase-Daten in die Datei config.js ein. Bis dahin bleibt dein Fortschritt auf diesem Gerät. Du kannst ihn unter Einstellungen als Datei sichern.</p></div>';
  const a=S.acct||(S.acct={mode:'in',busy:false,err:'',msg:'',del:false});
  let h='<div class="pt"><h1>Konto</h1><small>'+(sbIn()?'Du bist angemeldet':'Sichere deinen Fortschritt')+'</small></div>';
  if(sbIn()){
    h+='<div class="glass pad w col"><div class="lab">Angemeldet als</div><b style="overflow-wrap:anywhere">'+esc(SBS.user&&SBS.user.email||'')+'</b><p class="hint" style="margin:4px 0 0">Dein Fortschritt wird nach dem Lernen automatisch in deinem Konto gesichert. Auf einem anderen Gerät meldest du dich an und holst ihn zurück.</p></div>';
    h+='<div class="glass grp">'+srow('☁️','#5AC8FA','Jetzt sichern','Zuletzt: '+(P.cloudAt?ago(P.cloudAt):'noch nie')+(S.cloudErr?' · '+esc(S.cloudErr):''),'<button class="btn sm" data-act="acsave">Sichern</button>')+srow('📥','#34C759','Stand aus dem Konto holen','Ersetzt den Stand auf diesem Gerät','<button class="btn sm" data-act="acload">Holen</button>')+srow('🔄','#5AC8FA','Automatisch sichern','Nach dem Lernen',tg('autoCloud',P.autoCloud!==false))+'</div>';
    h+='<div class="glass grp">'+srow('🚪','#8E8E93','Abmelden','Dein Fortschritt bleibt auf diesem Gerät','<button class="btn sm" data-act="acout">Abmelden</button>')+srow('🗑️','#FF3B30','Konto löschen','Löscht dein Konto und die Sicherung im Konto. Auf diesem Gerät bleibt alles.','<button class="btn bad sm" data-act="acdel">'+(a.del?'Sicher?':'Löschen')+'</button>')+'</div>';
    if(a.err)h+='<div class="glass pad w hint">'+esc(a.err)+'</div>';
  }else{
    h+='<div class="glass pad w col"><div class="segc wide two" role="group"><button class="'+(a.mode==='in'?'on':'')+'" data-act="acmode" data-v="in">Anmelden</button><button class="'+(a.mode==='up'?'on':'')+'" data-act="acmode" data-v="up">Registrieren</button></div>'
      +'<input id="ac-mail" class="in" type="email" inputmode="email" autocomplete="email" autocapitalize="off" placeholder="E-Mail" aria-label="E-Mail" value="'+esc(a.mail||'')+'"><input id="ac-pw" class="in" type="password" autocomplete="'+(a.mode==='up'?'new-password':'current-password')+'" placeholder="Passwort (mindestens 8 Zeichen)" aria-label="Passwort">'
      +'<button class="btn pri full" data-act="acsubmit"'+(a.busy?' disabled':'')+'>'+(a.busy?'Einen Moment …':(a.mode==='up'?'Konto erstellen':'Anmelden'))+'</button>'
      +((SBC.oauth&&SBC.oauth.length)?'<div class="hint" style="text-align:center">oder</div>'+SBC.oauth.map(function(pv){return '<button class="btn full" data-act="acoauth" data-v="'+pv+'">'+(pv==='apple'?' Mit Apple fortfahren':(pv==='google'?'Mit Google fortfahren':'Mit '+pv+' fortfahren'))+'</button>';}).join(''):'')
      +(a.mode==='in'?'<button class="link" data-act="acforgot" style="align-self:center">Passwort vergessen?</button>':'<p class="hint" style="margin:0">Unter 16? Nutze die App gemeinsam mit deinen Eltern. Mit der Registrierung stimmst du den <button class="link" data-act="legal" data-v="dat">Datenschutz-Hinweisen</button> zu.</p>')
      +'</div>';
    if(a.err)h+='<div class="glass pad w hint" style="color:#FF3B30">'+esc(a.err)+'</div>';
    if(a.msg)h+='<div class="glass pad w hint">'+esc(a.msg)+'</div>';
    h+='<p class="hint" style="margin:0 6px">Ohne Konto funktioniert alles weiter. Das Konto sichert nur deinen Fortschritt.</p>';
  }
  return h;
}
async function acctSubmit(){
  const a=S.acct;if(!a||a.busy)return;
  const mail=(document.getElementById('ac-mail')||{}).value||'';const pw=(document.getElementById('ac-pw')||{}).value||'';
  a.err='';a.msg='';a.mail=mail;
  if(!/^\S+@\S+\.\S+$/.test(mail.trim())){a.err='Gib eine gültige E-Mail-Adresse ein.';render(true);return;}
  if(pw.length<8){a.err='Das Passwort braucht mindestens 8 Zeichen.';render(true);return;}
  a.busy=true;render(true);
  try{
    let j;
    if(a.mode==='up'){
      j=await sbFetch('/auth/v1/signup',{method:'POST',body:{email:mail.trim(),password:pw}});
      if(!(j&&j.access_token)){a.busy=false;a.mode='in';a.msg='Fast geschafft: Wir haben dir eine E-Mail geschickt. Tippe auf den Link darin und melde dich dann hier an.';render(true);return;}
    }else{
      j=await sbFetch('/auth/v1/token?grant_type=password',{method:'POST',body:{email:mail.trim(),password:pw}});
    }
    if(!sbSess(j))throw new Error('Anmeldung fehlgeschlagen');
    a.busy=false;a.err='';
    CCHK=false;await cloudCheck();cloudQueue();
    S.screen='settings';render();toast(a.mode==='up'?'Konto erstellt. Du bist angemeldet.':'Angemeldet.');
  }catch(e){a.busy=false;a.err=sbErr(e);render(true);}
}
async function acctForgot(){
  const a=S.acct;const mail=((document.getElementById('ac-mail')||{}).value||'').trim();a.mail=mail;
  if(!/^\S+@\S+\.\S+$/.test(mail)){a.err='Gib oben deine E-Mail-Adresse ein.';render(true);return;}
  try{await sbFetch('/auth/v1/recover',{method:'POST',body:{email:mail}});a.err='';a.msg='Wenn es ein Konto gibt, haben wir dir eine E-Mail zum Zurücksetzen geschickt.';}catch(e){a.err=sbErr(e);}
  render(true);
}
async function acctOut(){
  try{if(SBS&&SBS.access_token)await sbFetch('/auth/v1/logout',{method:'POST'},true);}catch(e){}
  sbStore(null);S.cloudErr='';S.acct=null;render(true);toast('Abgemeldet.');
}
async function acctDelete(){
  const a=S.acct||(S.acct={mode:'in'});
  if(!a.del){a.del=true;render(true);toast('Noch einmal tippen: Das Konto wird gelöscht.');setTimeout(function(){if(S.acct){S.acct.del=false;if(S.screen==='account')render(true);}},5000);return;}
  try{await sbFetch('/rest/v1/rpc/delete_my_account',{method:'POST',body:{}},true);sbStore(null);S.acct=null;S.screen='settings';render();toast('Dein Konto wurde gelöscht.');}
  catch(e){a.del=false;a.err='Löschen hat nicht geklappt: '+sbErr(e);render(true);}
}
function memTimer(g){
  g.t0=Date.now();
  if(g.limit){g.iv=setInterval(function(){if(S.screen!=='game'||S.game!==g||g.over){clearInterval(g.iv);return;}g.left--;const el=document.getElementById('mt');if(el)el.textContent=g.left;if(g.left<=0){clearInterval(g.iv);g.over=true;g.lost=true;g.tEnd=Date.now();render(true);}},1000);}
}
function memEndPeek(g){
  if(!g.peeking)return;g.peeking=false;if(g.pv)clearInterval(g.pv);
  memTimer(g);if(S.screen==='game'&&S.game===g){haptic('tap');render(true);}
}
function memStart(g,secs){
  if(secs>0){
    g.peeking=true;g.peek=secs;
    g.pv=setInterval(function(){if(S.screen!=='game'||S.game!==g){clearInterval(g.pv);return;}g.peek--;const el=document.getElementById('pk');if(el)el.textContent=g.peek;if(g.peek<=0)memEndPeek(g);},1000);
  }else memTimer(g);
}
function beginGame(type){
  const gs=S.gs;const n=gs.n[type];const src=gs.src,list=gs.list;
  if(type==='cross'){crossStart();return;}if(type==='skit'){skStart();return;}if(type==='duel'){duelStart();return;}
  if(type==='mem'){
    const emo=(gs.variant==='emoji');let ids=gameIds(emo?200:n,src,list);if(emo)ids=ids.filter(function(id){return !!emojiOf(id);}).slice(0,n);
    if(ids.length<4){toast(emo?'Zu wenige Wörter mit Emoji in dieser Auswahl.':'Dafür gibt es hier zu wenige Wörter. Wähle eine andere Quelle.');return;}
    let cards=[];ids.forEach(function(id){cards.push({id:id,f:true,open:false,done:false});cards.push({id:id,f:false,open:false,done:false});});
    const g={type:'mem',emo:emo,cards:shuffle(cards),first:-1,lock:false,moves:0,t0:Date.now(),over:false,limit:MEMLV[stufe()].lim?Math.max(24,ids.length*MEMLV[stufe()].lim):0,flip:MEMLV[stufe()].flip};g.left=g.limit;S.game=g;
    memStart(g,MEMLV[stufe()].peek);
  } else if(type==='blitz'){
    const ids=gameIds(n,src,list);if(ids.length<6){toast('Dafür gibt es hier zu wenige Wörter. Wähle eine andere Quelle.');return;}
    const bl=BLZLV[stufe()];const g={type:'blitz',pool:ids,t:bl.t,T:bl.t,opt:bl.opt,pen:bl.pen,score:0,combo:0,max:0,over:false,flash:'',q:null};g.q=blitzQ(g);S.game=g;
    g.iv=setInterval(function(){if(S.screen!=='game'||S.game!==g){clearInterval(g.iv);return;}g.t--;const el=document.getElementById('bt');if(el)el.textContent=g.t;if(g.t<=0){clearInterval(g.iv);g.over=true;g.rw=gameReward(Math.min(40,g.score*3),3);render(true);}},1000);
  } else if(type==='salat'||type==='galgen'||type==='diktat'){miniStart(type);return;
  } else if(type==='clip'){
    const ids=gameIds(n,src,list);if(ids.length<3){toast('Dafür gibt es hier zu wenige Wörter. Wähle eine andere Quelle.');return;}
    const g={type:'clip',ids:ids,i:0,step:0,paused:false,done:false,rev:false};S.game=g;clipPlan(g);
  } else if(type==='becher'){
    const ids=gameIds(n||8,src,list);if(ids.length<4){toast('Dafür gibt es hier zu wenige Wörter. Wähle eine andere Quelle.');return;}
    const g={type:'becher',ids:ids,i:0,score:0,miss:[],over:false,phase:'',cups:[],slot:[]};S.game=g;render();brStart(g);return;
  } else {S.game={type:type,busy:false,err:'',res:null,ids:null};}
  render();
}
function blitzQ(g){const id=g.pool[Math.floor(Math.random()*g.pool.length)];const toDe=Math.random()<0.5;
  const ans=toDe?gShort(W[id][1]):gEn(id);const opts=[ans];let guard=0;
  while(opts.length<(g.opt||4)&&guard++<60){const o=g.pool[Math.floor(Math.random()*g.pool.length)];const t=toDe?gShort(W[o][1]):gEn(o);if(opts.indexOf(t)<0)opts.push(t);}
  return {id:id,toDe:toDe,prompt:toDe?gEn(id):gShort(W[id][1]),ans:ans,opts:shuffle(opts)};}
function setupView(type){
  const gs=S.gs;gs.n=gs.n||{};gs.n.becher=gs.n.becher||8;const T={duel:['Vokabel-Duell','Zwei Spieler an einem iPad, einer sitzt oben, einer unten'],mem:['Memory','Wähle, welche Wörter ins Spiel kommen'],blitz:['Blitz','Wähle, aus welchen Wörtern gefragt wird'],pod:['Mini-Podcast','Wähle die Wörter und die Stimmen'],story:['Geschichte','Wähle die Wörter für die Geschichte'],clip:['Lern-Clip','Ein kurzer animierter Film mit deinen Wörtern'],salat:['Wortsalat','Ordne die Buchstaben zum richtigen Wort'],galgen:['Wörter raten','Rate das Wort Buchstabe für Buchstabe'],diktat:['Diktat','Höre das Wort und schreibe es auf'],becher:['Becherspiel','Merke dir, unter welchem Becher die Übersetzung liegt'],cross:['Kreuzworträtsel','Ein Rätsel aus deinen Wörtern. Die Hinweise sind auf Deutsch'],skit:['Skittles','Wirf auf das Wort, das zum deutschen Begriff passt']}[type];
  const NS={mem:[4,6,8,10,12,16],blitz:[20,40,80],pod:[5,8,12],story:[5,8,12],clip:[5,8,12],salat:[5,8,12],galgen:[5,8,12],diktat:[5,8,12],becher:[5,8,12],cross:[6,8,10],skit:[1,2,3],duel:[5,10,15,20]}[type];
  gs.n.cross=gs.n.cross||8;gs.n.skit=gs.n.skit||2;gs.n.duel=gs.n.duel||10;const bl=blocks();
  let h='<div class="pt"><h1>'+T[0]+'</h1><small>'+T[1]+'</small></div><div class="glass grp w">';
  h+=srow('🎯','#FF9F0A','Wörter aus','Womit soll gespielt werden?',segc('src',['mix','weak','due','list'],gs.src,{mix:'Gemischt',weak:'Knifflige',due:'Fällige',list:'Liste'},'gset'));
  if(gs.src==='list')h+=srow('📚','#34C759','Liste','','<select id="gl" class="in inl" aria-label="Liste">'+bl.map(function(b,k){return '<option value="'+k+'"'+(gs.list===k?' selected':'')+'>'+esc(bName(k))+'</option>';}).join('')+'</select>');
  h+=srow('🔢','#30B0C7',type==='mem'?'Paare':(type==='blitz'?'Wortvorrat':(type==='skit'?'Runden (je 6 Kegel)':(type==='cross'?'Wörter im Rätsel':'Anzahl Wörter'))),'',segc('n',NS,gs.n[type],null,'gset'));
  if(type==='duel'){h+=srow('🗣️','#FF2D55','Antwort','Auswählen oder laut sagen (der Gegner entscheidet)',segc('dmode',['opts','say'],gs.dmode||'opts',{opts:'Auswählen',say:'Laut sagen'},'gset'));}
  if(type==='mem'){
    h+=srow('🧩','#FF6B8B','Kartenpaare','',segc('variant',['trans','emoji'],gs.variant||'trans',{trans:'Wort + Übersetzung',emoji:'Wort + Emoji'},'gset'));
  }
  if(STUFEN_HELP[type]){h+=srow('🎚️','#A2845E','Stufe',STUFEN_HELP[type],segc('stufe',['1','2','3','4'],String(gs.stufe||2),{1:'Leicht',2:'Mittel',3:'Schwer',4:'Profi'},'gset'));}
  if(false&&type==='becher'){h+=srow('🎚️','#A2845E','Stufe','Leicht: bunte Becher. Mittel: Farben verschwinden beim Mischen. Schwer: alle gleich. Profi: sehr schnell, bis 5 Becher',segc('stufe',['1','2','3','4'],String(gs.stufe||2),{1:'Leicht',2:'Mittel',3:'Schwer',4:'Profi'},'gset'));}
  if(type==='diktat'){
    h+=srow('⏱️','#A2845E','Tempo','Wie schnell gesprochen wird',segc('tempo',['slow','normal','fast'],gs.tempo,{slow:'Ruhig',normal:'Normal',fast:'Flott'},'gset'));
    h+=srow('🔁','#30B0C7','Vorlesen','Wie oft pro Wort',segc('rep',['1','2','3'],gs.rep||'1',{1:'1×',2:'2×',3:'3×'},'gset'));
    h+=srow('✅','#34C759','Korrektur','Wann siehst du das Ergebnis?',segc('dikt',['end','now'],gs.dikt||'end',{end:'Am Ende',now:'Sofort'},'gset'));
    h+=srow('👁️','#FF9F0A','Bedeutung zeigen','Aus ist wie ein echtes Diktat',segc('mean',['off','on'],gs.mean||'off',{off:'Aus',on:'An'},'gset'));
  }
  if(type==='clip'||type==='story'||type==='diktat'){
    const vs0=enVoices();
    h+=srow('🎙️','#FF375F',type==='clip'||type==='diktat'?'Stimme':'Sprecher','','<span class="row2c"><button class="btn sm" data-act="vprev" data-v="c" aria-label="Stimme anhören">▶</button><select id="vc" class="in inl" aria-label="Stimme"><option value="">Automatisch</option>'+vs0.map(function(v){return '<option value="'+esc(v.name)+'"'+(P.vC===v.name?' selected':'')+'>'+esc(vLabel(v))+'</option>';}).join('')+'</select></span>');
    if(type==='story'){h+=srow('⏱️','#A2845E','Tempo','',segc('tempo',['slow','normal','fast'],gs.tempo,{slow:'Ruhig',normal:'Normal',fast:'Flott'},'gset'));h+=srow('🇩🇪','#34C759','Erklärungen','Deutsche Erklärung der Wörter am Ende',segc('expl',['off','on'],gs.expl,{off:'Aus',on:'An'},'gset'));}
  }
  if(type==='clip'){
    h+=srow('⏱️','#A2845E','Tempo','',segc('tempo',['slow','normal','fast'],gs.tempo,{slow:'Ruhig',normal:'Normal',fast:'Flott'},'gset'));
    h+=srow('🔊','#FF375F','Ton','Wort und Beispielsatz vorlesen',segc('clipsound',['off','on'],gs.clipsound||'on',{off:'Aus',on:'An'},'gset'));
  }
  if(type==='pod'){
    const vs=enVoices();
    h+=srow('🎙️','#FF375F','Stimme A','','<span class="row2c"><button class="btn sm" data-act="vprev" data-v="a" aria-label="Stimme A anhören">▶</button><select id="va" class="in inl" aria-label="Stimme A"><option value="">Automatisch</option>'+vs.map(function(v){return '<option value="'+esc(v.name)+'"'+(P.vA===v.name?' selected':'')+'>'+esc(vLabel(v))+'</option>';}).join('')+'</select></span>');
    h+=srow('🎙️','#5AC8FA','Stimme B','','<span class="row2c"><button class="btn sm" data-act="vprev" data-v="b" aria-label="Stimme B anhören">▶</button><select id="vb" class="in inl" aria-label="Stimme B"><option value="">Automatisch</option>'+vs.map(function(v){return '<option value="'+esc(v.name)+'"'+(P.vB===v.name?' selected':'')+'>'+esc(vLabel(v))+'</option>';}).join('')+'</select></span>');
    h+=srow('⏱️','#A2845E','Tempo','',segc('tempo',['slow','normal','fast'],gs.tempo,{slow:'Ruhig',normal:'Normal',fast:'Flott'},'gset'));
    h+=srow('🇩🇪','#34C759','Erklärungen','Deutsche Erklärung der Wörter am Ende',segc('expl',['off','on'],gs.expl,{off:'Aus',on:'An'},'gset'));
  }
  h+='</div>';
  const cnt=gameIds(type==='skit'?gs.n[type]*6:gs.n[type],gs.src,gs.list).length;
  if((type==='pod'||type==='clip'||type==='story'||type==='diktat')&&(enVoicesAll().length>enVoices().length||S.gs.allV))h+='<button class="link" data-act="gset" data-key="allV" data-v="'+(S.gs.allV?'0':'1')+'" style="align-self:center">'+(S.gs.allV?'Nur die besten Stimmen zeigen':'Alle Stimmen zeigen')+'</button>';
  if(type==='pod'||type==='clip'||type==='story'||type==='diktat'){const ev=enVoices();const good=ev.filter(function(v){return vQual(v)!=='Standard';}).length;h+='<p class="hint" style="margin:0 6px">'+(good?good+' hochwertige Stimmen gefunden (Premium, Siri oder Erweitert). Sie stehen oben in der Liste.':'Nur Standard-Stimmen gefunden. Für besseren Klang lade am iPad unter Einstellungen > Bedienungshilfen > Gesprochene Inhalte > Stimmen > Englisch eine Premium- oder erweiterte Stimme.')+'</p>';}
  if(!enVoices().length&&type==='pod')h+='<p class="hint" style="margin:0 6px">Auf diesem Gerät gibt es keine englischen Stimmen. Du kannst den Text trotzdem lesen.</p>';
  if((type==='pod'||type==='story')&&!aiOK())h+='<div class="glass pad w hint">Dafür braucht die App Claude. '+(P.aiOn===false?'Du hast die KI-Funktionen in den Einstellungen ausgeschaltet.':'Hier ist es gerade nicht verfügbar.')+'</div>';
  else h+='<button class="btn pri full" data-act="gostart" data-v="'+type+'">'+(cnt?cnt+' Wörter · Los':'Keine passenden Wörter')+'</button>'+((type==='pod'||type==='story')?'<p class="hint" style="margin:0 6px">Das ist 1 KI-Anfrage.</p>'+((P.story&&P.story.type===type)?'<button class="btn full" data-act="lastres" data-v="'+type+'">Letzte Folge nochmal öffnen (ohne neue Anfrage)</button>':''):'');
  return h;
}
function vQual(v){const n=(v.name||'').toLowerCase();return /premium/.test(n)?'Premium':(/siri/.test(n)?'Siri':(/enhanced|erweitert|optimiert/.test(n)?'Erweitert':'Standard'));}
function vLabel(v){return v.name+' · '+vQual(v)+' · '+v.lang;}
function enVoicesAll(){return VOICES.filter(function(x){return x.lang.toLowerCase().replace('_','-').indexOf('en')===0;}).sort(function(a,b){return voiceScore(b)-voiceScore(a);});}
function enVoices(){const all=enVoicesAll().filter(function(v){return voiceScore(v)>=0;});if((S.gs&&S.gs.allV)||P.allVs)return all;const good=all.filter(function(v){return vQual(v)!=='Standard';});return (good.length?good:all.slice(0,3)).slice(0,8);}
function gameView(){
  const g=S.game;if(!g)return '<div class="glass pad w center">Kein Spiel aktiv.</div>';
  if(g.setup)return setupView(g.type);
  if((g.type==='pod'||g.type==='story')&&!g.res&&!g.busy&&!g.started)return setupView(g.type);
  if(g.type==='mem'){
    const done=g.cards.filter(function(c){return c.done;}).length;
    let h='<div class="pt"><h1>Memory</h1><small>Finde die Paare: Wort und Übersetzung</small></div><div class="cnt cnt2"><span>Züge: '+g.moves+(g.limit?' · ⏱ <b id="mt">'+g.left+'</b> s':'')+'</span><span>'+(done/2)+' von '+(g.cards.length/2)+' Paaren</span></div>';
    if(g.peeking)h+='<div class="glass pad w peekbar"><span>👀 Merk dir die Karten: noch <b id="pk">'+g.peek+'</b> s</span><button class="btn sm pri" data-act="peekskip">Los geht\'s</button></div>';
    const nC=g.cards.length,narrow=window.innerWidth<600;const cols=narrow?(nC<=12?3:4):(nC<=16?4:(nC<=20?5:(nC<=24?6:8)));const rows=Math.ceil(nC/cols);
    h+='<div class="memgrid fit'+(g.peeking?' peeking':'')+'" style="--mc:'+cols+';--mr:'+rows+';--mw:'+(cols*(narrow?118:176))+'px">'+g.cards.map(function(c,i){const txt=c.f?gEn(c.id):(g.emo?emojiOf(c.id):gShort(W[c.id][1]));const show=c.open||c.done||g.peeking;return '<button class="mc'+(c.done?' done':'')+(show?' up':'')+'" data-act="memtap" data-i="'+i+'" aria-label="'+(show?esc(txt):'Karte')+'"><span>'+(show?esc(txt):'?')+'</span></button>';}).join('')+'</div>';
    if(g.over&&g.lost){h+='<div class="glass pad w col center"><div class="big-ico">⏰</div><b>Zeit abgelaufen</b><div class="hint">Du hast '+(done/2)+' von '+(g.cards.length/2)+' Paaren gefunden. Das nächste Mal klappt es.</div><button class="btn pri full" data-act="gostart" data-v="mem">Nochmal</button></div>';}else if(g.over){const sec=Math.round((g.tEnd-g.t0)/1000);h+='<div class="glass pad w col center"><div class="big-ico">🎉</div><b>Geschafft in '+g.moves+' Zügen und '+sec+' Sekunden</b>'+(g.rw?'<div class="hint">'+(g.rw.capped?'Für heute gibt es keine Belohnung mehr. Spielen darfst du trotzdem.':'+'+g.rw.xp+' XP und +'+g.rw.coins+' 🪙')+'</div>':'')+'<button class="btn pri full" data-act="gostart" data-v="mem">Nochmal</button></div>';}
    return h;
  }
  if(g.type==='blitz'){
    if(g.over)return '<div class="pt"><h1>Blitz</h1></div><div class="glass pad w col center"><div class="big-ico">⚡</div><div class="big">'+g.score+' Treffer</div><div class="hint">Beste Serie: '+g.max+'</div>'+(g.score>(P.blitzBest||0)?'<b>Neuer Rekord! 🏆</b>':'<div class="hint">Rekord: '+(P.blitzBest||0)+'</div>')+(g.rw?'<div class="hint">'+(g.rw.capped?'Für heute gibt es keine Belohnung mehr. Spielen darfst du trotzdem.':'+'+g.rw.xp+' XP und +'+g.rw.coins+' 🪙')+'</div>':'')+'<button class="btn pri full" data-act="gostart" data-v="blitz">Nochmal</button></div>';
    const q=g.q;
    return '<div class="pt"><h1>Blitz</h1><small>'+(g.T||60)+' Sekunden, so viele richtig wie möglich</small></div><div class="cnt cnt2"><span>Treffer: '+g.score+(g.combo>2?' · Serie '+g.combo+' 🔥':'')+'</span><span>⏱ <b id="bt">'+g.t+'</b> s</span></div><div class="glass q'+(g.flash?' fl-'+g.flash:'')+'"><div class="lang">'+(q.toDe?'Englisch → Deutsch':'Deutsch → Englisch')+'</div><div class="word">'+esc(q.prompt)+'</div></div><div class="opts">'+q.opts.map(function(o,i){return '<button class="opt gtap" data-act="bopt" data-i="'+i+'"><span class="kn">'+(i+1)+'</span><span>'+esc(o)+'</span></button>';}).join('')+'</div>';
  }
  if(g.type==='becher')return becherView(g);
  if(g.type==='cross')return crossView(g);
  if(g.type==='skit')return skitView(g);
  if(g.type==='duel')return duelView(g);
  if(g.type==='salat'||g.type==='galgen'||g.type==='diktat')return miniView(g);
  if(g.type==='clip'){
    if(g.done)return '<div class="pt"><h1>Lern-Clip</h1></div><div class="glass pad w col center"><div class="big-ico">🎬</div><b>Clip zu Ende</b><div class="hint">'+g.ids.length+' Wörter gezeigt. Jetzt kurz abfragen?</div><button class="btn pri full" data-act="clipquiz">Kurz abfragen</button><button class="btn full" data-act="gostart" data-v="clip">Nochmal ansehen</button></div>';
    const id=g.ids[g.i];
    let h='<div class="pt"><h1>Lern-Clip</h1><small id="clipcnt">Wort '+(g.i+1)+' von '+g.ids.length+'</small></div>';
    h+='<div class="clipbox" id="clipbox" style="--ch:'+clipHue(id)+'" data-act="clipctl" data-v="tap"><div class="clipbg"><b></b><b></b><b></b></div><div class="clipprog" id="clipprog">'+g.ids.map(function(_,k){return '<i><b style="width:'+(k<g.i?100:0)+'%"></b></i>';}).join('')+'</div>';
    h+='<div class="clipst" id="clipsc"><div class="cscene in" data-k="'+g.i+'">'+clipSceneHtml(g,id)+'</div></div>';
    h+='<div class="clippause" id="clippz"'+(g.paused?'':' hidden')+'>⏸</div></div>';
    setTimeout(function(){if(S.game===g&&!g.done)clipProg(g);},30);
    h+='<div class="row2" style="grid-template-columns:1fr 1fr 1fr 1fr"><button class="btn" data-act="clipctl" data-v="prev" aria-label="Zurück">⏮</button><button class="btn" id="clippb" data-act="clipctl" data-v="pause" aria-label="Pause">'+(g.paused?'▶':'⏸')+'</button><button class="btn" data-act="clipctl" data-v="next" aria-label="Weiter">⏭</button><button class="btn" data-act="clipctl" data-v="speak" aria-label="Nochmal sprechen">🔊</button></div>';
    return h;
  }
  // story / pod
  const pod=g.type==='pod';
  let h='<div class="pt"><h1>'+(pod?'Mini-Podcast':'Geschichte')+'</h1><small>'+(pod?'Zwei Stimmen sprechen mit deinen Wörtern':'Eine kurze Geschichte mit deinen Wörtern')+'</small></div>';
  if(!aiOK())return h+'<div class="glass pad w hint">Dafür braucht die App Claude. '+(P.aiOn===false?'Du hast die KI-Funktionen in den Einstellungen ausgeschaltet.':'Hier ist es gerade nicht verfügbar.')+'</div>';
  if(g.busy)h+='<div class="glass pad w center"><div class="spin"></div><p>Wird geschrieben…</p></div>';
  else{
    h+='<div class="glass pad w col"><p class="hint" style="margin:0">Claude nimmt etwa 6 Wörter, die du üben solltest (zuerst die kniffligen), und schreibt daraus '+(pod?'ein kurzes Gespräch':'eine kleine Geschichte')+'. Das ist 1 Anfrage.</p><button class="btn pri full" data-act="storygo">'+(g.res?'Neue '+(pod?'Folge':'Geschichte')+' schreiben':(pod?'Folge schreiben':'Geschichte schreiben'))+'</button><button class="link" data-act="game" data-v="'+g.type+'">Wörter und Stimmen ändern</button></div>';
    if(g.err)h+='<div class="err" role="alert">'+esc(g.err)+'</div>';
    if(g.res){const r=g.res;const hl=function(t){let x=esc(t);(r.ids||[]).forEach(function(id){const w=gEn(id);if(!w)return;const core=w.replace(/^to /,'');try{x=x.replace(new RegExp('\\b('+core.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\w*)','ig'),'<mark class="wd" data-act="wordtip" data-id="'+id+'">$1</mark>');}catch(e){}});return x;};
      h+='<div class="glass pad w col"><div class="hd2"><b>'+esc(r.title||'')+'</b><span class="row2c"><button class="btn sm" data-act="storyplay">▶ Vorlesen</button><button class="btn sm" data-act="storystop">■</button></span></div>';
      if(pod)(r.lines||[]).forEach(function(l){h+='<p class="pl"><b>'+esc(l.s)+':</b> '+hl(l.t)+'</p>';});else h+='<p class="story">'+hl(r.text||'')+'</p>';
      h+='<div class="hint">Tippe auf ein markiertes Wort für die Übersetzung.</div>';
      h+='<details class="more"><summary><span>Deutsche Übersetzung</span><span class="car">▾</span></summary><div style="padding:8px 0">'+(pod?(r.de||[]).map(function(t){return '<p style="margin:4px 0">'+esc(t)+'</p>';}).join(''):'<p>'+esc(r.deText||'')+'</p>')+'</div></details>';
      if((r.notes||[]).length){h+='<div class="lab" style="margin-top:6px">Wörter erklärt</div>';r.notes.forEach(function(n){h+='<div class="wr"><span class="wm"><b>'+esc(n.w)+'</b><small>'+esc(n.de)+(n.tip?' · '+esc(n.tip):'')+'</small></span></div>';});}
      else h+='<div class="hint">Wörter: '+(r.ids||[]).map(function(id){return esc(gEn(id));}).join(', ')+'</div>';
      h+='</div>';}
  }
  return h;
}
function storyPrompt(pod,ids){
  const list=ids.map(function(id){return '"'+gEn(id)+'" ('+gShort(W[id][1])+')';}).join(', ');
  const nt=' Erkläre außerdem jedes verwendete Wort kurz auf Deutsch: "notes":[{"w":"englisches Wort","de":"deutsche Übersetzung","tip":"kurze Merkhilfe oder Hinweis zum Gebrauch auf Deutsch, höchstens 14 Wörter"}] mit einem Eintrag pro Wort.';
  if(pod)return 'Schreibe ein natürliches, lockeres Gespräch zwischen zwei Personen (A und B) auf einfachem Schul-Englisch (Niveau A2 bis B1) mit '+Math.min(14,Math.max(6,ids.length+3))+' kurzen Zeilen, mit Umgangssprache wie "Well", "Oh really?" und Rückfragen. Verwende diese Vokabeln, jeweils mindestens einmal, in dieser Form: '+list+'. Antworte NUR mit JSON: {"title":"kurzer Titel","lines":[{"s":"A","t":"englische Zeile"}],"de":["deutsche Übersetzung der Zeile 1","..."],"notes":[]}. Die Liste "de" hat genau so viele Einträge wie "lines".'+nt;
  return 'Schreibe eine kurze, lustige Geschichte auf einfachem Schul-Englisch (Niveau A2 bis B1), '+Math.min(10,Math.max(5,ids.length))+' Sätze. Verwende diese Vokabeln, jeweils mindestens einmal: '+list+'. Antworte NUR mit JSON: {"title":"kurzer Titel","text":"die Geschichte","deText":"deutsche Übersetzung","notes":[]}.'+nt;
}
function storySpeak(items,single){
  if(!window.speechSynthesis)return;speechSynthesis.cancel();S.speakGo=true;
  const en=enVoices();const de=VOICES.filter(function(x){return x.lang.toLowerCase().replace('_','-').indexOf('de')===0;}).sort(function(a,b){return voiceScore(b)-voiceScore(a);});
  const byName=function(n){return n?VOICES.filter(function(x){return x.name===n;})[0]:null;};
  const vA=byName(single?P.vC:P.vA)||en[0]||null;let vB=byName(P.vB)||en.filter(function(x){return !vA||x.name!==vA.name;})[0]||vA;
  const rate={slow:0.82,normal:0.95,fast:1.08}[(S.gs&&S.gs.tempo)||'normal'];
  let i=0;const next=function(){if(!S.speakGo||i>=items.length)return;const it=items[i++];const u=new SpeechSynthesisUtterance(it.t);
    let v=it.k==='de'?de[0]:(it.v===1?vB:vA);const same=(vA&&vB&&vA.name===vB.name);
    u.lang=it.k==='de'?'de-DE':'en-GB';if(v){try{u.voice=v;u.lang=v.lang;}catch(e){}}
    u.pitch=Math.max(0.6,Math.min(1.5,(it.k==='de'?1:(same?(it.v===1?1.18:0.92):1))+(Math.random()*0.1-0.05)));
    u.rate=rate*(0.97+Math.random()*0.08)*(it.k==='de'?0.98:1);
    const pause=it.k==='de'?280:(it.t.length>60?420:300)+Math.random()*160;
    u.onend=function(){setTimeout(next,pause);};u.onerror=function(){setTimeout(next,pause);};speechSynthesis.speak(u);};
  next();
}

function focusBan(){const on=focusOn();return '<button class="glass gtap feedban" data-act="focuspick"><span class="ico">⭐</span><span class="tt"><b>'+(on?'Lernfokus: '+focusIds().length+' Wörter':'Nur diese Listen')+'</b><small>'+(on?focusList().map(function(k){return esc(bName(k));}).join(', '):'Wähle, welche Listen du übst')+'</small></span><span class="chev">›</span></button>';}
/* ===== Build 121: Suche, Rückgängig, Stufen, Kreuzworträtsel, Skittles, Bedienhilfen ===== */
function stufe(){return parseInt((S.gs&&S.gs.stufe)||2,10)||2;}
const MEMLV={1:{peek:10,lim:0,flip:1100},2:{peek:5,lim:0,flip:800},3:{peek:3,lim:10,flip:600},4:{peek:0,lim:6,flip:450}};
const BLZLV={1:{t:75,opt:3,pen:0},2:{t:60,opt:4,pen:0},3:{t:45,opt:4,pen:2},4:{t:30,opt:4,pen:4}};
const MKLEN={salat:{1:[4,6],2:[4,9],3:[5,11],4:[7,13]},galgen:{1:[4,7],2:[4,10],3:[5,12],4:[7,14]}};
const STUFEN_HELP={mem:'Leicht: lange Vorschau. Profi: keine Vorschau und wenig Zeit',blitz:'Leicht: 75 s, 3 Antworten. Profi: 30 s, Fehler kosten Zeit',salat:'Leicht: kurze Wörter. Profi: lange Wörter',galgen:'Leicht: 8 Leben und erster Buchstabe. Profi: 4 Leben, lange Wörter',cross:'Leicht: Länge steht dabei, unbegrenzt Hinweise. Profi: ohne Länge, 3 Hinweise',skit:'Leicht: 3 Versuche. Profi: 1 Versuch und ähnliche Wörter'};
/* --- Rückgängig --- */
function undoPush(scr){try{S.undo={scr:scr,at:Date.now(),p:JSON.stringify(P),i:S.i,ql:(scr==='quiz'&&Q&&Q.queue)?Q.queue.length:-1,q:(scr==='quiz'&&Q)?JSON.stringify(Q):null};}catch(e){S.undo=null;}}
function undoOK(){const u=S.undo;if(!u||Date.now()-u.at>60000||S.screen!==u.scr)return false;if(u.scr==='learn')return S.i===u.i+1;if(u.scr==='quiz')return !!(Q&&Q.queue&&Q.queue.length!==u.ql);return false;}
function undoDo(){const u=S.undo;if(!u||!undoOK())return;try{const np=JSON.parse(u.p);Object.keys(P).forEach(function(k){delete P[k];});Object.assign(P,np);
  if(u.scr==='learn'){S.i=u.i;S.flip=false;}else if(u.scr==='quiz'&&u.q){Q=JSON.parse(u.q);}
  S.undo=null;save();toast('Rückgängig gemacht.');render();}catch(e){S.undo=null;}}
/* --- Globale Suche --- */
function searchView(){
  const q=(S.gq||'').trim();
  let h='<div class="pt"><h1>Suche</h1><small>Wörter und Einstellungen</small></div><input id="gq" class="in" type="search" placeholder="Wort oder Einstellung suchen" aria-label="Suchen" autocomplete="off" value="'+esc(S.gq||'')+'"><div id="gres" class="w col">'+searchBody(q)+'</div>';
  return h;
}
function searchBody(q){
  q=(q||'').trim().toLowerCase();if(!q){const rq=(P.recentQ||[]);if(rq.length)return '<div class="glass pad w col tight"><div class="lab">Zuletzt gesucht</div><div class="latchips">'+rq.map(function(x){return '<button class="btn" style="min-height:36px;padding:4px 12px" data-act="gqset" data-v="'+esc(x)+'">'+esc(x)+'</button>';}).join('')+'</div></div>';}
  if(!q)return '<div class="glass pad w hint">Tippe ein englisches oder deutsches Wort. Du findest auch Einstellungen, zum Beispiel «Dunkel» oder «Schrift».</div>';
  const m=allIds().filter(function(id){return W[id][0].toLowerCase().indexOf(q)>=0||W[id][1].toLowerCase().indexOf(q)>=0;});
  let h='';
  const setl=[['Dunkelmodus','Aussehen'],['Hintergrund','Aussehen'],['Schriftgröße','Bedienungshilfen'],['Kontrast','Bedienungshilfen'],['Tagesziel','Lernen'],['Alter','Lernen'],['Erinnerung','Erinnerung und Bericht'],['Stimme','Ton und Stimmen'],['Sicherung','Daten'],['KI','KI']].filter(function(x){return x[0].toLowerCase().indexOf(q)>=0||x[1].toLowerCase().indexOf(q)>=0;});
  setl.slice(0,4).forEach(function(x){h+='<button class="glass gtap lrow w" data-act="setfind" data-k="'+esc(x[1])+'"><span class="li">⚙️</span><span class="lt"><b>'+esc(x[0])+'</b><small>Einstellungen · '+esc(x[1])+'</small></span><span class="chev">›</span></button>';});
  if(!m.length&&!h)return '<div class="glass pad w hint">Keine Treffer.</div>';
  if(m.length){h+='<div class="glass pad w">';m.slice(0,60).forEach(function(id){h+=wordRow(id);});h+='</div>';if(m.length>60)h+='<div class="hint" style="text-align:center">'+m.length+' Treffer, die ersten 60 sind sichtbar.</div>';}
  return h;
}
/* --- Skittles --- */
function skRot(i){return [1,-1,-1,1,-1,1][i%6]*(66+(i*7)%14);}
function skAnim(g,i,hit,fx,done){
  const bahn=document.querySelector('.skbahn'),btn=bahn&&bahn.querySelector('.skpin[data-i="'+i+'"]'),rest=bahn&&bahn.querySelector('.skball');
  if(!btn||!btn.animate||!rest||P.perf==='on'||document.documentElement.classList.contains('calm')||(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches)){fx();done();return;}
  S.skBusy=true;
  const br=bahn.getBoundingClientRect(),pr=btn.getBoundingClientRect(),rr=rest.getBoundingClientRect();
  const tx=pr.left+pr.width/2-(rr.left+rr.width/2),ty=pr.top+pr.height*0.62-(rr.top+rr.height/2);
  const dir=(pr.left+pr.width/2<br.left+br.width/2)?-1:1;
  const T=Math.max(420,Math.min(720,Math.abs(ty)*1.5));
  const pins=Array.prototype.slice.call(bahn.querySelectorAll('.skpin'));
  const mid=(function(e){const r=e.getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2];});
  const pc=mid(btn);
  const ba=rest.animate([{transform:'translate(0,0) scale(1) rotate(0deg)'},{transform:'translate('+(tx*0.55)+'px,'+(ty*0.55)+'px) scale(.84) rotate(420deg)',offset:.55},{transform:'translate('+tx+'px,'+ty+'px) scale(.66) rotate(760deg)'}],{duration:T,easing:'cubic-bezier(.35,.05,.6,1)',fill:'forwards'});
  const finish=function(){try{rest.remove();}catch(e){}S.skBusy=false;done();};
  ba.onfinish=function(){
    fx();
    const lab=btn.querySelector('span');
    if(hit){
      if(lab&&lab.animate)lab.animate([{opacity:1},{opacity:0}],{duration:280,fill:'forwards'});
      const r=skRot(i),fx2=r>0?60:-60;
      btn.animate([{transform:'none',opacity:1},{transform:'translate('+(dir*-10)+'px,-22px) rotate('+(r*0.35)+'deg)',opacity:1,offset:.3},{transform:'translate('+(fx2*0.7)+'px,-6px) rotate('+(r*1.12)+'deg)',opacity:.7,offset:.7},{transform:'rotate('+r+'deg) translateY(8px) scale(.7)',opacity:0}],{duration:720,easing:'cubic-bezier(.22,.7,.3,1)',fill:'forwards'});
      pins.forEach(function(o){if(o===btn||o.classList.contains('dn'))return;const m=mid(o),d=Math.hypot(m[0]-pc[0],m[1]-pc[1]);if(d<200){const k=1-d/220,sg=m[0]>=pc[0]?1:-1;o.animate([{transform:'none'},{transform:'translateX('+(sg*8*k)+'px) rotate('+(sg*7*k)+'deg)',offset:.25},{transform:'translateX('+(-sg*4*k)+'px) rotate('+(-sg*4*k)+'deg)',offset:.6},{transform:'none'}],{duration:520,delay:60,easing:'ease-out'});}});
      for(let n=0;n<9;n++){const d=document.createElement('i');d.className='skdust';d.style.left=(pc[0]-br.left)+'px';d.style.top=(pc[1]-br.top)+'px';bahn.appendChild(d);const a=(Math.PI*2*n/9)+Math.random()*.5,L=26+Math.random()*30;d.animate([{transform:'translate(-50%,-50%) scale(1)',opacity:.9},{transform:'translate(calc(-50% + '+Math.cos(a)*L+'px),calc(-50% + '+(Math.sin(a)*L-10)+'px)) scale(.2)',opacity:0}],{duration:520+Math.random()*180,easing:'ease-out',fill:'forwards'}).onfinish=function(){d.remove();};}
      rest.animate([{transform:'translate('+tx+'px,'+ty+'px) scale(.66) rotate(760deg)',opacity:1},{transform:'translate('+(tx+dir*-26)+'px,'+(ty-80)+'px) scale(.45) rotate(1000deg)',opacity:0}],{duration:420,easing:'ease-out',fill:'forwards'});
      setTimeout(finish,640);
    }else{
      btn.animate([{transform:'none'},{transform:'rotate('+(dir*9)+'deg) translateX('+(dir*6)+'px)',offset:.18},{transform:'rotate('+(-dir*7)+'deg)',offset:.4},{transform:'rotate('+(dir*4)+'deg)',offset:.62},{transform:'rotate('+(-dir*2)+'deg)',offset:.82},{transform:'none'}],{duration:520,easing:'ease-out'});
      btn.classList.add('lo');
      rest.animate([{transform:'translate('+tx+'px,'+ty+'px) scale(.66) rotate(760deg)',opacity:1},{transform:'translate('+(tx+dir*-110)+'px,'+(ty-30)+'px) scale(.5) rotate(1100deg)',opacity:0}],{duration:520,easing:'cubic-bezier(.3,.6,.5,1)',fill:'forwards'});
      setTimeout(finish,480);
    }
  };
}
function skFrame(g){const pins=g.fr[g.f];g.order=shuffle(pins.map(function(_,i){return i;}));g.k=0;g.down={};g.lost={};g.tries=0;g.fmiss=0;g.fstate='play';g.shake=-1;g.enter=true;}
function skNext(g){g.k++;g.tries=0;if(g.k>=g.order.length){g.fstate='end';const all=Object.keys(g.down).length===g.order.length;if(all&&g.fmiss===0){g.score+=20;g.strikes++;g.lastStrike=true;sfx('ok');confetti();}else g.lastStrike=false;}render(true);}
function skStart(){
  const gs=S.gs,n=gs.n.skit||2,lv=stufe();
  let ids=gameIds(n*6,gs.src,gs.list);if(ids.length<6){toast('Dafür gibt es hier zu wenige Wörter. Wähle eine andere Quelle.');return;}
  if(lv>=3)ids=ids.slice().sort(function(a,b){return gEn(a).length-gEn(b).length;});
  const fr=[];for(let k=0;k+6<=ids.length&&fr.length<n;k+=6)fr.push(ids.slice(k,k+6));
  if(lv<3)fr.forEach(function(f,i){fr[i]=shuffle(f);});
  const g={type:'skit',fr:fr,f:0,score:0,hits:0,strikes:0,total:fr.length*6,ch:{1:3,2:2,3:2,4:1}[lv],over:false};skFrame(g);S.game=g;render();
}
function skitView(g){
  let h='<div class="pt"><h1>Skittles</h1><small>Wirf auf das richtige englische Wort</small></div>';
  if(g.over)return h+'<div class="glass pad w col center"><div class="big-ico">🎳</div><b>'+g.score+' Punkte</b><div class="hint">'+g.hits+' von '+g.total+' Kegeln · '+g.strikes+' Strike'+(g.strikes===1?'':'s')+'</div>'+(g.rw?'<div class="hint">'+(g.rw.capped?'Für heute gibt es keine Belohnung mehr. Spielen darfst du trotzdem.':'+'+g.rw.xp+' XP und +'+g.rw.coins+' 🪙')+'</div>':'')+'<button class="btn pri full" data-act="gostart" data-v="skit">Nochmal</button></div>';
  const pins=g.fr[g.f];const cur=g.order[g.k];
  h+='<div class="cnt cnt2"><span>Runde '+(g.f+1)+' von '+g.fr.length+'</span><span>'+g.score+' Punkte</span></div>';
  if(g.fstate==='play')h+='<div class="glass q skq"><div class="lang">Welcher Kegel ist das?</div><div class="word">'+esc(gShort(W[pins[cur]][1]))+'</div><div class="skch" aria-label="Versuche">'+'🎳'.repeat(Math.max(0,g.ch-g.tries))+'<span class="skx">'+'✕'.repeat(Math.min(g.ch,g.tries))+'</span></div></div>';
  const rows=[[0,1,2],[3,4],[5]];const ent=g.enter;g.enter=false;
  h+='<div class="skbahn'+((g.fstate==='end'&&g.lastStrike)?' strike':'')+'"><div class="skarr" aria-hidden="true"></div>'+rows.map(function(r){return '<div class="skrow">'+r.map(function(i){const dn=g.down[i],lo=g.lost[i];return '<button class="skpin'+(dn?' dn':'')+(lo?' lo':'')+(g.shake===i?' shk':'')+(ent?' skin':'')+'" style="--r:'+skRot(i)+'deg;--dl:'+(i*55)+'ms" data-act="skpin" data-i="'+i+'"'+((dn||g.fstate!=='play')?' disabled':'')+'><i aria-hidden="true"></i><span>'+esc(gEn(pins[i]))+'</span></button>';}).join('')+'</div>';}).join('')+(g.fstate==='play'?'<div class="skball rest" aria-hidden="true"></div>':'')+'</div>';
  g.shake=-1;
  if(g.fstate==='end'){const last=g.f>=g.fr.length-1;h+='<div class="glass pad w col center"><div class="big-ico">'+(g.lastStrike?'💥':'🎳')+'</div><b>'+(g.lastStrike?'Strike! +20 Bonus':Object.keys(g.down).length+' von 6 Kegeln')+'</b><button class="btn pri full" data-act="skfnext">'+(last?'Ergebnis':'Nächste Runde')+'</button></div>';}
  return h;
}
/* ===== Build 123: Sprachen-Filter und Latein ===== */
function langsHave(){const s={};for(let i=BASE;i<W.length;i++){const c=P.custom[i-BASE];if(c&&!c.del&&!(P.hid&&P.hid[i]))s[c.lang||'en']=1;}return ['en','fr','la'].filter(function(l){return s[l];});}
function langBar(){const L=langsHave();if(L.length<2)return '';const cur=P.view||'all';const o=['all'].concat(L);const cn={all:0,en:0,fr:0,la:0};for(let i=BASE;i<W.length;i++){const c=P.custom[i-BASE];if(c&&!c.del&&!(P.hid&&P.hid[i])){cn[c.lang||'en']++;cn.all++;}}return '<div class="segc langbar" role="group" aria-label="Sprache wählen">'+o.map(function(v){return '<button class="'+(cur===v?'on':'')+'" data-l="'+v+'" data-act="lview" data-v="'+v+'">'+({all:'Alle',en:'🇬🇧 Englisch',fr:'🇫🇷 Französisch',la:'🏛️ Latein'})[v]+' <small>'+cn[v]+'</small></button>';}).join('')+'</div>';}
const LAT_CS=['Nom.','Gen.','Dat.','Akk.','Abl.'],LAT_PERS=['1. Sg.','2. Sg.','3. Sg.','1. Pl.','2. Pl.','3. Pl.'];
function latNorm(s){return String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/\s+/g,' ').trim();}
const LATC={};
function latParse(txt){const k=String(txt);if(!(k in LATC)){let r=null;try{r=latParse0(k);}catch(e){r=null;}LATC[k]=r;}return LATC[k];}
function vg(s){return (s.match(/[aeiouy]+/g)||[]).length;}
function latIstem(lem,stem,g){
  if(['pater','mater','frater','canis','iuvenis','senex','vates','sedes','panis','volucris','accipiter'].indexOf(lem)>=0)return false;
  if(g==='n')return /(e|al|ar)$/.test(lem);
  if(/(is|es)$/.test(lem)&&vg(lem)===vg(stem+'is'))return true;
  if(vg(lem)===1&&/[^aeiou]{2}$/.test(stem))return true;
  return false;
}
function latNoun(lem,gen,g){
  const dash=gen[0]==='-';const gs=dash?gen.slice(1):gen;let d,stem=null;
  if(/ae$/.test(gs))d=1;else if(/ei$/.test(gs))d=5;else if(/us$/.test(gs))d=4;else if(/is$/.test(gs))d=3;else if(/i$/.test(gs))d=2;else return null;
  if(!dash)stem=gs.slice(0,gs.length-({1:2,2:1,3:2,4:2,5:2})[d]);
  else if(d===1&&/a$/.test(lem))stem=lem.slice(0,-1);
  else if(d===2&&/(us|um)$/.test(lem))stem=lem.slice(0,-2);
  else if(d===4&&/us$/.test(lem))stem=lem.slice(0,-2);
  else if(d===5&&/es$/.test(lem))stem=lem.slice(0,-2);
  const r={pos:'n',lem:lem,gen:gs,g:g,decl:d,forms:null,note:''};
  if(stem===null||!stem){r.note=(d===3?'Für die Formen schreibe den vollen Genitiv, z. B. rex, regis m.':'Für die Formen schreibe den vollen Genitiv, z. B. ager, agri m.');return r;}
  let sg,pl;
  if(d===1){sg=[lem,stem+'ae',stem+'ae',stem+'am',stem+'a'];pl=[stem+'ae',stem+'arum',stem+'is',stem+'as',stem+'is'];}
  else if(d===2){if(g==='n'){sg=[lem,stem+'i',stem+'o',lem,stem+'o'];pl=[stem+'a',stem+'orum',stem+'is',stem+'a',stem+'is'];}else{sg=[lem,stem+'i',stem+'o',stem+'um',stem+'o'];pl=[stem+'i',stem+'orum',stem+'is',stem+'os',stem+'is'];}}
  else if(d===3){const ist=latIstem(lem,stem,g);r.ist=ist;if(g==='n'){sg=[lem,stem+'is',stem+'i',lem,stem+(ist?'i':'e')];pl=[stem+(ist?'ia':'a'),stem+(ist?'ium':'um'),stem+'ibus',stem+(ist?'ia':'a'),stem+'ibus'];}else{sg=[lem,stem+'is',stem+'i',stem+'em',stem+'e'];pl=[stem+'es',stem+(ist?'ium':'um'),stem+'ibus',stem+'es',stem+'ibus'];}r.note=ist?'i-Stamm: Genitiv Plural auf -ium. Ausnahmen prüfen.':'Konsonantische Deklination. Ausnahmen prüfen.';}
  else if(d===4){if(g==='n'){r.note='Neutra der u-Deklination haben wir (noch) ohne Formen.';return r;}sg=[lem,stem+'us',stem+'ui',stem+'um',stem+'u'];pl=[stem+'us',stem+'uum',stem+'ibus',stem+'us',stem+'ibus'];}
  else{sg=[lem,stem+'ei',stem+'ei',stem+'em',stem+'e'];pl=[stem+'es',stem+'erum',stem+'ebus',stem+'es',stem+'ebus'];}
  r.stem=stem;r.forms=[sg,pl];return r;
}
function latVerb(inf,p1,pf,sup){
  let c;
  if(/are$/.test(inf))c='1';else if(/ire$/.test(inf)&&inf.length>3&&!/eo$/.test(p1))c='4';else if(/ere$/.test(inf)){c=/eo$/.test(p1)?'2':(/io$/.test(p1)?'3i':'3');}else return null;
  const r={pos:'v',inf:inf,p1:p1,pf:pf,sup:sup,conj:c,tenses:[]};
  const E6=function(st,e){return e.map(function(x){return st+x;});};
  let pres,imp,fut;
  if(c==='1'){const s=inf.slice(0,-2);pres=[p1].concat(E6(s,['s','t','mus','tis','nt']));imp=E6(s,['bam','bas','bat','bamus','batis','bant']);fut=E6(s,['bo','bis','bit','bimus','bitis','bunt']);}
  else if(c==='2'){const s=inf.slice(0,-2);pres=[p1].concat(E6(s,['s','t','mus','tis','nt']));imp=E6(s,['bam','bas','bat','bamus','batis','bant']);fut=E6(s,['bo','bis','bit','bimus','bitis','bunt']);}
  else if(c==='3'){const s=inf.slice(0,-3);pres=[p1].concat(E6(s,['is','it','imus','itis','unt']));imp=E6(s+'e',['bam','bas','bat','bamus','batis','bant']);fut=E6(s,['am','es','et','emus','etis','ent']);}
  else if(c==='3i'){const s=inf.slice(0,-3);pres=[p1].concat(E6(s,['is','it','imus','itis','iunt']));imp=E6(s+'ie',['bam','bas','bat','bamus','batis','bant']);fut=E6(s+'i',['am','es','et','emus','etis','ent']);}
  else{const s=inf.slice(0,-2);pres=[p1].concat(E6(s,['s','t','mus','tis','unt']));imp=E6(s+'e',['bam','bas','bat','bamus','batis','bant']);fut=E6(s,['am','es','et','emus','etis','ent']);}
  r.tenses.push({n:'Präsens',f:pres},{n:'Imperfekt',f:imp},{n:'Futur I',f:fut});
  if(pf&&/i$/.test(pf)){const ps=pf.slice(0,-1);r.tenses.push({n:'Perfekt',f:E6(ps,['i','isti','it','imus','istis','erunt'])});}
  return r;
}
function latParse0(txt){
  const t=latNorm(txt);const p=t.split(/\s*,\s*/).filter(Boolean);if(p.length<2)return null;
  if(p[0]==='esse'&&p[1]==='sum')return {pos:'v',inf:'esse',p1:'sum',pf:'fui',sup:p[3]||'',conj:'irr',tenses:[{n:'Präsens',f:['sum','es','est','sumus','estis','sunt']},{n:'Imperfekt',f:['eram','eras','erat','eramus','eratis','erant']},{n:'Futur I',f:['ero','eris','erit','erimus','eritis','erunt']},{n:'Perfekt',f:['fui','fuisti','fuit','fuimus','fuistis','fuerunt']}]};
  if(p.length>=3&&/re$/.test(p[0])&&/o$/.test(p[1])&&/i$/.test(p[2]))return latVerb(p[0],p[1],p[2],p[3]||'');
  let gen=null,g=null,m=p[1].match(/^(-?[a-z]+)\s+(m|f|n)\.?$/);
  if(m){gen=m[1];g=m[2];}else if(p[2]&&/^(m|f|n)\.?$/.test(p[2])&&/^-?[a-z]+$/.test(p[1])){gen=p[1];g=p[2][0];}
  if(gen)return latNoun(p[0],gen,g);
  if(p.length>=3&&p[1][0]==='-'&&p[2][0]==='-'){const st=/us$/.test(p[0])?p[0].slice(0,-2):null;if(!st||p[1]!=='-a'||p[2]!=='-um')return {pos:'a',lem:p[0],note:'Adjektiv. Formen gibt es für Wörter wie bonus, -a, -um.'};return {pos:'a',lem:p[0],adj:{m:[[st+'us',st+'i',st+'o',st+'um',st+'o'],[st+'i',st+'orum',st+'is',st+'os',st+'is']],f:[[st+'a',st+'ae',st+'ae',st+'am',st+'a'],[st+'ae',st+'arum',st+'is',st+'as',st+'is']],n:[[st+'um',st+'i',st+'o',st+'um',st+'o'],[st+'a',st+'orum',st+'is',st+'a',st+'is']]},note:'a-/o-Deklination: Adjektive richten sich in Kasus, Numerus und Genus nach dem Nomen.'};}
  return null;
}
function latTable(info){
  if(!info)return '';
  if(info.pos==='n'&&info.forms){let h='<table class="lattab"><tr><th></th><th>Singular</th><th>Plural</th></tr>';for(let i=0;i<5;i++)h+='<tr><th>'+LAT_CS[i]+'</th><td>'+esc(info.forms[0][i])+'</td><td>'+esc(info.forms[1][i])+'</td></tr>';return h+'</table>'+(info.note?'<div class="hint">'+esc(info.note)+'</div>':'');}
  if(info.pos==='v'){let h='<div class="lattw">';info.tenses.forEach(function(t){h+='<table class="lattab"><tr><th colspan="2">'+esc(t.n)+' Aktiv</th></tr>';for(let i=0;i<6;i++)h+='<tr><th>'+LAT_PERS[i]+'</th><td>'+esc(t.f[i])+'</td></tr>';h+='</table>';});return h+'</div>';}
  if(info.pos==='a'&&info.adj){let h='';[0,1].forEach(function(n){h+='<table class="lattab"><tr><th>'+(n?'Plural':'Singular')+'</th><th>m</th><th>f</th><th>n</th></tr>';for(let i=0;i<5;i++)h+='<tr><th>'+LAT_CS[i]+'</th><td>'+esc(info.adj.m[n][i])+'</td><td>'+esc(info.adj.f[n][i])+'</td><td>'+esc(info.adj.n[n][i])+'</td></tr>';h+='</table>';});return h+'<div class="hint">'+esc(info.note)+'</div>';}
  return info.note?'<div class="hint">'+esc(info.note)+'</div>':'';
}
function latChips(info){
  if(!info)return '';const ch=[];
  if(info.pos==='n'){ch.push('Nomen');ch.push({m:'maskulin',f:'feminin',n:'neutrum'}[info.g]);ch.push(info.decl+'. Deklination');}
  else if(info.pos==='v'){ch.push('Verb');ch.push(({'1':'a-Konjugation','2':'e-Konjugation','3':'konsonantische Konjugation','3i':'i-Konjugation (kurzes i)','4':'i-Konjugation',irr:'unregelmäßig'})[info.conj]);}
  else if(info.pos==='a')ch.push('Adjektiv');
  return '<div class="latchips">'+ch.map(function(x){return '<span>'+esc(x)+'</span>';}).join('')+'</div>';
}
function latWords(){const out=[];for(let i=BASE;i<W.length;i++){const c=P.custom[i-BASE];if(!c||c.del||c.lang!=='la'||(P.hid&&P.hid[i]))continue;const info=latParse(c.en);if(info&&((info.pos==='n'&&info.forms)||info.pos==='v'))out.push({id:i,info:info});}return out;}
function pick1(a){return a[Math.floor(Math.random()*a.length)];}
function uniqTake(arr,not,n){const o=[];shuffle(arr.slice()).forEach(function(x){if(o.length<n&&x!==not&&o.indexOf(x)<0)o.push(x);});return o;}
function latQ(w){
  const info=w.info,de=W[w.id][1];const kinds=info.pos==='n'?['form','analyse','gen','form']:(info.conj==='irr'?['form','analyse','form']:['form','analyse','parts','form']);
  const kind=pick1(kinds);
  if(info.pos==='n'){
    const F=info.forms;
    if(kind==='gen'){const st=info.stem;const g=info.g;const cand=[[st+'is','m'],[st+'is','f'],[st+'is','n'],[st+'i','m'],[st+'ae','f'],[st+'us','m'],[st+'ei','f'],[st+'orum','m']];const right=F[0][1]+', '+g+'.';const opts=[right];shuffle(cand.slice()).forEach(function(c){const t=c[0]+', '+c[1]+'.';if(opts.length<4&&opts.indexOf(t)<0)opts.push(t);});return {id:w.id,k:'gen',p:'Genitiv und Genus?',s:info.lem+' ('+de+')',o:shuffle(opts),ok:[right],tab:info};}
    if(kind==='form'){const n=Math.random()<.5?0:1,c=1+Math.floor(Math.random()*4);const right=F[n][c];const pool=[];for(let a=0;a<2;a++)for(let b=0;b<5;b++)pool.push(F[a][b]);const o=[right].concat(uniqTake(pool,right,3));if(o.length<3)return latQ(w);return {id:w.id,k:'form',p:LAT_CS[c]+' '+(n?'Plural':'Singular')+'?',s:info.lem+' ('+de+')',o:shuffle(o),ok:[right],tab:info};}
    const n=Math.random()<.5?0:1,c=Math.floor(Math.random()*5);const f=F[n][c];const valid=[];for(let a=0;a<2;a++)for(let b=0;b<5;b++)if(F[a][b]===f)valid.push(LAT_CS[b]+' '+(a?'Pl.':'Sg.'));const all=[];for(let a=0;a<2;a++)for(let b=0;b<5;b++)all.push(LAT_CS[b]+' '+(a?'Pl.':'Sg.'));const o=valid.concat(uniqTake(all.filter(function(x){return valid.indexOf(x)<0;}),'',Math.max(2,4-valid.length)));return {id:w.id,k:'analyse',p:'Welcher Kasus und Numerus?',s:f+'  (von '+info.lem+')',o:shuffle(o),ok:valid,tab:info,multi:valid.length>1};
  }
  const T=info.tenses;
  if(kind==='parts'){const parts=[info.inf,info.p1,info.pf,info.sup].filter(Boolean);const right=parts.join(', ');const pb=info.pf.replace(/(avi|evi|ivi|ui|si|xi|i)$/,''),sb=(info.sup||'').replace(/(atum|itum|tum|sum|ctum|um)$/,'');const alt=[[['avi','ui','ivi','si','xi'],['atum','itum','tum','sum','ctum']]][0];const o=[right];let n=0;while(o.length<4&&n++<30){const t=[info.inf,info.p1,pb+pick1(alt[0]),info.sup?sb+pick1(alt[1]):''].filter(Boolean).join(', ');if(o.indexOf(t)<0)o.push(t);}if(o.length<3)return latQ(w);return {id:w.id,k:'parts',p:'Stammformen?',s:info.inf+' ('+de+')',o:shuffle(o),ok:[right],tab:info};}
  if(kind==='form'){const ti=Math.floor(Math.random()*T.length),pi=Math.floor(Math.random()*6);const right=T[ti].f[pi];const pool=[];T.forEach(function(t){t.f.forEach(function(x){pool.push(x);});});const o=[right].concat(uniqTake(pool,right,3));return {id:w.id,k:'form',p:LAT_PERS[pi]+' '+T[ti].n+'?',s:info.inf+' ('+de+')',o:shuffle(o),ok:[right],tab:info};}
  const ti=Math.floor(Math.random()*T.length),pi=Math.floor(Math.random()*6);const f=T[ti].f[pi];const valid=[],all=[];T.forEach(function(t){for(let i=0;i<6;i++){const l=t.n+' · '+LAT_PERS[i];all.push(l);if(t.f[i]===f)valid.push(l);}});
  const o=valid.concat(uniqTake(all.filter(function(x){return valid.indexOf(x)<0;}),'',Math.max(2,4-valid.length)));return {id:w.id,k:'analyse',p:'Tempus und Person?',s:f+'  (von '+info.inf+')',o:shuffle(o),ok:valid,tab:info,multi:valid.length>1};
}
function latStart(redo){
  let ws=latWords();if(!redo&&S.latMode==='n')ws=ws.filter(function(w){return w.info.pos==='n';});if(!redo&&S.latMode==='v')ws=ws.filter(function(w){return w.info.pos==='v';});if(!ws.length){toast('Für das Training brauchst du lateinische Wörter im Format „rosa, -ae f.“ oder „amare, amo, amavi, amatum“.');return;}
  const sh=shuffle(ws.slice());const qs=[];const N=redo?Math.min(10,ws.length):10;for(let i=0;i<N;i++)qs.push(latQ(sh[i%sh.length]));
  S.lat={qs:qs,i:0,score:0,pick:null,over:false,wrong:[]};setFrom();S.screen='lat';render();
}
function latView(){
  const L=S.lat;const ws=latWords();
  let h='<div class="pt"><h1>Latein-Training</h1><small>Kasus, Formen und Stammformen</small></div>';
  if(!L){
    const nn=ws.filter(function(w){return w.info.pos==='n';}).length,nv=ws.length-nn;
    h+='<div class="glass pad w col"><div class="lab">Dein Latein-Wortschatz</div><div>'+(ws.length?nn+' Nomen und '+nv+' Verben mit Formen. Wörter ohne erkennbares Format fehlen hier.':'Noch keine passenden Wörter.')+'</div><div class="hint">Format: <b>rosa, -ae f.</b> · <b>rex, regis m.</b> · <b>amare, amo, amavi, amatum</b></div></div>';
    h+=(ws.length?'<div class="w3wrap w">'+segc('lm',['all','n','v'],S.latMode||'all',{all:'Alles',n:'Nomen',v:'Verben'},'latmode')+'</div><button class="btn pri full" data-act="latgo">Training starten (10 Fragen)</button>':'')+'<button class="btn full" data-act="latpack">Latein-Starterpaket laden (50 Wörter)</button>';
    if(ws.length){h+='<div class="glass pad w"><div class="lab" style="margin-bottom:6px">Formen nachschlagen</div>';ws.slice(0,40).forEach(function(w){h+=wordRow(w.id);});h+='</div>';}
    return h;
  }
  if(L.over)return h+'<div class="glass pad w col center"><div class="big-ico">🏛️</div><b>'+L.score+' von '+L.qs.length+' richtig</b>'+(L.rw?'<div class="hint">'+(L.rw.capped?'Für heute gibt es keine Belohnung mehr.':'+'+L.rw.xp+' XP und +'+L.rw.coins+' 🪙')+'</div>':'')+(L.wrong&&L.wrong.length?'<button class="btn full" data-act="latredo">Nur die '+L.wrong.length+' Fehler wiederholen</button>':'')+'<button class="btn pri full" data-act="latgo">Nochmal</button><button class="btn full" data-act="back">Fertig</button></div>';
  const q=L.qs[L.i];const done=L.pick!==null;
  h+='<div class="cnt cnt2"><span>Frage '+(L.i+1)+' von '+L.qs.length+'</span><span>'+L.score+' richtig</span></div>';
  h+='<div class="glass q"><div class="lang">'+esc(q.p)+'</div><div class="word">'+esc(q.s)+'</div>'+(q.multi?'<div class="hint">Mehrere Antworten stimmen. Eine reicht.</div>':'')+'</div><div class="opts latopts">';
  q.o.forEach(function(o,i){const isOk=q.ok.indexOf(o)>=0;let c='opt';if(done){if(isOk)c+=' ok';else if(L.pick===i)c+=' bad';}h+='<button class="'+c+'" data-act="latpick" data-i="'+i+'"'+(done?' disabled':'')+'>'+esc(o)+'</button>';});
  h+='</div>';
  if(done){const right=q.ok.indexOf(q.o[L.pick])>=0;h+='<div class="sheet '+(right?'right':'wrong')+'" role="status"><b>'+(right?'Richtig':'Nicht ganz')+'</b>'+(right?'':'<div class="sol">Richtig: '+esc(q.ok.join(' oder '))+'</div>')+'</div><div class="glass pad w">'+latTable(q.tab)+'</div><button class="btn pri full" data-act="latnext">'+(L.i>=L.qs.length-1?'Ergebnis':'Weiter')+'</button>';}
  return h;
}
const LAT_PACK=[['rosa, -ae f.','Rose','Puella rosam amat.'],['puella, -ae f.','Mädchen','Puella in horto ambulat.'],['terra, -ae f.','Erde, Land',''],['aqua, -ae f.','Wasser',''],['silva, -ae f.','Wald',''],['via, -ae f.','Weg, Straße',''],['dominus, -i m.','Herr','Dominus servum vocat.'],['servus, -i m.','Sklave, Diener',''],['amicus, -i m.','Freund','Amicus mihi donum dat.'],['ager, agri m.','Acker, Feld',''],['puer, pueri m.','Junge, Kind',''],['templum, -i n.','Tempel',''],['bellum, -i n.','Krieg',''],['donum, -i n.','Geschenk',''],['verbum, -i n.','Wort',''],['rex, regis m.','König','Rex urbem regit.'],['pater, patris m.','Vater',''],['mater, matris f.','Mutter',''],['homo, hominis m.','Mensch',''],['tempus, temporis n.','Zeit',''],['corpus, corporis n.','Körper',''],['nomen, nominis n.','Name',''],['urbs, urbis f.','Stadt',''],['civis, civis m.','Bürger',''],['hostis, hostis m.','Feind',''],['manus, -us f.','Hand',''],['exercitus, -us m.','Heer',''],['senatus, -us m.','Senat',''],['res, rei f.','Sache, Ding',''],['dies, diei m.','Tag',''],['fides, fidei f.','Treue, Glaube',''],['amare, amo, amavi, amatum','lieben','Parentes liberos amant.'],['laudare, laudo, laudavi, laudatum','loben',''],['vocare, voco, vocavi, vocatum','rufen',''],['portare, porto, portavi, portatum','tragen',''],['monere, moneo, monui, monitum','mahnen, warnen',''],['videre, video, vidi, visum','sehen',''],['habere, habeo, habui, habitum','haben',''],['regere, rego, rexi, rectum','leiten, herrschen',''],['scribere, scribo, scripsi, scriptum','schreiben',''],['mittere, mitto, misi, missum','schicken',''],['audire, audio, audivi, auditum','hören',''],['venire, venio, veni, ventum','kommen',''],['capere, capio, cepi, captum','nehmen, fangen',''],['bonus, -a, -um','gut',''],['magnus, -a, -um','groß',''],['esse, sum, fui, futurum','sein','Roma magna est.'],['et','und',''],['sed','aber',''],['non','nicht',''],['cum','mit, als (Konjunktion)','']];
/* ===== Ende Build 123 Latein ===== */
/* --- Kreuzworträtsel --- */
function crossGen(items){
  let best=null;
  for(let at=0;at<50;at++){
    const order=items.slice().sort(function(a,b){return (b.w.length-a.w.length)+(Math.random()-.5)*(at?4:0);});
    const cells={};const placed=[];
    const get=function(r,c){return cells[r+','+c];};
    const can=function(w,r,c,dir){const dr=dir?1:0,dc=dir?0:1;let cross=0;
      if(get(r-dr,c-dc)||get(r+dr*w.length,c+dc*w.length))return false;
      for(let k=0;k<w.length;k++){const rr=r+dr*k,cc=c+dc*k,ex=get(rr,cc);
        if(ex){if(ex.ch!==w[k]||ex.d[dir])return false;cross++;}
        else if(get(rr+dc,cc+dr)||get(rr-dc,cc-dr))return false;}
      return cross>0;};
    const put=function(it,r,c,dir){const dr=dir?1:0,dc=dir?0:1;for(let k=0;k<it.w.length;k++){const key=(r+dr*k)+','+(c+dc*k);const ce=cells[key]||(cells[key]={ch:it.w[k],d:{}});ce.d[dir]=true;}placed.push({id:it.id,w:it.w,r:r,c:c,dir:dir});};
    put(order[0],0,0,0);
    for(let n=1;n<order.length;n++){const it=order[n];let bestc=null,bs=1e9;
      Object.keys(cells).forEach(function(key){const ce=cells[key];const rc=key.split(',');const cr=+rc[0],cc=+rc[1];
        for(let i=0;i<it.w.length;i++){if(it.w[i]!==ce.ch)continue;
          [0,1].forEach(function(dir){const dr=dir?1:0,dc=dir?0:1;const r0=cr-dr*i,c0=cc-dc*i;if(!can(it.w,r0,c0,dir))return;
            let a=1e9,b=-1e9,c1=1e9,d=-1e9;Object.keys(cells).forEach(function(k2){const p=k2.split(',');a=Math.min(a,+p[0]);b=Math.max(b,+p[0]);c1=Math.min(c1,+p[1]);d=Math.max(d,+p[1]);});
            a=Math.min(a,r0);b=Math.max(b,r0+dr*(it.w.length-1));c1=Math.min(c1,c0);d=Math.max(d,c0+dc*(it.w.length-1));
            const hh=b-a+1,ww=d-c1+1;const sc=hh*ww+Math.abs(hh-ww)*3+Math.random();if(sc<bs){bs=sc;bestc=[r0,c0,dir];}});}});
      if(bestc)put(it,bestc[0],bestc[1],bestc[2]);}
    let a=1e9,b=-1e9,c1=1e9,d=-1e9;Object.keys(cells).forEach(function(k2){const p=k2.split(',');a=Math.min(a,+p[0]);b=Math.max(b,+p[0]);c1=Math.min(c1,+p[1]);d=Math.max(d,+p[1]);});
    const area=(b-a+1)*(d-c1+1);
    if(!best||placed.length>best.placed.length||(placed.length===best.placed.length&&area<best.area))best={placed:placed,cells:cells,area:area,a:a,c1:c1,rows:b-a+1,cols:d-c1+1};
  }
  if(!best||best.placed.length<4)return null;
  const cells={};Object.keys(best.cells).forEach(function(k){const p=k.split(',');cells[(+p[0]-best.a)+','+(+p[1]-best.c1)]=best.cells[k].ch;});
  const words=best.placed.map(function(x){return {id:x.id,w:x.w,r:x.r-best.a,c:x.c-best.c1,dir:x.dir};}).sort(function(x,y){return x.r-y.r||x.c-y.c;});
  const nums={};let nn=0;words.forEach(function(w){const k=w.r+','+w.c;if(!nums[k])nums[k]=++nn;w.n=nums[k];});
  return {rows:best.rows,cols:best.cols,cells:cells,words:words,nums:nums};
}
function crossStart(){
  const gs=S.gs,n=gs.n.cross||8;const ids=wordIds(n,gs.src,gs.list,3,10);
  if(ids.length<5){toast('Dafür gibt es hier zu wenige passende Wörter. Wähle eine andere Quelle.');return;}
  const gen=crossGen(ids.map(function(id){return {id:id,w:wcore(id)};}));
  if(!gen){toast('Daraus ließ sich kein Rätsel bauen. Versuch es nochmal.');return;}
  const lv=stufe();S.game={type:'cross',cells:gen.cells,rows:gen.rows,cols:gen.cols,words:gen.words,nums:gen.nums,fill:{},dir:0,cell:null,over:false,revealed:false,hl:lv===4?3:-1,showLen:lv<=2,t0:Date.now()};render();
}
function crossView(g){
  let h='<div class="pt"><h1>Kreuzworträtsel</h1><small>'+g.words.length+' Wörter · Hinweise sind auf Deutsch</small></div>';
  let grid='<div class="cwg" style="--cols:'+g.cols+'">';
  for(let r=0;r<g.rows;r++)for(let c=0;c<g.cols;c++){const k=r+','+c,ch=g.cells[k];
    if(!ch){grid+='<i class="cwb"></i>';continue;}
    const v=g.over?ch.toUpperCase():(g.fill[k]||'');
    grid+='<div class="cwc"><b>'+(g.nums[k]||'')+'</b><input class="cx'+(g.over&&!g.revealed?' ok':'')+'" data-r="'+r+'" data-c="'+c+'" maxlength="1" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false" aria-label="Feld Zeile '+(r+1)+' Spalte '+(c+1)+(g.nums[k]?', Nummer '+g.nums[k]:'')+'" value="'+esc(v)+'"'+(g.over?' readonly':'')+'></div>';}
  grid+='</div>';h+=grid;
  if(g.over){h+='<div class="glass pad w col center"><div class="big-ico">'+(g.revealed?'🧩':'🎉')+'</div><b>'+(g.revealed?'Das ist die Lösung':'Gelöst!')+'</b>'+(g.rw?'<div class="hint">'+(g.rw.capped?'Für heute gibt es keine Belohnung mehr. Spielen darfst du trotzdem.':'+'+g.rw.xp+' XP und +'+g.rw.coins+' 🪙')+'</div>':'')+'<button class="btn pri full" data-act="gostart" data-v="cross">Neues Rätsel</button></div>';}
  else h+='<div class="row2"><button class="btn" data-act="crchk">Prüfen</button><button class="btn" data-act="crhint">Hinweis'+(g.hl>=0?' ('+g.hl+')':'')+'</button></div>';
  [['Waagerecht',0],['Senkrecht',1]].forEach(function(x){const ws=g.words.filter(function(w){return w.dir===x[1];});if(!ws.length)return;
    h+='<div class="glass pad w col tight"><div class="lab">'+x[0]+'</div>'+ws.map(function(w){return '<button class="wr cwcl" data-act="crgo" data-r="'+w.r+'" data-c="'+w.c+'" data-d="'+w.dir+'"><span class="wm"><b>'+w.n+'</b> '+esc(gShort(W[w.id][1]))+(g.showLen?' <small>('+w.w.length+' Buchstaben)</small>':'')+'</span></button>';}).join('')+'</div>';});
  if(!g.over)h+='<button class="link" data-act="crsol" style="align-self:center">Lösung zeigen</button>';
  return h;
}
function crInp(r,c){return document.querySelector('.cx[data-r="'+r+'"][data-c="'+c+'"]');}
function crHl(g){document.querySelectorAll('.cwc.hl').forEach(function(e){e.classList.remove('hl');});document.querySelectorAll('.cwcl.act').forEach(function(e){e.classList.remove('act');});
  if(!g.cell)return;const r=g.cell[0],c=g.cell[1];const w=g.words.filter(function(w){const dr=w.dir?1:0,dc=w.dir?0:1;return w.dir===g.dir&&r>=w.r&&r<=w.r+dr*(w.w.length-1)&&c>=w.c&&c<=w.c+dc*(w.w.length-1);})[0];
  if(!w)return;const dr=w.dir?1:0,dc=w.dir?0:1;for(let k=0;k<w.w.length;k++){const el=crInp(w.r+dr*k,w.c+dc*k);if(el&&el.parentNode)el.parentNode.classList.add('hl');}
  const cl=document.querySelector('.cwcl[data-r="'+w.r+'"][data-c="'+w.c+'"][data-d="'+w.dir+'"]');if(cl)cl.classList.add('act');}
function crDone(g){if(g.over)return;const ks=Object.keys(g.cells);if(!ks.every(function(k){return (g.fill[k]||'').toLowerCase()===g.cells[k];}))return;
  g.over=true;g.rw=gameReward(Math.min(30,10+g.words.length*2),4);sfx('ok');confetti();render(true);}
document.addEventListener('input',function(e){const t=e.target;if(!t||!t.classList||!t.classList.contains('cx'))return;const g=S.game;if(!g||g.type!=='cross'||g.over)return;
  const v=(t.value||'').replace(/[^a-zA-Z]/g,'').slice(-1).toUpperCase();t.value=v;const r=+t.dataset.r,c=+t.dataset.c;g.fill[r+','+c]=v;t.classList.remove('bad');
  if(v){const nr=r+(g.dir?1:0),nc=c+(g.dir?0:1);const nx=crInp(nr,nc);if(nx)nx.focus();}crDone(g);});
document.addEventListener('focusin',function(e){const t=e.target;if(!t||!t.classList||!t.classList.contains('cx'))return;const g=S.game;if(!g||g.type!=='cross')return;
  const r=+t.dataset.r,c=+t.dataset.c;g.cell=[r,c];const hasA=g.words.some(function(w){return !w.dir&&w.r===r&&c>=w.c&&c<=w.c+w.w.length-1;});const hasD=g.words.some(function(w){return w.dir&&w.c===c&&r>=w.r&&r<=w.r+w.w.length-1;});
  if(g.dir===0&&!hasA&&hasD)g.dir=1;else if(g.dir===1&&!hasD&&hasA)g.dir=0;crHl(g);try{t.select();}catch(x){}});
document.addEventListener('click',function(e){const t=e.target;if(!t||!t.classList||!t.classList.contains('cx'))return;const g=S.game;if(!g||g.type!=='cross')return;const k=t.dataset.r+','+t.dataset.c;
  const r=+t.dataset.r,c=+t.dataset.c;const hasA=g.words.some(function(w){return !w.dir&&w.r===r&&c>=w.c&&c<=w.c+w.w.length-1;});const hasD=g.words.some(function(w){return w.dir&&w.c===c&&r>=w.r&&r<=w.r+w.w.length-1;});
  if(g.lastK===k&&hasA&&hasD){g.dir^=1;crHl(g);}g.lastK=k;});
document.addEventListener('keydown',function(e){const t=e.target;if(!t||!t.classList||!t.classList.contains('cx'))return;const g=S.game;if(!g||g.type!=='cross'||g.over)return;const r=+t.dataset.r,c=+t.dataset.c;let m=null;
  if(e.key==='Backspace'&&!t.value){m=[r-(g.dir?1:0),c-(g.dir?0:1)];}else if(e.key==='ArrowRight')m=[r,c+1];else if(e.key==='ArrowLeft')m=[r,c-1];else if(e.key==='ArrowDown')m=[r+1,c];else if(e.key==='ArrowUp')m=[r-1,c];
  if(m){const el=crInp(m[0],m[1]);if(el){e.preventDefault();el.focus();}}});

const A11L={back:'Zurück',toadd:'Wörter hinzufügen',gsearch:'Suchen',settings:'Einstellungen',speak:'Anhören',star:'Stern setzen',shop:'Shop',undo:'Rückgängig',flip:'Karte umdrehen'};
function a11yPass(){try{
  document.querySelectorAll('[data-act]').forEach(function(el){const tg=el.tagName;if(tg!=='BUTTON'&&tg!=='A'&&tg!=='INPUT'&&tg!=='SELECT'&&tg!=='TEXTAREA'&&!el.getAttribute('role')){el.setAttribute('role','button');if(!el.hasAttribute('tabindex'))el.tabIndex=0;}
    if(tg==='BUTTON'&&!el.getAttribute('aria-label')&&!(el.textContent||'').trim()){const l=A11L[el.getAttribute('data-act')]||el.getAttribute('title');if(l)el.setAttribute('aria-label',l);}});
  document.querySelectorAll('.tg').forEach(function(el){if(!el.getAttribute('aria-label')){const r=el.closest('.srow');const b=r&&r.querySelector('.sl b');if(b)el.setAttribute('aria-label',b.textContent);}});
  document.querySelectorAll('.segc,.chs').forEach(function(el){if(!el.getAttribute('role'))el.setAttribute('role','group');if(!el.getAttribute('aria-label')){const r=el.closest('.srow');const b=r&&r.querySelector('.sl b');if(b)el.setAttribute('aria-label',b.textContent);}});
  document.querySelectorAll('.segc button,.chs button').forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on')?'true':'false');});
  document.querySelectorAll('.gbadge:not([aria-label])').forEach(function(b){const t=b.getAttribute('title');b.setAttribute('aria-label',(t?t+': ':'')+b.textContent.trim());});
}catch(e){}}
document.addEventListener('keydown',function(e){const t=e.target;if((e.key==='Enter'||e.key===' ')&&t&&t.getAttribute&&t.getAttribute('role')==='button'&&t.tagName!=='BUTTON'&&t.hasAttribute('data-act')){e.preventDefault();t.click();}
  if((e.key==='z'||e.key==='Z')&&(e.metaKey||e.ctrlKey)&&S.undo&&undoOK()&&!(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'))){e.preventDefault();undoDo();}});

(function(){let st=null;
  const reset=function(o){o.classList.remove('op');const f=o.querySelector('.wr'),b=o.querySelector('.swbg');if(f){f.style.transition='transform .25s';f.style.transform='';}if(b)b.style.clipPath='inset(0 0 0 100%)';};
  document.addEventListener('pointerdown',function(e){const t=e.target;if(!t||!t.closest)return;const w=t.closest('.wrs');
    document.querySelectorAll('.wrs.op').forEach(function(o){if(o!==w)reset(o);});
    if(!w||t.closest('.swbg')||t.closest('.x'))return;
    st={w:w,f:w.querySelector('.wr'),bg:w.querySelector('.swbg'),x:e.clientX,y:e.clientY,h:false,base:w.classList.contains('op')?-88:0,id:w.getAttribute('data-id'),pid:e.pointerId};});
  document.addEventListener('pointermove',function(e){if(!st||e.pointerId!==st.pid)return;const dx=e.clientX-st.x,dy=e.clientY-st.y;
    if(!st.h){if(Math.abs(dx)>10&&Math.abs(dx)>Math.abs(dy)*1.4){st.h=true;st.f.style.transition='none';}else if(Math.abs(dy)>10){st=null;return;}else return;}
    const x=st.base+dx;st.f.style.transform='translateX('+x+'px)';st.bg.classList.toggle('lf',x>0);
    st.bg.style.clipPath=x<0?'inset(0 0 0 calc(100% - '+(-x)+'px))':'inset(0 calc(100% - '+x+'px) 0 0)';});
  const end=function(e){if(!st||e.pointerId!==st.pid)return;const s0=st;st=null;if(!s0.h)return;const x=s0.base+(e.clientX-s0.x);const wd=s0.w.offsetWidth;s0.f.style.transition='transform .25s';s0.w.__sw=Date.now();
    if(Math.abs(x)>wd*0.42){s0.f.style.transform='translateX('+(x<0?-wd:wd)+'px)';s0.bg.style.clipPath='inset(0)';haptic('warn');setTimeout(function(){act('delw',{id:s0.id});},180);}
    else if(x<-50){s0.f.style.transform='translateX(-88px)';s0.w.classList.add('op');s0.bg.classList.remove('lf');s0.bg.style.clipPath='inset(0 0 0 calc(100% - 88px))';}
    else reset(s0.w);};
  document.addEventListener('pointerup',end);document.addEventListener('pointercancel',end);
  document.addEventListener('click',function(e){const w=e.target.closest&&e.target.closest('.wrs');if(w&&w.__sw&&Date.now()-w.__sw<400){e.stopPropagation();e.preventDefault();}},true);
})();

function accFix(){try{const el=document.documentElement;const a=getComputedStyle(el).getPropertyValue('--acc').trim();const m=a.match(/^#([0-9a-f]{6})$/i);if(!m)return;const rgb=[1,3,5].map(function(i){return parseInt(a.substr(i,2),16);});
  const lum=function(c){c=c.map(function(v){v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4);});return .2126*c[0]+.7152*c[1]+.0722*c[2];};
  const cr=function(c1,c2){const x=lum(c1),y=lum(c2);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
  const mix=function(c,t,k){return c.map(function(v,i){return Math.round(v+(t[i]-v)*k);});};
  let btn=rgb,k=0;while(cr(btn,[255,255,255])<4.7&&k<1){k+=.04;btn=mix(rgb,[0,0,0],k);}
  const dark=isDark();const bgc=dark?[64,72,92]:[222,228,238];let tx=rgb;k=0;while(cr(tx,bgc)<5.2&&k<1){k+=.04;tx=mix(rgb,dark?[255,255,255]:[0,0,0],k);}
  el.style.setProperty('--accbtn','rgb('+btn.join(',')+')');el.style.setProperty('--acctxt','rgb('+tx.join(',')+')');}catch(e){}}
function practiceView(){
  const rec=(P.prof&&P.prof.rec)||[];
  const T=function(act,k,ic,t,d,cls){const rc=rec.indexOf(k)>=0;return '<button class="glass gtap tile v'+(cls?' '+cls:'')+(rc?' rec':'')+'" data-act="'+act+'" data-k="'+k+'" data-v="'+k+'"><span class="ico">'+icOf(ic)+'</span><span class="tt"><b'+(t.length>8?' class="lg"':'')+'>'+t+'</b><small>'+d+'</small></span>'+(rc?'<em class="recb">⭐ Für dich</em>':'')+'</button>';};
  const sec=function(l,arr){if(!arr.length)return '';const n=arr.length,rows=Math.ceil(n/4),base=Math.floor(n/rows),extra=n%rows,sp=[];for(let r=0;r<rows;r++){const cnt=base+(r<extra?1:0);for(let k=0;k<cnt;k++)sp.push(12/cnt);}return '<div class="pt" style="padding-top:2px"><span class="lab">'+l+'</span></div><div class="grid newgrid gs">'+arr.map(function(x,i){return x[1].replace('<button ','<button style="--sp:'+sp[i]+'" ');}).join('')+'</div>';};
  const core=[['learn',T('tile','learn','👀','Ansehen','Neue Wörter anschauen')],['cards',T('tile','cards','📋','Aufdecken','Karte umdrehen, bewerten')],['type',T('tile','type','✍️','Schreiben','Mit Tastatur oder Stift')],['mc',T('tile','mc','🧠','Auswählen','Richtige Antwort antippen')]];
  const more=[['Üben im Detail',[['speak',T('newgame','speak','🎤','Sprechen','Sag das Wort laut')],['diktat',T('game','diktat','🎧','Diktat','Hören und schreiben')],['cloze',T('newgame','cloze','🧩','Lückentext','Lesen oder hören')],['conf',T('newgame','conf','🤔','Verwechsler','affect oder effect?')],['rel',T('newgame','rel','🔗','Beziehungen','Gegenteil, Gleiches, Wortfamilie')],['hear',T('newgame','hear','👂','Hörverstehen','Hören, Bedeutung wählen')],['sent',T('newgame','sent','✍️','Sätze schreiben','KI prüft deinen Satz')],['clip',T('game','clip','🎬','Lern-Clip','Wörter animiert erklärt')]]],
    ['Spiele',[['mem',T('game','mem','🃏','Memory','Paare finden')],['blitz',T('game','blitz','⚡','Blitz','60 Sekunden')],['salat',T('game','salat','🔤','Wortsalat','Buchstaben ordnen')],['galgen',T('game','galgen','🔎','Galgenmännchen','Buchstabe für Buchstabe')],['becher',T('game','becher','🥤','Becherspiel','Wo steckt das Wort?')],['cross',T('game','cross','🧩','Kreuzworträtsel','Rätsel aus deinen Wörtern')],['skit',T('game','skit','🎳','Skittles','Kegel mit Wörtern umwerfen')],['duel',T('game','duel','⚔️','Vokabel-Duell','Zwei Spieler, ein iPad')],['pause',T('pause','pause','⏱️','Pausen-Runde','3 Minuten, schnell')]]],
    ['Mit KI und Extras',[['weak',T('tile','weak','🎯','Knifflige Wörter','Gezielt wiederholen')],['story',T('game','story','📖','Geschichte','Text mit KI')],['pod',T('game','pod','🎙️','Mini-Podcast','Gespräch mit KI')]]]];
  const open=!!P.moreOpen;let nm=0;more.forEach(function(g){nm+=g[1].length;});
  const hiddenRec=[];more.forEach(function(g){g[1].forEach(function(x){if(rec.indexOf(x[0])>=0)hiddenRec.push(x);});});
  let h='<div class="pt"><h1>Üben</h1><small>Das Wichtigste zuerst</small></div>';
  h+='<div class="grid newgrid feat2">'+T('tile','auto','🚀','Smart-Training','Empfohlen: erst Karten, dann Schreiben','feat')+T('newgame','feed','📱','Lern-Feed','Nur Karten, endlos scrollen','feat')+'</div>';
  h+='<div class="bangrid b3">'+pathBan()+coBan()+focusBan()+'</div>';
  {const nf=fail7Ids().length,ns=starIds().length,nn=nightIds().length;const tg2=[];
  if(nf)tg2.push(['fail7',T('special','fail7','🩹','Fehler der Woche',nf+' Wörter, die du falsch hattest')]);
  if(ns)tg2.push(['star',T('special','star','⭐','Meine Sterne',ns+' markierte Wörter')]);
  if(nn)tg2.push(['night',T('special','night','🌙','Abendrunde','2 Minuten, 5 schwächste Wörter')]);
  h+=sec('Gezielt wiederholen',tg2);}
  if(langsHave().indexOf('la')>=0)h+=sec('Latein',[['lat',T('lat','lat','🏛️','Latein-Training','Kasus, Formen, Stammformen')]]);
  h+=sec('Grundfunktionen',core);
  if(!open&&hiddenRec.length)h+=sec('Für dich',hiddenRec.slice(0,2));
  h+='<button class="glass gtap lrow morebtn'+(open?' open':'')+'" data-act="moretog" aria-expanded="'+open+'"><span class="li">'+(open?'➖':'➕')+'</span><span class="lt"><b>'+(open?'Weniger anzeigen':'Mehr Lernarten ('+nm+')')+'</b><small>'+(open?'Klappt die Liste zu':'Spiele, Sprechen, Lückentext, KI und mehr')+'</small></span><span class="chev">'+(open?'⌃':'⌄')+'</span></button>';
  if(open)more.forEach(function(g){h+=sec(g[0],g[1]);});
  h+=listsCard()+tipCard();
  return h;
}
function pickView(){
  const m=MODE[S.pend];
  const opts=[['en',fl()+' → Deutsch'],['de','Deutsch → '+fl()],['mix','Gemischt']];
  let h='<div class="glass pad w center"><div class="big-ico">'+m.i+'</div><h2>'+m.t+'</h2><p>'+({auto:'Neue Wörter als Karte, bekannte zum Tippen',test:'Nur Tippen, Ergebnis erst am Ende'}[S.pend]||'Richtung wählen')+'</p></div>';
  h+='<div class="dirs">';
  opts.forEach(function(o){h+='<button class="dirb gtap'+(S.dir===o[0]?' on':'')+'" data-act="dir" data-d="'+o[0]+'"><span>'+o[1]+'</span><span>'+(S.dir===o[0]?'✓':'')+'</span></button>';});
  h+='</div>';
  if(S.pend!=='weak'){
    let o=(focusOn()?'<option value="focus"'+(S.b==='focus'?' selected':'')+'>⭐ Mein Fokus ('+focusIds().length+' Wörter)</option>':'')+'<option value="all"'+(S.b==='all'?' selected':'')+'>Alle Listen ('+allIds().length+' Wörter)</option>';
    for(let k=0;k<nb();k++){const sp=dueSplit(range(k));o+='<option value="'+k+'"'+(S.b===k?' selected':'')+'>'+esc(bName(k))+(sp.r?' · '+sp.r+' fällig':'')+(sp.n?' · '+sp.n+' neu':'')+'</option>';}
    o+='<optgroup label="Themen">';TOPICS.forEach(function(t,ti){const c=allIds().filter(function(id){return wtopic(id)===ti;}).length;if(c)o+='<option value="t'+ti+'"'+(S.b==='t'+ti?' selected':'')+'>'+t.e+' '+esc(t.n)+' · '+c+'</option>';});o+='</optgroup>';
    h+='<div class="fld"><label class="lab" for="p-blk">Liste</label><select id="p-blk" data-blk="1">'+o+'</select></div>';
  } else h+='<p class="hint" style="margin:0">'+weakIds().length+' Wörter mit Fehlern</p>';
  if(S.pend!=='learn'&&S.pend!=='weak'&&S.b!=='custom'){const isC=S.pend==='cards';const cur=isC?P.flashcardCount:P.quizLength;const rl=recLen();const pool=(S.b==='all'?allIds():scope(S.b)).length;
    h+='<div class="fld"><label class="lab">Wörter pro Runde</label><div class="lenrow" role="group">'+[10,15,20,30,50,999].map(function(v){const lab=v===999?'Alle':String(v);const on=(cur===v)||(v===999&&cur>=999);return '<button class="lenb'+(on?' on':'')+(v!==999&&v>pool?' dim':'')+'" data-act="roundlen" data-v="'+v+'">'+lab+(v===rl?'<i>★</i>':'')+'</button>';}).join('')+'</div><div class="hint" style="margin:6px 2px 0">'+(pool?'In dieser Auswahl: '+pool+' Wörter. ':'')+'★ passt zu dir: '+rl+' Wörter ('+(P.prof&&P.prof.role==='schule'?'Klasse '+P.prof.grade:'dein Profil')+').'+(!P.prof?' Ohne Profil: Standard.':'')+'</div></div>';}
  h+='<button class="btn pri full" data-act="start">Start</button><button class="btn full" data-act="back">Zurück</button>';
  return h;
}
function wordView(){
  const id=S.wid;if(id==null||id>=W.length||!isAlive(id))return '<div class="glass pad w center">Dieses Wort gibt es nicht mehr.</div>';
  const cu=id>=BASE;const c=cu?P.custom[id-BASE]:null;const ex=E[id]||'';const lst=blocks().filter(function(b){return b.ids.indexOf(id)>=0;})[0];
  const wl=wlang(id);const bxs=[bx(id,'en'),bx(id,'de')];
  let h='<div class="pt"><h1>Wort</h1><small>'+(lst?esc(lst.name):'')+'</small></div>';
  h+='<div class="glass pad w col center"><div class="lab">'+esc(LNAME[wl]||'Englisch')+'</div><div class="word">'+esc(W[id][0])+'</div><div class="word sm" style="color:var(--accent)">'+esc(W[id][1])+'</div>'+emoBlock(id,'learn')+(ex?'<div class="ex">'+esc(ex)+'</div>':'')+'<div class="row2" style="width:100%">'+(canSpeakW(id)?'<button class="btn" data-act="speak" data-id="'+id+'">Anhören</button>':'')+'<span>'+memoBlock(id)+'</span></div></div>';
  h+='<div class="glass pad w col tight"><div class="lab">Lernstand</div><div class="lg4"><div><b>'+bxs[0]+' / 5</b> '+esc(LNAME[wl]||'Englisch')+' → Deutsch</div><div><b>'+bxs[1]+' / 5</b> Deutsch → '+esc(LNAME[wl]||'Englisch')+'</div><div>Nächste Wiederholung: <b>'+esc(dueText(id,'en')||'noch nicht')+'</b></div><div>Fehler: <b>'+(P.wrong[id]||0)+'</b></div></div></div>';
  if(wl==='la'){const li=latParse(W[id][0]);if(li)h+='<div class="glass pad w col"><div class="lab">Latein</div>'+latChips(li)+latTable(li)+'</div>';}
  if(cu){h+='<div class="glass pad w col"><div class="lab">Bearbeiten</div><input id="we" class="in" type="text" aria-label="Fremdsprache" value="'+esc(c.en)+'"><input id="wd" class="in" type="text" aria-label="Deutsch" value="'+esc(c.de)+'"><input id="wx" class="in" type="text" placeholder="Beispielsatz (optional)" aria-label="Beispielsatz" value="'+esc(c.ex||'')+'"><div class="row2"><button class="btn pri" data-act="wordsave">Speichern</button><button class="btn bad" data-act="worddel">'+(S.confirmWord===id?'Wirklich löschen':'Löschen')+'</button></div></div>';}
  else h+='<p class="hint" style="margin:0 6px">Dieses Wort gehört zur mitgelieferten Liste und lässt sich nicht ändern.</p>';
  h+=evMemoBox(id);
  {const fam=famIds(id);const ffn=ffNote(id);if(ffn)h+='<div class="glass pad w col tight"><div class="lab">Achtung</div><div>'+esc(ffn)+'</div></div>';if(fam.length){h+='<div class="glass pad w"><div class="lab" style="margin-bottom:6px">Verwandte Wörter</div>';fam.forEach(function(o){h+=wordRow(o,true);});h+='</div>';}}
  h+='<div class="row2"><button class="btn" data-act="wcopy" data-id="'+id+'">📋 Kopieren</button><button class="btn" data-act="hidew" data-id="'+id+'">🚫 Ausblenden</button></div>';
  return h;
}
function wordRow(id,nodots){
  const n=Math.round(bAvg(id));let dd='';for(let i=0;i<5;i++)dd+='<i class="'+(n>i?'f':'')+'"></i>';
  const wl=wlang(id);const lt=wl!=='en'?'<em class="ltag">'+wl.toUpperCase()+'</em>':'';
  const del=(id>=BASE&&!nodots);
  const row='<div class="wr"><span class="wb" style="background:'+CATS[wcat(id)].c+'"></span><span class="wm" data-act="wordopen" data-id="'+id+'" style="cursor:pointer"><b>'+esc(W[id][0])+lt+'</b><small>'+esc(W[id][1])+'</small></span>'+(nodots?'':'<span class="dots" title="Box '+bx(id,'en')+' / '+bx(id,'de')+'">'+dd+'</span>')+(id>=BASE&&!nodots?'<button class="x" data-act="delw" data-id="'+id+'" aria-label="Wort löschen">×</button>':'')+'</div>';
  return del?'<div class="wrs" data-id="'+id+'">'+row+'<button class="swbg" data-act="delw" data-id="'+id+'" tabindex="-1" aria-hidden="true">Löschen</button></div>':row;
}
function wordsBody(q){
  q=(q||'').trim().toLowerCase();let h='';
  if(q){
    const m=allIds().filter(function(id){return W[id][0].toLowerCase().indexOf(q)>=0||W[id][1].toLowerCase().indexOf(q)>=0;});
    if(!m.length)return '<div class="glass pad w hint">Keine Treffer.</div>';
    h+='<div class="glass pad w">';m.forEach(function(id){h+=wordRow(id);});return h+'</div>';
  }
  if(S.wmode==='topic'){
    const unc=allIds().filter(function(id){return id>=BASE&&wtopic(id)===9;}).length;
    if(unc&&aiOK())h+='<button class="btn sm full" data-act="aitopics">✨ Themen automatisch zuordnen ('+unc+')</button>';
    for(let t=0;t<TOPICS.length;t++){
      const ids=allIds().filter(function(id){return wtopic(id)===t;});if(!ids.length)continue;
      h+='<details class="glass dt"><summary><span><b>'+TOPICS[t].e+' '+esc(TOPICS[t].n)+'</b><span class="chip ok" style="background:var(--line);color:var(--ink2)">'+ids.length+'</span></span><span class="hint">'+pct(ids)+'% <span class="car">▾</span></span></summary><div class="body"><div class="prog thin" style="margin-bottom:8px"><i style="width:'+pct(ids)+'%"></i></div><button class="btn sm full" style="margin-bottom:6px" data-act="topicgo" data-k="'+t+'">Dieses Thema üben</button>';
      ids.forEach(function(id){h+=wordRow(id);});
      h+='</div></details>';
    }
    return h||'<div class="glass pad w hint">Noch keine Wörter.</div>';
  }
  if(S.wmode==='az'){
    const ids=allIds().sort(function(a,b){return sortKey(a)<sortKey(b)?-1:1;});let cur='';
    h+='<div class="glass pad w">';
    ids.forEach(function(id){const L=sortKey(id).charAt(0).toUpperCase();if(L!==cur){cur=L;h+='<div class="letter">'+esc(L)+'</div>';}h+=wordRow(id);});
    return h+'</div>';
  }
  if(S.wmode==='status'){
    const g=[[],[],[],[]];allIds().forEach(function(id){g[wcat(id)].push(id);});
    for(let c=3;c>=0;c--){
      h+='<details class="glass dt"><summary><span><b><em class="dot" style="background:'+CATS[c].c+'"></em>'+CATS[c].n+'</b><span class="chip ok" style="background:var(--line);color:var(--ink2)">'+g[c].length+'</span></span><span class="hint">'+CATS[c].d+' <span class="car">▾</span></span></summary><div class="body">';
      if(!g[c].length)h+='<p class="hint" style="margin:0">Keine Wörter in dieser Gruppe.</p>';
      g[c].forEach(function(id){h+=wordRow(id);});
      h+='</div></details>';
    }
    return h;
  }
  for(let k=0;k<nb();k++){const ids=range(k);const sp=dueSplit(ids);
    h+='<details class="glass dt lstrow"><summary><span class="lrt"><b>'+esc(pathName(k))+'</b><small>'+(sp.r||sp.n?[(sp.r?sp.r+' zu wiederholen':''),(sp.n?sp.n+' neue Wörter':'')].filter(Boolean).join(' · '):'Heute nichts zu tun')+'</small></span><span class="hint lpc">'+pct(ids)+' % <span class="car">▾</span></span></summary><div class="body"><div class="prog thin" style="margin-bottom:6px"><i style="width:'+pct(ids)+'%"></i></div>';
    ids.forEach(function(id){h+=wordRow(id);});
    h+='<div class="row2" style="margin-top:6px"><button class="link" data-act="pathopen" data-k="'+k+'">Lernpfad öffnen</button><button class="link" data-act="sharelist" data-k="'+k+'">Liste teilen</button>'+(blocks()[k].custom?'<button class="link" data-act="dellist" data-k="'+k+'">Liste löschen</button>':'')+'</div>';
    h+='</div></details>';}
  return h;
}
function wordsView(){
  let h='<div class="pt row"><div><h1>Wörter</h1><small>'+allIds().length+' Wörter · '+mastered()+' gemeistert</small></div><button class="btn sm pri" data-act="toadd">＋ Wörter</button></div>';
  h+='<button class="glass gtap lrow w" data-act="evpacks"><span class="li">📦</span><span class="lt"><b>Startpakete</b><small>Englisch, Französisch, Latein: fertige Wortlisten</small></span><span class="chev">›</span></button>';
  h+='<div class="segc wide" role="group" aria-label="Ansicht">'+[['blocks','Listen'],['topic','Themen'],['status','Lernstand'],['az','A–Z']].map(function(x){return '<button class="'+(S.wmode===x[0]?'on':'')+'" data-act="wmode" data-v="'+x[0]+'">'+x[1]+'</button>';}).join('')+'</div>';
  h+='<p class="hint" style="margin:0 6px">'+({blocks:'Listen sind Kapitel oder Gruppen, die du zusammen lernst.',topic:'Nach Bedeutung sortiert, zum Beispiel Körper oder Haus.',status:'So sicher sitzt jedes Wort.',az:'Alphabetisch sortiert.'}[S.wmode]||'')+'</p>';
  if(S.share)h+='<div class="glass pad w col"><p class="hint" style="margin:0">Kopieren wurde blockiert. Markiere den Text und kopiere ihn selbst.</p><textarea class="ta" readonly rows="4" aria-label="Liste">'+esc(S.share)+'</textarea><button class="link" data-act="closeshare">Schließen</button></div>';
  h+='<input id="wq" class="in" type="search" placeholder="Wort suchen" aria-label="Wort suchen" autocomplete="off" value="'+esc(S.q)+'"><div id="wres" class="w col">'+wordsBody(S.q)+'</div>';
  return h;
}
function listNameField(ph){
  const names=blocks().filter(function(b){return b.custom;}).map(function(b){return b.name;});
  return '<input id="a-name" class="in" type="text" list="a-lists" placeholder="'+ph+'" aria-label="Name der Liste" autocomplete="off" value="'+esc(S.add.name)+'"><datalist id="a-lists">'+names.map(function(n){return '<option value="'+esc(n)+'"></option>';}).join('')+'</datalist>';
}
function parseBulk(t){const pairs=[];let bad=0;t.split(/\r?\n/).forEach(function(line){if(!line.trim())return;const m=line.match(/^(.+?)\s*(?:=|\t|\s[-–—]\s)\s*(.+)$/);if(m)pairs.push([m[1].trim(),m[2].trim()]);else bad++;});return {pairs:pairs,bad:bad};}
function bulkInfoHtml(t){
  if(!t.trim())return '';const r=parseBulk(t);
  return '<div class="bi2"><span class="okc">✓ '+r.pairs.length+' Wörter erkannt</span>'+(r.bad?'<span class="warnc">'+r.bad+' Zeilen unklar</span>':'')+'</div>'+r.pairs.slice(0,4).map(function(p){return '<div class="wr"><span class="wm"><b>'+esc(p[0])+'</b><small>'+esc(p[1])+'</small></span></div>';}).join('')+(r.pairs.length>4?'<div class="hint" style="padding-top:4px">… und '+(r.pairs.length-4)+' weitere</div>':'');
}
function foundView(f){
  const n=f.words.filter(function(w){return w.on;}).length;
  let h='<div class="glass pad w col"><div class="lab">Name der Liste</div>'+listNameField('Name der Liste')+'<p class="hint" style="margin:0">Diesen Namen hat Claude vorgeschlagen. Du kannst ihn ändern.</p></div>';
  h+='<div class="glass pad w"><div class="hd2" style="margin-bottom:4px"><b>'+f.words.length+' Wörter gefunden</b><button class="link" data-act="scanagain">Genauer lesen</button></div><p class="hint" style="margin:0 0 6px">Tippe auf ein Wort, um Lesefehler zu korrigieren. Ohne Haken wird es nicht gespeichert.</p>';
  f.words.forEach(function(w,i){h+='<div class="fr fre"><input type="checkbox" data-fi="'+i+'" aria-label="Wort übernehmen"'+(w.on?' checked':'')+'><span class="fw"><input class="in fin" data-fe="f" data-i="'+i+'" value="'+esc(w.f)+'" aria-label="Fremdsprache"><input class="in fin" data-fe="d" data-i="'+i+'" value="'+esc(w.d)+'" aria-label="Deutsch"></span><em class="ft" title="'+esc(TOPICS[w.t].n)+'">'+(w.e||TOPICS[w.t].e)+'</em></div>';});
  return h+'</div><button class="btn pri full" id="savecnt" data-act="savefound">'+n+' Wörter speichern</button><button class="btn full" data-act="scandiscard">Verwerfen</button>';
}
function addView(){
  const A=S.add;const ai=aiOK();
  let h='<div class="pt"><h1>Wörter hinzufügen</h1><small>Eine Liste ist eine Gruppe zusammengehöriger Wörter, zum Beispiel ein Kapitel.</small></div>';
  h+='<div class="glass grp w">'+srow('🌍','#5AC8FA','Sprache',A.lang==='auto'?'Wird aus den Wörtern erkannt':'Welche Sprache lernst du?',segc('lang',['auto','en','fr','la'],A.lang||'auto',{auto:'Automatisch',en:'🇬🇧 Englisch',fr:'🇫🇷 Französisch',la:'🏛️ Latein'},'aset'))+'</div>';
  if(A.lang==='la')h+='<div class="glass pad w col tight"><div class="lab">Latein-Format</div><div class="hint" style="margin:0">Nomen: <b>rosa, -ae f.</b> · <b>rex, regis m.</b><br>Verben: <b>amare, amo, amavi, amatum</b><br>Adjektive: <b>bonus, -a, -um</b></div><button class="btn" data-act="latpack">Starterpaket mit 50 Wörtern laden</button></div>';
  h+='<div class="w3wrap w">'+segc('mode',['scan','paste','single'],A.mode,{scan:'📷 Scannen',paste:'📋 Einfügen',single:'✏️ Einzeln'},'aset')+'</div>';
  if(A.mode==='scan'){
    if(!ai||!AIIMG)h+='<div class="glass pad w hint">Scannen braucht Claude. '+(P.aiOn===false?'Du hast die KI-Funktionen in den Einstellungen ausgeschaltet.':'Hier ist es gerade nicht verfügbar. Nutze „Einfügen“.')+'</div>';
    else if(A.busy)h+='<div class="glass pad w center"><div class="spin"></div><p>Liste wird gelesen…</p></div>';
    else if(A.found)h+=foundView(A.found);
    else{
      h+='<label class="glass gtap scanbtn"><input type="file" id="scan-file" class="vh" accept="image/*" multiple><span class="si">📷</span><b>Fotos aufnehmen oder auswählen</b><small>Du kannst mehrere Seiten gleichzeitig wählen. Claude liest alle Wörter, benennt die Liste und ordnet Themen zu. Alle Fotos zusammen sind eine Anfrage.</small></label>';
      if(A.err)h+='<div class="err" role="alert">'+esc(A.err)+'</div>';
    }
  } else if(A.mode==='paste'){
    h+='<div class="glass pad w col"><div class="hd2"><b>Wörter einfügen</b><button class="btn sm" data-act="pasteclip">Aus Zwischenablage</button></div><p class="hint" style="margin:0">Pro Zeile ein Wort: Fremdsprache = Deutsch. Auch aus Excel oder Quizlet.</p>'+listNameField('Liste (optional), z. B. Unit 3')+'<textarea id="a-bulk" class="ta" rows="6" placeholder="beneath = unter&#10;to lean on = sich anlehnen" aria-label="Wortliste">'+esc(A.bulk||'')+'</textarea><div id="bulkinfo" class="bulkinfo">'+bulkInfoHtml(A.bulk||'')+'</div>'+(ai?'<label class="chk"><input type="checkbox" id="a-aitopic" checked> Themen automatisch zuordnen (1 Anfrage)</label>':'')+'<button class="btn pri full" data-act="addbulk">Importieren</button></div>';
  } else if(ai&&!A.manual){
    h+='<div class="glass pad w col"><div class="lab">Neues Wort</div><div class="askrow"><input id="a-q" class="in" type="text" placeholder="Wort eingeben, Deutsch oder Fremdsprache" aria-label="Neues Wort" autocomplete="off" value="'+esc(A.sq||'')+'"><button class="btn pri sm" data-act="lookup">Übersetzen</button></div><p class="hint" style="margin:0">Mit Enter übersetzt Claude das Wort und schreibt einen Beispielsatz wie im Schulbuch.</p>';
    if(A.sbusy)h+='<div class="center" style="padding:10px"><div class="spin"></div></div>';
    if(A.serr)h+='<div class="err" role="alert">'+esc(A.serr)+'</div>';
    if(A.sres){const r=A.sres;
      h+='<div class="resbox"><div class="hd2"><b>Vorschlag</b><span class="ft" title="'+esc(TOPICS[r.t].n)+'">'+(r.e||TOPICS[r.t].e)+' <small>'+esc(TOPICS[r.t].n)+'</small></span></div><input id="r-f" class="in" type="text" aria-label="Fremdsprache" value="'+esc(r.f)+'"><input id="r-d" class="in" type="text" aria-label="Deutsch" value="'+esc(r.d)+'"><input id="r-ex" class="in" type="text" aria-label="Beispielsatz" value="'+esc(r.ex)+'">'+listNameField('Liste (optional)')+'<button class="btn pri full" data-act="savesingle">Speichern</button></div>';}
    h+='<button class="link" data-act="manual" style="align-self:center">Lieber selbst eintragen</button></div>';
  } else {
    h+='<div class="glass pad w col"><input id="a-en" class="in" type="text" placeholder="Wort in der Fremdsprache" aria-label="Fremdsprache" autocomplete="off"><input id="a-de" class="in" type="text" placeholder="Deutsch" aria-label="Deutsch" autocomplete="off"><input id="a-ex" class="in" type="text" placeholder="Beispielsatz (optional)" aria-label="Beispielsatz" autocomplete="off">'+listNameField('Liste (optional), z. B. Unit 3')+(S.addErr?'<div class="err" role="alert">'+esc(S.addErr)+'</div>':'')+'<button class="btn pri full" data-act="addw">Wort speichern</button>'+(ai?'<button class="link" data-act="manual" style="align-self:center">Lieber mit Claude übersetzen</button>':'')+'</div>';
  }
  return h;
}
function guessLang(f,d){const x=String(f||'').toLowerCase().trim();if(!x)return null;
  if(/[éèêëàâçîïôùûœ]/.test(x)||/(^|\s)(le|la|les|un|une|des|du|être|avoir|faire|aller|se|s')(\s|$)/.test(x)||/(^|\s)l'/.test(x))return 'fr';
  if(/^to\s+\w/.test(x)||/(^|\s)(the|of|sb|sth|oneself|be|a|an|one's|get|take|make)(\s|\/|$)/.test(x)||/\b(sb|sth)\b/.test(x))return 'en';
  const t=x.split(/\s+/);if(t.every(function(w){return /(us|um|ae|ibus|orum|arum|are|ere|ire|ari|eri|iri|tur|ntur|bam|bat|it)$/.test(w)&&w.length>3;})&&!/^[a-z]+(ing|ed|tion|ous|ly)$/.test(x))return 'la';
  if(/(^|\s)(il|elle|je|tu|nous|vous|dans|avec|pour|sur|sous|chez|mais|ou|et|est|sont)(\s|$)/.test(x))return 'fr';
  return 'en';}
function langOf(f,d,forced){const A=S.add;const l=forced||A.lang;if(l&&l!=='auto')return l;return guessLang(f,d)||(P.lang2!=='none'?P.lang2:'en');}
function langNotes(arr){const seen={},out=[];arr.forEach(function(l){if(l&&!seen[l]){seen[l]=1;const n=langNote(l);if(n)out.push(n.trim());}});return out.length?' '+out.join(' '):'';}
function addWord(en,de,ex,cat,lang,ch,emo){
  en=en.trim();de=de.trim();ex=(ex||'').trim();lang=lang||'en';if(cat==null)cat=9;ch=(ch||'Eigene Wörter').trim()||'Eigene Wörter';
  if(!en||!de)return 'bad';
  for(let i=BASE;i<W.length;i++){if(P.custom[i-BASE].del)continue;if(wlang(i)===lang&&W[i][0].toLowerCase()===en.toLowerCase())return 'dup';}
  P.custom.push({en:en,de:de,ex:ex,cat:cat,lang:lang,ch:ch,emo:emo||''});W.push([en,de]);E.push(ex);BC=null;return 'ok';
}
function langNote(lang){if(P.view&&P.view!=='all'&&P.view!==lang){P.view=lang;BC=null;return ' Ansicht auf '+LNAME[lang]+' gestellt.';}return '';}


function rangeIds(lo,hi){let ids=[];for(let k=lo;k<=hi;k++)ids=ids.concat(range(k));return ids;}
function rangeInfo(lo,hi){const n=rangeIds(lo,hi).length;return (lo===0&&hi===nb()-1)?'Alle '+n+' Wörter':n+' Wörter';}
function rangeFill(lo,hi){const N=Math.max(1,nb()-1);const f=document.getElementById('rfill');if(f){f.style.left=(lo/N*100)+'%';f.style.width=((hi-lo)/N*100)+'%';}const t=document.getElementById('rinfo');if(t)t.textContent=rangeInfo(lo,hi);const bl=blocks();const a=document.getElementById('rlo'),b=document.getElementById('rhi');if(a&&bl[lo])a.textContent=bl[lo].name;if(b&&bl[hi])b.textContent=bl[hi].name;}
function examCard(e){
  const ids=examIds(e);const left=daysLeft(e);const open=ids.filter(function(id){return bAvg(id)<3;}).length;const sh=secureShare(ids);const per=Math.ceil(open/Math.max(1,left));
  const cls=left<0?'past':(left<=2?'urg':(left<=6?'soon':'calm'));
  const step=left===0?'Heute früh kurz prüfen, dann nichts Neues mehr.':(left===1?'Heute wiederholen, morgen früh kurz prüfen.':(left<=3?'Heute lernen, morgen wiederholen, am Testtag früh kurz prüfen.':''));
  const plan=left<0?'Diese Klausur ist vorbei.':((open?'Heute ca. '+per+' Wörter sicher machen':'Alle Wörter sicher')+(step?'. '+step:''));
  return '<div class="glass exam '+cls+'"><div class="ringw sm">'+ring(sh)+'<b>'+sh+'<small>%</small></b></div><div class="exm"><div class="hd2"><b>'+esc(e.name)+'</b><span class="dchip">'+(left<0?'vorbei':inDays(left))+'</span></div><small>'+dateDe(e.date)+' · '+ids.length+' Wörter</small><p>'+plan+'</p></div><div class="row2 exb2"><button class="btn" data-act="examgo" data-id="'+e.id+'">Lernen</button>'+(left>=0?'<button class="btn" data-act="examtest" data-id="'+e.id+'">Klausur-Test</button>':'')+'<button class="btn bad" data-act="delexam" data-id="'+e.id+'">Löschen</button></div></div>';
}
function updSel2(){
  const on=document.querySelectorAll('.xl.on');let n=0;on.forEach(function(c){n+=range(parseInt(c.getAttribute('data-k'),10)).length;});
  const all=nb()===on.length;const info=document.getElementById('xinfo');if(info)info.textContent=on.length+' Listen · '+n+' Wörter';
  const ax=document.querySelector('.xall');if(ax)ax.classList.toggle('on',all);
  S.form.sel=all?null:Array.prototype.map.call(on,function(c){return parseInt(c.getAttribute('data-k'),10);});
}
function planCard(){
  const ne=nextExam();if(!ne)return '';const left=daysLeft(ne);if(left<0)return '';
  const ids=examIds(ne);const open=ids.filter(function(id){return bAvg(id)<3;}).length;
  const sp=dueSplit(ids);const newDays=Math.max(1,left-1);let remainNew=sp.n;
  const names=['So','Mo','Di','Mi','Do','Fr','Sa'];const days=Math.min(8,left+1);
  const r=histRate();const cur=Math.round(secureShare(ids));const nPairs=Math.max(1,ids.length*2);
  const proj=r?Math.min(100,cur+Math.round(r.perDay*left/nPairs*100)):null;
  let h='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Dein Plan für '+esc(ne.name)+'</span><span class="hint">'+(open?open+' Wörter offen':'alles sicher')+'</span></div>';
  h+='<p class="hint" style="margin:0 0 4px">'+(proj!==null?'Jetzt '+cur+' % sicher. Bei deinem Tempo etwa '+proj+' % bis zur Klausur.':'Jetzt '+cur+' % sicher. Lerne ein paar Tage, dann kommt eine Prognose.')+'</p>';
  for(let k=0;k<days;k++){const d=new Date();d.setDate(d.getDate()+k);const last=(k===left);
    const label=last?'Klausur':(k===0?'Heute':(k===1?'Morgen':names[d.getDay()]+', '+d.getDate()+'.'+(d.getMonth()+1)+'.'));
    let todo,tgt=P.dailyGoal;
    if(last)todo='Kurz prüfen, dann los';
    else if(left>=2&&k>=left-1)todo='Alles wiederholen, nichts Neues';
    else{const nw=Math.min(remainNew,Math.ceil(remainNew/Math.max(1,newDays-k)));remainNew-=nw;const rv=(k===0)?sp.r:0;tgt=Math.max(1,nw+rv);
      todo=(k===0)?(nw+rv)+' Wörter: '+nw+' neu, '+rv+' Wiederholung (ca. '+minsFor(nw+rv)+' Min.)':(nw?nw+' neu und Wiederholung':'Wiederholung');}
    const pct=k===0?Math.min(100,Math.round(dayCount()/Math.max(1,tgt)*100)):0;
    h+='<div class="planrow'+(k===0?' today':'')+'"><span class="pd">'+label+'</span><span class="pt2">'+todo+'</span><span class="prog thin pp"><i style="width:'+pct+'%"></i></span></div>';}
  h+='<div class="row2"><button class="btn pri" data-act="examgo" data-id="'+ne.id+'">Heute starten</button><button class="btn" data-act="examtest" data-id="'+ne.id+'">Klausur-Test</button></div></div>';
  return h;
}
function plannerView(){
  const f=S.form;const bl=blocks();const open=S.formOpen||!P.exams.length;const sel=f.sel||(focusOn()?focusList():null);
  let h='<div class="pt row"><div><h1>Planer</h1><small>Klausur eintragen, Tagesplan bekommen</small></div>'+((!open)?'<button class="btn sm pri" data-act="toggleform">＋ Klausur</button>':'')+'</div>';
  P.exams.slice().sort(function(a,b){return a.date<b.date?-1:1;}).forEach(function(e){h+=examCard(e);});
  h+=planCard();
  if(open){
    let n=0,c=0;bl.forEach(function(b,k){if(!sel||sel.indexOf(k)>=0){n+=b.ids.length;c++;}});
    h+='<div class="sect"><div class="st">Neue Klausur'+(P.exams.length?' · <button class="link" style="padding:0" data-act="toggleform">Abbrechen</button>':'')+'</div><div class="glass grp">';
    h+=srow('📝','#0A84FF','Name','','<input id="ex-name" class="in inl" type="text" placeholder="Englisch" aria-label="Name" autocomplete="off" value="'+esc(f.name)+'">');
    h+=srow('📅','#FF9F0A','Datum','','<input id="ex-date" class="in inl" type="date" lang="de" min="'+fmt(new Date())+'" aria-label="Datum" value="'+esc(f.date)+'">');
    h+='<div class="srow chiprow"><div class="chips"><button class="chip2" data-act="qd" data-v="3">In 3 Tagen</button><button class="chip2" data-act="qd" data-v="7">In 1 Woche</button><button class="chip2" data-act="qd" data-v="14">In 2 Wochen</button></div></div>';
    h+=srow('📚','#34C759','Stoff','Welche Listen kommen dran?','<span class="hint" id="xinfo" style="text-align:right">'+c+' Listen · '+n+' Wörter</span>');
    h+='<button class="xr xall'+(!sel?' on':'')+'" data-act="xall"><span class="xc"></span><span class="xn">Alle Listen</span><span class="xs">'+allIds().length+'</span></button>';
    bl.forEach(function(b,k){h+='<button class="xr xl'+((!sel||sel.indexOf(k)>=0)?' on':'')+'" data-act="xrow" data-k="'+k+'"><span class="xc"></span><span class="xn">'+esc(b.custom?'✏️ '+b.name:b.name)+'</span><span class="xs">'+b.ids.length+'</span></button>';});
    h+='</div></div>';
    h+='<label class="chk" style="margin:4px 6px"><input type="checkbox" id="ex-focus" checked> Danach nur diese Listen üben (Lernfokus)</label>';
    if(S.formErr)h+='<div class="err" role="alert">'+esc(S.formErr)+'</div>';
    h+='<div class="stickycta"><button class="btn pri full" data-act="addexam">Klausur speichern</button></div>';
  }
  return h;
}
function runBar(){const r=Q&&Q.run||0;if(r<2)return '';const hot=r>=10?'🔥🔥':'🔥';const pop=(Q.runPop===r&&Q.answered)?' pop':'';const nx=r<3?3:(r<5?5:(Math.floor(r/5)+1)*5);return '<div class="runbar'+(r>=5?' hot':'')+pop+'" role="status"><b>'+hot+' '+r+'er Serie</b><span class="rbt"><i style="width:'+Math.min(100,Math.round(r/nx*100))+'%"></i></span><small>noch '+(nx-r)+' bis '+nx+'</small></div>';}
function recLen(){const pr=P.prof;if(!pr)return 15;if(pr.role==='schule'){const g=parseInt(pr.grade,10)||8;return g<=4?10:g<=7?15:g<=10?20:30;}return pr.level===1?15:pr.level===3?30:20;}
function xpAt(n){return 100*(n-1)+Math.round(12.5*(n-1)*(n-2));}
function lvlInfo(xp){xp=Math.max(0,xp|0);let l=1;while(xpAt(l+1)<=xp)l++;const a=xpAt(l),b=xpAt(l+1);const into=xp-a,need=b-a;const T=[[30,'Legende'],[22,'Meister'],[15,'Profi'],[10,'Könner'],[6,'Sammler'],[3,'Entdecker'],[1,'Neuling']];let t='Neuling';for(let i=0;i<T.length;i++){if(l>=T[i][0]){t=T[i][1];break;}}return {lvl:l,into:into,need:need,pct:Math.round(into/need*100),title:t};}
function rwF(){const pr=P.prof;if(!pr)return 1;if(pr.role==='schule'){const g=parseInt(pr.grade,10)||8;return g<=4?1.7:g<=7?1.35:g<=10?1:0.85;}return pr.level===1?1.3:pr.level===3?0.85:1;}
function levelInfo(pairs){const lvl=1+Math.floor(pairs/10);const into=pairs%10;const titles=['Neuling','Entdecker','Sammler','Könner','Profi','Meister','Legende'];return {lvl:lvl,into:into,pct:into*10,title:titles[Math.min(6,Math.floor((lvl-1)/2))]};}
const FREEZE_COST=40,BOOST_COST=60,AV_COST=25;
const AVATARS=['🐱', '🐶', '🐰', '🐸', '🐻', '🐯', '🦝', '🐨', '🦥', '🐝', '🐹', '🦜', '🦩', '🦘', '🦦', '🦙', '🦈', '🦖', '🐘', '🐲'];
const AVPRICE={'🐱':10,'🐶':40,'🐰':60,'🐸':90,'🐻':130,'🐯':180,'🦝':240,'🐨':310,'🦥':390,'🐝':480,'🐹':580,'🦜':700,'🦩':830,'🦘':970,'🦦':1130,'🦙':1300,'🦈':1500,'🦖':1750,'🐘':2000,'🐲':2500};
function avPrice(a){return AVPRICE[a]||25;}
const WEEKLY=['🦊','🐼','🦉','🐙','🦄','🐢','🦋','🐳','🦁','🐧','🦒','🦔','🦌','🐴','🐺','🐷','🦆','🐍','🐭'];
const AVNAME={'🐱':'Garfield','🐶':'Snoopy','🐰':'Peter','🐸':'Kermit','🐻':'Paddington','🐯':'Tigger','🦝':'Rocket','🐨':'Blinky Bill','🦥':'Sid','🐝':'Maja','🐹':'Hamtaro','🦖':'Rexy','🦈':'Bruce','🦩':'Pinky','🦘':'Skippy','🐲':'Ohnezahn','🦦':'Otti','🦙':'Kuzco','🦜':'Rocky','🐘':'Dumbo','🦊':'Schlaufox','🐼':'Po','🦉':'Hedwig','🐙':'Paul','🦄':'Amalthea','🐢':'Franklin','🦋':'Flatter','🐳':'Willy','🦁':'Simba','🐧':'Pingu','🦒':'Melman','🦔':'Sonic','🦌':'Bambi','🐴':'Spirit','🐺':'Balto','🐷':'Babe','🦆':'Donald','🐍':'Kaa','🐭':'Mickey'};
const XPB_COST=80;
const AVINFO={
'🐱':['Fauler Kater. Liebt Lasagne und lernt am liebsten morgens, nach dem Frühstück.','Miau!',1.7],
'🐶':['Treuer Beagle. Bringt dir jedes Wort zurück, das du vergessen hast.','Wau wau!',0.8],
'🐰':['Flinker Hase. Springt von Wort zu Wort und mag Karotten-Pausen.','Schnuff schnuff!',1.7],
'🐸':['Fröhlicher Frosch. Quakt gern mit, wenn du eine Vokabel triffst.','Quak quak!',0.6],
'🐻':['Höflicher Bär mit Hut. Lernt langsam, aber vergisst nie etwas.','Brumm brumm!',0.3],
'🐯':['Mutiger Tiger. Stürzt sich zuerst auf die schwersten Wörter.','Grrr!',0.4],
'🦝':['Schlauer Waschbär. Baut aus jedem Wort etwas Neues.','Tschirp tschirp!',1.4],
'🐨':['Müder Koala. Schläft viel und lernt im Schlaf, sagt er.','Mmh, gähn!',0.7],
'🦥':['Entspanntes Faultier. Langsam ist auch eine Geschwindigkeit.','Hallooo…',0.5],
'🐝':['Fleißige Biene. Sammelt jeden Tag ein paar Wörter, Stück für Stück.','Bsssss!',1.9],
'🐹':['Rundlicher Hamster. Hortet Vokabeln in seinen Backen.','Piep piep!',1.9],
'🦖':['Kleiner Dino. Kennt die ältesten Wörter der Welt.','Rooaar!',0.3],
'🦈':['Schneller Hai. Schwimmt durch jede Liste, ohne anzuhalten.','Dum dum, dum dum!',0.4],
'🦩':['Eleganter Flamingo. Lernt auf einem Bein und trotzdem sicher.','Honk honk!',1.2],
'🦘':['Sprunggewaltiges Känguru. Hüpft von Liste zu Liste, ohne Pause.','Boing, boing!',1.8],
'🐲':['Weiser Drache. Hütet die schwersten Wörter im ganzen Land.','Fauch!',0.3],
'🦊':['Cleverer Schlaufox. Findet immer den kürzesten Weg zum richtigen Wort.','Ring ding ding!',1.3],
'🐼':['Ruhiger Panda. Kaut Bambus und Vokabeln in aller Ruhe.','Mampf mampf!',0.8],
'🦉':['Kluge Eule mit Brief. Ist abends am wachsten und wiederholt mit dir.','Uhu!',0.7],
'🐙':['Achtarmiger Oktopus. Schafft acht Karten gleichzeitig.','Blubb blubb!',0.9],
'🦄':['Seltenes Einhorn. Taucht nur auf, wenn du regelmäßig lernst.','Tadaa!',1.6],
'🐢':['Weise Schildkröte. Sie kommt langsam, aber immer an.','Mmm…',0.6],
'🦋':['Zarter Schmetterling. Landet auf jedem Wort, das du gerade lernst.','Flatter flatter!',1.7],
'🐳':['Riesiger Wal. Singt dir die Vokabeln in den Schlaf.','Uuuuh!',0.3],
'🦁':['Stolzer Löwe. Brüllt, wenn du dein Tagesziel erreichst.','Roaar!',0.4],
'🐧':['Cooler Pinguin. Rutscht auf dem Bauch durch jede Prüfung.','Pinga pinga!',1.0],
'🦒':['Hohe Giraffe. Sieht die Antwort schon, bevor die Frage fertig ist.','Hallo von da oben!',0.9],
'🦔':['Schneller Igel. Rollt durch jede Liste, ohne anzuhalten.','Pieks pieks!',1.5],
'🦦':['Verspielter Otter. Hält beim Lernen sein Lieblingswort ganz fest.','Fiep fiep!',1.5],
'🦙':['Gelassenes Lama. Bleibt ruhig, auch wenn die Liste lang ist.','Hmmm, hmmm!',0.8],
'🦜':['Plappernder Papagei. Spricht jedes Wort nach, bis es sitzt.','Hallo, hallo!',1.8],
'🐘':['Elefant mit gutem Gedächtnis. Vergisst kein einziges Wort.','Törööö!',0.3],
'🦌':['Scheues Reh. Lernt leise im Wald und merkt sich jede Spur.','Röh röh!',0.9],
'🐴':['Freies Mustang-Pferd. Galoppiert durch jede Wortliste.','Wiehern!',1.4],
'🐺':['Mutiger Schlittenhund. Bringt dir die Wörter durch jeden Schneesturm.','Auuuuh!',1.1],
'🐷':['Kluges Schweinchen. Hütet die Wörter wie eine Herde.','Oink oink!',1.2],
'🦆':['Aufgeregte Ente. Quakt laut, wenn ein Wort nicht klappt, und lernt trotzdem weiter.','Quak quak!',1.3],
'🐍':['Schlaue Schlange. Flüstert dir schwierige Wörter ins Ohr.','Ssssss!',0.5],
'🐭':['Flinke Maus. Huscht durch die Karten und hat immer ein Lächeln.','Piep piep!',2.0]};
function hungerLvl(){if(!P.avatar)return -1;const h=(Date.now()-(P.fedAt||Date.now()))/36e5;return h<24?0:(h<48?1:2);}
function petName(a){return AVNAME[a]||'Dein Tier';}
function hearts(){const box=document.querySelector('.petbox');if(!box)return;for(let k=0;k<4;k++){const i=document.createElement('i');i.className='heart';i.textContent=['❤️','💛','💚','✨'][k%4];i.style.left=(38+Math.random()*24)+'%';i.style.animationDelay=(k*0.12)+'s';box.appendChild(i);setTimeout(function(){if(i.parentNode)i.parentNode.removeChild(i);},1600);}}
function petSay(a){const i=AVINFO[a];const el=document.getElementById('bubble');if(el){el.textContent=i?i[1]:'…';el.classList.remove('pop');void el.offsetWidth;el.classList.add('pop');}
  try{if(window.speechSynthesis&&i){const u=new SpeechSynthesisUtterance(i[1]);u.lang='de-DE';u.pitch=Math.max(0.1,Math.min(2,i[2]));u.rate=0.95;const v=VOICES.filter(function(x){return x.lang.toLowerCase().indexOf('de')===0;})[0];if(v)u.voice=v;speechSynthesis.cancel();speechSynthesis.speak(u);}}catch(e){}}
function petView(){
  const a=S.pet||P.avatar||'🐱';const i=AVINFO[a]||['','',1];const worn=P.avatar===a;const own=!!P.owned[a]||Object.keys(P.coll).some(function(k){return P.coll[k]===a;});
  const hl=worn?hungerLvl():-1;const hs=['Satt und zufrieden','Hat Hunger','Hat großen Hunger'][Math.max(0,hl)];
  let h='<div class="glass pad w col center petbox'+(hl===2?' weak':'')+'"><div id="bubble" class="bubble">Tippe mich an!</div><button class="petbig" data-act="petsay" data-v="'+a+'" aria-label="Tier antippen"><span class="tilt"><span class="am a0">'+a+'</span></span></button><h2 style="margin:0">'+esc(petName(a))+'</h2><p style="margin:0">'+esc(i[0])+'</p>';
  if(worn){h+='<div class="hint"><b>'+hs+'</b></div><div class="prog thin w"><i style="width:'+[100,55,18][hl]+'%"></i></div><button class="btn pri full" data-act="feed">Füttern'+(dayCount()>=5?' (gratis, du hast heute gelernt)':' (3 🪙)')+'</button><p class="hint" style="margin:0">Fütterst du '+esc(petName(a))+' zwei Tage nicht, wird das Tier traurig und schwach. Es geht nie verloren. Ein Futter, und es ist wieder fit.</p><button class="link" data-act="equip" data-v="">Tier ablegen</button>';}
  else if(own)h+='<button class="btn pri full" data-act="equip" data-v="'+a+'">'+esc(petName(a))+' tragen</button>';
  else h+='<button class="btn pri full" data-act="buyav" data-v="'+a+'"'+(P.coins<avPrice(a)?' disabled':'')+'>Kaufen für '+avPrice(a)+' 🪙</button>';
  return h+'</div>';}

function xpOn(){return (P.xpBoostUntil||0)>Date.now();}
function earnXp(n){n=Math.max(1,Math.round(n*rwF()));if(xpOn())n*=2;const l0=lvlInfo(P.xp).lvl;P.xp+=n;try{lgAdd(n);}catch(e){}const l1=lvlInfo(P.xp).lvl;if(l1>l0){setTimeout(function(){toast('Level '+l1+' erreicht! 🎉');sfx('level');},900);}return n;}
function activateXpBoost(min){P.xpBoostUntil=Math.max(Date.now(),P.xpBoostUntil||0)+min*60000;}
function earn(n){if(n>0)n=Math.max(1,Math.round(n*rwF()));if((P.boostUntil||0)>Date.now())n*=2;P.coins+=n;if(n>0)setTimeout(function(){sfx('coin');},350);}
function weekKey(){return fmt(weekStart(0));}
function weeklyEmoji(){return WEEKLY[Math.floor(weekStart(0).getTime()/6048e5)%WEEKLY.length];}
function dailyBonus(){if(P.avatar&&!P.fedAt){P.fedAt=Date.now();save();}
  const t=fmt(new Date());if(P.loginDay===t)return;P.loginDay=t;P.coins+=2;save();setTimeout(function(){toast('Tagesbonus: +2 🪙');},600);}
function myAvatars(){return AVATARS.filter(function(a){return P.owned[a];}).concat(Object.keys(P.coll).map(function(k){return P.coll[k];}));}
function profileView(){
  const lv=lvlInfo(P.xp);const LI=lvlInfo(P.xp);const lvl=LI.lvl;const into=LI.pct;
  const bl=badgeList();const got=bl.filter(function(b){return b[2];}).length;
  let h='<div class="pt"><h1>Profil</h1><small>So sehen dich Freunde später</small></div>';
  h+='<div class="glass pad w col"><div class="row" style="gap:14px;align-items:center"><button class="collbig" data-act="empick" aria-label="Emoji oder Tier ändern" style="cursor:pointer;border:0"><span class="am a0">'+(P.avatar||P.emoji||'🙂')+'</span></button><span style="flex:1;min-width:0"><input id="nick" class="in" type="text" maxlength="16" placeholder="Dein Spitzname" aria-label="Spitzname" autocomplete="off" value="'+esc(P.nick||'')+'"><div class="hint" style="margin-top:4px">Tippe links auf das Bild, um es zu ändern</div><div style="margin-top:2px"><b>Level '+lvl+' · '+lv.title+'</b></div></span></div>';
  h+='<div class="prog thin w"><i style="width:'+into+'%"></i></div><div class="hint">'+P.xp+' XP · noch '+(LI.need-LI.into)+' bis Level '+(lvl+1)+'</div></div>';
  if(S.emPick){const EMS=['🙂','😀','😎','🤓','🥳','🧠','📚','🎯','🔥','⭐','🌟','🍀','🌈','⚡','🎧','🎨','🎮','⚽','🏀','🎸','🌍','🧩','🏆','💡','🚲'];const mine=myAvatars();
    h+='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Wähle dein Bild</span><button class="link" data-act="empick">Fertig</button></div><div class="hint">Emojis</div><div class="emgrid">'+EMS.map(function(e){return '<button class="emb'+((!P.avatar&&(P.emoji||'🙂')===e)?' on':'')+'" data-act="setemoji" data-v="'+e+'" aria-label="Emoji '+e+'">'+e+'</button>';}).join('')+'</div>'+(mine.length?'<div class="hint" style="margin-top:6px">Deine Tiere</div><div class="emgrid">'+mine.map(function(e){return '<button class="emb'+(P.avatar===e?' on':'')+'" data-act="equip" data-v="'+e+'" aria-label="'+esc(petName(e))+'">'+e+'</button>';}).join('')+'</div>':'<div class="hint">Tiere kaufst du im Shop.</div>')+'</div>';}
  h+='<div class="sgrid3"><div class="glass sg"><b>'+streak()+'</b><small>Tage am Stück</small></div><div class="glass sg"><b>'+P.coins+'</b><small>Münzen</small></div><div class="glass sg"><b>'+mastered()+'</b><small>gemeistert</small></div></div>';
  h+='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Abzeichen</span><span class="hint">'+got+' von '+bl.length+'</span></div><div class="badges sm">'+bl.map(function(b){return '<button class="bdg'+(b[2]?(P.claimed[b[3]]?' got':' got new'):'')+'" data-act="claim" data-k="'+b[3]+'"><span>'+b[0]+'</span><small>'+b[1]+'</small>'+((b[2]&&!P.claimed[b[3]])?'<em>Abholen</em>':'')+'</button>';}).join('')+'</div></div>';
  const col=Object.keys(P.coll).map(function(k){return P.coll[k];});
  h+='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Sammlung</span><span class="hint">'+col.length+' von '+WEEKLY.length+'</span></div><div class="avgrid">'+WEEKLY.map(function(e){const has=col.indexOf(e)>=0;return '<div class="av'+(has?'':' lockd')+'"><span class="am a'+(WEEKLY.indexOf(e)%4)+'">'+e+'</span><b>'+(AVNAME[e]||'')+'</b><small>'+(has?'Gesammelt':'Noch offen')+'</small></div>';}).join('')+'</div></div>';
  h+='<button class="glass gtap lrow" data-act="kontogo"><span class="li">☁️</span><span class="lt"><b>Konto und Sicherung</b><small>'+(isHosted()?(sbOn()?(sbIn()?esc((SBS.user&&SBS.user.email)||'Angemeldet'):'Nicht angemeldet'):'Noch nicht verbunden'):(cloudMode()?'Claude-Konto verbunden · Auto-Sicherung '+(P.autoCloud!==false?'an':'aus'):'Nicht verbunden'))+'</small></span><span class="chev">›</span></button>';
  return h;
}
function shopView(){
  const wi=weekInfo(0);const key=weekKey();const em=weeklyEmoji();const got=!!P.coll[key];const need=P.weekGoal||4;
  const boost=(P.boostUntil||0)>Date.now();const left=boost?Math.ceil((P.boostUntil-Date.now())/36e5):0;
  let h='<div class="pt row"><div><h1>Shop</h1><small>Münzen verdienst du beim Lernen</small></div><div class="gbadge">🪙 '+P.coins+'</div></div>';
  h+='<div class="glass pad w col"><div class="hd2"><span class="lab">Sammelobjekt der Woche</span><span class="hint">'+wi.days+' von '+need+' Lerntagen</span></div><div class="row" style="gap:14px;align-items:center"><span class="collbig'+(got?'':' lock')+'"><span class="am a1">'+em+'</span></span><span style="flex:1"><b>'+(AVNAME[em]||'')+(got?' ist in deiner Sammlung':': Lerne an '+need+' Tagen dieser Woche')+'</b><br><small class="hint">'+(got?'Nächste Woche gibt es ein neues.':'Dann bekommst du es und kannst es als Avatar tragen.')+'</small></span>'+((!got&&wi.days>=need)?'<button class="btn pri sm" data-act="collclaim">Abholen</button>':'')+'</div></div>';
  const xb=xpOn();const xl=xb?Math.ceil((P.xpBoostUntil-Date.now())/6e4):0;
  h+='<div class="glass pad w col"><div class="lab">Boosts</div>';
  h+='<div class="lrow" style="padding:6px 0;gap:10px"><span class="li">⭐</span><span class="lt"><b>Doppel-XP</b><small>'+(xb?'Aktiv, noch ca. '+xl+' Min.':'1 Stunde doppelte XP')+'</small></span><button class="btn sm'+((P.coins>=XPB_COST)?' pri':'')+'" data-act="buyxp"'+(P.coins>=XPB_COST?'':' disabled')+'>'+XPB_COST+' 🪙</button></div>';
  if(P.tokens>0)h+='<div class="lrow" style="padding:6px 0;gap:10px"><span class="li">🏃</span><span class="lt"><b>Marathon-Booster ×'+P.tokens+'</b><small>Verdient durch langes Lernen. 1 Stunde doppelte XP.</small></span><button class="btn sm pri" data-act="usetoken">Nutzen</button></div>';
  h+='<div class="lrow" style="padding:6px 0;gap:10px"><span class="li">🧊</span><span class="lt"><b>Eisschutz</b><small>Friert deine Serie ein, wenn du einen Tag verpasst. Du hast '+(P.freeze||0)+' von 3.</small></span><button class="btn sm'+(P.coins>=FREEZE_COST?' pri':'')+'" data-act="buyfreeze"'+(P.coins>=FREEZE_COST?'':' disabled')+'>'+FREEZE_COST+' 🪙</button></div>';
  h+='<div class="lrow" style="padding:6px 0;gap:10px"><span class="li">⚡</span><span class="lt"><b>Münz-Boost</b><small>'+(boost?'Aktiv, noch ca. '+left+' Std.':'24 Stunden doppelte Münzen')+'</small></span><button class="btn sm'+((P.coins>=BOOST_COST&&!boost)?' pri':'')+'" data-act="buyboost"'+((P.coins>=BOOST_COST&&!boost)?'':' disabled')+'>'+BOOST_COST+' 🪙</button></div></div>';
  h+='<div class="glass pad w col"><div class="hd2"><span class="lab">Avatare</span><span class="hint">Trage einen neben deinem Namen</span></div><div class="avgrid">';
  let ai=0;
  AVATARS.forEach(function(a){const own=!!P.owned[a];h+='<button class="av'+(P.avatar===a?' on':'')+'" data-act="petopen" data-v="'+a+'"'+'><span class="am a'+(ai++%4)+'">'+a+'</span><b>'+(AVNAME[a]||'')+'</b><small>'+(own?(P.avatar===a?'Getragen':'Gekauft'):avPrice(a)+' 🪙')+'</small></button>';});
  Object.keys(P.coll).forEach(function(k){const a=P.coll[k];h+='<button class="av'+(P.avatar===a?' on':'')+'" data-act="petopen" data-v="'+a+'"><span class="am a'+(ai++%4)+'">'+a+'</span><b>'+(AVNAME[a]||'')+'</b><small>'+(P.avatar===a?'Getragen':'Sammlung')+'</small></button>';});
  h+='</div>'+(P.avatar?'<button class="link" data-act="equip" data-v="">Avatar ablegen</button>':'')+'</div>';
  h+='<p class="hint" style="margin:0 6px">Münzen: 1 pro richtigem neuen Wort, 2 beim Tippen, 10 für das Tagesziel, 2 als Tagesbonus. Echtgeld gibt es nirgends.</p>';
  return h;
}
function shopLink(){const wi=weekInfo(0);const got=!!P.coll[weekKey()];return '<button class="glass gtap lrow" data-act="shop"><span class="li">🛍️</span><span class="lt"><b>Shop · '+P.coins+' 🪙</b><small>'+(hungerLvl()>0?petName(P.avatar)+' hat Hunger. Jetzt füttern!':(got?'Sammelobjekt der Woche geholt':'Sammelobjekt: '+wi.days+' von '+(P.weekGoal||4)+' Lerntagen'))+'</small></span><span class="chev">›</span></button>';}
function shopCard(){
  return '<div class="glass pad w col tight shp"><div class="hd2"><span class="lab">Münzen</span><span class="hint">🪙 '+P.coins+'</span></div><p class="hint" style="margin:0">Eisschutz, Boost, Avatare und das Sammelobjekt der Woche gibt es im Shop.</p><button class="btn full" data-act="shop">Zum Shop</button></div>';
}
function weekStart(off){const d=new Date();const wd=(d.getDay()+6)%7;d.setDate(d.getDate()-wd-7*(off||0));return d;}
function weekInfo(off){const st=weekStart(off);let words=0,days=0,lastSp=null;const keys=[];
  for(let i=0;i<7;i++){const d=new Date(st);d.setDate(st.getDate()+i);const k=fmt(d);keys.push(k);const n=(P.gd[k]||[]).length;words+=n;if(n>0||P.days[k]>0)days++;if(P.hist[k]!=null)lastSp=P.hist[k];}
  let before=null;const hk=Object.keys(P.hist).sort();hk.forEach(function(k){if(k<keys[0])before=P.hist[k];});
  const sp=securePairs();const spNow=(off?lastSp:sp[0]);
  let mins=0;keys.forEach(function(k){mins+=(P.mins[k]||0);});
  return {mins:mins,words:words,days:days,spGain:(spNow==null||before==null&&!off&&spNow==null)?null:(spNow-(before==null?0:before)),spNow:spNow,spTot:sp[1]};}
function weekCard(title){
  return weekCardInner(title).replace('class="glass pad w col tight"','class="glass pad w col tight wk"');
}
function weekGoalCheck(){const wi=weekInfo(0);const goal=P.weekGoal||4;if(wi.days>=goal&&P.weekPaid!==weekKey()){P.weekPaid=weekKey();earn(20);earnXp(100);save();setTimeout(function(){toast('Wochenziel erreicht! +20 🪙 und +100 XP');confetti();},700);}}
function weekCardInner(title){
  const w=weekInfo(0),pw=weekInfo(1);const diff=w.words-pw.words;
  const pct=w.spTot?Math.round(w.spNow/w.spTot*100):0;
  let h='<div class="glass pad w col tight"><div class="hd2"><span class="lab">'+(title||'Diese Woche')+'</span><span class="hint">Mo bis So</span></div><div class="sgrid3">';
  h+='<div class="sg"><b>'+w.words+'</b><small>Wörter gelernt</small></div><div class="sg"><b>'+w.days+' / 7</b><small>Lerntage</small></div><div class="sg"><b>'+(w.spGain==null?0:(w.spGain>=0?'+':'')+w.spGain)+'</b><small>sichere Paare</small></div></div>';
  h+='<div class="hd2"><span class="hint">Wochenziel: '+Math.min(w.days,P.weekGoal||4)+' von '+(P.weekGoal||4)+' Lerntagen</span><span class="hint">'+(P.weekPaid===weekKey()?'✓ erreicht':'+20 🪙')+'</span></div><div class="prog thin w"><i style="width:'+Math.min(100,Math.round(w.days/(P.weekGoal||4)*100))+'%"></i></div>';
  h+='<div class="hint">Lernzeit diese Woche: '+Math.round(w.mins)+' Min. · '+pct+' % deiner Wortpaare sind sicher. '+(pw.words?('Letzte Woche: '+pw.words+' Wörter ('+(diff>=0?'+':'')+diff+').'):'Letzte Woche hast du noch nichts gelernt.')+'</div></div>';
  return h;}
function dayVals(n){const a=[];for(let i=n-1;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const k=fmt(d);a.push({k:k,d:d,v:(P.gd[k]||[]).length});}return a;}
function badgeList(){
  const sp=securePairs()[0];let goalHit=false;Object.keys(P.gd).forEach(function(k){if(P.gd[k].length>=P.dailyGoal)goalHit=true;});const bs=bestStreak();
  return [['🌱','Erste Runde',P.st.ok+P.st.no>0,'first','Beende deine erste Runde'],['🔥','3 Tage Serie',bs>=3,'s3','Lerne 3 Tage in Folge'],['🎯','Tagesziel',goalHit,'goal','Erreiche dein Tagesziel'],['📚','25 sichere Paare',sp>=25,'p25','Habe 25 Wortpaare sicher'],['💯','100 richtig',P.st.ok>=100,'ok100','Beantworte 100 Fragen richtig'],['🏆','7 Tage Serie',bs>=7,'s7','Lerne 7 Tage in Folge'],['⚡','14 Tage Serie',bs>=14,'s14','Lerne 14 Tage in Folge'],['👑','30 Tage Serie',bs>=30,'s30','Lerne 30 Tage in Folge'],['🌳','50 sichere Paare',sp>=50,'p50','Habe 50 Wortpaare sicher'],['🚀','100 sichere Paare',sp>=100,'p100','Habe 100 Wortpaare sicher'],['🎓','500 richtig',P.st.ok>=500,'ok500','Beantworte 500 Fragen richtig'],['📅','Klausur geplant',P.exams.length>0,'exam','Lege eine Klausur im Planer an']];
}
function statsView(){if(!(((P.st&&(P.st.ok+P.st.no))||0)>=5))return '<div class="pt"><h1>Statistik</h1></div>'+statsEmpty();return statsView0().replace('<h1>Statistik</h1></div>','<h1>Statistik</h1></div>'+statsEmpty()+progCard()+forecastCard())+hourCard()+calCard()+'<button class="glass gtap lrow w" data-act="streakinfo"><span class="li">🔥</span><span class="lt"><b>Wie zählt meine Serie?</b><small>Regeln, Eisschutz, Wochenende</small></span><span class="chev">›</span></button>'+usageCard();}
function statsView0(){
  const sp=securePairs();const lv=lvlInfo(P.xp);const tot=P.st.ok+P.st.no;const acc=tot?Math.round(P.st.ok/tot*100):0;
  let h='<div class="pt"><h1>Statistik</h1></div>';
  h+='<div class="glass hero2 compact w gtap" data-act="profile" role="button"><div class="hr"><div class="ringw md">'+ring(lv.pct)+'<b>'+lv.lvl+'</b></div><div class="ht"><span class="lab">Level '+lv.lvl+'</span><strong>'+(P.avatar?P.avatar+' ':'')+lv.title+'</strong><small>Noch '+(lv.need-lv.into)+' XP bis Level '+(lv.lvl+1)+'</small></div></div></div>';
  h+='<div class="sgrid3"><div class="glass sg"><b>'+streak()+'</b><small>Tage am Stück</small></div><div class="glass sg"><b>'+acc+' %</b><small>Trefferquote</small></div><div class="glass sg"><b>'+mastered()+'</b><small>gemeistert</small></div></div>';
  h+=weekCard();
  h+=shopCard();
  const days=dayVals(14);const goal=P.dailyGoal;const mx=Math.max.apply(null,days.map(function(x){return x.v;}).concat([goal,1]));
  const act2=days.filter(function(x){return x.v>0;});const avg=act2.length?Math.round(act2.reduce(function(s,x){return s+x.v;},0)/act2.length):0;
  const gy=(100-goal/mx*84).toFixed(1);const L=['S','M','D','M','D','F','S'];
  let svg='<svg viewBox="0 0 320 124" class="chart" role="img" aria-label="Gelernte Wörter pro Tag, letzte 14 Tage"><defs><linearGradient id="bgr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--g1)"/><stop offset="1" style="stop-color:var(--g2)"/></linearGradient></defs>';
  svg+='<line x1="4" x2="316" y1="'+gy+'" y2="'+gy+'" style="stroke:var(--ink2);opacity:.5" stroke-width="1" stroke-dasharray="4 4"/>';
  days.forEach(function(x,i){const bx0=8+i*22;const hh=x.v>0?Math.max(5,x.v/mx*84):3;const y=100-hh;const today=i===days.length-1;
    svg+='<rect x="'+bx0+'" y="'+y.toFixed(1)+'" width="16" height="'+hh.toFixed(1)+'" rx="5" '+(x.v>0?'fill="url(#bgr)"':'style="fill:var(--line)"')+(today?' stroke-width="2" style="stroke:var(--ink)"':'')+'/>';
    if(x.v>0)svg+='<text x="'+(bx0+8)+'" y="'+(y-3).toFixed(1)+'" text-anchor="middle" style="fill:var(--ink2)" font-size="9" font-weight="700">'+x.v+'</text>';
    svg+='<text x="'+(bx0+8)+'" y="114" text-anchor="middle" style="fill:var(--ink2)" font-size="9" font-weight="600">'+L[x.d.getDay()]+'</text>';});
  svg+='</svg>';
  h+='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Wörter pro Tag</span><span class="hint">'+'Ziel '+goal+' gestrichelt'+(avg?' · Ø '+avg:'')+'</span></div>'+svg+'</div>';
  const cnt=[0,0,0,0];allIds().forEach(function(id){['en','de'].forEach(function(d){cnt[pcat(bx(id,d))]++;});});const tt=sp[1]||1;
  h+='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Lernstand</span><span class="hint">Jedes Wort zählt zweimal</span></div><div class="stack" role="img" aria-label="Verteilung des Lernstands">';
  [3,2,1,0].forEach(function(i){if(cnt[i])h+='<i style="width:'+(cnt[i]/tt*100)+'%;background:'+CATS[i].c+'"></i>';});
  h+='</div><div class="lg4">';
  [3,2,1,0].forEach(function(i){h+='<div><em class="dot" style="background:'+CATS[i].c+'"></em><b>'+cnt[i]+'</b> '+CATS[i].n+'</div>';});
  h+='</div></div>';
  const hard=allIds().filter(function(id){return (P.wrong[id]||0)>0;}).sort(function(a,b){return P.wrong[b]-P.wrong[a];}).slice(0,3);
  if(hard.length){h+='<div class="glass pad w tight"><div class="lab" style="margin-bottom:4px">Hier hakt es</div>';hard.forEach(function(id){h+=wordRow(id,true).replace('</div>','<span class="hint">'+P.wrong[id]+'×</span></div>');});h+='<button class="btn pri full" style="margin-top:8px" data-act="hardgo">Diese Wörter üben</button></div>';}
  const bl=badgeList();const got=bl.filter(function(b){return b[2];}).length;
  const ord=bl.slice().sort(function(a,b){return (b[2]?1:0)-(a[2]?1:0);});const shown=S.badgesAll?bl:ord.slice(0,6);
  h+='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Abzeichen</span><button class="link" data-act="badgesall">'+(S.badgesAll?'Weniger':'Alle '+bl.length+' anzeigen')+'</button></div><div class="hint" style="margin:-2px 0 4px">'+got+' von '+bl.length+' geholt</div><div class="badges sm">'+shown.map(function(b){return '<button class="bdg'+(b[2]?(P.claimed[b[3]]?' got':' got new'):'')+'" data-act="claim" data-k="'+b[3]+'"><span>'+b[0]+'</span><small>'+b[1]+'</small>'+((b[2]&&!P.claimed[b[3]])?'<em>Abholen</em>':'')+'</button>';}).join('')+'</div></div>';
  return h;
}
function tg(key,on){return '<button class="tg'+(on?' on':'')+'" role="switch" aria-checked="'+(on?'true':'false')+'" data-act="set" data-key="'+key+'" data-v="'+(on?'false':'true')+'"></button>';}
function chs(key,vals,cur,lab){return '<div class="chs">'+vals.map(function(v){return '<button class="cb'+(cur===v?' on':'')+'" data-act="set" data-key="'+key+'" data-v="'+v+'">'+(lab?lab[v]:v)+'</button>';}).join('')+'</div>';}
function srow(ic,col,label,sub,ctrl){return '<div class="srow"><span class="sic" style="background:'+col+'">'+ic+'</span><span class="sl"><b>'+label+'</b>'+(sub?'<small>'+sub+'</small>':'')+'</span>'+ctrl+'</div>';}
function segc(key,vals,cur,labels,act){return '<div class="segc" role="group">'+vals.map(function(v){return '<button class="'+(cur===v?'on':'')+'" data-act="'+(act||'set')+'" data-key="'+key+'" data-v="'+v+'">'+(labels&&labels[v]!=null?labels[v]:v)+'</button>';}).join('')+'</div>';}
function ago(ts){if(!ts)return 'noch nie';const n=Math.floor((Date.now()-ts)/864e5);return n<=0?'heute':(n===1?'gestern':'vor '+n+' Tagen');}
function feedbackView(){
  const f=S.fb||(S.fb={kind:'bug',text:'',dev:true});
  let h='<div class="pt"><h1>Feedback</h1><small>Hilf mit, die App besser zu machen</small></div><div class="glass pad w col">';
  h+='<div class="lab">Worum geht es?</div>'+segc('kind',['bug','idea','praise'],f.kind,{bug:'🐞 Fehler',idea:'💡 Idee',praise:'👍 Lob'},'fbset');
  h+='<textarea id="fbt" class="ta" rows="6" placeholder="'+({bug:'Was ist passiert? Auf welcher Seite? Was hast du vorher getippt?',idea:'Was fehlt dir oder was würdest du ändern?',praise:'Was gefällt dir besonders?'}[f.kind])+'" aria-label="Dein Feedback">'+esc(f.text)+'</textarea>';
  h+='<label class="chk"><input type="checkbox" id="fbd"'+(f.dev?' checked':'')+'> Geräteinfo anhängen (Gerät, Bildschirm, Version)</label>';
  if(S.fbtext)h+='<textarea class="ta" rows="5" readonly aria-label="Feedbacktext">'+esc(S.fbtext)+'</textarea>';
  h+='<button class="btn pri full" data-act="fbsend">Teilen oder kopieren</button><p class="hint" style="margin:0">Dein Gerät öffnet das Teilen-Menü. Dort wählst du, wohin der Text geht, zum Beispiel Nachrichten oder Mail. Es wird nichts automatisch gesendet.</p></div>';
  return h;
}
const SETCAT=[['Lernen','🎓','#FF9F0A',['Lernen']],['Üben und Abfrage','✏️','#5E5CE6',['Üben und Abfrage']],['Aussehen','🎨','#8B5CF6',['Aussehen']],['Bedienungshilfen','♿','#0A84FF',['Bedienungshilfen']],['Ton und Stimmen','🔊','#FF375F',['Ton und Stimmen']],['Erinnerung und Bericht','🔔','#FF9500',['Erinnerung','Bericht']],['KI','✨','#FF6B8B',['KI']],['Konto und Offline','👤','#34C759',['Konto','Offline']],['Daten','💾','#8E8E93',['Daten']],['Hilfe und Info','❓','#30B0C7',['Hilfe und Info']]];
function setCompose(cats,SUM){
  const by={};cats.forEach(function(c){by[c.t]=c;});
  const list=[];
  SETCAT.forEach(function(sc){const mem=sc[3].filter(function(t){return by[t];});if(!mem.length)return;
    let body='',note='';mem.forEach(function(t){const c=by[t];if(mem.length>1)body+='<div class="swlab sgap"><b>'+t+'</b></div>';body+=c.body;if(c.note)note+='<p class="sn">'+c.note+'</p>';});
    const sub=mem.map(function(t){return SUM[t]||'';}).filter(Boolean)[0]||'';
    list.push({k:sc[0],ic:sc[1],col:sc[2],body:body,note:note,sub:sub});});
  const q=(S.sq||'').trim();
  if(q){let o='<div id="snone" class="glass pad w hint" hidden>Keine passende Einstellung gefunden.</div>';list.forEach(function(c){o+='<div class="sfl"><div class="lab">'+c.k+'</div><div class="glass grp">'+c.body+'</div></div>';});return o;}
  const wide=window.innerWidth>=740;let cur=S.setcat||P.setcat;
  if(wide&&!list.some(function(c){return c.k===cur;}))cur=list[0].k;
  const nav='<div class="glass grp setnav">'+list.map(function(c){return '<button class="snav'+(c.k===cur&&wide?' on':'')+'" data-act="setcat" data-k="'+esc(c.k)+'"><span class="sic" style="background:'+c.col+'">'+c.ic+'</span><span class="sl"><b>'+c.k+'</b>'+(c.sub?'<small>'+c.sub+'</small>':'')+'</span><span class="chev">›</span></button>';}).join('')+'</div>';
  const one=list.filter(function(c){return c.k===cur;})[0];
  if(wide)return '<div class="setsplit">'+nav+'<div class="setpane"><div class="pt"><h2>'+one.k+'</h2></div><div class="glass grp">'+one.body+'</div>'+one.note+'</div></div>';
  if(!one)return evQuick()+nav;
  return '<div class="setbar"><button class="setbk2" data-act="setcat" data-k="" aria-label="Zurück zur Einstellungs-Liste"><span aria-hidden="true">‹</span> Einstellungen</button></div><div class="pt"><h2>'+one.k+'</h2></div><div class="glass grp">'+one.body+'</div>'+one.note+'<button class="glass gtap setbk3" data-act="setcat" data-k="">‹ Zurück zu allen Einstellungen</button>';
}
function setFilter(){
  const q=(S.sq||'').trim().toLowerCase();if(!q||S.screen!=='settings')return;
  document.querySelectorAll('.sfl').forEach(function(sec){
    const all=sec.querySelector('.lab').textContent.toLowerCase().indexOf(q)>=0;let any=false,vis=true;
    Array.prototype.forEach.call(sec.querySelector('.grp').children,function(el){const lbl=el.classList.contains('srow')||el.classList.contains('swlab');if(lbl)vis=all||el.textContent.toLowerCase().indexOf(q)>=0;el.hidden=!vis;if(vis)any=true;});
    sec.hidden=!any;});
  const m=document.getElementById('snone');if(m)m.hidden=!!document.querySelector('.sfl:not([hidden])');
}
function settingsView(){
  const sw=Object.keys(BGP).map(function(k){const c=BGP[k].c;return '<button class="sw'+(P.bg===k?' on':'')+'" data-act="set" data-key="bg" data-v="'+k+'" aria-label="Hintergrund '+BGP[k].n+'"><i style="background:linear-gradient(135deg,rgb('+c[0].join(',')+'),rgb('+c[1].join(',')+'),rgb('+c[2].join(',')+'))"></i><span>'+BGP[k].n+'</span></button>';}).join('');
  const AC={blue:['Blau','#2F6FEB'],poppy:['Mohn','#D6452F'],mustard:['Senf','#C99A2E'],green:['Grün','#2E8B57'],rose:['Rosé','#D6618F']};
  const acsw=Object.keys(AC).map(function(k){return '<button class="sw'+((P.accent||'blue')===k?' on':'')+'" data-act="set" data-key="accent" data-v="'+k+'" aria-label="Akzentfarbe '+AC[k][0]+'"><i style="background:'+AC[k][1]+'"></i><span>'+AC[k][0]+'</span></button>';}).join('');
  const vsel=function(id,ic,col,label,cur,pv){const vs=enVoices();return srow(ic,col,label,'','<span class="row2c"><button class="btn sm" data-act="vprev" data-v="'+pv+'" aria-label="'+label+' anhören">▶</button><select id="'+id+'" class="in inl" aria-label="'+label+'"><option value="">Automatisch</option>'+vs.map(function(v){return '<option value="'+esc(v.name)+'"'+(cur===v.name?' selected':'')+'>'+esc(vLabel(v))+'</option>';}).join('')+'</select></span>');};
  const cmS=cloudMode();
  const SUM={'Konto':isHosted()?(sbOn()?(sbIn()?esc((SBS.user&&SBS.user.email)||'Angemeldet'):'Nicht angemeldet'):'Noch nicht verbunden'):(cmS?'Claude-Konto · Auto-Sicherung '+(P.autoCloud!==false?'an':'aus'):'Nicht verbunden'),
    'Aussehen':(isDark()?'Dunkel':'Hell')+' · '+AC[P.accent||'blue'][0]+' · '+(P.ui==='play'?'Spielerisch':(P.ui==='apple'?'Sachlich':(P.look==='vivid'&&BGP[P.bg]?BGP[P.bg].n:'Standard')))+' · Schrift '+(P.fontSize||'M'),
    'Lernen':(P.dailyGoal||10)+' Wörter am Tag · Behalten '+(P.retP||90)+' %','Üben und Abfrage':(P.shuffleCards?'Karten gemischt':'Feste Reihenfolge')+(P.autoNext?' · automatisch weiter':''),
    'Ton und Stimmen':(P.speak?'Vorlesen an':'Vorlesen aus')+(P.sfx?' · Töne an':''),'Erinnerung':P.remindersEnabled?'ab '+(P.remHour||17)+' Uhr':'aus','KI':P.aiOn!==false?'an':'aus','Daten':'Sicherung, Zurücksetzen','Hilfe und Info':'Neuigkeiten, Impressum, Datenschutz','Bedienungshilfen':'Schrift '+(P.fontSize||'M')+(P.hc?' · Kontrast':'')+(P.calm?' · ruhig':'')+(P.bigtap?' · große Flächen':'')};
  const so=(P.setOpen&&typeof P.setOpen==='object')?P.setOpen:{};
  const CATS=[];const sect=function(t,body,note){CATS.push({t:t,body:body,note:note});return '';};
  const bgsw=['natural'].concat(Object.keys(BGP)).map(function(k){const nat=k==='natural';const c=nat?[[160,186,224],[192,202,228],[224,216,210]]:BGP[k].c;const on=nat?(P.look!=='vivid'):(P.look==='vivid'&&P.bg===k);return '<button class="sw'+(on?' on':'')+'" data-act="bgpick" data-v="'+k+'" aria-label="Hintergrund '+(nat?'Standard':BGP[k].n)+'"><i style="background:linear-gradient(135deg,rgb('+c[0].join(',')+'),rgb('+c[1].join(',')+'),rgb('+c[2].join(',')+'))"></i><span>'+(nat?'Standard':BGP[k].n)+'</span></button>';}).join('');
  const det=window.innerWidth<740&&!!S.setcat&&!(S.sq||'').trim();
  let h=det?'':'<div class="pt"><h1>Einstellungen</h1></div><input id="sq" class="in" type="search" placeholder="Einstellung suchen" aria-label="Einstellung suchen" autocomplete="off" value="'+esc(S.sq||'')+'">';
  if(!det)h+='<button class="glass gtap lrow" data-act="profile"><span class="li"><span class="am a0">'+(P.avatar||P.emoji||'🙂')+'</span></span><span class="lt"><b>'+(P.nick?esc(P.nick):'Profil')+'</b><small>Level '+(1+Math.floor(P.xp/100))+' · Abzeichen und Sammlung</small></span><span class="chev">›</span></button>';
  h+='<div class="setwrap">';
  if(!isHosted()){const cm=cloudMode();h+=sect('Konto',srow('👤','#0A84FF',cm?'Mit Claude-Konto verbunden':'Kein Konto verbunden',cm?'Zuletzt gesichert: '+(P.cloudAt?ago(P.cloudAt):'noch nie'):'Öffne die App direkt in Claude und melde dich dort an',cm?'<span class="row2c"><button class="btn sm" data-act="cloudsave">Sichern</button><button class="btn sm" data-act="cloudload">'+(S.confirmCloud?'Sicher?':'Holen')+'</button></span>':'')+srow('🔄','#5AC8FA','Automatisch sichern',cm?'Nach dem Lernen in deinem Claude-Konto':'Wird aktiv, sobald ein Konto verbunden ist',tg('autoCloud',P.autoCloud!==false)),'Eigene Konten mit E-Mail, Google oder Apple gibt es in der Web-Version der App.');}
  if(isHosted())h+=sect('Konto',(!sbOn()?srow('👤','#8E8E93','Konto','Noch nicht verbunden','<button class="btn sm" data-act="account">Ansehen</button>'):sbIn()?srow('👤','#0A84FF','Angemeldet',esc((SBS.user&&SBS.user.email)||''),'<button class="btn sm" data-act="account">Verwalten</button>'):srow('👤','#0A84FF','Konto','Fortschritt sichern und auf mehreren Geräten lernen','<button class="btn sm pri" data-act="account">Anmelden</button>'))+srow('🔄','#5AC8FA','Automatisch sichern',sbIn()?'Nach dem Lernen in deinem Konto':'Wird aktiv, sobald du angemeldet bist',tg('autoCloud',P.autoCloud!==false)));
  h+=sect('Offline',offRow());
  h+=sect('Bericht',srow('📨','#0A84FF','Wochenbericht senden','Für Eltern oder Lehrer: Lerntage, Wörter, Serie','<button class="btn sm" data-act="report">Senden</button>'));
  {const pl=P.ui==='play';const ap=P.ui==='apple'||pl;
  const stil=srow('🍎','#111827','Stil',pl?'Kräftig, verspielt, mit dicken Knöpfen':(ap?'Ruhig und sachlich, ohne Schnickschnack':'Glas, Farbe und Tiefe'),segc('ui',['play','apple','glass'],P.ui==='play'?'play':(ap?'apple':'glass'),{play:'Spielerisch',apple:'Sachlich',glass:'Liquid Glass'}));
  const farbe='<div class="swlab"><b>Akzentfarbe</b><small>Knöpfe, Schalter und Links</small></div><div class="swrow">'+acsw+'</div>';
  const glasT=srow('🎨','#8B5CF6','Hintergrund','Farbe hinter dem Glas','')+'<div class="swrow bgrow">'+bgsw+'</div>'+srow('💧','#0A84FF','Glas','Stärke des Effekts',segc('glass',[0,1,2,3],P.glass==null?2:P.glass,{0:'Aus',1:'Dezent',2:'Normal',3:'Max'}))+srow('🌊','#64D2FF','Hintergrund bewegen','Langsam treibende Farben',tg('bgMotion',!!P.bgMotion))+srow('⚡','#F59E0B','Leistung','Für ältere Geräte: weniger Effekte',segc('perf',['auto','on','off'],P.perf||'auto',{auto:'Auto',on:'Sparsam',off:'Voll'}));
  const appT=srow('⬜','#6B7280','Hintergrund','Grau wie iOS oder ganz weiß',segc('abg',['grau','weiss'],P.abg==='weiss'?'weiss':'grau',{grau:'Grau',weiss:'Weiß'}));
  h+=sect('Aussehen',srow('🌙','#374151','Darstellung','',segc('dm',['light','dark','auto'],(P.darkMode===null||P.darkMode===undefined)?'auto':(P.darkMode?'dark':'light'),{light:'Hell',dark:'Dunkel',auto:'Auto'},'dmset'))+stil+farbe+(pl?'':(ap?appT:glasT)));}
  h+=sect('Bedienungshilfen',srow('🔤','#6B7280','Schriftgröße','Gilt für die ganze App',segc('fontSize',['S','M','L'],P.fontSize))+srow('🌓','#374151','Hoher Kontrast','Kräftigere Farben und Rahmen',tg('hc',!!P.hc))+srow('🫧','#30B0C7','Weniger Bewegung','Keine Animationen',tg('calm',!!P.calm))+srow('👆','#34C759','Größere Tippflächen','Knöpfe und Zeilen höher',tg('bigtap',!!P.bigtap)));
  h+=sect('Lernen',srow('🧭','#5E5CE6','Lernprofil',(P.prof?'Anpassen, was die App für dich einstellt':'Fragen zu dir und deinem Lernstil'),'<button class="btn sm" data-act="profedit">'+(P.prof?'Ändern':'Starten')+'</button>')+srow('🎂','#FF9F0A','Alter','Passt Tempo, Ton und Aufgaben an',segc('age',['kid','teen','youth','adult'],ageBand(),AGEL))+srow('🎓','#FF9F0A','Notenschlüssel',gkey().join(' / ')+' Prozent für Note 1 bis 5','<button class="btn sm" data-act="gkeyedit">Ändern</button>')+srow('🎯','#5E5CE6','Selbsteinschätzung',(P.saN>=5?(Math.round((1-(P.saBad||0)/P.saN)*100)+' % deiner „Gewusst" stimmten ('+P.saN+' geprüft)'):'Wird angezeigt, sobald genug Karten geprüft sind'),'')+srow('🎞️','#5E5CE6','Animationen','Auto erkennt schwache Geräte. Aktuell: '+(document.documentElement.classList.contains('lite')?'sparsam':'voll'),segc('perf',['auto','off','on'],P.perf||'auto',{auto:'Auto',off:'Voll',on:'Sparsam'}))+srow('🍃','#34C759','Ruhe-Modus','Weniger Animationen, schont den Akku',tg('calm',!!P.calm))+srow('🃏','#34C759','Smart-Training mit Karten','Neue und schwache Wörter: aufdecken und wischen statt Auswahl',tg('smartCards',P.smartCards!==false))+srow('🧠','#34C759','Behalten','Höher heißt mehr Wiederholungen. 90 % ist ein guter Standard, 95 % ist deutlich mehr Arbeit.',segc('retP',[80,90,95],P.retP||90,{80:'80 %',90:'90 %',95:'95 %'}))+srow('🏖️','#5AC8FA','Wochenende frei','Samstag und Sonntag brechen die Serie nicht',tg('wkJ',P.wkJ!==false))+srow('🎯','#FF9F0A','Tagesziel','Wörter pro Tag',segc('dailyGoal',[5,10,20,50],P.dailyGoal))+srow('🌱','#34C759','Neue Wörter pro Tag','Mehr neue Wörter auf einmal werden schnell vergessen',segc('newMax',[5,10,20,40,0],P.newMax==null?20:P.newMax,{0:'Aus'}))+(Object.keys(P.hid||{}).length?srow('🚫','#8E8E93','Ausgeblendete Wörter',Object.keys(P.hid).length+' Wörter werden nicht mehr abgefragt','<button class="btn sm" data-act="unhideall">Alle zurückholen</button>'):'')+srow('📆','#5AC8FA','Wochenziel','Lerntage pro Woche',segc('weekGoal',[2,3,4,5,6,7],P.weekGoal||4))+srow('📝','#30B0C7','Wörter pro Runde','Gilt für Üben und Karteikarten',segc('roundLen',[5,10,20,30],P.quizLength,null,'roundlen')));
  h+=sect('Üben und Abfrage',srow('🔀','#FF453A','Karten mischen','Aus: feste Reihenfolge',tg('shuffleCards',!!P.shuffleCards))+srow('⏭️','#5AC8FA','Automatisch weiter','Nach richtiger Antwort zur nächsten Karte',tg('autoNext',P.autoNext!==false))+srow('😀','#FFCC00','Emoji-Hilfe','Emoji als Gedächtnisstütze',segc('emo',['off','wrong','all'],P.emo||'all',{off:'Aus',wrong:'Bei Fehlern',all:'Immer'}))+srow('🌍','#34C759','Zusatzsprache','Französisch oder Latein',segc('lang2',['none','fr','la'],P.lang2,{none:'Keine',fr:'Französisch',la:'Latein'}))+(P.lang2!=='none'?srow('✨','#FF6B8B','Beispielwörter','20 Wörter zum Ausprobieren','<button class="btn sm" data-act="starter" data-k="'+P.lang2+'">Laden</button>'):'')+srow('✍️','#A2845E','Pencil-Modus','Tastatur öffnet nicht von selbst',tg('pen',!!P.pen)));
  const ev=enVoices();const good=ev.filter(function(v){return vQual(v)!=='Standard';}).length;
  h+=sect('Ton und Stimmen',srow('🔊','#FF375F','Vorlesen','Automatisch bei jeder Frage',tg('speak',!!P.speak))+vsel('vc','🎙️','#FF375F','Stimme',P.vC,'c')+vsel('va','🎙️','#5AC8FA','Podcast: Stimme A',P.vA,'a')+vsel('vb','🎙️','#34C759','Podcast: Stimme B',P.vB,'b')+((enVoicesAll().length>ev.length||P.allVs)?srow('🗂️','#8E8E93','Alle Stimmen zeigen','Auch einfache Stimmen anzeigen',tg('allVs',!!P.allVs)):'')+srow('🎧','#A2845E','Ton testen',S.diag||'Prüft, ob dein Gerät vorlesen kann','<button class="btn sm" data-act="speaktest">Test</button>')+srow('🔔','#34C759','Töne bei Antworten','Kurze Töne bei richtig und falsch',tg('sfx',!!P.sfx))+srow('📳','#FF9F0A','Haptik','Kurzes Vibrieren bei Tipps und Antworten',tg('haptic',P.haptic!==false)),ev.length?(good?good+' hochwertige Stimmen gefunden. Sie stehen oben in der Liste.':'Nur Standard-Stimmen gefunden. Lade am iPad unter Einstellungen > Bedienungshilfen > Gesprochene Inhalte > Stimmen > Englisch eine Premium-Stimme.'):'Auf diesem Gerät gibt es keine englischen Stimmen.');
  h+=sect('Erinnerung',srow('🔔','#FF9500','Erinnerung','Banner in der App bei Streak-Gefahr. Meldungen von außen folgen mit Konto.',tg('remindersEnabled',!!P.remindersEnabled))+(P.remindersEnabled?srow('🕔','#FFB340','Ab Uhrzeit','Banner erscheint ab dieser Uhrzeit',segc('remHour',[15,17,19,21],P.remHour||17,{15:'15',17:'17',19:'19',21:'21'})):''));
  if(!isHosted())h+=sect('KI',srow('✨','#FF6B8B','KI-Funktionen',AI?'Heute '+((P.aiDays&&P.aiDays[fmt(new Date())])||0)+' Anfragen · nur auf Knopfdruck':'In dieser Ansicht nicht verfügbar',tg('aiOn',P.aiOn!==false)));
  let dat=((P.rep&&P.rep.length)?srow('⚑','#FF9F0A','Gemeldete Wörter',P.rep.length+' markiert als falsch','<button class="btn sm" data-act="repcopy">Kopieren</button>'):'')+(isHosted()?srow('🔗','#0A84FF','Wörter teilen','Link für Freunde oder Klasse (nur eigene Wörter)','<button class="btn sm" data-act="sharelist">Link</button>')+(S.shareUrl?'<div class="paste"><textarea class="ta" rows="3" readonly aria-label="Link">'+esc(S.shareUrl)+'</textarea></div>':''):'')+srow('🗂️','#0A84FF','Sicherung als Datei','Zuletzt: '+ago(P.lastBackup),'<button class="btn sm pri" data-act="evbackup">Speichern</button>')+srow('📂','#34C759','Aus Datei laden','Holt deinen Stand zurück','<label class="btn sm" for="evfile">Datei wählen</label><input id="evfile" class="vh" type="file" accept=".txt,.json,text/plain,application/json">')+srow('💾','#8E8E93','Speicher und Auto-Kopie',evBytes(evDataSize())+' Lerndaten · Auto-Kopie '+(P.snapAt?ago(P.snapAt):'noch nie'),'<button class="btn sm" data-act="evcheck">Prüfen</button>')+srow('📤','#0A84FF','Sicherung kopieren','Zuletzt: '+ago(P.lastBackup),'<button class="btn sm" data-act="copy">Kopieren</button>')+srow('📥','#34C759','Sicherung einfügen','Holt deinen Stand zurück','<button class="btn sm" data-act="paste">Einfügen</button>');
  if(S.bk)dat+='<div class="paste"><p class="sn" style="padding:0">Kopieren wurde blockiert. Markiere den Text und kopiere ihn selbst.</p><textarea id="bk" class="ta" readonly rows="3" aria-label="Sicherung">'+esc(S.bk)+'</textarea></div>';
  if(S.paste)dat+='<div class="paste"><textarea id="imp" class="ta" rows="3" placeholder="Sicherung hier einfügen" aria-label="Sicherung"></textarea><button class="btn pri full" data-act="import">Wiederherstellen</button></div>';
  dat+=srow('♻️','#FF9F0A','Fortschritt zurücksetzen','Eigene Wörter und Klausuren bleiben','<button class="btn bad sm" data-act="reset">'+(S.confirmReset?'Wirklich löschen':'Zurücksetzen')+'</button>')+srow('🗑️','#FF3B30','Alle Daten löschen','Entfernt alles von diesem Gerät. Nicht rückgängig zu machen.','<button class="btn bad sm" data-act="wipe">'+(S.confirmWipe?'Sicher?':'Löschen')+'</button>');
  h+=sect('Daten',dat,'Am sichersten: Sicherung als Datei in „Dateien“ oder iCloud ablegen. Sie enthält Fortschritt, Klausuren und eigene Wörter.');
  h+=sect('Hilfe und Info',srow('✨','#FF9F0A','Neuigkeiten','Was in dieser Version neu ist','<button class="btn sm" data-act="news">Ansehen</button>')+srow('🩺','#34C759','Gerätecheck','Prüft Speicher, Offline und Installation','<button class="btn sm" data-act="evcheck">Prüfen</button>')+srow('💬','#34C759','Feedback senden','Fehler melden oder Idee teilen','<button class="btn sm" data-act="fbopen">Öffnen</button>')+srow('📖','#8E8E93','Tutorial','Kurze Einführung','<button class="btn sm" data-act="tutorial">Ansehen</button>')+srow('❓','#34C759','Hilfe und Fragen','Häufige Fragen','<button class="btn sm" data-act="legal" data-v="faq">Öffnen</button>')+srow('🏷️','#8E8E93','Impressum','Wer hinter der App steht','<button class="btn sm" data-act="legal" data-v="imp">Öffnen</button>')+srow('🔒','#0A84FF','Datenschutz','Welche Daten wohin gehen','<button class="btn sm" data-act="legal" data-v="dat">Öffnen</button>')+srow('📄','#8E8E93','Nutzungsbedingungen','Regeln und Haftung','<button class="btn sm" data-act="legal" data-v="agb">Öffnen</button>')+srow('🙏','#FF9F0A','Über EasyVocab','Lernmethode und Danksagung','<button class="btn sm" data-act="legal" data-v="ueber">Öffnen</button>'));
  h+=setCompose(CATS,SUM)+'</div><p class="hint" style="text-align:center;margin:8px 0">'+APP_NAME+' · Build '+BUILD+' · '+BUILD_DATE+'</p>';
  return h;
}
/* ===== Rechtliches ===== */
/* HIER DEINE ANGABEN EINTRAGEN (Impressum nach § 5 DDG). Solange leer, zeigt die App einen Hinweis. */
const OP={name:'',street:'',city:'',mail:'',phone:''};
const LEGAL_DATE='2.11.2026';
function legalView(){
  const k=S.legal||'imp';const T={imp:'Impressum',dat:'Datenschutz',agb:'Nutzungsbedingungen',faq:'Hilfe und Fragen',ueber:'Über EasyVocab'};
  const p=function(t){return '<p class="lp">'+t+'</p>';};const hh=function(t){return '<div class="lh">'+t+'</div>';};
  let h='<div class="pt"><h1>'+T[k]+'</h1><small>Stand: '+LEGAL_DATE+'</small></div><div class="glass pad w col legal">';
  if(k==='imp'){
    const ok=OP.name&&OP.street&&OP.city&&OP.mail;
    h+=hh('Angaben gemäß § 5 DDG');
    if(ok){h+=p(esc(OP.name)+'<br>'+esc(OP.street)+'<br>'+esc(OP.city));h+=hh('Kontakt');h+=p('E-Mail: '+esc(OP.mail)+(OP.phone?'<br>Telefon: '+esc(OP.phone):''));}
    else h+=p('<b style="color:#ff3b30">Angaben des Anbieters fehlen noch.</b><br>Name, Anschrift und E-Mail-Adresse müssen hier stehen, bevor die App öffentlich verbreitet wird.');
    h+=hh('Verantwortlich für Inhalte');p&&(h+=p(ok?esc(OP.name)+', Anschrift wie oben.':'Wie oben.'));
    h+=hh('Streitbeilegung');h+=p('Ich bin weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.');
    h+=hh('Haftung für Inhalte und KI-Texte');h+=p('Die Inhalte wurden mit Sorgfalt erstellt. Vokabeln, Beispielsätze und Texte der KI-Funktionen können Fehler enthalten. Prüfe wichtige Angaben im Wörterbuch oder bei deiner Lehrkraft.');
  }else if(k==='dat'&&isHosted()){
    h+=hh('Kurz gesagt');h+=p('EasyVocab hat kein Benutzerkonto, keine Werbung und keine Tracker. Dein Lernstand liegt nur auf deinem Gerät.');
    h+=hh('Verantwortlicher');h+=p(OP.name?esc(OP.name)+', '+esc(OP.street)+', '+esc(OP.city)+', '+esc(OP.mail):'Siehe Impressum.');
    h+=hh('Welche Daten gespeichert werden');h+=p('Fortschritt, Einstellungen, eigene Wörter, Klausuren, Spitzname, Tier und Münzen. Sie liegen im lokalen Speicher deines Browsers auf deinem Gerät. Sie werden nicht an den Anbieter oder Dritte gesendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Bereitstellung der App).');
    h+=hh('Sprachausgabe');h+=p('Läuft mit den Stimmen deines Geräts. Es werden keine Texte gesendet.');
    h+=hh('Hosting');h+=p('Die App wird über den Hosting-Dienst Vercel ausgeliefert. Beim Aufruf verarbeitet der Hosting-Anbieter technisch notwendige Daten, zum Beispiel deine IP-Adresse, in Server-Protokollen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (sicherer und stabiler Betrieb). Es gilt zusätzlich die Datenschutzerklärung des Hosting-Anbieters.');
    if(sbOn()){h+=hh('Konto und Sicherung');h+=p('Wenn du ein Konto anlegst, speichern wir deine E-Mail-Adresse und ein Passwort (verschlüsselt) sowie eine Sicherung deines Lernstands bei unserem Datenbank-Dienst Supabase. Das ist freiwillig. Du kannst dich abmelden oder das Konto unter Einstellungen, Konto löschen. Dann werden E-Mail und Sicherung gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Bereitstellung des Kontos).');}
    h+=hh('Speicherdauer und Löschung');h+=p('Die Daten bleiben auf deinem Gerät, bis du sie löschst. Unter Einstellungen findest du „Alle Daten löschen“. Wenn du Browserdaten löschst, ist dein Fortschritt weg. Kopiere vorher die Sicherung'+(sbOn()?' oder melde dich mit deinem Konto an.':'.'));
    h+=hh('Deine Rechte');h+=p('Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch (Art. 15 bis 21 DSGVO). Die Sicherung in den Einstellungen ist dein Datenexport. Du kannst dich bei der zuständigen Aufsichtsbehörde beschweren.');
    h+=hh('Kinder und Jugendliche');h+=p('Wer unter 16 ist, nutzt die App am besten gemeinsam mit den Eltern. Es werden keine Namen oder Kontaktdaten verlangt.');
    h+=hh('Änderungen');h+=p('Wenn sich Funktionen ändern, wird dieser Text angepasst. Das Datum oben zeigt den Stand.');
  }else if(k==='dat'){
    h+=hh('Kurz gesagt');h+=p('EasyVocab hat kein Benutzerkonto, keine Werbung und keine Tracker. Dein Lernstand liegt auf deinem Gerät und wird, wenn du angemeldet bist, in deiner Claude-Anmeldung gesichert.');
    h+=hh('Verantwortlicher');h+=p(OP.name?esc(OP.name)+', '+esc(OP.street)+', '+esc(OP.city)+', '+esc(OP.mail):'Siehe Impressum.');
    h+=hh('Welche Daten gespeichert werden');h+=p('Fortschritt, Einstellungen, eigene Wörter, Klausuren, Spitzname, Tier und Münzen. Sie liegen im lokalen Speicher deines Browsers beziehungsweise deiner App auf deinem Gerät. Sie werden nicht automatisch an uns gesendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Bereitstellung der App).');
    h+=hh('Funktionen, bei denen Daten das Gerät verlassen');h+=p('<b>KI-Funktionen</b> (Übersetzen, Foto-Scan, Geschichte, Podcast): Der Text oder das Foto, das du dafür eingibst, wird zur Verarbeitung an den KI-Dienst von Anthropic gesendet. Nutze diese Funktionen nur mit Inhalten, die du teilen darfst. Lade keine Fotos von Personen hoch.');
    h+=p('<b>Cloud-Sicherung</b>: Wenn du angemeldet bist, wird dein Lernstand nach dem Lernen automatisch im Speicher deiner Claude-Anmeldung abgelegt, damit er bei einem Update oder Gerätewechsel nicht verloren geht. Das siehst du nur selbst. Du kannst es unter Einstellungen, Daten, „Automatisch sichern“ ausschalten.');
    h+=p('<b>Sprachausgabe</b>: Läuft mit den Stimmen deines Geräts. Es werden keine Texte an uns gesendet.');
    h+=hh('Hosting');h+=p('Die App wird über die Artefakt-Funktion von Claude (Anthropic) bereitgestellt. Dabei können dort technische Daten wie die IP-Adresse verarbeitet werden. Dafür gilt die Datenschutzerklärung von Anthropic.');
    h+=hh('Speicherdauer und Löschung');h+=p('Die Daten bleiben auf deinem Gerät, bis du sie löschst. Unter Einstellungen findest du „Alle Daten löschen“. Danach ist nichts mehr bei uns gespeichert, weil wir nichts erhalten haben.');
    h+=hh('Deine Rechte');h+=p('Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch (Art. 15 bis 21 DSGVO). Die Sicherung in den Einstellungen ist dein Datenexport. Du kannst dich bei der zuständigen Aufsichtsbehörde beschweren.');
    h+=hh('Kinder und Jugendliche');h+=p('Wer unter 16 ist, nutzt die App am besten gemeinsam mit den Eltern und gibt keine Fotos oder persönlichen Daten in die KI-Funktionen ein. Es werden keine Namen oder Kontaktdaten verlangt.');
    h+=hh('Änderungen');h+=p('Wenn sich Funktionen ändern, wird dieser Text angepasst. Das Datum oben zeigt den Stand.');
  }else if(k==='agb'){
    h+=hh('1. Was EasyVocab ist');h+=p('Eine kostenlose Lernhilfe für Vokabeln. Es gibt keinen Anspruch auf bestimmte Funktionen oder dauerhafte Verfügbarkeit.');
    h+=hh('2. Münzen und Punkte');h+=p('Münzen, XP, Tiere und Abzeichen sind rein virtuell. Sie haben keinen Geldwert, lassen sich nicht kaufen, auszahlen oder übertragen.');
    h+=hh('3. Inhalte');h+=p('Eigene Wörter bleiben deine. Gib nur Inhalte ein, die du verwenden darfst. KI-Texte sind Vorschläge und können falsch sein.');
    h+=hh('4. Sicherung');h+=p('Dein Fortschritt liegt auf deinem Gerät. Wenn du Browserdaten löschst oder das Gerät wechselst, kann er verloren gehen. Sichere ihn regelmäßig.');
    h+=hh('5. Haftung');h+=p('Ich hafte unbeschränkt bei Vorsatz, grober Fahrlässigkeit und bei Verletzung von Leben, Körper oder Gesundheit. Bei leichter Fahrlässigkeit hafte ich nur bei Verletzung wesentlicher Vertragspflichten und begrenzt auf den typischen, vorhersehbaren Schaden.');
    h+=hh('6. Änderungen');h+=p('Diese Bedingungen können angepasst werden. Es gilt der Stand, der in der App angezeigt wird. Es gilt deutsches Recht, soweit dem keine zwingenden Verbraucherrechte entgegenstehen.');
  }else if(k==='faq'){
    const q=function(a,b){return hh(a)+p(b);};
    h+=q('Wie funktionieren die Stufen?','Jedes Wort wandert durch fünf Stufen. Richtig bringt es eine Stufe hoch, falsch zurück auf Stufe 1. Je höher die Stufe, desto später kommt es wieder.');
    h+=q('Wo sind meine Daten?',isHosted()?'Nur auf deinem Gerät, im Browser. Es gibt keine Cloud-Sicherung. Kopiere unter Einstellungen die Sicherung und füge sie auf einem neuen Gerät ein.':'Auf deinem Gerät und, wenn du angemeldet bist, zusätzlich als automatische Sicherung in deiner Claude-Anmeldung. Nach einem Update oder auf einem neuen Gerät fragt die App, ob sie den Stand wiederherstellen soll. Zusätzlich kannst du unter Einstellungen eine Sicherung kopieren.');
    h+=q('Ich habe meine Serie verloren.','Eine Serie zählt jeden Tag mit mindestens einem gelernten Wort. Ein Eisschutz aus dem Shop rettet einen verpassten Tag.');
    h+=q('Sind Münzen echtes Geld?','Nein. Münzen gibt es nur durch Lernen und sie lassen sich nicht kaufen.');
    if(!isHosted())h+=q('Was kosten die KI-Funktionen?','Nichts, aber sie brauchen eine Internetverbindung. Es gibt Tageslimits, die die Claude-Plattform vorgibt.');
    h+=q('Der Ton fehlt.','Prüfe den Stumm-Schalter und die Lautstärke deines Geräts. Auf dem iPad hilft es, die Seite neu zu laden und einmal auf Anhören zu tippen.');
    h+=q('Wie lösche ich alles?','Einstellungen, Meine Daten, Alle Daten löschen.');
    h+=q('Ich habe einen Fehler gefunden.','Einstellungen, Hilfe, Feedback senden.');
  }else{
    h+=hh('Lernmethode');h+=p('EasyVocab nutzt das Leitner-System, eine bewährte Form des verteilten Wiederholens (Spaced Repetition). Wörter, die du sicher kannst, kommen seltener. Knifflige kommen öfter.');
    h+=hh('Technik');h+=p(isHosted()?'Die Sprachausgabe nutzt die Stimmen deines Geräts.':'KI-Funktionen laufen über Claude von Anthropic. Die Sprachausgabe nutzt die Stimmen deines Geräts.');
    h+=hh('Version');h+=p('Version 76 · '+LEGAL_DATE);
    h+=hh('Danke');h+=p('An alle, die getestet und Ideen geliefert haben. Besonderer Dank an Ben Herrmann, Lidia Skwira und Max Baule.');
  }
  return h+'</div>';
}
function learnView(){
  const id=S.ids[S.i];const last=S.i===S.ids.length-1;const e=eff();
  const sp=function(){return (canSpeakW(id)?'<button class="spk" data-act="speak" data-id="'+id+'">Anhören</button>':'')+qtools(id)+mnemBox(id);};
  const ex=E[id]?'<div class="ex">'+esc(E[id])+'</div>':'';
  let h='<div class="cnt">Karte '+(S.i+1)+' von '+S.ids.length+'</div><div class="prog thin w"><i style="width:'+Math.round((S.i+1)/S.ids.length*100)+'%"></i></div>';
  h+='<div class="stage"><div id="fc" class="flip'+(S.flip?' flipped':'')+'" data-act="flip" role="button" tabindex="0" aria-label="Karte umdrehen">';
  h+='<div class="face"><div class="lang">'+lang(id)+'</div><div class="word'+(pr(id).length>24?' sm':'')+'">'+esc(pr(id))+'</div>'+(e==='en'?sp():'')+'<div class="hint">Tippen zum Umdrehen</div></div>';
  h+='<div class="face back"><div class="hint">'+esc(pr(id))+'</div><div class="word'+(an(id).length>24?' sm':'')+'">'+esc(an(id))+'</div>'+emoBlock(id,'learn')+ex+memoBlock(id)+(e==='de'?sp():'')+'</div>';
  h+='</div></div>';
  h+='<div class="row2"><button class="btn bad" data-act="lrate" data-v="0">✗ Noch nicht</button><button class="btn good" data-act="lrate" data-v="1">✓ Gewusst</button></div><div class="swhint">← Wischen: noch nicht &nbsp;·&nbsp; Wischen →: gewusst</div>';
  h+='<div class="row2" style="grid-template-columns:1fr 2fr"><button class="btn" data-act="prev">Zurück</button><button class="btn pri" data-act="next">'+(last?'Zum Smart-Training':'Weiter')+'</button></div>';
  return h;
}
function nodueView(){
  return '<div class="glass pad w center"><div class="big-ico">✅</div><p>'+(S.limHit?'Tageslimit für neue Wörter erreicht. Morgen kommen neue dazu. Du kannst das Limit in den Einstellungen ändern.':'Alles wiederholt, komm morgen wieder!')+'</p><div class="row2" style="width:100%"><button class="btn" data-act="free">Trotzdem weiter üben</button><button class="btn pri" data-act="home">Zum Menü</button></div><p class="hint" style="font-size:12px">Beim freien Üben ändert sich dein Fortschritt nicht.</p></div>';
}
function begin(m,free){S.undo=null;const MINI=S.mini||0;S.mini=0;
  S.mode=m;S.free=!!free;
  const base=scope(S.b);
  if(!base.length){toast(S.b==='weak'?'Noch keine kniffligen Wörter – erst ein paar Runden üben 👍':'Hier sind keine Wörter. Füge welche unter Wörter hinzu.');S.screen='menu';render();return;}
  const noise=P.shuffleCards?0.9:0.4;const exb={};try{const ne=nextExam();if(ne&&daysLeft(ne)<=21&&(S.b==='all'||S.b==='focus'))examIds(ne).forEach(function(i){exb[i]=1;});}catch(e){}
  const order=function(ids){return ids.map(function(id){return [id,bAvg(id)+Math.random()*noise-(exb[id]?0.8:0)];}).sort(function(a,b){return a[1]-b[1];}).map(function(x){return x[0];});};
  let p;
  if(free||m==='test')p=P.shuffleCards||m==='test'?shuffle(base):base.slice();
  else if(/^(weak|wk|fail7|star|night)$/.test(S.b))p=shuffle(base);
  else if(S.b==='exam'){p=base.filter(function(id){return bAvg(id)<3;});if(!p.length){p=shuffle(base);toast('Alles sicher – Wiederholung zur Festigung');}else{p=order(p);const p0=p.length;p=limitNew(p);if(!p.length&&p0){S.limHit=true;S.screen='nodue';render();return;}}}
  else{p=dueOf(base);const pre=p.length;p=limitNew(order(p));S.limHit=pre>0&&!p.length;if(!p.length){S.screen='nodue';render();return;}}
  let n=S.b==='custom'?p.length:m==='cards'?P.flashcardCount:(m==='test'?(S.b==='exam'?Math.min(60,p.length):P.quizLength):P.quizLength);
  if(MINI)n=Math.min(n,MINI);
  p=(m==='test'&&S.b!=='custom')?pickCover(p,n):p.slice(0,n);
  if(m!=='cards'&&m!=='test'&&!(S.b==='exam'&&m==='test'))p=interleave(p);
  startQuiz(m,p);if(S.boss&&typeof Q!=='undefined'&&Q){Q.boss=true;}S.boss=false;
}
function interleave(ids){
  const bl=blocks();const of={};bl.forEach(function(b,k){b.ids.forEach(function(id){if(of[id]==null)of[id]=k;});});
  const groups={},keys=[];ids.forEach(function(id){const k=of[id]==null?-1:of[id];if(!groups[k]){groups[k]=[];keys.push(k);}groups[k].push(id);});
  if(keys.length<2)return ids;
  const out=[];let last=null;const rem=ids.length;
  while(out.length<rem){
    let pick=null;
    keys.forEach(function(k){if(!groups[k].length)return;if(k===last)return;if(pick===null||groups[k].length>groups[pick].length)pick=k;});
    if(pick===null)pick=keys.filter(function(k){return groups[k].length;})[0];
    out.push(groups[pick].shift());last=pick;
  }
  return out;
}
function mkQ(ids,extra){return Object.assign({xp0:P.xp,coin0:P.coins,times:[],queue:P.shuffleCards?shuffle(ids):ids.slice(),total:ids.length,seen:new Set(),missed:new Set(),intro:new Set(),answered:false,ok:false,first:false,snap:null,val:'',err:'',opts:[],pick:-1,d:'en',m:'mc',test:false,hinted:false,log:[],goalBefore:dayCount(),free:S.free},extra||{});}
function startQuiz(mode,ids){if(!ids||!ids.length){toast('Keine Wörter für diese Auswahl.');return;}S.mode=mode;S.screen='quiz';Q=mkQ(ids);prepare();render();maybeSpeak();saveRun();}
function saveRun(){if(!Q||Q.test||!Q.queue.length)return;P.run={mode:S.mode,dir:S.dir,b:S.b,examId:S.examId,free:S.free,queue:Q.queue.slice(),total:Q.total,seen:Array.from(Q.seen),missed:Array.from(Q.missed),intro:Array.from(Q.intro)};save();}
function prepare(fd){
  Q.t0=Date.now();Q.flipAt=Date.now()+1600;Q.answered=false;Q.val='';Q.err='';Q.pick=-1;Q.hinted=false;Q.hint='';Q.strokes=[];Q.rev=false;
  const id=Q.queue[0];
  if(fd){Q.d=fd;}else if(S.dir==='mix'){
    const a=dueD(id,'en'),b=dueD(id,'de');
    if(a&&b){const x=bx(id,'en'),y=bx(id,'de');Q.d=(x<y||(x===y&&Math.random()<0.5))?'en':'de';}
    else if(a)Q.d='en';else if(b)Q.d='de';else Q.d=Math.random()<0.5?'en':'de';
  } else Q.d=S.dir;
  Q.test=S.mode==='test';
  if(S.mode==='auto'&&!Q.test&&bx(id,Q.d)===0&&!Q.intro.has(id)){Q.m='intro';return;}
  Q.m=(ageBand()==='kid'&&!Q.test&&S.mode==='auto')?'mc':Q.test?'type':(S.mode==='auto'?(bx(id,Q.d)<=1?(P.smartCards!==false?(((Q.cn=(Q.cn||0)+1)%4===0)?'type':'cards'):'mc'):'type'):S.mode);
  if(Q.m==='mc'){
    const pool=shuffle(allIds().filter(function(x){return x!==id&&an(x)!==an(id);})).slice(0,3);
    Q.opts=shuffle([id].concat(pool));
  }
}
function qtools(id){return '<span class="qtools"><button class="qt" data-act="star" data-id="'+id+'" aria-label="Schwieriges Wort markieren" aria-pressed="'+!!(P.star&&P.star[id])+'">'+((P.star&&P.star[id])?'★':'☆')+'</button><button class="qt" data-act="wemo" data-id="'+id+'" aria-label="Eigenes Emoji wählen">🙂</button><button class="qt" data-act="mnem" data-id="'+id+'" aria-label="Merkhilfe schreiben">💡</button><button class="qt" data-act="report" data-id="'+id+'" aria-label="Fehler melden">⚑</button></span>';}
function mnemBox(id){return (P.mn&&P.mn[id])?'<div class="mnem">💡 '+esc(P.mn[id])+'</div>':'';}
function quizView(){
  const id=Q.queue[0];const m=Q.m;const done=Q.total-Q.queue.length;
  const sp=((eff()==='en'&&canSpeakW(id))?'<button class="spk" data-act="speak" data-id="'+id+'">Anhören</button>':'')+qtools(id)+mnemBox(id);
  const ex=E[id]?'<div class="ex">'+esc(E[id])+'</div>':'';
  const tag=(Q.pause||Q.sim?'⏱ <b id="pz">'+fmtMS((Q.sim?Q.simEnd:Q.pauseEnd)-Date.now())+'</b> · ':'')+(Q.sim?'Klausur · ':(Q.pause?'Pause · ':''))+(Q.test&&!Q.sim?'Probetest · ':(m==='intro'?'Neu · ':(S.mode==='auto'?(m==='mc'?'Auswahl · ':'Tippen · '):'')));
  let h='<div class="cnt cnt2">'+((Q.hist&&Q.hist.length)?'<button class="undo" data-act="undo" aria-label="Vorheriges Wort"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" aria-hidden="true"><path d="M7.5 1.5L2 7.5l5.5 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Vorheriges Wort</span></button>':'<span></span>')+'<span>'+tag+'Karte '+Math.min(done+1,Q.total)+' von '+Q.total+'</span></div><div class="prog thin w"><i style="width:'+Math.round(done/Q.total*100)+'%"></i></div>'+runBar();
  if(m==='intro'){
    h+='<div class="glass q" style="min-height:260px"><div class="lang">Neues Wort · '+lang(id)+'</div><div class="word'+(pr(id).length>24?' sm':'')+'">'+esc(pr(id))+'</div><div class="word sm" style="color:var(--accent)">'+esc(an(id))+'</div>'+emoBlock(id,'intro')+ex+(canSpeakW(id)?'<button class="spk" data-act="speak" data-id="'+id+'">Anhören</button>':'')+'</div><button class="btn pri full" data-act="got">Verstanden</button>';
    return h;
  }
  if(m==='write'){
    h+='<div class="glass q" style="min-height:110px;padding:18px 16px"><div class="lang">'+lang(id)+'</div><div class="word'+(pr(id).length>24?' sm':'')+'">'+esc(pr(id))+'</div>'+sp+'</div>';
    h+='<div class="glass inkw"><canvas id="ink" aria-label="Schreibfläche"></canvas><span class="inkhint">Schreibe die Antwort mit dem Apple Pencil</span><div class="inkbar"><button class="x2" data-act="inkundo" aria-label="Letzten Strich zurücknehmen">↶</button><button class="x2" data-act="inkclear" aria-label="Alles löschen">Löschen</button></div></div>';
    if(!Q.rev)h+='<button class="btn pri full" data-act="reveal">Lösung zeigen</button>';
    else h+='<div class="glass q" style="min-height:0;padding:16px;background:var(--accent-soft)"><div class="word sm">'+esc(an(id))+'</div>'+ex+'</div><div class="row2"><button class="btn bad" data-act="know" data-v="0">Noch üben</button><button class="btn good" data-act="know" data-v="1">Gewusst</button></div>';
    return h;
  }
  if(m==='cards'){
    h+='<div class="stage"><div id="fc" class="flip" data-act="qflip" role="button" tabindex="0" aria-label="Karte umdrehen"><div class="face"><div class="lang">'+lang(id)+'</div><div class="word'+(pr(id).length>24?' sm':'')+'">'+esc(pr(id))+'</div>'+sp+'<div class="hint" id="fch">Erst erinnern …</div></div><div class="face back"><div class="hint">'+esc(pr(id))+'</div><div class="word'+(an(id).length>24?' sm':'')+'">'+esc(an(id))+'</div>'+ex+'</div></div></div>';
    setTimeout(function(){const e=document.getElementById('fch');if(e){e.textContent='Tippen zum Umdrehen';e.classList.remove('nudge');}},1600);
    h+='<div id="qb" class="row2" style="visibility:hidden"><button class="btn bad" data-act="know" data-v="0">✗ Noch nicht</button><button class="btn good" data-act="know" data-v="1">✓ Gewusst</button></div><div class="swhint">← Wischen: noch nicht &nbsp;·&nbsp; Wischen →: gewusst</div>';
    return h;
  }
  h+='<div class="glass q"><div class="lang">'+lang(id)+'</div><div class="word'+(pr(id).length>24?' sm':'')+'">'+esc(pr(id))+'</div>'+sp+'</div>';
  if(m==='mc'){
    h+='<div class="opts">';
    Q.opts.forEach(function(o,i){let c='opt gtap';if(Q.answered){if(o===id)c+=' right';else if(i===Q.pick)c+=' wrong';}
      h+='<button class="'+c+'" data-act="opt" data-i="'+i+'"><span class="kn">'+(i+1)+'</span><span>'+esc(an(o))+'</span></button>';});
    h+='</div>';
  } else {
    if(Q.hint)h+='<div class="hintline" aria-live="polite">'+esc(Q.hint)+'</div>';
    h+='<div class="w"><input id="ans" class="in big'+(Q.answered?(Q.ok?' right':' wrong'):'')+'" type="text" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="'+(eff()==='en'?'Deutsche Übersetzung':LADJ[wlang(id)])+'" value="'+esc(Q.val)+'"'+(Q.answered?' readonly':'')+' aria-label="Antwort">';
    if(Q.err)h+='<div class="err" role="alert">'+Q.err+'</div>';
    if(!Q.answered)h+='<div class="hint" style="text-align:center;margin-top:6px;font-size:12px">✍️ Schreiben mit dem Apple Pencil oder tippen, beides geht.</div>';
    h+='</div>';
    if(!Q.answered)h+='<div class="row2" style="grid-template-columns:1fr 1fr 1.4fr"><button class="btn" data-act="skip">Weiß nicht</button>'+(Q.test?((Q.queue.length>1&&!(Q.laterU&&Q.laterU[id]))?'<button class="btn" data-act="later">Später</button>':'<span></span>'):'<button class="btn" data-act="hint">Tipp</button>')+'<button class="btn pri" data-act="check">Prüfen</button></div>';
  }
  if(Q.answered){
    const exact=an(id).split(';').some(function(a){return norm(a)===norm(Q.val);});
    let nx='';
    if(!Q.free)nx=Q.ok?'<div class="nx">'+(Q.hinted?'Mit Tipp gelöst, kommt morgen wieder':'Nächste Wiederholung '+dueText(id,Q.d)+' · Box '+bx(id,Q.d)+' von 5')+'</div>':'<div class="nx">Kommt gleich nochmal dran</div>'+((P.wrong[id]||0)>=3?'<div class="mnem">🧠 Schon '+P.wrong[id]+'× falsch. '+(E[id]?'Merk dir den Satz: „'+esc(E[id])+'“':'Sprich es dreimal laut und schreibe einen eigenen Satz damit.')+'</div>':'');
    h+='<div class="sheet '+(Q.ok?'right':'wrong')+'" role="status"><b>'+(Q.ok?'Richtig':'Nicht ganz')+'</b>'+((Q.lastXp>0)?'<span class="xpchip">+'+Q.lastXp+' XP</span>':'')+(Q.ok?((m==='type'&&Q.synId)?'<div class="sol">Auch richtig. In deiner Liste steht: '+esc(an(id))+'</div>':((m==='type'&&!exact)?'<div class="sol">Fast genau. Lösung: '+esc(an(id))+'</div>':'')):'<div class="sol">Lösung: '+((m==='type'&&Q.val&&Q.val.trim())?diffSol(an(id),Q.val)+'<div class="hint" style="margin-top:2px">Rot markiert: hier weicht deine Antwort ab.</div>':esc(an(id)))+'</div>'+(Q.cfNote?'<div class="mnem">'+esc(Q.cfNote)+'</div>':'')+(ffNote(id)?'<div class="mnem">'+esc(ffNote(id))+'</div>':''))+emoBlock(id,Q.ok?'right':'wrong')+ex+(Q.ok?'':memoBlock(id))+nx;
    if(!Q.ok&&m==='type')h+='<button class="link" data-act="override">Meine Antwort war auch richtig</button>';
    if(id>=BASE&&S.qedit===id){const c0=P.custom[id-BASE]||{en:W[id][0],de:W[id][1]};h+='<div class="col" style="gap:8px;margin:8px 0"><input id="qe" class="in" type="text" aria-label="Fremdsprache" value="'+esc(c0.en)+'"><input id="qd" class="in" type="text" aria-label="Deutsch" value="'+esc(c0.de)+'"><div class="row2"><button class="btn pri" data-act="qsave">Speichern</button><button class="btn" data-act="qcancel">Abbrechen</button></div></div>';}
    else{if(id>=BASE)h+='<button class="link" data-act="qedit" data-id="'+id+'">Wort bearbeiten</button> ';h+='<button class="link" data-act="hidew" data-id="'+id+'">Dieses Wort ausblenden</button>';}
    h+='<button class="btn" data-act="cont">Weiter</button></div>';
  }
  return h;
}
function submit(ok,quick){
  const id=Q.queue[0];
  Q.first=!Q.seen.has(id);
  try{if(Q.first&&(Q.m==='type'||Q.test)&&P.sa&&P.sa[id]){const r=P.sa[id];if(Date.now()-r.t<10*864e5&&r.ok){P.saN=(P.saN||0)+1;if(!ok)P.saBad=(P.saBad||0)+1;}delete P.sa[id];}}catch(e){}
  if(Q.first&&Q.t0){const ms0=Math.min(60000,Date.now()-Q.t0);Q.times.push({id:id,ms:ms0,ok:ok});if(!Q.free){const td=fmt(new Date());P.mins[td]=(P.mins[td]||0)+ms0/60000;}}
  if(Q.first){
    Q.seen.add(id);
    if(!Q.free){const key=kk(id,Q.d);Q.snap={key:key,box:P.box[key],due:P.due[key],wrong:P.wrong[id]};applyResult(id,Q.d,ok,Q.m,Q.hinted);}
    if(!ok)Q.missed.add(id);
  }
  if(!Q.free){Q.gdBef=(P.gd[fmt(new Date())]||[]).indexOf(id)>=0;bump();if(ok)markGood(id);
    if(ok&&Q.first)earn((Q.m==='type'||Q.test)?2:1);
    Q.lastXp=Q.first?earnXp(ok?((Q.m==='type'||Q.test)?15:10):2):0;
    if(Q.first&&Q.t0){const sec=Math.min(60,(Date.now()-Q.t0)/1000);P.avgSec=Math.round(((P.avgSec||8)*0.92+sec*0.08)*10)/10;}
    if(dayCount()>=P.dailyGoal&&P.goalPaid!==fmt(new Date())){P.goalPaid=fmt(new Date());earn(10);earnXp(50);Q.bonus=true;}P.st[ok?'ok':'no']++;updHist();save();}
  let typo=false;
  if(Q.test&&ok&&Q.val&&Q.val.trim()&&!Q.synId){try{const tg=(Q.d==='en'?W[id][1]:W[id][0]);if(check(Q.val,tg)){const x=norm(Q.val);let ex=false;tg.split(';').map(norm).filter(Boolean).concat([norm(tg)]).forEach(function(t){const u=t.replace(/^(der|die|das|le|la|les|un|une|l)\s+(?=\S)/,'');if(x===t||x===u||sameBag(x,t)||sameBag(x,u))ex=true;});typo=!ex;}}catch(e){}}
  if(Q.test)Q.log.push({id:id,d:Q.d,val:Q.val,ok:ok&&!typo,half:typo||undefined,typo:typo||undefined,snap:Q.snap,first:Q.first,free:Q.free});
  if(!ok&&Q.first&&(Q.m==='type'||Q.test)&&Q.val&&Q.val.trim()){try{const tgt=(Q.d==='en'?W[id][1]:W[id][0]);const xs=norm(Q.val);const dist=Math.min.apply(null,tgt.split(';').map(norm).filter(Boolean).concat([norm(tgt)]).map(function(t){return lev(xs,t);}));Q.nearL=Q.nearL||[];const nr=(dist<=2&&xs.length>=3)||partialM(Q.val,tgt);Q.nearL.push({id:id,near:nr});if(Q.test&&nr&&Q.log.length)Q.log[Q.log.length-1].half=true;}catch(e){}}
  Q.cfNote='';
  if(!ok&&Q.first&&(Q.m==='type'||Q.test)&&Q.val&&Q.val.trim()){try{const o=confWith(Q.val,id,Q.d);if(o!=null){Q.cfNote=confNote(Q.val,id,Q.d);if(Q.test&&Q.log.length)Q.log[Q.log.length-1].cf=Q.cfNote;else{Q.cfd=Q.cfd||{};if(!Q.cfd[o]&&Q.queue.indexOf(o)<0){Q.cfd[o]=1;Q.queue.splice(Math.min(3,Q.queue.length),0,o);Q.total++;}}}}catch(e){}}
  if(!ok&&Q.first&&(P.wrong[id]||0)>=3&&aiOK()&&!(P.memo&&P.memo[id])){try{aiMemo(id).catch(function(){});}catch(e){}}
  try{restCheck();}catch(e){}if(Q.first){if(ok){Q.run=(Q.run||0)+1;if(Q.run>(Q.runMax||0))Q.runMax=Q.run;}else{Q.run=0;}}Q.answered=true;Q.ok=ok;if(ok&&Q.first&&Q.run>=3&&(Q.run===3||Q.run%5===0)){sfx('streak',Q.run);Q.runPop=Q.run;}else sfx(ok?'ok':'no',Q.run);haptic(ok?'ok':'warn');
  if(quick||Q.test){cont();return;}
  render();
}

/* ===== v105: Falsche Freunde, Verwechslungen, Wortfamilien ===== */
const FF={
'actual':'heißt tatsächlich, nicht „aktuell“ (das ist current)','actually':'heißt tatsächlich, nicht „aktuell“','eventually':'heißt schließlich, nicht „eventuell“ (das ist possibly)',
'sensible':'heißt vernünftig, nicht „sensibel“ (das ist sensitive)','sensitive':'heißt empfindlich oder einfühlsam, nicht „vernünftig“','become':'heißt werden, nicht „bekommen“ (das ist get)',
'gift':'heißt Geschenk, nicht „Gift“ (das ist poison)','chef':'heißt Koch, nicht „Chef“ (das ist boss)','fabric':'heißt Stoff, nicht „Fabrik“ (das ist factory)',
'handy':'heißt praktisch, nicht „Handy“ (das ist mobile phone)','brief':'heißt kurz, nicht „Brief“ (das ist letter)','kind':'heißt nett oder Art, nicht „Kind“ (das ist child)',
'also':'heißt auch, nicht „also“ (das ist so oder therefore)','will':'zeigt die Zukunft, nicht „wollen“ (das ist want)','gymnasium':'heißt Turnhalle, nicht „Gymnasium“ (das ist grammar school)',
'physician':'heißt Arzt, nicht „Physiker“ (das ist physicist)','pension':'heißt Rente, nicht „Pension“ (das ist guesthouse)','preservative':'heißt Konservierungsmittel, nicht „Präservativ“',
'provision':'heißt Vorrat oder Bereitstellung, nicht „Provision“ (das ist commission)','mist':'heißt Dunst, nicht „Mist“ (das ist rubbish)','wand':'heißt Zauberstab, nicht „Wand“ (das ist wall)',
'rat':'heißt Ratte, nicht „Rat“ (das ist advice)','angle':'heißt Winkel, nicht „Angel“ (das ist fishing rod)','sympathetic':'heißt mitfühlend, nicht „sympathisch“ (das ist nice)',
'ordinary':'heißt gewöhnlich, nicht „ordinär“ (das ist vulgar)','decent':'heißt anständig, nicht „dezent“ (das ist discreet)','novel':'heißt Roman, nicht „Novelle“',
'billion':'heißt Milliarde, nicht „Billion“ (das ist trillion)','gross':'heißt eklig oder brutto, nicht „groß“ (das ist big)','loose':'heißt locker, nicht „lose“ (das ist lose = verlieren)',
'lose':'heißt verlieren, nicht „locker“ (das ist loose)','mean':'heißt bedeuten oder gemein, nicht „meinen“ (das ist think)','pretend':'heißt so tun als ob, nicht „prätendieren“',
'realize':'heißt erkennen oder merken, nicht „realisieren“ im Sinn von verwirklichen','demonstrate':'heißt zeigen, nicht nur „demonstrieren“','map':'heißt Landkarte, nicht „Mappe“ (das ist folder)',
'fast':'heißt schnell oder fest, nicht „fast“ (das ist almost)','art':'heißt Kunst, nicht „Art“ (das ist kind oder type)','bad':'heißt schlecht, nicht „Bad“ (das ist bath)',
'rock':'heißt Fels oder Rockmusik, nicht „Rock“ (das ist skirt)','chance':'heißt Gelegenheit oder Zufall','fabricate':'heißt erfinden, nicht „fabrizieren“','dozen':'heißt Dutzend, nicht „Dose“ (das ist can)',
'tablet':'heißt Tablette, nicht nur „Tablet“','bald':'heißt kahl, nicht „bald“ (das ist soon)','hell':'zeigt Dunkelheit nicht, heißt Hölle, nicht „hell“ (das ist bright)'
};
function ffKey(id){if(wlang(id)!=='en')return '';return String(W[id][0]).toLowerCase().replace(/\(.*?\)/g,' ').replace(/^(to|a|an|the)\s+/,'').trim().split(/[\s;,\/]+/)[0];}
function ffNote(id){const k=ffKey(id);return k&&FF[k]?'⚠️ Falscher Freund: „'+k+'“ '+FF[k]+'.':'';}
function confWith(val,id,d){
  const x=norm(val||'');if(x.length<3)return null;
  const all=allIds();for(let k=0;k<all.length;k++){const o=all[k];if(o===id)continue;const ans=d==='en'?W[o][1]:W[o][0];if(check(val,ans))return o;}
  return null;
}
function confNote(val,id,d){const o=confWith(val,id,d);if(o==null)return '';const q=d==='en'?W[o][0]:W[o][1];return '🔀 Verwechselt: „'+q+'“ heißt '+(d==='en'?W[o][1]:W[o][0])+'.';}
function famIds(id){
  if(wlang(id)!=='en')return [];const k=ffKey(id);if(k.length<5)return [];const out=[];
  allIds().forEach(function(o){if(o===id||wlang(o)!=='en')return;const k2=ffKey(o);if(k2.length<5)return;let n=0;while(n<k.length&&n<k2.length&&k[n]===k2[n])n++;if(n>=Math.max(5,Math.min(k.length,k2.length)-2))out.push(o);});
  return out.slice(0,5);
}
function testFix(i,quiet){
  const x=Q.log[i];if(!x||x.ok)return;const id=x.id;
  if(x.first&&!x.free&&x.snap){const sn=x.snap;
    if(sn.box===undefined)delete P.box[sn.key];else P.box[sn.key]=sn.box;
    if(sn.due===undefined)delete P.due[sn.key];else P.due[sn.key]=sn.due;
    if(sn.wrong===undefined)delete P.wrong[id];else P.wrong[id]=sn.wrong;
    applyResult(id,x.d,true,'type',false);P.st.no=Math.max(0,P.st.no-1);P.st.ok++;markGood(id);updHist();}
  const n=norm(x.val||'');if(n){P.alt=P.alt||{};const k=altKey(id,x.d);const a=P.alt[k]||[];if(a.indexOf(n)<0)a.push(n);P.alt[k]=a.slice(-6);}
  x.ok=true;x.half=false;Q.missed.delete(id);
  try{if(Q.sim&&Q.simDone&&P.sims&&P.sims.length){const c=testPts(Q);const p=Math.round(c/Math.max(1,Q.total)*100);const l=P.sims[P.sims.length-1];l.p=p;l.n=grade(p);}}catch(e){}
  if(Q.nearL)Q.nearL=Q.nearL.filter(function(y){return y.id!==id;});
  save();if(!quiet){toast('Gezählt. Die App merkt sich diese Antwort für dieses Wort.');render(true);}
}
async function aiJudge(){
  if(!Q||!Q.test||Q.judging||!aiOK())return;
  const items=[];Q.log.forEach(function(x,i){if(!x.ok&&x.val&&x.val.trim()){const q=x.d==='en'?W[x.id][0]:W[x.id][1],a=x.d==='en'?W[x.id][1]:W[x.id][0];items.push({i:i,q:q,a:a,v:x.val});}});
  Q.judged=true;if(!items.length)return;Q.judging=true;if(S.screen==='result')render(true);
  try{aiTrack();const r=await AI.json('Du bewertest Vokabelantworten eines Schülers wohlwollend. Zu jeder Zeile: Frage, Lösung aus dem Buch, Antwort des Schülers. Eine Antwort ist AKZEPTABEL, wenn sie dasselbe bedeutet (gültiges Synonym, andere Wortstellung, kleine Grammatik- oder Tippfehler, "to" oder "sich" fehlt). Sie ist NICHT akzeptabel, wenn die Bedeutung anders ist oder nur ähnlich klingt. Antworte NUR mit JSON {"ok":[Liste der Nummern akzeptabler Antworten]}.\n'+items.map(function(t){return t.i+' | '+t.q+' | '+t.a+' | '+t.v;}).join('\n'),{modelTier:'quick'});
    const ok=(r&&Array.isArray(r.ok))?r.ok.map(Number):[];let n=0;items.forEach(function(t){if(ok.indexOf(t.i)>=0){testFix(t.i,true);n++;}});Q.judgeN=n;if(n)toast('KI hat '+n+' Antwort'+(n>1?'en':'')+' als richtig gewertet.');
  }catch(e){Q.judgeErr=aiErr(e&&e.code);}
  Q.judging=false;save();if(S.screen==='result')render(true);
}
async function aiWhy(i){
  const x=Q&&Q.log[i];if(!x||x.why||x.whyBusy||!aiOK())return;x.whyBusy=true;render(true);
  const q=x.d==='en'?W[x.id][0]:W[x.id][1],a=x.d==='en'?W[x.id][1]:W[x.id][0];
  try{aiTrack();const r=await AI.json('Ein Schüler hat bei einer Vokabel falsch geantwortet. Frage: "'+q.replace(/"/g,"'")+'". Richtig: "'+a.replace(/"/g,"'")+'". Antwort des Schülers: "'+String(x.val||'').replace(/"/g,"'")+'". Erkläre auf Deutsch in höchstens 25 einfachen Wörtern, warum das falsch ist und woran man den Unterschied merkt (z. B. falscher Freund, ähnlich klingendes Wort). Antworte NUR mit JSON {"t":"..."}.',{modelTier:'quick'});
    x.why=String((r&&r.t)||'').slice(0,220)||'Keine Erklärung gefunden.';}catch(e){x.why=aiErr(e&&e.code)||'Das hat nicht geklappt.';}
  x.whyBusy=false;render(true);
}
function hideWord(id){
  P.hid=P.hid||{};P.hid[id]=1;save();toast('Wort ausgeblendet. Zurückholen: Einstellungen › Lernen.');
}
function newLeft(){const lim=P.newMax==null?20:P.newMax;if(!lim)return 1e9;const t=fmt(new Date());return Math.max(0,lim-((P.nd&&P.nd[t])||[]).length);}
function limitNew(ids){let left=newLeft();return ids.filter(function(id){if(!isNewW(id))return true;if(left>0){left--;return true;}return false;});}
function override(){
  const id=Q.queue[0];
  if(Q.first&&!Q.free&&Q.snap){const s=Q.snap;
    if(s.box===undefined)delete P.box[s.key];else P.box[s.key]=s.box;
    if(s.due===undefined)delete P.due[s.key];else P.due[s.key]=s.due;
    if(s.wrong===undefined)delete P.wrong[id];else P.wrong[id]=s.wrong;
    applyResult(id,Q.d,true,Q.m,Q.hinted);P.st.no=Math.max(0,P.st.no-1);P.st.ok++;}
  if(!Q.free){markGood(id);updHist();}
  Q.missed.delete(id);save();Q.ok=true;render();
}
function grade(p){return p>=92?1:(p>=81?2:(p>=67?3:(p>=50?4:(p>=30?5:6))));}
function cheer(p){return p>=0.9?'Perfekt! So sitzen Vokabeln.':(p>=0.7?'Stark! Du bist auf dem richtigen Weg.':(p>=0.5?'Gut dran. Die Fehler üben wir gleich.':'Fehler gehören dazu. Jede Runde macht es leichter.'));}
function resultView(){
  const miss=Array.from(Q.missed);
  const reached=!Q.free&&Q.goalBefore<P.dailyGoal&&dayCount()>=P.dailyGoal;
  let h;
  if(Q.test){
    const c=testPts(Q);const p=Math.round(c/Q.total*100);
    if(Q.sim){simSave(Q);const used=Math.min(Date.now(),Q.simEnd)-Q.simStart;const prev=(P.sims||[]).slice(0,-1).slice(-3).map(function(x){return x.n;});
      h='<div class="glass pad w center res"><div class="big-ico">📝</div><div class="lab">Klausur-Test'+(Q.simExam?' · '+esc(Q.simExam):'')+'</div><div class="big">Note '+gradeMark(p)+'</div><p>'+ptsTxt(cr20(Q))+' / 20 Punkte · '+p+' % · '+ptsTxt(c)+' von '+Q.total+' richtig · Zeit '+fmtMS(used)+'</p><p class="hint" style="margin:0;font-size:12px">Schlüssel: '+simKey()+'</p>'+(prev.length?'<p class="hint" style="margin:0">Letzte Tests: Note '+prev.join(', ')+'</p>':'')+'</div>';}
    else h='<div class="glass pad w center res"><div class="big-ico">📝</div><div class="lab">Probetest</div><div class="big">'+ptsTxt(cr20(Q))+' / 20</div><p>Note '+gradeMark(p)+' · '+p+' % · '+ptsTxt(c)+' von '+Q.total+' richtig</p></div>';
    h+=''+(Q.log.some(function(x){return x.half;})?'<p class="hint noprint" style="text-align:center;margin:0">Kleine Fehler (Tippfehler, fast richtig) geben nur einen halben Punkt, wie in der Klassenarbeit.</p>':'')+korrCard(Q)+'<button class="btn full noprint" data-act="printres">📄 Als PDF speichern oder drucken</button>';
    if(Q.judging)h+='<div class="glass pad w center tight">🤖 KI prüft deine Fehler …</div>';else if(Q.judgeN)h+='<div class="glass pad w center tight">🤖 KI hat '+Q.judgeN+' Antwort'+(Q.judgeN>1?'en':'')+' als richtig gewertet.</div>';
    const bad=Q.log.filter(function(x){return !x.ok;});
    if(bad.length){h+='<div class="glass pad w"><div class="lab" style="margin-bottom:6px">Fehler</div>';bad.slice(0,20).forEach(function(x){const pq=x.d==='en'?W[x.id][0]:W[x.id][1];const aa=x.d==='en'?W[x.id][1]:W[x.id][0];h+='<div class="wl" style="flex-direction:column;align-items:flex-start;gap:2px"><span style="flex:none">'+esc(pq)+'</span><span style="flex:none;color:var(--bad)">Du: '+(x.val.trim()?esc(x.val):'keine Antwort')+'</span><span style="flex:none;color:var(--good);font-weight:700">Richtig: '+esc(aa)+'</span>'+(x.val.trim()?'<button class="link noprint" data-act="testfix" data-i="'+Q.log.indexOf(x)+'">Meine Antwort war auch richtig</button>':'')+(x.cf?'<span class="hint" style="flex:none">'+esc(x.cf)+'</span>':'')+(ffNote(x.id)&&x.d==='en'?'<span class="hint" style="flex:none">'+esc(ffNote(x.id))+'</span>':'')+(x.why?'<span class="hint" style="flex:none">💡 '+esc(x.why)+'</span>':(aiOK()?'<button class="link noprint" data-act="aiwhy" data-i="'+Q.log.indexOf(x)+'">'+(x.whyBusy?'KI denkt nach …':'Warum falsch? (KI)')+'</button>':''))+'</div>';});if(bad.length>20)h+='<p class="hint" style="margin:6px 0 0">… und '+(bad.length-20)+' weitere Wörter. Die schwierigsten üben unter Knifflige Wörter.</p>';h+='</div>';}
  } else if(S.mode==='cards'){
    h='<div class="glass pad w center"><div class="big-ico">🎉</div><p>Alle Karten durch!</p>'+(Q.free?'<p class="hint" style="font-size:12px">Freies Üben, Fortschritt unverändert</p>':'')+'</div>';
  } else {
    h='<div class="glass pad w center res"><div class="big-ico">🎉</div><div class="lab">Beim ersten Versuch richtig</div><div class="big">'+(Q.total-miss.length)+' / '+Q.total+'</div><p>'+cheer((Q.total-miss.length)/Math.max(1,Q.total))+'</p>'+(Q.free?'<p class="hint" style="font-size:12px">Freies Üben, Fortschritt unverändert</p>':'')+'</div>';
  }
  if(!Q.free&&Q.xp0!=null&&P.xp>Q.xp0)h+='<div class="glass pad w center tight"><b>+'+(P.xp-Q.xp0)+' XP</b>'+(xpOn()?' <small class="hint">(doppelt durch Booster ⚡)</small>':'')+'</div>';
  if(!Q.free&&Q.coin0!=null&&P.coins>Q.coin0)h+='<div class="glass pad w center tight"><b>+'+(P.coins-Q.coin0)+' 🪙</b><small class="hint"> verdient'+(Q.bonus?' (inklusive Tagesziel-Bonus)':'')+'</small></div>';
  if(Q.nearL&&Q.nearL.length){const nr=Q.nearL.filter(function(x){return x.near;}),un=Q.nearL.length-nr.length;
    h+='<div class="glass pad w col tight"><div class="lab">Fehler-Analyse</div><div class="hint">'+(nr.length?'✏️ '+nr.length+' fast richtig (Tippfehler oder kleine Abweichung)':'')+(nr.length&&un?' · ':'')+(un?'❓ '+un+' nicht gewusst':'')+'</div>';
    nr.slice(0,4).forEach(function(x){h+='<div class="wr"><span class="wm"><b>'+esc(W[x.id][0])+'</b><small>'+esc(W[x.id][1])+'</small></span></div>';});
    h+='<p class="hint" style="margin:0">'+(nr.length>=un?'Das Wissen ist da. Achte auf die genaue Schreibweise.':'Hier fehlt noch das Wissen. Wiederhole diese Wörter zuerst.')+'</p></div>';}
  if(S.mode!=='cards')h+=timeBlock();
  if(reached)h+='<div class="goal">🎯 Tagesziel erreicht: '+P.dailyGoal+' Wörter</div>';
  if(!Q.test&&miss.length){h+='<div class="glass pad w"><div class="lab" style="margin-bottom:6px">Nochmal ansehen</div>';miss.forEach(function(id){h+=wordRow(id,true);});h+='</div>';}
  else if(!Q.test&&S.mode!=='cards')h+='<div class="glass pad w hint">Keine Fehler. Probier jetzt den Probetest, das ist die härteste Prüfung.</div>';
  if(Q.hist&&Q.hist.length){const lw=Q.hist[Q.hist.length-1];h+='<button class="glass gtap undob w" data-act="undo"><span class="ui"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 14L4 9l5-5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 9h10a6 6 0 010 12h-3" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></span><span class="ut"><b>Letztes Wort nochmal</b><small>'+(lw&&W[lw.id]?esc(W[lw.id][0]):'')+'</small></span></button>';}
  const errN=errIds().length;
  if(errN>=2)h+='<button class="btn full noprint" data-act="errround">🎯 Nur die '+errN+' Fehler üben</button>';
  h+='<div class="row2"><button class="btn" data-act="again">Nochmal</button><button class="btn pri" data-act="home">Zum Menü</button></div>';
  if(typeof S.b==='number'&&S.b<nb()-1)h+='<button class="btn full" data-act="nextblock">Nächste Liste</button>';
  return h;
}
function cont(){
  const id=Q.queue.shift();
  Q.hist=Q.hist||[];Q.hist.push({id:id,d:Q.d,m:Q.m,ok:Q.ok,val:Q.val,first:Q.first,snap:Q.snap,free:Q.free,gdBef:Q.gdBef});if(Q.hist.length>12)Q.hist.shift();
  if(!Q.ok&&!Q.test)Q.queue.splice(Math.min(3,Q.queue.length),0,id);
  if(!Q.queue.length){sfx('done');if(!Q.free&&Q.goalBefore<P.dailyGoal&&dayCount()>=P.dailyGoal)S.confetti=true;if(!Q.free){earnXp(20);weekGoalCheck();try{bossDone();chestOpen();}catch(e){}if(dayCount()>=P.dailyGoal*2&&P.marathonDay!==fmt(new Date())){P.marathonDay=fmt(new Date());P.tokens=(P.tokens||0)+1;setTimeout(function(){toast('Lern-Marathon! Du hast einen Doppel-XP-Booster verdient ⚡');},1400);}}P.run=null;save();S.screen='result';render();if(Q.test&&!Q.judged&&P.aiJudge!==false&&aiOK())setTimeout(aiJudge,200);if(P.cloudAt&&Date.now()-P.cloudAt>600000)cloudSave(true);return;}
  prepare();render();maybeSpeak();saveRun();
}
function autoNext(){
  if(P.autoNext===false||!Q||!Q.answered||!Q.ok||S.screen!=='quiz')return;
  const id=Q.queue[0],q=Q;setTimeout(function(){if(Q===q&&S.screen==='quiz'&&Q.answered&&Q.ok&&Q.queue[0]===id)cont();},Q.m==='type'?1300:900);
}
function timeBlock(){
  const t=Q.times||[];if(t.length<3)return '';
  const tot=t.reduce(function(s,x){return s+x.ms;},0);const avg=tot/t.length/1000;
  if(S.mode==='mc'||S.mode==='test'){const mm=Math.floor(tot/60000),ss=Math.round(tot/1000)%60;return '<div class="glass pad w center"><div class="lab">Dauer des Tests</div><div class="big">'+mm+':'+(ss<10?'0':'')+ss+' Min.</div><p class="hint" style="margin:0">'+t.length+' Wörter · Ø '+avg.toFixed(1).replace('.',',')+' s pro Wort</p></div>';}
  const typed=(Q.m==='type'||Q.test||S.mode==='type'||S.mode==='test'||S.mode==='auto');const lim=typed?[6,12]:[3,7];
  let v=avg<=lim[0]?['⚡','Flüssig','Du antwortest schnell, die Wörter sitzen.']:avg<=lim[1]?['👍','Gut','Zügig, aber bei einigen überlegst du noch.']:['🐢','Langsam','Du brauchst lange. Wiederhole die Wörter, damit sie automatisch kommen.'];
  let extra='';
  const m=Math.floor(tot/60000),sec=Math.round(tot/1000)%60;
  const slow=t.slice().sort(function(a,b){return b.ms-a.ms;}).slice(0,3);
  let h='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Zeit</span><span class="hint">'+m+':'+(sec<10?'0':'')+sec+' gesamt</span></div><div class="row" style="gap:10px;align-items:center"><span style="font-size:26px">'+v[0]+'</span><span><b>'+v[1]+' · Ø '+avg.toFixed(1).replace('.',',')+' s pro Wort</b><br><small class="hint">'+v[2]+'</small></span></div>'+extra;
  h+='<div class="hint" style="margin-top:4px">Am längsten gebraucht:</div>';
  slow.forEach(function(x){h+='<div class="wr"><span class="wm"><b>'+esc(W[x.id][0])+'</b><small>'+esc(W[x.id][1])+'</small></span><span class="hint">'+(x.ms/1000).toFixed(1).replace('.',',')+' s'+(x.ok?'':' · falsch')+'</span></div>';});
  return h+'</div>';
}
function undoLast(){
  const r=Q&&Q.hist&&Q.hist.pop();if(!r)return;
  if(!r.ok&&!Q.test){const i=Q.queue.indexOf(r.id);if(i>=0)Q.queue.splice(i,1);}
  Q.queue.unshift(r.id);
  if(r.first){Q.seen.delete(r.id);Q.missed.delete(r.id);
    if(!r.free&&r.snap){const s=r.snap;
      if(s.box===undefined)delete P.box[s.key];else P.box[s.key]=s.box;
      if(s.due===undefined)delete P.due[s.key];else P.due[s.key]=s.due;
      if(s.wrong===undefined)delete P.wrong[r.id];else P.wrong[r.id]=s.wrong;}}
  if(!r.free){const k=r.ok?'ok':'no';P.st[k]=Math.max(0,P.st[k]-1);const t=fmt(new Date());if(P.days[t])P.days[t]--;
    if(r.ok&&!r.gdBef){const a=P.gd[t]||[];const j=a.indexOf(r.id);if(j>=0)a.splice(j,1);}updHist();save();}
  if(Q.test&&Q.log.length)Q.log.pop();
  S.screen='quiz';prepare(r.d);if(r.m==='type')Q.val=r.val;render();saveRun();
}
function typeCheck(){
  const el=document.getElementById('ans');const v=el?el.value:'';
  if(!v.trim()){Q.err='Gib zuerst eine Antwort ein.';Q.val=v;render();return;}
  Q.val=v;Q.err='';Q.synId=0;let okv=check(v,an(Q.queue[0]))||altHit(Q.queue[0],Q.d,v);if(!okv){const sy=synOK(v,Q.queue[0],Q.d);if(sy){okv=true;Q.synId=sy-1;}}submit(okv);autoNext();
}
function hintText(id){const a=an(id).split(';')[0].replace(/\(.*?\)/g,'').trim();let s='';for(let i=0;i<a.length;i++){s+=(i===0||a[i]===' '||/[^a-zA-ZäöüÄÖÜß]/.test(a[i]))?a[i]:'_';s+=' ';}return s.trim();}
let tx=null;
function bindSwipe(){const el=document.getElementById('fc');if(!el)return;
  el.addEventListener('touchstart',function(e){tx=e.changedTouches[0].clientX;},{passive:true});
  el.addEventListener('touchend',function(e){if(tx===null)return;const dx=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(dx)>60){if(dx<0)act('next');else act('prev');}},{passive:true});
  el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();act('flip');}});}
function pv(v){if(v==='true')return true;if(v==='false')return false;if(/^-?\d+$/.test(v))return parseInt(v,10);return v;}
function act(a,d){
  if(!S.leaveOk&&(a==='home'||a==='tab'||a==='settings'||a==='profile'||a==='shop')&&S.screen!=='menu'){const lm0=leaveMsg();if(lm0&&(S.screen==='quiz'||S.screen==='game'||S.screen==='speak'||S.screen==='cloze'||S.screen==='conf')){S.leave=lm0;S.leaveAct=[a,d];render(true);return;}}
  if(a==='tile'||a==='game'||a==='newgame'||a==='smart'||a==='weakq'||a==='cardsq'||a==='blitzq'||a==='feedgo'){usageBump(d&&(d.k||d.v||d.id)||a);if(a==='game'||a==='newgame'||a==='blitzq'){qTouch().gm++;}}
  d=d||{};
  if(a==='dir'){S.dir=d.d;render();}
  else if(a==='home'){S.screen='menu';S.confirmReset=false;S.formErr='';S.addErr='';render();}
  else if(a==='reloadapp'){location.reload();}
  else if(a==='tab'){haptic('tap');let to=-1;TABS.forEach(function(t,i){if(t.k===d.k)to=i;});if(to<0)return;const from=tabIndex();S.anim='';S.screen=d.k;S.confirmReset=false;S.formErr='';S.addErr='';render();}
  else if(a==='leaveno'){S.leave=false;S.leaveAct=null;render(true);}
  else if(a==='leaveyes'){S.leave=false;S.leaveOk=true;const la=S.leaveAct;S.leaveAct=null;if(S.screen==='game'&&S.game){['iv','pv'].forEach(function(k){if(S.game[k])clearInterval(S.game[k]);});if(S.game.tm)clearTimeout(S.game.tm);}try{speechSynthesis.cancel();}catch(e){}if(la)act(la[0],la[1]||{});else act('back');S.leaveOk=false;}
  else if(a==='back'){
    if(S.screen==='settings'&&window.innerWidth<740&&S.setcat&&!(S.sq||'').trim()){S.setcat=null;render();window.scrollTo(0,0);return;}
    if(!S.leaveOk){const lm=leaveMsg();if(lm){S.leave=lm;render(true);return;}}
    S.leave=false;let t=S.from||'menu';if(S.screen==='pet')t=S.petBack||'shop';if(S.screen==='path')t=S.pathBack||'words';if(S.screen==='word')t=S.wordBack||'words';if(S.screen==='feedback')t='settings';if(S.screen==='legal')t=S.legalBack||'settings';if(S.screen==='account')t='settings';if(S.screen==='game'){if(S.game&&S.game.iv)clearInterval(S.game.iv);if(S.game&&S.game.pv)clearInterval(S.game.pv);if(S.game&&S.game.tm)clearTimeout(S.game.tm);S.speakGo=false;try{speechSynthesis.cancel();}catch(e){}t=S.from||'practice';}S.confirmWord=-1;if(S.screen==='settings')t=S.prevTab||'menu';if(S.screen==='add')t=(S.from&&isRoot(S.from))?S.from:'words';S.screen=t;S.formErr='';S.addErr='';S.confirmReset=false;S.paste=false;S.bk='';render();}
  else if(a==='settings'){if(S.screen!=='settings')S.prevTab=isRoot(S.screen)?S.screen:'menu';S.screen='settings';render();}
  else if(a==='onbdone'){P.onb=1;P.newsV=BUILD;setCookieOnb();save();S.screen='menu';render();}
  else if(a==='tutorial'){S.screen='tut';render();}
  else if(a==='tutdone'){S.screen='menu';render();}
  else if(a==='gkeyedit'){const r=window.prompt('Prozentgrenzen für Note 1 bis 5, mit Komma getrennt. Beispiel: 92,81,67,50,30',gkey().join(','));if(r!==null){const v=r.split(/[,; ]+/).map(Number).filter(function(x){return x>0&&x<100;});if(v.length===5&&v.every(function(x,i){return i===0||x<v[i-1];})){P.gkey=v;save();toast('Notenschlüssel gespeichert.');render(true);}else toast('Bitte fünf fallende Zahlen angeben, zum Beispiel 92,81,67,50,30.');}}
  else if(a==='profedit'){obInit(true);S.screen='onb';render();}
  else if(a==='obset'){const o=S.ob;if(!o)return;const k=d.k;
    if(k==='dark'){P.darkMode=d.v==='auto'?null:(d.v==='dark');save();applyPrefs();render(true);return;}
    if(k==='accent'){P.accent=d.v;save();applyPrefs();render(true);return;}
    if(k==='fsz'){P.fontSize=d.v;save();applyPrefs();render(true);return;}
    if(k==='snd'){P.sfx=d.v==='on';save();if(P.sfx)sfx('ok');render(true);return;}
    if(k==='spk'){P.speak=d.v==='on';save();render(true);return;}
    if(k==='rem'){if(d.v==='off')P.remindersEnabled=false;else{P.remindersEnabled=true;P.remHour=parseInt(d.v,10);}save();render(true);return;}
    if(k==='emoji'){o.emoji=d.v;render(true);return;}
    o[k]=(k==='pace')?parseInt(d.v,10):d.v;if(k==='role'&&d.v!=='schule')o.grade='';if(k==='role'&&d.v==='schule')o.level=0;
    if(k==='role'||k==='grade'||k==='goal'||k==='lang'){if(obCan(o)){obAdv(o);}}render();window.scrollTo(0,0);}
  else if(a==='obtog'){const o=S.ob;if(!o)return;const i=o.styles.indexOf(d.v);if(i>=0)o.styles.splice(i,1);else o.styles.push(d.v);render(true);}
  else if(a==='obnext'){const o=S.ob;if(!o||!obCan(o))return;const nm0=document.getElementById('ob-name');if(nm0)o.name=nm0.value;obAdv(o);render();window.scrollTo(0,0);}
  else if(a==='obback'){const o=S.ob;if(!o)return;o.step=Math.max(0,o.step-1);render();window.scrollTo(0,0);}
  else if(a==='obcancel'){S.ob=null;S.screen='settings';render();}
  else if(a==='obskip'){P.onb=1;P.newsV=BUILD;setCookieOnb();save();S.ob=null;S.screen='menu';render();}
  else if(a==='obdone'){const o=S.ob;if(!o)return;obApply(o);const ed=o.edit;S.ob=null;S.screen=ed?'settings':'menu';render();if(ed)toast('Lernprofil gespeichert.');else setTimeout(function(){act('smart',{});},150);}
  else if(a==='questclaim'){questClaim(d.k);}
  else if(a==='coach'){setFrom();if(!S.coach)S.coach={msgs:[],busy:false,call:null};S.screen='coach';render();setTimeout(coScroll,120);}
  else if(a==='cosend'){const i=document.getElementById('co-in');const c=S.coach;const v=(i?i.value:'').trim();const tg=c&&c.tag?c.tag:'';if(!v&&!tg)return;if(i)i.value='';if(c)c.tag='';coSend((tg?tg+' ':'')+v);}
  else if(a==='coexam'){const c=S.coach;if(!c)return;const i=parseInt(d.i,10);const m=c.msgs[i];const lab=m&&m.opts?(m.opts.filter(function(o){return o[0]===d.v;})[0]||['',''])[1]:'';if(m)m.opts=null;coPush('u',lab||'Klausur');const r=coBranch(d.v);coPush('a',r.reply,r.extra);render(true);coScroll();}
  else if(a==='cotag'){const c=S.coach;if(!c)return;c.tag=(c.tag===d.v)?'':d.v;const i0=document.getElementById('co-in');const keep=i0?i0.value:'';render(true);const i1=document.getElementById('co-in');if(i1){i1.value=keep;try{i1.focus();}catch(e){}}}
  else if(a==='cotagx'){const c=S.coach;if(c){c.tag='';render(true);}}
  else if(a==='cochip'){coSend(d.v);}
  else if(a==='comic'){coMic();}
  else if(a==='corun'){const m=S.coach&&S.coach.msgs[parseInt(d.i,10)];if(m&&m.plan)coRun(m.plan);}
  else if(a==='callstart'){callStart();}
  else if(a==='callend'){callEnd();}
  else if(a==='callmic'){callMicTap();}
  else if(a==='calltype'){callType();}
  else if(a==='setacc'){if(!P.setOpen||typeof P.setOpen!=='object')P.setOpen={};P.setOpen[d.k]=!P.setOpen[d.k];save();render(true);}
  else if(a==='kontogo'){S.setcat='Konto und Offline';S.sq='';setFrom();S.screen='settings';render();}
  else if(a==='setcat'){S.setcat=d.k||null;if(d.k){P.setcat=d.k;save();}S.sq='';render();window.scrollTo(0,0);}
  else if(a==='pause'){pauseStart();}
  else if(a==='simstart'){simStart();}
  else if(a==='homemore'){P.homeMore=!P.homeMore;save();render(true);}
  else if(a==='moretog'){P.moreOpen=!P.moreOpen;save();render(true);}
  else if(a==='sharelist'){shareLink();}
  else if(a==='impgo'){impGo();}
  else if(a==='weakq'){setFrom();S.b='weak';S.dir='mix';begin('auto',false);}
  else if(a==='cardsq'){setFrom();S.pend='cards';S.b=focusOn()?'focus':'all';S.screen='pickdir';render();}
  else if(a==='blitzq'){setFrom();startGame('blitz');}
  else if(a==='smart'){setFrom();
    S.b=focusOn()?'focus':'all';const sp=scope(S.b);
    if(!dueOf(sp).length&&dueOf(sp,true).length)S.dir='mix';
    begin('auto',!dueOf(sp,true).length);}
  else if(a==='resume'){setFrom();
    const r=P.run;if(!r)return;
    const qs=r.queue.filter(isAlive);if(!qs.length){P.run=null;save();render();return;}
    S.mode=(r.mode==='write'?'type':r.mode);S.dir=r.dir;S.b=r.b;S.examId=r.examId;S.free=r.free;S.screen='quiz';
    Q=mkQ(qs,{queue:qs.slice(),total:r.total,seen:new Set(r.seen),missed:new Set(r.missed),intro:new Set(r.intro)});
    prepare();render();maybeSpeak();}
  else if(a==='pathopen'){S.sheet=null;pathOpen(parseInt(d.id!=null?d.id:d.k,10),isRoot(S.screen)?S.screen:'words');}
  else if(a==='pathpick'){pathPicker();}
  else if(a==='pathgo'){const st=pathStations(S.pathK);const x=st[parseInt(d.i,10)];if(x)pathRun(x.ids,'auto');}
  else if(a==='pathtest'){pathRun(range(S.pathK).filter(isAlive),'test');}
  else if(a==='listgo'){setFrom();S.b=parseInt(d.k,10);begin('auto',false);}
  else if(a==='hardgo'){setFrom();S.b='weak';begin('auto',false);}
  else if(a==='examgo'){setFrom();S.b='exam';S.examId=parseInt(d.id,10);begin('auto',false);}
  else if(a==='special'){setFrom();const ids=scope(d.k);if(!ids.length){toast(d.k==='star'?'Noch keine Sterne. Tippe im Quiz auf ☆ bei schwierigen Wörtern.':'Gerade nichts offen. Gut so 👍');return;}S.b=d.k;S.pend='auto';S.screen='pickdir';render();}
  else if(a==='star'){const id=parseInt(d.id,10);if(!P.star)P.star={};if(P.star[id])delete P.star[id];else P.star[id]=1;save();render(true);}
  else if(a==='wemo'){const id=parseInt(d.id,10);const v=window.prompt('Eigenes Emoji für dieses Wort (leer = zurücksetzen):',(P.wemo&&P.wemo[id])||'');if(v===null)return;if(!P.wemo)P.wemo={};const t=Array.from(v.trim()).slice(0,2).join('');if(t)P.wemo[id]=t;else delete P.wemo[id];save();render(true);}
  else if(a==='mnem'){const id=parseInt(d.id,10);const v=window.prompt('Deine Merkhilfe für dieses Wort (leer = löschen):',(P.mn&&P.mn[id])||'');if(v===null)return;if(!P.mn)P.mn={};const t=v.trim().slice(0,140);if(t)P.mn[id]=t;else delete P.mn[id];save();render(true);}
  else if(a==='report'){const id=parseInt(d.id,10);if(!P.rep)P.rep=[];P.rep.push({id:id,w:W[id]&&W[id][0],d:W[id]&&W[id][1],at:Date.now()});P.rep=P.rep.slice(-100);save();toast('Gemeldet. Unter Einstellungen → Daten kannst du die Liste kopieren.');}
  else if(a==='repcopy'){const t=(P.rep||[]).map(function(r){return r.w+' = '+r.d;}).join('\n');try{navigator.clipboard.writeText(t);toast('Liste kopiert.');}catch(e){S.share=t;S.screen='words';render();}}
  else if(a==='tile'){setFrom();
    if(d.k==='weak'){if(!weakIds().length){toast('Noch keine kniffligen Wörter – erst ein paar Runden üben 👍');return;}S.b='weak';}
    else if(/^(weak|exam|custom|fail7|star|night)$/.test(S.b))S.b='all';
    if(d.k!=='weak'&&focusOn()&&S.b==='all')S.b='focus';
    S.pend=d.k;S.screen='pickdir';render();}
  else if(a==='start'){
    if(S.pend==='learn'){S.ids=S.b==='all'?allIds():scope(S.b);if(!S.ids.length){toast('Hier sind keine Wörter.');return;}S.screen='learn';S.i=0;S.flip=false;render();}
    else begin(S.pend==='weak'?'auto':S.pend,false);}
  else if(a==='flip'){const el=document.getElementById('fc');S.flip=!S.flip;if(el)el.classList.toggle('flipped',S.flip);}
  else if(a==='qflip'){const el=document.getElementById('fc');if(el&&!el.classList.contains('flipped')&&Q&&Q.flipAt&&Date.now()<Q.flipAt){const h0=document.getElementById('fch');if(h0){h0.classList.remove('nudge');void h0.offsetWidth;h0.classList.add('nudge');}return;}const b=document.getElementById('qb');if(!el)return;const on=el.classList.toggle('flipped');if(b)b.style.visibility=on?'visible':'hidden';}
  else if(a==='prev'){if(S.i>0){S.i--;S.flip=false;render();}}
  else if(a==='lrate'){const id=S.ids[S.i];if(id==null)return;undoPush('learn');learnCredit(id,d.v==='1','de','cards');act('next');}
  else if(a==='next'){if(S.i<S.ids.length-1){S.i++;S.flip=false;render();}else{S.pend='auto';begin('auto',false);}}
  else if(a==='legal'){if(S.screen!=='legal')S.legalBack=S.screen;S.legal=d.v||'imp';S.screen='legal';render();}
  else if(a==='wipe'){
    if(S.confirmWipe){NOSAVE=true;try{localStorage.removeItem(KEY);}catch(e){}try{location.reload();}catch(e){}}
    else{S.confirmWipe=true;render(true);toast('Noch einmal tippen: alles wird gelöscht');setTimeout(function(){S.confirmWipe=false;if(S.screen==='settings')render(true);},5000);}}
  else if(a==='shclose'){S.sheet=null;render(true);}
  else if(a==='mcgpick'){const g=S.mcg;if(!g||g.pick>=0)return;const it=g.items[g.i];g.pick=parseInt(d.v,10);if(g.pick===it.a){g.ok++;g.run=(g.run||0)+1;sfx('ok',g.run);}else{g.no++;g.run=0;sfx('no');}render(true);}
  else if(a==='mcgnext'){const g=S.mcg;if(!g)return;g.i++;g.pick=-1;render(true);if(g.i<g.items.length)setTimeout(mcgSay,200);}
  else if(a==='mcgsay'){mcgSay();}
  else if(a==='mcgagain'){if(S.mcg)mcgStart(S.mcg.kind);}
  else if(a==='sentcheck'){sentCheck();}
  else if(a==='sentskip'){const s=S.sent;if(s){s.i++;s.val='';s.res=null;render(true);}}
  else if(a==='sentnext'){const s=S.sent;if(s){s.i++;s.val='';s.res=null;render(true);}}
  else if(a==='besthr'){P.remHour=parseInt(d.v,10);P.remindersEnabled=true;save();render(true);toast('Erinnerung auf '+P.remHour+' Uhr gesetzt.');}
  else if(a==='streakinfo'){streakInfo();}
  else if(a==='boss'){setFrom();S.b='weak';S.dir='mix';S.boss=true;begin('auto',false);}
  else if(a==='weekrep'){setFrom();S.b='wk';S.dir='mix';begin('auto',true);}
  else if(a==='dbuzz'){const g=S.game;if(g&&g.type==='duel')duelBuzz(g,parseInt(d.i,10));}
  else if(a==='dpick'){const g=S.game;if(g&&g.type==='duel')duelPick(g,parseInt(d.i,10));}
  else if(a==='dshow'){const g=S.game;if(g&&g.type==='duel')duelShow(g);}
  else if(a==='djudge'){const g=S.game;if(g&&g.type==='duel')duelJudge(g,d.v==='1');}
  else if(a==='dquit'){const g=S.game;if(g&&!g.over&&!g.qc){g.qc=1;toast('Zum Beenden noch einmal tippen');setTimeout(function(){if(g)g.qc=0;},2500);render(true);return;}if(g)duelClear(g);act('back',{});}
  else if(a==='bkgo'){P.bkSkip=Date.now();save();evBackupFile();}
  else if(a==='evbackup'){evBackupFile();}
  else if(a==='evrestore'){const sn=(EVX.snaps||[])[parseInt(d.id,10)||0];if(sn){doImport(sn.txt);P.onb=1;S.screen='menu';save();render();}}
  else if(a==='evinstlater'){P.instN=(P.instN||0)+1;P.instAt=Date.now();save();render(true);}
  else if(a==='evwbdis'){P.wbDay=fmt(new Date());save();render(true);}
  else if(a==='evmini'){setFrom();S.b=focusOn()?'focus':'all';const sp=scope(S.b);if(!dueOf(sp).length&&dueOf(sp,true).length)S.dir='mix';S.mini=parseInt(d.v,10)||5;begin('auto',!dueOf(sp,true).length);}
  else if(a==='evcheck'){evCheckOpen();}
  else if(a==='evinfo'){}
  else if(a==='evdiag'){const tx=evReport();const fb=function(){S.bk=tx;S.screen='settings';S.setcat='Daten';render();};try{navigator.clipboard.writeText(tx).then(function(){toast('Diagnose kopiert.');},fb);}catch(e){fb();}}
  else if(a==='evpacks'){evPackOpen();}
  else if(a==='evpack'){evPackAdd(d.id);}
  else if(a==='evmemosave'){const el=document.getElementById('evm');const v=el?el.value.trim().slice(0,160):'';const mi=parseInt(d.id,10);P.memo=P.memo||{};if(v)P.memo[mi]=v;else delete P.memo[mi];save();toast(v?'Eselsbrücke gespeichert.':'Eselsbrücke entfernt.');render(true);}
  else if(a==='report'){const t=reportText();if(navigator.share){navigator.share({title:'EasyVocab Wochenbericht',text:t}).catch(function(){});}else{try{navigator.clipboard.writeText(t).then(function(){toast('Bericht kopiert. Jetzt in eine Nachricht einfügen.');},function(){toast('Kopieren blockiert.');});}catch(e){toast('Kopieren nicht möglich.');}}}
  else if(a==='stkclose'){const e=document.getElementById('stkpop');if(e){e.classList.add('out');setTimeout(function(){if(e.parentNode)e.parentNode.removeChild(e);},260);}}
  else if(a==='offlineinfo'){offlineInfo();}
  else if(a==='liga'){setFrom();S.screen='liga';render();}
  else if(a==='remdis'){P.remDis=fmt(new Date());save();render(true);}
  else if(a==='reststart'){const b=brokenInfo();if(b){P.rest={on:true,n:b.n,last:b.last,from:Date.now(),d:{}};save();render(true);toast('Los geht’s: 3 Lerntage.');}}
  else if(a==='shgo'){const id=d.id,a2=d.v;S.sheet=null;render(true);act(a2,{id:id});}
  else if(a==='speak'){speak(parseInt(d.id,10));}
  else if(a==='got'){const id=Q.queue.shift();Q.intro.add(id);Q.queue.splice(Math.min(2,Q.queue.length),0,id);prepare();render();maybeSpeak();saveRun();}
  else if(a==='opt'){if(Q.answered)return;const i=parseInt(d.i,10);Q.pick=i;submit(Q.opts[i]===Q.queue[0]);autoNext();}
  else if(a==='check'){typeCheck();}
  else if(a==='later'){if(!Q||!Q.test||Q.answered||Q.queue.length<2)return;Q.laterU=Q.laterU||{};Q.laterU[Q.queue[0]]=1;Q.queue.push(Q.queue.shift());prepare();render();toast('Kommt am Ende nochmal.');}
  else if(a==='hint'){const el=document.getElementById('ans');Q.val=el?el.value:'';Q.hinted=true;Q.hint=hintText(Q.queue[0]);Q.err='';render();}
  else if(a==='skip'){const el=document.getElementById('ans');Q.val=el?el.value:'';Q.err='';submit(false);}
  else if(a==='override'){override();}
  else if(a==='spktype'){const el=document.getElementById('spk-in');const v=el?el.value.trim():'';if(!v){toast('Tippe zuerst das Wort.');return;}spkResult([v]);}
  else if(a==='testfix'){testFix(parseInt(d.i,10));}
  else if(a==='aiwhy'){aiWhy(parseInt(d.i,10));}
  else if(a==='qedit'){S.qedit=parseInt(d.id,10);render(true);}
  else if(a==='qcancel'){S.qedit=null;render(true);}
  else if(a==='qsave'){const id=S.qedit;const c=P.custom[id-BASE];const en=(document.getElementById('qe')||{}).value,de=(document.getElementById('qd')||{}).value;if(!c||!en||!de||!en.trim()||!de.trim()){toast('Wort und Übersetzung ausfüllen.');return;}c.en=en.trim();c.de=de.trim();W[id]=[c.en,c.de];BC=null;S.qedit=null;save();toast('Gespeichert.');render(true);}
  else if(a==='hidew'){const hid=parseInt(d.id,10);hideWord(hid);
    if(S.screen==='quiz'&&Q&&Q.queue[0]===hid){Q.queue=Q.queue.filter(function(i,k){return k===0||i!==hid;});Q.ok=true;cont();try{Q.hist.pop();}catch(e){}}
    else{S.sheet=null;if(S.screen==='word')S.screen=S.wordBack||'words';render(true);}}
  else if(a==='unhideall'){P.hid={};save();toast('Alle Wörter zurückgeholt.');render(true);}
  else if(a==='know'){undoPush('quiz');if(Q&&Q.queue&&Q.queue.length&&!Q.free){P.sa=P.sa||{};P.sa[Q.queue[0]]={ok:d.v==='1',t:Date.now()};}submit(d.v==='1',true);}
  else if(a==='cont'){cont();}
  else if(a==='again'){begin(S.mode,S.free);}
  else if(a==='errround'){const ids=errIds();if(ids.length<2){toast('Keine Fehler zum Üben.');return;}S.customIds=ids;S.b='custom';S.dir=S.dir||'mix';begin(S.mode==='cards'?'auto':(S.mode==='test'?'auto':S.mode),true);}
  else if(a==='free'){begin(S.mode,true);}
  else if(a==='nextblock'){S.b=S.b+1;begin(S.mode,false);}
  else if(a==='toadd'){setFrom();S.add.mode=(aiOK()&&AIIMG)?'scan':'paste';S.add.lang='auto';S.add.busy=false;S.add.found=null;S.add.err='';S.screen='add';render();}
  else if(a==='aset'){const n=document.getElementById('a-name');if(n)S.add.name=n.value;S.add[d.key]=d.v;S.addErr='';render(true);}
  else if(a==='addw'){
    const n=document.getElementById('a-name');if(n)S.add.name=n.value;
    const lgS=langOf(document.getElementById('a-en').value,document.getElementById('a-de').value);const r=addWord(document.getElementById('a-en').value,document.getElementById('a-de').value,document.getElementById('a-ex').value,9,lgS,S.add.name);
    if(r==='bad'){S.addErr='Trag das Wort und die Übersetzung ein.';render(true);return;}
    if(r==='dup'){S.addErr='Dieses Wort gibt es schon.';render(true);return;}
    const note=langNote(lgS);S.addErr='';save();render(true);toast('Wort gespeichert.'+(S.add.lang==='auto'?' Sprache: '+LNAME[lgS]+'.':'')+note);setTimeout(function(){const el=document.getElementById('a-en');if(el)el.focus();},0);}
  else if(a==='addbulk'){
    const n=document.getElementById('a-name');if(n)S.add.name=n.value;
    const v=document.getElementById('a-bulk').value;if(!v.trim()){toast('Füge zuerst eine Liste ein.');return;}
    const useAi=aiOK()&&document.getElementById('a-aitopic')&&document.getElementById('a-aitopic').checked;
    let ok=0,dup=0,bad=0;const ids=[];const lgs=[];const cnt={};
    v.split(/\r?\n/).forEach(function(line){if(!line.trim())return;const m=line.match(/^(.+?)\s*(?:=|\t|\s[-–—]\s)\s*(.+)$/);if(!m){bad++;return;}const lg=langOf(m[1],m[2]);const r=addWord(m[1],m[2],'',9,lg,S.add.name);if(r==='ok'){ok++;ids.push(W.length-1);lgs.push(lg);cnt[lg]=(cnt[lg]||0)+1;}else if(r==='dup')dup++;else bad++;});
    const note=(ok?langNotes(lgs):'')+(ok&&S.add.lang==='auto'?' Erkannt: '+Object.keys(cnt).map(function(k){return cnt[k]+'× '+LNAME[k];}).join(', ')+'.':'');save();
    const msg=ok+' neu'+(dup?', '+dup+' schon vorhanden':'')+(bad?', '+bad+' nicht lesbar':'')+'.'+note;
    if(ok&&useAi){toast(msg+' Themen werden zugeordnet…');aiTopics(ids).then(function(c){render(true);toast(c+' Wörter einem Thema zugeordnet.');}).catch(function(e){toast(aiErr(e&&e.code));});}
    else toast(msg);
    if(ok){S.add.name='';S.add.bulk='';S.wmode='blocks';S.screen='words';}render();}
  else if(a==='scanagain'){if(S.add.file)scanRun(S.add.file,'default');}
  else if(a==='scandiscard'){S.add.found=null;S.add.err='';render(true);}
  else if(a==='savefound'){
    const A=S.add,f=A.found;if(!f)return;const n=document.getElementById('a-name');if(n)A.name=n.value;
    const ch=(A.name||f.title||'Eigene Wörter').trim();let ok=0,dup=0;
    f.words.forEach(function(w){if(!w.on)return;const r=addWord(w.f,w.d,w.ex,w.t,A.lang,ch,w.e);if(r==='ok')ok++;else if(r==='dup')dup++;});
    const note=ok?langNote(A.lang):'';A.found=null;A.name='';save();S.wmode='blocks';S.screen='words';render();
    toast(ok+' Wörter in „'+ch+'“ gespeichert'+(dup?' ('+dup+' schon da)':'')+'.'+note);}
  else if(a==='starter'){
    let ok=0;STARTER[d.k].forEach(function(w){if(addWord(w[0],w[1],'',w[2],d.k,'Beispiele '+LNAME[d.k])==='ok')ok++;});
    const note=ok?langNote(d.k):'';save();render(true);toast(ok?ok+' Wörter hinzugefügt.'+note:'Diese Wörter hast du schon.');}
  else if(a==='aitopics'){
    const ids=allIds().filter(function(id){return id>=BASE&&wtopic(id)===9;});toast('Themen werden zugeordnet…');
    aiTopics(ids).then(function(c){render(true);toast(c+' Wörter einem Thema zugeordnet.');}).catch(function(e){toast(aiErr(e&&e.code));});}
  else if(a==='memo'){const id=parseInt(d.id,10);toast('Eselsbrücke wird erstellt…');aiMemo(id).then(function(){render(true);}).catch(function(e){toast(aiErr(e&&e.code));});}
  else if(a==='dellist'){
    const k=parseInt(d.k,10);const b=blocks()[k];if(!b||!b.custom)return;
    if(S.confirmList===k){b.ids.forEach(function(id){P.custom[id-BASE].del=true;});BC=null;S.confirmList=-1;save();render(true);toast('Liste gelöscht.');}
    else{S.confirmList=k;toast('Noch einmal tippen, um die Liste zu löschen.');}}
  else if(a==='claim'){
    const b=badgeList().filter(function(x){return x[3]===d.k;})[0];if(!b)return;
    if(b[2]&&!P.claimed[b[3]]){P.claimed[b[3]]=1;save();render(true);toast('🏅 Abzeichen erhalten: '+b[1]);}
    else toast(b[2]?b[1]+' · '+b[4]:'Noch gesperrt: '+b[4]);}
  else if(a==='game'){if(d.v==='feed')feedPicker();else startGame(d.v);}
  else if(a==='feedshow'){feedReveal(parseInt(d.i,10));sfx('flip');}
  else if(a==='feedlike'){sfx('ok');feedReveal(parseInt(d.i,10));feedRate(parseInt(d.i,10),true);}
  else if(a==='feedmiss'){sfx('swipe');feedReveal(parseInt(d.i,10));feedRate(parseInt(d.i,10),false);}
  else if(a==='feedspk'){speak(parseInt(d.id,10));}
  else if(a==='feedagain'){startFeed();}else if(a==='feedgo'){startFeed(d.id);}else if(a==='focuspick'){focusPicker();}else if(a==='focustoggle'){const k=parseInt(d.id,10);const f=focusList();const ix=f.indexOf(k);if(ix>=0)f.splice(ix,1);else f.push(k);P.focus=f;save();focusPicker();}else if(a==='focusclear'){P.focus=[];save();render(true);}else if(a==='cardspick'){setFrom();S.sheet={title:'Karteikarten',sub:'Wie möchtest du üben?',items:[{i:'🗂️',t:'Stapel: aufdecken und bewerten',a:'cardsdeck'},{i:'📱',t:'Wisch-Feed wie bei TikTok',a:'feedpick'}]};render(true);}else if(a==='cardsdeck'){act('tile',{k:'cards'});}else if(a==='feedpick'){feedPicker();}
  else if(a==='newgame'){if(d.v==='feed')feedPicker();else if(d.v==='cloze'){setFrom();S.sheet={title:'Lückentext',sub:'Wie möchtest du üben?',items:[{i:'📖',t:'Lesen: Satz sehen, Wort wählen',a:'clzstart',id:'read'},{i:'🎧',t:'Hören: Satz hören, Wort wählen',a:'clzstart',id:'listen'}]};render(true);}else if(d.v==='speak')startSpeak();else if(d.v==='conf')startConf();else if(d.v==='rel'||d.v==='hear')mcgStart(d.v);else if(d.v==='sent')sentStart();}
  else if(a==='clzstart'){startCloze(d.id==='listen'?'listen':'read');}
  else if(a==='clzopt'){const c=S.cloze;if(!c||c.pick>=0||c.i>=c.items.length)return;const i=parseInt(d.i,10);const it=c.items[c.i];if(it.opts[i]===undefined)return;const ok=it.opts[i]===it.id;c.pick=i;ok?c.ok++:c.no++;learnCredit(it.id,ok,'de','mc');render(true);}
  else if(a==='clznext'){const c=S.cloze;if(!c||c.pick<0)return;c.i++;c.pick=-1;render();}
  else if(a==='clzplay'){const c=S.cloze;if(!c||c.i>=c.items.length)return;if(!sayEn(c.items[c.i].full,0.9))toast('Vorlesen geht auf diesem Gerät nicht.');}
  else if(a==='clzagain'){startCloze(S.cloze?S.cloze.mode:'read');}
  else if(a==='spkmic'){spkListen();}
  else if(a==='spknext'){const s2=S.spk;if(!s2)return;try{if(s2.rec)s2.rec.abort();}catch(e){}s2.i++;s2.st='idle';s2.err='';s2.res=null;s2.heard='';render();}
  else if(a==='spkplay'){const s2=S.spk;if(s2)speak(s2.ids[s2.i]);}
  else if(a==='spkagain'){startSpeak();}
  else if(a==='confopt'){const c=S.conf;if(!c||c.pick||c.i>=c.items.length)return;const it=c.items[c.i];const ok=d.v===it.ans;c.pick=d.v;ok?c.ok++:c.no++;haptic(ok?'ok':'warn');sfx(ok?'ok':'no');bump();if(ok){earn(1);earnXp(8);}else earnXp(2);save();render(true);}
  else if(a==='confnext'){const c=S.conf;if(!c||!c.pick)return;c.i++;c.pick='';render();}
  else if(a==='confagain'){startConf();}
  else if(a==='account'){S.acct=S.acct||{mode:'in',busy:false,err:'',msg:'',del:false};S.acct.err='';S.screen='account';render();}
  else if(a==='acmode'){const a2=S.acct=S.acct||{};const m=document.getElementById('ac-mail');if(m)a2.mail=m.value;a2.mode=d.v;a2.err='';a2.msg='';render(true);}
  else if(a==='acsubmit'){acctSubmit();}
  else if(a==='acforgot'){acctForgot();}else if(a==='acoauth'){if(sbOn()&&/^[a-z]+$/.test(d.v||''))location.href=String(SBC.supabaseUrl).replace(/\/$/,'')+'/auth/v1/authorize?provider='+d.v+'&redirect_to='+encodeURIComponent(location.origin+'/');}
  else if(a==='acout'){acctOut();}
  else if(a==='acdel'){acctDelete();}
  else if(a==='acsave'){sbSave(false);}
  else if(a==='acload'){cloudLoad();}
  else if(a==='printres'){printRes();}
  else if(a==='dmset'){P.darkMode=d.v==='auto'?null:(d.v==='dark');save();applyPrefs();render(true);}
  else if(a==='lview'){P.view=d.v;BC=null;S.b='all';save();render(true);}
  else if(a==='lat'){setFrom();S.lat=null;S.screen='lat';render();}
  else if(a==='latgo'){latStart();}
  else if(a==='latpick'){const L=S.lat;if(!L||L.pick!==null)return;L.pick=parseInt(d.i,10);const q=L.qs[L.i];if(q.ok.indexOf(q.o[L.pick])>=0){L.score++;sfx('ok');haptic('ok');}else{sfx('no');haptic('warn');(L.wrong=L.wrong||[]).push({id:q.id,info:q.tab});}render(true);}
  else if(a==='latmode'){S.latMode=d.v;render(true);}
  else if(a==='latredo'){const L=S.lat;if(!L||!L.wrong||!L.wrong.length)return;const w=L.wrong.slice();const qs=w.map(latQ);S.lat={qs:qs,i:0,score:0,pick:null,over:false,wrong:[]};render(true);}
  else if(a==='gqset'){S.gq=d.v||'';render(true);}
  else if(a==='wcopy'){const id=parseInt(d.id,10);const tx=W[id][0]+' = '+W[id][1];try{navigator.clipboard.writeText(tx);toast('Kopiert: '+tx);}catch(e){toast('Kopieren geht hier nicht.');}}
  else if(a==='latnext'){const L=S.lat;if(!L)return;if(L.i>=L.qs.length-1){L.over=true;L.rw=gameReward(Math.min(25,3+L.score*2),2);if(L.score>=L.qs.length-1){sfx('done');confetti();}}else{L.i++;L.pick=null;}render(true);}
  else if(a==='latpack'){let n=0;LAT_PACK.forEach(function(x){if(addWord(x[0],x[1],x[2],9,'la','Latein · Grundwortschatz')==='ok')n++;});if(P.view&&P.view!=='all')P.view='la';BC=null;save();toast(n?n+' lateinische Wörter hinzugefügt.':'Das Starterpaket ist schon vollständig drin.');render(true);}
  else if(a==='news'){showNews(true);}
  else if(a==='nexttip'){tipNext();haptic('tap');}
  else if(a==='peekskip'){const g=S.game;if(g&&g.type==='mem')memEndPeek(g);}
  else if(a==='memtap'){const g=S.game;if(!g||g.type!=='mem'||g.lock||g.over||g.peeking)return;const i=parseInt(d.i,10),c=g.cards[i];if(!c||c.open||c.done)return;c.open=true;
    if(g.first<0){g.first=i;render(true);return;}
    const f=g.cards[g.first];g.moves++;
    if(f.id===c.id&&f.f!==c.f){f.done=c.done=true;f.open=c.open=false;g.first=-1;if(g.cards.every(function(x){return x.done;})){g.over=true;g.tEnd=Date.now();g.rw=gameReward(Math.min(30,8+g.cards.length),3);if(g.iv)clearInterval(g.iv);sfx('ok');confetti();}render(true);}
    else{g.lock=true;render(true);setTimeout(function(){f.open=false;c.open=false;g.first=-1;g.lock=false;if(S.screen==='game'&&S.game===g)render(true);},(g.flip||800));}}
  else if(a==='bopt'){const g=S.game;if(!g||g.type!=='blitz'||g.over)return;const i=parseInt(d.i,10);const ok=g.q.opts[i]===g.q.ans;
    if(ok){sfx('ok');g.score++;g.combo++;if(g.combo>g.max)g.max=g.combo;g.flash='ok';if(g.score>(P.blitzBest||0)){P.blitzBest=g.score;save();}}else{sfx('no');g.combo=0;g.flash='no';if(g.pen)g.t=Math.max(1,g.t-g.pen);}
    g.q=blitzQ(g);render(true);}
  else if(a==='gsearch'){S.from=isRoot(S.screen)?S.screen:'menu';S.gq='';S.gqf=0;S.screen='search';render();}
  else if(a==='setfind'){S.setcat=d.k;S.sq='';S.prevTab=S.from||'menu';S.screen='settings';render();}
  else if(a==='undo'){undoDo();}
  else if(a==='skpin'){const g=S.game;if(!g||g.type!=='skit'||g.over||g.fstate!=='play'||S.skBusy)return;const i=parseInt(d.i,10);if(g.down[i])return;const cur=g.order[g.k];
    if(i===cur){skAnim(g,i,true,function(){sfx('ok');haptic('ok');},function(){g.down[i]=true;g.hits++;g.score+=(g.tries===0?10:(g.tries===1?6:3));skNext(g);});}
    else{skAnim(g,i,false,function(){sfx('no');haptic('warn');},function(){g.tries++;g.fmiss++;if(g.tries>=g.ch){g.lost[cur]=true;skNext(g);return;}render(true);});}}
  else if(a==='skfnext'){const g=S.game;if(!g||g.type!=='skit')return;if(g.f<g.fr.length-1){g.f++;skFrame(g);render(true);}else{g.over=true;g.rw=gameReward(Math.min(30,4+Math.floor(g.score/8)),3);render(true);}}
  else if(a==='crchk'){const g=S.game;if(!g||g.type!=='cross')return;let bad=0;document.querySelectorAll('.cx').forEach(function(el){const k=el.dataset.r+','+el.dataset.c;const v=(el.value||'').toLowerCase();if(v&&v!==g.cells[k]){el.classList.add('bad');bad++;}else el.classList.remove('bad');});toast(bad?bad+' Buchstaben stimmen noch nicht.':'Bis jetzt ist alles richtig 👍');}
  else if(a==='crhint'){const g=S.game;if(!g||g.type!=='cross'||g.over)return;if(!g.cell){toast('Tippe zuerst auf ein Feld.');return;}if(g.hl===0){toast('Keine Hinweise mehr.');return;}const k=g.cell[0]+','+g.cell[1];const el=crInp(g.cell[0],g.cell[1]);if(!el)return;if(g.hl>0)g.hl--;g.fill[k]=g.cells[k].toUpperCase();el.value=g.fill[k];el.classList.remove('bad');crDone(g);if(!g.over)render(true);}
  else if(a==='crgo'){const g=S.game;if(!g||g.type!=='cross')return;g.dir=parseInt(d.d,10);const el=crInp(parseInt(d.r,10),parseInt(d.c,10));if(el){el.focus();window.scrollTo({top:0,behavior:'smooth'});}}
  else if(a==='crsol'){const g=S.game;if(!g||g.type!=='cross')return;g.over=true;g.revealed=true;render(true);}
  else if(a==='saltaken'){const g=S.game;if(!g||g.type!=='salat'||g.state==='ok')return;const k=parseInt(d.k,10);const p=g.sel[k];if(p==null)return;g.pool[p].used=false;g.sel[k]=null;g.state='play';render(true);}
  else if(a==='salput'){const g=S.game;if(!g||g.type!=='salat'||g.state==='ok')return;const k=parseInt(d.k,10);if(g.pool[k].used)return;let slot=-1;for(let q=0;q<g.word.length;q++){if(g.sel[q]==null){slot=q;break;}}if(slot<0)return;g.sel[slot]=k;g.pool[k].used=true;g.state='play';
    if(g.sel.filter(function(x){return x!=null;}).length===g.word.length){const w=g.sel.map(function(x){return g.pool[x].c;}).join('');if(w===g.word){g.state='ok';sfx('ok');render(true);setTimeout(function(){if(S.game===g&&g.state==='ok'&&S.screen==='game')mkNext(g,g.hint===0);},900);return;}else{g.state='no';sfx('no');render(true);return;}}
    render(true);}
  else if(a==='salhint'){const g=S.game;if(!g||g.type!=='salat')return;g.hint++;for(let q=0;q<g.word.length;q++){const want=g.word[q];const cur=g.sel[q]!=null?g.pool[g.sel[q]].c:null;if(cur!==want){if(g.sel[q]!=null){g.pool[g.sel[q]].used=false;g.sel[q]=null;}const k=g.pool.findIndex(function(p){return !p.used&&p.c===want;});if(k>=0){g.pool[k].used=true;g.sel[q]=k;}break;}}render(true);}
  else if(a==='gk'){const g=S.game;if(!g||g.type!=='galgen'||g.state!=='play')return;const c=d.v;if(g.guess[c])return;g.guess[c]=true;
    if(g.word.indexOf(c)>=0){sfx('ok');if(g.word.split('').every(function(x){return g.guess[x];})){g.state='won';confetti&&0;}}else{sfx('no');g.lives--;if(g.lives<=0)g.state='lost';}render(true);}
  else if(a==='mkcheck'){const g=S.game;if(!g||g.type!=='diktat'||g.state!=='play')return;const el=document.getElementById('dk');g.val=el?el.value:'';if(!g.val.trim()){toast('Schreibe zuerst das Wort.');return;}const okk=check(g.val,gEn(g.ids[g.i]));if(S.gs&&S.gs.dikt==='now'){g.state=okk?'ok':'no';sfx(g.state==='ok'?'ok':'no');render(true);}else{mkNext(g,okk);}}
  else if(a==='mkspeak'){const g=S.game;if(g)mkSay(g);}
  else if(a==='mkskip'){const g=S.game;if(!g)return;if(g.type==='diktat'){if(S.gs&&S.gs.dikt==='now'){g.state='no';render(true);}else{g.val='';mkNext(g,false);}}else if(g.type==='salat'){mkNext(g,false);}}
  else if(a==='mknext'){const g=S.game;if(!g)return;const ok=(g.type==='galgen')?g.state==='won':(g.type==='diktat'?g.state==='ok':true);mkNext(g,ok);}
  else if(a==='clipctl'){const g=S.game;if(!g||g.type!=='clip')return;const v=d.v;
    if(v==='pause'||v==='tap'){g.paused=!g.paused;const pb=document.getElementById('clippb');if(pb)pb.textContent=g.paused?'▶':'⏸';const pz=document.getElementById('clippz');if(pz){if(g.paused)pz.removeAttribute('hidden');else pz.setAttribute('hidden','');}
      if(g.paused){clearTimeout(g.tm);clipFreeze(g);try{speechSynthesis.cancel();}catch(e){}}else{clipProg(g);clipPlan(g);}}
    else if(v==='next'){clipNext(g,1);}else if(v==='prev'){clipNext(g,-1);}
    else if(v==='speak'){const id=g.ids[g.i];clipSay(clipSteps(id)[g.step]==='ex'&&E[id]?E[id]:gEn(id));}
}
  else if(a==='brpick'){brPick(parseInt(d.i,10));}
  else if(a==='brnext'){brNext();}
  else if(a==='brquiz'){const g=S.game;if(!g||!g.miss.length)return;S.b='all';S.free=true;S.dir='de';startQuiz('mc',g.miss.slice());}
  else if(a==='clipquiz'){const g=S.game;if(!g)return;S.b='all';S.free=true;S.dir='en';startQuiz('mc',g.ids.slice());}
  else if(a==='gostart'){beginGame(d.v);if(d.v==='pod'||d.v==='story'){act('storygo');}}
  else if(a==='vprev'){if(!window.speechSynthesis){toast('Vorlesen geht auf diesem Gerät nicht.');return;}
    const en=enVoices();const sel=document.getElementById(d.v==='a'?'va':(d.v==='c'?'vc':'vb'));const nm=sel&&sel.value;let v=nm?VOICES.filter(function(x){return x.name===nm;})[0]:null;
    if(!v)v=(d.v==='b')?(en.filter(function(x){return !en[0]||x.name!==en[0].name;})[0]||en[0]):en[0];
    const u=new SpeechSynthesisUtterance(d.v==='a'?'Hi! This is voice A. Ready to learn some words?':(d.v==='c'?'Hello! This is how I will read your words.':'Hello! This is voice B. Let us practise together.'));u.lang='en-GB';if(v){try{u.voice=v;u.lang=v.lang;}catch(e){}}u.rate=({slow:0.82,normal:0.95,fast:1.08}[(S.gs&&S.gs.tempo)||'normal'])||0.95;
    try{speechSynthesis.cancel();speechSynthesis.speak(u);}catch(e){}if(!v)toast('Keine englische Stimme gefunden.');}
  else if(a==='lastres'){const t=d.v;if(P.story&&P.story.type===t){S.game={type:t,busy:false,err:'',res:P.story,started:true};render();}}
  else if(a==='gset'){if(!S.gs)return;const k=d.key;let v=d.v;if(k==='n')S.gs.n[S.game.type]=parseInt(v,10);else if(k==='src'||k==='tempo'||k==='stufe'||k==='expl'||k==='variant'||k==='mode'||k==='clipsound'||k==='dikt'||k==='mean'||k==='rep'||k==='peek'||k==='dmode')S.gs[k]=v;else if(k==='allV')S.gs.allV=(v==='1');render(true);}
  else if(a==='fbopen'){S.fb=S.fb||{kind:'bug',text:'',dev:true};S.screen='feedback';render();}
  else if(a==='fbset'){const t=document.getElementById('fbt');if(t)S.fb.text=t.value;S.fb.kind=d.v;render(true);}
  else if(a==='fbsend'){const t=document.getElementById('fbt');S.fb.text=t?t.value:S.fb.text;const dv=document.getElementById('fbd');S.fb.dev=dv?dv.checked:S.fb.dev;
    if(!S.fb.text.trim()){toast('Schreibe zuerst etwas.');return;}
    const kind={bug:'Fehler',idea:'Idee',praise:'Lob'}[S.fb.kind];
    let msg='EasyVocab Feedback ('+kind+')\n\n'+S.fb.text.trim();
    if(S.fb.dev)msg+=errTxt()+'\n\n---\nVersion 76 · Bildschirm '+innerWidth+'x'+innerHeight+' · '+(isDark()?'dunkel':'hell')+' · '+(P.look==='vivid'?'Lebendig':'Natürlich')+' · Glas '+(P.glass==null?2:P.glass)+' · Schrift '+(P.fontSize||'M')+' · '+(navigator.userAgent||'').replace(/\s+/g,' ').slice(0,120);
    const copy=function(){try{navigator.clipboard.writeText(msg).then(function(){toast('Feedback kopiert. Schick es per Nachricht weiter.');},function(){S.fbtext=msg;toast('Kopieren blockiert. Markiere den Text unten und kopiere ihn selbst.');render(true);});}catch(e){S.fbtext=msg;render(true);}};
    if(navigator.share){navigator.share({title:'EasyVocab Feedback',text:msg}).catch(function(){});}else copy();}
  else if(a==='storygo'){const g=S.game;if(!g||g.busy||!aiOK())return;const pod=g.type==='pod';const ids=gameIds(S.gs.n[g.type],S.gs.src,S.gs.list);if(ids.length<3){toast('Dafür gibt es hier zu wenige Wörter.');return;}
    if(((P.aiDays&&P.aiDays[fmt(new Date())])||0)>=30&&!S.aiWarned){S.aiWarned=true;toast('Heute schon 30 KI-Anfragen. Tippe nochmal, wenn du weitermachen willst.');return;}
    g.started=true;g.busy=true;g.err='';render(true);aiTrack();
    AI.json(storyPrompt(pod,ids),{modelTier:'quick'}).then(function(r){
      if(!r||typeof r!=='object')throw {code:'empty_completion'};
      const res={type:g.type,ids:ids,title:String(r.title||'').slice(0,60)};
      if(pod){const lines=(Array.isArray(r.lines)?r.lines:[]).filter(function(l){return l&&typeof l.t==='string'&&l.t.trim();}).slice(0,16).map(function(l){return {s:String(l.s||'A').slice(0,1).toUpperCase()==='B'?'B':'A',t:String(l.t).slice(0,240)};});if(lines.length<3)throw {code:'empty_completion'};res.lines=lines;res.de=(Array.isArray(r.de)?r.de:[]).map(function(t){return String(t).slice(0,260);}).slice(0,lines.length);}
      else{const t=String(r.text||'').trim().slice(0,1600);if(t.length<30)throw {code:'empty_completion'};res.text=t;res.deText=String(r.deText||'').slice(0,1800);}
      res.notes=(Array.isArray(r.notes)?r.notes:[]).filter(function(n){return n&&n.w&&n.de;}).slice(0,16).map(function(n){return {w:String(n.w).slice(0,40),de:String(n.de).slice(0,60),tip:String(n.tip||'').slice(0,120)};});
      P.story=res;save();g.res=res;g.busy=false;if(S.screen==='game'&&S.game===g)render(true);
    }).catch(function(e){g.busy=false;g.started=false;g.err=aiErr(e&&e.code);toast(g.err);if(S.screen==='game'&&S.game===g)render(true);});}
  else if(a==='storyplay'){const g=S.game;if(!g||!g.res)return;const r=g.res;
    let items=r.type==='pod'?r.lines.map(function(l){return {t:l.t,v:l.s==='A'?0:1,k:'en'};}):(r.text.match(/[^.!?]+[.!?]*/g)||[r.text]).map(function(t){return {t:t.trim(),v:0,k:'en'};});
    if(r.type==='pod'&&S.gs&&S.gs.expl==='on'&&(r.notes||[]).length){items.push({t:'Und jetzt die Wörter noch einmal auf Deutsch.',v:0,k:'de'});r.notes.slice(0,8).forEach(function(n){items.push({t:n.w,v:0,k:'en'});items.push({t:n.de+(n.tip?'. '+n.tip:''),v:0,k:'de'});});}
    if(r.type==='story'&&S.gs&&S.gs.expl==='on'&&(r.notes||[]).length){items.push({t:'Und jetzt die Wörter noch einmal auf Deutsch.',v:0,k:'de'});r.notes.slice(0,8).forEach(function(n){items.push({t:n.w,v:0,k:'en'});items.push({t:n.de+(n.tip?'. '+n.tip:''),v:0,k:'de'});});}
    storySpeak(items,r.type==='story');}
  else if(a==='storystop'){S.speakGo=false;try{speechSynthesis.cancel();}catch(e){}}
  else if(a==='wordtip'){const id=parseInt(d.id,10);toast(gEn(id)+' = '+gShort(W[id][1]));}
  else if(a==='wordopen'){S.wid=parseInt(d.id,10);S.wordBack=S.screen==='search'?'search':(isRoot(S.screen)?S.screen:'words');if(isRoot(S.screen))S.from=S.screen;S.screen='word';render();}
  else if(a==='wordsave'){const id=S.wid;const c=P.custom[id-BASE];if(!c)return;const en=document.getElementById('we').value.trim(),de=document.getElementById('wd').value.trim(),ex=document.getElementById('wx').value.trim();if(!en||!de){toast('Wort und Übersetzung ausfüllen.');return;}c.en=en;c.de=de;c.ex=ex;W[id]=[en,de];E[id]=ex;BC=null;save();render(true);toast('Gespeichert.');}
  else if(a==='worddel'){const id=S.wid;if(S.confirmWord!==id){S.confirmWord=id;render(true);setTimeout(function(){S.confirmWord=-1;if(S.screen==='word')render(true);},4000);return;}const c=P.custom[id-BASE];if(c){c.del=true;BC=null;S.confirmWord=-1;save();S.screen=S.wordBack||'words';render();toast('Wort gelöscht.');}}
  else if(a==='petopen'){S.pet=d.v;S.petBack=S.screen;if(isRoot(S.screen))S.from=S.screen;S.screen='pet';render();setTimeout(function(){petSay(S.pet);},120);}
  else if(a==='petsay'){petSay(d.v);hearts();const b=document.querySelector('.petbig .am');if(b){b.style.animation='none';void b.offsetWidth;b.style.animation='avJoy .5s ease-out';}}
  else if(a==='feed'){if(!P.avatar)return;const hh=(Date.now()-(P.fedAt||0))/36e5;if(hh<6){toast(petName(P.avatar)+' ist noch satt.');return;}const free=dayCount()>=5;if(!free&&P.coins<3){toast('Dir fehlen Münzen. Lerne ein paar Wörter, dann gibt es das Futter gratis.');return;}if(!free)P.coins-=3;P.fedAt=Date.now();earnXp(5);save();render(true);petSay(P.avatar);toast(petName(P.avatar)+' ist satt. Danke!');}
  else if(a==='empick'){S.emPick=!S.emPick;render(true);}
  else if(a==='setemoji'){P.emoji=(d.v==='🙂')?'':(d.v||'');P.avatar='';save();render(true);}
  else if(a==='profile'){setFrom();S.screen='profile';render();}
  else if(a==='shop'){setFrom();S.screen='shop';render();}
  else if(a==='buyxp'){if(P.coins>=XPB_COST){P.coins-=XPB_COST;activateXpBoost(60);save();render(true);toast('Doppel-XP aktiv, 1 Stunde ⭐');}else toast('Noch zu wenig Münzen.');}
  else if(a==='usetoken'){if(P.tokens>0){P.tokens--;activateXpBoost(60);save();render(true);toast('Doppel-XP aktiv, 1 Stunde ⭐');}}
  else if(a==='buyboost'){if(P.coins>=BOOST_COST&&(P.boostUntil||0)<=Date.now()){P.coins-=BOOST_COST;P.boostUntil=Date.now()+864e5;save();render(true);toast('Münz-Boost aktiv, 24 Stunden.');}}
  else if(a==='buyav'){const av=d.v;if(AVATARS.indexOf(av)>=0&&!P.owned[av]&&P.coins>=avPrice(av)){P.coins-=avPrice(av);P.owned[av]=true;P.avatar=av;P.fedAt=Date.now();save();render(true);toast('Avatar gekauft und angelegt.');}}
  else if(a==='equip'){const av=d.v||'';if(!av||myAvatars().indexOf(av)>=0){if(av&&av!==P.avatar)P.fedAt=Date.now();P.avatar=av;save();render(true);}}
  else if(a==='collclaim'){const key=weekKey();const wi=weekInfo(0);if(!P.coll[key]&&wi.days>=(P.weekGoal||4)){P.coll[key]=weeklyEmoji();if(!P.avatar){P.avatar=P.coll[key];P.fedAt=Date.now();}save();render(true);toast('Sammelobjekt geholt: '+P.coll[key]);}}
  else if(a==='buyfreeze'){if(P.coins>=FREEZE_COST&&(P.freeze||0)<3){P.coins-=FREEZE_COST;P.freeze=(P.freeze||0)+1;save();render(true);toast('Eisschutz gekauft.');}else if((P.freeze||0)>=3)toast('Du kannst höchstens 3 haben.');else toast('Noch zu wenig Münzen.');}
  else if(a==='sharelist'){const k=parseInt(d.k,10);const txt=range(k).map(function(id){return W[id][0]+' = '+W[id][1];}).join('\n');const done=function(){toast('Liste kopiert. Zum Einfügen: Wörter hinzufügen > Einfügen.');};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,function(){S.share=txt;render(true);});}else{S.share=txt;render(true);}}
  else if(a==='examtest'){simStart(parseInt(d.id,10));}
  else if(a==='closeshare'){S.share='';render(true);}
  else if(a==='bgpick'){if(d.v==='natural'){P.look='natural';}else if(BGP[d.v]){P.look='vivid';P.bg=d.v;}save();applyBg();applyGlass();render(true);}
  else if(a==='cloudsave'){cloudSave(false);}
  else if(a==='cloudrestore'){const f=S.cloudFound;S.cloudFound=null;if(f)doImport(f.txt);}
  else if(a==='clouddismiss'){S.cloudFound=null;render(true);toast('Du fängst neu an. Neuer Fortschritt ersetzt die Cloud-Sicherung.');}
  else if(a==='cloudload'){if(!S.confirmCloud){S.confirmCloud=true;render(true);setTimeout(function(){S.confirmCloud=false;if(S.screen==='settings')render(true);},5000);toast('Tippe nochmal auf Sicher?, um die Cloud-Sicherung zu laden. Dein Stand auf diesem Gerät wird ersetzt.');}else{S.confirmCloud=false;cloudLoad();}}
  else if(a==='badgesall'){S.badgesAll=!S.badgesAll;render(true);}
  else if(a==='manual'){S.add.manual=!S.add.manual;render(true);}
  else if(a==='lookup'){
    const q=document.getElementById('a-q');const v=q?q.value.trim():'';if(!v){toast('Gib zuerst ein Wort ein.');return;}
    if(!aiOK()||S.add.sbusy)return;
    S.add.sq=v;S.add.sbusy=true;S.add.serr='';S.add.sres=null;render(true);aiTrack();
    const auto=(S.add.lang==='auto');const L=auto?'Englisch, Französisch oder Latein':LNAME[S.add.lang];const LL=auto?'der erkannten Fremdsprache':L;
    const prompt='Ich lerne '+L+'. Eingabe: "'+v.replace(/"/g,"'")+'". Erkenne, ob die Eingabe Deutsch oder '+(auto?'eine dieser Sprachen':L)+' ist'+(auto?' und welche Fremdsprache gemeint ist (Feld l: en, fr oder la; im Zweifel en)':'')+', und gib das Vokabelpaar zurück. Antworte NUR mit JSON: {"l":"en|fr|la","f":"Wort in '+LL+' (bei englischen Verben mit to; bei französischen und lateinischen Nomen mit Artikel bzw. Genus, zum Beispiel la maison)","d":"deutsche Übersetzung. Bei Nomen IMMER mit bestimmtem Artikel (der, die, das), zum Beispiel der Apfel. Bei mehreren Bedeutungen mit Semikolon, höchstens 3","ex":"ein typischer, einfacher Schulbuch-Beispielsatz in '+LL+' mit dem Wort, höchstens 12 Wörter","t":Themennummer,"e":"ein einzelnes Emoji, nur wenn es das Wort wirklich anschaulich macht, sonst leer"}. Themen: '+TOPICS.slice(0,9).map(function(t,i){return i+' '+t.n;}).join(', ')+'.';
    AI.json(prompt,{modelTier:'quick'}).then(function(r){
      const f=String((r&&r.f)||'').trim(),dd=String((r&&r.d)||'').trim();if(!f||!dd)throw {code:'empty_completion'};
      S.add.sres={l:(['en','fr','la'].indexOf(r&&r.l)>=0?r.l:null),f:f,d:dd,ex:String((r&&r.ex)||'').trim(),t:(Number.isInteger(r.t)&&r.t>=0&&r.t<=8)?r.t:9,e:(typeof r.e==='string'&&/^[^\x00-\x7F]{1,10}$/.test(r.e.trim()))?r.e.trim():''};
      S.add.sbusy=false;render(true);
    }).catch(function(e){S.add.sbusy=false;S.add.serr=aiErr(e&&e.code);render(true);});}
  else if(a==='savesingle'){
    const r=S.add.sres;if(!r)return;const n=document.getElementById('a-name');if(n)S.add.name=n.value;
    const lgR=langOf(document.getElementById('r-f').value,document.getElementById('r-d').value,(S.add.lang==='auto'&&r.l)?r.l:null);const res=addWord(document.getElementById('r-f').value,document.getElementById('r-d').value,document.getElementById('r-ex').value,r.t,lgR,S.add.name,r.e);
    if(res==='bad'){toast('Wort und Übersetzung ausfüllen.');return;}
    if(res==='dup'){toast('Dieses Wort gibt es schon.');return;}
    const note=langNote(lgR);save();S.add.sres=null;S.add.sq='';render(true);toast('Gespeichert.'+(S.add.lang==='auto'?' Sprache: '+LNAME[lgR]+'.':'')+note);setTimeout(function(){const el=document.getElementById('a-q');if(el)el.focus();},0);}
  else if(a==='pasteclip'){
    const put=function(t){const ta=document.getElementById('a-bulk');if(ta){ta.value=t;S.add.bulk=t;const bi=document.getElementById('bulkinfo');if(bi)bi.innerHTML=bulkInfoHtml(t);}};
    if(navigator.clipboard&&navigator.clipboard.readText){navigator.clipboard.readText().then(put,function(){toast('Einfügen nicht erlaubt. Halte im Feld gedrückt und wähle Einfügen.');});}
    else toast('Halte im Feld gedrückt und wähle Einfügen.');}
  else if(a==='undo'){undoLast();}
  else if(a==='speaktest'){speakTest();}
  else if(a==='delw'){const id=parseInt(d.id,10);const c=P.custom[id-BASE];if(c){c.del=true;BC=null;save();S.wundo={id:id,at:Date.now()};render(true);clearTimeout(S.wundoT);S.wundoT=setTimeout(function(){S.wundo=null;const b=document.querySelector('.undob[data-act="wundo"]');if(b)b.remove();},7000);}}
  else if(a==='wundo'){const u=S.wundo;if(!u)return;const c=P.custom[u.id-BASE];if(c){c.del=false;BC=null;save();}S.wundo=null;render(true);toast('Wort wiederhergestellt');}
  else if(a==='copywords'){const t=allIds().filter(function(i){return i>=BASE;}).map(function(i){return W[i][0]+' = '+W[i][1];}).join('\n');try{navigator.clipboard.writeText(t).then(function(){toast('Kopiert');},function(){toast('Kopieren nicht möglich');});}catch(e){toast('Kopieren nicht möglich');}}
  else if(a==='addexam'){
    const name=document.getElementById('ex-name').value.trim();const date=document.getElementById('ex-date').value;
    S.form.name=name;S.form.date=date;
    const sel=[];document.querySelectorAll('.xl.on').forEach(function(c){sel.push(parseInt(c.getAttribute('data-k'),10));});
    S.form.sel=sel.length===nb()?null:sel;
    if(!date){S.formErr='Wähle ein Datum.';render(true);return;}
    if(date<fmt(new Date())){S.formErr='Das Datum liegt in der Vergangenheit.';render(true);return;}
    if(!sel.length){S.formErr='Wähle mindestens eine Liste.';render(true);return;}
    let ids=[];sel.forEach(function(k){ids=ids.concat(range(k));});
    P.exams.push({id:Date.now(),name:name||'Klausur',date:date,ids:ids});const fc=document.getElementById('ex-focus');if(fc&&fc.checked)P.focus=(sel.length===nb())?[]:sel.slice();save();S.form={name:'',date:'',sel:null};S.formErr='';S.formOpen=false;render();toast('Klausur gespeichert');}
  else if(a==='xrow'){const el=document.querySelector('.xl[data-k="'+d.k+'"]');if(el){el.classList.toggle('on');updSel2();}}
  else if(a==='xall'){const all=document.querySelectorAll('.xl');const on=document.querySelectorAll('.xl.on');const to=on.length!==all.length;all.forEach(function(c){c.classList.toggle('on',to);});updSel2();}
  else if(a==='toggleform'){const n=document.getElementById('ex-name'),dt=document.getElementById('ex-date');if(n){S.form.name=n.value;S.form.date=dt.value;}S.formOpen=!S.formOpen;S.formErr='';render();}
  else if(a==='qd'){const el=document.getElementById('ex-date');if(el)el.value=addDays(parseInt(d.v,10));}
  else if(a==='topicgo'){setFrom();S.b='t'+d.k;S.pend='auto';S.screen='pickdir';render();}
  else if(a==='wmode'){S.wmode=d.v;render(true);}
  else if(a==='reveal'){Q.rev=true;render();}
  else if(a==='inkundo'){Q.strokes.pop();inkRedraw();}
  else if(a==='inkclear'){Q.strokes=[];inkRedraw();const hh=document.querySelector('.inkw');if(hh)hh.classList.remove('has');}
  else if(a==='delexam'){P.exams=P.exams.filter(function(e){return e.id!==parseInt(d.id,10);});save();render();}
  else if(a==='roundlen'){const n=parseInt(d.v,10);if(S.screen==='pickdir'&&S.pend==='cards')P.flashcardCount=n;else if(S.screen==='pickdir')P.quizLength=n;else{P.quizLength=n;P.flashcardCount=n;}save();render(true);}
  else if(a==='set'){P[d.key]=pv(d.v);if(d.key==='age'){ageApply(P.age);toast('Angepasst: Ziel, Schrift und Stil passen jetzt zum Alter.');}if(d.key==='lang2'){BC=null;}if(d.key==='darkMode'){P.darkMode=pv(d.v);}save();applyPrefs();render(true);}
  else if(a==='copy'){P.lastBackup=Date.now();save();const txt=encodeBackup();const fb=function(){S.bk=txt;render();};try{navigator.clipboard.writeText(txt).then(function(){S.bk='';render();toast('Kopiert. Füge es jetzt in eine Notiz ein.');},fb);}catch(e){fb();}}
  else if(a==='paste'){if(navigator.clipboard&&navigator.clipboard.readText){navigator.clipboard.readText().then(function(t){if(!t.trim()){S.paste=true;render();toast('Zwischenablage ist leer');return;}doImport(t);},function(){S.paste=true;render();toast('Bitte füge die Sicherung unten ein');});}else{S.paste=true;render();}}
  else if(a==='import'){const el=document.getElementById('imp');const v=el?el.value.trim():'';if(!v){toast('Füge zuerst die Sicherung ein.');return;}doImport(v);}
  else if(a==='reset'){
    if(S.confirmReset){const keep={custom:P.custom,exams:P.exams,onb:1,dailyGoal:P.dailyGoal,quizLength:P.quizLength,flashcardCount:P.flashcardCount,fontSize:P.fontSize,shuffleCards:P.shuffleCards,haptic:P.haptic,sfx:P.sfx,mins:P.mins,weekGoal:P.weekGoal,weekPaid:P.weekPaid,autoNext:P.autoNext,examSec:P.examSec,xp:P.xp,xpBoostUntil:P.xpBoostUntil,tokens:P.tokens,marathonDay:P.marathonDay,owned:P.owned,nick:P.nick,emoji:P.emoji,fedAt:P.fedAt,avatar:P.avatar,boostUntil:P.boostUntil,coll:P.coll,loginDay:P.loginDay,look:P.look,accent:P.accent,coins:P.coins,freeze:P.freeze,frozen:P.frozen,avgSec:P.avgSec,darkMode:P.darkMode,remindersEnabled:P.remindersEnabled,remHour:P.remHour,speak:P.speak,bg:P.bg,bgMotion:P.bgMotion,lang2:P.lang2,aiOn:P.aiOn,glass:P.glass,memo:P.memo,aiCalls:P.aiCalls,aiDays:P.aiDays,emo:P.emo};P=Object.assign(DEF(),keep);save();S.confirmReset=false;render();toast('Fortschritt zurückgesetzt');}
    else{S.confirmReset=true;render();toast('Noch einmal tippen zum Löschen');}}
}
document.addEventListener('click',function(e){const t=e.target.closest('[data-act]');if(!t)return;if(t.getAttribute('data-act')!=='reset'&&S.confirmReset){S.confirmReset=false;}act(t.getAttribute('data-act'),{d:t.getAttribute('data-d'),k:t.getAttribute('data-k'),id:t.getAttribute('data-id'),i:t.getAttribute('data-i'),v:t.getAttribute('data-v'),key:t.getAttribute('data-key')});});
document.addEventListener('change',function(e){const t=e.target;if(!t.getAttribute)return;
  if(t.id==='gl'&&S.gs){S.gs.list=parseInt(t.value,10)||0;render(true);return;}
  if(t.id==='va'){P.vA=t.value;save();return;}
  if(t.id==='vb'){P.vB=t.value;save();return;}
  if(t.id==='vc'){P.vC=t.value;save();return;}
  if(t.id==='scan-file'){const fs=Array.prototype.slice.call(t.files||[],0,8);if(fs.length){if((t.files||[]).length>8)toast('Es werden die ersten 8 Fotos gelesen.');Promise.all(fs.map(downscale)).then(function(bs){scanRun(bs,'quick');});}t.value='';return;}
  if(t.getAttribute('data-fi')!==null&&S.add.found){const i=parseInt(t.getAttribute('data-fi'),10);S.add.found.words[i].on=t.checked;const nn=S.add.found.words.filter(function(w){return w.on;}).length;const bt=document.getElementById('savecnt');if(bt)bt.textContent=nn+' Wörter speichern';return;}
  if(t.getAttribute('data-blk')){S.b=(t.value==='all'||t.value==='focus'||/^t\d+$/.test(t.value))?t.value:parseInt(t.value,10);render();return;}
  });
document.addEventListener('input',function(e){const t=e.target;
  if(t&&t.id==='nick'){P.nick=t.value.slice(0,16);save();return;}
  if(t&&t.id==='ob-name'&&S.ob){S.ob.name=t.value;const nb=document.querySelector('[data-act=obnext]');if(nb)nb.disabled=!t.value.trim();return;}
  if(t&&t.getAttribute&&t.getAttribute('data-fe')&&S.add.found){const w=S.add.found.words[parseInt(t.getAttribute('data-i'),10)];if(w)w[t.getAttribute('data-fe')]=t.value;return;}
  if(t&&t.id==='a-bulk'){S.add.bulk=t.value;const bi=document.getElementById('bulkinfo');if(bi)bi.innerHTML=bulkInfoHtml(t.value);return;}
  if(t&&t.id==='sq'){const was=!!(S.sq||'').trim();S.sq=t.value;const now=!!S.sq.trim();if(was!==now){render(true);const el=document.getElementById('sq');if(el){el.focus();try{el.setSelectionRange(el.value.length,el.value.length);}catch(e){}}}else setFilter();return;}
  if(t&&t.id==='gq'){S.gq=t.value;const r=document.getElementById('gres');if(r)r.innerHTML=searchBody(S.gq);return;}
  if(t&&t.id==='wq'){S.q=t.value;const r=document.getElementById('wres');if(r)r.innerHTML=wordsBody(S.q);return;}
  if(t&&(t.id==='rg-lo'||t.id==='rg-hi')){
    const a=document.getElementById('rg-lo'),b=document.getElementById('rg-hi');let lo=parseInt(a.value,10),hi=parseInt(b.value,10);
    if(lo>hi){if(t===a){hi=lo;b.value=hi;}else{lo=hi;a.value=lo;}}
    S.form.lo=lo;S.form.hi=(lo===0&&hi===nb()-1)?-1:hi;rangeFill(lo,hi);
  }});
document.addEventListener('toggle',function(e){if(e.target&&e.target.id==='adv')S.adv=e.target.open;},true);
window.addEventListener('offline',function(){try{toast('Offline: Lernen klappt weiter. KI und Sync pausieren.');}catch(e){}});window.addEventListener('online',function(){try{toast('Wieder online.');}catch(e){}});
document.addEventListener('keydown',function(e){
  const tag=e.target&&e.target.tagName;
  if(e.key==='Enter'&&e.target&&e.target.id==='dk'){e.preventDefault();act(S.game&&S.game.state==='play'?'mkcheck':'mknext');return;}
  if(e.key==='Enter'&&e.target&&e.target.id==='a-q'){e.preventDefault();act('lookup');return;}
  if(e.key==='Enter'&&e.target&&e.target.id==='co-in'){e.preventDefault();act('cosend');return;}
  if(e.key==='Enter'&&e.target&&e.target.id==='call-in'){e.preventDefault();act('calltype');return;}
  if(e.key==='Enter'&&e.target&&(e.target.id==='r-ex'||e.target.id==='a-ex')){e.preventDefault();act(e.target.id==='r-ex'?'savesingle':'addw');return;}
  if(S.screen==='game'&&S.game&&!S.game.over&&S.game.type==='blitz'&&S.game.q&&tag!=='INPUT'&&tag!=='TEXTAREA'&&tag!=='SELECT'&&/^[1-9]$/.test(e.key)){const n=parseInt(e.key,10)-1;if(S.game.q.opts[n]!==undefined){e.preventDefault();act('bopt',{i:String(n)});}return;}
  if(S.screen==='cloze'&&S.cloze&&tag!=='INPUT'){const c=S.cloze;if(/^[1-4]$/.test(e.key)&&c.pick<0&&c.i<c.items.length){e.preventDefault();act('clzopt',{i:String(parseInt(e.key,10)-1)});}else if((e.key==='Enter'||e.key==='ArrowRight')&&c.pick>=0&&tag!=='BUTTON'){e.preventDefault();act('clznext');}return;}
  if(S.screen==='conf'&&S.conf&&tag!=='INPUT'){const c=S.conf;if((e.key==='1'||e.key==='2')&&!c.pick&&c.i<c.items.length){e.preventDefault();act('confopt',{v:e.key==='1'?'a':'b'});}else if((e.key==='Enter'||e.key==='ArrowRight')&&c.pick&&tag!=='BUTTON'){e.preventDefault();act('confnext');}return;}
  if(S.screen==='feed'&&tag!=='INPUT'&&tag!=='TEXTAREA'){const fe=document.getElementById('feed');const ci=feedCurrent();if(e.key==='ArrowDown'){e.preventDefault();if(fe)fe.scrollBy({top:fe.clientHeight,behavior:'smooth'});}else if(e.key==='ArrowUp'){e.preventDefault();if(fe)fe.scrollBy({top:-fe.clientHeight,behavior:'smooth'});}else if(e.key==='ArrowRight'||e.key==='l'){e.preventDefault();feedReveal(ci);feedRate(ci,true);}else if(e.key==='ArrowLeft'||e.key==='x'){e.preventDefault();feedReveal(ci);feedRate(ci,false);}else if((e.key===' '||e.key==='Enter')&&tag!=='BUTTON'){e.preventDefault();feedReveal(ci);}return;}
  if(S.screen==='learn'){
    if(tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT')return;
    if(e.key==='ArrowRight'){act('next');}else if(e.key==='ArrowLeft'){act('prev');}else if(e.key===' '&&tag!=='BUTTON'){e.preventDefault();act('flip');}
    return;}
  if(S.screen!=='quiz'||!Q)return;
  if(Q.m==='intro'){if(e.key==='Enter'&&tag!=='BUTTON'){e.preventDefault();act('got');}return;}
  if(Q.m==='mc'&&!Q.answered&&/^[1-4]$/.test(e.key)){const n=parseInt(e.key,10)-1;if(Q.opts[n]!==undefined)act('opt',{i:String(n)});return;}
  if(Q.m==='cards'){
    if(e.key===' '&&tag!=='BUTTON'){e.preventDefault();act('qflip');return;}
    const fl=document.getElementById('fc');
    if(fl&&fl.classList.contains('flipped')){if(e.key==='ArrowLeft'){act('know',{v:'0'});}else if(e.key==='ArrowRight'){act('know',{v:'1'});}}
    return;}
  if(e.key!=='Enter'||(tag==='BUTTON'&&!(Q.answered&&e.target.getAttribute('data-act')==='opt')))return;
  if(Q.answered&&!Q.test){e.preventDefault();cont();}
  else if(!Q.answered&&Q.m==='type'){e.preventDefault();typeCheck();}
});
function PZ(){return 1;}
const PL={has:false,x:0,v:0,t:0,tw:0,pad:6,raf:0,ts:0,press:false,drag:false,bar:null,pill:null,bw:0};
function pillCenter(i){return PL.pad+i*PL.tw+PL.tw/2;}
function clampT(x){return Math.max(PL.pad+PL.tw/2,Math.min(PL.bw-PL.pad-PL.tw/2,x));}
function pillApply(){
  if(!PL.pill||!PL.bar)return;
  const sp=Math.abs(PL.v);
  const sx=1+Math.min(0.42,sp/1300)+(PL.press?0.14:0);
  const sy=1-Math.min(0.12,sp/4500)+(PL.press?0.14:0);
  PL.pill.style.transform='translate3d('+(PL.x-PL.tw/2).toFixed(1)+'px,0,0) scale('+sx.toFixed(3)+','+sy.toFixed(3)+')';
  PL.pill.style.opacity=(tabIndex()<0&&!PL.drag)?'0':'1';
  const near=Math.round((PL.x-PL.pad-PL.tw/2)/PL.tw);
  PL.bar.querySelectorAll('.tab').forEach(function(tb,i){
    const ic=tb.querySelector('.ti');const d=Math.abs(PL.x-pillCenter(i))/PL.tw;
    if(ic)ic.style.transform='scale('+(1+0.34*Math.max(0,1-d)).toFixed(3)+')';
    tb.classList.toggle('on',(PL.drag||PL.raf)?(i===near):(i===tabIndex()));
  });
}
function pillStep(ts){
  const dt=Math.min(0.032,((ts-(PL.ts||ts))/1000)||0.016);PL.ts=ts;
  const k=PL.drag?420:150,c=PL.drag?32:16;
  const a=k*(PL.t-PL.x)-c*PL.v;PL.v+=a*dt;PL.x+=PL.v*dt;const lo=PL.pad+PL.tw/2,hi=PL.bw-PL.pad-PL.tw/2;if(PL.x<lo){PL.x=lo;PL.v=0;}else if(PL.x>hi){PL.x=hi;PL.v=0;}
  if(Math.abs(PL.t-PL.x)<0.35&&Math.abs(PL.v)<6){PL.x=PL.t;PL.v=0;PL.raf=0;PL.ts=0;pillApply();return;}
  pillApply();PL.raf=requestAnimationFrame(pillStep);
}
function pillSet(t,press){PL.t=t;PL.press=!!press;if(!PL.raf)PL.raf=requestAnimationFrame(pillStep);}
function pillInit(){
  const bar=document.querySelector('.tabbar');const pill=bar?bar.querySelector('.tpill'):null;
  if(!bar||!pill){PL.has=false;return;}
  const r=bar.getBoundingClientRect();const rw=r.width/PZ();const tw=(rw-2*PL.pad)/TABS.length;
  const same=PL.has&&Math.abs(PL.bw-rw)<1;
  PL.bar=bar;PL.pill=pill;PL.tw=tw;PL.bw=rw;pill.style.width=tw+'px';
  const tgt=pillCenter(Math.max(0,tabIndex()));
  if(!same){PL.x=tgt;PL.v=0;}
  PL.has=true;PL.drag=false;pillApply();pillSet(tgt,false);
}
window.addEventListener('resize',function(){if(S.screen==='quiz'&&Q&&Q.m==='write')inkRedraw();PL.has=false;pillInit();});
const SEG=new WeakMap();const SEGPOS={};let segDrag=null;
const RM=(function(){try{return window.matchMedia('(prefers-reduced-motion: reduce)').matches;}catch(e){return false;}})();
function fireAct(t){act(t.getAttribute('data-act'),{d:t.getAttribute('data-d'),k:t.getAttribute('data-k'),id:t.getAttribute('data-id'),i:t.getAttribute('data-i'),v:t.getAttribute('data-v'),key:t.getAttribute('data-key')});}
function segKey(sc){const b=sc.querySelector('button');return b?(b.getAttribute('data-key')||b.getAttribute('data-act')):'x';}
function segEdges(st,i){const b=st.btns[i];return [b.offsetLeft,b.offsetLeft+b.offsetWidth];}
function segApply(st){
  const sc=st.press?1.07:1;
  st.pill.style.width=Math.max(8,st.r-st.l).toFixed(1)+'px';
  st.pill.style.transform='translate3d('+st.l.toFixed(1)+'px,0,0) scale('+sc+')';
  SEGPOS[st.key]=[st.l,st.r];
}
function segStep(st,ts){
  const dt=Math.min(0.032,((ts-(st.ts||ts))/1000)||0.016);st.ts=ts;
  const right=(st.tl+st.tr)/2>(st.l+st.r)/2;
  const kl=right?112:210,kr=right?210:112;
  const cl=2*Math.sqrt(kl)*0.58,cr=2*Math.sqrt(kr)*0.58;
  st.vl+=(kl*(st.tl-st.l)-cl*st.vl)*dt;st.l+=st.vl*dt;
  st.vr+=(kr*(st.tr-st.r)-cr*st.vr)*dt;st.r+=st.vr*dt;
  segApply(st);
  if(Math.abs(st.tl-st.l)<0.3&&Math.abs(st.tr-st.r)<0.3&&Math.abs(st.vl)<4&&Math.abs(st.vr)<4){st.l=st.tl;st.r=st.tr;st.vl=st.vr=0;st.raf=0;st.ts=0;segApply(st);return;}
  st.raf=requestAnimationFrame(function(t){segStep(st,t);});
}
function segKick(st){
  if(RM){st.l=st.tl;st.r=st.tr;segApply(st);return;}
  if(!st.raf)st.raf=requestAnimationFrame(function(t){segStep(st,t);});
}
function segSelect(st,i,live){haptic('tap');
  const e=segEdges(st,i);st.tl=e[0];st.tr=e[1];
  st.btns.forEach(function(b,j){b.classList.toggle('on',j===i);});
  segKick(st);
}
function segInit(){
  document.querySelectorAll('.segc').forEach(function(sc){
    const btns=sc.querySelectorAll('button');if(!btns.length)return;
    let sel=-1;btns.forEach(function(b,i){if(b.classList.contains('on'))sel=i;});
    sc.classList.add('liq');
    const pill=document.createElement('span');pill.className='spill';pill.setAttribute('aria-hidden','true');sc.insertBefore(pill,sc.firstChild);
    const st={sc:sc,pill:pill,btns:btns,key:segKey(sc),l:0,r:0,tl:0,tr:0,vl:0,vr:0,raf:0,ts:0,press:false,sel:sel};
    SEG.set(sc,st);
    if(sel<0){pill.style.opacity='0';return;}
    const e=segEdges(st,sel);st.tl=e[0];st.tr=e[1];
    const prev=SEGPOS[st.key];
    if(prev&&Math.abs(prev[0]-e[0])+Math.abs(prev[1]-e[1])>1){st.l=prev[0];st.r=prev[1];}else{st.l=e[0];st.r=e[1];}
    segApply(st);segKick(st);
  });
}
document.addEventListener('pointerdown',function(e){
  const sc=e.target.closest&&e.target.closest('.segc');if(!sc)return;const st=SEG.get(sc);if(!st||st.sel<0)return;
  const r=sc.getBoundingClientRect();segDrag={st:st,left:r.left,x0:e.clientX,moved:false,idx:st.sel};st.press=true;segKick(st);
});
document.addEventListener('pointermove',function(e){
  if(!segDrag)return;const st=segDrag.st;
  if(Math.abs(e.clientX-segDrag.x0)>6)segDrag.moved=true;if(!segDrag.moved)return;
  const x=e.clientX-segDrag.left;let best=0,bd=1e9;
  st.btns.forEach(function(b,i){const c=b.offsetLeft+b.offsetWidth/2;const dd=Math.abs(x-c);if(dd<bd){bd=dd;best=i;}});
  if(best!==segDrag.idx){segDrag.idx=best;segSelect(st,best,true);}
});
function segEnd(){
  if(!segDrag)return;const d=segDrag;segDrag=null;d.st.press=false;segApply(d.st);
  if(d.moved&&d.idx!==d.st.sel)fireAct(d.st.btns[d.idx]);else segKick(d.st);
}
document.addEventListener('pointerup',segEnd);
/* Hover: Blasen folgen der Maus (und dem Pencil im Schwebemodus) */
/* iOS: vom linken Rand nach rechts wischen = Zurück */
(function(){
  let sx=0,sy=0,on=false,go=false,el=null;
  function bar(){if(!el){el=document.createElement('div');el.className='edge';document.body.appendChild(el);}return el;}
  function canBack(){return !isRoot(S.screen)&&!S.leave&&document.querySelector('[data-act="back"]');}
  document.addEventListener('touchstart',function(e){
    const t=e.touches[0];on=false;go=false;
    if(e.touches.length===1&&t.clientX<=22&&canBack()){on=true;sx=t.clientX;sy=t.clientY;}
  },{passive:true});
  document.addEventListener('touchmove',function(e){
    if(!on)return;const t=e.touches[0],dx=t.clientX-sx,dy=Math.abs(t.clientY-sy);
    if(dy>Math.max(40,dx)){on=false;bar().style.opacity=0;return;}
    const p=Math.max(0,Math.min(1,dx/90));const b=bar();b.style.opacity=p;b.style.transform='scaleX('+(0.4+p*2.6)+')';
    if(p>=1&&!go){go=true;haptic('tap');}else if(p<1)go=false;
  },{passive:true});
  document.addEventListener('touchend',function(){
    if(!on)return;on=false;if(el){el.style.opacity=0;el.style.transform='scaleX(0)';}
    if(go){go=false;try{act('back');}catch(e){}}
  },{passive:true});
  document.addEventListener('touchcancel',function(){on=false;go=false;if(el)el.style.opacity=0;},{passive:true});
})();
/* Langes Drücken auf ein Wort = Aktionsmenü, Menü nach unten ziehen = schließen */
function openWordSheet(id){
  if(id==null||isNaN(id)||id>=W.length||!isAlive(id))return;
  const it=[];if(canSpeakW(id))it.push({i:'🔊',t:'Anhören',a:'speak',id:id});
  it.push({i:'📖',t:'Details ansehen',a:'wordopen',id:id});
  it.push({i:'🚫',t:'Ausblenden',a:'hidew',id:id});
  if(id>=BASE)it.push({i:'🗑️',t:'Wort löschen',a:'delw',id:id,danger:true});
  S.sheet={title:W[id][0],sub:W[id][1],items:it};haptic('tap');render(true);
}
(function(){
  let tm=null,sx=0,sy=0,swallow=0;
  document.addEventListener('touchstart',function(e){
    const t=e.target.closest&&e.target.closest('.wm[data-act="wordopen"]');if(!t||e.touches.length!==1)return;
    sx=e.touches[0].clientX;sy=e.touches[0].clientY;const id=parseInt(t.getAttribute('data-id'),10);
    clearTimeout(tm);tm=setTimeout(function(){tm=null;swallow=Date.now()+700;openWordSheet(id);},480);
  },{passive:true});
  document.addEventListener('touchmove',function(e){if(tm&&(Math.abs(e.touches[0].clientX-sx)>9||Math.abs(e.touches[0].clientY-sy)>9)){clearTimeout(tm);tm=null;}},{passive:true});
  ['touchend','touchcancel'].forEach(function(n){document.addEventListener(n,function(){if(tm){clearTimeout(tm);tm=null;}},{passive:true});});
  document.addEventListener('click',function(e){if(Date.now()<swallow){e.stopPropagation();e.preventDefault();}},true);
  document.addEventListener('contextmenu',function(e){const t=e.target.closest&&e.target.closest('.wm[data-act="wordopen"]');if(t){e.preventDefault();openWordSheet(parseInt(t.getAttribute('data-id'),10));}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&S.sheet){S.sheet=null;render(true);return;}const tg=e.target&&e.target.tagName,typing=tg==='INPUT'||tg==='TEXTAREA'||(e.target&&e.target.isContentEditable);if(((e.metaKey||e.ctrlKey)&&(e.key==='k'||e.key==='K'))||(e.key==='/'&&!typing&&!e.metaKey&&!e.ctrlKey)){if(P.onb&&isRoot(S.screen)&&!S.sheet&&!S.leave){e.preventDefault();act('gsearch',{});}}});
  /* Sheet ziehen */
  let el=null,y0=0,dy=0,t0=0,dr=false;
  document.addEventListener('touchstart',function(e){const g=e.target.closest&&e.target.closest('.sh2 .grab, .sh2 .sht');if(!g)return;el=g.closest('.sh2');y0=e.touches[0].clientY;dy=0;t0=Date.now();dr=true;el.style.transition='none';},{passive:true});
  document.addEventListener('touchmove',function(e){if(!dr||!el)return;dy=Math.max(0,e.touches[0].clientY-y0);el.style.transform='translateY('+dy+'px)';const bk=document.querySelector('.shbk');if(bk)bk.style.opacity=Math.max(0,1-dy/300);},{passive:true});
  document.addEventListener('touchend',function(){if(!dr||!el)return;dr=false;const v=dy/Math.max(1,Date.now()-t0);
    if(dy>90||v>0.6){el.style.transition='transform .22s ease-in';el.style.transform='translateY(110%)';const bk=document.querySelector('.shbk');if(bk)bk.style.opacity=0;setTimeout(function(){S.sheet=null;render(true);},200);}
    else{el.style.transition='transform .3s cubic-bezier(.2,.9,.3,1.2)';el.style.transform='';const bk=document.querySelector('.shbk');if(bk)bk.style.opacity='';}
    el=null;},{passive:true});
})();
let hovBar=false,hovSeg=null;
function segRestore(st){let sel=-1;st.btns.forEach(function(b,i){if(b.classList.contains('on'))sel=i;});if(sel<0)return;const e=segEdges(st,sel);st.tl=e[0];st.tr=e[1];segKick(st);}
document.addEventListener('pointermove',function(e){
  if(e.pointerType==='touch'||e.buttons!==0||drag||segDrag)return;
  const t=e.target&&e.target.closest?e.target:null;if(!t)return;
  const bar=t.closest('.tabbar');
  if(bar&&PL.has){hovBar=true;const r=bar.getBoundingClientRect();pillSet(clampT((e.clientX-r.left)/PZ()),false);}
  else if(hovBar&&PL.has){hovBar=false;pillSet(pillCenter(Math.max(0,tabIndex())),false);}
  const sc=t.closest('.segc');
  if(sc){const st=SEG.get(sc);if(st&&st.sel>=0){hovSeg=st;const x=e.clientX-sc.getBoundingClientRect().left;let best=0,bd=1e9;st.btns.forEach(function(b,i){const c=b.offsetLeft+b.offsetWidth/2;const dd=Math.abs(x-c);if(dd<bd){bd=dd;best=i;}});const ed=segEdges(st,best);st.tl=ed[0];st.tr=ed[1];segKick(st);}}
  else if(hovSeg){const st=hovSeg;hovSeg=null;segRestore(st);}
});
document.addEventListener('pointerleave',function(){if(hovBar&&PL.has){hovBar=false;pillSet(pillCenter(Math.max(0,tabIndex())),false);}if(hovSeg){const st=hovSeg;hovSeg=null;segRestore(st);}},true);
document.addEventListener('pointercancel',function(){if(segDrag){segDrag.st.press=false;segDrag=null;}});
function ctUpdate(){const hd=document.querySelector('.hdr');if(!hd)return;const h1=document.querySelector('main .pt h1');let on=false;if(h1&&hd.querySelector('.ctit')){const r=h1.getBoundingClientRect();on=r.bottom<hd.getBoundingClientRect().bottom+2;}hd.classList.toggle('ct',on);}
window.addEventListener('scroll',function(){const hd=document.querySelector('.hdr');if(hd)hd.classList.toggle('sc',window.scrollY>6);ctUpdate();},{passive:true});
let drag=null,sw=null;
document.addEventListener('pointerdown',function(e){
  const bar=e.target.closest&&e.target.closest('.tabbar');if(!bar||!PL.has)return;
  const r=bar.getBoundingClientRect();drag={left:r.left,x0:e.clientX,moved:false};PL.drag=true;pillSet(clampT((e.clientX-r.left)/PZ()),true);
});
document.addEventListener('pointermove',function(e){if(!drag)return;if(Math.abs(e.clientX-drag.x0)>6)drag.moved=true;pillSet(clampT((e.clientX-drag.left)/PZ()),true);});
function endDrag(){
  if(!drag)return;const moved=drag.moved;drag=null;PL.drag=false;
  const idx=Math.max(0,Math.min(TABS.length-1,Math.round((PL.t-PL.pad-PL.tw/2)/PL.tw)));
  if(moved)act('tab',{k:TABS[idx].k});else pillSet(pillCenter(Math.max(0,tabIndex())),false);
}
document.addEventListener('pointerup',endDrag);
document.addEventListener('pointercancel',endDrag);
document.addEventListener('touchstart',function(e){if(!isRoot(S.screen)||e.target.closest('input,textarea,select,.tabbar,.week,.spark,.hm')){sw=null;return;}sw={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY,live:false};},{passive:true});
document.addEventListener('touchmove',function(e){
  if(!sw||!isRoot(S.screen)||!PL.has)return;
  const dx=e.changedTouches[0].clientX-sw.x,dy=e.changedTouches[0].clientY-sw.y;
  if(Math.abs(dx)<14||Math.abs(dy)>Math.abs(dx)*0.8)return;
  const cur=tabIndex(),dir=dx<0?1:-1;if(cur+dir<0||cur+dir>=TABS.length)return;
  sw.live=true;PL.drag=true;pillSet(pillCenter(cur)+dir*Math.min(1,Math.abs(dx)/200)*PL.tw,true);
},{passive:true});
document.addEventListener('touchend',function(e){
  if(!sw||!isRoot(S.screen)){sw=null;return;}
  const dx=e.changedTouches[0].clientX-sw.x,dy=e.changedTouches[0].clientY-sw.y;const live=sw.live;sw=null;
  const i=tabIndex()+(dx<0?1:-1);
  if(Math.abs(dx)>=80&&Math.abs(dy)<=Math.abs(dx)*0.6&&i>=0&&i<TABS.length){PL.drag=false;act('tab',{k:TABS[i].k});return;}
  if(live){PL.drag=false;pillSet(pillCenter(Math.max(0,tabIndex())),false);}
},{passive:true});
document.addEventListener('pointerdown',function(e){if(e.pointerType==='pen'&&!P.pen){P.pen=true;save();}},true);
aiInit();
try{window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',applyPrefs);}catch(e){}
try{seedPages();}catch(e){}try{lgState();lgRoll();}catch(e){}
render();setTimeout(perfProbe,1500);
setTimeout(cloudCheck,500);setTimeout(cloudQueue,3000);
/* Build 123: iOS-Gesten, Tastatur, Badge, Offline */
(function(){
  let sx=0,sy=0,on=false;
  document.addEventListener('touchstart',function(e){const t=e.touches&&e.touches[0];if(!t)return;on=t.clientX<26&&!isRoot(S.screen)&&!S.sheet&&['onb','tut','call'].indexOf(S.screen)<0;sx=t.clientX;sy=t.clientY;},{passive:true});
  document.addEventListener('touchend',function(e){if(!on)return;on=false;const t=e.changedTouches&&e.changedTouches[0];if(t&&t.clientX-sx>90&&Math.abs(t.clientY-sy)<70){haptic('tap');act('back',{});}},{passive:true});
  document.addEventListener('keydown',function(e){const tg=e.target&&e.target.tagName,typing=tg==='INPUT'||tg==='TEXTAREA'||tg==='SELECT'||(e.target&&e.target.isContentEditable);if(typing||e.metaKey||e.ctrlKey||e.altKey)return;
    if(e.key==='Escape'&&!S.sheet&&!isRoot(S.screen)&&['onb','tut','call'].indexOf(S.screen)<0){act('back',{});return;}
    if(/^[1-5]$/.test(e.key)){const bs=document.querySelectorAll('.opts button:not([disabled])');const b=bs[parseInt(e.key,10)-1];if(b){e.preventDefault();b.click();}}});
  document.addEventListener('click',function(e){const t=e.target;if(!t||!t.closest)return;if(t.id==='toast'){t.className='toast';return;}if(t.closest('.tg,.segc button,.chs .cb'))haptic('tap');});
  document.addEventListener('dblclick',function(e){const h=e.target&&e.target.closest&&e.target.closest('.hdr');if(h&&!e.target.closest('button,[data-act]'))window.scrollTo({top:0,behavior:'smooth'});});
  document.addEventListener('change',function(e){const t=e.target;if(t&&t.id==='gq'){const v=String(t.value||'').trim();if(v.length>=2){P.recentQ=[v].concat((P.recentQ||[]).filter(function(x){return x!==v;})).slice(0,5);save();}}});
  window.addEventListener('offline',function(){toast('Offline. Deine Wörter funktionieren weiter.');});
  window.addEventListener('online',function(){toast('Wieder online.');});
  function badge(){try{if(!navigator.setAppBadge||!P.onb)return;const sp=dueSplit(allIds());const n=(sp&&sp.r)||0;if(n>0)navigator.setAppBadge(n);else navigator.clearAppBadge();}catch(e){}}
  document.addEventListener('visibilitychange',function(){if(document.hidden)badge();});
  window.addEventListener('pagehide',badge);
})();
/* --- Build 129: Sicherheit, Gerätecheck, Startpakete, sanfter Einstieg --- */
function evStandalone(){try{return !!(navigator.standalone||mmq('(display-mode: standalone)')||mmq('(display-mode: fullscreen)'));}catch(e){return false;}}
function evIOS(){try{return /iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);}catch(e){return false;}}
function evTouch(){try{return (navigator.maxTouchPoints||0)>1;}catch(e){return false;}}
const EVX={persist:null,usage:null,quota:null,snaps:null};
function evBytes(n){n=n||0;return n>=1048576?(n/1048576).toFixed(1).replace('.',',')+' MB':Math.max(1,Math.round(n/1024))+' KB';}
function evDataSize(){try{return JSON.stringify(P).length;}catch(e){return 0;}}
function evHasData(){try{return ((P.st&&(P.st.ok+P.st.no))||0)>=10||Object.keys(P.days||{}).length>1;}catch(e){return false;}}
/* Persistenter Speicher: iOS-Safari lehnt oft ab, schadet aber nicht */
function evAskPersist(){try{if(navigator.storage&&navigator.storage.persist){navigator.storage.persist().then(function(v){EVX.persist=!!v;}).catch(function(){});}}catch(e){}}
/* Auto-Kopie in IndexedDB: höchstens einmal pro Tag, die letzten 3 Tage */
function evIdb(cb){try{const r=indexedDB.open('ev-bak',1);r.onupgradeneeded=function(){try{r.result.createObjectStore('s');}catch(e){}};r.onsuccess=function(){cb(r.result);};r.onerror=function(){cb(null);};r.onblocked=function(){cb(null);};}catch(e){cb(null);}}
function evSnapPut(){
  const day=fmt(new Date());if(P.snapDay===day||!evHasData())return;
  evIdb(function(db){if(!db)return;try{const tx=db.transaction('s','readwrite');const st=tx.objectStore('s');st.put({t:Date.now(),txt:JSON.stringify(P)},'d'+day);
    const ks=st.getAllKeys();ks.onsuccess=function(){const k=(ks.result||[]).slice().sort();while(k.length>3){st.delete(k.shift());}};
    tx.oncomplete=function(){P.snapDay=day;P.snapAt=Date.now();save();};}catch(e){}});
}
function evSnapRead(cb){evIdb(function(db){if(!db){cb([]);return;}try{const st=db.transaction('s','readonly').objectStore('s');const out=[];const cur=st.openCursor();cur.onsuccess=function(){const c=cur.result;if(c){out.push({k:c.key,t:c.value.t,txt:c.value.txt});c.continue();}else cb(out.sort(function(a,b){return b.t-a.t;}));};cur.onerror=function(){cb([]);};}catch(e){cb([]);}});}
function evSnapCheck(){
  if(evHasData())return;
  evSnapRead(function(l){if(!l.length)return;const s=l[0];let ok=false;try{const o=JSON.parse(s.txt);ok=!!(o&&o.box&&typeof o.box==='object');}catch(e){}if(!ok)return;
    EVX.snaps=l;S.sheet={title:'Gesicherter Stand gefunden',sub:'Automatische Kopie vom '+new Date(s.t).toLocaleDateString('de-DE')+'. Wiederherstellen?',items:[{i:'♻️',t:'Wiederherstellen',d:'Holt deinen Fortschritt und deine Wörter zurück',a:'evrestore',id:0},{i:'🆕',t:'Neu anfangen',a:'shclose'}]};render(true);});
}
/* Sicherung als Datei: Teilen-Fenster (Dateien, AirDrop, Mail) oder Download */
function evDownload(txt,name){
  try{const b=new Blob([txt],{type:'text/plain'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){try{URL.revokeObjectURL(u);a.remove();}catch(e){}},4000);P.lastBackup=Date.now();save();toast('Sicherung gespeichert. Lege sie in „Dateien“ oder iCloud ab.');render(true);}
  catch(e){S.bk=txt;render();}
}
function evBackupFile(){
  const txt=encodeBackup();const name='EasyVocab-Sicherung-'+fmt(new Date())+'.txt';
  try{const f=new File([txt],name,{type:'text/plain'});
    if(navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:'EasyVocab Sicherung'}).then(function(){P.lastBackup=Date.now();save();toast('Sicherung geteilt. Speichere sie in „Dateien“.');render(true);}).catch(function(e){if(e&&e.name==='AbortError')return;evDownload(txt,name);});return;}
  }catch(e){}
  evDownload(txt,name);
}
function evBkNeed(){try{if(!evHasData())return false;const bk=P.lastBackup||0;return (Date.now()-bk)>7*864e5&&(!P.bkSkip||Date.now()-P.bkSkip>2*864e5);}catch(e){return false;}}
/* Gerätecheck */
function evIosVer(){try{const m=/OS (\d+)[_.](\d+)/.exec(navigator.userAgent);return m?m[1]+'.'+m[2]:'';}catch(e){return '';}}
function evReport(){
  const L=[];const s=window.screen||{};
  L.push('EasyVocab Build '+BUILD+' ('+BUILD_DATE+')');
  L.push('Modus: '+(evStandalone()?'als App (Home-Bildschirm)':'Browser-Tab'));
  L.push('Gerät: '+(evIOS()?'iOS/iPadOS '+evIosVer():(/Android/.test(navigator.userAgent)?'Android':'Computer'))+' · Fenster '+window.innerWidth+'×'+window.innerHeight+' @'+(window.devicePixelRatio||1)+'x');
  L.push('Dauerhafter Speicher: '+(EVX.persist===null?'unbekannt':(EVX.persist?'ja':'nein')));
  L.push('Speicher belegt: '+(EVX.usage!=null?evBytes(EVX.usage)+' von '+evBytes(EVX.quota):'unbekannt')+' · Lerndaten '+evBytes(evDataSize()));
  L.push('Offline bereit: '+(offReady()?'ja':'nein'));
  L.push('Letzte Sicherung: '+ago(P.lastBackup)+' · Auto-Kopie: '+(P.snapAt?ago(P.snapAt):'noch nie'));
  L.push('Benachrichtigungen: '+(('Notification' in window)?Notification.permission:'nicht verfügbar'));
  L.push('Stimmen: '+((window.speechSynthesis&&speechSynthesis.getVoices().length)||0));
  L.push('Darstellung: '+document.documentElement.getAttribute('data-theme')+' · Glas '+document.documentElement.getAttribute('data-glass')+' · Sparmodus '+(document.documentElement.classList.contains('lite')?'an':'aus'));
  L.push('Wörter: '+allIds().length+' · Antworten: '+((P.st&&(P.st.ok+P.st.no))||0));
  return L.join('\n');
}
function evCheckOpen(){
  const done=function(){
    const inst=evStandalone();const items=[];
    items.push({i:inst?'✅':'⚠️',t:inst?'Als App geöffnet':'Im Browser-Tab geöffnet',d:inst?'Gut: Daten sind besser geschützt.':'iOS kann Daten nach etwa 7 Tagen ohne Nutzung löschen. Tipp: Zum Home-Bildschirm hinzufügen.',a:'evinfo'});
    items.push({i:EVX.persist?'✅':'ℹ️',t:'Dauerhafter Speicher: '+(EVX.persist===null?'unbekannt':(EVX.persist?'ja':'nicht zugesagt')),d:'Auf iPhone und iPad ist „nicht zugesagt“ normal. Mach deshalb Dateisicherungen.',a:'evinfo'});
    items.push({i:offReady()?'✅':'⚠️',t:'Offline: '+(offReady()?'bereit':'noch nicht bereit'),d:offReady()?'Läuft auch ohne Internet.':'Einmal online öffnen, dann geht es offline.',a:'evinfo'});
    items.push({i:(P.lastBackup&&Date.now()-P.lastBackup<7*864e5)?'✅':'⚠️',t:'Letzte Sicherung: '+ago(P.lastBackup),d:'Auto-Kopie im Browser: '+(P.snapAt?ago(P.snapAt):'noch nie'),a:'evbackup'});
    items.push({i:'💾',t:'Speicher: '+evBytes(evDataSize())+' Lerndaten',d:EVX.usage!=null?'Gesamt belegt: '+evBytes(EVX.usage)+' von '+evBytes(EVX.quota):'Gesamtwert nicht verfügbar',a:'evinfo'});
    items.push({i:'📱',t:(evIOS()?'iOS/iPadOS '+evIosVer():'Gerät')+' · '+window.innerWidth+'×'+window.innerHeight,d:'Benachrichtigungen: '+(('Notification' in window)?Notification.permission:'nicht verfügbar')+'. Echte Erinnerungen von außen brauchen später ein Konto und einen Server.',a:'evinfo'});
    items.push({i:'📋',t:'Diagnose kopieren',d:'Text für Rückmeldungen und Fehlermeldungen',a:'evdiag'});
    S.sheet={title:'Gerätecheck',sub:'Zeigt, ob deine Daten sicher liegen',items:items};render(true);
  };
  try{const ps=[];
    if(navigator.storage&&navigator.storage.estimate)ps.push(navigator.storage.estimate().then(function(e){EVX.usage=e.usage;EVX.quota=e.quota;}));
    if(navigator.storage&&navigator.storage.persisted)ps.push(navigator.storage.persisted().then(function(v){EVX.persist=!!v;}));
    Promise.all(ps.map(function(p){return p.catch(function(){});})).then(done);}catch(e){done();}
}
/* Karten auf Heute */
function evInstallCard(){
  if(!isHosted()||evStandalone()||!(evIOS()||/Android/.test(navigator.userAgent))||!isOnboarded())return '';
  const n=P.instN||0,t=P.instAt||0;if(t&&Date.now()-t<(n>=2?14:3)*864e5)return '';
  return '<div class="glass pad w col tight"><div class="hd2"><span class="lab">📲 Als App auf den Home-Bildschirm</span></div><p class="hint" style="margin:0">Im Browser-Tab kann iOS deine Lerndaten nach etwa 7 Tagen ohne Nutzung löschen. Als App bleibt alles sicherer, und es öffnet vollflächig.</p><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn sm pri" data-act="offlineinfo">So geht’s</button><button class="btn sm" data-act="evinstlater">Später</button></div></div>';
}
function evLastActive(){let m=0;try{Object.keys(P.days||{}).forEach(function(k){if((P.days[k]||0)>0){const t=new Date(k+'T12:00:00').getTime();if(t>m)m=t;}});}catch(e){}return m;}
function evCards(){
  let h='';
  try{
    const all=allIds();const due=dueOf(all,true);const dn=due.length;const dc=dayCount();
    const la=evLastActive();const gap=la?Math.floor((Date.now()-la)/864e5):0;
    if(isOnboarded()&&la&&gap>=4&&dc===0&&dn>0&&P.wbDay!==fmt(new Date()))h+='<div class="glass pad w col tight"><div class="hd2"><span class="lab">👋 Schön, dass du wieder da bist</span></div><p class="hint" style="margin:0">Pause von '+gap+' Tagen ist okay. Wir starten leicht, mit nur 10 Wörtern.</p><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn sm pri" data-act="evmini" data-v="10">10 Wörter üben</button><button class="btn sm" data-act="evwbdis">Später</button></div></div>';
    else if(dn>60&&dc<5)h+='<div class="glass pad w col tight"><div class="hd2"><span class="lab">📚 '+dn+' Wörter warten</span></div><p class="hint" style="margin:0">Du musst nicht alles heute schaffen. Jede Runde nimmt die wichtigsten zuerst. Fang klein an.</p></div>';
    else if(dc===0&&dn>0&&isOnboarded())h+='<button class="glass gtap lrow w" data-act="evmini" data-v="5"><span class="li">⚡</span><span class="lt"><b>Nur 5 Wörter</b><small>Wenig Zeit? Zwei Minuten reichen.</small></span><span class="chev">›</span></button>';
    if(h.indexOf('class="hd2"')<0&&h.indexOf('data-act="evmini"')<0)h=evInstallCard()+h;
    const lk=all.filter(function(id){return (P.wrong[id]||0)>=4&&bAvg(id)<4&&!(P.memo&&P.memo[id]);}).sort(function(a,b){return (P.wrong[b]||0)-(P.wrong[a]||0);}).slice(0,3);
    if(lk.length){h+='<div class="glass pad w col tight"><div class="hd2"><span class="lab">🧩 Knifflige Wörter</span><span class="hint">Eine Eselsbrücke hilft mehr als noch eine Wiederholung</span></div>';
      lk.forEach(function(id){h+='<button class="lrow" data-act="wordopen" data-id="'+id+'" style="background:none;border:0;text-align:left;padding:6px 0;width:100%"><span class="lt"><b>'+esc(W[id][0])+'</b><small>'+esc(gShort(W[id][1]))+' · '+(P.wrong[id]||0)+' Fehler</small></span><span class="chev">›</span></button>';});
      h+='</div>';}
  }catch(e){}
  return h;
}
function evMemoBox(id){const m=(P.memo&&P.memo[id])||'';return '<div class="glass pad w col tight"><div class="lab">Eigene Eselsbrücke</div><textarea id="evm" class="ta" rows="2" maxlength="160" placeholder="Ein Bild, ein Reim oder ein Satz, der dir hilft" aria-label="Eselsbrücke">'+esc(m)+'</textarea><button class="btn sm pri" data-act="evmemosave" data-id="'+id+'">Speichern</button></div>';}
/* Schnellzugriff in den Einstellungen (nur Handy-Liste) */
function evQuick(){
  return '<div class="glass grp setq"><div class="swlab"><b>Häufig genutzt</b></div>'+
    srow('🌙','#374151','Darstellung','',segc('dm',['light','dark','auto'],(P.darkMode===null||P.darkMode===undefined)?'auto':(P.darkMode?'dark':'light'),{light:'Hell',dark:'Dunkel',auto:'Auto'},'dmset'))+
    srow('🎯','#FF9F0A','Tagesziel','Wörter pro Tag',segc('dailyGoal',[5,10,20,50],P.dailyGoal))+
    srow('🔊','#FF2D55','Vorlesen','Wörter laut sprechen',tg('speak',!!P.speak))+
  '</div>';
}
/* Startpakete */
const EVPACKS={
  en:{n:'Englisch: Alltag',e:'🇬🇧',l:'en',ch:'Startpaket Englisch Alltag',w:[
['to wake up','aufwachen','I wake up at seven.'],['breakfast','Frühstück','We have breakfast together.'],['to get dressed','sich anziehen','Get dressed, please.'],['neighbour','Nachbar, Nachbarin','My neighbour is very friendly.'],['to borrow','sich ausleihen','Can I borrow your pen?'],['to lend','verleihen','Could you lend me a book?'],['appointment','Termin','I have a doctor’s appointment.'],['to miss','verpassen, vermissen','I missed the bus.'],['to pick up','abholen','I pick up my kids at four.'],['to look forward to','sich freuen auf','I look forward to the weekend.'],['to take care of','sich kümmern um','She takes care of her brother.'],['to run out of','nicht mehr haben','We have run out of milk.'],['to turn off','ausschalten','Please turn off the light.'],['to turn on','einschalten','Turn on the TV.'],['to hurry','sich beeilen','Hurry up, we are late.'],['delay','Verspätung','There is a delay of ten minutes.'],['to get along with','sich verstehen mit','I get along with my colleagues.'],['to cancel','absagen, stornieren','They cancelled the meeting.'],['to remind','erinnern','Remind me to call Tom.'],['to recommend','empfehlen','Can you recommend a restaurant?'],['to afford','sich leisten','I can’t afford a new phone.'],['a bit of','ein bisschen','I need a bit of help.'],['at the moment','im Moment','He is busy at the moment.'],['by the way','übrigens','By the way, where is Anna?'],['as soon as','sobald','Call me as soon as you arrive.'],['in a hurry','in Eile','Sorry, I am in a hurry.'],['to be used to','gewohnt sein','I am used to getting up early.'],['to look for','suchen','I am looking for my keys.'],['to find out','herausfinden','Let’s find out the truth.'],['to give up','aufgeben','Never give up.'],['to put off','verschieben','Don’t put it off.'],['to carry on','weitermachen','Carry on, please.'],['to check in','einchecken','We check in at noon.'],['luggage','Gepäck','My luggage is heavy.'],['receipt','Quittung, Kassenbon','Keep the receipt.'],['change','Wechselgeld','Keep the change.'],['bill','Rechnung','Can we have the bill, please?'],['to book','buchen','I want to book a table.'],['to queue','Schlange stehen','We queued for an hour.'],['shortcut','Abkürzung','Let’s take a shortcut.']]},
  fr:{n:'Französisch: Reise',e:'🇫🇷',l:'fr',ch:'Startpaket Französisch Reise',w:[
['la gare','Bahnhof','Où est la gare ?'],['le billet','Fahrkarte, Ticket','Un billet pour Paris, s’il vous plaît.'],['l’aéroport (m.)','Flughafen','L’aéroport est loin.'],['la valise','Koffer','Ma valise est lourde.'],['l’hôtel (m.)','Hotel','Je cherche un hôtel.'],['la chambre','Zimmer','Une chambre pour deux nuits.'],['réserver','reservieren','Je voudrais réserver une table.'],['l’addition (f.)','Rechnung','L’addition, s’il vous plaît.'],['la carte','Speisekarte, Karte','La carte, s’il vous plaît.'],['le petit déjeuner','Frühstück','Le petit déjeuner est à huit heures.'],['l’eau (f.)','Wasser','Une bouteille d’eau, s’il vous plaît.'],['le pain','Brot','Je voudrais du pain.'],['le fromage','Käse','J’aime le fromage.'],['la rue','Straße','La rue est calme.'],['tout droit','geradeaus','Allez tout droit.'],['à gauche','links','Tournez à gauche.'],['à droite','rechts','Tournez à droite.'],['près de','nahe bei','C’est près de la gare.'],['loin de','weit von','Ce n’est pas loin de l’hôtel.'],['le plan','Stadtplan','Avez-vous un plan de la ville ?'],['le métro','U-Bahn','Je prends le métro.'],['le bus','Bus','Le bus arrive à midi.'],['la place','Platz','La place est grande.'],['ouvert','geöffnet','Le musée est ouvert.'],['fermé','geschlossen','La banque est fermée.'],['combien','wie viel','Combien ça coûte ?'],['cher','teuer','C’est trop cher.'],['bon marché','günstig','Ce restaurant est bon marché.'],['je voudrais','ich möchte','Je voudrais un café.'],['s’il vous plaît','bitte','Un café, s’il vous plaît.'],['merci beaucoup','vielen Dank','Merci beaucoup !'],['excusez-moi','Entschuldigung','Excusez-moi, où sont les toilettes ?'],['je ne comprends pas','ich verstehe nicht','Je ne comprends pas.'],['parlez-vous anglais ?','Sprechen Sie Englisch?','Pardon, parlez-vous anglais ?'],['pouvez-vous répéter ?','Können Sie das wiederholen?','Pouvez-vous répéter, s’il vous plaît ?'],['le médecin','Arzt','Il faut appeler le médecin.'],['la pharmacie','Apotheke','Il y a une pharmacie ici ?'],['le retard','Verspätung','Le train a du retard.'],['le quai','Bahnsteig','Le train part du quai 3.'],['la sortie','Ausgang','Où est la sortie ?'],['la plage','Strand','La plage est belle.']]},
  la:{n:'Latein: Grundwortschatz',e:'🏛️',l:'la',ch:'Startpaket Latein Grundwortschatz',w:[
['rosa, -ae f.','Rose'],['puella, -ae f.','Mädchen'],['terra, -ae f.','Erde, Land'],['aqua, -ae f.','Wasser'],['via, -ae f.','Weg, Straße'],['vita, -ae f.','Leben'],['silva, -ae f.','Wald'],['porta, -ae f.','Tor'],['patria, -ae f.','Heimat'],['luna, -ae f.','Mond'],['stella, -ae f.','Stern'],['dominus, -i m.','Herr'],['servus, -i m.','Sklave'],['amicus, -i m.','Freund'],['filius, -i m.','Sohn'],['populus, -i m.','Volk'],['murus, -i m.','Mauer'],['ventus, -i m.','Wind'],['locus, -i m.','Ort'],['equus, -i m.','Pferd'],['verbum, -i n.','Wort'],['bellum, -i n.','Krieg'],['donum, -i n.','Geschenk'],['oppidum, -i n.','Stadt'],['templum, -i n.','Tempel'],['forum, -i n.','Marktplatz'],['rex, regis m.','König'],['pater, patris m.','Vater'],['mater, matris f.','Mutter'],['frater, fratris m.','Bruder'],['homo, hominis m.','Mensch'],['miles, militis m.','Soldat'],['lex, legis f.','Gesetz'],['pax, pacis f.','Friede'],['nox, noctis f.','Nacht'],['lux, lucis f.','Licht'],['tempus, temporis n.','Zeit'],['corpus, corporis n.','Körper'],['nomen, nominis n.','Name'],
['amare, amo, amavi, amatum','lieben'],['laudare, laudo, laudavi, laudatum','loben'],['vocare, voco, vocavi, vocatum','rufen'],['portare, porto, portavi, portatum','tragen'],['habitare, habito, habitavi, habitatum','wohnen'],['videre, video, vidi, visum','sehen'],['habere, habeo, habui, habitum','haben'],['monere, moneo, monui, monitum','mahnen'],['terrere, terreo, terrui, territum','erschrecken'],['scribere, scribo, scripsi, scriptum','schreiben'],['legere, lego, legi, lectum','lesen'],['mittere, mitto, misi, missum','schicken'],['ducere, duco, duxi, ductum','führen'],['dicere, dico, dixi, dictum','sagen'],['vincere, vinco, vici, victum','siegen'],['audire, audio, audivi, auditum','hören'],['venire, venio, veni, ventum','kommen'],['dormire, dormio, dormivi, dormitum','schlafen'],['scire, scio, scivi, scitum','wissen'],
['bonus, -a, -um','gut'],['malus, -a, -um','schlecht'],['magnus, -a, -um','groß'],['parvus, -a, -um','klein'],['multus, -a, -um','viel'],['longus, -a, -um','lang'],['altus, -a, -um','hoch'],['novus, -a, -um','neu'],['antiquus, -a, -um','alt'],['laetus, -a, -um','fröhlich']]}
};
function evPackOpen(){
  const items=Object.keys(EVPACKS).map(function(k){const p=EVPACKS[k];return {i:p.e,t:p.n,d:p.w.length+' Wörter, bereits vorhandene werden übersprungen',a:'evpack',id:k};});
  S.sheet={title:'Startpakete',sub:'Fertige Wortlisten zum Loslegen',items:items};render(true);
}
function evPackAdd(k){
  const p=EVPACKS[k];if(!p)return;let n=0,d=0;
  p.w.forEach(function(w){const r=addWord(w[0],w[1],w[2]||'',9,p.l,p.ch,'');if(r==='ok')n++;else if(r==='dup')d++;});
  let note='';try{note=langNote(p.l)||'';}catch(e){}
  if(n){P.nd=P.nd||{};save();}
  toast(n?(n+' Wörter hinzugefügt'+(d?(', '+d+' schon vorhanden'):'')+'.'+note):'Alle Wörter dieses Pakets hast du schon.');
  BC=null;render(true);
}
document.addEventListener('change',function(e){const t=e.target;if(t&&t.id==='evfile'&&t.files&&t.files[0]){const fr=new FileReader();fr.onload=function(){doImport(String(fr.result||''));};fr.onerror=function(){toast('Die Datei konnte nicht gelesen werden.');};fr.readAsText(t.files[0]);try{t.value='';}catch(e2){}}});
setTimeout(function(){try{evAskPersist();evSnapPut();evSnapCheck();}catch(e){}},2500);
document.addEventListener('visibilitychange',function(){if(document.hidden){try{evSnapPut();}catch(e){}}});

/* --- Build 130: Vokabel-Duell (zwei Spieler an einem iPad) --- */
function duelQ(id,k){
  const toDe=(k%2===1);const ids=allIds().filter(function(o){return wlang(o)===wlang(id);});
  const ans=toDe?gShort(W[id][1]):gEn(id);const opts=[ans];let guard=0;
  while(opts.length<4&&guard++<120){const o=ids[Math.floor(Math.random()*ids.length)];if(o==null)break;const t=toDe?gShort(W[o][1]):gEn(o);if(t&&opts.indexOf(t)<0)opts.push(t);}
  return {id:id,toDe:toDe,prompt:toDe?gEn(id):gShort(W[id][1]),ans:ans,opts:shuffle(opts)};
}
function duelStart(){
  const gs=S.gs,n=gs.n.duel||10;gs.n.duel=n;
  const ids=gameIds(n,gs.src,gs.list);if(ids.length<4){toast('Dafür gibt es hier zu wenige Wörter. Wähle eine andere Quelle.');return;}
  const g={type:'duel',ids:ids,k:0,sc:[0,0],ph:'buzz',who:-1,tried:[],mode:gs.dmode||'opts',nm:['Spieler 1','Spieler 2'],over:false,res:null,first:null};
  g.q=duelQ(ids[0],0);S.game=g;render();duelSpeak(g);
}
function duelSpeak(g){try{if(g.q&&g.q.toDe&&P.speak!==false&&canSpeak&&wlang(g.q.id)!=='la')speak(g.q.id,true);}catch(e){}}
function duelClear(g){if(g.tm){clearTimeout(g.tm);g.tm=null;}}
function duelNext(g){
  duelClear(g);g.k++;
  if(g.k>=g.ids.length){g.over=true;g.ph='end';const w=g.sc[0]===g.sc[1]?-1:(g.sc[0]>g.sc[1]?0:1);g.win=w;g.res=gameReward(5,2);sfx('done');haptic();render(true);return;}
  g.q=duelQ(g.ids[g.k],g.k);g.stolen=false;g.ph='buzz';g.who=-1;g.tried=[];g.pick=null;g.last=null;render(true);duelSpeak(g);
}
function duelBuzz(g,p){
  if(g.ph!=='buzz')return;g.ph='answer';g.who=p;g.first=p;sfx('pop');haptic();render(true);
  g.tm=setTimeout(function(){if(S.game!==g||g.ph!=='answer')return;duelWrong(g,null);},g.mode==='say'?12000:7000);
}
function duelRight(g,p){duelClear(g);g.sc[p]++;g.ph='reveal';g.last={p:p,ok:true};sfx('ok');haptic();render(true);g.tm=setTimeout(function(){if(S.game===g)duelNext(g);},1500);}
function duelWrong(g,pick){
  duelClear(g);sfx('no');haptic('warn');
  if(pick!=null)g.tried.push(pick);
  if(g.tried.length===0)g.tried.push('');
  const other=1-g.who;
  if(g.stolen){g.ph='reveal';g.last={p:-1,ok:false};render(true);g.tm=setTimeout(function(){if(S.game===g)duelNext(g);},1900);return;}
  g.stolen=true;g.who=other;g.ph='answer';render(true);
  g.tm=setTimeout(function(){if(S.game!==g||g.ph!=='answer')return;duelWrong(g,null);},g.mode==='say'?12000:7000);
}
function duelPick(g,i){
  if(g.ph!=='answer')return;const q=g.q;const o=q.opts[i];if(g.tried.indexOf(o)>=0)return;
  if(o===q.ans){duelRight(g,g.who);}else duelWrong(g,o);
}
/* Modus „Laut sagen“: Lösung zeigen, der Gegner entscheidet */
function duelShow(g){if(g.ph!=='answer'||g.mode!=='say')return;duelClear(g);g.ph='judge';sfx('flip');render(true);}
function duelJudge(g,ok){if(g.ph!=='judge')return;if(ok)duelRight(g,g.who);else duelWrong(g,null);}
function duelSide(g,p){
  const q=g.q,me=p===g.who;const rot=p===1?' flip':'';
  let h='<div class="dside p'+p+rot+(g.ph==='reveal'&&g.last&&g.last.p===p?' win':'')+'">';
  h+='<div class="dhd"><b>'+esc(g.nm[p])+'</b><span class="dsc">'+g.sc[p]+'</span></div>';
  h+='<div class="dq"><small>'+(q.toDe?'Was heißt das auf Deutsch?':'Wie heißt das auf '+esc(LNAME[wlang(q.id)]||'Englisch')+'?')+'</small><div class="dw">'+esc(q.prompt)+'</div></div>';
  if(g.ph==='buzz')h+='<button class="dbuz" data-act="dbuzz" data-i="'+p+'"><span>TIPPEN</span><small>Wer zuerst tippt, darf antworten</small></button>';
  else if(g.ph==='answer'){
    if(me&&g.mode==='opts')h+='<div class="dopts">'+q.opts.map(function(o,i){const bad=g.tried.indexOf(o)>=0;return '<button class="dopt'+(bad?' bad':'')+'" data-act="dpick" data-i="'+i+'"'+(bad?' disabled':'')+'>'+esc(o)+'</button>';}).join('')+'</div>';
    else if(me&&g.mode==='say')h+='<div class="dwait big">Sag die Antwort laut!</div><button class="dbuz sm" data-act="dshow"><span>Lösung zeigen</span></button>';
    else h+='<div class="dwait">'+esc(g.nm[g.who])+(g.stolen?' darf jetzt':' antwortet')+'…</div>';
  }
  else if(g.ph==='judge'){
    if(me)h+='<div class="dwait">Dein Gegner prüft…</div>';
    else h+='<div class="djg"><div class="dans">'+esc(q.ans)+'</div><small>Hat '+esc(g.nm[g.who])+' es richtig gesagt?</small><div class="djb"><button class="btn pri" data-act="djudge" data-v="1">Richtig</button><button class="btn bad" data-act="djudge" data-v="0">Falsch</button></div></div>';
  }
  else if(g.ph==='reveal'){
    h+='<div class="dres '+(g.last&&g.last.ok?'ok':'no')+'">'+(g.last&&g.last.ok?(g.last.p===p?'Punkt für dich!':'Punkt für '+esc(g.nm[g.last.p])):'Keiner hat es gewusst')+'<div class="dans">'+esc(q.ans)+'</div></div>';
  }
  return h+'</div>';
}
function duelView(g){
  if(g.over){
    const w=g.win;
    return '<div class="pt"><h1>Vokabel-Duell</h1></div><div class="glass pad w col center"><div class="big-ico">'+(w<0?'🤝':'🏆')+'</div><b>'+(w<0?'Unentschieden':esc(g.nm[w])+' gewinnt!')+'</b><div class="dfin"><span>'+esc(g.nm[0])+' <b>'+g.sc[0]+'</b></span><span>'+esc(g.nm[1])+' <b>'+g.sc[1]+'</b></span></div>'+(g.res?'<div class="hint">'+(g.res.capped?'Für heute gibt es keine Belohnung mehr. Spielen darfst du trotzdem.':'+'+g.res.xp+' XP und +'+g.res.coins+' 🪙 für den Account')+'</div>':'')+'<button class="btn pri full" data-act="gostart" data-v="duel">Revanche</button></div>';
  }
  return '<div class="duel" role="group" aria-label="Vokabel-Duell">'+duelSide(g,1)+'<div class="dmid"><span>Wort '+(g.k+1)+' von '+g.ids.length+'</span><button class="link dq2" data-act="dquit">'+(g.qc?'Wirklich beenden?':'Beenden')+'</button></div>'+duelSide(g,0)+'</div>';
}


/* ---------- Build 132: Sticker, Mini-Einstieg, leere Zustände ---------- */
const STK_POOL=['🦄','🚀','🐲','⚽','🎸','🍕','🐼','🌈','🦊','🏆','🎨','🐬','🦁','🛸','🍀','🎯','🐙','🌟'];
function stkToday(){return fmt(new Date());}
function kidBand(){const b=ageBand();return b==='kid'||b==='teen';}
function stkAward(dc){try{
  if(!kidBand()||dc<P.dailyGoal||!dayValid(stkToday()))return false;
  P.stk=P.stk||{};const t=stkToday();if(P.stk[t])return false;
  const have=Object.keys(P.stk).map(function(k){return P.stk[k];});
  const free=STK_POOL.filter(function(e){return have.indexOf(e)<0;});const pool=free.length?free:STK_POOL;
  P.stk[t]=pool[Math.floor(Math.random()*pool.length)];
  const ks=Object.keys(P.stk).sort();if(ks.length>60)delete P.stk[ks[0]];
  save();try{sfx('done');haptic('ok');}catch(e){}
  setTimeout(function(){try{confetti([P.stk[t],'⭐','✨','🎉']);toast('Tagesziel geschafft! Neuer Sticker: '+P.stk[t]);}catch(e){}},350);
  return true;}catch(e){return false;}}
function stkRow(){const ks=Object.keys(P.stk||{}).sort().slice(-7);if(!ks.length)return '';
  return '<div class="stkrow" aria-label="Deine Sticker">'+ks.map(function(k){return '<span class="stk1" title="'+k+'">'+P.stk[k]+'</span>';}).join('')+'</div>';}
function friendCard(dc,due){
  const done=dc>=P.dailyGoal;const kb=kidBand();
  if(done){
    return '<div class="glass pad w col tight donec"><div class="hd2"><span class="lab">Heute</span></div><b class="donet">'+(kb?'Geschafft! Das war stark. 🎉':'Tagesziel erreicht.')+'</b><p class="hint" style="margin:0">'+(kb?'Dein Sticker für heute ist im Album. Morgen kommt der nächste.':'Mehr geht immer, ist aber nicht nötig.')+'</p>'+(kb?stkRow():'')+(due.length?'<button class="btn full" data-act="evmini" data-v="5">Noch 5 Wörter</button>':'')+'</div>';}
  if(!due.length)return '';
  const left=Math.max(1,P.dailyGoal-dc);
  return '<div class="glass pad w col tight minic"><div class="hd2"><span class="lab">'+(kb?'Dein Ziel':'Kleiner Einstieg')+'</span><span class="hint">noch '+left+' bis zum Tagesziel</span></div><button class="btn pri full" data-act="evmini" data-v="5">Nur 5 Wörter</button>'+(kb?stkRow():'')+'</div>';}
function statsEmpty(){
  const tot=(P.st&&(P.st.ok+P.st.no))||0;if(tot>=5)return '';
  return '<div class="glass pad w col center emptyc"><div class="big-ico">📈</div><b>Hier wächst gleich etwas</b><p class="hint" style="margin:0">Nach deiner ersten Runde siehst du hier Serie, Trefferquote und deinen Lernverlauf. Fünf Wörter reichen für den Anfang.</p><button class="btn pri" data-act="evmini" data-v="5">Jetzt 5 Wörter üben</button></div>';}

/* ---------- Build 133: Symbole, Lernpfad ---------- */
const SVGI={
timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',
mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/>',
doc:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
cards:'<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
pencil:'<path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/><path d="M14 6l3 3"/>',
list:'<path d="M4 7l2 2 3-3M4 17l2 2 3-3M12 8h8M12 18h8"/>',
bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
phone:'<rect x="7" y="2" width="10" height="20" rx="3"/><path d="M11 18h2"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
path:'<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h6"/>',
check:'<path d="M5 13l4 4 10-10"/>',
trophy:'<path d="M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 14v4M8 21h8"/>'};
function svgIc(n){return '<svg class="sic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(SVGI[n]||'')+'</svg>';}
const ICMAP={'👀':'eye','📋':'cards','✍️':'pencil','🧠':'list','🚀':'bolt','📱':'phone','🎙️':'mic','⭐':'star','⏱️':'timer','📝':'doc'};
function icOf(e){return e;}
const PATH_N=6;
function pathName(k){return String(bName(k)).replace(/^✏️\s*/,'');}
function pathStations(k){
  const ids=range(k).filter(isAlive);const st=[];
  for(let i=0;i<ids.length;i+=PATH_N){const g=ids.slice(i,i+PATH_N);
    const avg=g.reduce(function(t,id){return t+bAvg(id);},0)/g.length;
    st.push({ids:g,done:g.every(function(id){return bAvg(id)>=2;}),started:g.some(function(id){return bAvg(id)>0;}),avg:avg});}
  return st;}
function pathView(){
  const k=S.pathK;const st=pathStations(k);
  if(!st.length)return '<div class="pt"><h1>Lernpfad</h1></div><div class="glass pad w center emptyc"><div class="big-ico">🗂️</div><b>Diese Liste ist leer</b><p class="hint" style="margin:0">Füge zuerst Wörter hinzu.</p></div>';
  let cur=st.findIndex(function(x){return !x.done;});const all=cur<0;if(all)cur=st.length;
  const nd=st.filter(function(x){return x.done;}).length;
  let h='<div class="pt"><h1>'+esc(pathName(k))+'</h1><small>'+nd+' von '+st.length+' Stationen geschafft</small></div>';
  h+='<div class="prog thin w" style="margin-bottom:6px"><i style="width:'+Math.round(nd/st.length*100)+'%"></i></div>';
  h+='<div class="pathw" role="list">';
  const off=[-30,0,30,0];
  st.forEach(function(x,i){
    const state=x.done?'done':(i===cur?'cur':'todo');const o=off[i%off.length];
    h+='<div class="pnode '+state+'" role="listitem" style="--o:'+o+'px"><button class="pbtn" data-act="pathgo" data-i="'+i+'" aria-label="Station '+(i+1)+(x.done?', geschafft':(i===cur?', nächster Schritt':''))+'">'+(x.done?svgIc('check'):'<b>'+(i+1)+'</b>')+'</button><span class="plb"><b>Station '+(i+1)+'</b><small>'+x.ids.length+' Wörter'+(x.done?' · geschafft':(i===cur?' · hier geht es weiter':(x.started?' · begonnen':'')))+'</small></span></div>';
  });
  h+='<div class="pnode fin '+(all?'cur':'todo')+'" role="listitem" style="--o:0px"><button class="pbtn" data-act="pathtest" aria-label="Abschlusstest">'+svgIc('trophy')+'</button><span class="plb"><b>Abschlusstest</b><small>Alle '+range(k).length+' Wörter der Liste</small></span></div>';
  h+='</div><p class="hint" style="text-align:center;margin:8px 0">Du darfst jede Station frei wählen. Der Pfad zeigt nur den nächsten Schritt.</p>';
  return h;}
function pathOpen(k,from){S.pathK=k;S.pathBack=from||(isRoot(S.screen)?S.screen:'words');S.screen='path';render();window.scrollTo(0,0);}
function pathRun(ids,mode){S.customIds=ids.slice();S.b='custom';S.pathRun=S.pathK;begin(mode||'auto',true);}
function pathPicker(){
  const bl=blocks();if(!bl.length){toast('Noch keine Listen. Füge zuerst Wörter hinzu.');return;}
  if(bl.length===1){pathOpen(0,'practice');return;}
  S.sheet={title:'Lernpfad für welche Liste?',sub:'Du siehst die Stationen und den nächsten Schritt',items:bl.map(function(b,k){return {i:'🧭',t:pathName(k),d:range(k).length+' Wörter',a:'pathopen',id:k};})};render(true);}
try{const mq=window.matchMedia('(prefers-color-scheme: dark)');const mqf=function(){if(P.darkMode===null||P.darkMode===undefined){applyPrefs();render(true);}};if(mq.addEventListener)mq.addEventListener('change',mqf);else if(mq.addListener)mq.addListener(mqf);document.addEventListener('visibilitychange',function(){if(!document.hidden){const want=isDark()?'dark':'light';if(document.documentElement.getAttribute('data-theme')!==want||document.documentElement.getAttribute('data-lm')!==(isDark()?'0':'1')){applyPrefs();render(true);}}});}catch(e){}
if(P.onb&&(P.newsV||0)<BUILD)setTimeout(function(){if(isRoot(S.screen)&&!S.sheet&&!S.leave){S.newsFrom=P.newsV||0;showNews();}},1800);
if(isHosted()&&'serviceWorker' in navigator&&/^https?:/.test(location.protocol))navigator.serviceWorker.register('/sw.js').catch(function(){});
