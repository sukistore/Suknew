const cmb={on:0,t:0,ts:1,g:0,rd:0,wx:0,d:1,cx:0,tx:0,fx:0,op:0,ph:-1,len:5.87,ah:175,or:0,b2:-9,T:null,B:null,gh:[],zg:[],sk:[],tr:[],q:[],pr:null,fu:null,sw:null,vis:[],dn:0,dc:0,sx:0,sy:0,ex:0,ey:0,hf:0,bf:0,bk:0};
const CMS=[0,.55,1.85,2.7,3.32,5.32,5.87];
const xcb=document.getElementById('x');
let lxg=-1,lxr=-1;
const cmE=t=>t<0?0:t>1?1:t*t*(3-2*t);
const cmO=t=>{t=t<0?0:t>1?1:t;return 1-(1-t)*(1-t)*(1-t)};
const cmI=t=>{t=t<0?0:t>1?1:t;return t*t};
const cmPp=(t,x,y,vx,vy,l,r,c,gv,dg)=>{if(P.length<420)P.push({t,x,y,vx,vy,l,m:l,r,c,gv:gv||0,dg:dg||0})};
const cmHp=id=>dxS.act==id?p.x:dxS.O[id].x;
const cmDm=()=>AE[p.vt].d*gDm()*gUd();
const cmSf=k=>{if(window.cmbSfx)window.cmbSfx(k)};

function cmbCh(v){
if(!SPC||inMenu||cmb.on)return;
cmb.g=M.min(1,cmb.g+v);
}
function cmbInit(){
cmb.g=.5;cmb.rd=0;
}
function cmbReset(){
cmb.on=0;cmb.t=0;cmb.ts=1;cmb.op=0;cmb.g=0;cmb.rd=0;cmb.wx=0;cmb.ph=-1;
cmb.gh.length=0;cmb.zg.length=0;cmb.sk.length=0;cmb.tr.length=0;cmb.q.length=0;
cmb.pr=null;cmb.fu=null;cmb.sw=null;
if(typeof dxT!='undefined'){dxT.CmEnd();dxB.CmEnd()}
}
function cmbPoll(dt){
if(!SPC||inMenu||p.dead||pvOn){cmb.wx=0;return}
if(cmb.g<1)cmb.g=M.min(1,cmb.g+dt/55);
else if(!cmb.rd){cmb.rd=1;ban('Ultimate Combo siap');ring(p.x,p.y-30,'255,210,110',60);cmSf('Rdy')}
const X=inp('x');
if(X&&!cmb.wx)cmbTry();
cmb.wx=X?1:0;
}
function cmbTry(){
if(!SPC||inMenu||p.dead||cmb.on||cmb.g<1)return;
const oi=dxS.act=='T'?'B':'T',o=dxS.O[oi];
if(p.ut>0||o.ut>0)return;
let ne=null,nd=1e9;
for(const e of E){if(e.dd)continue;const dx=M.abs(e.x-p.x);if(dx<nd&&dx<1100){nd=dx;ne=e}}
const d=ne?sgn(ne.x-p.x):p.f,D=ne?M.max(300,M.min(nd+90,VW*.5,560)):380;
cmb.on=1;cmb.t=0;cmb.ts=1;cmb.op=0;cmb.g=0;cmb.rd=0;cmb.d=d;cmb.ph=-1;
cmb.cx=p.x;cmb.tx=p.x+d*D;cmb.fx=(cmb.cx+cmb.tx)/2;
cmb.ah=M.max(110,M.min(175,GY-130));cmb.or=0;cmb.b2=-9;
cmb.T={x:cmHp('T'),y:GY,f:d,k:'ready',t:0};
cmb.B={x:cmHp('B'),y:GY,f:d,k:'ready',t:0};
cmb.gh.length=0;cmb.zg.length=0;cmb.sk.length=0;cmb.tr.length=0;cmb.q.length=0;cmb.vis.length=0;
cmb.pr=null;cmb.fu=null;cmb.sw=null;
for(const h of[p,o]){h.at=-1;h.sk1=-1;h.s3=-1;h.rl=-1}
p.dr=0;p.ch=0;p.pc=0;msg=null;
cmSf('Go');
}
function cmbEnd(){
cmb.on=0;cmb.ts=1;cmb.op=0;cmb.ph=-1;
cmb.gh.length=0;cmb.zg.length=0;cmb.sk.length=0;cmb.tr.length=0;cmb.q.length=0;
cmb.pr=null;cmb.fu=null;cmb.sw=null;
dxT.CmEnd();dxB.CmEnd();
p.cd=.3;p.inv=M.max(p.inv,.8);p.y=GY;p.vx=0;p.vy=0;p.on=1;p.f=cmb.d;
}
function cmbBtn(){
const v=cmb.on?M.max(0,1-cmb.t/cmb.len):cmb.g,r=!cmb.on&&cmb.g>=1?1:0;
if(v!==lxg){xcb.style.setProperty('--v',v.toFixed(3));lxg=v}
if(r!==lxr){xcb.classList.toggle('rd',!!r);lxr=r}
}

function cmMotes(x,y,dt,n){
if(M.random()<dt*n){const a=rnd(0,TAU),r=rnd(30,64);cmPp(1,x+M.cos(a)*r,y-28+M.sin(a)*r*1.2,-M.cos(a)*r*3.6,-M.sin(a)*r*3.6,.3,rnd(6,10),'a')}
}
function cmPick(skip){
let b=null,bd=1e9;
for(const e of E){
if(e.dd||(skip&&cmb.vis.includes(e))||e.x<cam+40||e.x>cam+VW-40)continue;
const dd=M.abs(e.x-cmb.T.x);
if(dd<bd){bd=dd;b=e}
}
return b;
}
function cmDashStart(){
const hT=cmb.T,d=cmb.d,i=cmb.dn;
let tg=cmPick(1);
if(!tg&&cmb.vis.length){cmb.vis.length=0;tg=cmPick(1)}
let ex;
if(tg){
cmb.vis.push(tg);
const dir=M.abs(tg.x-hT.x)<24?(i&1?-1:1):sgn(tg.x-hT.x);
ex=tg.x+dir*46;
}else ex=cmb.tx+d*[90,-110,30,-150,120][i%5];
ex=M.max(cam+36,M.min(cam+VW-36,ex));
cmb.sx=hT.x;cmb.sy=hT.y;cmb.ex=ex;cmb.ey=GY-(i==1||i==3?70:0);
hT.f=M.abs(ex-hT.x)<2?d:sgn(ex-hT.x);
cmb.hf=0;
cmb.sk.push({y:cmb.sy-30,l:.22,m:.22});
cmb.zg.push({x0:cmb.sx,y0:cmb.sy-30,x1:ex,y1:cmb.ey-30,l:.26,m:.26,s:rnd(0,99)});
cmSf('Dash');
}
function cmSlash(){
const sx=cmb.sx,ex=cmb.ex,dir=sgn(ex-sx),lo=M.min(sx,ex)-28,hi=M.max(sx,ex)+28,dm=58*cmDm();
let n=0;
for(const e of E){
if(e.dd||e.x<lo||e.x>hi)continue;
hurtE(e,dm,dir);n++;
arc(e.x-dir*6,e.y-34*e.sz,dir,52,'255,236,170');
cmPp(1,e.x,e.y-30*e.sz,0,0,.18,70,'w');
}
ring(ex,cmb.ey-30,'255,236,170',40);ring(ex,cmb.ey-30,'255,255,255',22);
for(let i=0;i<10;i++)cmPp(3,ex,cmb.ey-30,dir*rnd(60,320),rnd(-200,120),rnd(.15,.32),2,'255,226,140',400,2);
shake=M.max(shake,n?5:2.5);
}
function cmBolt(){
const al=E.filter(e=>!e.dd&&e.x>cam-20&&e.x<cam+VW+20);
const x=al.length&&M.random()<.75?al[M.floor(M.random()*al.length)].x+rnd(-20,20):cam+rnd(30,VW-30);
if(P.length<420)P.push({t:9,x,y:0,vx:0,vy:0,l:.34,m:.34,r:1,c:'255,236,170',gv:0,dg:0,sd:rnd(0,999),ox:rnd(-120,120)});
ring(x,GY-3,'255,236,170',90);ring(x,GY-3,'255,255,255',50);
cmPp(1,x,GY-4,0,0,.3,110,'p');dust(x,GY,3,90);
const dm=140*cmDm();
for(const e of E){if(!e.dd&&M.abs(e.x-x)<110)hurtE(e,dm,sgn(e.x-x))}
shake=M.max(shake,4);
cmSf('Bolt');
}
function cmBoom(x,s){
ring(x,GY-4,'255,236,170',150*s);ring(x,GY-4,'255,150,60',96*s);ring(x,GY-30,'255,255,255',70*s);
if(P.length<420)P.push({t:7,x,y:GY,vx:0,vy:0,l:.75,m:.75,r:96*s,c:'255,190,90',gv:0,dg:0,ln:GY+30});
cmPp(1,x,GY-30,0,0,.45,230*s,'f');cmPp(1,x,GY-30,0,0,.22,120*s,'w');
for(let i=0;i<14;i++)cmPp(3,x+rnd(-20,20),GY-6,rnd(-300,300)*s,rnd(-460,-90)*s,rnd(.35,.8),2,'255,200,100',800,1);
dust(x,GY,10,170*s);
const dm=170*cmDm();
for(const e of E){if(!e.dd&&M.abs(e.x-x)<130*s)hurtE(e,dm,sgn(e.x-x))}
shake=M.max(shake,11*s);
cmSf('Blast');
}
function cmImpact(){
const x=cmb.tx,d=cmb.d,dm=cmDm();
cmb.fu=null;
FXA.fl=.8;FXA.fc='255,244,210';shake=30;
ring(x,GY-4,'255,255,255',480);ring(x,GY-4,'255,206,110',360);ring(x,GY-4,'255,140,60',240);ring(x,GY-30,'255,255,255',200);
cmPp(1,x,GY-40,0,0,.9,420,'w');cmPp(1,x,GY-40,0,0,1.2,300,'f');cmPp(1,x,GY-30,0,0,1.5,520,'a');
if(P.length<420){
P.push({t:7,x,y:GY,vx:0,vy:0,l:1.5,m:1.5,r:300,c:'255,196,96',gv:0,dg:0,ln:GY+40});
P.push({t:7,x,y:GY,vx:0,vy:0,l:1.1,m:1.1,r:140,c:'255,250,230',gv:0,dg:0,ln:GY+40});
}
for(let i=0;i<18;i++)if(P.length<420)P.push({t:6,x,y:GY-24,vx:0,vy:0,l:.7,m:.7,r:7,c:'255,226,150',gv:0,dg:0,an:-PI*(i+.5)/18+rnd(-.08,.08),ln:rnd(180,520)});
for(let i=0;i<44;i++)cmPp(3,x+rnd(-40,40),GY-4,rnd(-460,460),rnd(-660,-120),rnd(.5,1.1),2.2,'255,190,100',900,1);
dust(x,GY,24,280);
cmb.sw={x,r:0,m:VW*1.05,hit:[]};
for(const e of E){if(!e.dd&&M.abs(e.x-x)<130)hurtE(e,300*dm,sgn(e.x-x))}
const t0=cmb.t;
for(let i=0;i<12;i++)cmb.q.push({t:t0+.14+i*.1+rnd(0,.04),f:cmBolt});
cmb.q.push({t:t0+.38,f:()=>cmBoom(x+d*150,.8)},{t:t0+.62,f:()=>cmBoom(x-d*170,.9)},{t:t0+.86,f:()=>cmBoom(x+d*300,1)});
cmb.T.us=0;cmb.B.us=0;
cmSf('Boom');
}
function cmEnter(ph){
const hT=cmb.T,hB=cmb.B;
if(ph==0){
FXA.fl=.3;FXA.fc='255,214,140';shake=M.max(shake,4);
for(const h of[hT,hB]){
ring(h.x,GY-4,'255,210,110',90);ring(h.x,h.y-30,'255,255,255',50);
if(P.length<420)P.push({t:7,x:h.x,y:GY,vx:0,vy:0,l:.6,m:.6,r:46,c:'255,210,110',gv:0,dg:0,ln:GY+30});
}
}else if(ph==1){
cmb.dn=0;cmb.dc=0;cmb.bf=0;cmb.bk=0;cmb.vis.length=0;
cmDashStart();
}else if(ph==2){
cmSf('Charge');
}else if(ph==3){
const b=dxB.Tip();
cmb.pr={sx:b[0],sy:b[1],x:b[0],y:b[1],a:-1.1};
ring(b[0],b[1],'255,226,122',40);ring(b[0],b[1],'255,255,255',22);
cmPp(1,b[0],b[1],0,0,.2,110,'w');cmPp(1,b[0],b[1],0,0,.3,80,'f');
for(let i=0;i<14;i++){const a=rnd(-1.8,-.4);cmPp(3,b[0],b[1],M.cos(a)*rnd(120,420),M.sin(a)*rnd(120,420),rnd(.15,.3),2,'255,226,122',200,2)}
hB.x-=cmb.d*9;shake=M.max(shake,5);
cmSf('Shot');
}else if(ph==4){
cmImpact();
}
}
function cmMerge(){
const b=dxT.Tip(),d=cmb.d;
cmb.pr=null;
cmb.fu={sx:b[0],sy:b[1],x:b[0],y:b[1],a:M.atan2(GY-6-b[1],cmb.tx-b[0])};
FXA.fl=.55;FXA.fc='255,244,210';shake=M.max(shake,8);
ring(b[0],b[1],'255,255,255',90);ring(b[0],b[1],'255,200,90',60);ring(b[0],b[1],'255,140,60',34);
cmPp(1,b[0],b[1],0,0,.4,260,'w');cmPp(1,b[0],b[1],0,0,.5,180,'a');
for(let i=0;i<22;i++){const a=rnd(0,TAU),v=rnd(120,460);cmPp(3,b[0],b[1],M.cos(a)*v,M.sin(a)*v,rnd(.2,.4),2,'255,226,140',300,2)}
cmb.b2=cmb.t;
cmSf('Fuse');
}
