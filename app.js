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
const MODE={auto:{i:'🚀',t:'Smart-Training',d:'Dein persönlicher Trainer'},cards:{i:'📋',t:'Karteikarten',d:'Aufdecken und bewerten'},mc:{i:'🧠',t:'Probetest',d:'Antwort auswählen'},type:{i:'✍️',t:'Tippen',d:'Tastatur oder Apple Pencil'},write:{i:'✍️',t:'Schreiben',d:'Mit dem Apple Pencil'},test:{i:'📝',t:'Tipp-Test',d:'Wie in der Klausur'},weak:{i:'🎯',t:'Schwache Wörter',d:'Gezielt wiederholen'},learn:{i:'👀',t:'Lernen',d:'Wörter erst ansehen'},planner:{i:'📅',t:'Planer',d:'Testplaner'},stats:{i:'📈',t:'Statistik',d:'Dein Fortschritt'},words:{i:'📚',t:'Wörter',d:'Verwalten'}};
const app=document.getElementById('app');
const KEY='gl-vokabeln-v2';
const DEF=function(){return {v:4,box:{},due:{},wrong:{},days:{},gd:{},hist:{},st:{ok:0,no:0},custom:[],exams:[],run:null,onb:0,dailyGoal:10,quizLength:10,flashcardCount:10,fontSize:'M',shuffleCards:true,autoNext:true,examSec:20,vA:'',vB:'',vC:'',sfx:false,mins:{},weekGoal:4,weekPaid:'',haptic:true,autoCloud:true,coins:0,freeze:0,xp:0,xpBoostUntil:0,tokens:0,marathonDay:'',owned:{},nick:'',emoji:'',fedAt:0,avatar:'',boostUntil:0,coll:{},loginDay:'',look:'natural',accent:'blue',frozen:{},goalPaid:'',avgSec:8,darkMode:null,remindersEnabled:false,remHour:17,speak:false,bg:'ice',bgMotion:true,lang2:'none',aiOn:true,glass:2,claimed:{},memo:{},aiCalls:0,aiDays:{},emo:'all'};};
let P=DEF();
function fmt(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function addDays(n){const d=new Date();d.setDate(d.getDate()+n);return fmt(d);}
let SAVEFAIL=false;
let NOSAVE=false;
function isHosted(){return !(window.claude&&window.claude.use);}
function save(){if(NOSAVE)return;try{localStorage.setItem(KEY,JSON.stringify(P));SAVEFAIL=false;}catch(e){SAVEFAIL=true;}if(!CSAVING)cloudQueue();}
let CSAVING=false,CQ=null,CLAST=0,CBUSY=false,CCHK=false;
function sanitize(o){const d=DEF();['box','due','wrong','days','gd','hist','claimed','memo','aiDays'].forEach(function(k){if(!o[k]||typeof o[k]!=='object'||Array.isArray(o[k]))o[k]=d[k]||{};});
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
  ['box','due'].forEach(function(f){Object.keys(P[f]).forEach(function(k){if(k.indexOf('|')<0){P[f][k+'|en']=P[f][k];P[f][k+'|de']=P[f][k];delete P[f][k];ch=true;}});});
  if(P.goal!==undefined){P.dailyGoal=nearest(P.goal,[5,10,20,50]);delete P.goal;ch=true;}
  if(P.qlen!==undefined){P.quizLength=nearest(P.qlen,[5,10,15,20]);P.flashcardCount=nearest(P.qlen,[5,10,15,20,30]);delete P.qlen;ch=true;}
  if(P.speak===0||P.speak===1){P.speak=!!P.speak;ch=true;}
  delete P.theme;delete P.size;
  {const mp={sun:'sand',sage:'forest',berry:'clay'};if(mp[P.bg]){P.bg=mp[P.bg];ch=true;}if(P.bg==='stone'){P.bg='ice';if(P.look==='vivid')P.look='natural';ch=true;}}
  P.v=4;if(ch)save();
}
try{const r=localStorage.getItem(KEY);if(r){const o=JSON.parse(r);if(o&&typeof o==='object'&&o.box&&typeof o.box==='object')P=sanitize(Object.assign(DEF(),o));}}catch(e){}
migrate();
let BC=null,BCk='';
function applyCustom(){W.length=BASE;E.length=BASE;(P.custom||[]).forEach(function(c){W.push([c.en,c.de]);E.push(c.ex||'');});BC=null;}
const BGP={ice:{n:'Eis',c:[[96,200,255],[64,120,235],[150,225,240]]},sand:{n:'Sand',c:[[222,190,140],[200,160,110],[236,214,176]]},forest:{n:'Wald',c:[[120,150,118],[160,180,130],[96,128,116]]},clay:{n:'Ton',c:[[204,132,108],[222,168,140],[176,112,108]]}};
function applyBg(){
  const el=document.documentElement;const nat=(P.look!=='vivid');el.setAttribute('data-look','natural');el.setAttribute('data-bgk',nat?'natural':'vivid');el.setAttribute('data-pal',BGP[P.bg]?P.bg:'ice');el.setAttribute('data-accent',['blue','poppy','mustard','green','rose'].indexOf(P.accent)>=0?P.accent:'blue');
  const p=nat?{c:isDark()?[[70,105,92],[70,86,120],[112,96,70]]:[[150,184,160],[160,184,214],[226,202,166]]}:(BGP[P.bg]||BGP.sun);const a=nat?(isDark()?[0.3,0.3,0.26]:[0.68,0.6,0.55]):(isDark()?[0.24,0.28,0.3]:[0.65,0.55,0.5]);
  p.c.forEach(function(c,i){el.style.setProperty('--aur'+(i+1),'rgba('+c.join(',')+','+a[i]+')');el.style.setProperty('--o'+(i+1),'rgb('+c.join(',')+')');});
  el.classList.toggle('still',!P.bgMotion);
}
function applyGlass(){
  const el=document.documentElement;const L=(P.glass==null?2:P.glass);const dark=isDark();el.setAttribute('data-glass',L);el.setAttribute('data-lm',dark?'0':'1');
  el.style.setProperty('--blur',[0,30,26,22][L]+'px');el.style.setProperty('--sat',[1,1.3,1.7,2.4][L]);
  el.style.setProperty('--glass',dark?'rgba(30,35,48,'+[1,0.8,0.46,0.14][L]+')':'rgba(255,255,255,'+[1,0.8,0.48,0.16][L]+')');
  el.style.setProperty('--bloom','rgba(255,255,255,'+(dark?[0.03,0.06,0.08,0.08][L]:[0.7,0.55,0.36,0.2][L])+')');
  el.style.setProperty('--glass-soft','rgba(255,255,255,'+(dark?[0.08,0.07,0.06,0.05][L]:[0.92,0.62,0.4,0.2][L])+')');
  el.style.setProperty('--glass-line','rgba(255,255,255,'+(dark?[0.14,0.16,0.2,0.26][L]:[0.85,0.8,0.85,0.9][L])+')');
  el.style.setProperty('--rim1','rgba(255,255,255,'+(dark?[0.12,0.25,0.38,0.5][L]:[0.5,0.8,0.95,1][L])+')');
}
function applyPrefs(){
  const el=document.documentElement;
  if(P.darkMode===null||P.darkMode===undefined)el.removeAttribute('data-theme');else el.setAttribute('data-theme',P.darkMode?'dark':'light');
  el.style.setProperty('--fs',{S:0.9,M:1,L:1.18}[P.fontSize]||1);
  applyBg();
  applyGlass();
}
function isDark(){return (P.darkMode===null||P.darkMode===undefined)?window.matchMedia('(prefers-color-scheme: dark)').matches:!!P.darkMode;}
applyCustom();applyPrefs();
const TABS=[{k:'menu',i:'🏠',t:'Heute'},{k:'practice',i:'🎯',t:'Üben'},{k:'planner',i:'📅',t:'Planer'},{k:'words',i:'📚',t:'Wörter'},{k:'stats',i:'📈',t:'Statistik'}];
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
  try{const o=decodeBackup(txt);if(!o||typeof o!=='object'||Array.isArray(o)||!o.box||typeof o.box!=='object')throw new Error('x');P=sanitize(Object.assign(DEF(),o));migrate();applyCustom();applyPrefs();save();S.paste=false;S.bk='';render();toast('Stand wiederhergestellt');}
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
function fl(){return P.lang2==='fr'?'Englisch/Französisch':(P.lang2==='la'?'Englisch/Latein':'Englisch');}
const STARTER={fr:[['bonjour','Guten Tag',4],['merci','danke',4],["s'il vous plaît",'bitte',4],['la maison','das Haus',6],["l'école",'die Schule',7],['le livre','das Buch',7],['manger','essen',6],['boire','trinken',6],['parler','sprechen',4],['aimer','lieben, mögen',2],['heureux','glücklich',2],['triste','traurig',2],['grand','groß',1],['petit','klein',1],['la tête','der Kopf',0],['la main','die Hand',0],['le matin','der Morgen',8],['le soir','der Abend',8],['la pluie','der Regen',5],['le soleil','die Sonne',5]],
 la:[['amicus','Freund',7],['puella','Mädchen',7],['puer','Junge',7],['domus','Haus',6],['aqua','Wasser',5],['terra','Erde, Land',5],['videre','sehen',3],['audire','hören',3],['dicere','sagen',4],['venire','kommen',3],['ire','gehen',3],['laudare','loben',2],['amare','lieben',2],['timere','fürchten',2],['magnus','groß',1],['parvus','klein',1],['bonus','gut',2],['malus','schlecht',2],['dies','Tag',8],['nox','Nacht',8]]};
let AI=null,AIIMG=false;
function aiOK(){return !!AI&&P.aiOn!==false;}
function aiTrack(){P.aiCalls=(P.aiCalls||0)+1;const t=fmt(new Date());P.aiDays[t]=(P.aiDays[t]||0)+1;save();}
function aiErr(c){return ({not_granted:'Claude darf hier nicht genutzt werden. Erlaube es im Dialog.',sampling_disabled:'Claude ist für dieses Konto nicht verfügbar.',rate_limited:'Gerade zu viele Anfragen. Versuche es gleich noch einmal.',image_rejected:'Das Bild passt nicht. Probiere ein anderes Foto.',invalid_json:'Ich konnte die Liste nicht sicher lesen. Mach ein schärferes Foto oder tippe auf „Genauer lesen“.',empty_completion:'Ich habe keine Wörter erkannt. Probiere ein schärferes Foto.',cancelled:'Abgebrochen.'}[c])||'Das hat nicht geklappt. Versuche es noch einmal.';}
async function aiInit(){
  try{
    if(!(window.claude&&window.claude.use))return;
    const s=await window.claude.use('sample');if(!s)return;AI=s;
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
  const c=await cloudInit();
  if(!c){S.cloudErr='nicht angemeldet oder hier nicht verfügbar';if(!silent)toast('Die Cloud ist in dieser Ansicht nicht verfügbar. Du musst angemeldet sein.');return false;}
  try{
    await cloudRef().set({txt:encodeBackup(),at:Date.now(),words:allIds().length,score:progScore(P)});
    CSAVING=true;P.cloudAt=Date.now();save();CSAVING=false;S.cloudErr='';
    if(!silent){toast('In der Cloud gesichert.');render(true);}
    return true;
  }catch(e){CSAVING=false;S.cloudErr=String((e&&(e.message||e.code))||e).slice(0,60);if(!silent)toast('Cloud-Sicherung fehlgeschlagen. Versuche es später.');return false;}
}
function cloudQueue(){if(P.autoCloud===false||NOSAVE||!window.claude)return;clearTimeout(CQ);CQ=setTimeout(cloudAuto,6000);}
function progScore(o){try{return (o.xp||0)+((o.st&&(o.st.ok+o.st.no))||0)+Object.keys(o.days||{}).length*5+((o.custom&&o.custom.length)||0);}catch(e){return 0;}}
async function cloudPeek(){
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
  try{const o=decodeBackup(f.txt);['darkMode','look','bg','accent','glass','fontSize','bgMotion','haptic','sfx'].forEach(function(k){if(o[k]!==undefined)P[k]=o[k];});CSAVING=true;save();CSAVING=false;applyPrefs();}catch(e){CSAVING=false;}
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
  if(f&&(isFresh()||f.score>progScore(P)+5)){S.cloudFound=f;if(isFresh())previewUi(f);render(true);}
}
function cloudBanner(){const f=S.cloudFound;if(!f)return '';return '<div class="glass banner w col"><b>☁️ Ein gesicherter Stand mit mehr Fortschritt wurde gefunden</b><span class="hint" style="margin:0">'+(f.at?'Gesichert '+ago(f.at)+'. ':'')+'Wiederherstellen holt Fortschritt, Wörter und Einstellungen zurück.</span><span class="row2c"><button class="btn sm pri" data-act="cloudrestore">Wiederherstellen</button><button class="btn sm" data-act="clouddismiss">Neu anfangen</button></span></div>';}
async function cloudLoad(){
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
const SCANPROMPT='Du liest ein Foto einer Vokabelliste (Schulbuch, Heft oder Tabelle). Extrahiere alle Vokabelpaare. Antworte NUR mit JSON in dieser Form: {"title":"kurzer Listenname, höchstens 28 Zeichen, aus Überschrift oder Thema","lang":"en|fr|la","words":[{"f":"Wort oder Wendung in der Fremdsprache","d":"deutsche Übersetzung","ex":"Beispielsatz aus dem Foto oder leer","t":Themennummer,"e":"ein einzelnes Emoji, nur wenn es das Wort wirklich anschaulich macht (konkrete Dinge, Gefühle), sonst leer"}]}. Themen: 0 Körper & Gesundheit, 1 Kleidung & Aussehen, 2 Gefühle & Charakter, 3 Bewegung & Handlung, 4 Denken & Sprechen, 5 Natur Licht Wetter, 6 Haus & Alltag, 7 Schule & Gesellschaft, 8 Ort Zeit Menge. Regeln: erfinde nichts, nur sichtbare Wörter; mehrere Bedeutungen mit Semikolon trennen; Kürzel wie jmdn./etw. und sb/sth beibehalten; höchstens 120 Wörter.';
function downscale(file){return new Promise(function(res){const img=new Image();const url=URL.createObjectURL(file);img.onload=function(){const m=1600;let w=img.naturalWidth,h=img.naturalHeight;const s=Math.min(1,m/Math.max(w,h));w=Math.round(w*s);h=Math.round(h*s);const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);c.toBlob(function(b){URL.revokeObjectURL(url);res(b||file);},'image/jpeg',0.85);};img.onerror=function(){URL.revokeObjectURL(url);res(file);};img.src=url;});}
async function scanRun(blob,tier){
  const n=document.getElementById('a-name');if(n)S.add.name=n.value;
  S.add.busy=true;S.add.err='';S.add.found=null;S.add.file=blob;render(true);
  try{
    aiTrack();
    const r=await AI.json(SCANPROMPT,{images:[blob],modelTier:tier||'quick'});
    const words=((r&&r.words)||[]).filter(function(w){return w&&w.f&&w.d;}).slice(0,150).map(function(w){return {f:String(w.f).trim(),d:String(w.d).trim(),ex:String(w.ex||'').trim(),t:(Number.isInteger(w.t)&&w.t>=0&&w.t<=8)?w.t:9,e:(typeof w.e==='string'&&/^[^\x00-\x7F]{1,10}$/.test(w.e.trim()))?w.e.trim():'',on:true};});
    if(!words.length)throw {code:'empty_completion'};
    const lg=['en','fr','la'].indexOf(r.lang)>=0?r.lang:S.add.lang;
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
function emojiOf(id){if(id<BASE)return EMO[W[id][0]]||'';const c=P.custom[id-BASE];return (c&&c.emo)||'';}
function emoBlock(id,ctx){if(P.emo==='off')return '';if(ctx==='right'&&P.emo!=='all')return '';const e=emojiOf(id);return e?'<div class="emo" aria-hidden="true">'+e+'</div>':'';}
function memoBlock(id){
  if(P.memo&&P.memo[id])return '<div class="memo">💡 '+esc(P.memo[id])+'</div>';
  return aiOK()?'<button class="link" data-act="memo" data-id="'+id+'">✨ Eselsbrücke</button>':'';
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const t=a[i];a[i]=a[j];a[j]=t;}return a;}
function isAlive(id){if(id<BASE)return true;const c=P.custom[id-BASE];return !!c&&!c.del&&(!c.lang||c.lang==='en'||c.lang===P.lang2);}
function allIds(){const a=[];for(let i=0;i<W.length;i++)if(isAlive(i))a.push(i);return a;}
const CHAPTERS=[{n:'On the bridge',a:0,b:20},{n:'Chalk',a:21,b:37},{n:'Chalk · Teil 2',a:38,b:59},{n:'Chalk · Teil 3',a:60,b:68},{n:'Zukunft & Gesellschaft',a:69,b:78},{n:'Film: Bro',a:79,b:97}];
function blocks(){
  const key=W.length+':'+P.custom.filter(function(c){return c.del;}).length+':'+P.lang2;
  if(BC&&BCk===key)return BC;
  const bl=[];
  CHAPTERS.forEach(function(c){const ids=[];for(let i=c.a;i<=c.b&&i<BASE;i++)ids.push(i);bl.push({ids:ids,custom:false,name:c.n});});
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
function scope(b){if(typeof b==='string'&&/^t\d+$/.test(b)){const n=parseInt(b.slice(1),10);return allIds().filter(function(id){return wtopic(id)===n;});}if(b==='all')return allIds();if(b==='weak')return weakIds();if(b==='exam'){const e=examById(S.examId);return e?examIds(e):[];}return range(b);}
function pct(ids){if(!ids.length)return 0;let s=0;ids.forEach(function(id){s+=bAvg(id);});return Math.round(s/(5*ids.length)*100);}
function secureShare(ids){if(!ids.length)return 0;let n=0;ids.forEach(function(id){n+=(bx(id,'en')>=3?1:0)+(bx(id,'de')>=3?1:0);});return Math.round(n/(2*ids.length)*100);}
function securePairs(){let n=0,t=0;allIds().forEach(function(id){['en','de'].forEach(function(d){t++;if(bx(id,d)>=3)n++;});});return [n,t];}
function mastered(){return allIds().filter(function(id){return bx(id,'en')>=5&&bx(id,'de')>=5;}).length;}
function applyResult(id,d,ok,m,hinted){
  const key=kk(id,d);const b=P.box[key]||0;
  if(ok&&hinted){P.box[key]=Math.max(b,1);P.due[key]=addDays(1);}
  else if(ok){const cap=CAP[m]||5;const nb2=Math.max(b,Math.min(cap,Math.max(1,b)+1));P.box[key]=nb2;P.due[key]=addDays(INT[nb2]);}
  else{P.box[key]=1;P.due[key]=addDays(0);P.wrong[id]=(P.wrong[id]||0)+1;}
}
function dueText(id,d){const v=P.due[kk(id,d)];if(!v)return '';const n=Math.round((new Date(v)-new Date(fmt(new Date())))/864e5);return n<=0?'heute':(n===1?'morgen':'in '+n+' Tagen');}
function markGood(id){const t=fmt(new Date());const a=P.gd[t]||[];if(a.indexOf(id)<0)a.push(id);P.gd[t]=a;}
function dayCount(){return (P.gd[fmt(new Date())]||[]).length;}
function bump(){const t=fmt(new Date());P.days[t]=(P.days[t]||0)+1;}
function updHist(){P.hist[fmt(new Date())]=securePairs()[0];}
function streak(){let n=0;const d=new Date();if(!(P.days[fmt(d)]>0))d.setDate(d.getDate()-1);while(P.days[fmt(d)]>0||(P.frozen&&P.frozen[fmt(d)])){if(P.days[fmt(d)]>0)n++;d.setDate(d.getDate()-1);}return n;}
function autoFreeze(){
  if(!(P.freeze>0))return;const y=new Date();y.setDate(y.getDate()-1);const y2=new Date();y2.setDate(y2.getDate()-2);
  const ky=fmt(y),ky2=fmt(y2);
  if(P.days[fmt(new Date())]>0||P.days[ky]>0||(P.frozen&&P.frozen[ky]))return;
  if(!(P.days[ky2]>0||(P.frozen&&P.frozen[ky2])))return;
  P.frozen[ky]=true;P.freeze--;save();setTimeout(function(){toast('Serien-Schutz hat deine Serie gerettet.');},400);
}
function bestStreak(){const ks=Object.keys(P.days).filter(function(k){return P.days[k]>0;}).sort();let best=0,cur=0,prev=null;ks.forEach(function(k){const t=new Date(k).getTime();cur=(prev!==null&&Math.round((t-prev)/864e5)===1)?cur+1:1;if(cur>best)best=cur;prev=t;});return best;}
function daysLeft(e){return Math.round((new Date(e.date)-new Date(fmt(new Date())))/864e5);}
function nextExam(){const l=P.exams.filter(function(e){return daysLeft(e)>=0;}).sort(function(a,b){return daysLeft(a)-daysLeft(b);});return l[0]||null;}
function dateDe(s){try{return new Date(s).toLocaleDateString('de-DE',{weekday:'short',day:'numeric',month:'long',timeZone:'UTC'});}catch(e){return s;}}
function inDays(n){return n<=0?'heute':(n===1?'morgen':'in '+n+' Tagen');}
let S={screen:P.onb?'menu':'onb',dir:'en',b:'all',examId:null,pend:'auto',i:0,flip:false,mode:'auto',free:false,confirmReset:false,q:'',adv:false,wmode:'blocks',add:{mode:'paste',name:'',lang:'en',busy:false,found:null,err:'',file:null},confirmList:-1,from:'menu',prevTab:'menu',paste:false,bk:'',anim:'',form:{name:'',date:'',sel:null},formErr:'',addErr:''};
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
  s=s.toLowerCase().replace(/\([^)]*\)/g,' ').replace(/jmdn\.|jmdm\.|jmds\.|etw\./g,' ').replace(/\bsb\b|\bsth\b/g,' ');
  s=s.replace(/[\/.,;!?'"\-]/g,' ').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ß/g,'ss').replace(/ae/g,'a').replace(/oe/g,'o').replace(/ue/g,'u');
  return s.replace(/\s+/g,' ').trim().replace(/^(to|sich|be) /,'');
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
function check(input,full){
  const x=norm(input);if(!x)return false;
  const alts=full.split(';').map(norm).filter(Boolean);alts.push(norm(full));
  const noArt=function(t){return t.replace(/^(der|die|das|le|la|les|un|une|l)\s+(?=\S)/,'');};
  if(!/^(der|die|das|le|la|les|un|une|l)\s/.test(x))alts.slice().forEach(function(t){const u=noArt(t);if(u&&u!==t)alts.push(u);});
  for(let k=0;k<alts.length;k++){const t=alts[k];if(x===t)return true;const tol=t.length>=10?2:(t.length>=5?1:0);if(tol&&lev(x,t)<=tol)return true;}
  return false;
}
function leaveMsg(){
  if(S.screen==='quiz'&&Q&&Q.queue&&Q.queue.length&&Q.seen&&Q.seen.size>0){return Q.test?['Test abbrechen?','Dein Ergebnis geht verloren. Du kannst den Test danach neu starten.']:['Runde verlassen?','Dein Fortschritt bleibt gespeichert. Du kannst die Runde später auf Heute fortsetzen.'];}
  if(S.screen==='game'&&S.game&&!S.game.over){const g=S.game;if(g.type==='blitz'&&g.t<60)return ['Blitz beenden?','Dein Stand in dieser Runde geht verloren.'];if(g.type==='mem'&&g.moves>0)return ['Memory beenden?','Dein Stand in diesem Spiel geht verloren.'];}
  return null;
}
let LASTSCR=null;
function header(){
  if(S.screen==='onb')return '';
  const back=!isRoot(S.screen);
  const CT={practice:'Üben',planner:'Planer',words:'Wörter',stats:'Statistik'}[S.screen];
  return '<header class="hdr"><div class="hin">'+(CT?'<div class="ctit" aria-hidden="true">'+CT+'</div>':'')+(back?'<button class="gbtn gback" data-act="back" aria-label="Zurück"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true"><path d="M10 2L2.5 10 10 18" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>':'<div class="logo gradient-text">EasyVocab</div>')+'<div class="sp"></div><div class="gbadge" title="Tage in Folge">🔥 '+streak()+'</div><div class="gbadge" data-act="shop" role="button" title="Shop" style="cursor:pointer">'+((xpOn()||(P.boostUntil||0)>Date.now())?'⚡ ':'')+((P.avatar||P.emoji)?(P.avatar||P.emoji)+' ':'')+'🪙 '+(P.coins||0)+'</div>'+(isRoot(S.screen)?'<button class="gbtn" data-act="toadd" aria-label="Wörter hinzufügen">＋</button>':'')+(S.screen==='settings'?'':'<button class="gbtn" data-act="settings" aria-label="Einstellungen">⚙️</button>')+'</div></header>';
}
function render(keep){
  try{renderInner(keep);}
  catch(err){
    try{console.error(err);}catch(e){}
    S.anim='';
    if(S.screen!=='menu'){S.screen='menu';try{renderInner(false);toast('Die Ansicht ließ sich nicht laden. Du bist zurück auf Heute.');return;}catch(e2){}}
    app.innerHTML='<main><div class="glass pad w center"><div class="big-ico">⚠️</div><p>Die Ansicht ließ sich nicht laden.</p><button class="btn pri full" data-act="reloadapp">Neu laden</button></div></main>';
  }
}
function renderInner(keep){
  const sy=window.scrollY;
  if(keep){try{app.style.minHeight=document.documentElement.scrollHeight+'px';}catch(e){}}
  if(typeof S.b==='number'&&!blocks()[S.b])S.b='all';
  let v='';
  const s=S.screen;
  if(s==='menu')v=menuView();else if(s==='practice')v=practiceView();else if(s==='onb')v=onbView();else if(s==='pickdir')v=pickView();else if(s==='learn')v=learnView();
  else if(s==='quiz')v=quizView();else if(s==='nodue')v=nodueView();else if(s==='words')v=wordsView();else if(s==='add')v=addView();
  else if(s==='planner')v=plannerView();else if(s==='stats')v=statsView();else if(s==='settings')v=settingsView();else if(s==='shop')v=shopView();else if(s==='profile')v=profileView();else if(s==='pet')v=petView();else if(s==='legal')v=legalView();else if(s==='word')v=wordView();else if(s==='game')v=gameView();else if(s==='feedback')v=feedbackView();else v=resultView();
  app.innerHTML=header()+'<main class="'+(S.anim||'')+((s==='practice')?' tall':'')+((s==='menu')?' home':'')+((s==='quiz'||s==='learn')?' qz':'')+((s==='stats')?' stats':'')+'">'+v+'</main>'+(showBar()?'<footer class="legalf"><button class="link" data-act="legal" data-v="imp">Impressum</button><span>·</span><button class="link" data-act="legal" data-v="dat">Datenschutz</button></footer>'+tabBar():'');
  S.anim='';
  (function(){const prev=LASTSCR;LASTSCR=s;if(!prev||prev===s)return;if(prev==='onb'||s==='onb')return;const mn=document.querySelector('main');if(!mn)return;
    if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const cls=(isRoot(prev)&&isRoot(s))?'xfade':(isRoot(s)?'pop':'push');mn.classList.add(cls);setTimeout(function(){mn.classList.remove(cls);},420);})();
  if(S.sheet){const sh=S.sheet;let it='';sh.items.forEach(function(x){it+='<button class="shi'+(x.danger?' dg':'')+'" data-act="shgo" data-v="'+x.a+'" data-id="'+(x.id==null?'':x.id)+'"><span>'+x.i+'</span>'+esc(x.t)+'</button>';});
    app.insertAdjacentHTML('beforeend','<div class="shbk" data-act="shclose"></div><div class="sh2" role="dialog" aria-modal="true" aria-label="'+esc(sh.title)+'"><div class="grab"><i></i></div><div class="sht"><b>'+esc(sh.title)+'</b>'+(sh.sub?'<small>'+esc(sh.sub)+'</small>':'')+'</div><div class="shl">'+it+'</div><button class="shi cancel" data-act="shclose">Abbrechen</button></div>');}
  if(S.leave){app.insertAdjacentHTML('beforeend','<div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="lvt"><div class="glass pad col center mbox"><h2 id="lvt" style="margin:0">'+esc(S.leave[0])+'</h2><p class="hint" style="margin:0">'+esc(S.leave[1])+'</p><div class="row2" style="width:100%"><button class="btn bad" data-act="leaveyes">Verlassen</button><button class="btn pri" data-act="leaveno">Weitermachen</button></div></div></div>');}
  if(S.confetti&&s==='result'){S.confetti=false;setTimeout(confetti,200);}
  window.scrollTo(0,keep?sy:0);
  if(keep){requestAnimationFrame(function(){if(Math.abs(window.scrollY-sy)>2)window.scrollTo(0,sy);app.style.minHeight='';});}else{app.style.minHeight='';}
  const hd=document.querySelector('.hdr');if(hd)hd.classList.toggle('sc',window.scrollY>6);
  if(s==='quiz'&&Q&&Q.m==='type'&&!Q.answered&&!P.pen){const el=document.getElementById('ans');if(el){try{el.focus({preventScroll:true});}catch(e){}}}
  if(s==='learn')bindSwipe();
  if(s==='quiz'&&Q&&Q.m==='write')initInk();
  if(s==='stats'){const mn=document.querySelector('main.stats');if(mn){
    const wrap=function(a,b){if(!a||!b||a.parentNode!==mn||b.parentNode!==mn)return;const w=document.createElement('div');w.className='pair';mn.insertBefore(w,a);w.appendChild(a);w.appendChild(b);};
    wrap(mn.querySelector('.hero2'),mn.querySelector('.sgrid3'));wrap(mn.querySelector('.wk'),mn.querySelector('.shp'));
    const lern=mn.querySelector('.stack');const lc=lern?lern.closest('.glass'):null;const hb=mn.querySelector('[data-act="hardgo"]');const hc=hb?hb.closest('.glass'):null;if(lc&&hc)wrap(lc,hc);}}
  if(s==='menu'){const mn=document.querySelector('main.home');if(mn){const kids=Array.prototype.filter.call(mn.children,function(c){return !c.classList.contains('hero2')&&!c.classList.contains('banner');});kids.forEach(function(c){c.classList.add('half');});if(kids.length%2===1&&kids.length)kids[kids.length-1].classList.remove('half');}}
  pillInit();
  segInit();
  ctUpdate();
}
function bName(b){
  if(b==='all')return 'Alle Listen';if(b==='weak')return 'Schwache Wörter';
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
const TIPS=['Erst überlegen, dann umdrehen. Erinnern bringt mehr als nochmal Ansehen.','Kurz und oft schlägt lang und selten. Lieber 10 Minuten täglich als eine Stunde am Vorabend.','Abends zu wiederholen kann helfen, weil das Gehirn im Schlaf festigt. Die Belege sind aber gemischt.','Sprich das Wort laut aus, auch wenn es niemand hört. Das gibt dem Wort einen zweiten Weg ins Gedächtnis.','Lerne Wörter im Satz. Ein Beispielsatz hilft mehr als das Wort allein.','Fehler sind nützlich. Wörter, die du falsch hattest, merkst du dir nach der Korrektur oft besser.','Mische die Reihenfolge. Wörter aus verschiedenen Listen abwechselnd zu üben fühlt sich schwerer an, wirkt aber besser.','Teste dich vor dem Test einmal ohne Hilfe. So siehst du ehrlich, wo du stehst.'];
function tipCard(){const d=new Date();const n=Math.floor((d-new Date(d.getFullYear(),0,0))/864e5);return '<div class="glass pad w fill-extra"><div class="hd2"><span class="lab">💡 Lerntipp</span></div><p style="margin:2px 0 0">'+esc(TIPS[n%TIPS.length])+'</p></div>';}
function weekStrip(){const st=weekStart(0);const L=['Mo','Di','Mi','Do','Fr','Sa','So'];const today=fmt(new Date());let n=0;let h='<div class="wkrow">';
  for(let i=0;i<7;i++){const d=new Date(st);d.setDate(st.getDate()+i);const k=fmt(d);const on=(P.days[k]>0)||(P.frozen&&P.frozen[k]);if(on)n++;h+='<div class="wkd'+(on?' on':'')+(k===today?' td':'')+'"><i>'+(on?'✓':'')+'</i><small>'+L[i]+'</small></div>';}
  return '<div class="glass pad w col tight fill-extra"><div class="hd2"><span class="lab">Diese Woche</span><span class="hint">'+n+' von 7 Tagen</span></div>'+h+'</div></div>';}
function hardCard(){const hard=allIds().filter(function(id){return (P.wrong[id]||0)>0;}).sort(function(a,b){return P.wrong[b]-P.wrong[a];}).slice(0,3);if(!hard.length)return '';
  let h='<div class="glass pad w tight fill-extra"><div class="hd2"><span class="lab">Hier hakt es</span><span class="hint">'+hard.length+(hard.length===1?' Wort':' Wörter')+'</span></div>';hard.forEach(function(id){h+=wordRow(id,true).replace('</div>','<span class="hint">'+P.wrong[id]+'×</span></div>');});
  return h+'<button class="btn pri full" style="margin-top:8px" data-act="hardgo">Diese Wörter üben</button></div>';}
function listsCard(){const bl=blocks();if(!bl.length)return '';const rows=bl.map(function(b,k){return {k:k,name:bName(k),p:pct(b.ids),n:b.ids.length};}).sort(function(a,b){return a.p-b.p;}).slice(0,5);
  let h='<div class="glass pad w col tight fill-extra"><div class="hd2"><span class="lab">Deine Listen</span><span class="hint">Tippen zum Üben</span></div>';
  rows.forEach(function(r){h+='<button class="xr lst" data-act="listgo" data-k="'+r.k+'"><span class="xn">'+esc(r.name)+'</span><span class="prog thin lp"><i style="width:'+r.p+'%"></i></span><span class="xs">'+r.p+' %</span></button>';});
  return h+'</div>';}
function greetWord(){const h=new Date().getHours();return h<11?'Guten Morgen':(h<17?'Guten Tag':'Guten Abend');}
function dateDe2(){const d=new Date();return ['So','Mo','Di','Mi','Do','Fr','Sa'][d.getDay()]+', '+d.getDate()+'. '+['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'][d.getMonth()];}
function wotdCard(){
  const all=allIds().filter(function(id){return wlang(id)==='en'&&isAlive(id);});if(!all.length)return '';
  const weak=all.filter(function(id){return (P.wrong[id]||0)>0;});const due=dueOf(all,true);const pool=weak.length?weak:(due.length?due:all);
  const d=new Date();const n=Math.floor((d-new Date(d.getFullYear(),0,0))/864e5);const id=pool[n%pool.length];
  return '<div class="glass pad w col tight wotd"><div class="hd2"><span class="lab">✨ Wort des Tages</span><span class="hint">'+(weak.length?'aus deinen schwachen Wörtern':'für heute')+'</span></div><div class="row" style="gap:10px;align-items:center;justify-content:space-between"><span class="wm" data-act="wordopen" data-id="'+id+'" style="cursor:pointer"><b style="font-size:22px">'+esc(gEn(id))+'</b><small style="font-size:15px">'+esc(gShort(W[id][1]))+'</small></span>'+(canSpeakW(id)?'<button class="btn sm" data-act="speak" data-id="'+id+'">🔊 Anhören</button>':'')+'</div>'+(E[id]?'<div class="hint" style="font-style:italic">'+esc(E[id])+'</div>':'')+'</div>';
}
function petCard(){
  if(!P.avatar)return shopLink();
  const a=P.avatar,hl=hungerLvl();const st=['satt und zufrieden','hat Hunger','hat großen Hunger'][Math.max(0,hl)];
  return '<div class="glass pad w tight petrow'+(hl===2?' weak':'')+'"><button class="petmini" data-act="petopen" data-v="'+a+'" aria-label="Tier öffnen"><span class="am a0">'+a+'</span></button><span class="lt"><b>'+esc(petName(a))+'</b><small>'+st+'</small></span>'+(hl>0?'<button class="btn sm pri" data-act="feed">Füttern</button>':'<button class="btn sm" data-act="shop">Shop</button>')+'</div>';
}
function menuView(){
  autoFreeze();dailyBonus();weekGoalCheck();
  const dc=dayCount();const gp=Math.min(100,Math.round(dc/P.dailyGoal*100));
  const due=dueOf(allIds(),true);const neu=due.filter(function(id){return bx(id,'en')===0&&bx(id,'de')===0;}).length;
  let h=cloudBanner();
  if(SAVEFAIL)h+='<div class="glass banner w">⚠️ Dein Gerät lässt das Speichern nicht zu. Fortschritt geht beim Schließen verloren. Kopiere in den Einstellungen die Sicherung.</div>';
  if(P.remindersEnabled&&new Date().getHours()>=(P.remHour||17)&&dc===0&&streak()>0)h+='<div class="glass banner w">🔥 Dein Streak ist in Gefahr. Lerne heute noch ein paar Wörter.</div>';
  const lvl=1+Math.floor(P.xp/100);const into=P.xp%100;
  h+='<div class="greet w"><div><small>'+dateDe2()+'</small><h1>'+greetWord()+(P.nick?', '+esc(P.nick):'')+'</h1></div></div>';
  h+='<div class="glass hero2 compact w"><div class="hr"><div class="ringw md">'+ring(gp)+'<b>'+dc+'</b></div><div class="ht"><span class="lab">Tagesziel</span><strong>'+dc+' von '+P.dailyGoal+' Wörtern</strong><small>'+(due.length?neu+' neu · '+(due.length-neu)+' Wiederholung · ca. '+Math.max(1,Math.round(Math.min(due.length,Math.max(P.quizLength,P.dailyGoal-dc))*(P.avgSec||8)/60))+' Min.':'Alles erledigt')+'</small></div><button class="btn pri go" data-act="smart">'+(due.length?'Lernen':'Üben')+'</button></div></div>';
  h+='<div class="chips3 w"><button class="glass gtap chip3" data-act="tab" data-k="stats"><b>🔥 '+streak()+'</b><small>Tage Serie</small></button><button class="glass gtap chip3" data-act="profile"><b>⭐ Level '+lvl+'</b><span class="prog thin"><i style="width:'+into+'%"></i></span><small>'+P.xp+' XP</small></button><button class="glass gtap chip3" data-act="shop"><b>🪙 '+P.coins+'</b><small>Münzen</small></button></div>';
  h+='<div class="qa w">'+[['smart','🚀','Smart-Training'],['weakq','🎯','Schwache Wörter'],['cardsq','📋','Karteikarten'],['blitzq','⚡','Blitz']].map(function(q){return '<button class="glass gtap qb" data-act="'+q[0]+'"><span>'+q[1]+'</span><b>'+q[2]+'</b></button>';}).join('')+'</div>';
  if(new Date().getDay()===6||new Date().getDay()===0){const wi=weekInfo(0);if(wi.words>0||wi.days>0)h+=weekCard('📅 Wochenrückblick');}
  const rq=P.run&&P.run.queue?P.run.queue.filter(isAlive).length:0;
  if(rq)h+='<button class="glass gtap lrow" data-act="resume"><span class="li">▶️</span><span class="lt"><b>Runde fortsetzen</b><small>'+rq+' Karten offen</small></span><span class="chev">›</span></button>';
  const ne=nextExam();
  if(ne){
    const ids=examIds(ne);const left=daysLeft(ne);const open=ids.filter(function(id){return bAvg(id)<3;}).length;const sh=secureShare(ids);
    h+='<button class="glass gtap lrow" data-act="examgo" data-id="'+ne.id+'"><span class="li">📅</span><span class="lt"><b>'+esc(ne.name)+' · '+inDays(left)+'</b><small>'+sh+' % sicher · '+(open?'noch '+open+' Wörter':'alles sicher')+'</small><span class="prog thin"><i style="width:'+sh+'%"></i></span></span><span class="chev">›</span></button>';
  }
  h+=petCard();
  h+=wotdCard();
  const bl=badgeList();const gotN=bl.filter(function(b){return b[2];}).length;const newN=bl.filter(function(b){return b[2]&&!P.claimed[b[3]];}).length;
  h+='<div class="glass pad w tight badgec"><div class="hd2"><span class="lab">Abzeichen</span><button class="link" data-act="tab" data-k="stats">'+(newN?newN+' zum Abholen':gotN+' von '+bl.length)+' ›</button></div><div class="bdrow">'+bl.slice().sort(function(x,y){return (y[2]?1:0)-(x[2]?1:0);}).slice(0,6).map(function(b){return '<button class="bd1'+(b[2]?(P.claimed[b[3]]?' got':' new'):'')+'" data-act="claim" data-k="'+b[3]+'" aria-label="'+esc(b[1])+'"><span>'+b[0]+'</span></button>';}).join('')+'</div></div>';
  if(due.length){const nxt=due.slice().sort(function(a,b){return (bAvg(a)-bAvg(b))||(a-b);}).slice(0,2);
    h+='<div class="glass pad w tight nextc"><div class="hd2"><span class="lab">Als Nächstes</span><span class="hint">'+due.length+' fällig</span></div>';nxt.forEach(function(id){h+=wordRow(id,true);});h+='</div>';}
  if(!(new Date().getDay()===6||new Date().getDay()===0))h+=weekStrip();
  h+=hardCard();
  h+=tipCard();
  return h;
}

/* ---------- Spiele und KI-Geschichten ---------- */
function clipSteps(id){const st=['word','mean'];if(E[id])st.push('ex');return st;}
function clipDur(){return {slow:3600,normal:2700,fast:1900}[(S.gs&&S.gs.tempo)||'normal'];}
function clipPlan(g){
  clearTimeout(g.tm);if(g.paused||g.done)return;
  const id=g.ids[g.i];const st=clipSteps(id)[g.step];
  if(S.gs&&S.gs.clipsound!=='off'&&window.speechSynthesis&&canSpeakW(id)){
    if(st==='word'){clipSay(gEn(id));}else if(st==='ex'){clipSay(E[id]);}
  }
  g.tm=setTimeout(function(){if(S.screen!=='game'||S.game!==g||g.paused)return;clipNext(g,1);},st==='ex'?clipDur()+1200:clipDur());
}
function clipSay(t){try{const nm=P.vC;const v=(nm?VOICES.filter(function(x){return x.name===nm;})[0]:null)||enVoices()[0];const u=new SpeechSynthesisUtterance(t);u.lang='en-GB';if(v){try{u.voice=v;u.lang=v.lang;}catch(e){}}u.rate=({slow:0.8,normal:0.92,fast:1.05}[(S.gs&&S.gs.tempo)||'normal'])||0.92;speechSynthesis.cancel();speechSynthesis.speak(u);}catch(e){}}
function clipNext(g,d){
  const id=g.ids[g.i];const n=clipSteps(id).length;g.rev=false;
  if(d>0){if(g.step<n-1)g.step++;else if(g.i<g.ids.length-1){g.i++;g.step=0;}else{g.done=true;clearTimeout(g.tm);render(true);return;}}
  else{if(g.step>0)g.step--;else if(g.i>0){g.i--;g.step=0;}}
  render(true);clipPlan(g);
}

function wordIds(n,src,list,minL,maxL){
  const ids=gameIds(300,src,list).filter(function(id){const w=gEn(id).replace(/^to /,'');return /^[a-zA-Z]+$/.test(w)&&w.length>=minL&&w.length<=maxL;});
  return ids.slice(0,n);
}
function wcore(id){return gEn(id).replace(/^to /,'').toLowerCase();}
function miniStart(type){
  const gs=S.gs,n=gs.n[type];
  const L={salat:[4,9],galgen:[4,10],diktat:[3,12]}[type];
  const ids=wordIds(n,gs.src,gs.list,L[0],L[1]);if(ids.length<3){toast('Dafür gibt es hier zu wenige passende Wörter. Wähle eine andere Quelle.');return;}
  const g={type:type,ids:ids,i:0,score:0,miss:0,over:false,state:'play'};
  mkRound(g);S.game=g;render();
  if(type==='diktat')setTimeout(function(){mkSay(g);},250);
}
function mkRound(g){
  const w=wcore(g.ids[g.i]);g.word=w;g.state='play';g.hint=0;
  if(g.type==='salat'){let l=w.split('');let t=0;do{l=shuffle(w.split(''));t++;}while(l.join('')===w&&t<8);g.pool=l.map(function(c,k){return {c:c,k:k,used:false};});g.sel=[];}
  if(g.type==='galgen'){g.guess={};g.lives=6;}
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
  const title={salat:'Wortsalat',galgen:'Wörter raten',diktat:'Diktat'}[g.type];
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
  h+='<div class="hang"><div class="lives">'+'❤️'.repeat(g.lives)+'🖤'.repeat(6-g.lives)+'</div><div class="mask'+(g.state==='lost'?' lostw':'')+'">'+shown+'</div></div>';
  h+='<div class="kbd">'+'abcdefghijklmnopqrstuvwxyz'.split('').map(function(c){const t=g.guess[c];return '<button class="key'+(t?(g.word.indexOf(c)>=0?' hit':' miss'):'')+'" data-act="gk" data-v="'+c+'"'+((t||g.state!=='play')?' disabled':'')+'>'+c.toUpperCase()+'</button>';}).join('')+'</div>';
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
function sfx(kind){if(!P.sfx)return;try{const A=window.AudioContext||window.webkitAudioContext;if(!A)return;ACX=ACX||new A();const t=ACX.currentTime;const tone=function(f,st,d,v){const o=ACX.createOscillator(),g=ACX.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(0.0001,t+st);g.gain.exponentialRampToValueAtTime(v,t+st+0.02);g.gain.exponentialRampToValueAtTime(0.0001,t+st+d);o.connect(g);g.connect(ACX.destination);o.start(t+st);o.stop(t+st+d+0.05);};
  if(kind==='ok'){tone(659,0,0.14,0.12);tone(988,0.1,0.2,0.12);}else{tone(196,0,0.22,0.1);}}catch(e){}}
function confetti(){if(RM)return;const box=document.createElement('div');box.className='confetti';box.setAttribute('aria-hidden','true');const E=['🎉','✨','⭐','🎊','💙','🌟'];for(let i=0;i<26;i++){const p=document.createElement('i');p.textContent=E[i%E.length];p.style.left=(Math.random()*100)+'%';p.style.animationDelay=(Math.random()*0.5)+'s';p.style.fontSize=(16+Math.random()*16)+'px';box.appendChild(p);}document.body.appendChild(box);setTimeout(function(){if(box.parentNode)box.parentNode.removeChild(box);},3200);}
function gShort(t){return String(t).split(';')[0].replace(/\s*\(.*?\)\s*/g,' ').replace(/\s+/g,' ').trim();}
function gEn(id){return String(W[id][0]).replace(/\s*\(.*?\)\s*/g,' ').replace(/\bsb\/sth\b|\bsb\b|\bsth\b/g,'').replace(/\s+/g,' ').trim();}
function gameIds(n,src,list){
  const base=allIds().filter(function(id){return wlang(id)==='en'&&isAlive(id)&&gShort(W[id][1]).length<=26&&gEn(id).length<=22;});
  const inList=function(id){return true;};
  let pool=base;
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
  if(!S.gs)S.gs={src:'mix',list:0,dikt:'end',mean:'off',rep:'1',n:{mem:6,blitz:40,pod:8,story:8,clip:8,salat:8,galgen:8,diktat:8},tempo:'normal',expl:'on'};
  S.game={type:type,setup:true};setFrom();S.screen='game';render();
}
function beginGame(type){
  const gs=S.gs;const n=gs.n[type];const src=gs.src,list=gs.list;
  if(type==='mem'){
    const emo=(gs.variant==='emoji');let ids=gameIds(emo?200:n,src,list);if(emo)ids=ids.filter(function(id){return !!emojiOf(id);}).slice(0,n);
    if(ids.length<4){toast(emo?'Zu wenige Wörter mit Emoji in dieser Auswahl.':'Dafür gibt es hier zu wenige Wörter. Wähle eine andere Quelle.');return;}
    let cards=[];ids.forEach(function(id){cards.push({id:id,f:true,open:false,done:false});cards.push({id:id,f:false,open:false,done:false});});
    const g={type:'mem',emo:emo,cards:shuffle(cards),first:-1,lock:false,moves:0,t0:Date.now(),over:false,limit:(gs.mode==='timed')?Math.max(40,ids.length*12):0};g.left=g.limit;S.game=g;
    if(g.limit){g.iv=setInterval(function(){if(S.screen!=='game'||S.game!==g||g.over){clearInterval(g.iv);return;}g.left--;const el=document.getElementById('mt');if(el)el.textContent=g.left;if(g.left<=0){clearInterval(g.iv);g.over=true;g.lost=true;g.tEnd=Date.now();render(true);}},1000);}
  } else if(type==='blitz'){
    const ids=gameIds(n,src,list);if(ids.length<6){toast('Dafür gibt es hier zu wenige Wörter. Wähle eine andere Quelle.');return;}
    const g={type:'blitz',pool:ids,t:60,score:0,combo:0,max:0,over:false,flash:'',q:null};g.q=blitzQ(g);S.game=g;
    g.iv=setInterval(function(){if(S.screen!=='game'||S.game!==g){clearInterval(g.iv);return;}g.t--;const el=document.getElementById('bt');if(el)el.textContent=g.t;if(g.t<=0){clearInterval(g.iv);g.over=true;g.rw=gameReward(Math.min(40,g.score*3),3);render(true);}},1000);
  } else if(type==='salat'||type==='galgen'||type==='diktat'){miniStart(type);return;
  } else if(type==='clip'){
    const ids=gameIds(n,src,list);if(ids.length<3){toast('Dafür gibt es hier zu wenige Wörter. Wähle eine andere Quelle.');return;}
    const g={type:'clip',ids:ids,i:0,step:0,paused:false,done:false,rev:false};S.game=g;clipPlan(g);
  } else {S.game={type:type,busy:false,err:'',res:null,ids:null};}
  render();
}
function blitzQ(g){const id=g.pool[Math.floor(Math.random()*g.pool.length)];const toDe=Math.random()<0.5;
  const ans=toDe?gShort(W[id][1]):gEn(id);const opts=[ans];let guard=0;
  while(opts.length<4&&guard++<60){const o=g.pool[Math.floor(Math.random()*g.pool.length)];const t=toDe?gShort(W[o][1]):gEn(o);if(opts.indexOf(t)<0)opts.push(t);}
  return {id:id,toDe:toDe,prompt:toDe?gEn(id):gShort(W[id][1]),ans:ans,opts:shuffle(opts)};}
function setupView(type){
  const gs=S.gs;const T={mem:['Memory','Wähle, welche Wörter ins Spiel kommen'],blitz:['Blitz','Wähle, aus welchen Wörtern gefragt wird'],pod:['Mini-Podcast','Wähle die Wörter und die Stimmen'],story:['Geschichte','Wähle die Wörter für die Geschichte'],clip:['Lern-Clip','Ein kurzer animierter Film mit deinen Wörtern'],salat:['Wortsalat','Ordne die Buchstaben zum richtigen Wort'],galgen:['Wörter raten','Rate das Wort Buchstabe für Buchstabe'],diktat:['Diktat','Höre das Wort und schreibe es auf']}[type];
  const NS={mem:[4,6,8,10,12,16],blitz:[20,40,80],pod:[5,8,12],story:[5,8,12],clip:[5,8,12],salat:[5,8,12],galgen:[5,8,12],diktat:[5,8,12]}[type];
  const bl=blocks();
  let h='<div class="pt"><h1>'+T[0]+'</h1><small>'+T[1]+'</small></div><div class="glass grp w">';
  h+=srow('🎯','#FF9F0A','Wörter aus','Womit soll gespielt werden?',segc('src',['mix','weak','due','list'],gs.src,{mix:'Gemischt',weak:'Schwache',due:'Fällige',list:'Liste'},'gset'));
  if(gs.src==='list')h+=srow('📚','#34C759','Liste','','<select id="gl" class="in inl" aria-label="Liste">'+bl.map(function(b,k){return '<option value="'+k+'"'+(gs.list===k?' selected':'')+'>'+esc(bName(k))+'</option>';}).join('')+'</select>');
  h+=srow('🔢','#30B0C7',type==='mem'?'Paare':(type==='blitz'?'Wortvorrat':'Anzahl Wörter'),'',segc('n',NS,gs.n[type],null,'gset'));
  if(type==='mem'){
    h+=srow('🧩','#FF6B8B','Kartenpaare','',segc('variant',['trans','emoji'],gs.variant||'trans',{trans:'Wort + Übersetzung',emoji:'Wort + Emoji'},'gset'));
    h+=srow('⏱️','#FF9500','Spielart','',segc('mode',['calm','timed'],gs.mode||'calm',{calm:'Entspannt',timed:'Auf Zeit'},'gset'));
  }
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
  const cnt=gameIds(gs.n[type],gs.src,gs.list).length;
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
    h+='<div class="memgrid'+(g.cards.length>20?' big':'')+'">'+g.cards.map(function(c,i){const txt=c.f?gEn(c.id):(g.emo?emojiOf(c.id):gShort(W[c.id][1]));const show=c.open||c.done;return '<button class="mc'+(c.done?' done':'')+(show?' up':'')+'" data-act="memtap" data-i="'+i+'" aria-label="'+(show?esc(txt):'Karte')+'"><span>'+(show?esc(txt):'?')+'</span></button>';}).join('')+'</div>';
    if(g.over&&g.lost){h+='<div class="glass pad w col center"><div class="big-ico">⏰</div><b>Zeit abgelaufen</b><div class="hint">Du hast '+(done/2)+' von '+(g.cards.length/2)+' Paaren gefunden. Das nächste Mal klappt es.</div><button class="btn pri full" data-act="gostart" data-v="mem">Nochmal</button></div>';}else if(g.over){const sec=Math.round((g.tEnd-g.t0)/1000);h+='<div class="glass pad w col center"><div class="big-ico">🎉</div><b>Geschafft in '+g.moves+' Zügen und '+sec+' Sekunden</b>'+(g.rw?'<div class="hint">'+(g.rw.capped?'Für heute gibt es keine Belohnung mehr. Spielen darfst du trotzdem.':'+'+g.rw.xp+' XP und +'+g.rw.coins+' 🪙')+'</div>':'')+'<button class="btn pri full" data-act="gostart" data-v="mem">Nochmal</button></div>';}
    return h;
  }
  if(g.type==='blitz'){
    if(g.over)return '<div class="pt"><h1>Blitz</h1></div><div class="glass pad w col center"><div class="big-ico">⚡</div><div class="big">'+g.score+' Treffer</div><div class="hint">Beste Serie: '+g.max+'</div>'+(g.score>(P.blitzBest||0)?'<b>Neuer Rekord! 🏆</b>':'<div class="hint">Rekord: '+(P.blitzBest||0)+'</div>')+(g.rw?'<div class="hint">'+(g.rw.capped?'Für heute gibt es keine Belohnung mehr. Spielen darfst du trotzdem.':'+'+g.rw.xp+' XP und +'+g.rw.coins+' 🪙')+'</div>':'')+'<button class="btn pri full" data-act="gostart" data-v="blitz">Nochmal</button></div>';
    const q=g.q;
    return '<div class="pt"><h1>Blitz</h1><small>60 Sekunden, so viele richtig wie möglich</small></div><div class="cnt cnt2"><span>Treffer: '+g.score+(g.combo>2?' · Serie '+g.combo+' 🔥':'')+'</span><span>⏱ <b id="bt">'+g.t+'</b> s</span></div><div class="glass q'+(g.flash?' fl-'+g.flash:'')+'"><div class="lang">'+(q.toDe?'Englisch → Deutsch':'Deutsch → Englisch')+'</div><div class="word">'+esc(q.prompt)+'</div></div><div class="opts">'+q.opts.map(function(o,i){return '<button class="opt gtap" data-act="bopt" data-i="'+i+'"><span class="kn">'+(i+1)+'</span><span>'+esc(o)+'</span></button>';}).join('')+'</div>';
  }
  if(g.type==='salat'||g.type==='galgen'||g.type==='diktat')return miniView(g);
  if(g.type==='clip'){
    if(g.done)return '<div class="pt"><h1>Lern-Clip</h1></div><div class="glass pad w col center"><div class="big-ico">🎬</div><b>Clip zu Ende</b><div class="hint">'+g.ids.length+' Wörter gezeigt. Jetzt kurz abfragen?</div><button class="btn pri full" data-act="clipquiz">Kurz abfragen</button><button class="btn full" data-act="gostart" data-v="clip">Nochmal ansehen</button></div>';
    const id=g.ids[g.i];const steps=clipSteps(id);const st=steps[g.step];const emo=emojiOf(id);
    let h='<div class="pt"><h1>Lern-Clip</h1><small>Wort '+(g.i+1)+' von '+g.ids.length+'</small></div>';
    h+='<div class="clipbox" data-act="clipctl" data-v="tap"><div class="clipprog">'+g.ids.map(function(_,k){return '<i class="'+(k<g.i?'d':(k===g.i?'c':''))+'"></i>';}).join('')+'</div>';
    h+='<div class="cscene s-'+st+'" key="'+g.i+'-'+g.step+'">'+(emo?'<div class="cemo">'+emo+'</div>':'')+'<div class="cword">'+esc(gEn(id))+'</div>';
    if(st!=='word')h+='<div class="cmean">'+(g.rev||st==='ex'?esc(gShort(W[id][1])):'<span class="blur">'+esc(gShort(W[id][1]))+'</span><small class="hint">Tippe zum Aufdecken</small>')+'</div>';
    if(st==='ex')h+='<div class="cex">'+esc(E[id])+'</div>';
    h+='</div></div>';
    h+='<div class="row2" style="grid-template-columns:1fr 1fr 1fr 1fr"><button class="btn" data-act="clipctl" data-v="prev" aria-label="Zurück">⏮</button><button class="btn" data-act="clipctl" data-v="pause" aria-label="Pause">'+(g.paused?'▶':'⏸')+'</button><button class="btn" data-act="clipctl" data-v="next" aria-label="Weiter">⏭</button><button class="btn" data-act="clipctl" data-v="speak" aria-label="Nochmal sprechen">🔊</button></div>';
    return h;
  }
  // story / pod
  const pod=g.type==='pod';
  let h='<div class="pt"><h1>'+(pod?'Mini-Podcast':'Geschichte')+'</h1><small>'+(pod?'Zwei Stimmen sprechen mit deinen Wörtern':'Eine kurze Geschichte mit deinen Wörtern')+'</small></div>';
  if(!aiOK())return h+'<div class="glass pad w hint">Dafür braucht die App Claude. '+(P.aiOn===false?'Du hast die KI-Funktionen in den Einstellungen ausgeschaltet.':'Hier ist es gerade nicht verfügbar.')+'</div>';
  if(g.busy)h+='<div class="glass pad w center"><div class="spin"></div><p>Wird geschrieben…</p></div>';
  else{
    h+='<div class="glass pad w col"><p class="hint" style="margin:0">Claude nimmt etwa 6 Wörter, die du üben solltest (zuerst die schwachen), und schreibt daraus '+(pod?'ein kurzes Gespräch':'eine kleine Geschichte')+'. Das ist 1 Anfrage.</p><button class="btn pri full" data-act="storygo">'+(g.res?'Neue '+(pod?'Folge':'Geschichte')+' schreiben':(pod?'Folge schreiben':'Geschichte schreiben'))+'</button><button class="link" data-act="game" data-v="'+g.type+'">Wörter und Stimmen ändern</button></div>';
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

function practiceView(){
  let h='<div class="pt"><h1>Üben</h1><small>Erst lernen, dann abfragen</small></div><div class="grid fill">';
  ['learn','auto','cards','mc','type','weak'].forEach(function(k){const m=MODE[k];
    h+='<button class="glass gtap tile v" data-act="tile" data-k="'+k+'"><span class="ico">'+m.i+'</span><span class="tt"><b>'+m.t+'</b><small>'+m.d+'</small></span></button>';});
  h+='</div><div class="pt" style="padding-top:2px"><span class="lab">Spaß und Spiele</span></div><div class="grid mini">';
  [['mem','🃏','Memory','Paare finden'],['blitz','⚡','Blitz','60 Sekunden'],['salat','🔤','Wortsalat','Buchstaben ordnen'],['galgen','🎯','Wörter raten','Buchstabe für Buchstabe'],['diktat','🎧','Diktat','Hören und schreiben'],['clip','🎬','Lern-Clip','Wörter animiert erklärt'],['pod','🎙️','Mini-Podcast','Gespräch mit KI'],['story','📖','Geschichte','Text mit KI']].forEach(function(g){h+='<button class="glass gtap tile v" data-act="game" data-v="'+g[0]+'"><span class="ico">'+g[1]+'</span><span class="tt"><b>'+g[2]+'</b><small>'+g[3]+'</small></span></button>';});
  h+='</div>';
  h+=listsCard()+tipCard();
  return h;
}
function onbView(){
  return cloudBanner()+'<div class="glass pad w center" style="margin-top:24px"><div class="big-ico">👋</div><h2 class="gradient-text" style="font-size:26px">Willkommen bei EasyVocab</h2><p>Vokabeln lernen, so dass sie bleiben.</p></div>'
  +'<div class="glass pad w"><div class="step"><b>1</b><span><strong>Smart-Training</strong><small>Neue Wörter siehst du erst als Karte, dann kommt die Abfrage. Bekannte Wörter tippst du selbst.</small></span></div>'
  +'<div class="step"><b>2</b><span><strong>Richtungen getrennt</strong><small>Englisch → Deutsch und Deutsch → Englisch zählen einzeln. Gemeistert ist ein Wort erst, wenn du beides getippt kannst.</small></span></div>'
  +'<div class="step"><b>3</b><span><strong>Wiederholung zur richtigen Zeit</strong><small>Nach jeder Antwort siehst du, wann das Wort wiederkommt. Täglich ein paar Minuten schlagen eine lange Nacht.</small></span></div></div>'
  +'<div class="glass pad w hint">Die Beispielwörter (Green Line Transition und Oberstufe) sind nur zum Ausprobieren dabei. Eigene Wörter fügst du unter Wörter hinzu.</div>'
  +'<button class="btn pri full" data-act="onbdone">Los geht\'s</button>';
}
function pickView(){
  const m=MODE[S.pend];
  const opts=[['en',fl()+' → Deutsch'],['de','Deutsch → '+fl()],['mix','Gemischt']];
  let h='<div class="glass pad w center"><div class="big-ico">'+m.i+'</div><h2>'+m.t+'</h2><p>'+({auto:'Neue Wörter als Karte, bekannte zum Tippen',test:'Nur Tippen, Ergebnis erst am Ende'}[S.pend]||'Richtung wählen')+'</p></div>';
  h+='<div class="dirs">';
  opts.forEach(function(o){h+='<button class="dirb gtap'+(S.dir===o[0]?' on':'')+'" data-act="dir" data-d="'+o[0]+'"><span>'+o[1]+'</span><span>'+(S.dir===o[0]?'✓':'')+'</span></button>';});
  h+='</div>';
  if(S.pend!=='weak'){
    let o='<option value="all"'+(S.b==='all'?' selected':'')+'>Alle Listen ('+allIds().length+' Wörter)</option>';
    for(let k=0;k<nb();k++){const d=dueOf(range(k)).length;o+='<option value="'+k+'"'+(S.b===k?' selected':'')+'>'+esc(bName(k))+(d?' · '+d+' fällig':'')+'</option>';}
    o+='<optgroup label="Themen">';TOPICS.forEach(function(t,ti){const c=allIds().filter(function(id){return wtopic(id)===ti;}).length;if(c)o+='<option value="t'+ti+'"'+(S.b==='t'+ti?' selected':'')+'>'+t.e+' '+esc(t.n)+' · '+c+'</option>';});o+='</optgroup>';
    h+='<div class="fld"><label class="lab" for="p-blk">Liste</label><select id="p-blk" data-blk="1">'+o+'</select></div>';
  } else h+='<p class="hint" style="margin:0">'+weakIds().length+' Wörter mit Fehlern</p>';
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
  if(cu){h+='<div class="glass pad w col"><div class="lab">Bearbeiten</div><input id="we" class="in" type="text" aria-label="Fremdsprache" value="'+esc(c.en)+'"><input id="wd" class="in" type="text" aria-label="Deutsch" value="'+esc(c.de)+'"><input id="wx" class="in" type="text" placeholder="Beispielsatz (optional)" aria-label="Beispielsatz" value="'+esc(c.ex||'')+'"><div class="row2"><button class="btn pri" data-act="wordsave">Speichern</button><button class="btn bad" data-act="worddel">'+(S.confirmWord===id?'Wirklich löschen':'Löschen')+'</button></div></div>';}
  else h+='<p class="hint" style="margin:0 6px">Dieses Wort gehört zur mitgelieferten Liste und lässt sich nicht ändern.</p>';
  return h;
}
function wordRow(id,nodots){
  const n=Math.round(bAvg(id));let dd='';for(let i=0;i<5;i++)dd+='<i class="'+(n>i?'f':'')+'"></i>';
  const wl=wlang(id);const lt=wl!=='en'?'<em class="ltag">'+wl.toUpperCase()+'</em>':'';
  return '<div class="wr"><span class="wb" style="background:'+CATS[wcat(id)].c+'"></span><span class="wm" data-act="wordopen" data-id="'+id+'" style="cursor:pointer"><b>'+esc(W[id][0])+lt+'</b><small>'+esc(W[id][1])+'</small></span>'+(nodots?'':'<span class="dots" title="Box '+bx(id,'en')+' / '+bx(id,'de')+'">'+dd+'</span>')+(id>=BASE&&!nodots?'<button class="x" data-act="delw" data-id="'+id+'" aria-label="Wort löschen">×</button>':'')+'</div>';
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
  for(let k=0;k<nb();k++){const ids=range(k);const d=dueOf(ids,true).length;
    h+='<details class="glass dt"><summary><span><b>'+esc(bName(k))+'</b><span class="chip'+(d?'':' ok')+'">'+(d?d+' fällig':'erledigt')+'</span></span><span class="hint">'+pct(ids)+'% <span class="car">▾</span></span></summary><div class="body"><div class="prog thin" style="margin-bottom:6px"><i style="width:'+pct(ids)+'%"></i></div>';
    ids.forEach(function(id){h+=wordRow(id);});
    h+='<div class="row2" style="margin-top:6px"><button class="link" data-act="sharelist" data-k="'+k+'">Liste teilen</button>'+(blocks()[k].custom?'<button class="link" data-act="dellist" data-k="'+k+'">Liste löschen</button>':'')+'</div>';
    h+='</div></details>';}
  return h;
}
function wordsView(){
  let h='<div class="pt row"><div><h1>Wörter</h1><small>'+allIds().length+' Wörter · '+mastered()+' gemeistert</small></div><button class="btn sm pri" data-act="toadd">＋ Wörter</button></div>';
  h+='<div class="segc wide" role="group" aria-label="Ansicht">'+[['blocks','Listen'],['topic','Themen'],['status','Lernstand'],['az','A–Z']].map(function(x){return '<button class="'+(S.wmode===x[0]?'on':'')+'" data-act="wmode" data-v="'+x[0]+'">'+x[1]+'</button>';}).join('')+'</div>';
  h+='<p class="hint" style="margin:0 6px">'+({blocks:'Listen sind Kapitel oder Gruppen, die du zusammen lernst.',topic:'Nach Bedeutung sortiert, zum Beispiel Körper oder Haus.',status:'So sicher sitzt jedes Wort.',az:'Alphabetisch sortiert.'}[S.wmode]||'')+'</p>';
  if(S.share)h+='<div class="glass pad w col"><p class="hint" style="margin:0">Kopieren wurde blockiert. Markiere den Text und kopiere ihn selbst.</p><textarea class="ta" readonly rows="4" aria-label="Liste">'+esc(S.share)+'</textarea><button class="link" data-act="closeshare">Schließen</button></div>';
  h+='<input id="wq" class="in" type="search" placeholder="Wort suchen, Englisch oder Deutsch" aria-label="Wort suchen" autocomplete="off" value="'+esc(S.q)+'"><div id="wres" class="w col">'+wordsBody(S.q)+'</div>';
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
  h+='<div class="glass pad w"><div class="hd2" style="margin-bottom:4px"><b>'+f.words.length+' Wörter gefunden</b><button class="link" data-act="scanagain">Genauer lesen</button></div><p class="hint" style="margin:0 0 6px">Entferne den Haken bei Wörtern, die du nicht willst.</p>';
  f.words.forEach(function(w,i){h+='<label class="fr"><input type="checkbox" data-fi="'+i+'"'+(w.on?' checked':'')+'><span class="fw"><b>'+esc(w.f)+'</b><small>'+esc(w.d)+'</small></span><em class="ft" title="'+esc(TOPICS[w.t].n)+'">'+(w.e||TOPICS[w.t].e)+'</em></label>';});
  return h+'</div><button class="btn pri full" id="savecnt" data-act="savefound">'+n+' Wörter speichern</button><button class="btn full" data-act="scandiscard">Verwerfen</button>';
}
function addView(){
  const A=S.add;const ai=aiOK();
  let h='<div class="pt"><h1>Wörter hinzufügen</h1><small>Eine Liste ist eine Gruppe zusammengehöriger Wörter, zum Beispiel ein Kapitel.</small></div>';
  h+='<div class="glass grp w">'+srow('🌍','#5AC8FA','Sprache','Welche Sprache lernst du?',segc('lang',['en','fr','la'],A.lang,{en:'EN',fr:'FR',la:'LA'},'aset'))+'</div>';
  h+='<div class="w3wrap w">'+segc('mode',['scan','paste','single'],A.mode,{scan:'📷 Scannen',paste:'📋 Einfügen',single:'✏️ Einzeln'},'aset')+'</div>';
  if(A.mode==='scan'){
    if(!ai||!AIIMG)h+='<div class="glass pad w hint">Scannen braucht Claude. '+(P.aiOn===false?'Du hast die KI-Funktionen in den Einstellungen ausgeschaltet.':'Hier ist es gerade nicht verfügbar. Nutze „Einfügen“.')+'</div>';
    else if(A.busy)h+='<div class="glass pad w center"><div class="spin"></div><p>Liste wird gelesen…</p></div>';
    else if(A.found)h+=foundView(A.found);
    else{
      h+='<label class="glass gtap scanbtn"><input type="file" id="scan-file" class="vh" accept="image/*"><span class="si">📷</span><b>Foto aufnehmen oder auswählen</b><small>Claude liest die Wörter, gibt der Liste einen Namen und ordnet Themen zu. Ein Foto ist eine Anfrage.</small></label>';
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
function addWord(en,de,ex,cat,lang,ch,emo){
  en=en.trim();de=de.trim();ex=(ex||'').trim();lang=lang||'en';if(cat==null)cat=9;ch=(ch||'Eigene Wörter').trim()||'Eigene Wörter';
  if(!en||!de)return 'bad';
  for(let i=0;i<W.length;i++){if(i>=BASE&&P.custom[i-BASE].del)continue;if(wlang(i)===lang&&W[i][0].toLowerCase()===en.toLowerCase())return 'dup';}
  P.custom.push({en:en,de:de,ex:ex,cat:cat,lang:lang,ch:ch,emo:emo||''});W.push([en,de]);E.push(ex);BC=null;return 'ok';
}
function langNote(lang){
  if(lang==='en'||P.lang2===lang)return '';
  if(P.lang2==='none'){P.lang2=lang;BC=null;return ' '+LNAME[lang]+' ist jetzt aktiv.';}
  return ' '+LNAME[lang]+' ist aus, schalte es in den Einstellungen um.';
}


function rangeIds(lo,hi){let ids=[];for(let k=lo;k<=hi;k++)ids=ids.concat(range(k));return ids;}
function rangeInfo(lo,hi){const n=rangeIds(lo,hi).length;return (lo===0&&hi===nb()-1)?'Alle '+n+' Wörter':n+' Wörter';}
function rangeFill(lo,hi){const N=Math.max(1,nb()-1);const f=document.getElementById('rfill');if(f){f.style.left=(lo/N*100)+'%';f.style.width=((hi-lo)/N*100)+'%';}const t=document.getElementById('rinfo');if(t)t.textContent=rangeInfo(lo,hi);const bl=blocks();const a=document.getElementById('rlo'),b=document.getElementById('rhi');if(a&&bl[lo])a.textContent=bl[lo].name;if(b&&bl[hi])b.textContent=bl[hi].name;}
function examCard(e){
  const ids=examIds(e);const left=daysLeft(e);const open=ids.filter(function(id){return bAvg(id)<3;}).length;const sh=secureShare(ids);const per=Math.ceil(open/Math.max(1,left));
  const cls=left<0?'past':(left<=2?'urg':(left<=6?'soon':'calm'));
  const step=left===0?'Heute früh kurz prüfen, dann nichts Neues mehr.':(left===1?'Heute wiederholen, morgen früh kurz prüfen.':(left<=3?'Heute lernen, morgen wiederholen, am Testtag früh kurz prüfen.':''));
  const plan=left<0?'Diese Klausur ist vorbei.':((open?'Heute ca. '+per+' Wörter sicher machen':'Alle Wörter sicher')+(step?'. '+step:''));
  return '<div class="glass exam '+cls+'"><div class="ringw sm">'+ring(sh)+'<b>'+sh+'<small>%</small></b></div><div class="exm"><div class="hd2"><b>'+esc(e.name)+'</b><span class="dchip">'+(left<0?'vorbei':inDays(left))+'</span></div><small>'+dateDe(e.date)+' · '+ids.length+' Wörter</small><p>'+plan+'</p></div><div class="row2 exb2"><button class="btn" data-act="examgo" data-id="'+e.id+'">Lernen</button>'+(left>=0&&left<=7?'<button class="btn" data-act="examtest" data-id="'+e.id+'">Generalprobe</button>':'')+'<button class="btn bad" data-act="delexam" data-id="'+e.id+'">Löschen</button></div></div>';
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
  const per=open?Math.max(1,Math.ceil(open/Math.max(1,left))):0;const days=Math.min(8,left+1);
  const names=['So','Mo','Di','Mi','Do','Fr','Sa'];
  let h='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Dein Plan für '+esc(ne.name)+'</span><span class="hint">'+(open?open+' Wörter offen':'alles sicher')+'</span></div>';
  for(let k=0;k<days;k++){const d=new Date();d.setDate(d.getDate()+k);const last=(k===left);
    const label=last?'Klausur':(k===0?'Heute':(k===1?'Morgen':names[d.getDay()]+', '+d.getDate()+'.'+(d.getMonth()+1)+'.'));
    const todo=last?'Kurz prüfen':(per?per+' Wörter sicher machen':'Wiederholen');
    const pct=k===0?Math.min(100,Math.round(dayCount()/Math.max(1,per||P.dailyGoal)*100)):0;
    h+='<div class="planrow'+(k===0?' today':'')+'"><span class="pd">'+label+'</span><span class="pt2">'+todo+'</span><span class="prog thin pp"><i style="width:'+pct+'%"></i></span></div>';}
  h+='<button class="btn pri full" data-act="examgo" data-id="'+ne.id+'">Heute starten</button></div>';
  return h;
}
function plannerView(){
  const f=S.form;const bl=blocks();const open=S.formOpen||!P.exams.length;const sel=f.sel||null;
  let h='<div class="pt row"><div><h1>Planer</h1><small>Klausur eintragen, Tagesplan bekommen</small></div>'+((!open)?'<button class="btn sm pri" data-act="toggleform">＋ Klausur</button>':'')+'</div>';
  P.exams.slice().sort(function(a,b){return a.date<b.date?-1:1;}).forEach(function(e){h+=examCard(e);});
  h+=planCard();
  if(open){
    let n=0,c=0;bl.forEach(function(b,k){if(!sel||sel.indexOf(k)>=0){n+=b.ids.length;c++;}});
    h+='<div class="sect"><div class="st">Neue Klausur'+(P.exams.length?' · <button class="link" style="padding:0" data-act="toggleform">Abbrechen</button>':'')+'</div><div class="glass grp">';
    h+=srow('📝','#0A84FF','Name','','<input id="ex-name" class="in inl" type="text" placeholder="Englisch" aria-label="Name" autocomplete="off" value="'+esc(f.name)+'">');
    h+=srow('📅','#FF9F0A','Datum','','<input id="ex-date" class="in inl" type="date" min="'+fmt(new Date())+'" aria-label="Datum" value="'+esc(f.date)+'">');
    h+='<div class="srow chiprow"><div class="chips"><button class="chip2" data-act="qd" data-v="3">In 3 Tagen</button><button class="chip2" data-act="qd" data-v="7">In 1 Woche</button><button class="chip2" data-act="qd" data-v="14">In 2 Wochen</button></div></div>';
    h+=srow('📚','#34C759','Stoff','Welche Listen kommen dran?','<span class="hint" id="xinfo" style="text-align:right">'+c+' Listen · '+n+' Wörter</span>');
    h+='<button class="xr xall'+(!sel?' on':'')+'" data-act="xall"><span class="xc"></span><span class="xn">Alle Listen</span><span class="xs">'+allIds().length+'</span></button>';
    bl.forEach(function(b,k){h+='<button class="xr xl'+((!sel||sel.indexOf(k)>=0)?' on':'')+'" data-act="xrow" data-k="'+k+'"><span class="xc"></span><span class="xn">'+esc(b.custom?'✏️ '+b.name:b.name)+'</span><span class="xs">'+b.ids.length+'</span></button>';});
    h+='</div></div>';
    if(S.formErr)h+='<div class="err" role="alert">'+esc(S.formErr)+'</div>';
    h+='<button class="btn pri full" data-act="addexam">Klausur speichern</button>';
  }
  return h;
}
function levelInfo(pairs){const lvl=1+Math.floor(pairs/10);const into=pairs%10;const titles=['Neuling','Entdecker','Sammler','Könner','Profi','Meister','Legende'];return {lvl:lvl,into:into,pct:into*10,title:titles[Math.min(6,Math.floor((lvl-1)/2))]};}
const FREEZE_COST=40,BOOST_COST=60,AV_COST=25;
const AVATARS=['🐱','🐶','🐰','🐸','🐻','🐯','🦝','🐨','🦥','🐝','🐹','🦖','🦈','🦩','🚀','🐲'];
const AVPRICE={'🦖':40,'🦈':40,'🦩':40,'🚀':60,'🐲':90};
function avPrice(a){return AVPRICE[a]||25;}
const WEEKLY=['🦊','🐼','🦉','🐙','🦄','🐢','🦋','🐳','🦁','🐧','🦒','🦔'];
const AVNAME={'🐱':'Mimi','🐶':'Bello','🐰':'Hoppel','🐸':'Quaki','🐻':'Brummi','🐯':'Tigo','🦝':'Raffi','🐨':'Koko','🦥':'Lento','🐝':'Summsi','🐹':'Pummel','🦖':'Rexi','🦈':'Finn','🦩':'Flora','🚀':'Zippo','🐲':'Draki','🦊':'Schlaufox','🐼':'Bambu','🦉':'Hugo','🐙':'Okki','🦄':'Funki','🐢':'Schlurfi','🦋':'Flatter','🐳':'Wally','🦁':'Leo','🐧':'Pingo','🦒':'Gigi','🦔':'Pieks'};
const XPB_COST=80;
const AVINFO={
'🐱':['Neugierige Katze. Liebt Sonnenplätze und lernt am liebsten morgens.','Miau!',1.7],
'🐶':['Treuer Hund. Bringt dir jedes Wort zurück, das du vergessen hast.','Wau wau!',0.8],
'🐰':['Flinker Hase. Springt von Wort zu Wort und mag Karotten-Pausen.','Schnuff schnuff!',1.7],
'🐸':['Fröhlicher Frosch. Quakt gern mit, wenn du eine Vokabel triffst.','Quak quak!',0.6],
'🐻':['Gemütlicher Bär. Lernt langsam, aber vergisst nie etwas.','Brumm brumm!',0.3],
'🐯':['Mutiger Tiger. Stürzt sich zuerst auf die schwersten Wörter.','Grrr!',0.4],
'🦝':['Schlauer Waschbär. Wäscht jedes Wort, bis es glänzt.','Tschirp tschirp!',1.4],
'🐨':['Müder Koala. Schläft viel und lernt im Schlaf, sagt er.','Mmh, gähn!',0.7],
'🦥':['Entspanntes Faultier. Langsam ist auch eine Geschwindigkeit.','Hallooo…',0.5],
'🐝':['Fleißige Biene. Sammelt jeden Tag ein paar Wörter, Stück für Stück.','Bsssss!',1.9],
'🐹':['Rundlicher Hamster. Hortet Vokabeln in seinen Backen.','Piep piep!',1.9],
'🦖':['Kleiner Dino. Kennt die ältesten Wörter der Welt.','Rooaar!',0.3],
'🦈':['Schneller Hai. Schwimmt durch jede Liste, ohne anzuhalten.','Dum dum, dum dum!',0.4],
'🦩':['Eleganter Flamingo. Lernt auf einem Bein und trotzdem sicher.','Honk honk!',1.2],
'🚀':['Mutige Rakete. Startet mit dir zum nächsten Level.','Drei, zwei, eins, los!',1.0],
'🐲':['Weiser Drache. Hütet die schwersten Wörter im ganzen Land.','Fauch!',0.3],
'🦊':['Cleverer Schlaufox. Findet immer den kürzesten Weg zum richtigen Wort.','Ring ding ding!',1.3],
'🐼':['Ruhiger Panda. Kaut Bambus und Vokabeln in aller Ruhe.','Mampf mampf!',0.8],
'🦉':['Kluge Eule. Ist abends am wachsten und wiederholt mit dir.','Uhu!',0.7],
'🐙':['Achtarmiger Oktopus. Schafft acht Karten gleichzeitig.','Blubb blubb!',0.9],
'🦄':['Seltenes Einhorn. Taucht nur auf, wenn du regelmäßig lernst.','Tadaa!',1.6],
'🐢':['Weise Schildkröte. Sie kommt langsam, aber immer an.','Mmm…',0.6],
'🦋':['Zarter Schmetterling. Landet auf jedem Wort, das du gerade lernst.','Flatter flatter!',1.7],
'🐳':['Riesiger Wal. Singt dir die Vokabeln in den Schlaf.','Uuuuh!',0.3],
'🦁':['Stolzer Löwe. Brüllt, wenn du dein Tagesziel erreichst.','Roaar!',0.4],
'🐧':['Cooler Pinguin. Rutscht auf dem Bauch durch jede Prüfung.','Pinga pinga!',1.0],
'🦒':['Hoher Gigi. Sieht die Antwort schon, bevor die Frage fertig ist.','Hallo von da oben!',0.9],
'🦔':['Stacheliger Pieks. Rollt sich ein, wenn die Wörter zu schwer werden.','Pieks pieks!',1.5]};
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
function earnXp(n){if(xpOn())n*=2;const l0=Math.floor(P.xp/100);P.xp+=n;const l1=Math.floor(P.xp/100);if(l1>l0)setTimeout(function(){toast('Level '+(l1+1)+' erreicht! 🎉');},900);return n;}
function activateXpBoost(min){P.xpBoostUntil=Math.max(Date.now(),P.xpBoostUntil||0)+min*60000;}
function earn(n){if((P.boostUntil||0)>Date.now())n*=2;P.coins+=n;}
function weekKey(){return fmt(weekStart(0));}
function weeklyEmoji(){return WEEKLY[Math.floor(weekStart(0).getTime()/6048e5)%WEEKLY.length];}
function dailyBonus(){if(P.avatar&&!P.fedAt){P.fedAt=Date.now();save();}
  const t=fmt(new Date());if(P.loginDay===t)return;P.loginDay=t;P.coins+=2;save();setTimeout(function(){toast('Tagesbonus: +2 🪙');},600);}
function myAvatars(){return AVATARS.filter(function(a){return P.owned[a];}).concat(Object.keys(P.coll).map(function(k){return P.coll[k];}));}
function profileView(){
  const lv=levelInfo(Math.floor(P.xp/10));const lvl=1+Math.floor(P.xp/100);const into=P.xp%100;
  const bl=badgeList();const got=bl.filter(function(b){return b[2];}).length;
  let h='<div class="pt"><h1>Profil</h1><small>So sehen dich Freunde später</small></div>';
  h+='<div class="glass pad w col"><div class="row" style="gap:14px;align-items:center"><button class="collbig" data-act="empick" aria-label="Emoji oder Tier ändern" style="cursor:pointer;border:0"><span class="am a0">'+(P.avatar||P.emoji||'🙂')+'</span></button><span style="flex:1;min-width:0"><input id="nick" class="in" type="text" maxlength="16" placeholder="Dein Spitzname" aria-label="Spitzname" autocomplete="off" value="'+esc(P.nick||'')+'"><div class="hint" style="margin-top:4px">Tippe links auf das Bild, um es zu ändern</div><div style="margin-top:2px"><b>Level '+lvl+' · '+lv.title+'</b></div></span></div>';
  h+='<div class="prog thin w"><i style="width:'+into+'%"></i></div><div class="hint">'+P.xp+' XP · noch '+(100-into)+' bis Level '+(lvl+1)+'</div></div>';
  if(S.emPick){const EMS=['🙂','😀','😎','🤓','🥳','🧠','📚','🎯','🔥','⭐','🌟','🍀','🌈','⚡','🎧','🎨','🎮','⚽','🏀','🎸','🌍','🧩','🏆','💡','🚲'];const mine=myAvatars();
    h+='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Wähle dein Bild</span><button class="link" data-act="empick">Fertig</button></div><div class="hint">Emojis</div><div class="emgrid">'+EMS.map(function(e){return '<button class="emb'+((!P.avatar&&(P.emoji||'🙂')===e)?' on':'')+'" data-act="setemoji" data-v="'+e+'" aria-label="Emoji '+e+'">'+e+'</button>';}).join('')+'</div>'+(mine.length?'<div class="hint" style="margin-top:6px">Deine Tiere</div><div class="emgrid">'+mine.map(function(e){return '<button class="emb'+(P.avatar===e?' on':'')+'" data-act="equip" data-v="'+e+'" aria-label="'+esc(petName(e))+'">'+e+'</button>';}).join('')+'</div>':'<div class="hint">Tiere kaufst du im Shop.</div>')+'</div>';}
  h+='<div class="sgrid3"><div class="glass sg"><b>'+streak()+'</b><small>Tage am Stück</small></div><div class="glass sg"><b>'+P.coins+'</b><small>Münzen</small></div><div class="glass sg"><b>'+mastered()+'</b><small>gemeistert</small></div></div>';
  h+='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Abzeichen</span><span class="hint">'+got+' von '+bl.length+'</span></div><div class="badges sm">'+bl.map(function(b){return '<button class="bdg'+(b[2]?(P.claimed[b[3]]?' got':' got new'):'')+'" data-act="claim" data-k="'+b[3]+'"><span>'+b[0]+'</span><small>'+b[1]+'</small>'+((b[2]&&!P.claimed[b[3]])?'<em>Abholen</em>':'')+'</button>';}).join('')+'</div></div>';
  const col=Object.keys(P.coll).map(function(k){return P.coll[k];});
  h+='<div class="glass pad w col tight"><div class="hd2"><span class="lab">Sammlung</span><span class="hint">'+col.length+' von '+WEEKLY.length+'</span></div><div class="avgrid">'+WEEKLY.map(function(e){const has=col.indexOf(e)>=0;return '<div class="av'+(has?'':' lockd')+'"><span class="am a'+(WEEKLY.indexOf(e)%4)+'">'+e+'</span><b>'+(AVNAME[e]||'')+'</b><small>'+(has?'Gesammelt':'Noch offen')+'</small></div>';}).join('')+'</div></div>';
  h+='<div class="glass pad w col tight"><div class="lab">Konto</div><p class="hint" style="margin:0">In dieser Testversion läuft dein Konto über deine Claude-Anmeldung. Die Cloud-Sicherung in den Einstellungen nutzt es. Eigene Konten mit Google oder Apple, Freunde und Rangliste kommen mit der Web-App.</p></div>';
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
  h+='<div class="lrow" style="padding:6px 0;gap:10px"><span class="li">🛡️</span><span class="lt"><b>Serien-Schutz</b><small>Rettet deine Serie einmal. Du hast '+(P.freeze||0)+' von 3.</small></span><button class="btn sm'+(P.coins>=FREEZE_COST?' pri':'')+'" data-act="buyfreeze"'+(P.coins>=FREEZE_COST?'':' disabled')+'>'+FREEZE_COST+' 🪙</button></div>';
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
  return '<div class="glass pad w col tight shp"><div class="hd2"><span class="lab">Münzen</span><span class="hint">🪙 '+P.coins+'</span></div><p class="hint" style="margin:0">Serien-Schutz, Boost, Avatare und das Sammelobjekt der Woche gibt es im Shop.</p><button class="btn full" data-act="shop">Zum Shop</button></div>';
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
function statsView(){
  const sp=securePairs();const lv=levelInfo(Math.floor(P.xp/10));const tot=P.st.ok+P.st.no;const acc=tot?Math.round(P.st.ok/tot*100):0;
  let h='<div class="pt"><h1>Statistik</h1></div>';
  h+='<div class="glass hero2 compact w gtap" data-act="profile" role="button"><div class="hr"><div class="ringw md">'+ring(lv.pct)+'<b>'+lv.lvl+'</b></div><div class="ht"><span class="lab">Level '+lv.lvl+'</span><strong>'+(P.avatar?P.avatar+' ':'')+lv.title+'</strong><small>Noch '+(100-(P.xp%100))+' XP bis Level '+(lv.lvl+1)+'</small></div></div></div>';
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
function segc(key,vals,cur,labels,act){return '<div class="segc" role="group">'+vals.map(function(v){return '<button class="'+(cur===v?'on':'')+'" data-act="'+(act||'set')+'" data-key="'+key+'" data-v="'+v+'">'+(labels?labels[v]:v)+'</button>';}).join('')+'</div>';}
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
function settingsView(){
  const sw=Object.keys(BGP).map(function(k){const c=BGP[k].c;return '<button class="sw'+(P.bg===k?' on':'')+'" data-act="set" data-key="bg" data-v="'+k+'" aria-label="Hintergrund '+BGP[k].n+'"><i style="background:linear-gradient(135deg,rgb('+c[0].join(',')+'),rgb('+c[1].join(',')+'),rgb('+c[2].join(',')+'))"></i><span>'+BGP[k].n+'</span></button>';}).join('');
  const AC={blue:['Blau','#2F6FEB'],poppy:['Mohn','#D6452F'],mustard:['Senf','#C99A2E'],green:['Grün','#2E8B57'],rose:['Rosé','#D6618F']};
  const acsw=Object.keys(AC).map(function(k){return '<button class="sw'+((P.accent||'blue')===k?' on':'')+'" data-act="set" data-key="accent" data-v="'+k+'" aria-label="Akzentfarbe '+AC[k][0]+'"><i style="background:'+AC[k][1]+'"></i><span>'+AC[k][0]+'</span></button>';}).join('');
  const vsel=function(id,ic,col,label,cur,pv){const vs=enVoices();return srow(ic,col,label,'','<span class="row2c"><button class="btn sm" data-act="vprev" data-v="'+pv+'" aria-label="'+label+' anhören">▶</button><select id="'+id+'" class="in inl" aria-label="'+label+'"><option value="">Automatisch</option>'+vs.map(function(v){return '<option value="'+esc(v.name)+'"'+(cur===v.name?' selected':'')+'>'+esc(vLabel(v))+'</option>';}).join('')+'</select></span>');};
  const sect=function(t,body,note){return '<div class="sect"><div class="st">'+t+'</div><div class="glass grp">'+body+'</div>'+(note?'<p class="sn">'+note+'</p>':'')+'</div>';};
  const bgsw=['natural'].concat(Object.keys(BGP)).map(function(k){const nat=k==='natural';const c=nat?[[150,184,160],[160,184,214],[226,202,166]]:BGP[k].c;const on=nat?(P.look!=='vivid'):(P.look==='vivid'&&P.bg===k);return '<button class="sw'+(on?' on':'')+'" data-act="bgpick" data-v="'+k+'" aria-label="Hintergrund '+(nat?'Natürlich':BGP[k].n)+'"><i style="background:linear-gradient(135deg,rgb('+c[0].join(',')+'),rgb('+c[1].join(',')+'),rgb('+c[2].join(',')+'))"></i><span>'+(nat?'Natürlich':BGP[k].n)+'</span></button>';}).join('');
  let h='<div class="pt"><h1>Einstellungen</h1></div>';
  h+='<button class="glass gtap lrow" data-act="profile"><span class="li"><span class="am a0">'+(P.avatar||P.emoji||'🙂')+'</span></span><span class="lt"><b>'+(P.nick?esc(P.nick):'Profil')+'</b><small>Level '+(1+Math.floor(P.xp/100))+' · Abzeichen und Sammlung</small></span><span class="chev">›</span></button>';
  h+='<div class="setgrid">';
  h+=sect('Aussehen',srow('🌙','#374151','Dunkelmodus','',tg('darkMode',isDark()))+'<div class="swlab"><b>Akzentfarbe</b><small>Knöpfe, Schalter und Links</small></div><div class="swrow">'+acsw+'</div><div class="swlab"><b>Hintergrund</b><small>Farbe hinter dem Glas</small></div><div class="swrow bgrow">'+bgsw+'</div>'+srow('💧','#0A84FF','Liquid Glass','Stärke der Glas-Effekte',segc('glass',[0,1,2,3],P.glass==null?2:P.glass,{0:'Aus',1:'Dezent',2:'Normal',3:'Max'}))+srow('🔤','#6B7280','Schriftgröße','',segc('fontSize',['S','M','L'],P.fontSize))+srow('🌊','#64D2FF','Hintergrund bewegen','Langsam treibende Farben',tg('bgMotion',!!P.bgMotion)));
  h+=sect('Lernen',srow('🎯','#FF9F0A','Tagesziel','Wörter pro Tag',segc('dailyGoal',[5,10,20,50],P.dailyGoal))+srow('📆','#5AC8FA','Wochenziel','Lerntage pro Woche',segc('weekGoal',[2,3,4,5,6,7],P.weekGoal||4))+srow('📝','#30B0C7','Wörter pro Runde','Gilt für Üben und Karteikarten',segc('roundLen',[5,10,20,30],P.quizLength,null,'roundlen'))+srow('🔀','#FF453A','Karten mischen','Aus: feste Reihenfolge',tg('shuffleCards',!!P.shuffleCards))+srow('⏭️','#5AC8FA','Automatisch weiter','Nach richtiger Antwort zur nächsten Karte',tg('autoNext',P.autoNext!==false))+srow('😀','#FFCC00','Emoji-Hilfe','Emoji als Gedächtnisstütze',segc('emo',['off','wrong','all'],P.emo||'all',{off:'Aus',wrong:'Bei Fehlern',all:'Immer'}))+srow('🌍','#34C759','Zusatzsprache','Französisch oder Latein',segc('lang2',['none','fr','la'],P.lang2,{none:'Keine',fr:'Französisch',la:'Latein'}))+(P.lang2!=='none'?srow('✨','#FF6B8B','Beispielwörter','20 Wörter zum Ausprobieren','<button class="btn sm" data-act="starter" data-k="'+P.lang2+'">Laden</button>'):'')+srow('✍️','#A2845E','Pencil-Modus','Tastatur öffnet nicht von selbst',tg('pen',!!P.pen)));
  const ev=enVoices();const good=ev.filter(function(v){return vQual(v)!=='Standard';}).length;
  h+=sect('Ton und Stimmen',srow('🔊','#FF375F','Vorlesen','Automatisch bei jeder Frage',tg('speak',!!P.speak))+vsel('vc','🎙️','#FF375F','Stimme',P.vC,'c')+vsel('va','🎙️','#5AC8FA','Podcast: Stimme A',P.vA,'a')+vsel('vb','🎙️','#34C759','Podcast: Stimme B',P.vB,'b')+((enVoicesAll().length>ev.length||P.allVs)?srow('🗂️','#8E8E93','Alle Stimmen zeigen','Auch einfache Stimmen anzeigen',tg('allVs',!!P.allVs)):'')+srow('🎧','#A2845E','Ton testen',S.diag||'Prüft, ob dein Gerät vorlesen kann','<button class="btn sm" data-act="speaktest">Test</button>')+srow('🔔','#34C759','Töne bei Antworten','Kurze Töne bei richtig und falsch',tg('sfx',!!P.sfx))+srow('📳','#FF9F0A','Haptik','Kurzes Vibrieren bei Tipps und Antworten',tg('haptic',P.haptic!==false)),ev.length?(good?good+' hochwertige Stimmen gefunden. Sie stehen oben in der Liste.':'Nur Standard-Stimmen gefunden. Lade am iPad unter Einstellungen > Bedienungshilfen > Gesprochene Inhalte > Stimmen > Englisch eine Premium-Stimme.'):'Auf diesem Gerät gibt es keine englischen Stimmen.');
  h+=sect('Erinnerung',srow('🔔','#FF9500','Erinnerung','Banner bei Streak-Gefahr',tg('remindersEnabled',!!P.remindersEnabled))+(P.remindersEnabled?srow('🕔','#FFB340','Ab Uhrzeit','Banner erscheint ab dieser Uhrzeit',segc('remHour',[15,17,19,21],P.remHour||17,{15:'15',17:'17',19:'19',21:'21'})):''));
  if(!isHosted())h+=sect('KI',srow('✨','#FF6B8B','KI-Funktionen',AI?'Heute '+((P.aiDays&&P.aiDays[fmt(new Date())])||0)+' Anfragen · nur auf Knopfdruck':'In dieser Ansicht nicht verfügbar',tg('aiOn',P.aiOn!==false)));
  let dat=srow('📤','#0A84FF','Sicherung kopieren','Zuletzt: '+ago(P.lastBackup),'<button class="btn sm" data-act="copy">Kopieren</button>')+srow('📥','#34C759','Sicherung einfügen','Holt deinen Stand zurück','<button class="btn sm" data-act="paste">Einfügen</button>')+(isHosted()?'':srow('🔄','#5AC8FA','Automatisch sichern','Speichert nach dem Lernen in deiner Claude-Anmeldung',tg('autoCloud',P.autoCloud!==false))+srow('☁️','#5AC8FA','Cloud-Sicherung','Zuletzt: '+(P.cloudAt?ago(P.cloudAt):'noch nie')+(S.cloudErr?' · '+esc(S.cloudErr):''),'<span class="row2c"><button class="btn sm" data-act="cloudsave">Sichern</button><button class="btn sm" data-act="cloudload">'+(S.confirmCloud?'Sicher?':'Holen')+'</button></span>'));
  if(S.bk)dat+='<div class="paste"><p class="sn" style="padding:0">Kopieren wurde blockiert. Markiere den Text und kopiere ihn selbst.</p><textarea id="bk" class="ta" readonly rows="3" aria-label="Sicherung">'+esc(S.bk)+'</textarea></div>';
  if(S.paste)dat+='<div class="paste"><textarea id="imp" class="ta" rows="3" placeholder="Sicherung hier einfügen" aria-label="Sicherung"></textarea><button class="btn pri full" data-act="import">Wiederherstellen</button></div>';
  dat+=srow('♻️','#FF9F0A','Fortschritt zurücksetzen','Eigene Wörter und Klausuren bleiben','<button class="btn bad sm" data-act="reset">'+(S.confirmReset?'Wirklich löschen':'Zurücksetzen')+'</button>')+srow('🗑️','#FF3B30','Alle Daten löschen','Entfernt alles von diesem Gerät. Nicht rückgängig zu machen.','<button class="btn bad sm" data-act="wipe">'+(S.confirmWipe?'Sicher?':'Löschen')+'</button>');
  h+=sect('Daten',dat,'Speichere die Sicherung in einer Notiz. Sie enthält Fortschritt, Klausuren und eigene Wörter.');
  h+=sect('Hilfe und Info',srow('💬','#34C759','Feedback senden','Fehler melden oder Idee teilen','<button class="btn sm" data-act="fbopen">Öffnen</button>')+srow('📖','#8E8E93','Tutorial','Kurze Einführung','<button class="btn sm" data-act="tutorial">Ansehen</button>')+srow('❓','#34C759','Hilfe und Fragen','Häufige Fragen','<button class="btn sm" data-act="legal" data-v="faq">Öffnen</button>')+srow('🏷️','#8E8E93','Impressum','Wer hinter der App steht','<button class="btn sm" data-act="legal" data-v="imp">Öffnen</button>')+srow('🔒','#0A84FF','Datenschutz','Welche Daten wohin gehen','<button class="btn sm" data-act="legal" data-v="dat">Öffnen</button>')+srow('📄','#8E8E93','Nutzungsbedingungen','Regeln und Haftung','<button class="btn sm" data-act="legal" data-v="agb">Öffnen</button>')+srow('🙏','#FF9F0A','Über EasyVocab','Lernmethode und Danksagung','<button class="btn sm" data-act="legal" data-v="ueber">Öffnen</button>'));
  h+='</div><p class="hint" style="text-align:center;margin:8px 0">EasyVocab · Version 71 · 1.11.2026</p>';
  return h;
}
/* ===== Rechtliches ===== */
/* HIER DEINE ANGABEN EINTRAGEN (Impressum nach § 5 DDG). Solange leer, zeigt die App einen Hinweis. */
const OP={name:'',street:'',city:'',mail:'',phone:''};
const LEGAL_DATE='1.11.2026';
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
    h+=hh('Speicherdauer und Löschung');h+=p('Die Daten bleiben auf deinem Gerät, bis du sie löschst. Unter Einstellungen findest du „Alle Daten löschen“. Wenn du Browserdaten löschst, ist dein Fortschritt weg. Kopiere vorher die Sicherung.');
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
    h+=q('Ich habe meine Serie verloren.','Eine Serie zählt jeden Tag mit mindestens einem gelernten Wort. Ein Serien-Schutz aus dem Shop rettet einen verpassten Tag.');
    h+=q('Sind Münzen echtes Geld?','Nein. Münzen gibt es nur durch Lernen und sie lassen sich nicht kaufen.');
    if(!isHosted())h+=q('Was kosten die KI-Funktionen?','Nichts, aber sie brauchen eine Internetverbindung. Es gibt Tageslimits, die die Claude-Plattform vorgibt.');
    h+=q('Der Ton fehlt.','Prüfe den Stumm-Schalter und die Lautstärke deines Geräts. Auf dem iPad hilft es, die Seite neu zu laden und einmal auf Anhören zu tippen.');
    h+=q('Wie lösche ich alles?','Einstellungen, Meine Daten, Alle Daten löschen.');
    h+=q('Ich habe einen Fehler gefunden.','Einstellungen, Hilfe, Feedback senden.');
  }else{
    h+=hh('Lernmethode');h+=p('EasyVocab nutzt das Leitner-System, eine bewährte Form des verteilten Wiederholens (Spaced Repetition). Wörter, die du sicher kannst, kommen seltener. Schwache kommen öfter.');
    h+=hh('Technik');h+=p(isHosted()?'Die Sprachausgabe nutzt die Stimmen deines Geräts.':'KI-Funktionen laufen über Claude von Anthropic. Die Sprachausgabe nutzt die Stimmen deines Geräts.');
    h+=hh('Version');h+=p('Version 71 · '+LEGAL_DATE);
    h+=hh('Danke');h+=p('An alle, die getestet und Ideen geliefert haben.');
  }
  return h+'</div>';
}
function learnView(){
  const id=S.ids[S.i];const last=S.i===S.ids.length-1;const e=eff();
  const sp=function(){return (canSpeakW(id)?'<button class="spk" data-act="speak" data-id="'+id+'">Anhören</button>':'');};
  const ex=E[id]?'<div class="ex">'+esc(E[id])+'</div>':'';
  let h='<div class="cnt">Karte '+(S.i+1)+' von '+S.ids.length+'</div><div class="prog thin w"><i style="width:'+Math.round((S.i+1)/S.ids.length*100)+'%"></i></div>';
  h+='<div class="stage"><div id="fc" class="flip'+(S.flip?' flipped':'')+'" data-act="flip" role="button" tabindex="0" aria-label="Karte umdrehen">';
  h+='<div class="face"><div class="lang">'+lang(id)+'</div><div class="word'+(pr(id).length>24?' sm':'')+'">'+esc(pr(id))+'</div>'+(e==='en'?sp():'')+'<div class="hint">Tippen zum Umdrehen</div></div>';
  h+='<div class="face back"><div class="hint">'+esc(pr(id))+'</div><div class="word'+(an(id).length>24?' sm':'')+'">'+esc(an(id))+'</div>'+emoBlock(id,'learn')+ex+memoBlock(id)+(e==='de'?sp():'')+'</div>';
  h+='</div></div>';
  h+='<div class="row2" style="grid-template-columns:1fr 2fr"><button class="btn" data-act="prev">Zurück</button><button class="btn pri" data-act="next">'+(last?'Zum Smart-Training':'Weiter')+'</button></div>';
  return h;
}
function nodueView(){
  return '<div class="glass pad w center"><div class="big-ico">✅</div><p>Alles wiederholt, komm morgen wieder!</p><div class="row2" style="width:100%"><button class="btn" data-act="free">Trotzdem weiter üben</button><button class="btn pri" data-act="home">Zum Menü</button></div><p class="hint" style="font-size:12px">Beim freien Üben ändert sich dein Fortschritt nicht.</p></div>';
}
function begin(m,free){
  S.mode=m;S.free=!!free;
  const base=scope(S.b);
  if(!base.length){toast(S.b==='weak'?'Noch keine schwachen Wörter – erst ein paar Runden üben 👍':'Hier sind keine Wörter. Füge welche unter Wörter hinzu.');S.screen='menu';render();return;}
  const noise=P.shuffleCards?0.9:0;
  const order=function(ids){return ids.map(function(id){return [id,bAvg(id)+Math.random()*noise+(noise?0:id*1e-6)];}).sort(function(a,b){return a[1]-b[1];}).map(function(x){return x[0];});};
  let p;
  if(free||m==='test')p=P.shuffleCards||m==='test'?shuffle(base):base.slice();
  else if(S.b==='weak')p=base;
  else if(S.b==='exam'){p=base.filter(function(id){return bAvg(id)<3;});if(!p.length){p=shuffle(base);toast('Alles sicher – Wiederholung zur Festigung');}else p=order(p);}
  else{p=dueOf(base);if(!p.length){S.screen='nodue';render();return;}p=order(p);}
  const n=m==='cards'?P.flashcardCount:(m==='test'?(S.b==='exam'?Math.min(60,p.length):Math.min(30,P.quizLength*2)):P.quizLength);
  p=p.slice(0,n);
  if(m!=='cards'&&!(S.b==='exam'&&m==='test'))p=interleave(p);
  startQuiz(m,p);
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
  Q.m=Q.test?'type':(S.mode==='auto'?(bx(id,Q.d)<=1?'mc':'type'):S.mode);
  if(Q.m==='mc'){
    const pool=shuffle(allIds().filter(function(x){return x!==id&&an(x)!==an(id);})).slice(0,3);
    Q.opts=shuffle([id].concat(pool));
  }
}
function quizView(){
  const id=Q.queue[0];const m=Q.m;const done=Q.total-Q.queue.length;
  const sp=(eff()==='en'&&canSpeakW(id))?'<button class="spk" data-act="speak" data-id="'+id+'">Anhören</button>':'';
  const ex=E[id]?'<div class="ex">'+esc(E[id])+'</div>':'';
  const tag=Q.test?'Probetest · ':(m==='intro'?'Neu · ':(S.mode==='auto'?(m==='mc'?'Auswahl · ':'Tippen · '):''));
  let h='<div class="cnt cnt2">'+((Q.hist&&Q.hist.length)?'<button class="undo" data-act="undo" aria-label="Vorheriges Wort"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" aria-hidden="true"><path d="M7.5 1.5L2 7.5l5.5 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Vorheriges Wort</span></button>':'<span></span>')+'<span>'+tag+'Karte '+Math.min(done+1,Q.total)+' von '+Q.total+'</span></div><div class="prog thin w"><i style="width:'+Math.round(done/Q.total*100)+'%"></i></div>';
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
    h+='<div id="qb" class="row2" style="visibility:hidden"><button class="btn bad" data-act="know" data-v="0">Noch üben</button><button class="btn good" data-act="know" data-v="1">Gewusst</button></div>';
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
    if(!Q.answered)h+='<div class="row2" style="grid-template-columns:1fr'+(Q.test?'':' 1fr')+' 1.4fr"><button class="btn" data-act="skip">Weiß nicht</button>'+(Q.test?'':'<button class="btn" data-act="hint">Tipp</button>')+'<button class="btn pri" data-act="check">Prüfen</button></div>';
  }
  if(Q.answered){
    const exact=an(id).split(';').some(function(a){return norm(a)===norm(Q.val);});
    let nx='';
    if(!Q.free)nx=Q.ok?'<div class="nx">'+(Q.hinted?'Mit Tipp gelöst, kommt morgen wieder':'Nächste Wiederholung '+dueText(id,Q.d)+' · Box '+bx(id,Q.d)+' von 5')+'</div>':'<div class="nx">Kommt gleich nochmal dran</div>';
    h+='<div class="sheet '+(Q.ok?'right':'wrong')+'" role="status"><b>'+(Q.ok?'Richtig':'Nicht ganz')+'</b>'+((Q.lastXp>0)?'<span class="xpchip">+'+Q.lastXp+' XP</span>':'')+(Q.ok?((m==='type'&&!exact)?'<div class="sol">Fast genau. Lösung: '+esc(an(id))+'</div>':''):'<div class="sol">Lösung: '+((m==='type'&&Q.val&&Q.val.trim())?diffSol(an(id),Q.val)+'<div class="hint" style="margin-top:2px">Rot markiert: hier weicht deine Antwort ab.</div>':esc(an(id)))+'</div>')+emoBlock(id,Q.ok?'right':'wrong')+ex+(Q.ok?'':memoBlock(id))+nx;
    if(!Q.ok&&m==='type')h+='<button class="link" data-act="override">Meine Antwort war auch richtig</button>';
    h+='<button class="btn" data-act="cont">Weiter</button></div>';
  }
  return h;
}
function submit(ok,quick){
  const id=Q.queue[0];
  Q.first=!Q.seen.has(id);
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
  if(Q.test)Q.log.push({id:id,d:Q.d,val:Q.val,ok:ok});
  if(!ok&&Q.first&&(Q.m==='type'||Q.test)&&Q.val&&Q.val.trim()){try{const tgt=(Q.d==='en'?W[id][1]:W[id][0]);const xs=norm(Q.val);const dist=Math.min.apply(null,tgt.split(';').map(norm).filter(Boolean).concat([norm(tgt)]).map(function(t){return lev(xs,t);}));Q.nearL=Q.nearL||[];Q.nearL.push({id:id,near:dist<=2&&xs.length>=3});}catch(e){}}
  Q.answered=true;Q.ok=ok;sfx(ok?'ok':'no');haptic(ok?'ok':'warn');
  if(quick||Q.test){cont();return;}
  render();
}
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
    const c=Q.log.filter(function(x){return x.ok;}).length;const p=Math.round(c/Q.total*100);
    h='<div class="glass pad w center res"><div class="big-ico">📝</div><div class="lab">Probetest</div><div class="big">'+p+' %</div><p>'+c+' von '+Q.total+' richtig · ungefähre Note '+grade(p)+'</p></div>';
    const bad=Q.log.filter(function(x){return !x.ok;});
    if(bad.length){h+='<div class="glass pad w"><div class="lab" style="margin-bottom:6px">Fehler</div>';bad.forEach(function(x){const pq=x.d==='en'?W[x.id][0]:W[x.id][1];const aa=x.d==='en'?W[x.id][1]:W[x.id][0];h+='<div class="wl" style="flex-direction:column;align-items:flex-start;gap:2px"><span style="flex:none">'+esc(pq)+'</span><span style="flex:none;color:var(--bad)">Du: '+(x.val.trim()?esc(x.val):'keine Antwort')+'</span><span style="flex:none;color:var(--good);font-weight:700">Richtig: '+esc(aa)+'</span></div>';});h+='</div>';}
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
  if(Q.hist&&Q.hist.length)h+='<button class="link" style="align-self:center" data-act="undo">↶ Letztes Wort nochmal ansehen</button>';
  h+='<div class="row2"><button class="btn" data-act="again">Nochmal</button><button class="btn pri" data-act="home">Zum Menü</button></div>';
  if(typeof S.b==='number'&&S.b<nb()-1)h+='<button class="btn full" data-act="nextblock">Nächste Liste</button>';
  return h;
}
function cont(){
  const id=Q.queue.shift();
  Q.hist=Q.hist||[];Q.hist.push({id:id,d:Q.d,m:Q.m,ok:Q.ok,val:Q.val,first:Q.first,snap:Q.snap,free:Q.free,gdBef:Q.gdBef});if(Q.hist.length>12)Q.hist.shift();
  if(!Q.ok&&!Q.test)Q.queue.splice(Math.min(3,Q.queue.length),0,id);
  if(!Q.queue.length){if(!Q.free&&Q.goalBefore<P.dailyGoal&&dayCount()>=P.dailyGoal)S.confetti=true;if(!Q.free){earnXp(20);weekGoalCheck();if(dayCount()>=P.dailyGoal*2&&P.marathonDay!==fmt(new Date())){P.marathonDay=fmt(new Date());P.tokens=(P.tokens||0)+1;setTimeout(function(){toast('Lern-Marathon! Du hast einen Doppel-XP-Booster verdient ⚡');},1400);}}P.run=null;save();S.screen='result';render();if(P.cloudAt&&Date.now()-P.cloudAt>600000)cloudSave(true);return;}
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
  Q.val=v;Q.err='';submit(check(v,an(Q.queue[0])));autoNext();
}
function hintText(id){const a=an(id).split(';')[0].replace(/\(.*?\)/g,'').trim();let s='';for(let i=0;i<a.length;i++){s+=(i===0||a[i]===' '||/[^a-zA-ZäöüÄÖÜß]/.test(a[i]))?a[i]:'_';s+=' ';}return s.trim();}
let tx=null;
function bindSwipe(){const el=document.getElementById('fc');if(!el)return;
  el.addEventListener('touchstart',function(e){tx=e.changedTouches[0].clientX;},{passive:true});
  el.addEventListener('touchend',function(e){if(tx===null)return;const dx=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(dx)>60){if(dx<0)act('next');else act('prev');}},{passive:true});
  el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();act('flip');}});}
function pv(v){if(v==='true')return true;if(v==='false')return false;if(/^-?\d+$/.test(v))return parseInt(v,10);return v;}
function act(a,d){
  d=d||{};
  if(a==='dir'){S.dir=d.d;render();}
  else if(a==='home'){S.screen='menu';S.confirmReset=false;S.formErr='';S.addErr='';render();}
  else if(a==='reloadapp'){location.reload();}
  else if(a==='tab'){haptic('tap');let to=-1;TABS.forEach(function(t,i){if(t.k===d.k)to=i;});if(to<0)return;const from=tabIndex();S.anim='';S.screen=d.k;S.confirmReset=false;S.formErr='';S.addErr='';render();}
  else if(a==='leaveno'){S.leave=false;render(true);}
  else if(a==='leaveyes'){S.leave=false;S.leaveOk=true;act('back');S.leaveOk=false;}
  else if(a==='back'){
    if(!S.leaveOk){const lm=leaveMsg();if(lm){S.leave=lm;render(true);return;}}
    S.leave=false;let t=S.from||'menu';if(S.screen==='pet')t=S.petBack||'shop';if(S.screen==='word')t=S.wordBack||'words';if(S.screen==='feedback')t='settings';if(S.screen==='legal')t=S.legalBack||'settings';if(S.screen==='game'){if(S.game&&S.game.iv)clearInterval(S.game.iv);if(S.game&&S.game.tm)clearTimeout(S.game.tm);S.speakGo=false;try{speechSynthesis.cancel();}catch(e){}t=S.from||'practice';}S.confirmWord=-1;if(S.screen==='settings')t=S.prevTab||'menu';if(S.screen==='add')t=(S.from&&isRoot(S.from))?S.from:'words';S.screen=t;S.formErr='';S.addErr='';S.confirmReset=false;S.paste=false;S.bk='';render();}
  else if(a==='settings'){if(S.screen!=='settings')S.prevTab=isRoot(S.screen)?S.screen:'menu';S.screen='settings';render();}
  else if(a==='onbdone'){P.onb=1;save();S.screen='menu';render();}
  else if(a==='tutorial'){S.screen='onb';render();}
  else if(a==='weakq'){setFrom();S.b='weak';S.dir='mix';begin('auto',false);}
  else if(a==='cardsq'){setFrom();S.pend='cards';S.b='all';S.screen='pickdir';render();}
  else if(a==='blitzq'){setFrom();startGame('blitz');}
  else if(a==='smart'){setFrom();
    S.b='all';
    if(!dueOf(allIds()).length&&dueOf(allIds(),true).length)S.dir='mix';
    begin('auto',!dueOf(allIds(),true).length);}
  else if(a==='resume'){setFrom();
    const r=P.run;if(!r)return;
    const qs=r.queue.filter(isAlive);if(!qs.length){P.run=null;save();render();return;}
    S.mode=(r.mode==='write'?'type':r.mode);S.dir=r.dir;S.b=r.b;S.examId=r.examId;S.free=r.free;S.screen='quiz';
    Q=mkQ(qs,{queue:qs.slice(),total:r.total,seen:new Set(r.seen),missed:new Set(r.missed),intro:new Set(r.intro)});
    prepare();render();maybeSpeak();}
  else if(a==='listgo'){setFrom();S.b=parseInt(d.k,10);begin('auto',false);}
  else if(a==='hardgo'){setFrom();S.b='weak';begin('auto',false);}
  else if(a==='examgo'){setFrom();S.b='exam';S.examId=parseInt(d.id,10);begin('auto',false);}
  else if(a==='tile'){setFrom();
    if(d.k==='weak'){if(!weakIds().length){toast('Noch keine schwachen Wörter – erst ein paar Runden üben 👍');return;}S.b='weak';}
    else if(S.b==='weak'||S.b==='exam')S.b='all';
    S.pend=d.k;S.screen='pickdir';render();}
  else if(a==='start'){
    if(S.pend==='learn'){S.ids=S.b==='all'?allIds():scope(S.b);if(!S.ids.length){toast('Hier sind keine Wörter.');return;}S.screen='learn';S.i=0;S.flip=false;render();}
    else begin(S.pend==='weak'?'auto':S.pend,false);}
  else if(a==='flip'){const el=document.getElementById('fc');S.flip=!S.flip;if(el)el.classList.toggle('flipped',S.flip);}
  else if(a==='qflip'){const el=document.getElementById('fc');if(el&&!el.classList.contains('flipped')&&Q&&Q.flipAt&&Date.now()<Q.flipAt){const h0=document.getElementById('fch');if(h0){h0.classList.remove('nudge');void h0.offsetWidth;h0.classList.add('nudge');}return;}const b=document.getElementById('qb');if(!el)return;const on=el.classList.toggle('flipped');if(b)b.style.visibility=on?'visible':'hidden';}
  else if(a==='prev'){if(S.i>0){S.i--;S.flip=false;render();}}
  else if(a==='next'){if(S.i<S.ids.length-1){S.i++;S.flip=false;render();}else{S.pend='auto';begin('auto',false);}}
  else if(a==='legal'){if(S.screen!=='legal')S.legalBack=S.screen;S.legal=d.v||'imp';S.screen='legal';render();}
  else if(a==='wipe'){
    if(S.confirmWipe){NOSAVE=true;try{localStorage.removeItem(KEY);}catch(e){}try{location.reload();}catch(e){}}
    else{S.confirmWipe=true;render(true);toast('Noch einmal tippen: alles wird gelöscht');setTimeout(function(){S.confirmWipe=false;if(S.screen==='settings')render(true);},5000);}}
  else if(a==='shclose'){S.sheet=null;render(true);}
  else if(a==='shgo'){const id=d.id,a2=d.v;S.sheet=null;render(true);act(a2,{id:id});}
  else if(a==='speak'){speak(parseInt(d.id,10));}
  else if(a==='got'){const id=Q.queue.shift();Q.intro.add(id);Q.queue.splice(Math.min(2,Q.queue.length),0,id);prepare();render();maybeSpeak();saveRun();}
  else if(a==='opt'){if(Q.answered)return;const i=parseInt(d.i,10);Q.pick=i;submit(Q.opts[i]===Q.queue[0]);autoNext();}
  else if(a==='check'){typeCheck();}
  else if(a==='hint'){const el=document.getElementById('ans');Q.val=el?el.value:'';Q.hinted=true;Q.hint=hintText(Q.queue[0]);Q.err='';render();}
  else if(a==='skip'){const el=document.getElementById('ans');Q.val=el?el.value:'';Q.err='';submit(false);}
  else if(a==='override'){override();}
  else if(a==='know'){submit(d.v==='1',true);}
  else if(a==='cont'){cont();}
  else if(a==='again'){begin(S.mode,S.free);}
  else if(a==='free'){begin(S.mode,true);}
  else if(a==='nextblock'){S.b=S.b+1;begin(S.mode,false);}
  else if(a==='toadd'){setFrom();S.add.mode=(aiOK()&&AIIMG)?'scan':'paste';S.add.lang=P.lang2!=='none'?P.lang2:'en';S.add.busy=false;S.add.found=null;S.add.err='';S.screen='add';render();}
  else if(a==='aset'){const n=document.getElementById('a-name');if(n)S.add.name=n.value;S.add[d.key]=d.v;S.addErr='';render(true);}
  else if(a==='addw'){
    const n=document.getElementById('a-name');if(n)S.add.name=n.value;
    const r=addWord(document.getElementById('a-en').value,document.getElementById('a-de').value,document.getElementById('a-ex').value,9,S.add.lang,S.add.name);
    if(r==='bad'){S.addErr='Trag das Wort und die Übersetzung ein.';render(true);return;}
    if(r==='dup'){S.addErr='Dieses Wort gibt es schon.';render(true);return;}
    const note=langNote(S.add.lang);S.addErr='';save();render(true);toast('Wort gespeichert.'+note);setTimeout(function(){const el=document.getElementById('a-en');if(el)el.focus();},0);}
  else if(a==='addbulk'){
    const n=document.getElementById('a-name');if(n)S.add.name=n.value;
    const v=document.getElementById('a-bulk').value;if(!v.trim()){toast('Füge zuerst eine Liste ein.');return;}
    const useAi=aiOK()&&document.getElementById('a-aitopic')&&document.getElementById('a-aitopic').checked;
    let ok=0,dup=0,bad=0;const ids=[];
    v.split(/\r?\n/).forEach(function(line){if(!line.trim())return;const m=line.match(/^(.+?)\s*(?:=|\t|\s[-–—]\s)\s*(.+)$/);if(!m){bad++;return;}const r=addWord(m[1],m[2],'',9,S.add.lang,S.add.name);if(r==='ok'){ok++;ids.push(W.length-1);}else if(r==='dup')dup++;else bad++;});
    const note=ok?langNote(S.add.lang):'';save();
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
  else if(a==='game'){startGame(d.v);}
  else if(a==='memtap'){const g=S.game;if(!g||g.type!=='mem'||g.lock||g.over)return;const i=parseInt(d.i,10),c=g.cards[i];if(!c||c.open||c.done)return;c.open=true;
    if(g.first<0){g.first=i;render(true);return;}
    const f=g.cards[g.first];g.moves++;
    if(f.id===c.id&&f.f!==c.f){f.done=c.done=true;f.open=c.open=false;g.first=-1;if(g.cards.every(function(x){return x.done;})){g.over=true;g.tEnd=Date.now();g.rw=gameReward(Math.min(30,8+g.cards.length),3);if(g.iv)clearInterval(g.iv);sfx('ok');confetti();}render(true);}
    else{g.lock=true;render(true);setTimeout(function(){f.open=false;c.open=false;g.first=-1;g.lock=false;if(S.screen==='game'&&S.game===g)render(true);},800);}}
  else if(a==='bopt'){const g=S.game;if(!g||g.type!=='blitz'||g.over)return;const i=parseInt(d.i,10);const ok=g.q.opts[i]===g.q.ans;
    if(ok){sfx('ok');g.score++;g.combo++;if(g.combo>g.max)g.max=g.combo;g.flash='ok';if(g.score>(P.blitzBest||0)){P.blitzBest=g.score;save();}}else{sfx('no');g.combo=0;g.flash='no';}
    g.q=blitzQ(g);render(true);}
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
    if(v==='pause'){g.paused=!g.paused;if(g.paused){clearTimeout(g.tm);try{speechSynthesis.cancel();}catch(e){}}render(true);if(!g.paused)clipPlan(g);}
    else if(v==='next'){clipNext(g,1);}else if(v==='prev'){clipNext(g,-1);}
    else if(v==='speak'){const id=g.ids[g.i];clipSay(clipSteps(id)[g.step]==='ex'&&E[id]?E[id]:gEn(id));}
    else if(v==='tap'){if(!g.rev){g.rev=true;render(true);}}}
  else if(a==='clipquiz'){const g=S.game;if(!g)return;S.b='all';S.free=true;S.dir='en';startQuiz('mc',g.ids.slice());}
  else if(a==='gostart'){beginGame(d.v);if(d.v==='pod'||d.v==='story'){act('storygo');}}
  else if(a==='vprev'){if(!window.speechSynthesis){toast('Vorlesen geht auf diesem Gerät nicht.');return;}
    const en=enVoices();const sel=document.getElementById(d.v==='a'?'va':(d.v==='c'?'vc':'vb'));const nm=sel&&sel.value;let v=nm?VOICES.filter(function(x){return x.name===nm;})[0]:null;
    if(!v)v=(d.v==='b')?(en.filter(function(x){return !en[0]||x.name!==en[0].name;})[0]||en[0]):en[0];
    const u=new SpeechSynthesisUtterance(d.v==='a'?'Hi! This is voice A. Ready to learn some words?':(d.v==='c'?'Hello! This is how I will read your words.':'Hello! This is voice B. Let us practise together.'));u.lang='en-GB';if(v){try{u.voice=v;u.lang=v.lang;}catch(e){}}u.rate=({slow:0.82,normal:0.95,fast:1.08}[(S.gs&&S.gs.tempo)||'normal'])||0.95;
    try{speechSynthesis.cancel();speechSynthesis.speak(u);}catch(e){}if(!v)toast('Keine englische Stimme gefunden.');}
  else if(a==='lastres'){const t=d.v;if(P.story&&P.story.type===t){S.game={type:t,busy:false,err:'',res:P.story,started:true};render();}}
  else if(a==='gset'){if(!S.gs)return;const k=d.key;let v=d.v;if(k==='n')S.gs.n[S.game.type]=parseInt(v,10);else if(k==='src'||k==='tempo'||k==='expl'||k==='variant'||k==='mode'||k==='clipsound'||k==='dikt'||k==='mean'||k==='rep')S.gs[k]=v;else if(k==='allV')S.gs.allV=(v==='1');render(true);}
  else if(a==='fbopen'){S.fb=S.fb||{kind:'bug',text:'',dev:true};S.screen='feedback';render();}
  else if(a==='fbset'){const t=document.getElementById('fbt');if(t)S.fb.text=t.value;S.fb.kind=d.v;render(true);}
  else if(a==='fbsend'){const t=document.getElementById('fbt');S.fb.text=t?t.value:S.fb.text;const dv=document.getElementById('fbd');S.fb.dev=dv?dv.checked:S.fb.dev;
    if(!S.fb.text.trim()){toast('Schreibe zuerst etwas.');return;}
    const kind={bug:'Fehler',idea:'Idee',praise:'Lob'}[S.fb.kind];
    let msg='EasyVocab Feedback ('+kind+')\n\n'+S.fb.text.trim();
    if(S.fb.dev)msg+='\n\n---\nVersion 71 · Bildschirm '+innerWidth+'x'+innerHeight+' · '+(isDark()?'dunkel':'hell')+' · '+(P.look==='vivid'?'Lebendig':'Natürlich')+' · Glas '+(P.glass==null?2:P.glass)+' · Schrift '+(P.fontSize||'M')+' · '+(navigator.userAgent||'').replace(/\s+/g,' ').slice(0,120);
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
  else if(a==='wordopen'){S.wid=parseInt(d.id,10);S.wordBack=isRoot(S.screen)?S.screen:'words';if(isRoot(S.screen))S.from=S.screen;S.screen='word';render();}
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
  else if(a==='buyfreeze'){if(P.coins>=FREEZE_COST&&(P.freeze||0)<3){P.coins-=FREEZE_COST;P.freeze=(P.freeze||0)+1;save();render(true);toast('Serien-Schutz gekauft.');}else if((P.freeze||0)>=3)toast('Du kannst höchstens 3 haben.');else toast('Noch zu wenig Münzen.');}
  else if(a==='sharelist'){const k=parseInt(d.k,10);const txt=range(k).map(function(id){return W[id][0]+' = '+W[id][1];}).join('\n');const done=function(){toast('Liste kopiert. Zum Einfügen: Wörter hinzufügen > Einfügen.');};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,function(){S.share=txt;render(true);});}else{S.share=txt;render(true);}}
  else if(a==='examtest'){setFrom();S.b='exam';S.examId=parseInt(d.id,10);begin('test',false);}
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
    const L=LNAME[S.add.lang];
    const prompt='Ich lerne '+L+'. Eingabe: "'+v.replace(/"/g,"'")+'". Erkenne, ob die Eingabe Deutsch oder '+L+' ist, und gib das Vokabelpaar zurück. Antworte NUR mit JSON: {"f":"Wort in '+L+' (bei englischen Verben mit to; bei französischen und lateinischen Nomen mit Artikel bzw. Genus, zum Beispiel la maison)","d":"deutsche Übersetzung. Bei Nomen IMMER mit bestimmtem Artikel (der, die, das), zum Beispiel der Apfel. Bei mehreren Bedeutungen mit Semikolon, höchstens 3","ex":"ein typischer, einfacher Schulbuch-Beispielsatz in '+L+' mit dem Wort, höchstens 12 Wörter","t":Themennummer,"e":"ein einzelnes Emoji, nur wenn es das Wort wirklich anschaulich macht, sonst leer"}. Themen: '+TOPICS.slice(0,9).map(function(t,i){return i+' '+t.n;}).join(', ')+'.';
    AI.json(prompt,{modelTier:'quick'}).then(function(r){
      const f=String((r&&r.f)||'').trim(),dd=String((r&&r.d)||'').trim();if(!f||!dd)throw {code:'empty_completion'};
      S.add.sres={f:f,d:dd,ex:String((r&&r.ex)||'').trim(),t:(Number.isInteger(r.t)&&r.t>=0&&r.t<=8)?r.t:9,e:(typeof r.e==='string'&&/^[^\x00-\x7F]{1,10}$/.test(r.e.trim()))?r.e.trim():''};
      S.add.sbusy=false;render(true);
    }).catch(function(e){S.add.sbusy=false;S.add.serr=aiErr(e&&e.code);render(true);});}
  else if(a==='savesingle'){
    const r=S.add.sres;if(!r)return;const n=document.getElementById('a-name');if(n)S.add.name=n.value;
    const res=addWord(document.getElementById('r-f').value,document.getElementById('r-d').value,document.getElementById('r-ex').value,r.t,S.add.lang,S.add.name,r.e);
    if(res==='bad'){toast('Wort und Übersetzung ausfüllen.');return;}
    if(res==='dup'){toast('Dieses Wort gibt es schon.');return;}
    const note=langNote(S.add.lang);save();S.add.sres=null;S.add.sq='';render(true);toast('Gespeichert.'+note);setTimeout(function(){const el=document.getElementById('a-q');if(el)el.focus();},0);}
  else if(a==='pasteclip'){
    const put=function(t){const ta=document.getElementById('a-bulk');if(ta){ta.value=t;S.add.bulk=t;const bi=document.getElementById('bulkinfo');if(bi)bi.innerHTML=bulkInfoHtml(t);}};
    if(navigator.clipboard&&navigator.clipboard.readText){navigator.clipboard.readText().then(put,function(){toast('Einfügen nicht erlaubt. Halte im Feld gedrückt und wähle Einfügen.');});}
    else toast('Halte im Feld gedrückt und wähle Einfügen.');}
  else if(a==='undo'){undoLast();}
  else if(a==='speaktest'){speakTest();}
  else if(a==='delw'){const id=parseInt(d.id,10);const c=P.custom[id-BASE];if(c){c.del=true;BC=null;save();render();toast('Wort gelöscht');}}
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
    P.exams.push({id:Date.now(),name:name||'Klausur',date:date,ids:ids});save();S.form={name:'',date:'',sel:null};S.formErr='';S.formOpen=false;render();toast('Klausur gespeichert');}
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
  else if(a==='roundlen'){const n=parseInt(d.v,10);P.quizLength=n;P.flashcardCount=n;save();render(true);}
  else if(a==='set'){P[d.key]=pv(d.v);if(d.key==='lang2'){BC=null;}if(d.key==='darkMode'){P.darkMode=pv(d.v);}save();applyPrefs();render(true);}
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
  if(t.id==='scan-file'){const f=t.files&&t.files[0];if(f){downscale(f).then(function(b){scanRun(b,'quick');});}t.value='';return;}
  if(t.getAttribute('data-fi')!==null&&S.add.found){const i=parseInt(t.getAttribute('data-fi'),10);S.add.found.words[i].on=t.checked;const nn=S.add.found.words.filter(function(w){return w.on;}).length;const bt=document.getElementById('savecnt');if(bt)bt.textContent=nn+' Wörter speichern';return;}
  if(t.getAttribute('data-blk')){S.b=(t.value==='all'||/^t\d+$/.test(t.value))?t.value:parseInt(t.value,10);render();return;}
  });
document.addEventListener('input',function(e){const t=e.target;
  if(t&&t.id==='nick'){P.nick=t.value.slice(0,16);save();return;}
  if(t&&t.id==='a-bulk'){S.add.bulk=t.value;const bi=document.getElementById('bulkinfo');if(bi)bi.innerHTML=bulkInfoHtml(t.value);return;}
  if(t&&t.id==='wq'){S.q=t.value;const r=document.getElementById('wres');if(r)r.innerHTML=wordsBody(S.q);return;}
  if(t&&(t.id==='rg-lo'||t.id==='rg-hi')){
    const a=document.getElementById('rg-lo'),b=document.getElementById('rg-hi');let lo=parseInt(a.value,10),hi=parseInt(b.value,10);
    if(lo>hi){if(t===a){hi=lo;b.value=hi;}else{lo=hi;a.value=lo;}}
    S.form.lo=lo;S.form.hi=(lo===0&&hi===nb()-1)?-1:hi;rangeFill(lo,hi);
  }});
document.addEventListener('toggle',function(e){if(e.target&&e.target.id==='adv')S.adv=e.target.open;},true);
document.addEventListener('keydown',function(e){
  const tag=e.target&&e.target.tagName;
  if(e.key==='Enter'&&e.target&&e.target.id==='dk'){e.preventDefault();act(S.game&&S.game.state==='play'?'mkcheck':'mknext');return;}
  if(e.key==='Enter'&&e.target&&e.target.id==='a-q'){e.preventDefault();act('lookup');return;}
  if(e.key==='Enter'&&e.target&&(e.target.id==='r-ex'||e.target.id==='a-ex')){e.preventDefault();act(e.target.id==='r-ex'?'savesingle':'addw');return;}
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
  if(e.key!=='Enter'||tag==='BUTTON')return;
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
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&S.sheet){S.sheet=null;render(true);}});
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
render();
setTimeout(cloudCheck,500);setTimeout(cloudQueue,3000);
