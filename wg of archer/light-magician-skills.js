function alSkill(){
if(alS.on||alS.o2||alS.u)return;
alS.on=1;alS.t=0;alS.rl=0;
p.kc=SKC;p.dr=0;p.ch=0;p.pc=0;p.cd=1.2;
ring(p.x,GY-4,alS.rg,70);ring(p.x,GY-4,alS.rg,44);
ban('Skill: Bola Cahaya Merah');alBurst(p.x,p.y-30,16,260);
}
function alFire(){
const f=p.f,x0=p.x+f*52,y0=p.y-60;
alS.pj.push({x:x0,y:y0,vx:f*1500,l:0,hit:[],f,dm:300*gDm()*gUd()});
shake=M.max(shake,11);FXA.fl=.35;FXA.fc=alS.rg;
ring(x0,y0,alS.rg,100);ring(x0,y0,alS.rg,60);sp(1,x0,y0,0,0,.3,110,'r');
for(let i=0;i<26;i++){const a=rnd(-.7,.7),v=rnd(160,520);sp(3,x0,y0,f*M.cos(a)*v,M.sin(a)*v,rnd(.25,.5),rnd(1.6,2.6),alS.rg,200,2)}
p.vx-=f*170;alBurst(x0,y0,12,380);
}
function alUpd(dt){
if(inMenu||p.vt!=6||SPC){alS.on=0;alS.o2=0;alS.u=0;alS.cs=0;alS.pj.length=0;alS.dl.length=0;alS.rn.length=0;alS.bl.length=0;alBt.length=0;return}
if(p.dead){alS.on=0;alS.o2=0;alS.u=0}
if(dt<=0)return;
alS.cs=M.max(0,alS.cs-dt*4);alS.c2=M.max(0,alS.c2-dt);
if(alS.on){
alS.t+=dt;p.dr=0;p.ch=0;p.cd=M.max(p.cd,.2);p.vx*=M.exp(-dt*9);
if(alS.t<.45){
const u=alS.t/.45;
for(let k=0;k<2;k++){const a=rnd(0,TAU),r=rnd(24,50)*(1-u*.4);sp(5,p.x+M.cos(a)*r,GY-rnd(0,6),M.cos(a)*-rnd(10,30),-rnd(70,150),rnd(.4,.7),rnd(1.4,2.4),alS.rg,0,0)}
}
if(!alS.rl&&alS.t>=.45){alS.rl=1;alFire()}
if(alS.t>=1)alS.on=0;
}
if(alS.o2){
alS.t2+=dt;p.dr=0;p.ch=0;p.cd=M.max(p.cd,.2);p.vx*=M.exp(-dt*9);
if(alS.t2<.4){
const u=alS.t2/.4;
for(let k=0;k<2;k++){const a=rnd(0,TAU),r=rnd(26,56)*(1-u*.4);sp(5,p.x+M.cos(a)*r,GY-rnd(0,6),M.cos(a)*-rnd(10,30),-rnd(80,170),rnd(.4,.7),rnd(1.4,2.4),alS.rg,0,0)}
}else if(alS.n2<6){
alS.sp2-=dt;
if(alS.sp2<=0){
alS.sp2=.13;
const x=p.x+p.f*(120+alS.n2*80);
alS.rn.push({x,y:p.y-380,vy:500,dm:200*gDm()*gUd()});
ring(x,p.y-380,alS.rg,40);
alS.n2++;
}
}
if(alS.t2>=1.85)alS.o2=0;
}
for(let i=alS.rn.length-1;i>=0;i--){
const q=alS.rn[i];q.vy+=900*dt;q.y+=q.vy*dt;
sp(3,q.x+rnd(-6,6),q.y-rnd(0,50),rnd(-30,30),-rnd(40,120),rnd(.25,.5),rnd(1.5,3),alS.rg,0,2);
sp(1,q.x,q.y,0,0,.16,50,'r');
if(q.y>=GY-14){
ring(q.x,GY-6,alS.rg,96);ring(q.x,GY-6,alS.rg,60);sp(1,q.x,GY-20,0,0,.3,110,'r');shake=M.max(shake,5);
for(let k=0;k<14;k++){const a=rnd(PI,TAU),v=rnd(120,380);sp(3,q.x,GY-10,M.cos(a)*v,M.sin(a)*v,rnd(.25,.5),rnd(1.6,2.6),alS.rg,300,2)}
for(const e of E){if(e.dd)continue;if(M.abs(e.x-q.x)<70+14*e.sz)hurtE(e,q.dm,e.x<q.x?-1:1)}
alS.rn.splice(i,1);
}
}
if(alS.u){
alS.tu+=dt;p.dr=0;p.ch=0;p.cd=M.max(p.cd,.2);p.vx*=M.exp(-dt*9);
alS.fl2=M.max(0,alS.fl2-dt*5);
const t=alS.tu;
shake=M.max(shake,t<.8?1+t*4:t<3.8?4.5+M.sin(t*38)*1.5:M.max(0,(4.4-t)*3));
if(t<.8){for(let k=0;k<3;k++){const a=rnd(0,TAU),r=rnd(30,80)*(1-t*.5);sp(5,p.x+M.cos(a)*r,GY-rnd(0,8),M.cos(a)*-rnd(10,40),-rnd(90,200),rnd(.5,.9),rnd(1.4,2.6),alS.rg,0,0)}}
if(t>.3)sp(5,p.x+p.f*28+rnd(-8,8),p.y-132+rnd(-8,8),rnd(-40,40),rnd(-90,-20),rnd(.3,.6),rnd(1.4,2.4),alS.rg,0,0);
if(t>=.8&&t<3.8){
alS.ns-=dt;
while(alS.ns<=0){alS.ns+=.07;alStrike(0)}
alS.nm-=dt;
if(alS.nm<=0){alS.nm=.5;alStrike(1)}
}
if(t>=4.4)alS.u=0;
}
for(let i=alS.bl.length-1;i>=0;i--){const b=alS.bl[i];b.t-=dt;if(b.t<=0)alS.bl.splice(i,1)}
for(let i=alS.pj.length-1;i>=0;i--){
const q=alS.pj[i];q.l+=dt;q.x+=q.vx*dt;
sp(3,q.x-q.f*rnd(0,90),q.y+rnd(-20,20),-q.f*rnd(20,120),rnd(-60,60),rnd(.25,.5),rnd(1.5,3),alS.rg,0,2);
sp(1,q.x,q.y,0,0,.16,56,'r');
for(const e of E){
if(e.dd||q.hit.includes(e))continue;
if(M.abs(q.x-e.x)<30+14*e.sz&&q.y+26>e.y-66*e.sz&&q.y-26<e.y+4){
q.hit.push(e);hurtE(e,q.dm,q.f);alS.dl.push({e,t:.32,dm:q.dm*.5,f:q.f});
ring(e.x,e.y-30*e.sz,alS.rg,48);shake=M.max(shake,5);
for(let k=0;k<8;k++)sp(3,e.x,e.y-30*e.sz,rnd(-220,220),rnd(-220,120),rnd(.2,.45),rnd(1.5,2.6),alS.rg,300,2);
}
}
if(q.l>.95||M.abs(q.x-p.x)>2200){ring(q.x,q.y,alS.rg,70);alS.pj.splice(i,1)}
}
for(let i=alS.dl.length-1;i>=0;i--){
const d=alS.dl[i];d.t-=dt;
if(d.t<=0){
if(!d.e.dd){hurtE(d.e,d.dm,d.f);const x=d.e.x,y=d.e.y-30*d.e.sz;ring(x,y,alS.rg,64);sp(1,x,y,0,0,.25,80,'r');shake=M.max(shake,3);for(let k=0;k<12;k++){const a=rnd(0,TAU),v=rnd(80,300);sp(3,x,y,M.cos(a)*v,M.sin(a)*v,rnd(.2,.45),rnd(1.5,2.6),alS.rg,200,2)}}
alS.dl.splice(i,1);
}
}
alS.fx-=dt;
if(alS.fx<=0&&!p.dead){
const sk=alS.on||alS.o2||alS.u;alS.fx=sk?.05:.08;
if(alBt.length<(sk?48:30)){const l=rnd(.9,1.5);alBt.push({x:p.x+rnd(-14,14),y:p.y-rnd(10,52),vx:rnd(-20,20)+p.wd*p.f*8,vy:rnd(-42,-14),l,m:l,s:rnd(.5,.85),fl:rnd(0,TAU),fs:rnd(26,34),w:rnd(0,TAU)})}
if(M.abs(p.vx)>45&&alBt.length<(sk?48:30)){const l=rnd(.6,1);alBt.push({x:p.x-p.f*rnd(6,14),y:p.y-rnd(8,40),vx:-p.f*rnd(40,80),vy:rnd(-20,4),l,m:l,s:rnd(.5,.8),fl:rnd(0,TAU),fs:rnd(28,36),w:rnd(0,TAU)})}
}
for(let i=alBt.length-1;i>=0;i--){const b=alBt[i];b.l-=dt;if(b.l<=0){alBt.splice(i,1);continue}b.x+=(b.vx+M.sin(T*5+b.w)*14)*dt;b.y+=(b.vy+M.sin(T*7+b.w)*18)*dt;b.fl+=b.fs*dt}
}
function alShot(){
const d=p.f,ox=p.x+d*54,oy=p.y-56,s=1000*gUs(),e=AE[6];
for(let n=0,m=M.random()<gUm()?2:1;n<m;n++){const b=n?(M.random()<.5?-.06:.06):0;
A.push({x:ox,y:oy,vx:d*M.cos(b)*s,vy:M.sin(b)*s,tr:[],st:0,l:0,c:.5,an:d>0?b:PI-b,dm:50*gDm()*gUd(),pr:e.pr,hit:[],ev:6,ob:1})}
p.cd=.5;p.rc=1;alS.cs=1;shake=M.max(shake,1.2);
ring(ox,oy,e.c,38);ring(ox,oy,e.s,22);sp(1,ox,oy,0,0,.24,100,e.k);
for(let i=0;i<12;i++){const b=rnd(-.6,.6);sp(3,ox,oy,d*M.cos(b)*rnd(120,320)+d*50,M.sin(b)*rnd(120,260),rnd(.2,.4),2,e.c,500,2)}
}
function alSk2(){
if(alS.c2>0||alS.on||alS.o2||alS.u||p.dead)return;
alS.o2=1;alS.t2=0;alS.c2=AS2;alS.sp2=0;alS.n2=0;
p.dr=0;p.ch=0;p.pc=0;p.cd=1.6;
ring(p.x,GY-4,alS.rg,80);ring(p.x,GY-4,alS.rg,50);
ban('Skill: Hujan Bola Cahaya');alBurst(p.x,p.y-30,18,300);
}
function alUlt(){
if(alS.on||alS.o2||alS.u||p.dead)return;
alS.u=1;alS.tu=0;alS.ns=0;alS.nm=.6;alS.fl2=0;alS.bl.length=0;alS.cl.length=0;
for(let i=0;i<38;i++)alS.cl.push({x:rnd(-80,VW+80),y:rnd(8,104),r:rnd(70,150),d:rnd(0,TAU),s:rnd(.4,1)});
p.uc=0;p.ut=UD;p.dr=0;p.ch=0;p.pc=0;p.cd=.5;p.rc=1;shake=10;
ring(p.x,GY-4,alS.rg,240);ring(p.x,GY-4,alS.rg,160);ring(p.x,GY-4,alS.rg,90);
FXA.fl=.35;FXA.fc=alS.rg;
ban('Ultimate: Badai Petir Cahaya');alBurst(p.x,p.y-30,30,420);
}
