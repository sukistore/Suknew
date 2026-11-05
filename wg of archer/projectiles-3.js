function arrowBody(ae,v,ph){
if(v==6){orb6(ph===undefined?T*6:ph,1,1);return}
if(v==5){arrow5(ae,ph===undefined?T*6:ph);return}
const sc=['#b8a07a','#cfd8e4','#c9764a','#b8a8e8','#e8c868'][v],tp=[5,9,9,9,11][v],fh=2.6+v*.5;
g.lineCap='round';g.lineJoin='round';
g.strokeStyle='rgba(6,8,16,.5)';g.lineWidth=2.6+v*.25;
g.beginPath();g.moveTo(-30,0);g.lineTo(-3,0);g.stroke();
g.strokeStyle=sc;g.lineWidth=1.7+v*.25;
g.beginPath();g.moveTo(-30,0);g.lineTo(-3,0);g.stroke();
g.strokeStyle='rgba(255,255,255,.45)';g.lineWidth=.5;
g.beginPath();g.moveTo(-29,-.5);g.lineTo(-4,-.5);g.stroke();
if(v>0){
g.strokeStyle='rgba('+ae.c+',.8)';g.lineWidth=.6+v*.25;
g.beginPath();g.moveTo(-27,.3);g.lineTo(-2,.3);g.stroke();
}
if(v==0){
g.strokeStyle='rgba(60,40,24,.75)';g.lineWidth=1.2;
g.beginPath();g.moveTo(-23,-1.3);g.lineTo(-23,1.3);g.moveTo(-8,-1.3);g.lineTo(-8,1.3);g.stroke();
}
if(v==3){
g.strokeStyle='rgba(255,250,235,.9)';g.lineWidth=.9;
g.beginPath();g.moveTo(-28,0);
for(let k=1;k<=7;k++)g.lineTo(-28+k*4,(k&1?-1:1)*(1.8+M.sin(T*40+k)*.9));
g.stroke();
}
if(v==4){
g.strokeStyle='#f0cf7a';g.lineWidth=1.3;
for(let k=0;k<3;k++){g.beginPath();g.moveTo(-9-k*5,-2);g.lineTo(-9-k*5,2);g.stroke()}
}
if(v>0){
g.fillStyle=ae.f;g.strokeStyle='rgba(6,8,16,.55)';g.lineWidth=.5;
g.beginPath();g.rect(-7.4,-1.5-v*.25,3.2,3+v*.5);g.fill();g.stroke();
}
g.beginPath();
if(v==0){g.moveTo(5,0);g.lineTo(0,-3);g.lineTo(-3.6,-.9);g.lineTo(-3.6,.9);g.lineTo(0,3)}
else if(v==1){g.moveTo(9,0);g.lineTo(2,-3.6);g.lineTo(-3,-1.8);g.lineTo(-5,0);g.lineTo(-3,1.8);g.lineTo(2,3.6)}
else if(v==2){g.moveTo(9,0);g.lineTo(1,-3);g.lineTo(-1,-6);g.lineTo(-3,-1.4);g.lineTo(-4.5,0);g.lineTo(-3,1.4);g.lineTo(-1,6);g.lineTo(1,3)}
else if(v==3){g.moveTo(9,0);g.lineTo(3,-2.4);g.lineTo(4,-6.5);g.lineTo(-1,-3);g.lineTo(-5,-3.4);g.lineTo(-3,0);g.lineTo(-5,3.4);g.lineTo(-1,3);g.lineTo(4,6.5);g.lineTo(3,2.4)}
else{g.moveTo(11,0);g.lineTo(3,-4.6);g.lineTo(-.5,-8);g.lineTo(-2.6,-2.6);g.lineTo(-6.5,0);g.lineTo(-2.6,2.6);g.lineTo(-.5,8);g.lineTo(3,4.6)}
g.closePath();
g.fillStyle=ae.h;g.fill();
g.save();g.clip();
g.fillStyle='rgba(6,8,16,.18)';g.fillRect(-12,0,26,10);
g.fillStyle='rgba(255,255,255,.3)';g.fillRect(-12,-10,26,4);
g.restore();
g.strokeStyle='rgba(6,8,16,.6)';g.lineWidth=.7;g.stroke();
g.strokeStyle='rgba(255,255,255,.7)';g.lineWidth=.4;
g.beginPath();g.moveTo(-2,0);g.lineTo(tp-1.2,0);g.stroke();
const vn=(x0,L2,h)=>{
g.beginPath();g.moveTo(x0,-.7);g.lineTo(x0-1.6,-h);g.lineTo(x0-L2-1.6,-h);g.lineTo(x0-L2,-.7);g.closePath();
g.fillStyle=ae.f;g.fill();
g.fillStyle=ae.g;
g.beginPath();g.moveTo(x0-.8,-.9);g.lineTo(x0-2,-h*.55);g.lineTo(x0-L2*.9-1.6,-h*.55);g.lineTo(x0-L2*.9,-.9);g.closePath();g.fill();
g.strokeStyle='rgba(6,8,16,.5)';g.lineWidth=.45;
g.beginPath();g.moveTo(x0,-.7);g.lineTo(x0-1.6,-h);g.lineTo(x0-L2-1.6,-h);g.lineTo(x0-L2,-.7);g.closePath();g.stroke();
g.strokeStyle='rgba(6,8,16,.28)';g.lineWidth=.4;
g.beginPath();
for(let k=1;k<4;k++){const x=x0-L2*k/4;g.moveTo(x,-.9);g.lineTo(x-1.6,-h*.9)}
g.stroke();
};
vn(-23.5,9,fh);
g.save();g.scale(1,-1);vn(-23.5,9,fh);g.restore();
if(v>=2){vn(-15,4,fh*.6);g.save();g.scale(1,-1);vn(-15,4,fh*.6);g.restore()}
ov(-32.6,0,1.3,1.6,sc);
g.strokeStyle='rgba(6,8,16,.6)';g.lineWidth=.4;
g.beginPath();g.ellipse(-32.6,0,1.3,1.6,0,0,TAU);g.stroke();
}
function drawA1(a){
if(a.sp==2)return;
if(a.sp==1){spFall(a);return}
const fade=a.st?M.min(1,(4.2-a.l)/.8):1;
const ae=AE[a.ev];
g.lineCap='round';g.globalCompositeOperation='lighter';g.strokeStyle='rgb('+ae.t+')';
for(let i=1;i<a.tr.length;i++){
const k=i/a.tr.length;
g.globalAlpha=k*.4*fade;g.lineWidth=(.8+k*2.2)*(1+a.ev*.25);
g.beginPath();g.moveTo(a.tr[i-1].x,a.tr[i-1].y);g.lineTo(a.tr[i].x,a.tr[i].y);g.stroke();
}
g.globalCompositeOperation='source-over';g.globalAlpha=1;
if(a.ev==4&&!a.st&&!a.sp)sTr(a);
if(a.ev==5&&!a.st&&!a.sp)nTr(a);
if(!a.st)gl(ae.k,a.x,a.y,11+a.c*6+a.ev*3,.4+a.ev*.05);
g.save();g.translate(a.x,a.y);
g.rotate(a.an+(a.st?M.sin(a.l*45)*M.exp(-a.l*7)*.1:0));
if(!a.st&&a.ev>0)gl(ae.k,-26,0,8+a.ev*3,.35+a.ev*.05);
g.globalAlpha=fade;
if(a.ev>=4&&!a.sp)g.scale(1+a.c*.4,1+a.c*.4);
if(a.sp)spShaft();else arrowBody(ae,a.ev,a.x*.012);
g.restore();
}
function drawA(){
for(const a of A)drawA1(a);
g.globalAlpha=1;
}

const SF=[];
for(let i=0;i<8;i++)SF.push({x:0,y:0,ox:0,oy:0});
let sfInit=0;
function upSf(dt,ax,ay){
if(!sfInit){SF.forEach((q,i)=>{q.x=q.ox=ax-i*4;q.y=q.oy=ay});sfInit=1}
SF[0].x=SF[0].ox=ax;SF[0].y=SF[0].oy=ay;
for(let i=1;i<SF.length;i++){
const q=SF[i],vx=(q.x-q.ox)*.93,vy=(q.y-q.oy)*.93;
q.ox=q.x;q.oy=q.y;
q.x+=vx+p.wd*(1300+M.sin(T*1.3+i)*350)*dt*dt;
q.y+=vy+(300+M.sin(T*6+i*1.1)*420)*dt*dt;
}
for(let it=0;it<2;it++)for(let i=1;i<SF.length;i++){
const q=SF[i],r=SF[i-1],dx=q.x-r.x,dy=q.y-r.y,d=M.hypot(dx,dy)||1,k=(d-5)/d;
q.x-=dx*k;q.y-=dy*k;
if(q.y>GY-2)q.y=GY-2;
}
}
const SFC=['#b4733f','#7fa8cc','#e0602e','#7b5cd0','#f2e6bd','#8ec0f2','#c3162f'],SFD=['#7a4a24','#e8f1fb','#ffb26b','#d8cdfa','#d9b657','#f2f8ff','#5a0c1b'];
function drawSf(){
const n=SF.length,Lp=[],Rp=[],v=p.vt,c1=SFC[v],c2=SFD[v];
for(let i=0;i<n;i++){
const a=SF[M.max(0,i-1)],b=SF[M.min(n-1,i+1)],dx=b.x-a.x,dy=b.y-a.y,d=M.hypot(dx,dy)||1,w=(3.4*(1-i/n)+.8)*(p.vt==6?.7:1+p.vt*.2);
Lp.push([SF[i].x-dy/d*w,SF[i].y+dx/d*w]);Rp.push([SF[i].x+dy/d*w,SF[i].y-dx/d*w]);
}
const E=SF[n-1],Q=SF[n-2],ex=E.x-Q.x,ey=E.y-Q.y,el=M.hypot(ex,ey)||1,ux=ex/el,uy=ey/el;
g.lineJoin='round';
g.fillStyle=c1;g.beginPath();g.moveTo(Lp[0][0],Lp[0][1]);
for(let i=1;i<n;i++)g.lineTo(Lp[i][0],Lp[i][1]);
g.lineTo(E.x+ux*4.4+(Lp[n-1][0]-E.x)*.8,E.y+uy*4.4+(Lp[n-1][1]-E.y)*.8);
g.lineTo(E.x+ux*1.4,E.y+uy*1.4);
g.lineTo(E.x+ux*4.4+(Rp[n-1][0]-E.x)*.8,E.y+uy*4.4+(Rp[n-1][1]-E.y)*.8);
for(let i=n-1;i>=0;i--)g.lineTo(Rp[i][0],Rp[i][1]);
g.closePath();g.fill();
g.strokeStyle='rgba(60,30,10,.5)';g.lineWidth=.8;g.stroke();
g.fillStyle=c2;g.globalAlpha=.6;
for(let i=3;i<n-1;i+=3){
g.beginPath();g.moveTo(Lp[i][0],Lp[i][1]);g.lineTo(Rp[i][0],Rp[i][1]);g.lineTo(lr(Rp[i][0],Rp[i+1][0],.35),lr(Rp[i][1],Rp[i+1][1],.35));g.lineTo(lr(Lp[i][0],Lp[i+1][0],.35),lr(Lp[i][1],Lp[i+1][1],.35));g.closePath();g.fill();
}
g.globalAlpha=1;
g.strokeStyle='rgba(255,255,255,.22)';g.lineWidth=.6;g.beginPath();g.moveTo(Lp[0][0],Lp[0][1]);
for(let i=1;i<n;i++)g.lineTo(Lp[i][0],Lp[i][1]);
g.stroke();
ov(SF[0].x,SF[0].y,3.4+v*.15,2.6,c2);
g.strokeStyle='rgba(60,30,10,.45)';g.lineWidth=.6;g.beginPath();g.ellipse(SF[0].x,SF[0].y,3.4+v*.15,2.6,0,0,TAU);g.stroke();
if(v>=2)gl(AE[v].k,E.x,E.y,8+v*2,.22+.08*M.sin(T*5));
}

const PV={
cape:['#1e303b','#22405a','#4a2420','#2a2458','#e6dfc6','#27457f','#1a1018'],
tun:['#2e4352','#38546c','#5a302a','#3a3266','#f2ecd8','#33619f','#2a1420'],
hood:['#223644','#2a4862','#3c1e1a','#2a2350','#e8e1c8','#213c70','#120c14'],
arm:['#2a3b48','#34506a','#4a2a24','#342d5e','#ddd5ba','#3d6cae','#1c1420'],
arm2:['#1d2b36','#263f56','#3a201c','#271f4a','#d0c8ac','#2c5290','#120c14'],
bow:['#6a4a32','#8d98a6','#8a3f22','#5a4a96','#e0b85a','#b9d8f7','#5a0c1b'],
bk:['#c79a5a','#cfd8e4','#ffb26b','#d8cdfa','#fff2c0','#f2f8ff','#ff4358'],
tr:['rgba(120,160,175,.28)','rgba(200,225,245,.7)','rgba(255,150,90,.75)','rgba(205,190,255,.75)','rgba(255,232,160,.85)','rgba(190,225,255,.9)','rgba(255,70,90,.8)'],
ey:['#ffdf9e','#d8ecff','#ffb27a','#e4d6ff','#fff6d0','#ffffff','#ff5468'],
pd:['#8fa6b3','#d6e0ec','#e0763e','#b9a6f0','#f0cf7a','#9cc8f5','#3a1522'],
rm:['rgba(130,175,195,.4)','rgba(210,232,250,.7)','rgba(255,170,110,.7)','rgba(215,200,255,.7)','rgba(255,240,190,.85)','rgba(205,232,255,.9)','rgba(255,80,100,.8)']
};
