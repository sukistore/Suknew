function bSk(e,sn,id,sw,ph){
const m=uxM(e,sn,ph,id,sw,2),wu=M.max(0,-sw),sk=M.max(0,sw),hy=-uxH(ph,sn,13,23)-id*.35+wu*1.2,BN='#d6cdb6',BD='#a99f88';
const k1=uxLeg(ph+PI,sn,-1.6,hy,13,5.5,7,.46,BD,'#8a8270');ov(k1[0]+.5,k1[1],1.8,1.8,BD);
const k2=uxLeg(ph,sn,1.6,hy,13,5.5,7,.5,BN,'#b0a892');ov(k2[0]+.5,k2[1],1.9,1.9,'#e0d8c3');
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
let ta=PI+.35+sn*-.25+M.sin(T*2.1+e.id)*.12,tx=-3,ty=1;
for(let k=0;k<6;k++){const a=ta+M.sin(T*2.6-k*.6+e.id)*.22+M.sin(ph-.8-k*.4)*sn*.18,nx=tx+M.cos(a)*3.8,ny=ty+M.sin(a)*3.8+.5;sl(tx,ty,nx,ny,BD,1.1);ov(nx,ny,1.9-k*.14,1.7-k*.12,k&1?BD:BN);tx=nx;ty=ny;ta=a}
poly([tx,ty-2.4,tx-7,ty+.4,tx,ty+2.4],'#9d9686','#5a5548',.6);
const pp=m.pt-wu*.05+sk*.08;g.rotate(pp);
const cl=M.sin(ph*2-.9)*1.3*sn+M.sin(T*2+e.id)*.7-sn*2.4;
g.fillStyle='#3a2c28';g.beginPath();g.moveTo(-5,-1);g.lineTo(5.5,-1);g.lineTo(5+cl*.5,8+M.sin(T*2+e.id)*.8);g.lineTo(1.5+cl*.3,5);g.lineTo(-1+cl*.3,9);g.lineTo(-5+cl*.2,6);g.closePath();g.fill();
poly([-5,-1,5,-1,6,3,2.5,5,-2.5,5,-6,3],'#cfc6af','#8f8772',.7);
ov(0,2.4,1.4,1.1,'#2a2622');
g.save();g.translate(0,-3);
const cp=m.ct-wu*.12+sk*.14+m.br*.02,tp=pp+cp;g.rotate(cp);
const sh=M.sin(ph-1.4)*sn*1.2;
const fr=uxArm(-2.5,-17,M.atan2(4.5+sh,12),M.hypot(12,4.5+sh),1,.5,9.5,9.5,BD,BN,1.7);
ov(fr[0],fr[1],1.4,1.4,BN);
g.strokeStyle='#cfc7b2';g.lineWidth=1.8;g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(-1.2,-8,.4,-18);g.stroke();
ov(2,-9.5,5.6,8.8,'#1c1916');
gl('s',2,-9.5,9,.12+.06*M.sin(T*3+e.id));
g.strokeStyle='#d3cbb6';g.lineWidth=1.4;
for(let k=0;k<5;k++){const y=-3.2-k*3.1,ln=5.8-M.abs(k-1.5)*.5;g.beginPath();g.moveTo(.2,y);g.quadraticCurveTo(3.6,y-1.6,ln,y+2.4);g.stroke()}
g.strokeStyle='#a99f88';g.lineWidth=1;
for(let k=0;k<4;k++){const y=-3.6-k*3.1;g.beginPath();g.moveTo(-.2,y);g.quadraticCurveTo(-3.6,y-1.2,-4.4,y+1.8);g.stroke()}
sl(5.8,-15.8,5.4,-4.6,'#e0d8c3',1.2);
sl(-3.4,-17,5.4,-17,'#d3cbb6',1.7);
for(let k=0;k<5;k++)ov(-.3+k*.1,-3-k*3.4,1.2,.9,'#e0d8c3');
poly([4,-19,9,-26,6.4,-18],'#e0d8c3','#8f8772',.6);poly([7,-17,12,-21,9,-15.4],'#e0d8c3','#8f8772',.6);
sl(.4,-18,1,-22,'#cfc7b2',1.8);
const hx=2.5+sn*.5,hh=-27.5,hp=-tp*.8+m.hd-wu*.1+id*.025;
g.save();g.translate(hx,hh);g.rotate(hp);
g.strokeStyle='#cfc6ad';g.lineWidth=2.2;g.beginPath();g.moveTo(-2.4,-4);g.quadraticCurveTo(-8,-6,-8.6,-14);g.stroke();
g.lineWidth=2.6;g.beginPath();g.moveTo(1.6,-4.8);g.lineTo(2.6,-8.4);g.lineTo(1.2,-9.6);g.lineTo(3.2,-11);g.stroke();
ov(0,0,5.7,5.4,'#d8d0bb');ov(-1.4,-1.8,3,2,'rgba(255,255,255,.14)');
poly([-2.4,-3,2,-4.4,6.4,-2,2.4,-1.8],'#a99f88');
ov(2.8,-.4,2,2.2,'#0f0d0b');ov(3.1,-.1,1,1,'#a9dcff');gl('s',3.2,-.2,8,.34+.12*M.sin(T*6+e.id));
poly([4.6,2,5.8,3.6,3.6,3.8],'#1b1816');
const jw=.06+sn*.14*M.abs(M.sin(T*13+e.id))+wu*.5+sk*.4,jy=jw*7;
g.save();g.translate(-1,3.6);
poly([0,0,7.6,.4,7.2,2.8+jy,.6,3.2+jy*.7],'#c9c1ac');
g.fillStyle='#efe9d6';for(let k=0;k<4;k++){g.beginPath();g.moveTo(1.6+k*1.8,.4);g.lineTo(2.4+k*1.8,-2.4+(k&1)*.8);g.lineTo(3.2+k*1.8,.4);g.fill()}
for(let k=0;k<3;k++){g.beginPath();g.moveTo(2+k*2,2.6+jy*.5);g.lineTo(2.8+k*2,.4+jy*.4);g.lineTo(3.6+k*2,2.6+jy*.5);g.fill()}
g.restore();
g.restore();
g.save();g.translate(11,-12+sh);g.rotate(-tp*.5-wu*.08);
poly([0,-11,4.6,-6,5,3,2,11,-1,9,-4.4,0,-3.6,-7],'#cfc6ad','#7a735f',1);
poly([0,-11,4.6,-6,2,-3,-1,-8],'rgba(255,255,255,.14)');
sl(-1,-6,2,0,'#6a6454',.9);sl(2,0,.6,6,'#6a6454',.9);
ov(.8,-1,2.2,2.4,'#b9b19a');ov(.4,-1.4,.6,.7,'#16120e');ov(1.5,-1.4,.6,.7,'#16120e');
g.restore();
let th=1.15-m.ar*.5;th=lr(th,-1.7,wu);th=lr(th,.5,sk);
const r=uxArm(4.5,-17,th-tp,17.5,1,.5,9.5,9.5,'#d3cbb6',BN,1.7);
ov(r[0],r[1],1.5,1.5,BN);
poly([r[0]-1,r[1]-1,r[0]+1,r[1]-5.4,r[0]+2.4,r[1]-.4],BN);
const ang=M.atan2(r[3]-r[1],r[2]-r[0])+(-.2-wu*.45+sk*.25);
g.save();g.translate(r[2],r[3]);g.rotate(ang);
sl(-3,0,3,0,'#3b2a1e',2.4);sl(3,-3,3,3,'#6a5547',1.6);
poly([3.5,-1.8,12,-2.6,14,-4.6,17.4,-2.6,20,-4.8,23,-2.2,29,0,23,2,17.4,2.8,12,2.4,3.5,1.8],'#8a7f70');
poly([6,-1.4,12,-2,12,-.6,6,-.2],'rgba(120,70,40,.6)');
sl(5,-.3,24,-.3,'rgba(50,44,38,.6)',.7);
ov(16,1,2.6,.8,'rgba(122,80,52,.6)');
g.restore();
g.restore();g.restore();
uxSl(5,hy-17,28,-1.9,.8,sk,'200,230,255');
uxW(e,1,hy-36,'s',2,12,5,.14,.6);
}
