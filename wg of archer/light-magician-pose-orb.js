const alW=()=>-(2.2+M.sin(T*1.7)*1.2)-M.max(-1,M.min(1,p.vx*p.f/190))*7+p.wd*p.f*2;
function alPose(){
const c=alS.cs*.9;
if(alS.u){
const t=alS.tu,u=M.min(1,t/.5),e=u*u*(3-2*u),r=t>3.9?M.max(0,1-(t-3.9)/.5):1,k=e*r;
return{up:k,th:c,lf:16*k+M.sin(t*7)*2*k,sw:(M.sin(t*17)*.45+M.sin(t*29)*.15)*k};
}
if(alS.o2){
const t=alS.t2,u=M.min(1,t/.4),e=u*u*(3-2*u),r=t>1.5?M.max(0,1-(t-1.5)/.35):1,k=e*r;
return{up:k,th:c,lf:14*k+M.sin(t*9)*1.6*k,sw:M.sin(t*13)*.4*k};
}
const t=alS.on?alS.t:-1;
if(t<0)return{up:0,th:c,lf:0,sw:0};
if(t<.45){const u=t/.45,e=u*u*(3-2*u);return{up:e,th:c,lf:e*9,sw:0}}
const s=M.min(1,(t-.45)/.55),v=M.min(1,(t-.45)/.16),e=v*v*(3-2*v);
return{up:1-e,th:M.max(c,e*(1-s*s)),lf:9*(1-s),sw:0};
}
const O6C=[];
function o6S(tl){
const ix=tl?1:0;
if(O6C[ix])return O6C[ix];
const rs=2,x0=tl?-80:-48,y0=-48,w=tl?128:96,h=96,c=document.createElement('canvas');
c.width=w*rs;c.height=h*rs;
const o=g;g=c.getContext('2d');g.setTransform(rs,0,0,rs,-x0*rs,-y0*rs);
const fl=1;
g.globalCompositeOperation='lighter';
if(tl){
const tg=g.createLinearGradient(0,0,-78,0);tg.addColorStop(0,'rgba(255,110,125,'+.6*fl+')');tg.addColorStop(.4,'rgba(255,50,70,.22)');tg.addColorStop(1,'rgba(255,44,66,0)');
g.fillStyle=tg;g.beginPath();g.moveTo(0,-10);g.quadraticCurveTo(-34,-5,-78,0);g.quadraticCurveTo(-34,5,0,10);g.closePath();g.fill();
}
let q=g.createRadialGradient(0,0,0,0,0,48);
q.addColorStop(0,'rgba(255,120,135,'+.55*fl+')');q.addColorStop(.18,'rgba(255,60,80,'+.3*fl+')');q.addColorStop(.45,'rgba(255,44,66,'+.1*fl+')');q.addColorStop(1,'rgba(255,44,66,0)');
g.fillStyle=q;g.beginPath();g.arc(0,0,48,0,TAU);g.fill();
for(let r=0;r<2;r++){
const L=r?24:46,sx=g.createLinearGradient(-L,0,L,0);
sx.addColorStop(0,'rgba(255,60,80,0)');sx.addColorStop(.5,'rgba(255,175,188,'+(r?.35:.55)*fl+')');sx.addColorStop(1,'rgba(255,60,80,0)');
g.save();g.rotate(r*PI/2);g.fillStyle=sx;g.fillRect(-L,-.9,L*2,1.8);g.restore();
}
q=g.createRadialGradient(0,0,0,0,0,13);
q.addColorStop(0,'rgba(255,255,255,1)');q.addColorStop(.3,'rgba(255,228,233,.95)');q.addColorStop(.62,'rgba(255,90,110,.75)');q.addColorStop(1,'rgba(216,31,56,0)');
g.fillStyle=q;g.beginPath();g.arc(0,0,13,0,TAU);g.fill();
g=o;
return O6C[ix]={c,x:x0,y:y0,w,h};
}
function orb6(ph,vs,tl){
const a=vs===undefined?1:vs,fl=.85+.15*M.sin(ph*11)+.06*M.sin(ph*23);
g.save();g.globalAlpha*=a;
g.globalCompositeOperation='lighter';
const sp=o6S(tl);{const ga=g.globalAlpha;g.globalAlpha=ga*fl;g.drawImage(sp.c,sp.x,sp.y,sp.w,sp.h);g.globalAlpha=ga}
g.strokeStyle='rgba(255,236,240,'+.6*fl+')';g.lineWidth=.8;
for(let i=0;i<3;i++){const s=ph*7+i*2.09;g.beginPath();g.arc(0,0,5+i*1.7,s,s+1.3);g.stroke()}
g.lineWidth=.6;g.strokeStyle='rgba(255,200,208,'+.5*fl+')';
for(let r=0;r<2;r++){g.beginPath();g.ellipse(0,0,19,8,ph*2+r*1.57,0,TAU);g.stroke()}
for(let i=0;i<4;i++){
const t=ph*6+i*TAU/4,x=M.cos(t)*19,y=M.sin(t)*10.5;
g.strokeStyle='rgba(255,150,165,.5)';g.lineWidth=1;g.beginPath();g.moveTo(x,y);g.lineTo(M.cos(t-.5)*19,M.sin(t-.5)*10.5);g.stroke();
g.fillStyle='rgba(255,215,222,.95)';g.beginPath();g.arc(x,y,1.5,0,TAU);g.fill();
}
g.restore();
}
function alTr(a){
const e=AE[6];
sp(3,a.x-a.vx*.012,a.y+rnd(-6,6),-a.vx*.06+rnd(-40,40),rnd(-50,50),rnd(.25,.55),rnd(1.4,2.6),e.s,0,2);
if(M.random()<.5)sp(1,a.x-a.vx*.02,a.y+rnd(-4,4),0,0,.3,rnd(18,30),e.k);
}
function alHit(x,y){
const e=AE[6];
ring(x,y,e.c,34);ring(x,y,e.s,20);
sp(1,x,y,0,0,.28,96,e.k);
for(let i=0;i<14;i++){const a=rnd(0,TAU),v=rnd(100,360);sp(3,x,y,M.cos(a)*v,M.sin(a)*v,rnd(.2,.45),rnd(1.5,2.6),e.s,200,2)}
shake=M.max(shake,2.2);
}
