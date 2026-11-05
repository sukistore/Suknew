function buyCh(i){
if(sv.own.includes(i))return;
if(sv.coins<CP[i]){
const b=plEl.querySelector('[data-i="'+i+'"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=CP[i];sv.own.push(i);save();mList();
}
let mBusy=0;
function mFx(t,e){
t.classList.remove('fx');void t.offsetWidth;t.classList.add('fx');
const r=t.getBoundingClientRect(),d=document.createElement('i');
d.className='rp';d.style.left=(e.clientX-r.left)+'px';d.style.top=(e.clientY-r.top)+'px';
t.appendChild(d);
setTimeout(()=>{d.remove();t.classList.remove('fx')},520);
}
mnEl.addEventListener('click',e=>{
if(mBusy)return;
const t=e.target.closest('#mh .mb');
if(t)mFx(t,e);
const a=e.target.closest('[data-a]');
if(a){
const go=()=>{if(a.dataset.a=='p')mdOpen();else mShow(a.dataset.a)};
if(t){mBusy=1;setTimeout(()=>{mBusy=0;go()},a.dataset.a=='p'?280:170)}else go();
return;
}
const tb=e.target.closest('[data-t]');
if(tb&&mView=='o'){otT=tb.dataset.t;tbDraw();mOt();plEl.scrollTop=0;return}
if(tb&&mView=='t'){shT=tb.dataset.t;tbDraw();mList();plEl.scrollTop=0;return}
const up=e.target.closest('[data-u]');
if(up&&mView=='t'){if(e.target.closest('.bt'))buyUp(up.dataset.u=='z'||up.dataset.u=='a'?up.dataset.u:+up.dataset.u);return}
const s=e.target.closest('[data-s]');
if(s&&mView=='t'){if(e.target.closest('.bt'))buySk(s.dataset.s);return}
const wy=e.target.closest('[data-y]');
if(wy&&mView=='t'){if(e.target.closest('.bt'))buyWn(wy.dataset.y);return}
const zq=e.target.closest('[data-z]');
if(zq&&mView=='t'){if(e.target.closest('.bt'))buySq(+zq.dataset.z);return}
const ek=e.target.closest('[data-ek]');
if(ek&&mView=='o'){otSk(ek.dataset.ek);return}
const eq=e.target.closest('[data-eq]');
if(eq&&mView=='o'){otSq(+eq.dataset.eq);return}
const xm=e.target.closest('[data-xm]');
if(xm&&mView=='m'){xzClaimD(+xm.dataset.xm);return}
const xa=e.target.closest('[data-xa]');
if(xa&&mView=='m'){xzClaimA(+xa.dataset.xa);return}
const r=e.target.closest('[data-r]');
if(r&&mView=='b'){
const i=+r.dataset.r,rk=lbRank();
if(!pf.cl.includes(i)&&rk<=100&&rk>=LT[i].a&&rk<=LT[i].b){pf.cl.push(i);sv.coins+=LT[i].c;save();pfSave();mLb()}
return;
}
const lyb=e.target.closest('[data-ly]');
if(lyb&&mView=='s'){lyEdit();return}
const ga=e.target.closest('[data-g]');
if(ga&&mView=='s'){const z=ga.dataset.g.split(':');stSet(z[0],+z[1]);return}
const bn=e.target.closest('[data-n]');
if(bn&&mView=='g'){bnOpen(bn.dataset.n);return}
const wa=e.target.closest('[data-w]');
if(wa&&mView=='g'){stShare();return}
const rd=e.target.closest('[data-rd]');
if(rd&&mView=='r'){rdClaim();return}
const o=e.target.closest('[data-o]');
if(o){const q=o.dataset.o.split(':');pf[q[0]]=+q[1];pfSave();pfDraw();mPf();return}
const c=e.target.closest('.cd');
if(!c)return;
const i=+c.dataset.i;
if(mView=='k'){if(i==99){spSet(1);mList()}else if(sv.own.includes(i)){sv.sel=i;mPrev=i;spSet(0);save();mList()}}
else if(e.target.closest('.bt'))buyCh(i);
else{mPrev=i;mList()}
});
const MMK='pemanah_monster_v1';
const mdEl=document.getElementById('md'),mdLb=document.getElementById('mdl'),ykEl=document.getElementById('yk'),mdBr=document.getElementById('mdb');
const mdDay=()=>{const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()};
const mdOk=()=>{try{return localStorage.getItem(MMK)!=mdDay()}catch(x){return 1}};
function mdOpen(){
const ok=mdOk();
mdEl.querySelector('.m1').classList.toggle('lk',!ok);
mdLb.textContent=ok?'Tersedia hari ini  -  1x sehari':'Sudah dimainkan hari ini. Tersedia lagi besok.';
mdBr.textContent=brBest?'Rekor '+brBest+' bos':'';
const hw=!sv.wg.includes(1),dl=duLeft();
mdEl.querySelector('.m3').classList.toggle('lk',!dl);
mdEl.querySelector('.m3').classList.toggle('hd',hw&&dl>0);
document.getElementById('mdw').textContent=(hw?'HADIAH: Sayap Emas  -  menangkan 2 babak!':'Sayap Emas sudah kamu miliki')+(dl?'  -  Sisa '+dl+'/'+DUMX+' hari ini':'  -  Jatah habis, tersedia lagi besok');
pvCard();mdEl.classList.add('on');
}
function mdClose(){mdEl.classList.remove('on')}
mdEl.addEventListener('click',e=>{
if(e.target===mdEl||e.target.closest('#mdx')){mdClose();return}
const c=e.target.closest('[data-d]');
if(!c)return;
const m=+c.dataset.d;
if(m==1){if(!mdOk())return;ykEl.classList.add('on');return}
if(m==3){if(!duLeft())return;duUse()}
if(m==4){if(SPC||p.vt==6||sv.sel==6){pvBlk();return}mdClose();pvFind();return}
mdClose();runStart(m);
});
ykEl.addEventListener('click',e=>{
if(e.target.closest('#yy')){try{localStorage.setItem(MMK,mdDay())}catch(x){}ykEl.classList.remove('on');mdClose();runStart(1);return}
if(e.target===ykEl||e.target.closest('#yn'))ykEl.classList.remove('on');
});
function resetRun(){
xzReset();cmbReset();E.length=0;S.length=0;Pr.length=0;A.length=0;P.length=0;DS.length=0;
p.x=0;p.y=GY;p.vx=0;p.vy=0;p.f=1;p.on=1;p.fy=0;p.air=0;p.sq=0;p.rc=0;p.sf=0;
p.ch=0;p.pc=0;p.dr=0;p.da=0;p.sh=0;p.cd=0;p.kc=0;p.uc=0;p.ut=0;p.us=0;
p.go=0;p.gf=0;p.gx=0;p.gc=0;p.ga=0;p.dc=0;p.dn=0;p.dw=0;p.dsp=0;p.dht=0;p.dz=0;p.dl=-1;
p.hu=0;p.inv=0;p.dead=0;p.rg=0;p.hp=p.mh;
shake=0;msg=null;GQ.l=0;FXA.fl=0;FXA.sa=0;
cam=p.x-VW*.5+50;
}
function menuGo(){
inMenu=1;WV.n=0;mmOn=0;brOn=0;if(pvOn&&!duF)pvRes(0);duOn=0;pvOn=0;trOn=0;document.body.classList.remove('tr');document.body.classList.toggle('of',!!ofOn);skSync();
resetRun();
document.body.classList.add('mn');
mShow('h');
}
function runStart(m){
inMenu=0;
document.body.classList.remove('mn');
resetRun();
p.vt=sv.sel;skSync();
if(SPC){p.uc=1;cmbInit()}
if(SPC||p.vt>0)gearUp(p.vt);else{p.mh=100;p.hp=100}
p.mh=M.round(p.mh*gUh());p.hp=p.mh;
WV.k=0;WV.ts=T;
rb=sv.hi;
wake();
if(m==4)pvGo();else if(m==3)duGo();else if(m==2)brGo();else if(m==5)trGo();else if(m)mmGo();else waveGo(sv.cw);
}
function upMn(dt){
p.vt=mPrev;
p.wa+=((wgT()?.3:0)-p.wa)*M.min(1,dt*6);p.wp+=dt*1.8;
p.bl-=dt;if(p.bl<-.12)p.bl=rnd(2.2,5);
upH(dt);evFx(dt);
}
menuGo();
