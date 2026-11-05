function gearPop(){
if(GQ.l<=0)return;
const t=GQ.t,mu=t==6?12+sv.lk:t==7?10+sv.al:GRM[t],k=M.max(0,M.min(1,GQ.l*2,(GQ.m-GQ.l)*4)),pp=1+.3*M.max(0,1-(GQ.m-GQ.l)*3);
g.save();g.textAlign='center';
for(let i=0;i<2;i++){
const cx=VW/2+(i?84:-84),cy=142,sz=56*pp;
gl(GRK[t],cx,cy,64,k*.5);
g.globalAlpha=k;
g.fillStyle='rgba(8,10,16,.6)';g.fillRect(cx-36,cy-36,72,72);
g.strokeStyle='rgba(232,223,204,.35)';g.lineWidth=1;g.strokeRect(cx-35.5,cy-35.5,71,71);
g.drawImage(GRC[i][t],cx-sz/2,cy-sz/2,sz,sz);
g.font='600 12px system-ui,sans-serif';g.fillStyle='#e8dfcc';g.fillText(GRN[i][t],cx,cy+54);
g.font='11px system-ui,sans-serif';g.fillStyle='rgba(232,223,204,.75)';g.fillText((i?'Damage x':'HP x')+mu,cx,cy+69);
}
g.restore();
}

function aim(d,s,x0,y0,def){
let b=null,bd=1e9;
for(const e of E){
if(e.dd)continue;
const dx=(e.x-x0)*d;
if(dx<30||dx>760||dx>=bd)continue;
bd=dx;b=e;
}
if(!b)return def;
const ex=((b.x+b.vx*bd/s*.8)-x0)*d,ey=b.y-30*b.sz-y0;
if(ex<30)return def;
let a=M.atan2(ey,ex);
for(let i=0;i<3;i++){const t=ex/(s*M.max(.2,M.cos(a)));a=M.atan2(ey-215*t*t,ex)}
return M.max(-.62,M.min(.5,a));
}

function fire(){
const c=M.max(.18,p.ch),s=(480+c*760)*gUs(),d=p.f,a=aim(d,s,p.x+d*26,p.y-45,-.07-(1-c)*.04),ev=evl(),e=AE[ev];
for(let n=0,m=M.random()<gUm()?2:1;n<m;n++){const b=n?a+(M.random()<.5?-.05:.05):a;A.push({x:p.x+d*26,y:p.y-45,vx:d*M.cos(b)*s,vy:M.sin(b)*s,tr:[],st:0,l:0,c,an:d>0?b:PI-b,dm:(16+c*44)*e.d*gDm()*gUd(),pr:(c>.85?2:0)+e.pr,hit:[],ev})}
p.dr=0;p.ch=0;p.pc=0;p.cd=pvOn?.8:.2;p.rc=1;shake=M.max(shake,1+c*3);
for(let i=0;i<8;i++){const b=rnd(-.5,.5);sp(3,p.x+d*28,p.y-45,d*M.cos(b)*rnd(120,360)*c+d*60,M.sin(b)*rnd(120,300)*c,rnd(.2,.4),2,e.c,500,2)}
ring(p.x+d*30,p.y-45,e.c,22+c*22);
sp(1,p.x+d*30,p.y-45,0,0,.2,50,e.k);
if(ev==4)sFx(p.x+d*28,p.y-45,d,a,c,1);
if(ev==5)nFx(p.x+d*28,p.y-45,d,a,c,1);
}

function skill(){
if(SPC){spSkill();return}
if(p.vt==6){alSkill();return}
const d=p.f,ev=evl(),e=AE[ev],ks=1000*gUs(),ba=aim(d,ks,p.x+d*26,p.y-45,-.09);
p.kc=SKC;p.dr=0;p.ch=0;p.pc=0;p.cd=.25;p.rc=1;shake=M.max(shake,3);
for(let i=-2;i<=2;i++){
const a=ba+i*.1;
A.push({x:p.x+d*26,y:p.y-45,vx:d*M.cos(a)*ks,vy:M.sin(a)*ks,tr:[],st:0,l:0,c:.85,an:d>0?a:PI-a,dm:30*e.d*gDm()*gUd(),pr:1+e.pr,hit:[],ev});
}
for(let i=0;i<10;i++){const b=rnd(-.6,.6);sp(3,p.x+d*28,p.y-45,d*M.cos(b)*rnd(160,420)+d*60,M.sin(b)*rnd(160,340),rnd(.2,.4),2,e.c,500,2)}
ring(p.x+d*30,p.y-45,e.c,34);
sp(1,p.x+d*30,p.y-45,0,0,.25,64,e.k);
for(let i=-2;i<=2;i++){const b=ba+i*.1;P.push({t:6,x:p.x+d*26,y:p.y-45,vx:0,vy:0,l:.3,m:.3,r:7,c:e.c,gv:0,dg:0,an:d>0?b:PI-b,ln:300})}
ring(p.x+d*30,p.y-45,e.c,60);
FXA.sa=.5;FXA.fl=.16;FXA.fc=e.c;
if(ev==4)sFx(p.x+d*28,p.y-45,d,ba,1,2);
if(ev==5)nFx(p.x+d*28,p.y-45,d,ba,1,2);
}
function ult(){
if(SPC){spUlt();return}
if(p.vt==6){alUlt();return}
const e=AE[evl()];
p.uc=0;p.ut=UD;p.us=0;p.dr=0;p.ch=0;p.pc=0;p.cd=.4;p.rc=1;shake=10;
ring(p.x,p.y-30,e.c,90);ring(p.x,p.y-30,e.c,50);
sp(1,p.x,p.y-30,0,0,.6,170,e.k);
for(let i=0;i<20;i++){const b=rnd(0,TAU),v=rnd(120,320);sp(3,p.x,p.y-30,M.cos(b)*v,M.sin(b)*v-120,rnd(.4,.8),2,e.c,500,2)}
ban(SPC?'Ultimate: Hujan Tombak':'Ultimate: Hujan Panah');
P.push({t:7,x:p.x,y:GY,vx:0,vy:0,l:.8,m:.8,r:80,c:e.c,gv:0,dg:0,ln:GY+20});
for(let i=0;i<14;i++){const b=i/14*TAU;P.push({t:6,x:p.x,y:p.y-30,vx:0,vy:0,l:.55,m:.55,r:6,c:e.c,gv:0,dg:0,an:b,ln:rnd(140,260)})}
ring(p.x,GY-4,e.c,220);ring(p.x,GY-4,e.c,150);
FXA.fl=.5;FXA.fc=e.c;
if(!SPC&&evl()==4)uFx();
if(!SPC&&evl()==5)nUf();
}
function ulUp(dt){
if(SPC){p.ut-=dt;spRain(dt);return}
if(p.vt==6){p.ut-=dt;return}
p.ut-=dt;p.us-=dt;
while(p.us<=0){
p.us+=.03;
const ev=evl();
A.push({x:rnd(cam-30,cam+VW+30),y:rnd(-160,-40),vx:rnd(-40,40),vy:rnd(650,900),tr:[],st:0,l:0,c:.75,an:PI/2,dm:46*AE[ev].d*gDm()*gUd(),pr:AE[ev].pr,hit:[],ev,ul:1,sp:SPC?1:0});
if(!SPC&&ev>=4&&M.random()<.55)A.push({x:rnd(cam-30,cam+VW+30),y:rnd(-220,-40),vx:rnd(-60,60),vy:rnd(700,980),tr:[],st:0,l:0,c:.8,an:PI/2,dm:0,pr:0,hit:[],ev,ul:1,vf:1});
}
if(!SPC&&evl()==4)uSt(dt);
if(!SPC&&evl()==5)nUs(dt);
if(M.random()<.7){const e=AE[evl()];sp(3,p.x+rnd(-70,70),GY-2,rnd(-14,14),rnd(-300,-140),rnd(.4,.8),1.8,e.c,0,1)}
}

const gwL=()=>M.max(700,VW*.66);
function gwF(){
const tf=p.go-GCH;
return[gwL()*(1-M.pow(1-M.min(1,tf/.22),2)),M.min(1,tf/.12)*M.max(0,M.min(1,(GFR-tf)/.3))];
}
function gw(){
p.go=.001;p.gf=0;p.gx=0;p.gd=p.f;p.dr=0;p.ch=0;p.pc=0;p.cd=.3;
ring(p.x+p.f*28,p.y-47,'150,80,255',30);
ban('Gelombang Elektrik');
}
function gwHit(){
const d=p.gd,ox=p.x+d*28,oy=p.y-47,f=gwF(),L=f[0],R=30*f[1],dm=16*AE[evl()].d*gDm()*gUd();
if(R<4)return;
for(let i=0;i<4;i++){const x=ox+d*rnd(0,L);sp(3,x,oy+rnd(-R,R),rnd(-70,70),rnd(-200,-50),rnd(.3,.6),1.8,'200,150,255',500,2)}
for(const e of E){
if(e.dd)continue;
const dx=(e.x-ox)*d;
if(dx<-12||dx>L+14*e.sz)continue;
if(oy+R<e.y-64*e.sz||oy-R>e.y+2)continue;
hurtE(e,dm,d);
for(let k=0;k<3;k++)sp(3,e.x,e.y-rnd(10,55)*e.sz,rnd(-220,220),rnd(-220,60),rnd(.15,.3),1.6,'210,160,255',400,2);
sp(1,e.x,e.y-30*e.sz,0,0,.18,40+e.sz*8,'z');
}
}
function gwUp(dt){
const d=p.gd,ox=p.x+d*28,oy=p.y-47;
p.go+=dt;
if(p.go<GCH){
const k=p.go/GCH;
if(M.random()<.8){const a=rnd(0,TAU),r=rnd(26,50);sp(1,ox+M.cos(a)*r,oy+M.sin(a)*r,-M.cos(a)*r*3.6,-M.sin(a)*r*3.6,.3,rnd(6,10),'z')}
if(M.random()<.5){const a=rnd(0,TAU);sp(5,p.x+M.cos(a)*30,p.y-30+M.sin(a)*40,0,rnd(-40,-10),rnd(.3,.6),1.6,'200,150,255',0,1)}
shake=M.max(shake,k*1.6);
}else{
if(!p.gf){
p.gf=1;p.gx=0;p.rc=1;shake=14;FXA.fl=.45;FXA.fc='150,80,255';
ring(ox,oy,'150,80,255',60);ring(ox,oy,'255,255,255',34);
sp(1,ox,oy,0,0,.5,140,'z');
for(let i=0;i<16;i++){const b=rnd(-.9,.9);sp(3,ox,oy,d*M.cos(b)*rnd(180,520),M.sin(b)*rnd(180,520),rnd(.25,.5),2,'200,150,255',300,2)}
}
shake=M.max(shake,5);
p.gx-=dt;
if(p.gx<=0){p.gx+=.1;gwHit()}
}
if(p.go>=GCH+GFR){p.go=0;p.gf=0;p.gc=GCD}
}

