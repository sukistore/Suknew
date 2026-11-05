lyEl.addEventListener('pointermove',e=>{
e.stopPropagation();
if(!lyDr||e.pointerId!=lyDr.id)return;
const c=lyC[lyDr.b.k];
c.x=M.max(.02,M.min(.98,(e.clientX-lyDr.dx)/innerWidth));c.y=M.max(.02,M.min(.98,(e.clientY-lyDr.dy)/innerHeight));
lyOne(lyDr.b);
});
const lyUp=e=>{e.stopPropagation();if(lyDr&&e.pointerId==lyDr.id){lyDr=null;lySave()}};
lyEl.addEventListener('pointerup',lyUp);
lyEl.addEventListener('pointercancel',lyUp);
lyEl.addEventListener('click',e=>{
const o=e.target.closest('[data-lo]');
if(!o)return;
const a=o.dataset.lo;
if(a=='d'){lyEnd();return}
if(a=='r'){lyC={};lyApply();lySave();lySet(null);return}
if(!lySel)return;
const c=lyC[lySel.k];
c.s=M.max(.5,M.min(2,M.round((c.s+(a=='p'?.1:-.1))*10)/10));
lyOne(lySel);lySave();lyLb();
});
function stSet(k,v){
ST[k]=v;stSave();stApply();
if(k=='gq')rs();
mSt();
}
function stShare(){
if(ST.wa)return;
waP=1;
window.open('https://api.whatsapp.com/send?text='+encodeURIComponent('Ayo main WG of Archer Survival! Download game-nya di sini: '+WAL),'_blank');
}
function stWa(){
if(waP!=2||ST.wa)return;
waP=0;ST.wa=1;sv.coins+=100;save();stSave();
if(mView=='g')mGf();
}
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(waP==1)waP=2}else stWa()});
addEventListener('blur',()=>{if(waP==1)waP=2});
addEventListener('focus',stWa);
addEventListener('pageshow',stWa);
const BK='pemanah_bonus_v1';
const BL=[{k:'c',c:50,t:'Follow Saluran',u:'https://whatsapp.com/channel/0029Vb6t3YqIXnluSByJvh1g',d:'Follow saluran WhatsApp, lalu kembali ke game untuk mendapat bonus. Hanya bisa diklaim sekali.'},{k:'y',c:70,t:'Buka YouTube',u:'https://youtu.be/xq3DUQa4JTs?si=rEoFRHZmSkbQRKQI',d:'Like dan subscribe di YouTube, lalu kembali ke game untuk mendapat bonus. Hanya bisa diklaim sekali.'},{k:'u',c:30,t:'Follow Woas Update',u:'https://whatsapp.com/channel/0029VbE0SuKGZNCyxMgAf702',d:'Follow saluran WhatsApp Woas Update, lalu kembali ke game untuk mendapat bonus. Hanya bisa diklaim sekali.'},{k:'s',c:800,t:'Subscribe & Like',u:'https://youtube.com/shorts/3otIGVRIYLo?si=W5_hO7T8UjO6fnxT',d:'Subscribe dan like di YouTube, lalu kembali ke game untuk mendapat bonus. Hanya bisa diklaim sekali.'}];
const bnD={};
try{const o=JSON.parse(localStorage.getItem(BK)||'null');if(o)for(const q of BL)if(o[q.k])bnD[q.k]=1}catch(x){}
let bnK='',bnP=0;
function bnSave(){try{localStorage.setItem(BK,JSON.stringify(bnD))}catch(x){}}
function bnOpen(k){
if(bnD[k])return;
bnK=k;bnP=1;
window.open(BL.find(q=>q.k==k).u,'_blank');
}
function bnClaim(){
if(bnP!=2||!bnK||bnD[bnK])return;
const q=BL.find(z=>z.k==bnK);
bnP=0;bnK='';
bnD[q.k]=1;sv.coins+=q.c;save();bnSave();
if(mView=='g')mGf();
}
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(bnP==1)bnP=2}else bnClaim()});
addEventListener('blur',()=>{if(bnP==1)bnP=2});
addEventListener('focus',bnClaim);
addEventListener('pageshow',bnClaim);
const BGI={k:'',u:[]};
function bgImg(k){
const ky=VW+'|'+VH+'|'+GY;
if(BGI.k!=ky){BGI.k=ky;BGI.u=[]}
if(BGI.u[k])return BGI.u[k];
const tw=336,th=96,s=th/(VH*.7),c=document.createElement('canvas'),o=g,sb=ST.bg,vw=VW;
c.width=tw;c.height=th;
g=c.getContext('2d');ST.bg=k;VW=M.max(VW,tw/s);
try{
g.setTransform(s,0,0,s,0,-VH*.18*s);
bg();g.translate(-cam,0);ground();
}catch(x){}
g=o;ST.bg=sb;VW=vw;
return BGI.u[k]=c.toDataURL('image/jpeg',.85);
}
function mSt(){
const st=plEl.scrollTop;
plEl.className='st';
let h='';
for(const q of SO)h+='<div class="pq">'+q[1]+'</div><div class="sr">'+q[2].map((n,i)=>'<div class="so'+(ST[q[0]]==i?' on':'')+'" data-g="'+q[0]+':'+i+'"'+(q[0]=='bg'?' style="position:relative;overflow:hidden"':'')+'>'+(q[0]=='bg'?'&nbsp;<img src="'+bgImg(i)+'" alt="" style="position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;pointer-events:none">':n)+'</div>').join('')+'</div>';
h+='<div class="pq">Tata letak tombol</div><div class="sr"><div class="so" data-ly="1">Atur posisi &amp; ukuran tombol</div></div>';
plEl.innerHTML=h;
plEl.scrollTop=st;
cnEl.textContent=sv.coins;
}
function mGf(){
plEl.className='st';
plEl.innerHTML='<div class="ms"><b>Bonus 100 koin</b><span>Bagikan link game ke WhatsApp, lalu kembali ke game untuk mendapat bonus. Hanya bisa diklaim sekali.</span>'+(ST.wa?'<div class="bt ds">Diklaim</div>':'<div class="bt" data-w="1">Bagikan ke WhatsApp</div>')+'</div>'+BL.map(q=>'<div class="ms"><b>Bonus '+q.c+' koin</b><span>'+q.d+'</span>'+(bnD[q.k]?'<div class="bt ds">Diklaim</div>':'<div class="bt" data-n="'+q.k+'">'+q.t+'</div>')+'</div>').join('');
cnEl.textContent=sv.coins;
}
const RDK='pemanah_redeem_v1';
const RDL=[{k:'a',n:'VIP777',c:400},{k:'b',n:'VIP888',c:700},{k:'c',n:'WOASXWG',c:200},{k:'d',n:'X25CDX89IVHJK1M',c:9999999999},{k:'e',n:'WGXRPVIPPP',c:0,r:7512},{k:'f',n:'WGXGELOMBANGVIPPP',c:0,w:3211},{k:'g',n:'WOASXWG1',c:500},{k:'h',n:'LASSYXKITTYJETPACK',c:0,jp:1,ex:new Date(2026,10,7).getTime()},{k:'i',n:'NEWHEROWOAS',c:0,hr:6}];
const rdD={};
try{const o=JSON.parse(localStorage.getItem(RDK)||'null');if(o)for(const q of RDL)if(o[q.k])rdD[q.k]=1}catch(x){}
function rdSave(){try{localStorage.setItem(RDK,JSON.stringify(rdD))}catch(x){}}
function rdMsg(t,k){const m=plEl.querySelector('#rdm');if(m){m.textContent=t;m.className=k}}
function mRd(){
plEl.className='st';
plEl.innerHTML='<div class="ms"><b>Kode Redeem</b><span>Masukkan kode untuk mendapat hadiah koin. Setiap kode hanya bisa dipakai sekali.</span><input id="rdi" maxlength="20" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="Masukkan kode"><div id="rdm"></div><div class="bt" data-rd="1">Klaim</div></div>';
cnEl.textContent=sv.coins;
}
function rdClaim(){
const inp=plEl.querySelector('#rdi');
if(!inp)return;
const v=inp.value.trim().toUpperCase();
if(!v){rdMsg('Masukkan kode dulu','er');return}
const q=RDL.find(z=>z.n==v);
if(!q){rdMsg('Kode tidak valid','er');return}
if(rdD[q.k]){rdMsg('Kode sudah dipakai','er');return}
if(q.ex&&Date.now()>=q.ex){rdMsg('Kode sudah kadaluarsa','er');return}
if(q.jp&&sv.jp){rdMsg('Kamu sudah punya Jetpack','er');return}
if(q.hr!=null&&sv.own.includes(q.hr)){rdMsg('Kamu sudah punya hero ini','er');return}
rdD[q.k]=1;sv.coins+=q.c;if(q.jp)sv.jp=1;if(q.hr!=null)sv.own.push(q.hr);if(q.r!=null){pvS.rp=q.r;pvS.w=313;pvSave()}if(q.w!=null){if(q.w>sv.hi)sv.hi=q.w;sv.cw=q.w}save();rdSave();
inp.value='';
cnEl.textContent=sv.coins;
rdMsg(q.hr!=null?'Berhasil! Hero Light magician didapat':q.jp?'Berhasil! Jetpack Lassy × Kitty didapat':q.w!=null?'Berhasil! Gelombang kamu jadi '+q.w:q.r!=null?'Berhasil! RP kamu jadi '+q.r:'Berhasil! +'+q.c.toLocaleString('id-ID')+' koin','ok');
}
plEl.addEventListener('keydown',e=>{if(e.target.id=='rdi'){e.stopPropagation();if(e.key=='Enter'){e.preventDefault();rdClaim();e.target.blur()}}});
stApply();
function mList(){
if(mView=='s'){mSt();return}
if(mView=='g'){mGf();return}
if(mView=='r'){mRd();return}
if(mView=='b'){mLb();return}
if(mView=='f'){mPf();return}
if(mView=='o'){mOt();return}
if(mView=='m'){xzMisi();return}
plEl.className='';
const k=mView=='k',a=[],st=plEl.scrollTop;
for(let i=0;i<AE.length;i++){
if(!k&&shT!='e')break;
const ow=sv.own.includes(i);
if(k&&!ow)continue;
let b;
if(k)b=i==sv.sel&&!SPC?'<div class="bt ds">Dipilih</div>':'<div class="bt">Pilih</div>';
else if(ow)b='<div class="bt ds">Dimiliki</div>';
else b='<div class="bt'+(sv.coins>=CP[i]?'':' no')+'">'+coinTag+CP[i]+'</div>';
a.push('<div class="cd'+((k?i==sv.sel&&!SPC:i==mPrev)?' on':'')+'" data-i="'+i+'"><div class="ic ch"><img src="'+chImg(i)+'"></div><b>'+AE[i].n+'</b><small>HP x'+GRM[i]+'  Damage x'+GRM[i]+'</small>'+b+'</div>');
}
if(k)a.push(spCard());
if(!k&&shT=='s')a.push(skHtml());
if(!k&&shT=='u')a.push(upHtml());
if(!k&&shT=='w')a.push(wnHtml());
if(!k&&shT=='q')a.push(sqHtml());
plEl.innerHTML=a.join('');
plEl.scrollTop=st;
cnEl.textContent=sv.coins;
}
function mShow(v){
mView=v;mPrev=sv.sel;
mnEl.dataset.v=v;
mhEl.style.display=v=='h'?'flex':'none';
pnEl.style.display=v=='h'?'none':'flex';
ptEl.textContent=v=='k'?'Karakter':v=='b'?'Leaderboard':v=='f'?'Profil':v=='s'?'Pengaturan':v=='g'?'Bonus':v=='r'?'Redeem':v=='m'?'Misi':v=='o'?'Skill & Squad':'Toko';
cnEl.textContent=sv.coins;
tbEl.style.display=v=='t'||v=='o'?'flex':'none';
if(v=='t'||v=='o')tbDraw();
if(v!='h')mList();
}
