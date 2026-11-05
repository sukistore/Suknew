const guCT_=()=>_guCT||(_guCT=(()=>{
const S=1024,c=document.createElement('canvas');c.width=S;c.height=96;
const x=c.getContext('2d');
for(let i=0;i<7;i++){
const px=hs(i+1200)*S,py=30+hs(i+1210)*36,rx=70+hs(i+1220)*120,ry=5+hs(i+1230)*8;
for(const o of[-S,0,S]){
x.save();x.translate(px+o,py);x.scale(rx,ry);
const r=x.createRadialGradient(0,0,0,0,0,1);
r.addColorStop(0,'rgba(255,230,200,.75)');r.addColorStop(1,'rgba(255,230,200,0)');
x.fillStyle=r;x.beginPath();x.arc(0,0,1,0,TAU);x.fill();x.restore();
}
}
return c;
}));
const guLY=[
{f:.08,b:.84,st:560,h0:.05,hv:.05,s:21,c0:'#f0bd8e',c1:'#e8b283',sd:'rgba(122,94,130,.5)'},
{f:.18,b:.92,st:420,h0:.06,hv:.07,s:41,c0:'#efae6a',c1:'#e2a063',sd:'rgba(88,64,114,.55)'},
{f:.32,b:1,st:320,h0:.04,hv:.06,s:61,c0:'#f0a85a',c1:'#dca56a',sd:'rgba(74,50,98,.6)'}
];
function guCl(){
for(const C of[[.06,.12,1500,6,.55,0],[.2,.1,1200,10,.4,500]]){
const tw=C[2],x0=(((T*C[3]-cam*.01+C[5])%tw)+tw)%tw-tw;
g.globalAlpha=C[4];
for(let x=x0;x<VW;x+=tw)g.drawImage(guCT_(),x,GY*C[0],tw,GY*C[1]);
}
g.globalAlpha=1;
}
function guMs(){
const st=420,sh=cam*.04,B=GY*.74,i0=M.floor(sh/st)-1,i1=M.ceil((sh+VW)/st)+1;
g.fillStyle='#d8a688';g.fillRect(0,B,VW,GY-B+1);
for(let i=i0;i<=i1;i++){
if(hs(i+1300)<.25)continue;
const xc=i*st+hs(i+1310)*st*.6-sh,w=90+hs(i+1320)*110,h=GY*(.09+hs(i+1330)*.12),t=hs(i+1340)<.3?w*.14:w*.42;
g.fillStyle='#a47f89';
g.beginPath();g.moveTo(xc-w*.8,B);g.lineTo(xc-w*.52,B-h*.4);g.lineTo(xc-t-w*.02,B-h*.44);g.lineTo(xc-t,B-h);g.lineTo(xc+t,B-h*.98);g.lineTo(xc+t+w*.02,B-h*.46);g.lineTo(xc+w*.54,B-h*.4);g.lineTo(xc+w*.8,B);g.closePath();g.fill();
g.fillStyle='#c99b86';
g.beginPath();g.moveTo(xc+t*.1,B-h);g.lineTo(xc+t,B-h*.98);g.lineTo(xc+t+w*.02,B-h*.46);g.lineTo(xc+w*.54,B-h*.4);g.lineTo(xc+w*.8,B);g.lineTo(xc+t*.1+w*.1,B);g.closePath();g.fill();
g.strokeStyle='rgba(112,78,90,.3)';g.lineWidth=1;
g.beginPath();g.moveTo(xc-t,B-h*.7);g.lineTo(xc+t,B-h*.68);g.moveTo(xc-t,B-h*.85);g.lineTo(xc+t,B-h*.84);g.stroke();
}
}
function guHz(a){
const q=g.createLinearGradient(0,GY*.6,0,GY);
q.addColorStop(0,'rgba(248,206,152,0)');q.addColorStop(1,'rgba(248,206,152,'+a+')');
g.fillStyle=q;g.fillRect(0,GY*.6,VW,GY*.4+1);
}
function guDn(L){
const sh=cam*L.f,i0=M.floor(sh/L.st)-2,i1=M.ceil((sh+VW)/L.st)+2,B=GY*L.b,bt=GY+4,lg=g.createLinearGradient(0,B-GY*(L.h0+L.hv),0,bt),Pl=new Path2D(),Ps=new Path2D();
lg.addColorStop(0,L.c0);lg.addColorStop(1,L.c1);
g.fillStyle=lg;g.fillRect(0,B,VW,bt-B);
for(let i=i0;i<=i1;i++){
const xc=i*L.st+hs(i+L.s)*L.st*.5-sh,wl=L.st*(.3+hs(i+L.s+3)*.15),wr=L.st*(.8+hs(i+L.s+5)*.25),h=GY*(L.h0+hs(i+L.s+7)*L.hv),yc=B-h,x0=xc-wl,x1=xc+wr,xb=xc+wr*(.05+hs(i+L.s+9)*.3);
Pl.moveTo(x0,B+2);
Pl.bezierCurveTo(x0+wl*.1,B-h*.5,xc-wl*.1,yc+h*.18,xc,yc);
Pl.bezierCurveTo(xc+wr*.25,yc+h*.1,xc+wr*.55,B-h*.28,x1,B+2);
Pl.closePath();
Ps.moveTo(xc,yc);
Ps.bezierCurveTo(xc-wl*.1,yc+h*.18,x0+wl*.1,B-h*.5,x0,B+2);
Ps.lineTo(xb,B+2);
Ps.quadraticCurveTo(xc+(xb-xc)*.3+(hs(i+L.s+11)-.5)*wl*.4,yc+h*.55,xc,yc);
Ps.closePath();
}
g.fillStyle=lg;g.fill(Pl);
g.fillStyle=L.sd;g.fill(Ps);
}
function bgGu(){
const sk=g.createLinearGradient(0,0,0,GY);
sk.addColorStop(0,'#2f5d95');sk.addColorStop(.3,'#5b8fc3');sk.addColorStop(.55,'#a9c4d6');sk.addColorStop(.75,'#f3d5a6');sk.addColorStop(.9,'#f6bf82');sk.addColorStop(1,'#f0a466');
g.fillStyle=sk;g.fillRect(0,0,VW,VH);
const mw=VW+200,mx=((VW*.7-cam*.02)%mw+mw)%mw-100,my=GY*.6;
g.save();g.translate(mx,my);g.scale(GY*.9,GY*.9);g.fillStyle=guSN;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
g.fillStyle='#fff6dc';g.beginPath();g.arc(mx,my,17,0,TAU);g.fill();
guCl();
guMs();
guHz(.45);
guDn(guLY[0]);
guHz(.3);
guDn(guLY[1]);
guDn(guLY[2]);
}
let fgS=0;
function guCa(x,y,s,i,k){
const h=(86+hs(i+1500)*44)*s,w=14*s,ay=y-h*.36,by=y-h*.54,la=w*2.3,ra=w*2.1,lh=h*(.28+hs(i+1520)*.2),rh=h*(.22+hs(i+1530)*.2),ar=hs(i+1510)<.9;
if(!k){
g.fillStyle='rgba(84,46,28,.26)';g.beginPath();g.ellipse(x-h*.34,y+1,h*.4,3*s,0,0,TAU);g.fill();
g.fillStyle='rgba(30,22,16,.35)';g.beginPath();g.ellipse(x,y,w*.7,2.2*s,0,0,TAU);g.fill();
return;
}
const aw=w*.74,tp=y-h+w*.5,tk=new Path2D(),L=new Path2D(),R=new Path2D();
tk.moveTo(x-w*.6,y);tk.quadraticCurveTo(x-w*.49,y-h*.1,x-w*.46,y-h*.24);tk.lineTo(x-w*.46,tp);tk.arc(x,tp,w*.46,PI,0);tk.lineTo(x+w*.46,y-h*.24);tk.quadraticCurveTo(x+w*.49,y-h*.1,x+w*.6,y);tk.closePath();
L.moveTo(x,ay);L.bezierCurveTo(x-la*.9,ay,x-la,ay-lh*.15,x-la,ay-lh);
R.moveTo(x,by);R.bezierCurveTo(x+ra*.9,by,x+ra,by-rh*.15,x+ra,by-rh);
g.lineCap='round';g.lineJoin='round';g.strokeStyle='#142219';
if(ar){g.lineWidth=aw+2.4;g.stroke(L);g.stroke(R)}
g.lineWidth=2.4;g.stroke(tk);
const arm=P=>{
g.lineWidth=aw;g.strokeStyle='#4d6b45';g.stroke(P);
g.save();g.translate(aw*.2,-aw*.16);g.lineWidth=aw*.4;g.strokeStyle='#7a9a5e';g.stroke(P);g.restore();
g.save();g.translate(-aw*.24,aw*.15);g.lineWidth=aw*.34;g.strokeStyle='#2f4a37';g.stroke(P);g.restore();
g.save();g.translate(aw*.3,-aw*.22);g.lineWidth=aw*.09;g.strokeStyle='#c4cf8a';g.stroke(P);g.restore();
g.lineWidth=.8;g.strokeStyle='rgba(20,36,28,.5)';g.stroke(P);
g.save();g.translate(aw*.12,-aw*.09);g.stroke(P);g.restore();
};
if(ar){arm(L);arm(R)}
g.fillStyle='#4d6b45';g.fill(tk);
g.save();g.clip(tk);
g.fillStyle='#2f4a37';g.fillRect(x-w,tp-w,w*.78,h+w*2);
g.fillStyle='#7a9a5e';g.fillRect(x+w*.14,tp-w,w,h+w*2);
g.fillStyle='#c4cf8a';g.fillRect(x+w*.3,tp-w*.2,w*.08,h);
g.strokeStyle='rgba(20,36,28,.55)';g.lineWidth=1;g.beginPath();
for(let j=-3;j<=3;j++){const rx=x+j*w*.15;g.moveTo(rx,y);g.lineTo(rx,tp);g.quadraticCurveTo(rx,tp-w*.4,x,tp-w*.46)}
g.stroke();
g.fillStyle='rgba(236,228,184,.8)';g.beginPath();
for(let n=1;n<26;n++){const yy=y-n*h*.038;for(let j=-3;j<=3;j+=1){const xx=x+j*w*.15+(hs(i+n*7+j)-.5)*w*.04;g.rect(xx,yy+(j&1)*h*.015,.9,.9)}}
g.fill();
g.restore();
}
function guLs(){
const ph=VH-GY,o=[];
for(let i=M.floor((cam-100)/150);i<(cam+VW+100)/150;i++){
const r=hs(i+1600);
if(r>.7)continue;
const y=GY+6+hs(i+1610)*(ph-12);
o.push([r<.22?guCa:r<.5?guSh:guRk,i*150+hs(i+1620)*110,y,.75+(y-GY)/ph*.5,i]);
}
return o.sort((a,b)=>a[2]-b[2]);
}
function fgGu(){
g.save();
for(const e of guLs())e[0](e[1],e[2],e[3],e[4],1);
g.restore();
}
function guSh(x,y,s,i,k){
const r=(10+hs(i+1540)*9)*s;
if(!k){g.fillStyle='rgba(84,46,28,.24)';g.beginPath();g.ellipse(x-r*.9,y+1,r*1.5,2.6*s,0,0,TAU);g.fill();return}
for(let k=0;k<7;k++){
const u=k<4,cx=x+(u?(k-1.5)*r*.7:(k-5)*r*.6),cy=y-r*(u?.3:.78)-hs(i+k+1550)*r*.12,rx=r*(u?.62:.5)*(.85+hs(i+k+1570)*.3),ry=r*(u?.5:.42);
g.fillStyle='#5d6a3b';g.beginPath();g.ellipse(cx,cy,rx,ry,0,0,TAU);g.fill();
g.fillStyle='#98984f';g.beginPath();g.ellipse(cx+rx*.22,cy-ry*.22,rx*.62,ry*.55,0,0,TAU);g.fill();
}
}
function guRk(x,y,s,i,k){
const r=(7+hs(i+1560)*9)*s;
if(!k){g.fillStyle='rgba(84,46,28,.26)';g.beginPath();g.ellipse(x-r*.9,y+1,r*1.6,2.4*s,0,0,TAU);g.fill();return}
g.fillStyle='#8a5d4a';g.beginPath();g.moveTo(x-r,y);g.quadraticCurveTo(x-r*.9,y-r*.9,x-r*.1,y-r*.85);g.quadraticCurveTo(x+r*.8,y-r*.9,x+r,y);g.closePath();g.fill();
g.fillStyle='#c48b64';g.beginPath();g.moveTo(x+r*.1,y-r*.82);g.quadraticCurveTo(x+r*.8,y-r*.88,x+r,y);g.lineTo(x+r*.3,y);g.closePath();g.fill();
}
function grGu(){
let q=g.createLinearGradient(0,GY,0,VH);
q.addColorStop(0,'#dca56a');q.addColorStop(.18,'#d39a5e');q.addColorStop(.6,'#bb7f45');q.addColorStop(1,'#8f5a30');
g.fillStyle=q;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
q=g.createLinearGradient(0,GY,0,GY+56);
q.addColorStop(0,'rgba(250,214,160,.4)');q.addColorStop(1,'rgba(250,214,160,0)');
g.fillStyle=q;g.fillRect(cam-40,GY,VW+80,56);
const ph=VH-GY,Pd=new Path2D(),Pl=new Path2D(),o=[];
for(let r=1;r<=9;r++){
const t=r/9,y=GY+ph*t*t+3,a=.8+t*2.6,fq=.05-t*.02;
for(let i=M.floor((cam-60)/130);i<(cam+VW+60)/130;i++){
const sd=i*7+r*131;
if(hs(sd)<.3)continue;
const xs=i*130+hs(sd+1)*40,xl=60+hs(sd+2)*70,yo=(hs(sd+3)-.5)*ph*.05;
for(let x=0;x<=xl;x+=10){
const wx=xs+x,yy=y+yo+M.sin(wx*fq+r*1.9)*a;
if(x){Pd.lineTo(wx,yy);Pl.lineTo(wx,yy-1.6)}else{Pd.moveTo(wx,yy);Pl.moveTo(wx,yy-1.6)}
}
}
}
g.save();
g.lineWidth=1.2;g.lineCap='round';
g.strokeStyle='rgba(112,64,28,.2)';g.stroke(Pd);
g.strokeStyle='rgba(255,226,172,.2)';g.stroke(Pl);
for(const e of guLs()){e[0](e[1],e[2],e[3],e[4],0);if(!fgS)e[0](e[1],e[2],e[3],e[4],1)}
g.restore();
}
const skVn=q=>{const i=M.floor(q),f=q-i;return hs(i)+(hs(i+1)-hs(i))*f*f*(3-2*f)};
const skRg=q=>1-M.abs(2*skVn(q)-1);
