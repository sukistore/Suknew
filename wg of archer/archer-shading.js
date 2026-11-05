function shP(x0,x1,a,b){
const q=g.createLinearGradient(x0,0,x1,0);
q.addColorStop(0,'rgba(6,8,16,'+a+')');q.addColorStop(.5,'rgba(6,8,16,0)');q.addColorStop(1,'rgba(255,255,255,'+b+')');
g.fillStyle=q;g.fill();
}
function shR(x,y,r){
const q=g.createRadialGradient(x+r*.35,y-r*.4,r*.1,x,y,r*1.15);
q.addColorStop(0,'rgba(255,255,255,.2)');q.addColorStop(.5,'rgba(255,255,255,0)');q.addColorStop(1,'rgba(6,8,16,.42)');
g.fillStyle=q;g.fill();
}
function shL(){
g.save();g.translate(0,-1.1);g.strokeStyle='rgba(255,255,255,.14)';g.lineWidth=1.5;g.stroke();g.restore();
}
function s25(P,w0,w1){
const lx=.55*p.f,ly=-.83;
g.save();g.lineCap='butt';
for(let i=0;i+3<P.length;i+=2){
const dx=P[i+2]-P[i],dy=P[i+3]-P[i+1],dl=M.hypot(dx,dy)||1;
let nx=-dy/dl,ny=dx/dl;
if(nx*lx+ny*ly<0){nx=-nx;ny=-ny}
const w=i?w1:w0;
const sg=(o,lw,c,lt)=>{
const q=new Path2D();
q.moveTo(P[i]+nx*o,P[i+1]+ny*o);q.lineTo(P[i+2]+nx*o,P[i+3]+ny*o);
g.globalCompositeOperation=lt?'lighter':'source-over';
g.lineWidth=lw;g.strokeStyle=c;g.stroke(q);
};
sg(-.25*w,w*.5,'rgba(8,20,60,.34)',0);
sg(.3*w,w*.2,'rgba(228,242,255,.5)',0);
sg(-.45*w,w*.11,'rgba(110,185,255,.55)',1);
}
g.restore();
}
function b25(x0,x1,y0,y1){
const lx=p.f>0,w=x1-x0,h=y1-y0;
g.save();g.clip();
const v=g.createLinearGradient(0,y0,0,y1);
v.addColorStop(0,'rgba(255,255,255,.1)');v.addColorStop(1,'rgba(6,8,16,.25)');
g.fillStyle=v;g.fillRect(x0,y0,w,h);
g.fillStyle='rgba(8,20,60,.3)';
g.fillRect(lx?x0:x1-w*.42,y0,w*.42,h);
g.fillStyle='rgba(228,242,255,.4)';
g.fillRect(lx?x1-1.5:x0,y0,1.5,h);
g.globalCompositeOperation='lighter';
g.fillStyle='rgba(110,185,255,.5)';
g.fillRect(lx?x0:x1-.9,y0,.9,h);
g.restore();
}
function c25(cx,cl){
g.save();g.clip();
const q=new Path2D(),s=M.sin(T*2.1)*.8;
for(let k=0;k<3;k++){const t=(k+1)/4;q.moveTo(-3+t*6,-17);q.quadraticCurveTo(lr(-5,cx,t)+s,-2,lr(cx+1,4,t)+s*1.4,10+cl)}
g.lineWidth=1.3;g.strokeStyle='rgba(6,16,50,.3)';g.stroke(q);
g.translate(1.1,0);g.strokeStyle='rgba(150,200,255,.15)';g.stroke(q);
g.restore();
}
function h25(cx,cy,r){
const lx=.55*p.f,ly=-.83;
g.save();g.clip();
const q=new Path2D();
q.rect(cx-r-2,cy-r-2,r*2+4,r*2+4);q.arc(cx+lx*r*.42,cy+ly*r*.42,r,0,TAU);
g.fillStyle='rgba(8,20,60,.34)';g.fill(q,'evenodd');
g.restore();
g.save();g.globalCompositeOperation='lighter';
const a=M.atan2(-ly,-lx),q2=new Path2D();
q2.arc(cx,cy,r-.5,a-.7,a+.7);
g.strokeStyle='rgba(110,185,255,.6)';g.lineWidth=.9;g.stroke(q2);
g.restore();
}
function n3Q(R,tx,tz,a){
const ct=M.cos(tx),st=M.sin(tx),cz=M.cos(tz),sz=M.sin(tz),x=M.cos(a)*R,z=M.sin(a)*R,z1=z*ct,y1=z*st;
n3p(0,x*cz-y1*sz,x*sz+y1*cz,z1);
return NV[2];
}
function ev5R(hf,cx,cy){
if(slA)return;
const R=[21,15.5],TX=[1.15,.35],TZ=[.22*M.sin(T*.5),-.6+.2*M.cos(T*.4)],SP=[T*.9,-T*1.3],C=['150,205,255','190,225,255'];
g.save();g.translate(cx,cy);g.globalCompositeOperation='lighter';g.globalAlpha=PFX;g.lineCap='round';g.lineJoin='round';
for(let r=0;r<2;r++){
const dr=r?-1:1,nt=r?8:12;
g.strokeStyle='rgb('+C[r]+')';
n3R(R[r],TX[r],TZ[r],SP[r],(r?.3:.32)+.08*M.sin(T*3+r),hf,r?1.2:1.6);
for(let i=0;i<nt;i++){
const d=n3Q(R[r],TX[r],TZ[r],SP[r]+i*TAU/nt);
if((d>=0)!=!!hf)continue;
const k=d/R[r]*.5+.5,x=NV[3],y=NV[4],q=(r?1:1.3)*(.5+k);
g.globalAlpha=.35+.55*k;
if(i%3){g.fillStyle='rgb(235,246,255)';g.beginPath();g.arc(x,y,q*.75,0,TAU);g.fill()}
else{g.fillStyle='rgb('+C[r]+')';g.beginPath();g.moveTo(x,y-q*2.2);g.lineTo(x+q*1.1,y);g.lineTo(x,y+q*2.2);g.lineTo(x-q*1.1,y);g.closePath();g.fill()}
}
const nc=r?2:3;
for(let c=0;c<nc;c++){
const hd=dr*T*3.1+c*TAU/nc;
let px=0,py=0,pd=0;
for(let j=0;j<=10;j++){
const d=n3Q(R[r],TX[r],TZ[r],hd-dr*j*.1),x=NV[3],y=NV[4];
if(j){
if((d+pd)*.5>=0==!!hf){
const f=1-j/10;
g.globalAlpha=.85*f;g.strokeStyle='rgb(235,246,255)';g.lineWidth=(r?1.4:2)*f*(.6+.4*(d/R[r]*.5+.5));
g.beginPath();g.moveTo(px,py);g.lineTo(x,y);g.stroke();
}
}else if(d>=0==!!hf){
g.globalAlpha=.9;g.drawImage(GL.s,x-8,y-8,16,16);
}
px=x;py=y;pd=d;
}
}
}
g.globalAlpha=1;
g.restore();
}
