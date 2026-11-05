function drawEn(e){
if(e.bot){duDraw(e);return}
if(e.bq){duDrawQ(e);return}
const z=e.sz,sn=M.min(1,M.abs(e.vx)/e.sp),id=M.sin(T*1.7+e.id),dy=e.dd>0;
if(e.ps==null){e.ps=e.ph;e.pp=e.ph;e.rs=e.sw}
const dp=e.ph-e.pp;e.pp=e.ph;e.ps+=e.vx*e.f<-8?-dp:dp;
e.rs+=(e.sw-e.rs)*M.min(1,DT*(e.sw>e.rs?24:14));
const hk=e.t==4?0:M.min(1,M.max(0,e.hf)*7);
shd(e.x,(e.t==2?23:18)*z,.64*(dy?M.max(0,1-e.dd):1));
g.save();g.translate(e.x,e.y);
if(dy){g.rotate(-e.f*M.min(1.5,e.dd*3.2));g.globalAlpha=M.max(0,1.15-e.dd)}
g.scale(e.f*z,z);
if(hk>0){g.translate(-hk*(e.boss?1.4:3.2),0);g.rotate(-hk*(e.boss?.035:.1))}
const ph=e.ps,sw=e.rs;
if(e.t==0)bGh(e,sn,id,sw,ph);else if(e.t==1)bSk(e,sn,id,sw,ph);else if(e.t==2)bGo(e,sn,id,sw,ph);else if(e.t==4)bWg(e,sn,id,sw,ph);else if(e.t==5)bSt(e,sn,id,sw,ph);else if(e.t==6)bGl(e,sn,id,sw,ph);else if(e.t==7)bAr(e,sn,id,sw,ph);else bBo(e,sn,id,sw,ph);
g.restore();
g.globalAlpha=1;
if(e.hf>0)gl('r',e.x,e.y-30*z,30*z,e.hf*2.8);
}
function drawPr(){
for(const q of Pr){
if(q.t=='k'){duAd(q);continue}
if(q.t=='o'){
gl('c',q.x,q.y,15,.6);
g.fillStyle='#dfe9f6';g.beginPath();g.arc(q.x,q.y,2.6,0,TAU);g.fill();
g.globalAlpha=.45;g.fillStyle='#8fa9c9';g.beginPath();g.arc(q.x,q.y,4.2,0,TAU);g.fill();g.globalAlpha=1;
}else if(q.t=='w'){
const fd=M.max(0,M.min(1,(.85-q.l)/.3));
g.save();g.translate(q.x,GY);g.scale(q.vx<0?-1:1,1);g.globalAlpha=fd*.9;
const gr=g.createLinearGradient(-6,0,16,0);gr.addColorStop(0,'rgba(240,226,184,0)');gr.addColorStop(1,'rgba(246,236,205,.95)');
g.fillStyle=gr;g.beginPath();g.moveTo(-6,0);g.quadraticCurveTo(24,-27,-6,-54);g.quadraticCurveTo(7,-27,-6,0);g.closePath();g.fill();
g.strokeStyle='rgba(255,245,215,.8)';g.lineWidth=1;g.beginPath();g.moveTo(-6,0);g.quadraticCurveTo(24,-27,-6,-54);g.stroke();
g.restore();g.globalAlpha=1;
}else if(q.t=='m'){
gl('v',q.x,q.y,16,.7);
g.fillStyle='#efe4ff';g.beginPath();g.arc(q.x,q.y,2.8,0,TAU);g.fill();
g.globalAlpha=.5;g.fillStyle='#a58de0';g.beginPath();g.arc(q.x,q.y,4.6,0,TAU);g.fill();g.globalAlpha=1;
}else if(q.t=='z'){
const k=1-q.l/.24,sd=q.sd+M.floor(q.l*45)*5.3,sg=q.tx>=q.x?1:-1,mx=lr(q.x,q.tx,.55),my=lr(q.y,q.ty,.55);
g.save();g.globalCompositeOperation='lighter';g.lineCap='round';g.lineJoin='round';
g.globalAlpha=k*.5;g.strokeStyle='rgb(150,80,255)';g.lineWidth=7*k+1;
g.beginPath();zig(q.x,q.y,q.tx,q.ty,16,sd);g.stroke();
g.globalAlpha=k;g.strokeStyle='rgb(200,150,255)';g.lineWidth=2.6*k+.6;
g.beginPath();zig(q.x,q.y,q.tx,q.ty,16,sd);g.stroke();
g.strokeStyle='rgb(250,240,255)';g.lineWidth=k+.3;
g.beginPath();zig(q.x,q.y,q.tx,q.ty,16,sd);g.stroke();
g.globalAlpha=k*.7;g.strokeStyle='rgb(190,130,255)';g.lineWidth=1.2;
g.beginPath();zig(mx,my,mx+sg*30,my-22,8,sd+9);g.stroke();
g.beginPath();zig(mx,my,mx-sg*18,my+20,8,sd+17);g.stroke();
g.restore();
gl('z',q.tx,q.ty,34*k+10,k);
gl('z',q.x,q.y,22*k+8,k*.8);
}else if(q.t=='r'){
const an=M.atan2(q.vy,q.vx);
gl('g',q.x,q.y,18,.55);
g.save();g.translate(q.x,q.y);g.rotate(an);
g.globalCompositeOperation='lighter';g.lineCap='round';
g.strokeStyle='rgba(150,235,180,.35)';g.lineWidth=3;g.beginPath();g.moveTo(-34,0);g.lineTo(-4,0);g.stroke();
g.globalCompositeOperation='source-over';
g.strokeStyle='#b9a07a';g.lineWidth=1.5;g.beginPath();g.moveTo(-22,0);g.lineTo(2,0);g.stroke();
g.fillStyle='#dfeee4';g.beginPath();g.moveTo(9,0);g.lineTo(1,-2.6);g.lineTo(2.5,0);g.lineTo(1,2.6);g.closePath();g.fill();
g.fillStyle='#7fd6a0';g.beginPath();g.moveTo(-22,0);g.lineTo(-27,-3);g.lineTo(-18,-.4);g.lineTo(-18,.4);g.lineTo(-27,3);g.closePath();g.fill();
g.restore();
}else if(q.t=='b'){
const an=M.atan2(q.vy,q.vx),bg=q.bg?1.5:1;
gl('r',q.x,q.y,22*bg,.6);
g.save();g.translate(q.x,q.y);g.rotate(an);g.scale(bg,bg);
g.globalCompositeOperation='lighter';g.lineCap='round';
g.strokeStyle='rgba(230,70,100,.35)';g.lineWidth=4;g.beginPath();g.moveTo(-40,0);g.lineTo(-6,0);g.stroke();
g.globalCompositeOperation='source-over';
g.strokeStyle='#2a1c2e';g.lineWidth=2.2;g.beginPath();g.moveTo(-28,0);g.lineTo(3,0);g.stroke();
g.strokeStyle='rgba(230,80,110,.8)';g.lineWidth=.8;g.beginPath();g.moveTo(-26,0);g.lineTo(2,0);g.stroke();
g.fillStyle='#ff8aa0';g.beginPath();g.moveTo(11,0);g.lineTo(2,-3.4);g.lineTo(4,0);g.lineTo(2,3.4);g.closePath();g.fill();
g.fillStyle='#5a1830';g.beginPath();g.moveTo(-28,0);g.lineTo(-34,-4);g.lineTo(-22,-.5);g.lineTo(-22,.5);g.lineTo(-34,4);g.closePath();g.fill();
g.restore();
}else{
const fd=M.max(0,M.min(1,(1.5-q.l)/.4)),d=q.vx<0?-1:1;
for(let k=0;k<6;k++){
const x=q.x-d*k*13,h=(26-k*3.6)*fd;
g.fillStyle='#555a65';g.beginPath();g.moveTo(x-6,GY);g.lineTo(x+d*2,GY-h);g.lineTo(x,GY);g.closePath();g.fill();
g.fillStyle='#33363d';g.beginPath();g.moveTo(x,GY);g.lineTo(x+d*2,GY-h);g.lineTo(x+6,GY);g.closePath();g.fill();
}
}
}
}
function drawGw(){
if(!(p.go>0))return;
const d=p.gd,ox=p.x+d*28,oy=p.y-47;
g.save();g.translate(ox,oy);g.scale(d,1);
if(p.go<GCH){
const k=p.go/GCH;
orb(2,0,5+k*17,.3+k*.7,M.floor(T*24)*7.3);
gl('z',-28,17,34+k*46,k*.5);
}else{
const f=gwF(),L=f[0],e=f[1],R=28*e*(1+.07*M.sin(T*45));
if(e>.01){
const bm=h=>{g.beginPath();g.moveTo(0,-h);g.lineTo(M.max(0,L-h),-h);g.quadraticCurveTo(L,-h*.9,L,0);g.quadraticCurveTo(L,h*.9,M.max(0,L-h),h);g.lineTo(0,h);g.closePath()};
g.save();g.globalCompositeOperation='lighter';
let gr=g.createLinearGradient(0,-R*1.9,0,R*1.9);
gr.addColorStop(0,'rgba(120,60,255,0)');gr.addColorStop(.5,'rgba(130,70,255,'+.5*e+')');gr.addColorStop(1,'rgba(120,60,255,0)');
g.fillStyle=gr;bm(R*1.9);g.fill();
gr=g.createLinearGradient(0,-R,0,R);
gr.addColorStop(0,'rgba(170,110,255,0)');gr.addColorStop(.5,'rgba(190,140,255,.85)');gr.addColorStop(1,'rgba(170,110,255,0)');
g.fillStyle=gr;bm(R);g.fill();
gr=g.createLinearGradient(0,-R*.45,0,R*.45);
gr.addColorStop(0,'rgba(255,255,255,0)');gr.addColorStop(.5,'rgba(250,240,255,.95)');gr.addColorStop(1,'rgba(255,255,255,0)');
g.fillStyle=gr;bm(R*.45);g.fill();
g.lineCap='round';g.lineJoin='round';
const sd=M.floor(T*30)*5.1;
for(let i=0;i<3;i++){
g.globalAlpha=e*(i==1?.95:.7);g.strokeStyle=i==1?'rgb(255,250,255)':'rgb(200,150,255)';g.lineWidth=i==1?1.2:1.8;
g.beginPath();zig(0,(i-1)*R*.35,L,(1-i)*R*.35,R*.7,sd+i*13);g.stroke();
}
g.restore();
gl('z',0,0,R*3.2,e*.9);gl('w',0,0,R*1.5,e*.85);
gl('z',L,0,R*2.4,e*.8);gl('w',L,0,R*1.1,e*.7);
}
}
g.restore();
}
