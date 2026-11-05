function bAr(e,sn,id,sw,ph){
const m=uxM(e,sn,ph,id,sw,1.8),dr=M.max(0,-sw),rl=M.max(0,sw),p2=e.hp<e.mh*.5?1:0,pu=.5+.25*M.sin(T*2.4+e.id);
const hy=-uxH(ph,sn,12,27)-id*.3+dr*1.2,bk=e.vx*e.f<-8?3:0,sc=M.sin(T*2.2+e.id)*1.2+M.sin(ph-.9)*sn*3;
const BKc='#1f1b2a',B2='#3a3548',BN2='#d2c9b2';
uxLeg(ph+PI,sn,-2,hy,12,6,8,.62,'#262234','#17141f');
uxLeg(ph,sn,2,hy,12,6,8,.68,'#322e42','#1c1826');
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
gl('z',-8,-10,34,.05+pu*.04+p2*.08);
const hx0=-9-sn*5-bk+sc;
for(let k=0;k<5;k++){const l=14+(k%3)*6+k,bx=-8+k*3.4,lx=bx-3-sn*(4+k)-bk*.6+M.sin(T*2.4+k*1.3+e.id)*1.4+M.sin(ph-.8-k*.3)*sn*2.4,ly=l+M.sin(T*3+k)*1;
g.fillStyle=k&1?'#211c2a':BKc;g.beginPath();g.moveTo(bx-2,-6);g.lineTo(bx+2.4,-6);g.quadraticCurveTo(bx+1+(lx-bx)*.4,l*.5,lx+.6,ly);g.quadraticCurveTo(bx+(lx-bx)*.5,l*.5,bx-2,-6);g.fill()}
const pp=m.pt-dr*.07+rl*.05;g.save();g.rotate(pp);
g.fillStyle=B2;g.fillRect(-6,-5,12,3.4);ov(0,-3.3,1.6,1.3,'#8a2a3a');
const cp=m.ct-dr*.1+rl*.1+m.br*.02,tp=pp+cp;
g.save();g.translate(0,-5);g.rotate(cp);
g.fillStyle=BKc;g.beginPath();g.moveTo(-6,5);g.lineTo(6,5);g.lineTo(7,-8);g.lineTo(9,-20);g.lineTo(-.5,-23);g.lineTo(-9,-20);g.lineTo(-7,-8);g.closePath();g.fill();
g.strokeStyle='#4f4962';g.lineWidth=1;g.stroke();
ov(.5,-12,4.4,9,'#0d0b12');
g.strokeStyle=BN2;g.lineWidth=1.2;
for(let k=0;k<5;k++){const y=-4.4-k*3.2;g.beginPath();g.moveTo(.6,y);g.quadraticCurveTo(5,y-1.4,5.8-k*.3,y+2.4);g.stroke()}
g.strokeStyle='#8f8770';g.lineWidth=1;
for(let k=0;k<4;k++){const y=-5-k*3.2;g.beginPath();g.moveTo(.2,y);g.quadraticCurveTo(-3.6,y-1.2,-4.4,y+1.8);g.stroke()}
sl(.4,5,.4,-21,BN2,1.6);for(let k=0;k<6;k++)ov(.4,2-k*3.8,1.1,.8,'#e6dec9');
ov(.6,-11,2,3,'rgba(220,60,86,'+(pu+.15+dr*.3)+')');gl('r',.6,-11,13,.14+pu*.14+dr*.2);
ov(-8,-20,4.6,3.4,B2);ov(8,-21,5.2,3.6,B2);
const nec=[2,-22,9+dr*-1.5,-31];
uxT(nec[0],nec[1],nec[2],nec[3],2.4,1.9,B2);
const hp=-tp*.5+m.hd*1.4-dr*.12+id*.04+M.sin(T*.9+e.id)*.04;
g.save();g.translate(nec[2]+1,nec[3]-1);g.rotate(hp);
poly([-1,-2.8,8,-1.8,15.5,1.4,15.8,3.6,8,4.2,-1.4,3.6],BN2,'#7d7660',.8);
poly([-5,-4,-1,-4.6,0,3.6,-4,3],BN2);ov(-1.5,-.4,4.8,4.4,BN2);
sl(4,-1.4,14,2.2,'rgba(120,112,90,.55)',.8);
ov(4.2,-.8,2,1.9,'#0a0810');ov(4.4,-.6,.9,.9,'#ff5a78');gl('r',4.4,-.6,9,.45+dr*.3+p2*.3);
ov(15.6,2.2,1,.8,'#1c1620');
g.fillStyle='#9a927a';for(let k=0;k<4;k++)poly([8+k*1.8,3.8,8.7+k*1.8,5.6,9.4+k*1.8,3.8]),g.fill();
g.strokeStyle='#cfc6ad';g.lineWidth=1.6;
const an=(x,y,s,len)=>{const sw0=M.sin(T*1.2+e.id+s)*.5;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x-2*s,y-len*.5,x-3*s+sw0,y-len);g.stroke();g.beginPath();g.moveTo(x-1.2*s,y-len*.4);g.lineTo(x+2.5*s,y-len*.62);g.moveTo(x-2.2*s,y-len*.7);g.lineTo(x-6*s+sw0,y-len*.88);g.moveTo(x-3*s+sw0,y-len);g.lineTo(x-1*s+sw0,y-len-5);g.stroke()};
an(-1,-3,1,17);
g.beginPath();g.moveTo(1.6,-3.4);g.quadraticCurveTo(1,-8,3,-11);g.stroke();sl(3,-11,4.6,-12.6,'#8f8770',1.4);
g.strokeStyle='#8f8770';g.lineWidth=1.2;g.beginPath();g.moveTo(-4,-10);g.lineTo(-8,-12);g.moveTo(-7,-16);g.lineTo(-10,-17);g.stroke();
const rb1=M.sin(T*2.6+e.id)*1.4+sn*2.4,rb2=M.sin(T*2.6+e.id-.9)*1.8+sn*3.4;
g.fillStyle='#b8344a';g.beginPath();g.moveTo(-3,-14);g.quadraticCurveTo(-7-rb1,-11,-11-rb2,-8+rb1*.3);g.lineTo(-10-rb2,-6+rb1*.3);g.quadraticCurveTo(-6-rb1,-9,-2.4,-12);g.fill();
g.beginPath();g.moveTo(0,-17);g.quadraticCurveTo(-4-rb2*.5,-14,-8-rb1,-13+rb2*.2);g.lineTo(-7-rb1,-11+rb2*.2);g.quadraticCurveTo(-3,-13,0,-15);g.fill();
g.restore();
g.restore();
g.restore();
g.restore();
const cs=(x,y)=>{const a=M.cos(cp),b=M.sin(cp),X=x*a-y*b,Y=x*b+y*a-5,c2=M.cos(pp),d2=M.sin(pp);return[X*c2-Y*d2,X*d2+Y*c2]};
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
const bx=26-rl*3,by=-20,bl=27,nk=bx-1-dr*14+rl*2,bw=dr*3.5,bt=bx-1-bw*.4;
const s2=cs(-6,-20),fr=uxArm(s2[0],s2[1],M.atan2(by-s2[1],nk-s2[0]),M.hypot(nk-s2[0],by-s2[1]),-1,.75,13,13,B2,'#241f2e',2);
const s1=cs(7,-20),ra=uxArm(s1[0],s1[1],M.atan2(by-s1[1],bx-s1[0]),M.hypot(bx-s1[0],by-s1[1]),1,.85,13,13,'#2c2838','#2c2838',2.2);
sl(ra[0],ra[1],ra[0]-1.6,ra[1]-3.2,BN2,.9);
g.fillStyle=B2;poly([ra[0]-1.4,ra[1]-1,ra[0]+.2,ra[1]-4.4,ra[0]+1.6,ra[1]-.4],B2);
g.strokeStyle='#cfc6ad';g.lineWidth=4.2;g.beginPath();g.moveTo(bt,by-bl);g.quadraticCurveTo(bx+13-bw,by,bt,by+bl);g.stroke();
g.strokeStyle='#8f8770';g.lineWidth=2;g.beginPath();g.moveTo(bt,by-bl+2);g.quadraticCurveTo(bx+12-bw,by,bt,by+bl-2);g.stroke();
for(let k=0;k<5;k++){const t=(k+1)/6,yy=lr(by-bl,by+bl,t),xx=bt+(bx+13-bw-bt)*2*t*(1-t)*.5*2;sl(xx-2.4,yy,xx+2.4,yy-.6,'#e6dec9',1.2)}
sl(bx+7-bw*.5,by-3.6,bx+7-bw*.5,by+3.6,'#5a3a30',3);
g.strokeStyle='rgba(235,200,205,.75)';g.lineWidth=.8;g.beginPath();g.moveTo(bt,by-bl);g.lineTo(nk,by);g.lineTo(bt,by+bl);g.stroke();
const cm=M.sin(T*2.1+e.id)*1.4+sn*(-2)+M.sin(ph-1)*sn;
sl(bt,by+bl,bt+cm*.4,by+bl+5,'#7a5a4a',.8);ov(bt+cm*.4,by+bl+6.5,1.5,1.7,BN2);ov(bt+cm*.4-.5,by+bl+6.2,.4,.5,'#1a1512');ov(bt+cm*.4+.5,by+bl+6.2,.4,.5,'#1a1512');
if(dr>.02){
g.strokeStyle='#2a2430';g.lineWidth=1.8;g.beginPath();g.moveTo(nk,by);g.lineTo(bx+22,by);g.stroke();
g.fillStyle='#ff7a94';g.beginPath();g.moveTo(bx+31,by);g.lineTo(bx+21,by-3.4);g.lineTo(bx+23,by);g.lineTo(bx+21,by+3.4);g.closePath();g.fill();
g.fillStyle='#8a2a44';g.beginPath();g.moveTo(nk,by);g.lineTo(nk-5,by-3.2);g.lineTo(nk+3,by-.4);g.lineTo(nk+3,by+.4);g.lineTo(nk-5,by+3.2);g.closePath();g.fill();
gl('r',bx+25,by,14+dr*16,dr*.9);
}
ov(fr[2],fr[3],2,2,B2);
g.restore();
uxSl(28,hy-20,30,-.9,.9,rl*.6,'255,90,120');
uxW(e,-6,hy+2,'r',3,26,6,.1+p2*.08,.55);
uxW(e,-8,hy-6,'z',2,18,8,.09,.4);
}
