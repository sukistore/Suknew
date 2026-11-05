function nTr(a){
const t=a.tr,n=t.length;
if(n<3)return;
const w=1+a.c*.9;
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.globalAlpha=.14;g.strokeStyle='rgb(150,205,255)';g.lineWidth=9*w;
g.beginPath();g.moveTo(t[0].x,t[0].y);
for(let i=1;i<n;i++)g.lineTo(t[i].x,t[i].y);
g.lineTo(a.x,a.y);g.stroke();
const ns=a.ul?1:2;
for(let s=0;s<ns;s++){
g.strokeStyle=s?'rgb(255,255,255)':'rgb(160,208,255)';
for(let i=1;i<=n;i++){
const pa=t[M.max(0,i-2)],pb=i<n?t[i]:a,pc=t[i-1],k=i/n,dx=pb.x-pa.x,dy=pb.y-pa.y,dl=M.hypot(dx,dy)||1,nx=-dy/dl,ny=dx/dl;
const h0=(i-1)*.7+T*22+s*PI,h1=i*.7+T*22+s*PI,o0=M.sin(h0)*(1+(k-1/n)*5.5)*w,o1=M.sin(h1)*(1+k*5.5)*w,dp=M.cos(h1);
g.globalAlpha=(.22+.6*k)*(.55+.45*dp);g.lineWidth=(.5+k*1.9)*w*(.65+.35*dp);
g.beginPath();g.moveTo(pc.x+nx*o0,pc.y+ny*o0);g.lineTo(pb.x+nx*o1,pb.y+ny*o1);g.stroke();
}
}
if(!a.ul){
const L=(22+a.c*20)*(1+.12*M.sin(T*30));
g.save();g.translate(a.x,a.y);g.rotate(a.an);
g.globalAlpha=.55;g.strokeStyle='rgb(235,245,255)';g.lineWidth=1;
g.beginPath();g.moveTo(-L,0);g.lineTo(L,0);g.stroke();
g.restore();
}
g.restore();
if(!a.ul){
gl('w',a.x,a.y,16+a.c*10,.75);gl('s',a.x,a.y,32+a.c*20,.55);
const ca=M.cos(a.an),sa=M.sin(a.an);
for(let k=0;k<3;k++){const an=T*16+k*2.09,of=7+a.c*5,cs=M.cos(an),sn=M.sin(an);gl('w',a.x+sa*cs*of+ca*sn*of*.4,a.y-ca*cs*of+sa*sn*of*.4,4+2.2*(sn+1),.5+.3*sn)}
}
}
function nLand(a){
ring(a.x,GY,'170,215,255',a.ul?30:48);
sp(1,a.x,GY-6,0,0,.3,a.ul?46:80,'s');
if(!a.ul&&P.length<250)P.push({t:7,x:a.x,y:GY,vx:0,vy:0,l:.45,m:.45,r:30,c:'170,215,255',gv:0,dg:0,ln:GY+10});
}
function nHit(x,y,a){
const u=a.ul?.5:1,r=a.c,c='170,215,255';
ring(x,y,c,(58+r*48)*u);ring(x,y,'255,255,255',(32+r*28)*u);
sp(1,x,y,0,0,.3,(105+r*58)*u,'s');
if(P.length<250){
const n=a.ul?3:9;
for(let i=0;i<n;i++)P.push({t:6,x,y,vx:0,vy:0,l:.3,m:.3,r:4.6,c,gv:0,dg:0,an:rnd(0,TAU),ln:rnd(40,105)*(.6+u*.6)});
if(!a.ul){
P.push({t:7,x,y:GY,vx:0,vy:0,l:.5,m:.5,r:40,c,gv:0,dg:0,ln:GY+10});
for(let i=0;i<4;i++){const l=rnd(.6,1.1);P.push({t:10,x,y,vx:rnd(-170,170),vy:rnd(-210,-40),l,m:l,r:rnd(3.5,5.5),c:'190,225,255',gv:140,dg:1.1,an:rnd(0,TAU),sp:rnd(-9,9)})}
}
}
if(!a.ul)shake=M.max(shake,2.5+r*2);
}
function nUf(){
const c='170,215,255';
if(P.length<250){
for(let i=0;i<10;i++){const l=rnd(.8,1.3);P.push({t:7,x:cam+VW*(i+.5)/10+rnd(-26,26),y:GY,vx:0,vy:0,l,m:l,r:rnd(46,90),c,gv:0,dg:0,ln:GY+30})}
for(let i=0;i<22;i++)P.push({t:6,x:p.x,y:p.y-30,vx:0,vy:0,l:.6,m:.6,r:5.6,c,gv:0,dg:0,an:i/22*TAU,ln:rnd(160,380)});
for(let i=0;i<14;i++){const b=rnd(0,TAU),v=rnd(120,360),l=rnd(.9,1.5);P.push({t:10,x:p.x,y:p.y-30,vx:M.cos(b)*v,vy:M.sin(b)*v-80,l,m:l,r:rnd(4,7),c:'190,225,255',gv:120,dg:1.2,an:rnd(0,TAU),sp:rnd(-8,8)})}
}
ring(p.x,GY-4,'255,255,255',400);ring(p.x,GY-4,c,290);ring(p.x,p.y-30,c,150);
sp(1,p.x,p.y-30,0,0,.7,230,'s');
FXA.fl=.8;FXA.fc=c;shake=16;
}
function nUs(dt){
p.wf=1;
if(M.random()<dt*8){
const x=rnd(cam,cam+VW);
if(P.length<240)P.push({t:7,x,y:GY,vx:0,vy:0,l:.5,m:.5,r:rnd(26,52),c:'170,215,255',gv:0,dg:0,ln:GY+20});
ring(x,GY-3,'170,215,255',70);ring(x,GY-3,'255,255,255',38);
sp(1,x,GY-4,0,0,.3,92,'s');dust(x,GY,3,90);
shake=M.max(shake,2.2);
}
if(M.random()<dt*11&&P.length<240){const l=rnd(.7,1.2);P.push({t:10,x:rnd(cam,cam+VW),y:-20,vx:rnd(-24,24),vy:rnd(300,500),l,m:l,r:rnd(3.5,6),c:'190,225,255',gv:0,dg:0,an:rnd(0,TAU),sp:rnd(-7,7)})}
if(M.random()<dt*24)sp(5,rnd(cam,cam+VW),-20,rnd(-20,20),rnd(320,520),rnd(.5,.9),2.2,'205,230,255',0,0);
}
function nSky(){
const ak=M.min(1,(UD-p.ut)*4)*M.min(1,p.ut*2.5),cy=GY*.3,R=M.max(150,M.min(250,VW*.26)),s=R*.17,a=T*1.1;
N3.f=1;
g.save();g.translate(p.x,cy);g.lineCap='round';
g.globalCompositeOperation='lighter';
g.strokeStyle='rgb(170,215,255)';
n3R(R,.8,.28*M.sin(T*.4),T*.5,.9*ak,0,3.4);
n3R(R*.72,.3,-.5+.3*M.cos(T*.35),-T*.8,.8*ak,0,2.6);
g.globalCompositeOperation='source-over';
g.globalAlpha=ak;
n3B(0,-s,0,0,s*1.35,0,M.cos(a),0,M.sin(a),s*.52,s*.52,.42,[190,222,255],1,1);
g.globalAlpha=1;
g.globalCompositeOperation='lighter';
g.strokeStyle='rgb(170,215,255)';
n3R(R,.8,.28*M.sin(T*.4),T*.5,.9*ak,1,3.4);
n3R(R*.72,.3,-.5+.3*M.cos(T*.35),-T*.8,.8*ak,1,2.6);
g.globalAlpha=1;g.globalCompositeOperation='source-over';
g.restore();
gl('s',p.x,cy,R*.7,.34*ak);gl('w',p.x,cy,s*1.6,.4*ak);
}
function arrow5(ae,ph){
const A0=g.globalAlpha,W0=!slA;
g.lineCap='round';g.lineJoin='round';
const ring=(x,R,sq,al,hf,wd)=>{
g.save();g.globalCompositeOperation='lighter';
g.globalAlpha=A0*al*(hf?1:.5);g.strokeStyle='rgb('+ae.c+')';g.lineWidth=wd*(hf?1:.7);
g.setLineDash([3,2]);g.lineDashOffset=-T*30*(hf?1:-1);
g.beginPath();g.ellipse(x,0,R*sq,R,0,hf?-PI/2:PI/2,hf?PI/2:PI*1.5);g.stroke();
g.setLineDash([]);
g.globalAlpha=A0*al*(hf?.9:.3);g.strokeStyle='#ffffff';g.lineWidth=wd*.35;g.stroke();
g.restore();
};
const mote=hf=>{
g.save();g.globalCompositeOperation='lighter';
for(let k=0;k<7;k++){
const a=ph*2+k*.95+T*7,d=M.cos(a);
if((d>=0)!=!!hf)continue;
const x=-29+k*5,y=5.2*M.sin(a),r=hf?1.1+.5*d:.6;
g.globalAlpha=A0*(hf?.55+.45*d:.28);
g.fillStyle=hf?'#ffffff':'rgb('+ae.c+')';
g.beginPath();g.arc(x,y,r,0,TAU);g.fill();
if(hf&&W0){g.globalAlpha=A0*.25*d;g.fillStyle='rgb('+ae.c+')';g.beginPath();g.arc(x,y,r*3,0,TAU);g.fill()}
}
g.restore();
};
const vane=a=>{
const co0=M.cos(a),co1=M.cos(a+.35),co2=M.cos(a+.7),h=5.6,e=M.abs(co0),li=.45+.55*M.abs(.75*M.sin(a)+.55*co0);
g.fillStyle='rgba('+(110+120*li|0)+','+(165+80*li|0)+','+(232+23*li|0)+','+(.5+.4*e)+')';
g.beginPath();g.moveTo(-22,0);g.lineTo(-29,h*co1);g.lineTo(-36,h*co2*.96);g.lineTo(-33,0);g.closePath();g.fill();
if(e>.25){g.strokeStyle='rgba(235,245,255,'+.5*e+')';g.lineWidth=.5;g.stroke()}
};
const barb=b=>{
const co=M.cos(b),li=.4+.6*M.abs(M.sin(b)*.7+co*.5);
g.fillStyle='rgb('+n3c(150+90*li)+','+n3c(190+55*li)+','+n3c(240+15*li)+')';
g.beginPath();g.moveTo(-.5,co*2.4);g.lineTo(-6.6,co*8.4);g.lineTo(-3.6,co*2.4);g.lineTo(-4.6,0);g.closePath();g.fill();
g.strokeStyle='rgba(10,24,64,.6)';g.lineWidth=.4;g.stroke();
};
const va=[ph+.4,ph+.4+TAU/3,ph+.4+TAU*2/3],ba=[ph+PI/4,ph+PI*3/4,ph+PI*5/4,ph+PI*7/4];
ring(-14,6.4,.32,.55,0,1.1);ring(3,4.8,.3,.55,0,.9);mote(0);
for(const b of ba)if(M.sin(b)<0)barb(b);
for(const a of va)if(M.sin(a)<0)vane(a);
g.strokeStyle='rgba(10,24,64,.6)';g.lineWidth=3.2;
g.beginPath();g.moveTo(-31,0);g.lineTo(-3,0);g.stroke();
g.strokeStyle='#6f98cf';g.lineWidth=2.4;
g.beginPath();g.moveTo(-31,0);g.lineTo(-3,0);g.stroke();
g.strokeStyle='#cfdff2';g.lineWidth=1.5;
g.beginPath();g.moveTo(-31,-.3);g.lineTo(-3,-.3);g.stroke();
g.strokeStyle='rgba(255,255,255,.85)';g.lineWidth=.55;
g.beginPath();g.moveTo(-29,-.7);g.lineTo(-4,-.7);g.stroke();
g.strokeStyle='rgba('+ae.c+',.85)';g.lineWidth=.9;
g.beginPath();g.moveTo(-27,.5);g.lineTo(-2,.5);g.stroke();
g.strokeStyle='#7fb4ee';g.lineWidth=1;
for(let k=0;k<3;k++){g.beginPath();g.ellipse(-10-k*4.5,0,.8,1.9,0,-PI/2,PI/2);g.stroke()}
g.fillStyle='#ffffff';
for(let k=0;k<4;k++){const a=ph+k*1.7,d=M.cos(a);if(d>0){g.globalAlpha=A0*d;g.beginPath();g.arc(-8-k*5.3,1.1*M.sin(a),.55,0,TAU);g.fill()}}
g.globalAlpha=A0;
for(const a of va)if(M.sin(a)>=0)vane(a);
const hr=4.8,V=[];
for(let k=0;k<4;k++){const a=ph+k*PI/2;V.push([-1.5,hr*M.cos(a),hr*M.sin(a)])}
const tip=[12.5,0,0],tail=[-7,0,0];
const tri=(A,B,C)=>{
const ux=B[0]-A[0],uy=B[1]-A[1],uz=B[2]-A[2],vx=C[0]-A[0],vy=C[1]-A[1],vz=C[2]-A[2];
let nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;
if(nx*((A[0]+B[0]+C[0])/3+1.5)+ny*((A[1]+B[1]+C[1])/3)+nz*((A[2]+B[2]+C[2])/3)<0){nx=-nx;ny=-ny;nz=-nz}
if(nz<=0)return;
const nl=M.hypot(nx,ny,nz),df=M.max(0,(nx*.35-ny*.75+nz*.55)/nl),li=.32+.68*df,sp=M.pow(df,8)*.6;
g.fillStyle='rgb('+n3c(205*li+50*sp)+','+n3c(228*li+27*sp)+','+n3c(255*(.45+.55*li))+')';
g.beginPath();g.moveTo(A[0],A[1]);g.lineTo(B[0],B[1]);g.lineTo(C[0],C[1]);g.closePath();g.fill();
g.strokeStyle='rgba(255,255,255,.5)';g.lineWidth=.4;g.stroke();
};
for(let k=0;k<4;k++){const B=V[k],C=V[(k+1)%4];tri(tail,C,B);tri(tip,B,C)}

for(const b of ba)if(M.sin(b)>=0)barb(b);
ring(-14,6.4,.32,.55,1,1.1);ring(3,4.8,.3,.55,1,.9);mote(1);
if(W0){
g.save();g.globalCompositeOperation='lighter';
g.globalAlpha=A0*(.5+.2*M.sin(T*14));g.drawImage(GL.s,0,-11,22,22);
g.restore();
}
}
