function fireB(e,t,vo,p2){
if(!t)return;
const z=e.sz,ox=e.x+e.f*26*z,oy=e.y-30*z,ty=(t===p?p.y:t.y)-28,b=M.atan2(ty-oy,t.x-ox),n=vo?5+p2*2:1,v=vo?470:600;
for(let i=0;i<n;i++){
const a=b+(i-(n-1)/2)*.15;
Pr.push({t:'b',x:ox,y:oy,vx:M.cos(a)*v,vy:M.sin(a)*v,dm:e.dm*(vo?.5:.85),l:0,bg:vo?0:1});
}
ring(ox,oy,'215,70,95',vo?44:30);
sp(1,ox,oy,0,0,.25,vo?84:60,'r');
for(let i=0;i<8;i++)sp(3,ox,oy,e.f*rnd(60,260),rnd(-120,120),rnd(.2,.4),2,'225,85,110',200,2);
shake=M.max(shake,vo?3:2);
e.sw=1;
}
function upBossR(e,dt){
const t=near(e),p2=e.hp<e.mh*.5?1:0,dx=t?t.x-e.x:0,ad=M.abs(dx),nr=M.max(180,M.min(300,VW*.3)),fr=M.max(300,M.min(520,VW*.42));
e.tm-=dt;
if(e.st==0){
if(t)e.f=sgn(dx);
const want=t?(ad<nr?-e.f*e.sp*(1.6+p2*.4):ad>fr?e.f*e.sp*(1+p2*.3):0):0;
e.vx+=(want-e.vx)*M.min(1,dt*4);
e.sw*=M.exp(-dt*6);
if(e.tm<=0&&t&&ad<fr+120){e.n++;if(e.n%3==0){e.st=3;e.tm=p2?.85:1.1}else{e.st=1;e.tm=p2?.6:.8}}
}else if(e.st==1){
e.vx*=M.exp(-dt*6);if(t)e.f=sgn(dx);e.sw=-(1-M.max(0,e.tm)/(p2?.6:.8));
if(e.tm<=0){fireB(e,t,0,p2);e.st=2;e.tm=p2?.5:.8}
}else if(e.st==3){
e.vx*=M.exp(-dt*6);if(t)e.f=sgn(dx);e.sw=-(1-M.max(0,e.tm)/(p2?.85:1.1));
if(e.tm<=0){fireB(e,t,1,p2);e.st=2;e.tm=p2?.7:1}
}else{
e.vx*=M.exp(-dt*6);e.sw*=M.exp(-dt*3);
if(e.tm<=0){e.st=0;e.tm=p2?.6:1.1}
}
e.x+=e.vx*dt;
e.ph+=M.abs(e.vx)*dt*.05;
}

function bWg(e,sn,id,sw,ph){
const dv=e.st==2?1:0,fl=M.sin(T*(dv?15:9)+e.id*3),by=-34+id*1.6,tl=dv?.55:(e.st==1?-.25:0);
g.lineCap='round';g.lineJoin='round';
const wing=(c1,c2,s)=>{
g.save();g.translate(-1,by-4);g.rotate(-.35+fl*.75*s-dv*.6);
g.fillStyle=c1;g.beginPath();g.moveTo(0,0);g.lineTo(-3,-30);g.lineTo(-10,-22);g.lineTo(-15,-33);g.lineTo(-19,-20);g.lineTo(-27,-27);g.lineTo(-24,-8);g.lineTo(-30,-2);g.lineTo(-14,4);g.closePath();g.fill();
g.strokeStyle=c2;g.lineWidth=1.6;
g.beginPath();g.moveTo(0,0);g.lineTo(-3,-30);g.moveTo(0,0);g.lineTo(-15,-33);g.moveTo(0,0);g.lineTo(-27,-27);g.moveTo(0,0);g.lineTo(-30,-2);g.stroke();
g.restore();
};
wing('#2f2540','#1d1628',.8);
g.save();g.translate(0,by);g.rotate(tl);
g.strokeStyle='#2a2038';g.lineWidth=1.8;
g.beginPath();g.moveTo(-3,7);g.quadraticCurveTo(-8,12,-6,17+M.sin(T*4+e.id)*1.6);g.stroke();
sl(1,7,0,15,'#2a2038',1.8);
claws(0,15,1.3,'#d6cfb2',4);
ov(0,0,6.4,8.6,'#3d2f54');
ov(1,1,3.4,5,'#5b4678');
poly([4,-12,3,-19,8,-13],'#4d3c68');
poly([9,-13,12,-19,12,-11],'#4d3c68');
ov(7,-9,5.2,5,'#4d3c68');
poly([11,-8,16,-6.4,11.4,-5],'#3d2f54');
poly([12.4,-6,13,-3.6,13.8,-5.6],'#e6e0cc');
ov(9.6,-9.4,1.3,1.1,'#ffd27a');
gl('a',9.6,-9.4,6,.3);
g.restore();
wing('#4a3a63','#2a2038',1);
}
