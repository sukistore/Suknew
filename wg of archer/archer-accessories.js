function evMk(hx,hh){
const v=p.vt;
g.save();
g.beginPath();g.ellipse(hx+3.6,hh+.6,4.6,5.2,0,0,TAU);g.clip();
g.fillStyle=PV.arm2[v];
g.beginPath();g.moveTo(hx-2,hh+3.1);g.quadraticCurveTo(hx+3,hh+1.1,hx+9,hh+1.6);g.lineTo(hx+9,hh+7);g.lineTo(hx-2,hh+7);g.closePath();g.fill();
g.strokeStyle=PV.rm[v];g.lineWidth=.8;g.lineCap='round';
g.beginPath();g.moveTo(hx-2,hh+3.1);g.quadraticCurveTo(hx+3,hh+1.1,hx+9,hh+1.6);g.stroke();
g.lineWidth=.6;g.beginPath();
for(let k=0;k<3;k++){const x=hx+1.2+k*2.2;g.moveTo(x,hh+2.8+k*.15);g.lineTo(x-.6,hh+6)}
g.stroke();
g.lineWidth=.9;
g.beginPath();g.moveTo(hx+.6,hh-2.6);g.lineTo(hx+4,hh-2.2);g.lineTo(hx+8.4,hh-3.2);g.stroke();
if(v>=2){
g.fillStyle='#f4efe0';
poly([hx+2.6,hh+1.9,hx+3.8,hh+1.8,hx+3.2,hh+3.8]);
poly([hx+5.4,hh+1.7,hx+6.6,hh+1.7,hx+6,hh+3.6]);
}
g.restore();
}
function evHn(hx,hh,v){
const fl=v==2,e=AE[v],L=fl?11:12;
g.lineJoin='round';g.lineCap='round';
for(let s=0;s<2;s++){
const o=s?1:-1,bx=hx-3+s*6.2,by=hh-7.4,cx=bx+o*(fl?7:5.5),cy=by-L*.55,tx=bx+(fl?o*4:-5-(s?0:1.5)),ty=by-L-(fl?3:2);
g.beginPath();g.moveTo(bx-2.6,by);g.quadraticCurveTo(cx-1.4,cy,tx,ty);g.quadraticCurveTo(cx+2,cy+1,bx+2.6,by);g.closePath();
g.fillStyle=s?PV.pd[v]:PV.arm2[v];g.fill();
g.strokeStyle=PV.tr[v];g.lineWidth=.6;g.stroke();
g.strokeStyle='rgba(6,8,16,.35)';g.lineWidth=.7;
for(let k=1;k<4;k++){
const t=k*.2+.12,u=1-t,px=u*u*bx+2*u*t*cx+t*t*tx,py=u*u*by+2*u*t*cy+t*t*ty,dx=2*u*(cx-bx)+2*t*(tx-cx),dy=2*u*(cy-by)+2*t*(ty-cy),dl=M.hypot(dx,dy)||1,w=2-t*1.4;
g.beginPath();g.moveTo(px-dy/dl*w,py+dx/dl*w);g.lineTo(px+dy/dl*w,py-dx/dl*w);g.stroke();
}
gl(e.k,tx,ty,6,.35+.12*M.sin(T*4+s*2));
}
}
function evHd(hx,hh,tx,ty){
const v=p.vt,cx=hx+3.6,cy=hh+.6;
g.lineCap='round';g.lineJoin='round';
g.strokeStyle=v?PV.pd[v]:'#5a4030';g.lineWidth=1.9;
g.beginPath();g.ellipse(cx,cy,5.4,6,0,-2.8,-.15);g.stroke();
g.strokeStyle=PV.bk[v];g.lineWidth=.45;g.setLineDash([1.2,1.4]);
g.beginPath();g.ellipse(cx,cy,5.4,6,0,-2.8,-.15);g.stroke();g.setLineDash([]);
const gx=cx+M.cos(-1.25)*5.4,gy=cy+M.sin(-1.25)*6;
ov(gx,gy,1.5+v*.1,1.8+v*.1,PV.bk[v]);
ov(gx-.4,gy-.5,.5,.6,'rgba(255,255,255,.85)');
gl(AE[v].k,gx,gy,6,.3+.1*M.sin(T*3));
}
function evGv(ex,ey,hx,hy,c,r,v){
const dx=hx-ex,dy=hy-ey,dl=M.hypot(dx,dy)||1,ux=dx/dl,uy=dy/dl,nx=-uy,ny=ux,an=M.atan2(uy,ux);
g.lineCap='round';
g.strokeStyle=v?PV.pd[v]:'#5a4030';g.lineWidth=5.7;
g.beginPath();g.moveTo(hx-ux*4.4,hy-uy*4.4);g.lineTo(hx-ux*2.2,hy-uy*2.2);g.stroke();
g.strokeStyle=PV.rm[v];g.lineWidth=.6;
g.beginPath();g.moveTo(hx-ux*2.2+nx*2.8,hy-uy*2.2+ny*2.8);g.lineTo(hx-ux*2.2-nx*2.8,hy-uy*2.2-ny*2.8);g.stroke();
ov(hx+nx*r*.8+ux*.2,hy+ny*r*.8+uy*.2,r*.55,r*.38,c,an+.6);
g.fillStyle=c;g.beginPath();g.arc(hx,hy,r,0,TAU);g.fill();
for(let k=-1;k<=1;k++)ov(hx+ux*r*.75-nx*k*r*.55,hy+uy*r*.75-ny*k*r*.55,r*.5,r*.38,c,an);
g.fillStyle='rgba(6,8,16,.18)';
for(let k=-1;k<=1;k++){g.beginPath();g.ellipse(hx+ux*r*1.15-nx*k*r*.55,hy+uy*r*1.15-ny*k*r*.55,r*.12,r*.34,an,0,TAU);g.fill()}
ov(hx-nx*r*.35-ux*.3,hy-ny*r*.35-uy*.3,r*.3,r*.22,'rgba(255,255,255,.22)',an);
}
function evBt(kx,ky,fx,fy,v){
const mx=lr(kx,fx,.45),my=lr(ky,fy,.45),dx=fx-kx,dy=fy-ky,dl=M.hypot(dx,dy)||1,nx=-dy/dl,ny=dx/dl;
g.lineCap='round';g.lineJoin='round';
g.strokeStyle=PV.arm2[v];g.lineWidth=5.2;
g.beginPath();g.moveTo(mx,my);g.lineTo(fx,fy);g.stroke();
g.strokeStyle='rgba(6,8,16,.2)';g.stroke();
ov(fx+3.2,fy+.1,2.9,2.4,PV.arm2[v]);
g.strokeStyle='rgba(255,255,255,.14)';g.lineWidth=.8;
g.beginPath();g.arc(fx+3.2,fy+.1,2,-2.6,-.6);g.stroke();
g.strokeStyle=PV.pd[v];g.lineWidth=1;
g.beginPath();g.moveTo(mx-nx*2.7,my-ny*2.7);g.lineTo(mx+nx*2.7,my+ny*2.7);g.stroke();
g.strokeStyle='rgba(6,8,16,.6)';g.lineWidth=1.1;
g.beginPath();g.moveTo(fx-2,fy+2.1);g.lineTo(fx+6.2,fy+2.1);g.stroke();
if(v>=2)poly([fx-2.4,fy-1,fx-6-v*.5,fy-3-v*.4,fx-3.6,fy+.4],PV.pd[v]);
}
