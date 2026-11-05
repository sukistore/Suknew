let inMenu=1,mView='h',mPrev=sv.sel;
const CP=[0,200,550,1300,4200,5500,3000];
const mnEl=document.getElementById('mn'),mhEl=document.getElementById('mh'),pnEl=document.getElementById('pn'),plEl=document.getElementById('pl'),ptEl=document.getElementById('pt'),cnEl=document.getElementById('cn');
const tbEl=document.getElementById('tb');
let shT='e';
let otT='s';
const coinImg=new Image();
coinImg.src='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">'+document.getElementById('coin').innerHTML+'</svg>');
const coinTag='<svg class="ci" viewBox="0 0 24 24"><use href="#coin"/></svg>';
const GIM=[[],[]];
const gearImg=(i,t)=>GIM[i][t]||(GIM[i][t]=GRC[i][t].toDataURL());
const CHI=[],WGI=[],SQI=[];
let SPI=null;
function chRender(fn){
const o=document.createElement('canvas');o.width=o.height=160;
const x=o.getContext('2d'),og=g,sv0=[p.x,p.y,p.f,p.vt,p.wa,p.wp,p.sq,p.air,p.vx,p.vy],ws=sv.ws;
x.setTransform(1.6,0,0,1.6,0,0);
g=x;
try{fn()}catch(e){}
g=og;
[p.x,p.y,p.f,p.vt,p.wa,p.wp,p.sq,p.air,p.vx,p.vy]=sv0;sv.ws=ws;
return o.toDataURL();
}
function chImg(i){
return CHI[i]||(CHI[i]=chRender(()=>{
sv.ws=0;p.x=50;p.y=90;p.f=1;p.vt=i;p.wa=.3;p.wp=1.2;p.sq=0;p.air=0;p.vx=0;p.vy=0;
drawP(0);drawP(1);
}));
}
function sqImg(i){
return SQI[i]||(SQI[i]=chRender(()=>{
drawS({id:i,c:SC[i],x:50,y:92,f:1,vx:0,ph:0,sw:0,hf:0,dead:0,aa:0,hp:1,mh:1});
}));
}
function spImg(){
return SPI||(SPI=chRender(()=>{
const s0=SPC,pb=Object.assign({},p),ob={},a0=dxS.act;
for(const k in dxS.O)ob[k]=Object.assign({},dxS.O[k]);
SPC=1;dxS.act='T';
try{
spUpd(.016);spUpd(.016);
p.x=68;p.y=92;p.f=1;
dxS.O.B.x=34;dxS.O.B.y=92;dxS.O.B.f=1;
dxB.Draw();dxT.Draw();
}finally{
SPC=s0;dxS.act=a0;Object.assign(p,pb);
for(const k in ob)Object.assign(dxS.O[k],ob[k]);
}
}));
}
function wnImg(k){
return WGI[k]||(WGI[k]=chRender(()=>{
p.f=1;p.wa=1;p.wp=1.3;
g.translate(68,84);
if(k==1)evWn(p.wa,p.wp);else ev5W();
}));
}
const PFK='pemanah_profil_v1';
const pf={nm:'Pemain',av:0,bn:0,cl:[],ok:0};
try{const o=JSON.parse(localStorage.getItem(PFK)||'null');if(o){if(typeof o.nm=='string')pf.nm=o.nm.slice(0,14);pf.av=M.max(0,M.min(2,o.av|0));pf.bn=M.max(0,M.min(2,o.bn|0));if(Array.isArray(o.cl))pf.cl=o.cl.filter(v=>v>=0&&v<4);if(o.ok||(pf.nm.trim()&&pf.nm!='Pemain'))pf.ok=1}}catch(x){}
const pfSave=()=>{try{localStorage.setItem(PFK,JSON.stringify(pf))}catch(x){}};
const pfEl=document.getElementById('pf');
const avTag=i=>'<svg viewBox="0 0 48 48"><use href="#av'+i+'"/></svg>';
function pfDraw(){
const n=pf.nm.trim()||'Pemain';
pfEl.className='bn'+pf.bn;
pfEl.querySelector('.av').innerHTML=avTag(pf.av);
pfEl.querySelector('span').textContent=n;
const pv=plEl.querySelector('.pv');
if(pv){pv.className='pv bn'+pf.bn;pv.querySelector('.av').innerHTML=avTag(pf.av);pv.querySelector('span').textContent=n}
}
function mPf(){
const st=plEl.scrollTop;
plEl.className='pf';
const bn=[0,1,2].map(i=>'<div class="po bn'+i+(pf.bn==i?' on':'')+'" data-o="bn:'+i+'"></div>').join('');
const av=[0,1,2].map(i=>'<div class="po av'+(pf.av==i?' on':'')+'" data-o="av:'+i+'">'+avTag(i)+'</div>').join('');
plEl.innerHTML='<div class="pv"><div class="av"></div><span></span></div><div class="pq">Nama</div><input id="pi" maxlength="14" autocomplete="off" spellcheck="false" placeholder="Pemain"><div class="pq">Banner</div><div class="pr">'+bn+'</div><div class="pq">Profil</div><div class="pr">'+av+'</div>';
plEl.querySelector('#pi').value=pf.nm;
plEl.scrollTop=st;
cnEl.textContent=sv.coins;
pfDraw();
}
plEl.addEventListener('input',e=>{if(e.target.id=='pi'){const v=e.target.value.slice(0,14);if(v.trim().length>=3){pf.nm=v;pfSave();pfDraw()}}});
plEl.addEventListener('focusout',e=>{if(e.target.id=='pi')e.target.value=pf.nm});
plEl.addEventListener('keydown',e=>{if(e.target.id=='pi'){e.stopPropagation();if(e.key=='Enter')e.target.blur()}});
const LB=[["Wangsaf Gaming",3210],["Vikri",2765],["kucing_garong",2555],["WG • Rizal",2492],["cahyoo",2430],["Yusuf Alfa",2324],["bayu_aja",2125],["Rendi_gg",2072],["Ilham",2021],["reza_ganteng",1893],["Putra",1725],["dims",1682],["Salsa",1630],["bang ucup",1515],["ayam bakar",1470],["tobat_main",1434],["Alif",1399],["ujang",1352],["Reno",1319],["Dodi",1218],["kopi_sachet",1188],["Nanda_",1055],["Gilang",1029],["Zainal",1004],["Jaka",942],["mr.kevin",919],["Fahri",897],["ZR Dimas",874],["Umar",839],["Opik",819],["Lukman",777],["vino_",758],["kanjeng",687],["riski_yt",654],["Satria99",633],["Naufal",583],["Kevin Jr",545],["si botak",522],["Kiki",509],["Anwar",480],["lutfi",468],["bocil_epep",457],["Eka",421],["agus",411],["Maulana",401],["Tomi",370],["Oka",361],["Dinda",352],["Iqbal_",326],["Surya",303],["FikriXD",285],["n4ufal",278],["Mulyadi",272],["Zaki",262],["mas_bro_12",238],["si_paling_jago",233],["chandra",221],["dari_nol",209],["pak_haji",204],["Kris",199],["galih.ofc",179],["Aldo_14",175],["Putri Ayu",171],["hanif_09",159],["sultan_rawa",156],["alvinnn",153],["Yanto",149],["Tio",138],["Bima",133],["indra",120],["Nurul",116],["Tegar",111],["Kak Nanda",109],["ojan",107],["Mas Pur",98],["yoga_27",96],["Budi_",88],["Wahyu_",84],["farhan.id",82],["Widi",80],["wibu_kampung",73],["Danu",70],["Hendra",66],["gamau_kalah",65],["Rafli",64],["Arya",63],["rynz",59],["Bagas Prasetyo",57],["Kenzo",52],["Hafiz",51],["Fadil",50],["anak.kos",49],["ando",46],["Rangga",43],["Syahrul",42],["Qori",41],["nopal",37],["raffi_77",35],["ELL Fan",34],["tuan_kentang",33]];
const LT=[{a:1,b:3,n:'Top 1-3',c:2000},{a:4,b:10,n:'Top 4-10',c:1000},{a:11,b:50,n:'Top 11-50',c:500},{a:51,b:100,n:'Top 51-100',c:200}];
const LTT=['Legenda','Juara','Elit'];
const LCR=['#ffd45a','#d5dbe8','#d9966a'];
const crownSvg=c=>'<svg viewBox="0 0 24 24" style="color:'+c+'"><path d="M3 8l4.5 4L12 4.5 16.5 12 21 8l-2 11H5z" fill="currentColor" stroke="#2a2010" stroke-width="1.2" stroke-linejoin="round"/><circle cx="12" cy="4.2" r="1.7" fill="currentColor" stroke="#2a2010" stroke-width="1"/><circle cx="3" cy="8" r="1.4" fill="currentColor" stroke="#2a2010" stroke-width="1"/><circle cx="21" cy="8" r="1.4" fill="currentColor" stroke="#2a2010" stroke-width="1"/><path d="M5 19h14" stroke="#2a2010" stroke-width="1.6" stroke-linecap="round"/></svg>';
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function lbRank(){
let n=0;
for(const q of LB)if(q[1]>=sv.hi)n++;
return n+1;
}
function mLb(){
const st=plEl.scrollTop;
plEl.className='lb';
const h=sv.hi,rk=lbRank(),inn=rk<=100,nm=esc(pf.nm.trim()||'Pemain');
let ms;
if(inn){
const up=rk>1?LB[rk-2]:null;
ms='<div class="ms me"><b>Peringkatmu #'+rk+'</b><span>Rekor gelombang '+h+(up?'. Capai gelombang '+(up[1]+1)+' untuk melewati '+esc(up[0])+'.':'. Kamu di puncak leaderboard!')+'</span></div>';
}else ms='<div class="ms"><b>Rekormu: Gelombang '+h+'</b><span>Capai rekor gelombang '+(LB[99][1]+1)+' untuk masuk top 100 leaderboard.</span></div>';
const rw=LT.map((t,i)=>{
const mine=inn&&rk>=t.a&&rk<=t.b,done=pf.cl.includes(i);
const b=done?'<div class="bt ds">Diklaim</div>':mine?'<div class="bt" data-r="'+i+'">Klaim</div>':'<div class="bt ds no">Terkunci</div>';
return '<div class="rw'+(mine&&!done?' on':'')+'"><small>'+t.n+'</small><div class="rc">'+coinTag+t.c+'</div>'+b+'</div>';
}).join('');
const m=LB.slice(0,inn?rk-1:100).map(q=>({n:esc(q[0]),w:q[1]}));
if(inn){m.push({n:nm,w:h,me:1});for(const q of LB.slice(rk-1,99))m.push({n:esc(q[0]),w:q[1]})}
const rows=m.map((q,i)=>{
const t=i<3;
return '<div class="lr'+(t?' r'+(i+1):'')+(q.me?' me':'')+'"><b>'+(t?crownSvg(LCR[i]):'')+'<i>'+(i+1)+'</i></b><div class="nm"><span>'+q.n+'</span>'+(t?'<small style="color:'+LCR[i]+'">'+LTT[i]+(q.me?' - Kamu':'')+'</small>':q.me?'<small>Kamu</small>':'')+'</div><em>'+q.w+'<small>gelombang</small></em></div>';
}).join('');
plEl.innerHTML=ms+'<div class="pq">Hadiah koin</div><div class="rg">'+rw+'</div><div class="pq">Top 100</div>'+rows;
plEl.scrollTop=st;
cnEl.textContent=sv.coins;
}
pfDraw();
let rb=sv.hi;
sv.sk=[];
try{const o=JSON.parse(localStorage.getItem(SK)||'null');if(o&&Array.isArray(o.sk))for(const v of o.sk)if(SKN.includes(v)&&!sv.sk.includes(v))sv.sk.push(v)}catch(x){}
sv.ek=[];sv.eq=[];
