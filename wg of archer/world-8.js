function fxDomBg(){
const k=domK();
if(k<=0)return;
const te=DD-p.dn,ri=M.min(1,te/.9),e=1-M.pow(1-ri,3);
g.save();
let gr=g.createLinearGradient(0,0,0,GY);
gr.addColorStop(0,'#12020a');gr.addColorStop(.55,'#52091b');gr.addColorStop(1,'#a62335');
g.globalAlpha=k*.92;g.fillStyle=gr;g.fillRect(0,0,VW,VH);
const mr=M.min(VW*.28,GY*.34),mx=VW*.5,my=GY*.4+(1-e)*50;
gl('r',mx,my,mr*2.8,k*.6);
gr=g.createRadialGradient(mx-mr*.25,my-mr*.25,mr*.1,mx,my,mr);
gr.addColorStop(0,'#ffd6c8');gr.addColorStop(.55,'#ea4a5c');gr.addColorStop(1,'#8c1428');
g.globalAlpha=k;g.fillStyle=gr;g.beginPath();g.arc(mx,my,mr,0,TAU);g.fill();
g.fillStyle='rgba(90,10,24,.28)';
g.beginPath();g.arc(mx-mr*.35,my+mr*.2,mr*.16,0,TAU);g.fill();
g.beginPath();g.arc(mx+mr*.3,my-mr*.3,mr*.1,0,TAU);g.fill();
g.beginPath();g.arc(mx+mr*.38,my+mr*.34,mr*.2,0,TAU);g.fill();
g.globalCompositeOperation='lighter';
for(let i=0;i<46;i++){
const x=hs(i+500)*VW,y=((hs(i+520)*GY-T*(14+hs(i+540)*34))%GY+GY)%GY;
g.globalAlpha=k*(.2+.5*hs(i+560))*(.6+.4*M.sin(T*3+i));g.fillStyle='#ff6a78';g.fillRect(x+M.sin(T+i)*6,y,1.6,1.6);
}
g.globalCompositeOperation='source-over';g.globalAlpha=1;
fxShrine(k,e);
g.restore();
}
function fxDomGr(){
const k=domK();
if(k<=0)return;
const te=DD-p.dn;
g.save();
const gr=g.createLinearGradient(0,GY,0,VH);
gr.addColorStop(0,'rgba(170,24,42,'+.62*k+')');gr.addColorStop(1,'rgba(36,2,10,'+.8*k+')');
g.fillStyle=gr;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
g.globalAlpha=k*.8;
for(let i=M.floor(cam/120)-1;i<(cam+VW)/120+1;i++){
if(hs(i+700)<.35)continue;
const x=i*120+hs(i+710)*70,y=GY+10+hs(i+720)*(VH-GY-26),r=4+hs(i+730)*4;
g.fillStyle='#d8ccb2';g.beginPath();g.ellipse(x,y,r,r*.85,0,0,TAU);g.fill();
g.fillRect(x-r*.55,y+r*.55,r*1.1,r*.6);
g.fillStyle='#2a0810';
g.beginPath();g.ellipse(x-r*.38,y-r*.05,r*.26,r*.32,0,0,TAU);g.fill();
g.beginPath();g.ellipse(x+r*.38,y-r*.05,r*.26,r*.32,0,0,TAU);g.fill();
}
g.globalAlpha=1;
g.translate(p.x,GY+3);g.scale(1,.2);g.globalCompositeOperation='lighter';g.lineCap='round';
const R=60+M.min(1,te*1.2)*300;
g.rotate(T*.5);
g.strokeStyle='rgba(255,70,90,'+.8*k+')';g.lineWidth=5;
g.beginPath();g.arc(0,0,R,0,TAU);g.stroke();
g.lineWidth=2.4;g.setLineDash([22,14]);
g.beginPath();g.arc(0,0,R*.82,0,TAU);g.stroke();g.setLineDash([]);
g.rotate(-T*1.2);
g.strokeStyle='rgba(255,220,210,'+.6*k+')';g.lineWidth=2.4;
g.beginPath();
for(let i=0;i<=5;i++){const a=((i*2)%5)*TAU/5-PI/2,x=M.cos(a)*R*.78,y=M.sin(a)*R*.78;if(i==0)g.moveTo(x,y);else g.lineTo(x,y)}
g.stroke();
g.restore();
}
function fxDomSl(){
if(!DS.length)return;
g.save();g.globalCompositeOperation='lighter';
for(const s of DS){
const k=s.l/s.m,u=M.min(1,(1-k)*7),Ln=s.ln*(.2+.8*u),c=M.cos(s.an),n=M.sin(s.an),w=s.w*(k<.5?k*2:1),x0=s.x-c*Ln,y0=s.y-n*Ln,x1=s.x+c*Ln,y1=s.y+n*Ln;
for(const q of SLP){
const ox=-n*w*q[0],oy=c*w*q[0];
g.fillStyle='rgba('+q[2]+','+q[1]*k+')';
g.beginPath();g.moveTo(x0,y0);g.lineTo(s.x+ox,s.y+oy);g.lineTo(x1,y1);g.lineTo(s.x-ox,s.y-oy);g.closePath();g.fill();
}
}
g.restore();
}
function fxDomTop(){
const k=domK();
if(k<=0)return;
const te=DD-p.dn;
const vg=g.createRadialGradient(VW/2,VH/2,VH*.32,VW/2,VH/2,M.max(VW,VH)*.75);
vg.addColorStop(0,'rgba(120,0,16,0)');vg.addColorStop(1,'rgba(30,0,8,'+.75*k+')');
g.fillStyle=vg;g.fillRect(0,0,VW,VH);
g.fillStyle='rgba(210,20,45,'+.09*k+')';g.fillRect(0,0,VW,VH);
const bh=VH*.075*k;
g.fillStyle='rgba(2,0,2,'+.9*k+')';g.fillRect(0,0,VW,bh);g.fillRect(0,VH-bh,VW,bh);
if(te>.1&&te<2){
const a=M.min(1,(te-.1)*4)*M.min(1,(2-te)*2.5),fs=M.round(M.min(40,VW*.07));
g.save();g.globalAlpha=a;g.textAlign='center';
g.font='700 '+fs+'px system-ui,sans-serif';
g.shadowColor='rgba(255,40,70,1)';g.shadowBlur=24;g.fillStyle='#ffeceb';
g.fillText('WANGSAF GAMING',VW/2,VH*.28);
g.shadowBlur=0;g.font='600 13px system-ui,sans-serif';g.fillStyle='rgba(255,170,180,.9)';
g.fillText('Wangsaf Gaming Yt',VW/2,VH*.28-fs-4);
g.restore();
}
}
