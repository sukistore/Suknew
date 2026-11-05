function drawP(part){
if(p.vt==6){alDraw(part);return}
const sn=M.min(1,M.abs(p.vx)/190),ph=p.wk,id=M.sin(T*1.9),ce=p.ch,da=p.da,sh=p.sh;
const sx=(1+p.sq*.55)*(1+p.vt*.03),sy=(1-p.sq*.55+p.air*M.min(.1,M.abs(p.vy)/6000))*(1+p.vt*.03);
const hy=-26-(1-M.abs(M.sin(ph)))*2.4*sn*(1-p.air)+id*.45;
const ln=p.vt==5?0:sn*.05-.02-p.rc*.1+(p.dr?.04+ce*.04:0)-p.vy*p.air*.00011+M.sin(ph)*.025*sn+id*.01*(1-sn);
const fa=M.max(0,M.min(1,(150-p.vy)/500));
const wx=M.sin(ph)*.5*sn+M.sin(T*.8)*.4*(1-sn)*(1-p.air),lg=M.max(-1,M.min(1,(p.vx-p.cv)*p.f/260));
const sw=M.sin(ph)*4*sn,shy=-19+id*.3,jt=M.sin(T*55)*.35*M.max(0,(ce-.85)/.15);
const FX=lr(lr(lr(11-sw*.4,21,da),14,sh),25,p.ga)-p.rc*2.5;
const FY=lr(lr(lr(-9-M.abs(M.cos(ph))*.8*sn,-20,da),-16,sh),-23,p.ga)+jt;
const BX=lr(lr(-1-sw,18-ce*13,da*(1-sh)),22,p.ga),BY=lr(lr(-8,-21,da*(1-sh)),-24,p.ga);
const fp=o=>{
const q=ph+o,a=o?1:0;
const x=M.sin(q)*12*sn+(a?-3:3)*(1-sn),y=-M.max(0,M.cos(q))*5.5*sn;
const ax=a?-3-2*fa:4+3*fa,ay=a?-1-4*fa:-3-8*fa;
return[lr(x,ax,p.air),lr(y,ay,p.air)-2.3];
};
const leg=(o,hx,c1,c2)=>{
const f=fp(o);
const k=limb(hx,hy,f[0],f[1],p.vt==5?0:.6+M.max(0,-2.3-f[1])*.3,c1,c2,1);
g.strokeStyle='rgba(255,255,255,.12)';g.lineWidth=1.5;g.beginPath();g.moveTo(hx+1.3,hy);g.lineTo(k[0]+1.3,k[1]);g.lineTo(f[0]+1.3,f[1]-.5);g.stroke();
if(p.vt==5)s25([hx,hy,k[0],k[1],f[0],f[1]],6.2,4.8);
evBt(k[0],k[1],f[0],f[1],p.vt);
};
g.save();g.translate(p.x,p.y);g.scale(p.f*sx,sy);
if(part==0){
leg(PI,-1.5,'#141b27','#241a14');
g.save();g.translate(wx,hy);g.rotate(ln);
if(p.vt==4)evWg(sn);
if(wgT()==1&&p.wa>.01){const o=PFX;PFX=.1;evWn(p.wa,p.wp);PFX=o}
if(wgT()==2){const o=PFX;PFX=.1;ev5W();PFX=o}
if(p.vt==5)ev5R(0,-1,13);
const cs=sn*5+p.air*3+id*.6,cw=M.sin(T*2.3)*1.3+M.sin(T*5.1+1)*.5*sn,cl=p.vt*2.6,cx=-5.2-p.vt*.8-cs+cw-lg*5;
g.fillStyle=PV.cape[p.vt];g.beginPath();g.moveTo(-3,-20);
g.quadraticCurveTo(-5.8-cs*.6,-8,cx,12+cl);
if(p.vt>=2){for(let k=1;k<=4;k++){const t=k/4;g.lineTo(lr(cx,3,t),12+cl+(k&1?-3:1.6)+M.sin(T*3+k)*.8)}}
else g.quadraticCurveTo(-2+cw*.5,14.5+cl,3,11.5+cl);
g.lineTo(4.5,-17);g.closePath();g.fill();shP(cx-4,4.5,.4,.06);if(p.vt==5)c25(cx,cl);
g.strokeStyle=PV.tr[p.vt];g.lineWidth=.9+p.vt*.25;g.stroke();
g.save();g.translate(-5.5,-13);g.rotate(-.38);
g.fillStyle='#5a4030';g.fillRect(-2.6,-9,5.2,17);
g.fillStyle='#3d2a1e';g.fillRect(-2.6,-9,5.2,2);
g.strokeStyle='#4f8f86';g.lineWidth=1.3;
for(let k=0;k<3;k++){g.beginPath();g.moveTo(-1.5+k*1.5,-9);g.lineTo(-2+k*1.8,-14.5);g.stroke()}
g.restore();
const r=ik(-1,shy,BX,BY,11,11,1);
const ex=lr(r[0],-7,da*(1-sh)),ey=lr(r[1],-20,da*(1-sh));
const hx=lr(r[2],BX,da*(1-sh)),hyy=lr(r[3],BY,da*(1-sh));
g.lineCap='round';g.lineJoin='round';g.strokeStyle=PV.arm2[p.vt];g.lineWidth=4.6;
g.beginPath();g.moveTo(-1,shy);g.lineTo(ex,ey);g.lineTo(hx,hyy);g.stroke();
g.strokeStyle='rgba(6,8,16,.22)';g.stroke();shL();
if(p.vt==5)s25([-1,shy,ex,ey,hx,hyy],4.6,4.6);
evGv(ex,ey,hx,hyy,'#a8825f',2.2,p.vt);
g.fillStyle=PV.tun[p.vt];g.beginPath();g.moveTo(-5.5,1);g.lineTo(5.5,1);
g.quadraticCurveTo(7,-9,6,-18);g.lineTo(-.5,-21.5);g.lineTo(-6,-18);
g.quadraticCurveTo(-6.5,-9,-5.5,1);g.closePath();g.fill();shP(-6.5,7,.36,.16);if(p.vt==5)b25(-6.5,7,-21.5,1);
g.strokeStyle='#4a3524';g.lineWidth=1.8;g.beginPath();g.moveTo(-4,-19);g.lineTo(5.2,-3);g.stroke();
if(p.vt>=1){
g.globalAlpha=.7;
poly([-5.6,-18,5.8,-18,5.2,-9,0,-5,-5.2,-9],PV.pd[p.vt],PV.tr[p.vt],.8);
g.globalAlpha=1;
}
if(p.vt>=2){
poly([-5.6,1,5.6,1,5+p.vt*.5,4+p.vt*1.1,1.5,3+p.vt*1.1,-1.5,5+p.vt*1.2,-5-p.vt*.5,4+p.vt*1.1],PV.tun[p.vt],PV.tr[p.vt],.8);
}
g.fillStyle='#4a3524';g.fillRect(-6,-3,12,2.6);
g.fillStyle=PV.bk[p.vt];g.fillRect(1.5,-3.2,2.6,3);
g.restore();
}else{
leg(0,1.5,'#18202d','#2c2018');
g.save();g.translate(wx,hy);g.rotate(ln);
const hx=1.3+sn*.6+M.sin(ph-.9)*.5*sn,hyy=-29+id*.3-M.abs(M.sin(ph-.8))*.9*sn*(1-p.air);
g.fillStyle=PV.hood[p.vt];
g.beginPath();g.arc(hx,hyy,8.6,0,TAU);g.fill();shR(hx,hyy,8.6);if(p.vt==5)h25(hx,hyy,8.6);
g.beginPath();g.moveTo(hx-5,hyy-6);
g.quadraticCurveTo(hx-11-sn*3-p.vt*1.2,hyy-3,-9-sn*4-p.vt*2.4+M.sin(T*2.3)*1.2-lg*3,-21-p.air*2+p.vt*1.2);
g.lineTo(hx-3,hyy+6);g.closePath();g.fill();
g.fillStyle='rgba(6,8,16,.2)';g.fill();
if(p.vt==1||p.vt==3){
g.beginPath();g.moveTo(hx-5.6,hyy-5);g.quadraticCurveTo(hx-3,hyy-10-p.vt*2,hx-8-p.vt*1.6,hyy-14-p.vt*3.4);g.quadraticCurveTo(hx+2,hyy-10,hx+6,hyy-6.4);g.closePath();g.fill();
}
if(p.vt==2||p.vt==3)evHn(hx,hyy,p.vt);
g.fillStyle='#0b0f17';g.beginPath();g.ellipse(hx+3.6,hyy+.6,4.6,5.2,0,0,TAU);g.fill();
evMk(hx,hyy);
const ey=hyy-.6-(p.vy<-100&&p.air>.5?1:0),eh=p.bl<0?.3:1.7;
g.fillStyle=PV.ey[p.vt];
g.beginPath();g.ellipse(hx+6.4,ey,1.15,eh,0,0,TAU);g.fill();
g.beginPath();g.ellipse(hx+2.8,ey,1.15,eh,0,0,TAU);g.fill();
gl(AE[p.vt].k,hx+4.6,ey,7,.3);
g.strokeStyle=PV.rm[p.vt];g.lineWidth=1;
g.beginPath();g.arc(hx,hyy,8.6,-2.6,-.4);g.stroke();
evHd(hx,hyy,-9-sn*4-p.vt*2.4+M.sin(T*2.3)*1.2-lg*3,-21-p.air*2+p.vt*1.2);
if(p.vt==2)evFl(hx,hyy);
if(p.vt==3)evSh();
if(p.vt==4){evCr(hx,hyy);evHl(hx,hyy)}
if(p.vt==5)ev5H(hx,hyy);
const r=ik(1.5,shy,FX,FY,11,11,1);
g.lineCap='round';g.lineJoin='round';g.strokeStyle=PV.arm[p.vt];g.lineWidth=4.8;
g.beginPath();g.moveTo(1.5,shy);g.lineTo(r[0],r[1]);g.lineTo(r[2],r[3]);g.stroke();shL();
if(p.vt==5)s25([1.5,shy,r[0],r[1],r[2],r[3]],4.8,4.8);
const HX=r[2],HY=r[3];
if(p.vt>0){
ov(1.5,shy-.5,5.4+p.vt*.45,3.8+p.vt*.3,PV.pd[p.vt],.2);
g.strokeStyle=PV.tr[p.vt];g.lineWidth=.8;
g.beginPath();g.ellipse(1.5,shy-.5,5.4+p.vt*.45,3.8+p.vt*.3,.2,3.4,5.8);g.stroke();
for(let k=0;k<p.vt-1;k++)poly([-1.6+k*3.4,shy-2.6,-.2+k*3.4,shy-7.4-k*1.2,1.4+k*3.4,shy-2.6],PV.pd[p.vt]);
}
if(sh<.98&&p.ga<.98){
g.save();g.globalAlpha=(1-sh)*(1-p.ga);g.translate(HX,HY);g.rotate(lr(.95,0,da));g.translate(-3,0);
const tx=-1-ce*3.5,nl=lr(tx+M.sin(T*70)*p.rc*2.5,BX-HX+3,da),ny=lr(0,BY-HY,da),bl=17+p.vt*1.6,bc=8.5+p.vt*.9;
evBw(tx,bl,bc,p.vt);
g.strokeStyle='rgba(235,225,200,.75)';g.lineWidth=.8;
g.beginPath();g.moveTo(tx,-bl);g.lineTo(nl,ny);g.lineTo(tx,bl);g.stroke();
if(p.dr){
const ae=AE[evl()],v=evl(),sc=['#b8a07a','#cfd8e4','#c9764a','#b8a8e8','#e8c868','#cfe6ff'][v];
g.lineCap='round';g.lineJoin='round';
g.strokeStyle='rgba(6,8,16,.5)';g.lineWidth=2.4;
g.beginPath();g.moveTo(nl,ny);g.lineTo(6,ny);g.stroke();
g.strokeStyle=sc;g.lineWidth=1.5;
g.beginPath();g.moveTo(nl,ny);g.lineTo(6,ny);g.stroke();
if(v>0){g.strokeStyle='rgba('+ae.c+','+(.5+ce*.4)+')';g.lineWidth=.6+v*.12;g.beginPath();g.moveTo(nl+2,ny+.3);g.lineTo(6,ny+.3);g.stroke()}
g.fillStyle=ae.f;g.strokeStyle='rgba(6,8,16,.55)';g.lineWidth=.4;
g.beginPath();g.rect(3.6,ny-1.3-v*.2,2.2,2.6+v*.4);g.fill();g.stroke();
g.beginPath();g.moveTo(12+v*1.2,ny);g.lineTo(6.5,ny-2.6-v*.6);g.lineTo(3.6,ny-1.1-v*.3);g.lineTo(6,ny);g.lineTo(3.6,ny+1.1+v*.3);g.lineTo(6.5,ny+2.6+v*.6);g.closePath();
g.fillStyle=ae.h;g.fill();
g.save();g.clip();g.fillStyle='rgba(6,8,16,.2)';g.fillRect(0,ny,24,8);g.restore();
g.strokeStyle='rgba(6,8,16,.6)';g.lineWidth=.5;g.stroke();
for(let s=-1;s<=1;s+=2){
g.save();g.translate(0,ny);g.scale(1,s);
g.fillStyle=ae.f;
g.beginPath();g.moveTo(nl+4.6,-.4);g.lineTo(nl+3,-3.2);g.lineTo(nl-2.2,-3.2);g.lineTo(nl-.6,-.4);g.closePath();g.fill();
g.fillStyle=ae.g;
g.beginPath();g.moveTo(nl+3.6,-.6);g.lineTo(nl+2.6,-1.8);g.lineTo(nl-.8,-1.8);g.lineTo(nl+.2,-.6);g.closePath();g.fill();
g.strokeStyle='rgba(6,8,16,.5)';g.lineWidth=.4;
g.beginPath();g.moveTo(nl+4.6,-.4);g.lineTo(nl+3,-3.2);g.lineTo(nl-2.2,-3.2);g.lineTo(nl-.6,-.4);g.closePath();g.stroke();
g.restore();
}
ov(nl-.8,ny,1,1.3,sc);
gl(ae.k,9,ny,6+ce*12,ce*.8+.1+(ce>=1?M.sin(T*18)*.12:0));
}
g.restore();
}
evGv(r[0],r[1],HX,HY,'#b88f6b',2.4,p.vt);
if(sh>.02){
g.save();g.translate(HX+3,HY-1);g.scale(sh,sh);
const gr=g.createRadialGradient(-2,-4,2,0,0,17);
gr.addColorStop(0,'#4a6578');gr.addColorStop(1,'#243543');
g.fillStyle=gr;g.strokeStyle='#8fa6b3';g.lineWidth=1.8;
g.beginPath();g.ellipse(0,0,11,16,0,0,TAU);g.fill();g.stroke();
g.strokeStyle='rgba(200,225,240,.18)';g.lineWidth=1;
g.beginPath();g.ellipse(0,0,7,11.5,0,0,TAU);g.stroke();
g.strokeStyle='#d9a45f';g.lineWidth=1.2;
g.beginPath();g.moveTo(0,-12);g.lineTo(0,-6.5);g.moveTo(0,6.5);g.lineTo(0,12);g.stroke();
g.fillStyle='#9fb6c2';g.beginPath();g.ellipse(1,0,3,3.8,0,0,TAU);g.fill();
g.restore();
gl('c',HX+3,HY,24+p.sf*16,(.1+.05*M.sin(T*3))*sh+p.sf*.6);
g.globalCompositeOperation='lighter';
g.strokeStyle='rgb(150,195,225)';g.lineWidth=1.3;
g.globalAlpha=M.min(1,(.1+.04*M.sin(T*3))*sh+p.sf*.4);
g.beginPath();g.arc(-2,-14,36+p.sf*6,-.9,.9);g.stroke();
g.globalAlpha=1;g.globalCompositeOperation='source-over';
}
g.restore();
}
if(part==1&&p.vt==5){g.save();g.translate(wx,hy);g.rotate(ln);ev5R(1,-1,13);g.restore()}
g.restore();
if(part==0){
const nx=1.5,ny=-21;
const ux=nx*M.cos(ln)-ny*M.sin(ln),uy=nx*M.sin(ln)+ny*M.cos(ln)+hy;
upSf(DT,p.x+p.f*sx*ux,p.y+sy*uy);
}
}


