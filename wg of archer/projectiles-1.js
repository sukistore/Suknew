function upA(dt){
for(let i=A.length-1;i>=0;i--){
const a=A[i];
if(!a.st){
a.tr.push({x:a.x,y:a.y});if(a.tr.length>16)a.tr.shift();
a.vy+=(a.sp==2||a.ob?0:430*dt);a.x+=a.vx*dt;a.y+=a.vy*dt;a.an=M.atan2(a.vy,a.vx);
if(hitA(a)){A.splice(i,1);continue}
if(a.ob){a.l+=dt;if(a.l>.8){ring(a.x,a.y,AE[a.ev].c,26);A.splice(i,1);continue}alTr(a)}
if(a.sp==2){a.lf-=dt;if(a.lf<=0){A.splice(i,1);continue}}
if(M.random()<.6)sp(1,a.x-a.vx*.01,a.y-a.vy*.01,rnd(-8,8),rnd(-8,8),.3,8+a.c*6,AE[a.ev].k);
if(a.c>.5&&M.random()<.5)sp(5,a.x-a.vx*.02,a.y-a.vy*.02,rnd(-24,24),rnd(-24,24),rnd(.3,.5),1.5,AE[a.ev].s,60,2);
if(a.ev==4&&!a.sp)sTrP(a,dt);
if(a.ev==5&&!a.sp)nTrP(a,dt);
if(a.y>=GY){
a.y=GY+rnd(1,4);a.st=1;a.l=a.ul?3:0;dust(a.x,GY,a.ul?2:5,70);ring(a.x,GY,AE[a.ev].c,16);
for(let k=0;k<(a.ul?3:6);k++)sp(3,a.x,GY-1,rnd(-90,90),rnd(-200,-60),rnd(.25,.5),1.8,AE[a.ev].c,600,1.5);
shake=M.max(shake,a.ul?.4:.8);
if(a.ev==4&&!a.sp)sLand(a);
if(a.ev==5&&!a.sp)nLand(a);
}else if(M.abs(a.x-p.x)>3000)A.splice(i,1);
}else{
a.l+=dt;if(a.tr.length)a.tr.shift();
if(a.l>4.2)A.splice(i,1);
}
}
}
function sFx(x,y,d,a,c,m){
const an=d>0?a:PI-a,u=.6+c*.6+(m>1?.3:0);
if(P.length<250){
for(let i=0;i<7;i++)P.push({t:6,x,y,vx:0,vy:0,l:.34,m:.34,r:5+c*3,c:'255,236,170',gv:0,dg:0,an:an+(i-3)*.13,ln:rnd(110,230)*u});
for(let i=0;i<8;i++)P.push({t:6,x,y,vx:0,vy:0,l:.26,m:.26,r:3.5,c:'255,246,205',gv:0,dg:0,an:rnd(0,TAU),ln:rnd(26,70)*u});
for(let i=0;i<3+M.floor(c*3);i++){const l=rnd(.7,1.3);P.push({t:8,x,y,vx:d*rnd(60,220),vy:rnd(-120,40),l,m:l,r:rnd(4,6.5),c:'255,238,180',gv:40,dg:1.4,an:rnd(0,TAU),sp:rnd(-8,8)})}
}
ring(x,y,'255,236,170',(44+c*44)*u);ring(x,y,'255,255,255',(26+c*26)*u);
sp(1,x,y,0,0,.3,(96+c*70)*u,'p');sp(1,x,y,0,0,.18,50+c*30,'w');
shake=M.max(shake,2+c*3);p.wf=1;
}
function sTrP(a,dt){
if(a.ul&&M.random()>.3)return;
const hp=a.hp=(a.hp||0)+dt*26,nx=-M.sin(a.an),ny=M.cos(a.an),o=M.sin(hp)*(5+a.c*7);
sp(1,a.x+nx*o,a.y+ny*o,0,0,.24,9+a.c*7,'p');
if(!a.ul)sp(1,a.x-nx*o,a.y-ny*o,0,0,.24,7+a.c*5,'w');
if(!a.ul&&M.random()<.3&&P.length<240){const l=rnd(.5,.9);P.push({t:8,x:a.x,y:a.y,vx:rnd(-30,30),vy:rnd(-30,30),l,m:l,r:rnd(3,5),c:'255,238,180',gv:20,dg:1,an:rnd(0,TAU),sp:rnd(-9,9)})}
}
function sTr(a){
const t=a.tr,n=t.length;
if(n<3)return;
const w=1+a.c*.9;
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.globalAlpha=.16;g.strokeStyle='rgb(255,236,170)';g.lineWidth=9*w;
g.beginPath();g.moveTo(t[0].x,t[0].y);
for(let i=1;i<n;i++)g.lineTo(t[i].x,t[i].y);
g.lineTo(a.x,a.y);g.stroke();
const ns=a.ul?1:2;
for(let s=0;s<ns;s++){
g.strokeStyle=s?'rgb(255,255,255)':'rgb(255,214,120)';g.globalAlpha=.7;g.lineWidth=1.5*w;
g.beginPath();
for(let i=0;i<=n;i++){
const pa=t[M.max(0,i-1)],pb=i<n?(i+1<n?t[i+1]:a):a,pc=i<n?t[i]:a;
const dx=pb.x-pa.x,dy=pb.y-pa.y,dl=M.hypot(dx,dy)||1,nx=-dy/dl,ny=dx/dl,k=i/n;
const off=M.sin(i*.9+T*28+s*PI)*(1+k*5.5)*w;
if(i)g.lineTo(pc.x+nx*off,pc.y+ny*off);else g.moveTo(pc.x+nx*off,pc.y+ny*off);
}
g.stroke();
}
if(!a.ul){
for(let i=1;i<=n;i++){
const k=i/n,pa=t[i-1],pb=i<n?t[i]:a;
g.globalAlpha=k*.5;g.strokeStyle='hsl('+((T*220+i*14)%360)+',100%,68%)';g.lineWidth=k*3*w+.4;
g.beginPath();g.moveTo(pa.x,pa.y);g.lineTo(pb.x,pb.y);g.stroke();
}
const L=(26+a.c*22)*(1+.15*M.sin(T*30));
g.save();g.translate(a.x,a.y);g.rotate(a.an);
g.globalAlpha=.7;g.strokeStyle='rgb(255,250,225)';g.lineWidth=1.2;
g.beginPath();g.moveTo(-L,0);g.lineTo(L,0);g.moveTo(0,-L*.55);g.lineTo(0,L*.55);g.stroke();
g.restore();
}
g.restore();
if(!a.ul){
gl('w',a.x,a.y,18+a.c*12,.8);gl('p',a.x,a.y,34+a.c*22,.55);
for(let k=0;k<3;k++){const an=T*18+k*2.09,of=8+a.c*6;gl('w',a.x+M.cos(an)*of,a.y+M.sin(an)*of,6,.7)}
}
}
function sLand(a){
ring(a.x,GY,'255,236,170',a.ul?30:48);
sp(1,a.x,GY-6,0,0,.3,a.ul?46:80,'p');
if(!a.ul&&P.length<250)P.push({t:7,x:a.x,y:GY,vx:0,vy:0,l:.45,m:.45,r:34,c:'255,236,170',gv:0,dg:0,ln:170});
}
function sHit(x,y,a){
const u=a.ul?.5:1,r=a.c,c='255,236,170';
ring(x,y,c,(60+r*50)*u);ring(x,y,'255,255,255',(34+r*30)*u);
sp(1,x,y,0,0,.3,(110+r*60)*u,'p');
if(P.length<250){
const n=a.ul?4:10;
for(let i=0;i<n;i++)P.push({t:6,x,y,vx:0,vy:0,l:.3,m:.3,r:5,c,gv:0,dg:0,an:rnd(0,TAU),ln:rnd(40,110)*(.6+u*.6)});
if(!a.ul){
P.push({t:7,x,y:GY,vx:0,vy:0,l:.5,m:.5,r:46,c,gv:0,dg:0,ln:GY+20});
for(let i=0;i<3;i++){const l=rnd(.6,1.1);P.push({t:8,x,y,vx:rnd(-160,160),vy:rnd(-200,-40),l,m:l,r:rnd(3.5,6),c:'255,238,180',gv:60,dg:1.2,an:rnd(0,TAU),sp:rnd(-8,8)})}
}
}
if(!a.ul)shake=M.max(shake,2.5+r*2);
}
function uFx(){
const c='255,236,170';
if(P.length<250){
for(let i=0;i<10;i++){const l=rnd(.8,1.3);P.push({t:7,x:cam+VW*(i+.5)/10+rnd(-26,26),y:GY,vx:0,vy:0,l,m:l,r:rnd(50,96),c,gv:0,dg:0,ln:GY+30})}
for(let i=0;i<26;i++)P.push({t:6,x:p.x,y:p.y-30,vx:0,vy:0,l:.6,m:.6,r:6,c,gv:0,dg:0,an:i/26*TAU,ln:rnd(180,420)});
}
ring(p.x,GY-4,'255,255,255',420);ring(p.x,GY-4,c,300);ring(p.x,p.y-30,c,160);
sp(1,p.x,p.y-30,0,0,.7,240,'p');
FXA.fl=.8;FXA.fc=c;shake=16;
}
function uSt(dt){
p.wf=1;
if(M.random()<dt*7){
const x=rnd(cam,cam+VW);
P.push({t:9,x,y:0,vx:0,vy:0,l:.3,m:.3,r:1,c:'255,236,170',gv:0,dg:0,sd:rnd(0,999),ox:rnd(-90,90)});
ring(x,GY-3,'255,236,170',74);ring(x,GY-3,'255,255,255',40);
sp(1,x,GY-4,0,0,.3,96,'p');dust(x,GY,3,90);
shake=M.max(shake,2.4);
}
if(M.random()<dt*9&&P.length<240){const l=rnd(.4,.7);P.push({t:7,x:rnd(cam,cam+VW),y:GY,vx:0,vy:0,l,m:l,r:rnd(18,36),c:'255,236,170',gv:0,dg:0,ln:GY+20})}
if(M.random()<dt*24)sp(5,rnd(cam,cam+VW),-20,rnd(-20,20),rnd(320,520),rnd(.5,.9),2.4,'255,246,205',0,0);
}
function fxSky(){
const ak=M.min(1,(UD-p.ut)*4)*M.min(1,p.ut*2.5),cy=GY*.3,R=M.max(240,M.min(380,VW*.4));
g.save();g.translate(p.x,cy);g.scale(1,.34);g.globalCompositeOperation='lighter';g.lineCap='round';
g.rotate(-T*.45);
g.strokeStyle='rgba(255,236,170,'+.85*ak+')';g.lineWidth=5;
g.beginPath();g.arc(0,0,R,0,TAU);g.stroke();
g.lineWidth=2.4;g.setLineDash([24,14]);
g.beginPath();g.arc(0,0,R*.82,0,TAU);g.stroke();g.setLineDash([]);
g.rotate(T*1.3);
g.strokeStyle='rgba(255,250,235,'+.7*ak+')';g.lineWidth=2.6;
g.beginPath();
for(let t=0;t<2;t++)for(let i=0;i<=3;i++){const a=(i%3)*TAU/3+t*PI/3-PI/2,x=M.cos(a)*R*.78,y=M.sin(a)*R*.78;if(i==0)g.moveTo(x,y);else g.lineTo(x,y)}
g.stroke();
g.rotate(-T*2.2);g.lineWidth=2;g.strokeStyle='rgba(255,236,170,'+.6*ak+')';
g.beginPath();
for(let i=0;i<24;i++){const a=i*TAU/24,r1=R*.9,r2=R*(i&1?.96:1.04);g.moveTo(M.cos(a)*r1,M.sin(a)*r1);g.lineTo(M.cos(a)*r2,M.sin(a)*r2)}
g.stroke();
g.restore();
gl('p',p.x,cy,R*.7,.35*ak);
}
function nFx(x,y,d,a,c,m){
const an=d>0?a:PI-a,u=.6+c*.6+(m>1?.3:0);
if(P.length<250){
for(let i=0;i<6;i++)P.push({t:6,x,y,vx:0,vy:0,l:.32,m:.32,r:4.5+c*3,c:'190,225,255',gv:0,dg:0,an:an+(i-2.5)*.12,ln:rnd(100,210)*u});
for(let i=0;i<6;i++)P.push({t:6,x,y,vx:0,vy:0,l:.24,m:.24,r:3.2,c:'235,245,255',gv:0,dg:0,an:rnd(0,TAU),ln:rnd(24,64)*u});
for(let i=0;i<3+M.floor(c*3);i++){const l=rnd(.6,1.1);P.push({t:10,x,y,vx:d*rnd(60,220),vy:rnd(-110,40),l,m:l,r:rnd(3.5,5.5),c:'190,225,255',gv:50,dg:1.4,an:rnd(0,TAU),sp:rnd(-9,9)})}
}
ring(x,y,'170,215,255',(40+c*40)*u);ring(x,y,'255,255,255',(24+c*24)*u);
sp(1,x,y,0,0,.3,(90+c*64)*u,'s');sp(1,x,y,0,0,.18,48+c*28,'w');
shake=M.max(shake,2+c*3);p.wf=1;
}
function nTrP(a,dt){
if(a.ul&&M.random()>.3)return;
const hp=a.hp=(a.hp||0)+dt*22,nx=-M.sin(a.an),ny=M.cos(a.an),o=M.sin(hp)*(4+a.c*6);
sp(1,a.x+nx*o,a.y+ny*o,0,0,.26,8+a.c*6,'s');
if(!a.ul)sp(1,a.x-nx*o,a.y-ny*o,0,0,.24,6+a.c*4,'w');
if(!a.ul&&M.random()<.22&&P.length<240){const l=rnd(.5,.9);P.push({t:10,x:a.x,y:a.y,vx:rnd(-26,26),vy:rnd(-26,26),l,m:l,r:rnd(2.4,3.6),c:'190,225,255',gv:30,dg:1,an:rnd(0,TAU),sp:rnd(-9,9)})}
}
