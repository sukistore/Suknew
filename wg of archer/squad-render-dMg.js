function dMg(s,sn,ph,id,sw,hy,cs,cw){
const c=s.c,cr=M.max(0,sw);
const bb=M.abs(M.cos(ph))*sn*1.3+M.sin(T*2.3+s.id)*.45*(1-sn),hx=3.5+sn,hh=-29+id*.3+(M.abs(M.cos(ph))-M.abs(M.cos(ph-.7)))*sn*.7,shy=-19+id*.3,hp=hy-5;
sqLeg(ph+PI,sn,-1.8,hp,'#1a2234','#2c3448',1);
sqLeg(ph,sn,1.8,hp,'#212b40','#36405a',1);
g.save();g.translate(0,hp-bb);g.rotate(sn*.1+sw*.07+M.sin(T*2.3)*.012-M.sin(ph)*sn*.035);g.scale(1,1+M.sin(T*2.3+s.id)*.012);
g.lineCap='round';g.lineJoin='round';
for(let k=0;k<3;k++){const a=T*1.6+k*2.09,ox=-4+M.cos(a)*12,oy=-24+M.sin(a)*5+k;poly([ox,oy-3.2,ox+1.4,oy,ox,oy+3.2,ox-1.4,oy],'rgba(205,232,255,.85)','rgba(80,120,170,.7)',.5);}
rbfx(rbn(-4.5,-17,28,sn,cs,cw,'#1c2a46','#355483',0,7.5),0,0);
rbfx(rbn(-6,-4,16,sn,cs,cw,'#16203a','#2a4068',1.7,5.5),0,5);
const x0=-9.6-cs*.5+cw*.5,x1=7+cw*.3;
const hm=k=>[lr(x0,x1,k/8)-sn*(1-k/8)*6-M.sin(T*4+k)*.8,6+(k&1?4.2:0)+M.sin(T*4.2+k*1.3)*(1+sn*2)];
const wv=()=>{for(let k=0;k<=8;k++){const q=hm(k);g.lineTo(q[0],q[1])}};
g.fillStyle='#24385a';
g.beginPath();g.moveTo(-5.6,-2);g.quadraticCurveTo(-8.2,2,x0,6);wv();g.quadraticCurveTo(9,2,5.8,-2);g.closePath();g.fill();
g.fillStyle='rgba(8,12,30,.3)';g.beginPath();g.moveTo(-6,-2);g.quadraticCurveTo(-8.2,2,x0,6);wv();g.lineTo(-.4,-2);g.closePath();g.fill();
g.strokeStyle='#cfe6ff';g.lineWidth=1;g.beginPath();g.moveTo(x0,6);wv();g.stroke();
for(let k=1;k<8;k+=2){const q=hm(k);poly([q[0]-1.3,q[1]-1,q[0],q[1]+3.8,q[0]+1.3,q[1]-1],'#d6ecff')}
poly([-1.8,-4,4,-4,5.6,7,-.2,8.8],'#3c5f95','rgba(10,14,30,.45)',.7);
sl(-.2,-3,.8,8,'#cfe6ff',.8);
sl(-6,0,-7+cw*.3-cs*.3,6,'rgba(12,16,30,.35)',.8);sl(-3,0,-4,7,'rgba(12,16,30,.3)',.8);
g.save();g.globalCompositeOperation='lighter';g.strokeStyle='rgba(140,210,255,.55)';g.lineWidth=.7;
g.beginPath();g.moveTo(1,-1);g.lineTo(2.4,1.4);g.lineTo(1,3.8);g.moveTo(3.4,.4);g.lineTo(3.4,5.4);g.stroke();g.restore();
poly([-6.6,-19,-1.5,-21,5.6,-19.4,7,-14,5,-8,3.8,-2.4,5.6,0,-5.6,0,-4,-2.4,-5.4,-8,-7.4,-14],'#2a4068','rgba(10,14,30,.55)',.8);
poly([-7.4,-14,-6.6,-19,-1.5,-21,-1,0,-5.6,0,-4,-2.4,-5.4,-8],'rgba(10,14,30,.28)');
poly([-4.6,-18,4.8,-18.4,5.6,-11,3.8,-6,-3.2,-6.4,-5.2,-11],'#9fb6d2','rgba(10,14,30,.5)',.7);
for(let k=0;k<3;k++)sl(-3.4,-16+k*3.2,4.4,-15.6+k*3.2,'rgba(10,14,30,.35)',.7);
poly([-5,-18,-3,-18.8,6,-5,4,-3.6],'#cfe6ff','rgba(10,14,30,.4)',.5);
poly([.2,-14,2.2,-11,.2,-8,-1.8,-11],'#bfeaff');og(.2,-11,6,'150,220,255',.4);
g.fillStyle='#16203a';g.fillRect(-5.8,-4.2,11.6,2.2);
ov(3.6,-3.1,2.2,2.2,'#d8d1bf');ov(3.2,-3.4,.5,.6,'#16121a');ov(4.2,-3.4,.5,.6,'#16121a');
sl(-6,-3.2,-8-cs*.3+cw*.6,3,'#6a5a3c',1.4);poly([-8.6-cs*.3+cw*.6,3,-6.6-cs*.3+cw*.6,3,-7.6-cs*.3+cw*.6,6.4],'#bfeaff');
poly([hx-2.4,hh+4.6,hx+1.8,hh+4.6,hx+2,-19.6,hx-2.6,-19.8],'#a8998a');
sqFur(1.2,-19.6,9,'#e4edf6','#9fb2c8',sn);
g.save();g.translate(hx,hh);g.scale(.82,.82);g.translate(-hx,-hh);
rbfx(rbn(hx-5,hh-3,16,sn,cs,cw,'#8fa9cf','#e4f0ff',3.1,4.8),0,3);
sqFc(hx,hh,'#dcd0c8','#9d9096','#e6faff','c');
sl(hx+2.6,hh+1.8,hx+4.2,hh+5.4,'rgba(120,200,255,.8)',.8);sl(hx+1.4,hh+2,hx+2.6,hh+6.4,'rgba(120,200,255,.5)',.6);
poly([hx-6.4,hh-3.4,hx-4,hh-9.4,hx+3,hh-9,hx+6.4,hh-3.8,hx+1.6,hh-5.6,hx-2.8,hh-3.6],'#a9c3e6','rgba(40,60,100,.5)',.6);
poly([hx-5.8,hh-6.8,hx+5.8,hh-6.4,hx+5.2,hh-4.8,hx-5.6,hh-5.2],'#cfe6ff','#4a6a96',.5);
for(let k=0;k<5;k++)sqSpk(hx-4.4+k*2.3,hh-6.8,-1.9+k*.28,6.5+(k==2?6:0)-(k&1)*1.6,1.5,'#d6ecff','#4a6a96');
og(hx+3,hh-.4,6,'150,230,255',.3);
g.restore();
const th=.35-sw*.3;
const r=sqArm('#233a5c','#d9ccc2',th,11,shy,1.1);
pld(1.5,shy+.4,'#2f3852','#9fb6d2',1);
sl(lr(r[0],r[2],.4),lr(r[1],r[3],.4),lr(r[0],r[2],.92),lr(r[1],r[3],.92),'#26272e',4.8);
sl(lr(r[0],r[2],.5),lr(r[1],r[3],.5),lr(r[0],r[2],.8),lr(r[1],r[3],.8),'rgba(150,170,210,.3)',.8);
g.save();g.translate(r[2],r[3]);g.rotate(-1.5+sw*.2);
sl(-14,0,25,0,'#3c2e22',2.6);
sl(-14,-.7,25,-.7,'rgba(255,230,190,.12)',.7);
for(let k=0;k<3;k++)sl(-6+k*9,-1.6,-6+k*9,1.6,'#6a5a3c',1.2);
sl(5,-1.6,5,1.6,'#6a5a3c',2);
g.strokeStyle='#5a5a66';g.lineWidth=1.8;g.beginPath();g.moveTo(23,-2);g.quadraticCurveTo(28,-8.4,36,-5.4);g.moveTo(23,2);g.quadraticCurveTo(28,8.4,36,5.4);g.stroke();
poly([35,-5.4,40,-3,36.6,-3.6],'#a8a8b6');poly([35,5.4,40,3,36.6,3.6],'#a8a8b6');
poly([28,0,33,-3.6,45,0,33,3.6],'#9fb6d2','rgba(225,235,250,.75)',.6);
poly([30,-1.4,34,-8.6,37,-2],'#86a0c4','rgba(225,235,250,.6)',.5);
poly([30,1.4,33,7.6,36,2],'#86a0c4','rgba(225,235,250,.6)',.5);
poly([32,0,34,-1.9,39,0],'rgba(255,255,255,.55)');
gl('c',36,0,16+M.max(0,sw)*10,.16+M.max(0,sw)*.35+.04*M.sin(T*3));
const sy=M.sin(T*2.2)*1.4;
sl(17,0,17+sy*.3,3.4,'#8a7a58',.6);
ov(17+sy*.4,5.6,2,2.3,'#ddd7c6');
ov(16.4+sy*.4,5.2,.5,.6,'#16121a');ov(18+sy*.4,5.2,.5,.6,'#16121a');
for(let k=0;k<3;k++){const a=T*1.7+k*2.09,ax=37+M.cos(a)*11,ay=M.sin(a)*6;poly([ax,ay-2.4,ax+1.2,ay,ax,ay+2.4,ax-1.2,ay],'rgba(205,225,245,.9)')}
g.restore();
g.restore();
}

