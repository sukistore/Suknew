function dGk(s,sn,ph,id,sw,hy,cs,cw){
const c=s.c,bs=M.max(0,sw),wb=M.max(0,-sw),pu=.5+.25*M.sin(T*2.3+s.id),qx=15-wb*5+bs*9,qy=-17,bb=M.abs(M.cos(ph))*sn*1.8+M.sin(T*1.9+s.id)*.5*(1-sn),hp=hy-3,sy=M.sin(ph)*sn*3;
g.save();g.scale(.98,.98);
const k1=sqLeg(ph+PI,sn,-3.4,hp,'#34323a','#26242b',1.7);
const k2=sqLeg(ph,sn,3.4,hp,'#403e47','#2e2c34',1.7);
for(const k of[k1,k2]){
poly([k[0]-3.8,k[1]-2.8,k[0]+4,k[1]-3,k[0]+4.6,k[1]+2.6,k[0]-4,k[1]+2.8],'#4b4953','#16151a',.7);
poly([k[0]-3.8,k[1]-2.8,k[0]+4,k[1]-3,k[0]+1,k[1]-.6],'rgba(255,255,255,.09)');
sqSpk(k[0]+4,k[1]-.4,-.3,4.6,1.5,'#5a5862','#16151a');
sl(k[0]-2,k[1]-1,k[0]+2,k[1]+1,'rgba(255,130,40,'+(.4+pu*.5)+')',.9);
sqSpk(k[2]+5,k[3]+1,-.1,4.2,1.5,'#6a6872','#16151a');
}
g.save();g.translate(0,hp-bb);g.rotate(sn*.05+sw*.04);
g.lineCap='round';g.lineJoin='round';
sqLb(-13,-22,-17+sy,-12,-16+sy*1.3,-3,2.6,'#34323a');
ov(-16+sy*1.3,-1.4,6.2,5.6,'#4a4852');g.strokeStyle='#16151a';g.lineWidth=.9;g.beginPath();g.ellipse(-16+sy*1.3,-1.4,6.2,5.6,0,0,TAU);g.stroke();
for(let k=0;k<3;k++)sqSpk(-18.4+sy*1.3+k*2.4,2.8,1.57,3.4,1.2,'#5a5862','#16151a');
poly([-9,2,9,2,8,-4,-8,-4],'#2a2830','#16151a',.8);
for(let k=0;k<4;k++)ov(-6+k*4,-1,.9,.9,'#8a8792');
for(let k=0;k<3;k++){const y0=-4-k*4.6;poly([-8.6+k*.5,y0,8.6-k*.5,y0,8.9-k*.5,y0-4.8,-8.9+k*.5,y0-4.8],k&1?'#38363f':'#32303a','#16151a',.7)}
const gr=g.createLinearGradient(-14,-30,14,-4);gr.addColorStop(0,'#5c5a64');gr.addColorStop(1,'#26242b');
g.fillStyle=gr;g.beginPath();g.moveTo(-9,-17);g.lineTo(9,-17);g.lineTo(13,-22);g.lineTo(14,-29);g.lineTo(9,-34);g.lineTo(-9,-34);g.lineTo(-15,-29);g.lineTo(-13.4,-22);g.closePath();g.fill();
g.strokeStyle='#16151a';g.lineWidth=1.1;g.stroke();
poly([-13.4,-22,-15,-29,-9,-34,-4,-24],'rgba(255,255,255,.1)');
poly([13,-22,14,-29,9,-34,5,-24],'rgba(0,0,0,.25)');
poly([-9,-26,-1,-25,-1,-18,-10,-19],'rgba(255,255,255,.06)');
poly([1,-26,9,-26,10,-19,1,-18],'rgba(255,255,255,.06)');
sl(0,-33,0,-18,'#16151a',1);
og(0,-25,11,'255,120,40',.3+pu*.2);
poly([0,-30,3.6,-25,0,-20,-3.6,-25],'#ffb25a','#7a2a08',.7);poly([0,-28,1.8,-25,0,-22,-1.8,-25],'#fff0c0');
g.save();g.globalCompositeOperation='lighter';g.strokeStyle='rgba(255,140,50,'+(.5+pu*.5)+')';g.lineWidth=1;
g.beginPath();g.moveTo(-3.6,-25);g.lineTo(-7,-28);g.lineTo(-8,-33);g.moveTo(3.6,-25);g.lineTo(7,-23);g.lineTo(9,-18);g.moveTo(0,-20);g.lineTo(-2,-16);g.lineTo(-1,-12);g.moveTo(-3,-22);g.lineTo(-8,-21);g.lineTo(-11,-24);g.moveTo(-12,-26);g.lineTo(-14,-22);g.moveTo(11,-27);g.lineTo(13,-24);g.stroke();g.restore();
g.fillStyle='rgba(84,120,60,.45)';g.beginPath();g.ellipse(-8,-31,5,2,.3,0,TAU);g.fill();g.beginPath();g.ellipse(7,-19,3.6,1.6,0,0,TAU);g.fill();
for(let k=0;k<3;k++){const t=(T*.7+k*.33)%1;ov(-8+k*8,-12+t*12,.9,1.5*(1-t*.5),'rgba(255,140,40,'+(1-t)+')')}
ov(-14,-30,8.4,6.6,'#4e4c56');ov(13.4,-31,8.8,6.8,'#5a5862');
g.strokeStyle='#16151a';g.lineWidth=.9;g.beginPath();g.ellipse(-14,-30,8.4,6.6,0,0,TAU);g.stroke();g.beginPath();g.ellipse(13.4,-31,8.8,6.8,0,0,TAU);g.stroke();
poly([-18,-33,-12,-35,-10,-30],'rgba(255,255,255,.1)');
sqSpk(-17.4,-34,-2.1,10,2.3,'#6a6872','#16151a');sqSpk(-12,-36,-1.8,7,1.8,'#5a5862','#16151a');
sqSpk(11,-37,-1.2,11,2.4,'#6a6872','#16151a');sqSpk(16.6,-35,-.6,7.6,2,'#5a5862','#16151a');
sl(-16,-31,-13,-27,'rgba(255,140,50,'+(.5+pu*.4)+')',.9);sl(12,-32,15,-28,'rgba(255,140,50,'+(.5+pu*.4)+')',.9);
g.fillStyle='#575560';g.beginPath();g.moveTo(-5,-34);g.lineTo(-6,-43);g.lineTo(1,-47);g.lineTo(9,-44);g.lineTo(10.4,-36);g.lineTo(6,-33);g.closePath();g.fill();
g.strokeStyle='#16151a';g.lineWidth=1.1;g.stroke();
poly([-5,-34,-6,-43,1,-47,-1,-37],'rgba(255,255,255,.12)');
poly([1,-47,9,-44,10.4,-36,6,-33,3,-37],'rgba(0,0,0,.25)');
sqSpk(-3,-44.4,-1.8,9,2.2,'#6a6872','#16151a');sqSpk(3,-46.4,-1.3,7.4,1.8,'#5a5862','#16151a');sqSpk(8,-43,-.8,6,1.6,'#5a5862','#16151a');
poly([2.6,-41.6,11,-43.8,10.8,-41.2,3.6,-39],'#1c1b20','#0e0d10',.5);
poly([4,-40.6,10.4,-42.4,10,-39.4,5,-38.4],'#2a0c04');
poly([4.8,-40,10,-41.4,9.8,-39.6,5.6,-39],'#ffb25a');
og(7.6,-40.2,7,'255,140,40',.4+bs*.3);
g.fillStyle='#0c0706';g.fillRect(3.6,-37,7.4,3.4);
g.fillStyle='rgba(255,120,40,'+(.4+pu*.4)+')';g.fillRect(4.2,-36.4,6.2,2);
g.fillStyle='#d8cfb8';for(let k=0;k<4;k++){g.beginPath();g.moveTo(3.8+k*1.8,-37);g.lineTo(4.7+k*1.8,-34.2);g.lineTo(5.6+k*1.8,-37);g.closePath();g.fill()}
sl(-1,-40,1.4,-35,'rgba(255,140,50,.6)',.9);
sqLb(12,-26,lr(12,qx,.5),lr(-26,qy,.5)+3.6,qx,qy,2.4,'#3d3b44');
ov(qx,qy,5.2,4.8,'#4e4c56');
for(let k=0;k<3;k++)sqSpk(qx+2.8,qy-2.6+k*2.6,-.1,3.8,1.1,'#6a6872','#16151a');
g.save();g.translate(qx+4,qy-1);
const sg=g.createLinearGradient(-8,-21,8,21);sg.addColorStop(0,'#74717a');sg.addColorStop(1,'#2a282f');
g.fillStyle=sg;g.beginPath();g.moveTo(-6,-21);g.lineTo(6,-21);g.lineTo(8,2);g.quadraticCurveTo(7,15,0,21);g.quadraticCurveTo(-7,15,-8,2);g.closePath();g.fill();
g.strokeStyle='#16151a';g.lineWidth=1.5;g.stroke();
for(let k=0;k<4;k++)sqSpk(-5.4+k*3.6,-21,-1.57,4.8,1.5,'#7e7b84','#16151a');
g.strokeStyle='rgba(255,140,50,.35)';g.lineWidth=1;
g.beginPath();g.moveTo(-4.4,-18);g.lineTo(4.4,-18);g.lineTo(5.6,2);g.quadraticCurveTo(4.8,12,0,17);g.quadraticCurveTo(-4.8,12,-5.6,2);g.closePath();g.stroke();
g.strokeStyle='rgba(10,10,12,.7)';g.lineWidth=.9;
g.beginPath();g.moveTo(-3,-18);g.lineTo(-1,-10);g.lineTo(-4,-5);g.moveTo(3,12);g.lineTo(1,6);g.lineTo(4,2);g.stroke();
poly([-1.6,-8,0,-14,1.6,-8],'#8a8792','#16151a',.5);
ov(0,-2,3.8,4.6,'#2a282f');ov(0,-2,1.9,2.5,'rgba(255,150,50,'+(pu+bs*.3)+')');
g.restore();
g.restore();
g.restore();
}

const SD=[dAr,dMg,dEl,dGk];
