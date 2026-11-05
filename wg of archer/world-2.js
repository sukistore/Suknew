function skyCl(){
for(const C of CLP){
const tw=C.w,x0=(((T*C.s-cam*C.p+C.o)%tw)+tw)%tw-tw;
g.globalAlpha=C.a;
for(let x=x0;x<VW;x+=tw)g.drawImage(CLD_(),x,GY*C.y,tw,GY*C.h);
}
g.globalAlpha=1;
}
const BW=[[1,0],[1.8,3.2],[.3,7.4],[-.6,9.8],[-1,7.4],[-1.9,6.4],[-1.3,5.2],[-2.2,3.6],[-1.4,2.2],[-1.8,0]];
function skyBt(){
const my=GY*.26,cy=VW+200;
for(let i=0;i<8;i++){
const pc=cy*(7+hs(i+990)*4),sp=28+hs(i+950)*18,x=((hs(i+940)*pc+T*sp-cam*.02)%pc+pc)%pc-100;
if(x>VW+60)continue;
const u=.7+hs(i+970)*.35,ph=T*(11+hs(i+980)*5)+i*2.3,y=my+32+hs(i+960)*GY*.09+M.sin(T*.9+i*1.7)*3+M.sin(ph)*.35*u;
const wing=(sg,fc,ed)=>{
g.beginPath();
for(let k=0;k<BW.length;k++){
const q=BW[k],a=.15+.95*M.sin(ph-.45*q[1]/9.8),zz=q[1]*M.cos(a)*sg,sx=x+(q[0]-zz*.3)*u,sy=y+(zz*.4-q[1]*M.sin(a))*u;
if(k)g.lineTo(sx,sy);else g.moveTo(sx,sy);
}
g.closePath();g.fillStyle=fc;g.fill();
if(ed){g.strokeStyle=ed;g.lineWidth=.6;g.stroke()}
};
wing(-1,'rgba(4,4,16,.5)',0);
g.fillStyle='rgba(4,4,16,.76)';
g.beginPath();g.ellipse(x,y,2.2*u,1.1*u,-.08,0,TAU);g.fill();
g.beginPath();g.arc(x+2.5*u,y-.2*u,.85*u,0,TAU);g.fill();
g.beginPath();
g.moveTo(x+3.1*u,y-.5*u);g.lineTo(x+4.1*u,y+.1*u);g.lineTo(x+3.1*u,y+.4*u);
g.moveTo(x+2*u,y-.8*u);g.lineTo(x+2.1*u,y-2.3*u);g.lineTo(x+2.8*u,y-.9*u);
g.moveTo(x+2.9*u,y-.8*u);g.lineTo(x+3.3*u,y-2.1*u);g.lineTo(x+3.5*u,y-.5*u);
g.moveTo(x-2*u,y-.3*u);g.lineTo(x-4*u,y+.7*u);g.lineTo(x-2*u,y+.9*u);
g.fill();
wing(1,'rgba(6,6,22,.82)','rgba(150,160,214,.22)');
}
}
let arK='',arF=null,arN=null,arY=0,arW=0,arH=0,arS=null,arG=null,arD=null,dkS=null,dkG=null;
const arP=480,arC=['#b57a5a','#8d6b8f','#c9b28a','#7a8fb0','#a65a5a','#d8c7a5','#6f8f78'];
function bgBd(){
const k=GY+'|'+VH+'|'+dd+'|'+sc;
if(k==arK)return;
arK=k;
const s=dd*sc,fh=GY,nY=M.round(GY*.58),nh=GY-nY;
arY=nY;arH=nh;
arF=document.createElement('canvas');arF.width=M.round(arP*s);arF.height=M.round(fh*s);
arN=document.createElement('canvas');arN.width=M.round(arP*s);arN.height=M.round(nh*s);
let f=arF.getContext('2d'),q;
f.setTransform(arF.width/arP,0,0,arF.height/fh,0,0);
const aT=GY*.16,aH=GY*.09,cT=aT+aH,cB=GY*.62;
f.fillStyle='#2a201b';f.fillRect(0,cB,arP,GY-cB);
q=f.createLinearGradient(0,aT,0,aT+aH);
q.addColorStop(0,'#8b7760');q.addColorStop(1,'#6a5846');
f.fillStyle=q;f.fillRect(0,aT,arP,aH);
f.fillStyle='#9e8a70';f.fillRect(0,aT,arP,2.5);
f.fillStyle='#4a3b2f';f.fillRect(0,aT+aH-3,arP,3);
for(let i=0;i<10;i++){
const x=i*48;
f.fillStyle='#a08c70';f.fillRect(x-1.5,aT+2.5,3,aH-5.5);
f.fillStyle='#6a5846';f.fillRect(x+24-2.5,aT-6,5,6);
if(i&1){f.fillStyle='#1b1410';f.fillRect(x+18,aT+aH*.28,12,aH*.46)}
else{
f.strokeStyle='#3a2d24';f.lineWidth=2;f.beginPath();f.moveTo(x+24,aT-6);f.lineTo(x+34,aT-44);f.stroke();
}
}
const hC=cB-cT;
for(let si=0;si<3;si++){
const sT=cT+si*hC/3,sB=sT+hC/3-5,rh=7,nr=M.floor((sB-sT)/rh);
for(let r=0;r<nr;r++){
const y=sT+r*rh;
f.fillStyle=r&1?'#51433b':'#5c4d44';f.fillRect(0,y,arP,rh);
for(let j=0;j<52;j++){
const sd=j*3+r*17+si*53;
if(hs(sd+7)<.12)continue;
const x=(j+.2+hs(j*7+r*13+si*101)*.6)*arP/52,c=arC[M.floor(hs(sd)*arC.length)];
f.fillStyle=c;f.fillRect(x-2.6,y+4.3,5.2,2.7);
f.fillStyle=hs(sd+3)<.5?'#c8a283':'#8f6a52';f.beginPath();f.arc(x,y+2.4,2.1,0,TAU);f.fill();
}
}
f.fillStyle='#3b2f29';f.fillRect(0,sB,arP,5);
f.fillStyle='#8b7760';f.fillRect(0,sB,arP,1.2);
if(si){
f.fillStyle='#0e0a0d';
for(let k=0;k<5;k++){
const c=96*k+48+(si==2?48:0);
if(c+9>arP)continue;
f.beginPath();f.moveTo(c-9,sB);f.lineTo(c-9,sT+14);f.arc(c,sT+14,9,PI,0);f.lineTo(c+9,sB);f.fill();
}
}
}
q=f.createLinearGradient(0,aT,0,cB);
q.addColorStop(0,'rgba(14,12,36,.38)');q.addColorStop(1,'rgba(14,12,36,0)');
f.fillStyle=q;f.fillRect(0,aT,arP,cB-aT);
q=f.createLinearGradient(0,cB-90,0,cB+4);
q.addColorStop(0,'rgba(230,140,80,0)');q.addColorStop(1,'rgba(230,140,80,.24)');
f.fillStyle=q;f.fillRect(0,cB-90,arP,94);
const n=arN.getContext('2d');
n.setTransform(arN.width/arP,0,0,arN.height/nh,0,0);
const pT=GY*.62-nY,wT=pT+12,pl=10,bB=nh;
arW=wT;
for(let j=0;j<40;j++){
const sd=j*5+900,x=(j+.3+hs(sd)*.4)*arP/40;
n.fillStyle=arC[M.floor(hs(sd+1)*arC.length)];n.fillRect(x-4,pT+2,8,6);
n.fillStyle=hs(sd+2)<.5?'#c8a283':'#8f6a52';n.beginPath();n.arc(x,pT+.5,3.4,0,TAU);n.fill();
}
q=n.createLinearGradient(0,pT,0,wT);
q.addColorStop(0,'#9a8466');q.addColorStop(1,'#7a6650');
n.fillStyle=q;n.fillRect(0,pT,arP,12);
n.fillStyle='#b8a283';n.fillRect(0,pT,arP,2);
q=n.createLinearGradient(0,wT,0,bB);
q.addColorStop(0,'#8a7660');q.addColorStop(1,'#5e4e3f');
n.fillStyle=q;n.fillRect(0,wT,arP,bB-wT);
n.fillStyle='rgba(0,0,0,.14)';
for(let y=wT+14;y<bB;y+=14)n.fillRect(0,y,arP,1);
const top=wT+14,bot=bB-pl;
for(let k=0;k<6;k++){
const c=80*k+40;
n.beginPath();n.moveTo(c-26,bot);n.lineTo(c-26,top+26);n.arc(c,top+26,26,PI,0);n.lineTo(c+26,bot);n.closePath();
q=n.createLinearGradient(0,top,0,bot);
q.addColorStop(0,'#1a1218');q.addColorStop(1,'#0a070a');
n.fillStyle=q;n.fill();
if(!(k&1)){
n.save();n.clip();
n.fillStyle='#2e242b';
for(let j=0;j<9;j++)n.fillRect(c-24+j*6,top,1.6,bot-top);
n.fillRect(c-26,top+(bot-top)*.35,52,1.6);n.fillRect(c-26,top+(bot-top)*.7,52,1.6);
n.restore();
}
n.strokeStyle='#b09a78';n.lineWidth=3;
n.beginPath();n.moveTo(c-26,top+26);n.arc(c,top+26,26,PI,0);n.stroke();
n.fillStyle='#b8a283';n.fillRect(c-3,top-3,6,7);
}
for(let k=0;k<=6;k++){
const x=80*k;
n.fillStyle='#9c8668';n.fillRect(x-6,wT+4,12,bB-pl-wT-4);
n.fillStyle='rgba(0,0,0,.18)';n.fillRect(x-2.5,wT+8,1,bB-pl-wT-12);n.fillRect(x+1.5,wT+8,1,bB-pl-wT-12);
n.fillStyle='#b39c7a';n.fillRect(x-9,wT+4,18,4);n.fillRect(x-9,bB-pl-4,18,4);
if(!(k&1)){
n.fillStyle='#2a2118';n.fillRect(x-1.5,wT+36,3,8);
n.fillStyle='#3a2d22';n.fillRect(x-3.5,wT+32,7,5);
}else if(k<6){
n.fillStyle='#8c1f2b';n.beginPath();n.moveTo(x-7,wT+12);n.lineTo(x+7,wT+12);n.lineTo(x+7,wT+58);n.lineTo(x,wT+50);n.lineTo(x-7,wT+58);n.closePath();n.fill();
n.fillStyle='#d9b24a';n.fillRect(x-1.5,wT+15,3,30);
n.strokeStyle='#d9b24a';n.lineWidth=1;n.stroke();
}
}
n.fillStyle='#4b3d31';n.fillRect(0,bot,arP,pl);
n.fillStyle='#7d6a57';n.fillRect(0,bot,arP,1);
arS=g.createLinearGradient(0,0,0,GY);
arS.addColorStop(0,'#10132f');arS.addColorStop(.5,'#3c2d55');arS.addColorStop(1,'#b3623f');
arG=g.createLinearGradient(0,GY,0,VH);
arG.addColorStop(0,'#6e583b');arG.addColorStop(.12,'#8c7351');arG.addColorStop(.45,'#6f5a3c');arG.addColorStop(1,'#3a2b1c');
arD=g.createLinearGradient(0,GY,0,GY+46);
arD.addColorStop(0,'rgba(10,6,4,.55)');arD.addColorStop(1,'rgba(10,6,4,0)');
dkS=g.createLinearGradient(0,0,0,GY);
dkS.addColorStop(0,'#03050a');dkS.addColorStop(1,'#0a0f18');
dkG=g.createLinearGradient(0,GY,0,VH);
dkG.addColorStop(0,'#0b1118');dkG.addColorStop(1,'#04070b');
}
function bgAr(){
bgBd();
g.fillStyle=arS;g.fillRect(0,0,VW,VH);
const fx=-((((cam*.1)%arP)+arP)%arP);
for(let t=fx;t<VW;t+=arP)g.drawImage(arF,t,0,arP+1,GY);
const nx=-((((cam*.3)%arP)+arP)%arP);
for(let t=nx;t<VW;t+=arP)g.drawImage(arN,t,arY,arP+1,arH);
for(let t=nx;t<VW+arP;t+=arP)for(let k=0;k<6;k+=2){
const x=t+80*k;
if(x<-60||x>VW+60)continue;
const y=arY+arW+30,fl=.8+.2*M.sin(T*9+k*1.7)*M.sin(T*5.3+k);
gl('a',x,y+8,64,.16*fl);
gl('f',x,y-4,24,.6*fl);
g.fillStyle='#ffb14a';g.beginPath();g.moveTo(x-2.6,y);g.quadraticCurveTo(x-3,y-6*fl,x,y-11*fl);g.quadraticCurveTo(x+3,y-6*fl,x+2.6,y);g.fill();
g.fillStyle='#fff0b0';g.beginPath();g.moveTo(x-1.2,y);g.quadraticCurveTo(x-1.4,y-3*fl,x,y-5.5*fl);g.quadraticCurveTo(x+1.4,y-3*fl,x+1.2,y);g.fill();
}
}
function bgDk(){
bgBd();
g.fillStyle=dkS;g.fillRect(0,0,VW,VH);
}
function grAr(){
g.fillStyle=arG;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
g.fillStyle=arD;g.fillRect(cam-40,GY,VW+80,46);
for(let i=M.floor(cam/40);i<(cam+VW)/40+1;i++){
const x=i*40+hs(i+31)*34,y=GY+8+hs(i+37)*(VH-GY-12),r=2+hs(i+33)*5;
g.fillStyle='rgba(30,18,8,.2)';g.beginPath();g.ellipse(x-1.2,y+1,r,r*.3,0,0,TAU);g.fill();
g.fillStyle='rgba(214,186,132,.16)';g.beginPath();g.ellipse(x,y,r,r*.28,0,0,TAU);g.fill();
}
}
function grDk(){
bgBd();
g.fillStyle=dkG;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
g.fillStyle='rgba(120,140,180,.18)';g.fillRect(cam-40,GY,VW+80,1);
}
const guSN=(()=>{const r=g.createRadialGradient(0,0,0,0,0,1);r.addColorStop(0,'rgba(255,240,200,.95)');r.addColorStop(.1,'rgba(255,220,160,.6)');r.addColorStop(.35,'rgba(255,190,120,.22)');r.addColorStop(1,'rgba(255,170,100,0)');return r})();
let _guCT;