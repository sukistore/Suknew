function bSt(e,sn,id,sw,ph){
const m=uxM(e,sn,ph,id,sw,1.8),rz=M.max(0,-sw),sk=M.max(0,sw),hy=-uxH(ph,sn,12,21.4)-id*.35,cw=M.sin(T*2.3+e.id)*1.4;
if(rz>.02&&!slA){g.save();g.globalCompositeOperation='lighter';g.strokeStyle='rgba(180,150,235,'+rz*.5+')';g.lineWidth=1;g.beginPath();g.ellipse(2,-1,16+rz*6,3.6+rz*1.2,0,0,TAU);g.stroke();
for(let k=0;k<6;k++){const a=T*1.6+k*PI/3;sl(2+M.cos(a)*(16+rz*6),-1+M.sin(a)*(3.6+rz*1.2),2+M.cos(a)*(19+rz*6),-1+M.sin(a)*(4.4+rz*1.2),'rgba(210,190,255,'+rz*.6+')',1)}g.restore()}
uxLeg(ph+PI,sn,-1.5,hy,12,5,6,.85,'#1b1624','#110e17');
uxLeg(ph,sn,1.5,hy,12,5,6,.9,'#241d30','#161220');
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
for(let k=0;k<3;k++){let tx=-3,ty=-12,a=PI+.5+k*.35-sn*.3-rz*.3+sk*.2;g.strokeStyle='#120d1a';g.lineWidth=2.2-k*.3;g.beginPath();g.moveTo(tx,ty);
for(let j=1;j<=6;j++){a+=M.sin(T*2.2+j*.7+k*1.7+e.id)*.32+M.sin(ph-j*.4)*sn*.12;tx+=M.cos(a)*4.4;ty+=M.sin(a)*4.4;g.lineTo(tx,ty)}g.stroke();
if(!slA)gl('v',tx,ty,5,.35+rz*.3)}
const pp=m.pt+sk*.08-rz*.06;g.rotate(pp);
const x0=-13-sn*4+cw+M.sin(ph-1.1)*2*sn;
g.fillStyle='#3a2c52';g.beginPath();g.moveTo(-6,-6);g.quadraticCurveTo(-14-sn*3,0,x0,12);
for(let k=1;k<=5;k++)g.lineTo(lr(x0,8,k/5),12+(k&1?-2.6:1.4)+M.sin(T*3+k+e.id)*.8);
g.quadraticCurveTo(10,2,6,-6);g.closePath();g.fill();
g.strokeStyle='rgba(180,150,230,.35)';g.lineWidth=.9;g.stroke();
sl(.3,-4,.4,10,'rgba(10,6,20,.4)',.9);
g.save();g.translate(0,-5);
const cp=m.ct*.8+sk*.1-rz*.1+m.br*.02,tp=pp+cp;g.rotate(cp);
uxArm(-3,-15,lr(1.25-m.ar*.3,-.7,rz)-tp,14,1,.9,9,9.5,'#2a2040','#b58d68',2.2);
g.fillStyle='#3a2c52';g.beginPath();g.moveTo(-6,5);g.quadraticCurveTo(-9,-6,-6,-15);g.lineTo(.5,-18);g.lineTo(6,-15);g.quadraticCurveTo(9,-6,6,5);g.closePath();g.fill();
g.strokeStyle='rgba(180,150,230,.3)';g.lineWidth=.8;g.stroke();
g.fillStyle='#8a6b45';g.fillRect(-6,1,12,2.4);ov(.4,2.2,1.6,1.6,'#c9a8ff');
sl(-3,-14,-3,.5,'#8a6b45',.8);sl(3,-14,3,.5,'#8a6b45',.8);
const hp=-tp*.8+m.hd-rz*.15+sk*.1+id*.03;
g.save();g.translate(3.5+sn,-23);g.rotate(hp);
g.fillStyle='#2e2342';
g.beginPath();g.moveTo(-5,-1);g.quadraticCurveTo(-9-sn*3,3,-8,10);g.lineTo(-2,6);g.closePath();g.fill();
g.beginPath();g.arc(0,0,8,0,TAU);g.fill();
g.fillStyle='#07050b';g.beginPath();g.ellipse(3.4,.6,4.4,5,0,0,TAU);g.fill();
poly([1.4,-5.4,9.8,-3.4,10.8,.4,8.6,3.6,6.4,5.4,2.4,5.8,1.2,2],'#d8d0bb','#8f8772',.8);
poly([8.6,3.6,10.8,.4,12.6,1.4,10.2,4.6],'#cfc7b2');
sl(3,-5,9.6,-3,'rgba(120,112,90,.6)',.8);
ov(5.4,-.4,1.5,1.1,'#0a0810');ov(5.6,-.4,.6,.6,'#d6bcff');ov(8,-1.6,.6,.5,'#3a3046');ov(8.6,1.2,.6,.5,'#3a3046');
gl('v',5.6,-.4,8,.42+rz*.3);
g.strokeStyle='#cfc6ad';g.lineWidth=2.4;
g.beginPath();g.moveTo(2,-5);g.quadraticCurveTo(-4,-9,-7,-4);g.quadraticCurveTo(-9,.4,-6,2.6);g.quadraticCurveTo(-4,3.4,-3.6,1);g.stroke();
g.lineWidth=2;g.beginPath();g.moveTo(4,-5);g.quadraticCurveTo(7,-12,12,-9);g.quadraticCurveTo(15,-6.4,13,-3);g.stroke();
g.restore();
g.restore();g.restore();
const cs=(x,y)=>{const a=M.cos(cp),c=M.sin(cp),X=x*a-y*c,Y=x*c+y*a-5,c2=M.cos(pp),d2=M.sin(pp);return[X*c2-Y*d2,X*d2+Y*c2+hy]};
const ax=lr(20,25,rz),ay=hy+lr(-12,-19,rz),sp0=cs(3,-15),r=uxArm(sp0[0],sp0[1],M.atan2(ay-sp0[1],ax-sp0[0]),M.hypot(ax-sp0[0],ay-sp0[1]),1,1,10,10,'#2a2040','#b58d68',2.4);
g.save();g.translate(r[2],r[3]);
const sr=sk*.35-rz*.1+(rz>0?M.sin(T*3)*.03:0);g.rotate(sr);
sl(0,12,0,-27,'#5a4630',2.2);
g.strokeStyle='#8a6b45';g.lineWidth=1.4;g.beginPath();g.arc(0,-29,4.6,.5,TAU-.5);g.stroke();
ov(0,-29,3.2,3.2,'#c9a8ff');
g.strokeStyle='#4a3828';g.lineWidth=.9;g.beginPath();g.ellipse(0,-29,4.2,4.8,0,0,TAU);g.moveTo(-4.2,-29);g.lineTo(4.2,-29);g.moveTo(0,-33.8);g.lineTo(0,-24.2);g.stroke();
gl('v',0,-29,12+rz*12+sk*9,.5+rz*.4+sk*.2);
if(rz>.05||sk>.05)gl('w',0,-29,6+sk*14,.3+sk*.5);
for(let k=0;k<3;k++){const a=T*(2.2+k*.4)+k*2.1,rr=8+rz*5;g.save();g.translate(M.cos(a)*rr,-29+M.sin(a)*rr*.45);g.rotate(a);poly([0,-2,1.4,0,0,2,-1.4,0],'rgba(215,190,255,'+(.4+rz*.5)+')');g.restore();if(!slA)gl('v',M.cos(a)*rr,-29+M.sin(a)*rr*.45,3,.35)}
g.restore();
uxSl(r[2]*.5+8,hy-30,24,-.6,.6,sk*.7,'200,170,255');
}
