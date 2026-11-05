function alStaff(hx,hy,bt,ad){
const s=M.sin(bt),c=M.cos(bt),tx=hx+s*34,ty=hy-c*34,bx=hx-s*32,by=hy+c*32;
g.lineCap='round';g.lineJoin='round';
sl(bx,by,tx,ty,alK[0],3.8);sl(bx,by,tx,ty,alK[2],2.4);
sl(bx+.6,by,tx+.6,ty,alBR,.6);
for(let i=1;i<5;i++){const u=i/5,x=lr(bx,tx,u),y=lr(by,ty,u);sl(x-1.5,y+.5,x+1.5,y-.5,alK[4],.9)}
ov(bx,by,2,1.6,alK[4]);
g.save();g.translate(tx,ty);g.rotate(bt);
g.strokeStyle=alK[0];g.lineWidth=2.6;g.beginPath();g.moveTo(-1.6,-1);g.quadraticCurveTo(-6.2,-6,-3.2,-13);g.moveTo(1.6,-1);g.quadraticCurveTo(6.2,-6,3.2,-13);g.stroke();
g.strokeStyle=alK[4];g.lineWidth=1;g.stroke();
poly([0,-21,3.9,-13.6,1.4,-8.4,-1.4,-8.4,-3.9,-13.6],alK[4],alK[0],.8);
poly([0,-18.4,1.7,-13.6,0,-10.4,-1.7,-13.6],alK[5]);
g.restore();
}
function alDraw(part){
alLyOn();
const sx=1+p.sq*.55,sy=1-p.sq*.55+p.air*M.min(.1,M.abs(p.vy)/6000);
const sn=M.min(1,M.abs(p.vx)/190),ph=p.wk,id=M.sin(T*1.9),da=M.max(0,p.da||0),ce=p.ch||0,w=alW(),pz=alPose();
const th0=M.sin(ph)*.4*sn,T1=lr(th0,.2,p.air)+.02*(1-sn),T2=lr(-th0,-.16,p.air)-.02*(1-sn);
const LL=29,hipY=-LL*M.cos(M.min(M.abs(T1),M.abs(T2))),B=hipY+LL+id*.3;
const leg=(th,hx)=>{
const fx=hx+M.sin(th)*LL,fy=hipY+M.cos(th)*LL;
g.lineCap='round';g.lineJoin='round';
sl(hx,hipY,fx,fy,alK[0],5.4);
sl(hx+1.3,hipY+4,fx+1.1,fy,alBR,.8);
poly([fx-2.9,fy-8,fx+2.8,fy-8,fx+3.2,fy-2.4,fx+7.6,fy-.8,fx+7.4,fy+.8,fx-3.4,fy+.8],alK[1],alK[0],.8);
sl(fx-3.3,fy+.5,fx+7.3,fy+.5,alK[4],.9);
sl(fx-2.9,fy-7.4,fx+2.9,fy-7.4,alK[4],1);
};
const fx0=10+M.sin(ph)*2*sn,fy0=-34+B;
let FX=lr(lr(fx0,15.6-p.rc*2.4,da),6,pz.up),FY=lr(lr(fy0,-45+B,da),-71+B,pz.up);
FX=lr(FX,23,pz.th);FY=lr(FY,-52+B,pz.th);
let bt=lr(lr(.05+M.sin(ph)*.06*sn,.02,da),.22,pz.up);bt=lr(bt,1.2,pz.th)+pz.sw;
const nkx=lr(9,0,ce);
let BX=lr(lr(-3.2-M.sin(ph)*2.4*sn,nkx,da),-5,pz.up),BY=lr(lr(-28+B,-45+B,da),-67+B,pz.up);
BX=lr(BX,-6,pz.th);BY=lr(BY,-40+B,pz.th);
const arm=(sx0,sy0,tx,ty,s)=>{
const r=ik(sx0,sy0,tx,ty,12.2,11.4,s),ex=r[0],ey=r[1],hx=r[2],hy=r[3];
const dx=hx-ex,dy=hy-ey,d=M.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d;
sl(sx0,sy0,ex,ey,alK[0],6.4);sl(sx0,sy0,ex,ey,alK[2],4.8);
poly([ex+nx*2.6,ey+ny*2.6,hx+nx*3.9,hy+ny*3.9,hx-nx*3.9,hy-ny*3.9,ex-nx*2.6,ey-ny*2.6],alK[2],alK[0],.9);
sl(ex+nx*2.4,ey+ny*2.4,hx+nx*3.7,hy+ny*3.7,alBR,.7);
poly([hx+nx*3.9,hy+ny*3.9,hx-nx*3.9,hy-ny*3.9,hx-nx*2+w*.55,hy-ny*2+8+M.sin(T*4.1)*1.3,hx+nx*2+w*.3,hy+ny*2+6],alK[1],alK[4],.7);
sl(hx+nx*3.9,hy+ny*3.9,hx-nx*3.9,hy-ny*3.9,alK[4],1.1);
ov(hx+.4,hy+.9,2.2,2.4,alK[0]);
return[hx,hy];
};
g.save();g.translate(p.x,p.y);g.scale(p.f*sx,sy);g.translate(0,-pz.lf);
if(part==0){
g.save();g.translate(0,-26+B);
if(wgT()==1&&p.wa>.01)evWn(p.wa,p.wp);
if(wgT()==2)ev5W();
g.restore();
const lf=pz.up*5;
const gr=g.createLinearGradient(-17+w*2,0,-3,0);gr.addColorStop(0,'#3a0a17');gr.addColorStop(.34,'#3a0a17');gr.addColorStop(.4,'#240812');gr.addColorStop(.68,'#240812');gr.addColorStop(.74,'#12070d');gr.addColorStop(1,'#12070d');
g.beginPath();g.moveTo(-3.6,-46.5+B);g.quadraticCurveTo(-6.6,-30,-6,-20);
const bp=[[-11,-9],[-6.6,-11.4],[-12,-8.2],[-5.6,-10.6],[-10,-9.6]];
for(let i=0;i<bp.length;i++)g.lineTo(bp[i][0]+w*(2.5-i*.35)+M.sin(T*3.1+i*1.4)*1.2-pz.up*i*.8,bp[i][1]-lf+M.sin(T*4.3+i)*1.2);
g.lineTo(-3,-12);g.closePath();g.fillStyle=gr;g.fill();
g.strokeStyle=alBR;g.lineWidth=.7;g.stroke();
leg(T2,-1.6);
if(da>.02||pz.up>.02||pz.th>.02){const h=arm(-1.6,-47.5+B,BX,BY,BY<-55?-1:1)}
else arm(-1.6,-47.5+B,BX,BY,1);
const nx=-1.8,ny=-50+B;
upSf(DT,p.x+p.f*sx*nx,p.y-pz.lf+sy*ny);
}else{
leg(T1,1.6);
const hem=[];
for(let i=0;i<=6;i++){const u=i/6;hem.push([lr(-8.4+w*1.35+T2*6,8.4+w*.3+T1*6,u)+(u-.5)*pz.up*9+M.sin(T*3.4+i)*.7,-6.6+(i&1?1.9:0)+M.sin(T*4.4+i*1.2)*(1.1+sn*.9)-pz.up*(2+3*M.sin(u*PI))])}
g.beginPath();g.moveTo(-4.6,-47.5+B);
g.quadraticCurveTo(-5.4,-40+B,-4.1,-34+B);
g.quadraticCurveTo(-5.6+w*.3,-20,hem[0][0],hem[0][1]);
for(let i=1;i<=6;i++)g.lineTo(hem[i][0],hem[i][1]);
g.quadraticCurveTo(5.8,-20,4.4,-34+B);
g.quadraticCurveTo(5.4,-41+B,4.6,-47.5+B);
g.closePath();
const rg=g.createLinearGradient(-9,0,9,0);rg.addColorStop(0,'#0a0610');rg.addColorStop(.4,'#0a0610');rg.addColorStop(.46,alK[2]);rg.addColorStop(.74,alK[2]);rg.addColorStop(.8,alK[3]);rg.addColorStop(1,alK[3]);
g.fillStyle=rg;g.fill();g.strokeStyle=alK[0];g.lineWidth=1;g.stroke();
g.strokeStyle=alBR;g.lineWidth=.9;g.beginPath();g.moveTo(4.6,-47.5+B);g.quadraticCurveTo(5.4,-41+B,4.4,-34+B);g.quadraticCurveTo(5.8,-20,hem[6][0],hem[6][1]);g.stroke();
g.strokeStyle='rgba(0,0,0,.45)';g.lineWidth=.8;g.beginPath();
for(const i of[1,3,5]){g.moveTo(lr(-3.6,3.8,i/6),-33+B);g.lineTo(hem[i][0],hem[i][1])}
g.stroke();
poly([-4.5,-36+B,4.6,-36+B,4.5,-32.8+B,-4.3,-32.8+B],alK[6],alK[0],.8);
poly([2,-37+B,3.6,-34.4+B,2,-31.8+B,.4,-34.4+B],alK[5],alK[0],.5);
const ga=.65+.3*M.sin(T*3);
g.strokeStyle='rgba(196,42,66,'+ga+')';g.lineWidth=1;g.beginPath();g.moveTo(2.6,-9);g.lineTo(2.6,-29+B);g.stroke();
poly([2.6,-31.4+B,.6,-27.6+B,4.6,-27.6+B],'rgba(196,42,66,'+ga+')');
g.strokeStyle='rgba(196,42,66,'+ga+')';g.lineWidth=.8;g.beginPath();g.moveTo(2.6,-10);g.lineTo(.8,-12.6);g.moveTo(2.6,-10);g.lineTo(4.4,-12.6);g.stroke();
poly([-5.6,-48+B,-2.6,-53.4+B,4.4,-49.6+B,3.4,-47+B],alK[1],alBR,.7);
const hx=1.7+sn*.5,hy=-58+B,hw=M.max(-9,w);
sl(0,-48+B,hx-.4,hy+5,alK[0],3.6);
ov(hx,hy+.4,5.2,5.7,alK[7]);
g.strokeStyle=alBR;g.lineWidth=.7;g.beginPath();g.ellipse(hx,hy+.4,5.2,5.7,0,-1.1,1.1);g.stroke();
const eh=p.bl<0?.25:1.5;
ov(hx+3,hy+.9,2.1,eh*.62,alK[5],-.2);ov(hx+.4,hy+1.1,1.5,eh*.5,'#c42a42',-.1);
const tipX=hx-5.5+hw*1.4+M.sin(T*3.3)*1.2,tipY=hy-27+M.sin(T*2.6)*.8;
g.beginPath();g.moveTo(hx-6.8,hy-4.4);g.quadraticCurveTo(hx-7.4,hy-16,tipX,tipY);g.quadraticCurveTo(hx+2.5,hy-17,hx+5.8,hy-4.4);g.closePath();
const hg=g.createLinearGradient(hx-8,0,hx+6,0);hg.addColorStop(0,'#0a0610');hg.addColorStop(.45,'#0a0610');hg.addColorStop(.51,alK[1]);hg.addColorStop(.8,alK[1]);hg.addColorStop(.86,alK[3]);hg.addColorStop(1,alK[3]);
g.fillStyle=hg;g.fill();g.strokeStyle=alK[0];g.lineWidth=.8;g.stroke();
g.strokeStyle=alBR;g.lineWidth=.8;g.beginPath();g.moveTo(hx+5.8,hy-4.4);g.quadraticCurveTo(hx+2.5,hy-17,lr(hx+3,tipX,.7),lr(hy-14,tipY,.7));g.stroke();
g.strokeStyle='#4a2236';g.lineWidth=1.5;g.beginPath();g.moveTo(hx-3.2,hy-8.6);g.quadraticCurveTo(hx-.2,hy-11.2,hx+2.6,hy-8.9);g.stroke();
ov(hx-.6,hy-3.9,11.8,2.7,alK[0],-.06);
g.strokeStyle=alBR;g.lineWidth=.8;g.beginPath();g.ellipse(hx-.6,hy-3.9,11.8,2.7,-.06,.15,PI-.15);g.stroke();
poly([hx-6.9,hy-5.6,hx+5.9,hy-5.6,hx+6.1,hy-3.4,hx-7.1,hy-3.4],alK[6],alK[0],.6);
poly([hx+3.6,hy-7.1,hx+5.4,hy-4.5,hx+3.6,hy-2.2,hx+1.8,hy-4.5],alK[4],alK[0],.6);
alStaff(FX,FY,bt,da+pz.th*.8+pz.up*.6);
const fh=arm(3.2,-47.5+B,FX,FY,FY<-55?-1:1);
const oc=M.max(pz.up*.9,pz.th);
if(oc>.04){const ox=FX+M.sin(bt)*58,oy=FY-M.cos(bt)*58,z=.35+oc*.65;g.save();g.translate(ox,oy);g.scale(z,z);if(alS.on||alS.o2||alS.u){orb6(T);if(!alS.u)alBatOrb(T,1)}else alBatOrb(T);g.restore()}
}
g.restore();
alLyOff();
}
