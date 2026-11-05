function dEl(s,sn,ph,id,sw,hy,cs,cw){
const c=s.c,aa=s.aa,ch=M.max(0,-sw),rl=M.max(0,sw),fl=M.floor(T*20)*7.3;
const bb=M.abs(M.cos(ph))*sn*1.1+M.sin(T*2.3+s.id)*.45*(1-sn),hx=3+sn*.6,hh=-30+id*.3+(M.abs(M.cos(ph))-M.abs(M.cos(ph-.7)))*sn*.5,shy=-19+id*.3,hp=hy-5;
hLeg(ph+PI,sn,-2.2,hp,'#120d1e','#1b1332','#0e0820','#a678ff',1);
hLeg(ph,sn,2.2,hp,'#17102a','#241a44','#140c28','#c8a0ff',1);
g.save();g.translate(0,hp-bb);g.rotate(sw*.025+M.sin(T*2.3)*.01);g.scale(1,1+M.sin(T*2.3+s.id)*.012);
g.lineCap='round';g.lineJoin='round';
rbfx(rbn(-4.5,-17,28,sn,cs,cw,'#120b2a','#3e2a8a',0,8),1,0);
rbfx(rbn(-6,-4,17,sn,cs,cw,'#0e0820','#2e2070',1.7,6),1,7);
const x0=-9-cs*.5+cw*.5,x1=7.4+cw*.3;
const wv=()=>{for(let k=0;k<=8;k++)g.lineTo(lr(x0,x1,k/8)-sn*(1-k/8)*6-M.sin(T*4+k)*.8,6+(k&1?5.6:0)+M.sin(T*4.2+k*1.3)*(1+sn*2))};
g.fillStyle='#1a1236';
g.beginPath();g.moveTo(-5.6,-2);g.quadraticCurveTo(-8,2,x0,6);wv();g.quadraticCurveTo(9,2,5.8,-2);g.closePath();g.fill();
g.fillStyle='rgba(4,2,14,.35)';g.beginPath();g.moveTo(-6,-2);g.quadraticCurveTo(-8,2,x0,6);wv();g.lineTo(-.4,-2);g.closePath();g.fill();
g.strokeStyle='#a678ff';g.lineWidth=1.1;g.beginPath();g.moveTo(x0,6);wv();g.stroke();
for(let k=0;k<3;k++){const bx=-5+k*5.6,a=fl+k*2.7;g.save();g.globalCompositeOperation='lighter';g.strokeStyle='rgb(255,244,170)';g.lineWidth=.8;g.globalAlpha=.75;g.beginPath();zig(bx,8,bx+(hs(a)-.5)*8,17,2.6,a);g.stroke();g.restore()}
poly([-9.8,-18,-5.4,-18.4,-5,-7,-10,-6.6],'#1a1236','rgba(4,2,14,.6)',.7);
for(let k=0;k<3;k++){const a=.5+.5*M.sin(T*6+k*2);sl(-8.6,-16+k*3.6,-6.4,-16+k*3.6,'rgba(255,243,160,'+(.45+a*.5)+')',1.6)}
poly([-6.6,-19,-1.5,-21,5.6,-19.4,7,-14,5,-8,3.8,-2.4,5.6,0,-5.6,0,-4,-2.4,-5.4,-8,-7.4,-14],'#17102c','rgba(4,2,14,.6)',.8);
poly([-7.4,-14,-6.6,-19,-1.5,-21,-1,0,-5.6,0,-4,-2.4,-5.4,-8],'rgba(4,2,14,.35)');
poly([-4.4,-18.4,4.6,-18.6,5.6,-12,3.6,-6,-3,-6.4,-5,-12],'#2a1f52','rgba(4,2,14,.5)',.7);
for(let k=0;k<3;k++)sl(-3.4,-16+k*3.2,4.4,-15.6+k*3.2,'#6a44c0',.8);
poly([-5,-19,-3,-19.8,6,-5.4,4,-4],'#0e0820','#a678ff',.5);
poly([.4,-15.4,3,-11.6,.4,-7.8,-2.2,-11.6],'#fff3a0');og(.4,-11.6,9,'255,230,120',.45);
g.save();g.globalCompositeOperation='lighter';g.strokeStyle='rgba(255,244,170,.85)';g.lineWidth=.8;
g.beginPath();g.moveTo(.4,-7.8);g.lineTo(-.8,-5);g.lineTo(.8,-2);g.moveTo(3,-11.6);g.lineTo(4.6,-9);g.lineTo(3.4,-6.6);g.moveTo(-2.2,-11.6);g.lineTo(-4,-14);g.lineTo(-3,-17);g.stroke();g.restore();
g.fillStyle='#0e0820';g.fillRect(-5.8,-4.2,11.6,2.2);
for(let k=0;k<4;k++)sl(-4.6+k*3,-4.2,-4.6+k*3,-2,'#a678ff',.7);
poly([2.2,-5,3.8,-2.6,5.4,-5,3.8,-1],'#fff3a0');
poly([-3,-1,3.4,-1,4,7,.2,5.6,-3.4,7.4],'#241a46','rgba(4,2,14,.5)',.5);
for(let k=0;k<3;k++)sqSpk(-4+k*3.6,-19.8,-1.57,4.6+(k==1?2.4:0),1.4,'#0e0820','#a678ff');
poly([hx-2.4,hh+4.6,hx+1.8,hh+4.6,hx+2,-19.6,hx-2.6,-19.8],'#b3a2b0');
poly([-4.4,-21,-1,-22.4,3.6,-21.6,3.2,-18.6,-3.8,-18.6],'#2a1f52','#a678ff',.5);
g.save();g.translate(hx,hh);g.scale(.82,.82);g.translate(-hx,-hh);
sqSpk(hx-3,hh-5,-2.3,13,2.5,'#0e0820','#a678ff');
sqSpk(hx+2.4,hh-5.6,-1.2,10.4,2.1,'#140c28','#a678ff');
for(let k=0;k<7;k++){const bx=hx-6.4+k*2.1,w=M.sin(T*8+k*1.7)*1.2;poly([bx-1.8,hh-4.6,bx+w,hh-13-(k&1)*3.4-ch*2.5-(k==3?4:0),bx+1.8,hh-4.6],'#7b4ee0');poly([bx-.6,hh-5,bx+w,hh-11.6-(k&1)*2.6-(k==3?3:0),bx+.8,hh-5],'#fff3a0')}
sqFc(hx,hh,'#cdbcc9','#9a8696','#fff3a0','z');
poly([hx-6.2,hh-3.6,hx-3,hh-8,hx+3,hh-7.4,hx+6.4,hh-3.8,hx+1.4,hh-4.6,hx-2.4,hh-3.2],'#1a1236','rgba(4,2,14,.5)',.6);
poly([hx+1.8,hh+3.6,hx+6.4,hh+3.2,hx+6.2,hh+5.8,hx+2.6,hh+6.2],'#0c0618');
g.fillStyle='#f2ecf8';for(let k=0;k<4;k++){g.beginPath();g.moveTo(hx+2.4+k*1.1,hh+3.5);g.lineTo(hx+3+k*1.1,hh+5.8);g.lineTo(hx+3.6+k*1.1,hh+3.5);g.closePath();g.fill()}
og(hx+3,hh-.4,6,'255,235,140',.35);
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.globalAlpha=M.min(1,.6+ch*.3);g.strokeStyle='rgb(255,244,170)';g.lineWidth=.9;
g.beginPath();zig(hx-3,hh-12,hx-11,hh-6+hs(fl)*6,5,fl);g.stroke();
g.beginPath();zig(hx+3,hh-12,hx+11,hh-9+hs(fl+3)*6,5,fl+5);g.stroke();
g.restore();
g.restore();
const th=aa-ch*.06,AL=15,rx=1.5+M.cos(th)*AL,ry=shy+M.sin(th)*AL,bx=rx-M.cos(aa)*5.5,by=ry-M.sin(aa)*5.5,ex=rx-M.cos(aa)*9,ey=ry-M.sin(aa)*9;
g.strokeStyle='#0c0818';g.lineWidth=1.8;
g.beginPath();g.moveTo(-8,-9);g.quadraticCurveTo((ex-8)*.5-2,M.max(ey,-9)+9,ex,ey);g.stroke();
g.save();g.globalCompositeOperation='lighter';
for(let k=0;k<2;k++){const t=(T*1.3+k*.5)%1,u=1-t,qx=u*u*-8+2*u*t*((ex-8)*.5-2)+t*t*ex,qy=u*u*-9+2*u*t*(M.max(ey,-9)+9)+t*t*ey;ov(qx,qy,1.1,1.1,'rgba(255,243,160,.9)')}
g.restore();
const r=sqArm('#1b1430','#cdbcc9',th,AL,shy,1.05);
pld(1.5,shy+.4,'#1a1238','#8f5cf0',1.1);
sl(lr(r[0],r[2],.38),lr(r[1],r[3],.38),lr(r[0],r[2],.92),lr(r[1],r[3],.92),'#150f2c',4.8);
sl(lr(r[0],r[2],.42),lr(r[1],r[3],.42),lr(r[0],r[2],.86),lr(r[1],r[3],.86),'rgba(170,120,255,.45)',.8);
g.save();g.translate(r[2],r[3]);g.rotate(aa);
sl(-9,0,12,0,'#1a1236',3.4);
sl(-9,-1,12,-1,'rgba(200,170,255,.22)',.8);
for(let k=0;k<4;k++)sl(-6.4+k*2.6,-1.8,-6.4+k*2.6,1.8,'#5a3aa8',1);
ov(-9.4,0,1.9,1.9,'#a678ff');
poly([4.2,-3.4,6.2,-2.6,6.2,2.6,4.2,3.4],'#a678ff','#0e0820',.5);
sl(6.4,0,12.8,0,'#2a1f52',4);
for(let k=0;k<4;k++){const a=.5+.5*M.sin(T*9+k*1.3+ch*3);sl(7+k*1.6,-2.4,7+k*1.6,2.4,'rgba(232,200,96,'+(.7+a*.3)+')',1.2)}
ov(13,0,1.5,2.6,'#cfc6e8');
g.strokeStyle='#cfc6e8';g.lineWidth=1.5;g.lineCap='round';
g.beginPath();g.moveTo(12.8,-1.6);g.quadraticCurveTo(15.8,-4.8,19.8,-3.6);g.moveTo(12.8,1.6);g.quadraticCurveTo(15.8,4.8,19.8,3.6);g.stroke();
ov(19.9,-3.7,1.2,1.2,'#fff3a0');ov(19.9,3.7,1.2,1.2,'#fff3a0');
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.strokeStyle='rgb(255,244,170)';g.lineWidth=.9;g.globalAlpha=M.min(1,.55+ch*.45+rl*.4);
g.beginPath();zig(19.9,-3.7,19.9,3.7,3.2,fl);zig(19.9,-3.7,17.4,0,2,fl+3);zig(19.9,3.7,17.4,0,2,fl+6);g.stroke();
const nn=1+M.floor(ch*3+rl*3);
g.beginPath();
for(let k=0;k<nn;k++){const a=(hs(fl+k*4.1)-.5)*2.4,ln=7+ch*9+rl*12;zig(17.4,0,17.4+M.cos(a)*ln,M.sin(a)*ln,3,fl+k*7)}
g.stroke();
g.restore();
og(17.4,0,8+ch*8,'255,230,120',.3+ch*.3+rl*.4);
gl('z',17.4,0,10+ch*14+rl*22,.35+ch*.4+rl*.6);
orb(17.4,0,2+ch*2.6,.3+ch*.4+rl*.4,fl+31);
ov(0,0,2.6,2.3,'#251a46');
sl(-1.2,-1.6,2.4,-2.4,'#1a1236',1);sl(-1.2,1.5,2.2,2.3,'#1a1236',1);
sl(-1.4,0,2.2,0,'rgba(170,120,255,.5)',.6);
g.restore();
const r2=ik(-1,shy,bx,by,11,11,1);
sqLb(-1,shy,r2[0],r2[1],r2[2],r2[3],1.05,'#1b1430');
sl(lr(r2[0],r2[2],.4),lr(r2[1],r2[3],.4),lr(r2[0],r2[2],.9),lr(r2[1],r2[3],.9),'#150f2c',4.6);
sqHd(r2[2],r2[3],M.atan2(r2[3]-r2[1],r2[2]-r2[0]),'#cdbcc9',1);
g.restore();
}

