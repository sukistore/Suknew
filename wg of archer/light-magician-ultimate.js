function alStrike(m){
let x;
const c=E.filter(e=>!e.dd&&e.x>cam-20&&e.x<cam+VW+20);
if(c.length&&M.random()<(m?.9:.65))x=c[M.floor(M.random()*c.length)].x+rnd(-24,24);
else x=rnd(cam+40,cam+VW-40);
const y0=rnd(70,110),pts=[[x+rnd(-50,50),y0]],n=M.floor((GY-y0)/26);
for(let i=1;i<=n;i++){const u=i/n;pts.push([lr(pts[0][0],x,u)+(i<n?rnd(-20,20)*(1-u*.5):0),lr(y0,GY,u)])}
const fk=[];
for(let i=2;i<n-1;i++)if(M.random()<(m?.35:.16)){
const d=M.random()<.5?-1:1,q=[pts[i]];
for(let k=1;k<=4;k++)q.push([q[k-1][0]+d*rnd(10,26),q[k-1][1]+rnd(14,30)]);
fk.push(q);
}
alS.bl.push({p:pts,k:fk,t:m?.34:.22,m:m?.34:.22,w:m?2.6:1.4});
const r=m?110:70,dm=(m?220:110)*gDm()*gUd();
for(const e of E){if(e.dd)continue;if(M.abs(e.x-x)<r*.6+12*e.sz)hurtE(e,dm,e.x<x?-1:1)}
ring(x,GY-4,alS.rg,r);if(m)ring(x,GY-4,'255,200,208',r*.6);
sp(1,x,GY-14,0,0,.3,m?150:90,'r');
for(let k=0;k<(m?18:9);k++){const a=rnd(PI,TAU),v=rnd(120,420);sp(3,x,GY-8,M.cos(a)*v,M.sin(a)*v,rnd(.2,.5),rnd(1.4,2.6),alS.rg,400,2)}
shake=M.max(shake,m?9:3);alS.fl2=M.min(1,alS.fl2+(m?.9:.35));
if(m){FXA.fl=.22;FXA.fc='255,200,208';alBurst(x,GY-30,6,260)}
}
function alUlDraw(){
if(!alS.u&&!alS.bl.length)return;
const t=alS.tu,k=alS.u?M.min(1,t/.7)*(t>3.9?M.max(0,1-(t-3.9)/.5):1):0;
g.save();
if(k>0){
g.globalAlpha=.5*k;g.fillStyle='rgba(6,2,10,1)';g.fillRect(cam-10,0,VW+20,VH);
for(const c of alS.cl){
const x=cam+c.x+M.sin(T*.35*c.s+c.d)*26,y=c.y-(1-k)*140+M.sin(T*.5+c.d)*5,r=c.r*(.85+.15*M.sin(T*.7*c.s+c.d));
g.globalAlpha=k*.95;g.drawImage(alCd,x-r,y-r*.62,r*2,r*1.24);
if(alS.fl2>.02){g.globalCompositeOperation='lighter';g.globalAlpha=alS.fl2*.5*k*PFX;g.drawImage(alCl,x-r,y-r*.62,r*2,r*1.24);g.globalCompositeOperation='source-over'}
}
g.globalAlpha=1;
}
g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
for(const b of alS.bl){
const f=b.t/b.m,a=M.min(1,f*2.2)*(.75+.25*M.sin(T*90)),all=[b.p].concat(b.k);
for(const q of all){
const tr=()=>{g.beginPath();g.moveTo(q[0][0],q[0][1]);for(let i=1;i<q.length;i++)g.lineTo(q[i][0],q[i][1])},s=q===b.p?1:.55;
g.strokeStyle='rgba(255,50,70,'+.18*a+')';g.lineWidth=b.w*7*s;tr();g.stroke();
g.strokeStyle='rgba(255,120,135,'+.5*a+')';g.lineWidth=b.w*2.8*s;tr();g.stroke();
g.strokeStyle='rgba(255,245,246,'+a+')';g.lineWidth=b.w*s;tr();g.stroke();
}
const e=b.p[b.p.length-1],R=60*b.w/1.4,gg=g.createRadialGradient(e[0],e[1],0,e[0],e[1],R);
gg.addColorStop(0,'rgba(255,200,208,'+.7*a+')');gg.addColorStop(1,'rgba(255,44,66,0)');
g.fillStyle=gg;g.beginPath();g.arc(e[0],e[1],R,0,TAU);g.fill();
}
if(alS.u&&t>.3&&k>0){
const tx=p.x+p.f*28,ty=p.y-132;
g.strokeStyle='rgba(255,160,172,'+.55*k+')';g.lineWidth=1;g.beginPath();g.moveTo(tx,ty);
for(let i=1;i<=6;i++){const u=i/6;g.lineTo(lr(tx,tx+rnd(-30,30),u)+rnd(-7,7),lr(ty,90,u))}
g.stroke();
}
g.restore();
}
function alFx(){
alUlDraw();
if((alS.on||alS.o2)&&!p.dead){
const k=alS.o2,tt=k?alS.t2:alS.t,u=M.min(1,tt/(k?.4:.45)),r=(k?24:20)+u*(k?36:30),a=k?(tt<1.5?1:M.max(0,1-(tt-1.5)/.35)):(tt<.95?1-M.max(0,(tt-.6)/.35):0);
g.save();g.translate(p.x,GY+1);g.scale(1,.22);g.globalCompositeOperation='lighter';g.globalAlpha=PFX;g.rotate(T*1.6);
g.strokeStyle='rgba(255,50,70,'+.7*a+')';g.lineWidth=2.4;g.beginPath();g.arc(0,0,r,0,TAU);g.stroke();
g.lineWidth=1.1;g.beginPath();g.arc(0,0,r*.72,0,TAU);g.stroke();
for(let i=0;i<8;i++){g.save();g.rotate(i*TAU/8);g.translate(r*.86,0);g.rotate(-PI/2);poly([0,-7,3.4,1,0,-1,-3.4,1],'rgba(255,60,80,'+.8*a+')');g.restore()}
g.restore();
}
for(const q of alS.pj){
g.save();g.translate(q.x,q.y);g.scale(q.f*2,2);orb6(T,M.min(1,q.l*9),1);g.restore();
}
for(const q of alS.rn){
g.save();g.translate(q.x,q.y);
g.globalCompositeOperation='lighter';
g.rotate(PI/2);
g.scale(1.5,1.5);orb6(T+q.x*.01,1,1);g.restore();
}
for(const b of alBt){const u=b.l/b.m;g.save();g.globalAlpha=M.min(1,u*3,(1-u)*6);g.translate(b.x,b.y);alBat(b.s,M.max(-.5,M.min(.5,b.vx*.012))+M.sin(T*4+b.w)*.15,b.fl);g.restore()}
g.globalAlpha=1;
}
