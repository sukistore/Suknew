function bBo(e,sn,id,sw,ph){
const ch=e.st==3,rc=e.st==4,wu=ch||rc?0:M.max(0,-sw),sk=ch||rc?0:M.max(0,sw),p2=e.hp<e.mh*.5?1:0,vi=M.max(0,BN.indexOf(e.nm))%3,m=uxM(e,sn,ph,id,sw,2.4);
const K=[['#6f7d5e','#4a5640','#8d9c78'],['#86837b','#5a5750','#a7a49a'],['#8c5349','#5e332d','#ae7164']][vi];
const hy=-uxH(ph,sn,11,20)-id*.35+wu*3+(ch?3:0)-sk*2.5,pu=.4+.2*M.sin(T*2.4)+wu*.3+sk*.4+p2*.25,gk=p2?'r':'a';
gl(p2?'r':'f',0,hy-14,56,.06+pu*.06);
if(vi==2){
const cw=M.sin(T*2+.7)*1.6-sn*5-(rc?11:0)-sk*3+M.sin(ph-1.2)*2*sn;
g.save();g.translate(0,hy);g.fillStyle='#6a1f2a';g.beginPath();g.moveTo(-8,-26);g.quadraticCurveTo(-18-sn*4,-10,-17-sn*5+cw,16);
for(let k=1;k<=5;k++)g.lineTo(lr(-17-sn*5+cw,-1,k/5),16+(k&1?-3:2)+M.sin(T*2.6+k)*.8);
g.lineTo(2,-18);g.closePath();g.fill();g.restore();
}
const k1=uxLeg(ph+PI,sn,-4,hy,11,5,10,2.4,K[1],'#2c2622');
const k2=uxLeg(ph,sn,4,hy,11,5,10,2.5,K[0],'#352e28');
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
const pp=m.pt+(rc?.1:ch?-.08:0)+sk*.1-wu*.1;g.rotate(pp);
g.fillStyle='#4a3a2c';g.beginPath();g.moveTo(-11,-2);g.lineTo(11,-2);
for(let k=0;k<6;k++)g.lineTo(10-k*4+m.pt*18,5+(k&1?4:0)+M.sin(T*2+k+e.id)*.7);
g.closePath();g.fill();
g.fillStyle='#2a2320';g.fillRect(-11,-5,22,3.4);
const ts0=M.sin(ph*2-.9)*1.5*sn+M.sin(T*2.4+e.id)*.6;
sl(-7,-2,-7+ts0*.5,3,'#6a5a46',.8);ov(-7+ts0,5.4,2.4,2.1,'#d4cdb6');ov(-7.8+ts0,5,.7,.7,'#1a1512');ov(-6.2+ts0,5,.7,.7,'#1a1512');
g.save();g.translate(0,-4);
const cp=m.ct*.8+(rc?.1:ch?-.08:0)-wu*.3+sk*.36+m.br*.025,tp=pp+cp;g.rotate(cp);
if(vi<2){
g.save();g.translate(-12,-24);g.rotate(-.3+M.sin(ph*2-1)*.04*sn-sk*.12+wu*.1);
if(vi==0){
g.strokeStyle='#34343a';g.lineWidth=2.6;g.strokeRect(-8,-19,16,38);
g.lineWidth=1.8;for(let k=0;k<4;k++){g.beginPath();g.moveTo(-4.8+k*3.2,-19);g.lineTo(-4.8+k*3.2,19);g.stroke()}
g.beginPath();g.moveTo(-8,-6);g.lineTo(8,-6);g.moveTo(-8,8);g.lineTo(8,8);g.stroke();
g.fillStyle='#34343a';for(let k=0;k<4;k++)poly([-8+k*5.4,-19,-6+k*5.4,-27+(k&1)*2,-4.4+k*5.4,-19]),g.fill();
g.fillStyle='rgba(110,70,48,.7)';g.fillRect(-8,-4,5,3);g.fillRect(2,9,6,3);
for(let k=0;k<3;k++)ov(-6.4+k*6.4,-6,.9,.9,'#7a7a82');
}else{
poly([-8,-18,-2,-22,3,-17,8,-20,9,18,-9,18],'#8a877e','#4a4740',1);
sl(-3,-17,0,-6,'#4a4740',1);sl(0,-6,-4,4,'#4a4740',1);sl(2,-14,5,2,'#4a4740',.9);
ov(-3,10,3.4,2,'rgba(84,110,64,.55)');
}
g.restore();
}
const fth=lr(1.5+m.ar*.45-sk*.4,-1.6,wu)+(rc?-.9:0),fa=uxArm(-14,-22,fth-tp,25,1,2.3,15,16,K[1],K[1],6.2);
g.strokeStyle='#4a4a50';g.lineWidth=1.8;g.beginPath();g.ellipse(fa[2]-1,fa[3]+4.5,4,1.8,0,0,TAU);g.stroke();
for(let k=1;k<=5;k++){const cx=fa[2]-1-sn*1.6*k+M.sin(ph*2-.9*k)*.8*k*sn+M.sin(T*2.2+k)*.5,cy=fa[3]+5+k*3.3;ov(cx,cy,1.5,2.1,'#6a6a72');ov(cx,cy,.7,1.2,K[1])}
const gr=g.createLinearGradient(-18,-29,14,5);gr.addColorStop(0,K[2]);gr.addColorStop(.5,K[0]);gr.addColorStop(1,K[1]);
g.fillStyle=gr;g.beginPath();g.moveTo(-9,5);g.lineTo(10,5);g.lineTo(14,-6);g.lineTo(18,-18);g.lineTo(14,-27);g.lineTo(0,-29);g.lineTo(-14,-27);g.lineTo(-18,-18);g.lineTo(-14,-6);g.closePath();g.fill();
poly([-14,-27,-18,-18,-14,-6,-9,5,-6,5,-9,-10,-9,-24],'rgba(0,0,0,.2)');
const bl=M.sin(ph*2-1.5)*1.1*sn+m.br*.8;
ov(2,-1+bl,10,8,K[0]);ov(2,1+bl,9,5.4,'rgba(0,0,0,.14)');
g.strokeStyle='rgba(0,0,0,.35)';g.lineWidth=1;g.beginPath();g.moveTo(-8,-10);g.quadraticCurveTo(2,-6,12,-12);g.stroke();
g.beginPath();g.moveTo(1,-24);g.lineTo(2,-10);g.stroke();
sl(-6,-14,8,-3+bl,'#3a2020',1.2);
for(let k=0;k<4;k++){const t=(k+.5)/4,x=lr(-6,8,t),y=lr(-14,-3+bl,t);sl(x-1.2,y-1.6,x+1.2,y+1.6,'#3a2020',.9)}
if(p2){g.strokeStyle='rgba(255,90,60,'+(.35+pu*.4)+')';g.lineWidth=.8;g.beginPath();g.moveTo(-10,-20);g.lineTo(-6,-14);g.lineTo(-8,-9);g.moveTo(12,-22);g.lineTo(9,-15);g.lineTo(11,-9);g.stroke()}
for(let k=0;k<9;k++){const t=k/8,x=lr(13,-8,t),y=lr(-25,2,t)+bl*t;g.save();g.translate(x,y);g.rotate(.9+(k&1?1.57:0));ov(0,0,2.4,1.5,'#6a6a72');ov(0,0,1.2,.6,K[0]);g.restore()}
g.fillStyle='#7a5a3a';g.fillRect(2.6,-12+bl*.5,4.4,4.2);g.strokeStyle='#4a3524';g.lineWidth=.8;g.strokeRect(2.6,-12+bl*.5,4.4,4.2);
ov(-14,-22,7.4,5.6,K[1]);
const sb=M.sin(T*1.8+e.id)*.8+m.ct*10;
ov(15,-22+sb,8.4,6.4,K[0]);ov(14,-24+sb,5,2.6,'rgba(255,255,255,.1)');
for(let k=0;k<3;k++)poly([10+k*4.4,-26+sb,11.6+k*4.4,-33+sb-(k==1)*3,13.4+k*4.4,-26+sb],'#e0d8c2','#8f8874',.6);
const hp=-tp*.6+m.hd-wu*.4+sk*.3+(rc?.32:0)+id*.03;
g.save();g.translate(5,-29);g.rotate(hp);
uxT(-1,6,-1,-1,6.6,6,K[1]);
poly([-5,-3,-9.5,-7,-6,1],K[1]);
ov(0,-2,6.4,5.6,K[0]);ov(-1.8,-3.8,3.4,2.2,'rgba(255,255,255,.1)');
poly([-5,-5.4,3,-6.8,7.8,-3.6,6,-2,-5,-2.6],K[1]);
const jw=.1+wu*.8+sk*.45+(ch?.5:0)+M.sin(T*2.6+e.id)*.03,jy=jw*9;
poly([-2,2.4,7.6,2.4,8,4+jy,-1,4+jy],'#2a0f0f');
poly([-3,2.4,7,2.2,10.5,4.6+jy,7,9+jy,-1,8+jy],K[1],'#1c1612',.8);
poly([6.2,5+jy,7.4,-1.4,8.8,5+jy],'#e4dcc6','#9a937f',.6);
poly([2.6,5+jy*.9,3.3,.4,4.3,5+jy*.9],'#e4dcc6','#9a937f',.6);
ov(7.2,0,1.5,1.1,'#2a1c18');
ov(3.8,-2.4,1.5,1.2,'#0b0807');ov(4,-2.4,.7,.6,p2?'#ff7a5a':'#ffcf80');gl(gk,4,-2.4,7,.4+p2*.3+wu*.2);
if(vi==0){poly([-6.4,-5,-.4,-6.6,.8,.4,-2.4,3.6,-6.8,1.6],'#3f3f45','#1c1c20',.8);sl(-3.6,-2.6,.2,-2.8,'#0a0a0c',1);ov(-5,-3.6,.6,.6,'#8a8a92');ov(-1.4,.8,.6,.6,'#8a8a92')}
if(vi==1)for(let k=0;k<4;k++)poly([-5+k*3.2,-7,-4+k*3.2,-12-(k&1)*2.6,-2.4+k*3.2,-7],K[2],'#3a3832',.7);
if(vi==2){g.fillStyle='#c79a3a';g.fillRect(-5.6,-8.4,11.2,2.6);for(let k=0;k<3;k++)poly([-5.6+k*5.6,-8.4,-3.6+k*5.6,-13.4,-1.6+k*5.6,-8.4],'#c79a3a');ov(.2,-7.1,1,1,'#d03040')}
g.restore();
const thW=lr(lr(rc?.3:ch?.2:.45-m.ar*.1,-2.2,wu),.78,sk),tsW=lr(lr(rc?.75:1.45-m.ar*.45,-1.9,wu),1.1,sk),th=thW-tp,ts=tsW-tp,p0=[15+M.cos(ts)*26,-22+sb+M.sin(ts)*26];
g.save();g.translate(p0[0],p0[1]);g.rotate(th);
poly([-8,-3.6,14,-4.6,36,-9,36,9,14,4.6,-8,3.6],'#77716a','#2c2824',1);
poly([14,-4.6,36,-9,36,-6,14,-3],'rgba(255,255,255,.1)');
g.fillStyle='#2e2a28';for(let k=0;k<3;k++)g.fillRect(2+k*12,-7.4+k*1.2,3.6,14.8-k*2.4);
for(let k=0;k<3;k++){ov(3.8+k*12,-4.4+k*.6,.8,.8,'#8a8078');ov(3.8+k*12,4.4-k*.6,.8,.8,'#8a8078')}
poly([30,-9,34,-12,36,-8],'#77716a','#2c2824',.8);
sl(24,-2,29,3,'rgba(30,26,22,.8)',.9);
ov(31,5,2.6,1.4,'rgba(84,110,64,.55)');
if(sk>.4)gl('w',29,0,34,(sk-.4)*1.3);
g.restore();
uxArm(15,-22+sb,ts,26,1,2.7,15,16,K[0],K[0],6.6);
g.restore();g.restore();
uxW(e,10,hy-50,'w',2,16,6,.08,.5);
uxW(e,0,hy-4,p2?'r':'f',3,48,9,.08+p2*.06,.4);
uxSl(24,hy-26,36,-1.9,1.2,sk*.6,'255,170,90');
}
