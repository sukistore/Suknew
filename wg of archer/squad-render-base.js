function upH(dt){
p.inv-=dt;p.hu-=dt;p.rg-=dt;GQ.l=M.max(0,GQ.l-dt);
FXA.fl=M.max(0,FXA.fl-dt*1.6);FXA.sa=M.max(0,FXA.sa-dt);
if(p.dead){p.dead+=dt;if(p.dead>3.2&&!pvOn)menuGo()}
else if(p.rg<=0&&p.hp<p.mh)p.hp=M.min(p.mh,p.hp+2*gDm()*dt);
if(msg){msg.l-=dt;if(msg.l<=0)msg=null}
}

function zig(x0,y0,x1,y1,j,sd){
const dx=x1-x0,dy=y1-y0,d=M.hypot(dx,dy)||1,n=M.max(4,M.floor(d/16)),nx=-dy/d,ny=dx/d;
g.moveTo(x0,y0);
for(let i=1;i<n;i++){const t=i/n,o=(hs(sd+i*3.7)-.5)*2*j*M.sin(t*PI);g.lineTo(x0+dx*t+nx*o,y0+dy*t+ny*o)}
g.lineTo(x1,y1);
}
function orb(x,y,r,k,sd){
gl('z',x,y,r*2.6,.35+k*.6);
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.strokeStyle='rgb(190,130,255)';g.lineWidth=1.2;
for(let i=0;i<6;i++){
const a=hs(sd+i*1.7)*TAU,l=r*(.9+hs(sd+i*2.9)*1.1);
g.globalAlpha=M.min(1,.5+k*.4);
g.beginPath();zig(x,y,x+M.cos(a)*l,y+M.sin(a)*l,r*.45,sd+i*11);g.stroke();
}
g.restore();
gl('w',x,y,r*1.2,.45+k*.4);
}

function sqLeg(q,sn,hx,hy,c1,c2,w){
const fx=M.sin(q)*12*sn+(hx<0?-3:3)*(1-sn),lf=M.max(0,M.cos(q))*5.5*sn,fy=-lf-2.3;
const ax=fx-.6,ay=fy-3.4,dx=ax-hx,dy=ay-hy,d=M.hypot(dx,dy)||1,ux=dx/d,uy=dy/d,nx=-uy,ny=ux;
const px=(t,v)=>hx+dx*t+nx*v*w,py=(t,v)=>hy+dy*t+ny*v*w,hw=3.5,aw=2,wd=t=>hw+(aw-hw)*t;
const lg=(a,b,c)=>{g.fillStyle=c;g.beginPath();g.moveTo(px(a,-wd(a)),py(a,-wd(a)));g.lineTo(px(b,-wd(b)),py(b,-wd(b)));g.lineTo(px(b,wd(b)),py(b,wd(b)));g.lineTo(px(a,wd(a)),py(a,wd(a)));g.closePath();g.fill()};
lg(0,1,c1);lg(.48,1,c2);
g.strokeStyle='rgba(0,0,0,.42)';g.lineWidth=.8;g.beginPath();g.moveTo(px(0,hw),py(0,hw));g.lineTo(px(1,aw),py(1,aw));g.stroke();
g.strokeStyle='rgba(255,240,210,.18)';g.lineWidth=.7;g.beginPath();g.moveTo(px(.04,-hw*.62),py(.04,-hw*.62));g.lineTo(px(.96,-aw*.62),py(.96,-aw*.62));g.stroke();
sl(px(.48,-wd(.48)),py(.48,-wd(.48)),px(.48,wd(.48)),py(.48,wd(.48)),'rgba(0,0,0,.45)',.9);
poly([px(.4,0),py(.4,0),px(.47,wd(.47)*.7),py(.47,wd(.47)*.7),px(.56,0),py(.56,0),px(.47,-wd(.47)*.7),py(.47,-wd(.47)*.7)],c1,'rgba(0,0,0,.45)',.6);
sl(px(.8,-wd(.8)),py(.8,-wd(.8)),px(.8,wd(.8)),py(.8,wd(.8)),'rgba(0,0,0,.3)',.8);
poly([ax-w*2.2,ay-.4,ax+w*2.2,ay-.4,ax+w*2.2+.4,fy-.8,fx+5.4,fy+.2-lf*.25,fx+7,fy+1.8-lf*.2,fx+5,fy+2.1,fx-3.6,fy+2.1,fx-3.8,fy-.4],c2,'rgba(0,0,0,.45)',.6);
sl(fx-3.4,fy+1.8,fx+5.6,fy+1.8,'rgba(0,0,0,.5)',1);
sl(ax-w*2,ay+.9,ax+w*2,ay+.9,'rgba(255,240,210,.14)',.7);
return[hx+dx*.5,hy+dy*.5,fx,fy];
}
function rbn(sx,sy,len,sn,cs,cw,c1,c2,ph,wd){
const n=9,A=[],B=[],C=[],hb=len*(.26+sn*.6),vb=len*(.84-sn*.26);
for(let k=0;k<=n;k++){const t=k/n,x=sx-t*hb-cs*t*.4+cw*t+M.sin(T*5.5-t*5+ph)*(.8+sn*2.8)*t,y=sy+t*vb+M.sin(T*4.4-t*4+ph)*(.5+sn*1.2)*t,w=wd*(1-t*.45);A.push([x+w*.45,y]);B.push([x-w,y+t*.6]);C.push([x-w*.28,y])}
const P=[],Q=[];
for(let k=0;k<=n;k++)P.push(A[k][0],A[k][1]);
for(let k=n;k>=0;k--)P.push(B[k][0],B[k][1]);
poly(P,c1,'rgba(0,0,0,.38)',.7);
for(let k=0;k<=n;k++)Q.push(A[k][0],A[k][1]);
for(let k=n;k>=0;k--)Q.push(lr(A[k][0],B[k][0],.5),lr(A[k][1],B[k][1],.5));
poly(Q,c2);
const e=A[n],f=B[n];
for(let k=0;k<4;k++){const u=k/4,v=(k+1)/4,sw=M.sin(T*7+k*1.9+ph)*1.2;poly([lr(e[0],f[0],u),lr(e[1],f[1],u),lr(e[0],f[0],(u+v)/2)+sw,lr(e[1],f[1],(u+v)/2)+4.2+(k&1)*1.6,lr(e[0],f[0],v),lr(e[1],f[1],v)],c1)}
return C;
}
function rbfx(A,k,sd){
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
for(let i=1;i<A.length;i++){
const a=A[i],tw=.5+.5*M.sin(T*6+i*1.9+sd);
if(k==0){
poly([a[0],a[1]-1.8,a[0]+1,a[1],a[0],a[1]+1.8,a[0]-1,a[1]],'rgba(215,238,255,'+(.35+tw*.55)+')');
if(i%3==0)gl('c',a[0],a[1],5+tw*3,.22+tw*.2);
}else{
const b=A[i-1];
g.globalAlpha=.35+tw*.55;g.strokeStyle='rgb(200,150,255)';g.lineWidth=.8;
g.beginPath();zig(b[0],b[1],a[0],a[1],2.2,M.floor(T*18)*3.1+i*5+sd);g.stroke();
if(i%3==0)gl('z',a[0],a[1],5+tw*3,.22+tw*.25);
}}
g.restore();
}
function pld(x,y,c1,c2,k){
poly([x-5.4,y+1,x-4.2,y-3.4,x,y-4.6,x+4.6,y-3,x+5.6,y+1.4,x+2,y+3.2,x-2.6,y+3],c1,'rgba(0,0,0,.5)',.7);
poly([x-5.4,y+1,x-4.2,y-3.4,x-1.4,y-4.2,x-2.6,y+3],'rgba(255,255,255,.14)');
poly([x+.4,y+3,x+5.6,y+1.4,x+2,y+3.2],c2);
sqSpk(x-1.6,y-3.6,-1.9,6.4*k,1.7,c2,'rgba(0,0,0,.5)');
sqSpk(x+2.6,y-3.4,-1.2,5*k,1.4,c2,'rgba(0,0,0,.5)');
sl(x-3.4,y+.4,x+3.6,y+.8,'rgba(0,0,0,.3)',.7);
}
function sqLb(x0,y0,x1,y1,x2,y2,w,c){
const a=[[x0,y0,x1,y1,3.3*w,2.5*w],[x1,y1,x2,y2,2.6*w,1.7*w]];
g.fillStyle=c;
for(const q of a){const dx=q[2]-q[0],dy=q[3]-q[1],d=M.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d;
g.beginPath();g.moveTo(q[0]+nx*q[4],q[1]+ny*q[4]);g.lineTo(q[2]+nx*q[5],q[3]+ny*q[5]);g.lineTo(q[2]-nx*q[5],q[3]-ny*q[5]);g.lineTo(q[0]-nx*q[4],q[1]-ny*q[4]);g.closePath();g.fill()}
const ba=M.atan2(y1-y0,x1-x0),fa=M.atan2(y2-y1,x2-x1);
ov(x0,y0,3.5*w,3.3*w,c);
ov(lr(x0,x1,.4)-M.sin(ba)*1,lr(y0,y1,.4)+M.cos(ba)*1,2.7*w,3*w,c,ba);
ov(x1,y1,2.6*w,2.6*w,c);
ov(lr(x1,x2,.3)-M.sin(fa)*.8,lr(y1,y2,.3)+M.cos(fa)*.8,2.6*w,2.1*w,c,fa);
g.strokeStyle='rgba(255,245,220,.13)';g.lineWidth=.8;g.beginPath();g.moveTo(x0+1,y0-2.4*w);g.lineTo(x1,y1-2*w);g.stroke();
g.strokeStyle='rgba(0,0,0,.22)';g.beginPath();g.moveTo(x1,y1+2*w);g.lineTo(x2,y2+1.5*w);g.stroke();
}
function sqHd(x,y,a,c,w){
const ca=M.cos(a),sa=M.sin(a);
ov(x+ca*1,y+sa*1,2.7*w,2.3*w,c,a);
ov(x+ca*3,y+sa*3,1.5*w,1.9*w,c,a);
sl(x+ca*1.4-sa*1.1,y+sa*1.4+ca*1.1,x+ca*4.2-sa*1.1,y+sa*4.2+ca*1.1,c,1.1*w);
sl(x+ca*1.4+sa*1.1,y+sa*1.4-ca*1.1,x+ca*4.2+sa*1.1,y+sa*4.2-ca*1.1,c,1.1*w);
g.strokeStyle='rgba(0,0,0,.28)';g.lineWidth=.6;g.beginPath();g.moveTo(x+ca*2.6-sa*1.4,y+sa*2.6+ca*1.4);g.lineTo(x+ca*2.6+sa*1.4,y+sa*2.6-ca*1.4);g.stroke();
}
function sqArm(col,hand,th,L,shy,w){
const r=ik(1.5,shy,1.5+M.cos(th)*L,shy+M.sin(th)*L,11,11,1);
sqLb(1.5,shy,r[0],r[1],r[2],r[3],w,col);
sqHd(r[2],r[3],M.atan2(r[3]-r[1],r[2]-r[0]),hand,w);
return r;
}
function sqEye(x,y,w,c,k){
poly([x,y+w*.1,x+w*.55,y-w*.28,x+w,y-w*.5,x+w*.9,y+w*.12,x+w*.4,y+w*.3],c);
gl(k,x+w*.55,y,w*1.5,.5);
}
function sqSpk(x,y,a,l,w,f,s){
const c=M.cos(a),d=M.sin(a);
poly([x-d*w,y+c*w,x+c*l,y+d*l,x+d*w,y-c*w],f,s,.5);
}

function sqFc(x,y,sk,sd,ey,ek){
poly([x-2.6,y+3.6,x+2.2,y+3.6,x+2.6,y+11,x-2.4,y+11],sd);
ov(x-.8,y-.6,5.6,5.8,sk);
poly([x-2.4,y+.6,x+4.4,y-.4,x+5.8,y+2.4,x+4.6,y+5.8,x+1.2,y+7,x-2.8,y+4.8],sk);
poly([x-6.4,y-1,x-2,y-4,x-1.6,y+4.4,x-5.6,y+3.4],sd);
poly([x+4.6,y+.4,x+7.2,y+2.6,x+4.8,y+3.2],sk);
sl(x+4.8,y+1.8,x+6.6,y+2.6,'rgba(0,0,0,.25)',.6);
sqEye(x+2.6,y-.4,3,ey,ek);
sl(x+1.4,y-2.6,x+6.4,y-1.6,'#120c08',1.5);
sl(x+3,y+4.6,x+5.4,y+4.2,'rgba(40,10,12,.75)',.8);
sl(x+1.2,y+5,x+1.6,y+1.4,'rgba(0,0,0,.18)',.8);
}
function og(x,y,r,c,a){const q=g.createRadialGradient(x,y,0,x,y,r);q.addColorStop(0,'rgba('+c+','+a+')');q.addColorStop(1,'rgba('+c+',0)');g.save();g.globalCompositeOperation='lighter';g.fillStyle=q;g.beginPath();g.arc(x,y,r,0,TAU);g.fill();g.restore()}
function sqFur(x,y,w,c1,c2,k){
g.fillStyle=c1;g.beginPath();g.moveTo(x-w,y);
for(let i=0;i<=7;i++){const u=i/7;g.lineTo(x-w+u*w*2,y-3.2*M.sin(u*PI)-1.2);g.lineTo(x-w+(u+.07)*w*2,y+1.6+(i&1?2.8:.8)+M.sin(T*3.4+i)*.5*(1+k))}
g.closePath();g.fill();g.strokeStyle='rgba(0,0,0,.45)';g.lineWidth=.7;g.stroke();
for(let i=0;i<5;i++)sl(x-w+2+i*w*.42,y-1.4,x-w+1.4+i*w*.42,y+2.6,c2,.8);
}
function hLeg(q,sn,hx,hp,c1,c2,cb,ca,w){
const L=M.max(14,-5.2-hp),lf=M.max(0,M.cos(q))*3.4*sn,L2=L-lf;
const ax=hx+(hx<0?-.4:.4)+M.sin(q)*sn*5.2,ay=hp+L2;
const dx=ax-hx,dy=ay-hp,d=M.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d;
const P=(t,v)=>[hx+dx*t+nx*v*w,hp+dy*t+ny*v*w];
const sg=(a,b,wa,wb,c,s)=>{const p=P(a,-wa),r=P(b,-wb),u=P(b,wb),v=P(a,wa);poly([p[0],p[1],r[0],r[1],u[0],u[1],v[0],v[1]],c,s,.6)};
sg(0,.52,3.7,2.8,c1,'rgba(0,0,0,.5)');
sg(.5,.92,2.8,2.1,c2,'rgba(0,0,0,.5)');
let a=P(.05,-2.3),b=P(.5,-1.6);
sl(a[0],a[1],b[0],b[1],'rgba(255,240,210,.14)',.8);
a=P(.5,-1.6);b=P(.9,-1.2);
sl(a[0],a[1],b[0],b[1],'rgba(255,240,210,.1)',.7);
a=P(.5,-2.8);b=P(.5,2.8);
sl(a[0],a[1],b[0],b[1],'rgba(0,0,0,.3)',.7);
const k=P(.5,0);
poly([k[0]-2.6,k[1]-1,k[0],k[1]-2.4,k[0]+2.6,k[1]-1,k[0]+2.2,k[1]+2,k[0]-2.2,k[1]+2],cb,ca,.6);
poly([ax-2.9,ay-7,ax+2.9,ay-7,ax+2.5,ay-.8,ax+4.6,ay+.8,ax+6.8,ay+3.2,ax+6.6,ay+5.2,ax-3.2,ay+5.2,ax-3.1,ay+1.4,ax-2.7,ay-2],cb,'rgba(0,0,0,.55)',.7);
poly([ax-2.9,ay-7,ax-1,ay-7,ax-1.2,ay+1.2,ax-3.1,ay+1.4],'rgba(255,255,255,.1)');
sl(ax-3.1,ay+4.6,ax+6.7,ay+4.6,'rgba(0,0,0,.55)',1.2);
sl(ax-2.8,ay-3.6,ax+2.8,ay-3.4,ca,1.1);
sl(ax-2.6,ay-6.2,ax+2.6,ay-6,ca,1.1);
return[ax,ay];
}
function sqArrow(nk,hd,k){
sl(nk+3,0,hd-5,0,'#5a4128',1.5);
sl(nk+3,-.5,hd-5,-.5,'rgba(255,235,190,.4)',.5);
poly([nk+.4,0,nk+2.4,-3.3,nk+8.6,-3.3,nk+9.8,0],'#e6dcc2','rgba(0,0,0,.45)',.5);
poly([nk+.4,0,nk+2.4,3.3,nk+8.6,3.3,nk+9.8,0],'#6ff0d0','rgba(0,0,0,.45)',.5);
sl(nk+1.2,0,nk+9,0,'rgba(0,0,0,.35)',.6);
sl(nk+3.4,-1.8,nk+8,-1.8,'rgba(0,0,0,.2)',.5);
ov(nk,0,.9,1.2,'#f2ead2');
poly([hd,0,hd-6.4,-2.9,hd-4.4,0,hd-6.4,2.9],'#e6f6ec','#2a3a30',.4);
poly([hd,0,hd-6.4,-2.9,hd-4.4,0],'rgba(255,255,255,.55)');
sl(hd-8,0,hd-4.4,0,'#8a7550',2);
sl(hd-4.6,0,hd-.4,0,'#8fb8a0',.5);
gl('g',hd-3,0,8+k*10,.3+k*.5);
}
