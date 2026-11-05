function olHm(o,m){
if(!m||!m.t)return;
o.lt=performance.now();
if(m.t=='hi'){o.n=String(m.n||'Pemain').slice(0,14);o.ok=1;olLbx();return}
if(m.t=='bye'){olDrop(o);return}
if(!olOn)return;
if(m.t=='st'){
if(olOn=='d'){olOp.r=m.r;olOp.a=m.a;olOp.w=m.w;olOp.v=m.v;return}
const s=S.find(z=>z.pid==o.id);
if(s)olAp(s,m);
}else if(m.t=='ar'){
olAr(m);
if(olOn=='c')for(const x of olCs)if(x!==o&&x.ok)olSend(x.c,{t:'ar',x:m.x,y:m.y,vx:m.vx,vy:m.vy,c:m.c,e:m.e});
}else if(m.t=='he'){
const e=E.find(z=>z.nid==m.i);
if(e&&!e.dd)hurtE(e,m.d,m.x);
}else if(m.t=='hit')olHit(m.f,m.x);
}
function olGm(m){
if(!m||!m.t)return;
olLt=performance.now();
if(m.t=='lb'){olLb=m;olUI();return}
if(m.t=='go'){olRun(m.m,m.z,m.h);return}
if(m.t=='no'){olLost('Room penuh atau sedang bermain');return}
if(m.t=='bye'){olLost('Host keluar dari room');return}
if(!olOn)return;
if(m.t=='st'){olOp.r=m.r;olOp.a=m.a;olOp.w=m.w;olOp.v=m.v}
else if(m.t=='sn')olSn(m);
else if(m.t=='ar')olAr(m);
else if(m.t=='bk')olBkIn();
else if(m.t=='dmg'){olDx=1;try{hurtP(m.d,m.x)}finally{olDx=0}}
else if(m.t=='hit')olHit(m.f,m.x);
else if(m.t=='end')olFin('Boss Rush Co-op selesai','Bos dikalahkan: '+m.k+'  -  Koin didapat: '+m.k*20);
}
function olGo(){
const hs=olCs.filter(o=>o.ok);
if(olMode=='d'&&hs.length!=1){olSay('Mode 1 vs 1 butuh tepat 2 pemain');return}
olCs=hs;
const z=M.max(olSz,1+hs.length);
olAll({t:'go',m:olMode,z,h:OLN()});
olRun(olMode,z,'');
}
function olRun(m,z,hn){
olOn=m;olD=m=='d'?1:0;olH=m=='c'&&olRole!='g'?1:0;olG=m=='c'&&olRole=='g'?1:0;
olMsgT='';olMt=null;olEl.classList.remove('on');
olOp={r:null,a:0,w:0,v:VW,n:olRole=='g'?(hn||'Lawan'):((olCs[0]&&olCs[0].n)||'Lawan')};
olNid=0;olDt=0;olEt=0;olBn=null;olLm=null;olTm=M.max(1,z||1);olLt=performance.now();
for(const o of olCs)o.lt=olLt;
runStart(m=='d'?3:2);
if(olH){
olCs.forEach(o=>olMk(o.id,o.n,0,0));
for(let i=0;i<olTm-1-olCs.length;i++)olMk('b'+i,'Bot Pro '+(i+1),1,i);
}
}
function olMk(id,n,bt,i){
const q=duQ(bt?[4,5,4][i%3]:4),h=bt?M.max(p.mh,150)*1.2:100;
const s={ol:1,rm:bt?0:1,bt,pid:id,nm:n,c:{n},id:0,q,ws:bt?[1,2,1][i%3]:0,x:p.x+(bt?-60-i*50:40),y:GY,al:0,vz:0,tal:0,tx:p.x,vx:0,f:1,hp:h,mh:h,dm:0,cd:0,hf:0,dead:0,rg:0,sp:300,mt:0,dir:1,jb:0,cw:.5,dr:0,ch:0,tg:1,raw:null,aa:0,sw:0,wu:0,ph:0,fx:0,off:bt?-90-i*70:90};
S.push(s);
return s;
}
function olPk(){
const r=[];
for(let i=0;i<OLK.length;i++){const v=p[OLK[i]];r.push(typeof v=='number'?+v.toFixed(2):v)}
return r;
}
function olAp(s,m){
const q=s.q,r=m.r;
for(let i=0;i<OLK.length;i++)q[OLK[i]]=r[i];
s.raw=r;s.tx=r[OLX];s.f=r[OLF];s.vx=r[OLV];s.tal=m.a;s.ws=m.w;s.hp=q.hp;s.mh=q.mh;
s.dead=(q.dead>0||q.hp<=0)?1:0;
if(m.n)s.nm=m.n;
}
function olSnap(){
const pl=[{i:'H',n:OLN(),r:olPk(),a:M.max(0,GY-p.y),w:sv.ws,b:0}];
for(const s of S){
if(!s.ol)continue;
if(s.bt){
const q=s.q;
q.x=s.x;q.f=s.f;q.vx=s.vx;q.hp=s.hp;q.mh=s.mh;q.dead=s.dead>0?1:0;
pl.push({i:s.pid,n:s.nm,r:OLK.map(k=>q[k]),a:s.al,w:s.ws,b:1});
}else if(s.raw)pl.push({i:s.pid,n:s.nm,r:s.raw,a:s.tal,w:s.ws,b:0});
}
const en=[],pr=[];
for(const e of E){
if(e.nid==null||en.length>14)continue;
const o={};
for(const k in e){
if(k=='ps'||k=='pp'||k=='rs')continue;
const v=e[k],t=typeof v;
if(t=='number')o[k]=+v.toFixed(2);else if(t=='string'||t=='boolean')o[k]=v;
}
en.push(o);
}
for(const q of Pr){
if(!OLB.has(q.t)||pr.length>30)continue;
const o={};
for(const k in q){
const v=q[k],t=typeof v;
if(t=='number')o[k]=+v.toFixed(2);else if(t=='string'||t=='boolean')o[k]=v;
}
pr.push(o);
}
return{t:'sn',p:pl,e:en,r:pr,b:olBn};
}
function olSn(m){
const ids=new Set();
for(const d of m.p){
if(olPeer&&d.i==olPeer.id)continue;
ids.add(d.i);
let s=S.find(z=>z.pid==d.i);
if(!s){s=olMk(d.i,d.n,d.b,0);s.rm=1;s.x=d.r[OLX];s.tx=s.x}
olAp(s,d);
}
for(let i=S.length-1;i>=0;i--)if(S[i].ol&&!ids.has(S[i].pid))S.splice(i,1);
const seen=new Set();
for(const d of m.e){
let e=E.find(z=>z.nid==d.nid);
if(!e){e={hl:[]};e.x=d.x;E.push(e)}
for(const k in d)if(k!='x')e[k]=d[k];
e.tx=d.x;
seen.add(d.nid);
}
for(let i=E.length-1;i>=0;i--)if(!seen.has(E[i].nid))E.splice(i,1);
for(let i=Pr.length-1;i>=0;i--)if(OLB.has(Pr[i].t))Pr.splice(i,1);
for(const o of m.r){o.hs=[];o.tr=[];Pr.push(o)}
if(m.b)ban(m.b);
}
function olUpE(dt){
const k=M.min(1,dt*15);
for(const e of E){
e.y=GY-(e.al||0);
e.hf-=dt;
if(e.tx!=null)e.x+=(e.tx-e.x)*k;
}
}
function olAr(m){
const a={x:m.x,y:m.y,vx:m.vx,vy:m.vy,tr:[],st:0,l:0,c:m.c,an:M.atan2(m.vy,m.vx),dm:0,pr:0,hit:[],ev:m.e,vf:1};
OLS.add(a);
A.push(a);
}
function olHit(f,x){
if(p.dead>0||duS!=1)return;
const dr=x>p.x?1:-1;
p.hp-=f*p.mh;p.hu=.3;p.rg=4;p.vx-=dr*220;shake=M.max(shake,4);
for(let i=0;i<5;i++)sp(0,p.x+rnd(-5,5),p.y-rnd(20,50),-dr*rnd(20,70),rnd(-60,-10),rnd(.3,.5),rnd(2,3.5),'150,70,62',200,2);
if(p.hp<=0)killP();
}
function olBkIn(){
sv.coins+=20;save();brK++;
if(brK>brBest){brBest=brK;try{localStorage.setItem(BRK,brBest)}catch(x){}}
if(!p.dead)p.hp=M.min(p.mh,p.hp+35*gDm());
ban('Boss tumbang  -  +20 koin');
}
function olHum(){
if(!(p.dead>0))return p;
return S.find(s=>s.ol&&s.rm&&!(s.dead>0))||null;
}
function olAlive(){return S.some(s=>s.ol&&!(s.dead>0))}
function olRv(){
p.dead=0;p.hp=p.mh*.6;p.inv=2.5;p.hu=0;p.vx=0;p.vy=0;p.y=GY;p.on=1;p.air=0;p.fy=0;p.rg=0;olDt=0;
const t=S.find(s=>s.ol&&!(s.dead>0));
if(t)p.x=t.x;
ring(p.x,GY-30,'230,210,170',44);
ban('Kamu bangkit kembali');
}
function olFire(s,en){
const c=M.max(.3,s.ch),d=s.f,ox=s.x+d*26,oy=s.y-45,sp2=480+c*760,ty=en.y-30*en.sz,v=s.q.vt;
let a=0;
for(let i=0;i<4;i++){
const t0=M.abs(en.x-ox)/(sp2*M.max(.2,M.cos(a))),ex=(en.x+(en.vx||0)*t0*.8-ox)*d,ey=ty-oy;
a=M.atan2(ey-215*t0*t0,M.max(30,ex));
}
a=M.max(-.9,M.min(.7,a))+rnd(-.012,.012);
A.push({x:ox,y:oy,vx:d*M.cos(a)*sp2,vy:M.sin(a)*sp2,tr:[],st:0,l:0,c,an:d>0?a:PI-a,dm:(16+c*44)*AE[v].d*gDm()*gUd()*.8,pr:(c>.85?2:0)+AE[v].pr,hit:[],ev:v,bt:1});
s.dr=0;s.ch=0;s.cw=rnd(.35,.7);s.q.rc=1;
ring(ox,oy,AE[v].c,22+c*22);
}
function olBot(s,dt){
const q=s.q;
s.cd-=dt;s.cw-=dt;s.jb-=dt;s.mt-=dt;s.rg-=dt;
if(s.dead>0){
s.dead-=dt;
if(s.dead<=0){const h=olHum();s.dead=0;s.hp=s.mh;s.x=h?h.x:p.x;s.tx=s.x;s.vx=0;s.al=0;s.vz=0;ring(s.x,GY-30,'230,210,170',34)}
return;
}
if(s.rg<=0&&s.hp<s.mh)s.hp=M.min(s.mh,s.hp+s.mh*.02*dt);
let en=null,bd=1e9;
for(const e of E){
if(e.dd||e.nid==null)continue;
const d=M.abs(e.x-s.x)*(e.boss?.7:1);
if(d<bd){bd=d;en=e}
}
const ad=en?M.abs(en.x-s.x):0,sd=en?sgn(en.x-s.x):s.f,on=s.al<=0;
let want=0,th=0;
if(en&&ad<1100){
s.f=sd;
if(ad<250)want=-sd*s.sp;
else if(ad>440)want=sd*s.sp;
else{if(s.mt<=0){s.mt=rnd(.5,1.4);s.dir=M.random()<.5?-1:1}want=s.dir*s.sp*.45}
}else{
const h=olHum(),tx=(h?h.x:p.x)+s.off,dx=tx-s.x;
if(M.abs(dx)>VW*.9){s.x=tx;s.vx=0}
else if(M.abs(dx)>50){want=sgn(dx)*s.sp*1.1;s.f=sgn(dx)}
}
for(const e of E){if(!e.dd&&e.boss&&M.abs(e.x-s.x)<170&&(e.st==1||e.st==3))th=1}
for(const r of Pr){
if(!OLB.has(r.t))continue;
const dx=s.x-r.x;
if(M.abs(dx)<190&&dx*r.vx>0&&r.y>GY-110)th=1;
}
if(th&&on&&s.jb<=0){s.vz=560;s.jb=.7}
if(!on||s.vz){s.vz-=(s.vz>0?1700:1900)*dt;s.al+=s.vz*dt;if(s.al<=0){s.al=0;s.vz=0}}
s.vx+=(want-s.vx)*M.min(1,dt*9);s.x+=s.vx*dt;s.tx=s.x;s.tal=s.al;
if(en&&ad>150&&ad<780&&!th){
if(!s.dr){if(s.cw<=0){s.dr=1;s.ch=0;s.tg=rnd(.75,1)}}
else{s.ch=M.min(1,s.ch+dt/.62);if(s.ch>=s.tg)olFire(s,en)}
}else{s.dr=0;s.ch=0}
const o2=s.al<=0;
q.dr=s.dr;q.ch=s.ch;q.pc=s.ch;
q.da+=((s.dr?1:0)-q.da)*M.min(1,dt*16);
q.rc*=M.exp(-dt*8);q.sf*=M.exp(-dt*3.2);q.sq*=M.exp(-dt*9);
q.cv+=(s.vx-q.cv)*M.min(1,dt*6);
q.on=o2?1:0;q.vy=-s.vz;q.fy=0;q.sh=0;
q.air+=((o2?0:1)-q.air)*M.min(1,dt*16);
if(o2)q.wk+=M.abs(s.vx)*dt*.085;
q.wa+=((o2?.3:1)-q.wa)*M.min(1,dt*8);
q.wp+=dt*(o2?1.8:5);
q.wd+=(-s.f-q.wd)*M.min(1,dt*1.5);
q.bl-=dt;if(q.bl<-.12)q.bl=rnd(2.2,5);
}
function olUpS(s,dt){
if(olG||s.rm){
const k=M.min(1,dt*14);
s.x+=(s.tx-s.x)*k;s.al+=(s.tal-s.al)*k;
s.hf-=dt;
}else olBot(s,dt);
s.y=GY-(s.al||0);
if(!(s.dead>0))duSw(s,evFx,dt);
}
function olDrawS(s){
const hh=M.min(1,(s.al||0)/200);
shd(s.x,30*(1-hh*.5),.42*(1-hh));shd(s.x,16*(1-hh*.5),.5*(1-hh));
duSw(s,()=>{g.save();drawP(0);drawP(1);g.restore()});
g.globalAlpha=1;
if(s.hf>0)gl('r',s.x,s.y-30,34,s.hf*2.4);
}
function olUpG(e,dt){
const o=olOp,q=e.q;
if(o.r){
for(let i=0;i<OLK.length;i++)q[OLK[i]]=o.r[i];
const k=M.min(1,dt*14);
e.x+=(o.r[OLX]-e.x)*k;e.al+=(o.a-e.al)*k;
e.f=o.r[OLF];e.vx=o.r[OLV];e.sh=q.sh;e.dr=q.dr;e.ch=q.ch;e.ws=o.w;e.mh=q.mh;
if(duS==1&&!e.dd){
e.hp=q.hp;
if(q.dead>0||q.hp<=0){e.hp=0;killE(e)}
}else if(duS!=1&&!e.dd)e.hp=q.hp;
}
e.y=GY-e.al;
duSw(e,evFx,dt);
}
