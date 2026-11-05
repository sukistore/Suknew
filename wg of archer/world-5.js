function grSn(){
let q=g.createLinearGradient(0,GY,0,VH);
q.addColorStop(0,'#e6edf8');q.addColorStop(.2,'#d6e0f0');q.addColorStop(.6,'#b7c6e2');q.addColorStop(1,'#98aacd');
g.fillStyle=q;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
const ph=VH-GY,Pd=new Path2D(),Pl=new Path2D(),o=[];
for(let r=1;r<=7;r++){
const t=r/7,y=GY+ph*t*t+3,a=.6+t*1.8,fq=.02-t*.008;
for(let i=M.floor((cam-60)/200);i<(cam+VW+60)/200;i++){
const sd=i*7+r*131;
if(hs(sd+2200)<.3)continue;
const xs=i*200+hs(sd+2201)*50,xl=90+hs(sd+2202)*80,yo=(hs(sd+2203)-.5)*ph*.05;
for(let x=0;x<=xl;x+=14){
const wx=xs+x,yy=y+yo+M.sin(wx*fq+r*1.9)*a;
if(x){Pd.lineTo(wx,yy);Pl.lineTo(wx,yy-1.6)}else{Pd.moveTo(wx,yy);Pl.moveTo(wx,yy-1.6)}
}
}
}
g.save();
g.lineWidth=1.2;g.lineCap='round';
g.strokeStyle='rgba(110,130,185,.28)';g.stroke(Pd);
g.strokeStyle='rgba(255,255,255,.7)';g.stroke(Pl);
for(const e of snLs()){e[0](e[1],e[2],e[3],e[4],0);if(!fgS)e[0](e[1],e[2],e[3],e[4],1)}
snFl(14+ST.gq*10,500,2.4,.9,60,cam);
g.restore();
}
function vkEm(n,o,ox){
g.save();g.globalCompositeOperation='lighter';
for(let i=0;i<n;i++){
const sp=14+hs(i+o+2500)*26,x=((hs(i+o+2510)*VW+M.sin(T*.8+i)*12+T*6)%VW+VW)%VW+ox,y=VH-((hs(i+o+2520)*VH+T*sp)%VH),a=(.25+.6*hs(i+o+2530))*(.6+.4*M.sin(T*4+i));
g.fillStyle='rgba(255,'+(120+M.floor(hs(i+o+2540)*90))+',50,'+a.toFixed(2)+')';g.fillRect(x,y,1.8,1.8);
}
g.restore();
}
function vkVl(){
const st=1100,sh=cam*.05,B=GY*.82,i0=M.floor(sh/st)-1,i1=M.ceil((sh+VW)/st)+1;
for(let i=i0;i<=i1;i++){
const xc=i*st+300+hs(i+1810)*300-sh,W=620+hs(i+1820)*160,H=GY*(.34+hs(i+1830)*.08),cw=W*.07,yt=B-H,q=g.createLinearGradient(0,yt,0,B);
q.addColorStop(0,'#3a1a1c');q.addColorStop(1,'#1c0c0f');
g.fillStyle=q;g.beginPath();g.moveTo(xc-W*.5,B+4);g.quadraticCurveTo(xc-W*.16,B-H*.2,xc-cw,yt);g.lineTo(xc+cw*1.1,yt+H*.03);g.quadraticCurveTo(xc+W*.16,B-H*.2,xc+W*.5,B+4);g.closePath();g.fill();
g.save();g.translate(xc,yt);g.scale(W*.3,W*.22);g.fillStyle=vkGL;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
g.save();g.lineCap='round';g.lineJoin='round';
for(let s=0;s<3;s++){
const P=new Path2D(),pl=.75+.25*M.sin(T*2+s*2+i);
P.moveTo(xc+(s-1)*cw*.8,yt+H*.02);
for(let k=1;k<=6;k++){const t=k/6;P.lineTo(xc+(s-1)*(cw*.8+W*.4*M.pow(t,1.7))+(hs(i*7+s*13+k)-.5)*16*t,yt+H*.02+H*.97*t)}
g.strokeStyle='rgba(255,90,20,'+.5*pl+')';g.lineWidth=5;g.stroke(P);
g.strokeStyle='rgba(255,200,110,'+.85*pl+')';g.lineWidth=1.6;g.stroke(P);
}
g.restore();
for(let k=0;k<9;k++){
const t=(T*.045+k/9)%1,r=26+t*84,x=xc+cw*.4+t*W*.22+M.sin(T*.4+k*2)*8*t-r,y=yt-t*GY*.55-r,a=M.pow(M.sin(PI*t),.7);
g.globalAlpha=a*.85;g.drawImage(vkPF[0],x,y,r*2,r*2);
g.globalAlpha=a*(1-t)*.6;g.drawImage(vkPF[1],x,y+r*.3,r*2,r*2);
}
g.globalAlpha=1;
}
}
function bgVk(){
const sk=g.createLinearGradient(0,0,0,GY);
sk.addColorStop(0,'#0b0810');sk.addColorStop(.35,'#1f0e18');sk.addColorStop(.6,'#4a1a1c');sk.addColorStop(.8,'#8c3419');sk.addColorStop(.93,'#d2561f');sk.addColorStop(1,'#f08a2e');
g.fillStyle=sk;g.fillRect(0,0,VW,VH);
vkVl();
skHz('210,90,40',.3);
skRd(vkRG[0]);
skHz('210,90,40',.18);
skRd(vkRG[1]);
vkEm(30+ST.gq*20,0,0);
}
function vkRk(x,y,s,i){
const r=(8+hs(i+2450)*12)*s;
g.fillStyle='rgba(0,0,0,.35)';g.beginPath();g.ellipse(x-r*.8,y+1,r*1.5,2.6*s,0,0,TAU);g.fill();
g.fillStyle='#1d1013';g.beginPath();g.moveTo(x-r,y);g.lineTo(x-r*.8,y-r*.6);g.lineTo(x-r*.2,y-r*.95);g.lineTo(x+r*.5,y-r*.8);g.lineTo(x+r,y-r*.2);g.lineTo(x+r*1.05,y);g.closePath();g.fill();
g.strokeStyle='rgba(255,120,50,.6)';g.lineWidth=1.2;g.beginPath();g.moveTo(x-r*.2,y-r*.95);g.lineTo(x+r*.5,y-r*.8);g.lineTo(x+r,y-r*.2);g.stroke();
}
function grVk(){
let q=g.createLinearGradient(0,GY,0,VH);
q.addColorStop(0,'#3a2020');q.addColorStop(.25,'#2a171a');q.addColorStop(1,'#0e0709');
g.fillStyle=q;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
q=g.createLinearGradient(0,GY,0,GY+60);
q.addColorStop(0,'rgba(255,110,40,.4)');q.addColorStop(1,'rgba(255,110,40,0)');
g.fillStyle=q;g.fillRect(cam-40,GY,VW+80,60);
const ph=VH-GY,pl=.7+.3*M.sin(T*2);
g.save();g.lineCap='round';g.lineJoin='round';
for(let i=M.floor((cam-100)/150);i<(cam+VW+100)/150;i++){
if(hs(i+2400)<.35)continue;
const y0=GY+8+hs(i+2410)*(ph-16),x0=i*150+hs(i+2420)*100,P=new Path2D();
P.moveTo(x0,y0);
for(let k=1;k<=5;k++)P.lineTo(x0+k*(12+hs(i+k+2430)*14),y0+(hs(i+k+2440)-.5)*(8+ph*.08));
g.strokeStyle='rgba(255,90,25,'+.4*pl+')';g.lineWidth=4;g.stroke(P);
g.strokeStyle='rgba(255,196,100,'+.85*pl+')';g.lineWidth=1.3;g.stroke(P);
}
for(let i=M.floor((cam-100)/150);i<(cam+VW+100)/150;i++){
if(hs(i+2460)<.45)continue;
const y=GY+6+hs(i+2470)*(ph-12);
vkRk(i*150+hs(i+2480)*110,y,.75+(y-GY)/ph*.5,i);
}
vkEm(12+ST.gq*8,600,cam);
g.restore();
}
function bg(){
if(ST.bg==1){bgAr();return}
if(ST.bg==2){bgDk();return}
if(ST.bg==3){bgGu();return}
if(ST.bg==4){bgSn();return}
if(ST.bg==5){bgVk();return}
wsRs();
g.fillStyle=WS.sk;g.fillRect(0,0,VW,VH);
g.fillStyle='#e4eaff';
for(let i=0;i<60;i++){
const x=((hs(i)*VW*1.4-cam*.02)%VW+VW)%VW,y=hs(i+99)*GY*.58,z=hs(i+3)>.88?1.7:1;
g.globalAlpha=(.2+.55*M.abs(M.sin(T*(.5+hs(i+5))+i)))*(1-y/(GY*.7));g.fillRect(x,y,z,z);
}
g.globalAlpha=1;
const mw=VW+200,mx=((VW*.78-cam*.02)%mw+mw)%mw-100,my=GY*.26;
g.drawImage(MGS_(),mx-500,my-500,1000,1000);
g.fillStyle='#eef1fb';g.beginPath();g.arc(mx,my,22,0,TAU);g.fill();
g.fillStyle='rgba(150,162,196,.4)';
g.beginPath();g.arc(mx-7,my-4,5,0,TAU);g.fill();
g.beginPath();g.arc(mx+8,my+7,3.4,0,TAU);g.fill();
g.beginPath();g.arc(mx-2,my+11,2.4,0,TAU);g.fill();
g.strokeStyle='rgba(255,255,255,.35)';g.lineWidth=1;g.beginPath();g.arc(mx,my,21.5,-2.6,-.6);g.stroke();
skyCl();skyBt();
mtns();
LY.forEach((L,li)=>{
const S=WG[li],Q=TS[li],cp=new Path2D(),pt=new Path2D(),pf=new Path2D(),pr=new Path2D();
g.fillStyle=S.a;g.beginPath();g.moveTo(0,VH);
for(let x=0;x<=VW+12;x+=12){const y=hill(L,x+cam*L.f);g.lineTo(x,y);if(x)cp.lineTo(x,y);else cp.moveTo(x,y)}
g.lineTo(VW+12,VH);g.fill();
g.strokeStyle='rgba(176,192,240,'+(.2-li*.04)+')';g.lineWidth=1.2;g.stroke(cp);
for(let i=M.floor(cam*L.f/Q.st)-1;i<(cam*L.f+VW)/Q.st+1;i++){
if(hs(i+li*50+3)<.28)continue;
const wx=i*Q.st+hs(i+li)*Q.st*.5,x=wx-cam*L.f,by=hill(L,wx)+2,r=hs(i+li*31+57),V=r<.3?TV[0]:r<.5?TV[1]:r<.68?TV[2]:r<.88?TV[3]:0,h=Q.h0+hs(i+7)*Q.hv;
if(!V){
const e=h*.6;
for(const o of[[-.5,.1,.55,.42],[.45,.12,.5,.4],[0,.42,.6,.5]]){
const cx=x+o[0]*e,cy=by-o[1]*e,rx=o[2]*e,ry=o[3]*e;
pf.moveTo(cx+rx,cy);pf.ellipse(cx,cy,rx,ry,0,0,TAU);
pr.moveTo(cx+M.cos(-2.5)*rx,cy+M.sin(-2.5)*ry);pr.ellipse(cx,cy,rx,ry,0,-2.5,-.5);
}
continue;
}
const H=h*V.k,w=H*V.w,th=H*.2,tw=M.max(1.4,w*.22);
pt.rect(x-tw/2,by-th-2,tw,th+4);
for(let k=0;k<V.n;k++){
const yy=by-th-H*k*V.s,ww=w*(1-k*V.c),ox=V==TV[3]?(hs(i+k*9+li)-.5)*w*.22:0;
pf.moveTo(x-ww,yy);pf.lineTo(x+ox,yy-H*V.t);pf.lineTo(x+ww,yy);
pr.moveTo(x+ox,yy-H*V.t);pr.lineTo(x+ww,yy);
}
}
g.fillStyle=Q.tc;g.fill(pt);
g.fillStyle=Q.c;g.fill(pf);
g.strokeStyle=Q.rim;g.lineWidth=.8;g.stroke(pr);
g.fillStyle=S.f;g.fillRect(0,S.fy,VW,GY+4-S.fy);
g.fillStyle=S.m;g.fillRect(0,S.my,VW,S.mh);
});
g.fillStyle=WS.fg;g.fillRect(0,GY-130,VW,130);
rain();
}
const TRS=560;
function tpr(a,r0,r1){
for(let s=0;s<=14;s++){
const t=s/14,q=a.map(p=>[p[0],p[1]]);
for(let k=q.length-1;k>0;k--)for(let j=0;j<k;j++){q[j][0]+=(q[j+1][0]-q[j][0])*t;q[j][1]+=(q[j+1][1]-q[j][1])*t}
const r=r0+(r1-r0)*t;
g.moveTo(q[0][0]+r,q[0][1]);g.arc(q[0][0],q[0][1],r,0,TAU);
}
}
