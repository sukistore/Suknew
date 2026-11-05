function drawS(s){
const i=s.id,sn=M.min(1,M.abs(s.vx)/150),ph=s.ph,id=M.sin(T*1.9+i*2.1),sw=s.sw;
const hy=-26-(1-M.abs(M.sin(ph)))*2.2*sn+id*.4;
const cs=sn*5+id*.6,cw=M.sin(T*2.3+i)*1.3+M.sin(T*5.1+i)*.5*sn;
shd(s.x,18,.62);
g.save();g.translate(s.x,s.y);g.scale(s.f,1);
SD[i](s,sn,ph,id,sw,hy,cs,cw);
g.restore();
if(s.hf>0)gl('r',s.x,s.y-30,34,s.hf*2.6);
}

function uxSm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
function uxT(x0,y0,x1,y1,r0,r1,c){
const dx=x1-x0,dy=y1-y0,d=M.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d;
g.fillStyle=c;g.beginPath();
g.moveTo(x0+nx*r0,y0+ny*r0);g.lineTo(x1+nx*r1,y1+ny*r1);g.lineTo(x1-nx*r1,y1-ny*r1);g.lineTo(x0-nx*r0,y0-ny*r0);g.closePath();
g.moveTo(x0+r0,y0);g.arc(x0,y0,r0,0,TAU,true);g.moveTo(x1+r1,y1);g.arc(x1,y1,r1,0,TAU,true);g.fill();
}
function uxM(e,sn,ph,id,sw,hb){
return{y:(1-M.abs(M.sin(ph)))*hb*sn+id*.35,pt:M.sin(ph*2-.5)*.03*sn,ct:M.sin(ph-.6)*.08*sn,hd:M.sin(ph*2-1.3)*.04*sn,br:M.sin(T*2.1+e.id*2)*(1-sn*.7),ar:-M.sin(ph-.55)*sn};
}
function uxFt(q,sn,sa){
const w=(((q+PI/2)/TAU)%1+1)%1;let x,l,a;
if(w<.5){const u=w*2,s=uxSm(u);x=lr(-sa,sa,s);l=M.sin(u*PI)+.75*(1-u);a=lr(.7,-.38,s)}
else{const u=(w-.5)*2;x=lr(sa,-sa,u);l=u>.78?(u-.78)*3.4:0;a=u<.14?lr(-.3,0,u/.14):u>.78?(u-.78)*3.2:0}
return[x*sn,l*sn,a*sn,w<.5?0:1];
}
let uxLn=22;
function uxH(ph,sn,sa,L){
uxLn=L;
const a=uxFt(ph,sn,sa),b=uxFt(ph+PI,sn,sa);
const dx=a[3]&&b[3]?M.min(M.abs(a[0]),M.abs(b[0])):a[3]?M.abs(a[0]):M.abs(b[0]);
return M.sqrt(L*L-dx*dx)+2.6;
}
function uxLeg(q,sn,hx,hy,sa,lh,fl,w,c1,c2){
const f=uxFt(q,sn,sa),fx=hx+f[0]+(hx<0?-1.6:1.6)*(1-sn),ay=-2.6-f[1]*lh*.45,dx=fx-hx,dy=ay-hy,d=M.hypot(dx,dy)||1;
const kb=M.min(1.8+.8*w,M.sqrt(M.max(0,uxLn*uxLn/4-d*d/4))),kx=hx+dx*.5+dy/d*kb,ky=hy+dy*.5-dx/d*kb,fr=1.1+.9*w;
uxT(hx,hy,kx,ky,3.4*w,2.7*w,c1);
uxT(kx,ky,fx,ay,2.6*w,1.9*w,c1);
uxT(fx,ay,fx+M.cos(f[2])*fl,ay+M.sin(f[2])*fl,fr,fr*.72,c2);
return[kx,ky,fx,ay];
}
function uxArm(sx,sy,th,L,s,w,a,b,c,hc,hr){
const r=ik(sx,sy,sx+M.cos(th)*L,sy+M.sin(th)*L,a,b,s);
uxT(sx,sy,r[0],r[1],2.7*w,2.2*w,c);uxT(r[0],r[1],r[2],r[3],2.1*w,1.7*w,c);
if(hc){g.fillStyle=hc;g.beginPath();g.arc(r[2],r[3],hr||2,0,TAU);g.fill()}
return r;
}
function uxW(e,x,y,k,n,h,r,a,s){
if(slA||(!e.boss&&E.length>14))return;
for(let i=0;i<n;i++){const u=(T*s+i/n+e.id*.37)%1;gl(k,x+M.sin(T*2.1+i*2.3+e.id)*r*.7,y-u*h,r*(.5+u*.8),a*M.sin(u*PI))}
}
function uxSl(cx,cy,r,a0,a1,k,c){
if(k<.04||slA)return;
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';
g.strokeStyle='rgba('+c+','+k*.55+')';g.lineWidth=2+k*5;g.beginPath();g.arc(cx,cy,r,a0,a1);g.stroke();
g.strokeStyle='rgba(255,255,255,'+k*.8+')';g.lineWidth=1.2;g.beginPath();g.arc(cx,cy,r,lr(a0,a1,.35),a1);g.stroke();
g.restore();
}
