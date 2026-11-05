let duG=0,duOn=0,pvOn=0,duR=1,duP=0,duB=0,duS=0,duT=0,duF=0,duVt=4,duCf=null,pvO=null,pvD='';
const DUHP=700,DUDM=.06,DUK='pemanah_duel_v1',DUMX=3;
const DUC={dg:.9993,r0:0,r1:.015,er:.012,eb:.1,em:.09,c0:.12,c1:.3,ct:.7,sp:300,fl:.55,sh:1,hp:DUHP,dm:DUDM,qc:0,uc:0};
function duDay(){const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()}
function duLeft(){
try{const o=JSON.parse(localStorage.getItem(DUK)||'null');return o&&o.d==duDay()?M.max(0,DUMX-(o.n|0)):DUMX}catch(x){return DUMX}
}
function duUse(){
try{const o=JSON.parse(localStorage.getItem(DUK)||'null'),d=duDay();localStorage.setItem(DUK,JSON.stringify({d,n:o&&o.d==d?(o.n|0)+1:1}))}catch(x){}
}
function duQ(vt){
const q=Object.assign({},p);
q.vt=vt;q.hp=1;q.mh=1;q.dead=0;q.go=0;q.ga=0;q.gf=0;q.dr=0;q.ch=0;q.pc=0;q.da=0;q.sh=0;q.sf=0;q.rc=0;q.sq=0;q.air=0;q.fy=0;q.on=1;q.vx=0;q.vy=0;q.cv=0;q.wk=0;q.st=0;q.hu=0;q.inv=0;q.ut=0;q.us=0;q.uc=0;q.dn=0;q.dw=0;q.dc=0;q.dz=0;q.dsp=0;q.dht=0;q.dl=-1;q.wa=.3;q.wp=0;q.wd=-1;q.bl=3;q.idle=0;q.wf=0;
return q;
}
function duMk(sd){
const cf=duCf,h=cf.hp*pdm();
E.push({t:0,bot:1,cf,ws:pvOn?(duVt==4?1:duVt==5?2:0):1,x:p.x+sd*M.min(520,VW*.42),y:GY,vx:0,f:-sd,hp:h,mh:h,sp:cf.sp,dm:0,rg:0,cd:0,wu:0,mw:1,sw:0,ph:0,hf:0,dd:0,sz:1,boss:0,id:0,fx:0,stp:0,al:0,vz:0,fy:0,dr:0,ch:0,tg:1,sh:0,shT:0,cw:.6,jb:0,mt:0,ht:2,ft:0,dir:1,ta:0,pz:0,rj:rnd(2,5),lk:0,lm:1,qk:cf.qc*rnd(.4,.8),uct:0,ut:0,ua:0,fm:pvOn?pvFm():1,fq:rnd(1.8,4),cm:0,pd:0,uch:pvOn?pvUc:0,lh:h,lp:p.hp,ud:0,uw:0,hbm:0,hbt:0,hbc:rnd(2,5),hjt:0,wg:1,wgt:0,lw:0,mo:pvOn?pvMo:0,ab:pvOn?pvAb:0,q:duQ(duVt)});
}
function duNew(){
E.length=0;Pr.length=0;A.length=0;S.length=0;
const sd=duR%2?1:-1;
p.x=0;p.y=GY;p.vx=0;p.vy=0;p.f=sd;p.on=1;p.fy=0;p.air=0;p.dr=0;p.ch=0;p.da=0;p.sh=0;p.cd=0;p.dead=0;p.inv=0;p.hp=p.mh;p.rg=0;p.hu=0;
cam=p.x-VW*.5+50;
duMk(sd);
duS=0;duT=3;duG=0;
ban('Babak '+duR);
}
function duGo(){
duCf=DUC;duVt=4;pvOn=0;pvD='';
mmOn=1;duOn=1;duR=1;duP=0;duB=0;duF=0;WV.n=1;WV.q=0;WV.bs=0;WV.bt=0;spT=0;
skSync();
duNew();
}
function duKo(w){
if(duS!=1)return;
duS=2;
if(pvOn){const bb=E.find(o=>o.bot);if(bb)pvMd(w,bb)}
if(w)duP++;else duB++;
const fin=duP>=2||duB>=2;
duF=fin?(w?1:2):0;
duT=fin&&w?4.2:2.8;
let nw=0;
if(fin){
if(pvOn)pvRes(w);
else if(w&&!olD&&!sv.wg.includes(1)){sv.wg.push(1);save();nw=1}
}
ban(nw?'Kamu menang  -  Sayap Emas didapat!':fin?(w?'Kamu menang  '+duP+' - '+duB:(pvOn||olD?'Kamu kalah  ':'Bot menang  ')+duB+' - '+duP):(w?'Babak '+duR+' untukmu':'Babak '+duR+(pvOn||olD?' untuk lawan':' untuk bot')));
}
function duL1(){return pvOn||olD?'Kalah  '+duB+' - '+duP:'Bot menang  '+duB+' - '+duP}
function duL2(){return pvOn?pvD:'1 vs 1'}
function duSp(dt){
if(inMenu)return;
if(duS==0){duT-=dt;if(duT<=0){duS=1;duG=.8}}
else if(duS==1){if(p.dead)duKo(0)}
else{
duT-=dt;
if(duT<=0){if(pvOn&&duF)pvEnd();else if(duF==1)menuGo();else if(!duF){duR++;duNew()}}
}
}
function duSw(e,fn,a){
const q=e.q;
q.x=e.x;q.y=e.y;q.f=e.f;q.vx=e.vx;q.dead=e.dd>0?e.dd:0;
const bk=Object.assign({},p),s0=SPC,w0=sv.ws;
Object.assign(p,q);SPC=0;sv.ws=e.ws;
try{fn(a)}finally{Object.assign(q,p);Object.assign(p,bk);SPC=s0;sv.ws=w0}
}
function duAim(ox,oy,d,s){
let a=0;
for(let i=0;i<4;i++){
const t0=M.abs(p.x-ox)/(s*M.max(.2,M.cos(a))),ex=(p.x+p.vx*t0*.9-ox)*d,ey=p.y-30+p.vy*t0*.5-oy;
a=M.atan2(ey-215*t0*t0,M.max(30,ex));
}
return M.max(-.7,M.min(.6,a));
}
const duEm=v=>pvOn?1+.15*v:1;
function duShoot(ox,oy,d,c,dm,v,cf,xe,bi){
const s=480+c*760,a=duAim(ox,oy,d,s)+(M.random()<cf.eb?rnd(-cf.em,cf.em):rnd(-cf.er,cf.er))+(xe?rnd(-xe,xe):0)+(bi||0);
Pr.push({t:'k',x:ox,y:oy,vx:d*M.cos(a)*s,vy:M.sin(a)*s,tr:[],l:0,c,dm:dm*duEm(v),v});
}
function duFire(e){
const c=M.max(.18,e.ch),d=e.f,ox=e.x+d*26,oy=e.y-45,cf=e.cf,v=e.q.vt;
const db=pvOn?(pvO.db==null?(pvO.db=M.random()<.5?rnd(.2,.6):0):pvO.db):0;
for(let n=0,m=M.random()<db?2:1;n<m;n++)duShoot(ox,oy,d,c,p.mh*(.015+(cf.dm-.015)*c),v,cf,cf.hu?(e.cm>0?.02+.07*(1-e.fm):0)+(1-e.fm)*(.03+cf.er*2):0,e.ab*(1+(1-e.fm))+(n?(M.random()<.5?-.05:.05):0));
e.dr=0;e.ch=0;e.cw=M.max(pvOn?.8:0,e.sb>0?(e.sb--,rnd(.06,.15)):rnd(cf.c0,cf.c1)*(1-.2*e.mo));e.q.rc=1;
ring(ox,oy,AE[v].c,22+c*22);ring(ox,oy,'255,255,255',12+c*14);
sp(1,ox,oy,0,0,.2,50,AE[v].k);
for(let i=0;i<12+v*2;i++){const b=rnd(-.6,.6);sp(3,ox,oy,d*M.cos(b)*rnd(120,420)*c+d*60,M.sin(b)*rnd(120,340)*c,rnd(.2,.45),2.2,AE[v].c,500,2)}
if(v>=4)ring(ox,oy,AE[v].c,40+c*30);
}
function duQk(e){
const d=e.f,ox=e.x+d*26,oy=e.y-45,v=e.q.vt,cf=e.cf,a=duAim(ox,oy,d,1000),dm=p.mh*.014*(cf.dm/.06)*duEm(v);
for(let i=-2;i<=2;i++){const b=a+i*.1;Pr.push({t:'k',x:ox,y:oy,vx:d*M.cos(b)*1000,vy:M.sin(b)*1000,tr:[],l:0,c:.85,dm,v})}
e.qk=cf.qc*rnd(.9,1.2);e.dr=0;e.ch=0;e.cw=.3;e.q.rc=1;shake=M.max(shake,3);
ring(ox,oy,AE[v].c,34);
sp(1,ox,oy,0,0,.25,64,AE[v].k);
}
function duUl(e){
const v=e.q.vt;
e.ut=2.8;e.ua=0;e.uct=0;e.dr=0;e.ch=0;e.q.rc=1;shake=10;
ring(e.x,e.y-30,AE[v].c,90);ring(e.x,e.y-30,AE[v].c,50);
sp(1,e.x,e.y-30,0,0,.6,170,AE[v].k);
}
