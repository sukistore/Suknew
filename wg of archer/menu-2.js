try{
const o=JSON.parse(localStorage.getItem(SK)||'null');
if(o&&Array.isArray(o.ek)){for(const v of o.ek)if(sv.sk.includes(v)&&!sv.ek.includes(v)&&sv.ek.length<3)sv.ek.push(v)}else sv.ek=sv.sk.slice(0,3);
if(o&&Array.isArray(o.eq)){for(const v of o.eq)if(sv.sq.includes(v|0)&&!sv.eq.includes(v|0)&&sv.eq.length<2)sv.eq.push(v|0)}else sv.eq=sv.sq.slice(0,2);
}catch(x){sv.ek=sv.sk.slice(0,3);sv.eq=sv.sq.slice(0,2)}
const SKD=[
{k:'q',n:'Skill',d:'Lima panah sekaligus',c:200,o:'#c9a45c',p:'M4 12h14M4 12l13-6M4 12l13 6M15.5 9.5 18.5 12l-3 2.5'},
{k:'v',n:'Gelombang Elektrik',d:'Sambaran listrik di depan',c:4000,o:'#a06bff',p:'M13.5 3 6.5 13.5h5L10.5 21l7-10.5h-5z'},
{k:'u',n:'Skill Hujan Panah',d:'Hujan panah',c:1000,o:'#e6c987',p:'M6 3v11M6 14l-2.2-2.2M6 14l2.2-2.2M12 6v15M12 21l-2.2-2.2M12 21l2.2-2.2M18 3v11M18 14l-2.2-2.2M18 14l2.2-2.2'},
{k:'m',n:'WG ULTIMATE',d:'Serang semua musuh di layar',c:12000,o:'#e0405a',p:'M2.5 8.5c6 2.2 13 2.2 19 0M5 12h14M7 12v8.5M17 12v8.5M12 3.5v5M9.5 20.5h5'}
];
function skSync(){for(const k of SKN)document.getElementById(k).classList.toggle('lc',!hasSk(k)&&!(SPC&&k=='v'))}
function skHtml(){
let h='';
for(const s of SKD){
const ow=sv.sk.includes(s.k);
h+='<div class="cd sk" data-s="'+s.k+'"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:'+s.o+'"><path d="'+s.p+'"/></svg></div><b>'+s.n+'</b><small>'+s.d+'</small>'+(ow?'<div class="bt ds">Dimiliki</div>':'<div class="bt'+(sv.coins>=s.c?'':' no')+'">'+coinTag+s.c+'</div>')+'</div>';
}
return h;
}
function buySk(k){
if(sv.sk.includes(k))return;
const s=SKD.find(q=>q.k==k);
if(sv.coins<s.c){
const b=plEl.querySelector('[data-s="'+k+'"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=s.c;sv.sk.push(k);if(sv.ek.length<3)sv.ek.push(k);save();mList();skSync();
}
sv.cw=1;
try{const o=JSON.parse(localStorage.getItem(SK)||'null');if(o)sv.cw=M.max(1,M.min(sv.hi,o.cw|0))}catch(x){}
skSync();
const niEl=document.getElementById('ni'),neEl=document.getElementById('ne');
function nmGo(){
const v=niEl.value.trim();
if(v.length<3){neEl.textContent='Nama minimal 3 huruf';return}
pf.nm=v.slice(0,14);pf.ok=1;pfSave();pfDraw();
document.body.classList.remove('nn');
}
document.getElementById('nb').addEventListener('click',nmGo);
document.getElementById('nm').addEventListener('keydown',e=>{e.stopPropagation();if(e.key=='Enter')nmGo()});
niEl.addEventListener('input',()=>{neEl.textContent=''});
if(!pf.ok)document.body.classList.add('nn');
let ofOn=0,ofFail=0;
function ofSet(v){
if(v==ofOn)return;
ofOn=v;
document.body.classList.toggle('of',!!v&&!trOn);
if(v&&!inMenu&&!paused&&!trOn)tp();
}
function ofChk(){
if(!/^https?:/.test(location.protocol)){ofFail=0;ofSet(navigator.onLine?0:1);return}
if(!navigator.onLine)ofFail=M.max(ofFail,1);
fetch(location.pathname,{method:'HEAD',cache:'no-store'}).then(()=>{ofFail=0;ofSet(0)}).catch(()=>{ofFail++;if(ofFail>=2)ofSet(1)});
}
const trTE=document.getElementById('trt'),trCE=document.getElementById('trc');
function trDraw(){trTE.textContent=TRL[trT];trCE.textContent='x'+TRN[trC]}
trTE.addEventListener('click',()=>{trT=(trT+1)%TRL.length;trDraw()});
trCE.addEventListener('click',()=>{trC=(trC+1)%TRN.length;trDraw()});
document.getElementById('trs').addEventListener('click',trSpawn);
document.getElementById('trh').addEventListener('click',()=>{E.length=0});
document.getElementById('trx').addEventListener('click',()=>{if(paused)tp();menuGo()});
document.getElementById('tr').addEventListener('pointerdown',e=>e.stopPropagation());
document.getElementById('oft').addEventListener('click',()=>{if(inMenu)runStart(5)});
addEventListener('online',ofChk);
addEventListener('offline',ofChk);
setInterval(ofChk,4000);
ofChk();
const TB=[['e','Evolusi','M3 12h16M14 7l5 5-5 5M3 12l3-3M3 12l3 3'],['s','Skill','M13.5 3 6.5 13.5h5L10.5 21l7-10.5h-5z'],['u','Tingkatkan','M12 20V5M6 11l6-6 6 6'],['w','Sayap','M3 18c3-1 5-5 6-11 2 3 3 7 3 11M12 18c0-4 1-8 3-11 1 6 3 10 6 11'],['q','Squad','M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM5 20c0-4 3-6.5 7-6.5s7 2.5 7 6.5']];
const OTB=[['s','Skill',TB[1][2]],['q','Squad',TB[4][2]]];
function tbDraw(){const o=mView=='o';tbEl.innerHTML=(o?OTB:TB).map(q=>'<div class="tbb'+((o?otT:shT)==q[0]?' on':'')+'" data-t="'+q[0]+'"><svg viewBox="0 0 24 24"><path d="'+q[2]+'"/></svg><span>'+q[1]+'</span></div>').join('')}
const UC=[100,300,700,1200,1800,2500,3300,4200,5200,6300];
const LKC=l=>250+100*l+12*l*l;
const ALC=l=>300+110*l+15*l*l;
const UP=[
{n:'Tebal HP',d:'Tambah HP maksimal',o:'#e0405a',p:'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z',v:l=>'+'+l*10+'%'},
{n:'Damage Panah',d:'Tambah damage',o:'#ffb34f',p:'M12 3l2.2 5.3 5.6.5-4.3 3.7 1.3 5.5L12 15l-4.8 3 1.3-5.5L4.2 8.8l5.6-.5z',v:l=>'+'+l*10+'%'},
{n:'Kecepatan Panah',d:'Panah lebih cepat',o:'#6fd0ff',p:'M4 12h14M13 7l5 5-5 5M4 8h5M4 16h5',v:l=>'+'+l*5+'%'},
{n:'Panah Ganda',d:'Peluang 2 panah',o:'#c9a45c',p:'M3 8h14M13 4l4 4-4 4M3 16h14M13 12l4 4-4 4',v:l=>l*10+'%'}
];
function upHtml(){
let h='';
for(let i=0;i<UP.length;i++){
const s=UP[i],l=sv.up[i];
let pv='';
for(let j=0;j<10;j++)pv+='<i'+(j<l?' class="on"':'')+'></i>';
h+='<div class="cd up" data-u="'+i+'"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:'+s.o+'"><path d="'+s.p+'"/></svg></div><b>'+s.n+'</b><small>'+s.d+'</small><small>'+s.v(l)+(l<10?' \u2192 '+s.v(l+1):'')+'</small><div class="lv">'+pv+'</div><small>Lv '+l+'/10</small>'+(l>=10?'<div class="bt ds">Maks</div>':'<div class="bt'+(sv.coins>=UC[l]?'':' no')+'">'+coinTag+UC[l]+'</div>')+'</div>';
}
{
const l=sv.lk;
h+='<div class="cd up" data-u="z"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:#ff8fb8"><path d="M12 3.5 18.5 6v5.2c0 4.3-2.7 7.4-6.5 9.3-3.8-1.9-6.5-5-6.5-9.3V6z"/></svg></div><b>Zirah Lassy × Kitty</b><small>HP &amp; Damage khusus Lassy × Kitty</small><small>x'+(12+l)+(l<18?' \u2192 x'+(13+l):'')+'</small><small>Lv '+l+'/18</small>'+(l>=18?'<div class="bt ds">Maks</div>':'<div class="bt'+(sv.coins>=LKC(l)?'':' no')+'">'+coinTag+LKC(l)+'</div>')+'</div>';
}
if(sv.own.includes(6)){
const l=sv.al;
h+='<div class="cd up" data-u="a"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:#ff4d60"><path d="M12 3.5 18.5 6v5.2c0 4.3-2.7 7.4-6.5 9.3-3.8-1.9-6.5-5-6.5-9.3V6z"/></svg></div><b>Zirah Light magician</b><small>HP &amp; Damage khusus Light magician</small><small>x'+(10+l)+(l<30?' \u2192 x'+(11+l):'')+'</small><small>Lv '+l+'/30</small>'+(l>=30?'<div class="bt ds">Maks</div>':'<div class="bt'+(sv.coins>=ALC(l)?'':' no')+'">'+coinTag+ALC(l)+'</div>')+'</div>';
}
return h;
}
function buyUp(i){
if(i=='a'){
const l=sv.al;
if(l>=30)return;
if(sv.coins<ALC(l)){
const b=plEl.querySelector('[data-u="a"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=ALC(l);sv.al=l+1;save();mList();
return;
}
if(i=='z'){
const l=sv.lk;
if(l>=18)return;
if(sv.coins<LKC(l)){
const b=plEl.querySelector('[data-u="z"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=LKC(l);sv.lk=l+1;save();mList();
return;
}
const l=sv.up[i];
if(l>=10)return;
if(sv.coins<UC[l]){
const b=plEl.querySelector('[data-u="'+i+'"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=UC[l];sv.up[i]=l+1;save();mList();
}
const WND=[
{k:1,n:'Sayap Emas',d:'Bisa dipakai semua karakter',c:3000,o:'#e6c987',p:'M3 18c3-1 5-5 6-11 2 3 3 7 3 11M12 18c0-4 1-8 3-11 1 6 3 10 6 11'},
{k:2,n:'Sayap Biru',d:'Bisa dipakai semua karakter',c:3000,o:'#8fd0ff',p:'M3 18c3-1 5-5 6-11 2 3 3 7 3 11M12 18c0-4 1-8 3-11 1 6 3 10 6 11'}
];
const SQP=[300,800,1300,2500];
