function evFx(dt){
if(p.wf){p.wf*=M.exp(-dt*4);if(p.wf<.01)p.wf=0}
if(wgT()==1){
const q=p.wa;
if(M.random()<dt*.1*(4+q*8)&&P.length<240){const l=rnd(1.4,2.4);P.push({t:8,x:p.x-p.f*rnd(8,40),y:p.y-rnd(40,92),vx:-p.f*rnd(6,36)+p.vx*.4,vy:rnd(-26,6),l,m:l,r:rnd(4.5,7.5),c:'255,238,180',gv:rnd(12,26),dg:.7,an:rnd(0,TAU),sp:rnd(-4,4)})}
if(M.random()<dt*.1*(12+q*16))sp(1,p.x-p.f*rnd(6,50),p.y-rnd(30,100),rnd(-10,10),rnd(-20,-4),rnd(.5,.9),rnd(6,11),'p');
}
if(wgT()==2){
const q=p.wa;
if(M.random()<dt*.1*(8+q*12)&&P.length<240){const l=rnd(.9,1.6);P.push({t:10,x:p.x-p.f*rnd(6,34),y:p.y-rnd(36,88),vx:-p.f*rnd(4,24)+p.vx*.3,vy:rnd(-22,2),l,m:l,r:rnd(2.6,4.4),c:'190,225,255',gv:6,dg:.8,an:rnd(0,TAU),sp:rnd(-5,5)})}
if(M.random()<dt*.1*(24+q*20))sp(1,p.x-p.f*rnd(6,56),p.y-rnd(30,100),rnd(-8,8),rnd(-18,-3),rnd(.5,.9),rnd(5,9),'s');
}
if(p.vt==5){
if(M.random()<dt*.1*16&&P.length<240){const l=rnd(.8,1.5),a=rnd(0,TAU);P.push({t:10,x:p.x+M.cos(a)*rnd(10,22),y:p.y-rnd(8,70),vx:rnd(-6,6),vy:rnd(-26,-8),l,m:l,r:rnd(1.6,3),c:'205,232,255',gv:0,dg:.6,an:rnd(0,TAU),sp:rnd(-5,5)})}
if(M.random()<dt*.1*12)sp(1,p.x+rnd(-14,14),p.y-rnd(4,80),rnd(-6,6),rnd(-20,-6),rnd(.5,.9),rnd(4,8),'s');
}
if(p.vt>0){
const e2=AE[p.vt],mv=M.min(1,M.abs(p.vx)/190);
if(M.random()<dt*(2+p.vt*2.2)&&P.length<200)sp(1,p.x-p.f*rnd(-6,14),p.y-rnd(44,70),rnd(-10,10)-p.f*8,rnd(-30,-12),rnd(.5,1),rnd(4,8),e2.k,-6,.6);
if(p.air<.3&&mv>.3&&M.random()<dt*(10+p.vt*5))sp(1,p.x+rnd(-6,6),p.y-rnd(0,3),-p.f*rnd(6,26),rnd(-34,-10),rnd(.3,.6),rnd(4,7),e2.k,30,1);
if((p.vt==1||p.vt==3||p.vt==5)&&M.random()<dt*(3+p.vt)*(p.vt==5?.1:1)&&P.length<220){const l=rnd(.6,1.1);P.push({t:10,x:p.x+rnd(-18,18),y:p.y-rnd(14,70),vx:rnd(-6,6),vy:rnd(-14,-2),l,m:l,r:rnd(2.4,4),c:e2.s,gv:0,dg:.5,an:rnd(0,TAU),sp:rnd(-6,6)})}
if(p.vt==2&&M.random()<dt*10&&P.length<200)sp(5,p.x+rnd(-10,10),p.y-rnd(10,60),rnd(-8,8),rnd(-50,-24),rnd(.5,.9),rnd(1,2),e2.s,-20,.3);
if(p.vt==4&&M.random()<dt*5&&P.length<200)sp(1,p.x+p.f*rnd(-4,16),p.y-rnd(66,80),rnd(-6,6),rnd(-16,-4),rnd(.6,1),rnd(3,5),'p');
}
if(p.dr&&p.ch>.25&&M.random()<dt*(10+p.ch*30)&&P.length<200)sp(1,p.x+p.f*rnd(14,28),p.y-rnd(26,42),rnd(-16,16)+p.f*rnd(0,20),rnd(-22,10),rnd(.2,.45),rnd(3,6),AE[p.vt].k);
if(!p.vt||M.random()>dt*(4+p.vt*4))return;
const e=AE[p.vt];
sp(5,p.x+rnd(-12,12),p.y-rnd(8,52),rnd(-8,8),rnd(-34,-14),rnd(.6,1.1),1.5,e.s,0,.4);
}
function evFl(hx,hh){
g.globalCompositeOperation='lighter';g.globalAlpha=PFX;
for(let k=0;k<3;k++){
const w=M.sin(T*9+k*2)*1.6,h=7+k*2.2+M.sin(T*7+k)*1.8,x=hx-4-k*3.6;
g.fillStyle='rgba(255,'+(120+k*30)+',70,.55)';
g.beginPath();g.moveTo(x-2,hh-6+k*.4);g.quadraticCurveTo(x-2+w,hh-6-h*.6,x+w*1.4-1,hh-6-h);g.quadraticCurveTo(x+2+w*.4,hh-6-h*.4,x+2,hh-6+k*.4);g.closePath();g.fill();
}
g.globalCompositeOperation='source-over';g.globalAlpha=1;
}
function evSh(){
for(let k=0;k<4;k++){
const a=T*2.2+k*TAU/4,x=M.cos(a)*17+2,y=-22+M.sin(a)*8-4*M.sin(T*3+k),z=M.sin(a)>0?1:.7;
gl('e',x,y,9*z,.6*z);
poly([x,y-4*z,x+1.8*z,y,x,y+4*z,x-1.8*z,y],'#e6dcff');
}
}
