const snRG=[
{f:.03,b:.74,h:.34,k:.0042,s:101,c0:'#8a95c8',c1:'#c6b3cc',l0:'#f2d3d6',l1:'rgba(244,207,198,.45)',rm:'rgba(255,235,230,.6)'},
{f:.08,b:.8,h:.24,k:.0065,s:131,c0:'#6f7fb4',c1:'#b3a8c9',l0:'#f7dcdc',l1:'rgba(239,199,196,.45)',rm:'rgba(255,240,236,.7)'}
];
const snHL=[
{f:.14,b:.86,a:16,w:.006,st:70,th:26,c0:'#d6e0f2',c1:'#c3d0e8'},
{f:.26,b:.94,a:12,w:.009,st:90,th:40,c0:'#e4ebf7',c1:'#d0dcee'}
];
const vkRG=[
{f:.1,b:.82,h:.2,k:.0075,s:201,c0:'#2c1419',c1:'#3d1b1b',l0:'#5a2a24',l1:'rgba(122,50,31,.5)',rm:'rgba(255,150,80,.5)'},
{f:.22,b:.92,h:.12,k:.011,s:231,c0:'#170b0e',c1:'#241012',l0:'#3b1a16',l1:'rgba(82,34,26,.5)',rm:'rgba(255,125,55,.6)'}
];
const vkGL=(()=>{const r=g.createRadialGradient(0,0,0,0,0,1);r.addColorStop(0,'rgba(255,170,70,.9)');r.addColorStop(.25,'rgba(255,110,40,.5)');r.addColorStop(.6,'rgba(220,60,20,.18)');r.addColorStop(1,'rgba(200,50,20,0)');return r})();
const vkPF=[['96,72,70',.9],['255,120,50',.8]].map(c=>{
const k=document.createElement('canvas');k.width=k.height=128;
const x=k.getContext('2d'),r=x.createRadialGradient(64,64,0,64,64,64);
r.addColorStop(0,'rgba('+c[0]+','+c[1]+')');r.addColorStop(.6,'rgba('+c[0]+','+c[1]*.45+')');r.addColorStop(1,'rgba('+c[0]+',0)');
x.fillStyle=r;x.fillRect(0,0,128,128);
return k;
});
function skHz(c,a){
const q=g.createLinearGradient(0,GY*.55,0,GY);
q.addColorStop(0,'rgba('+c+',0)');q.addColorStop(1,'rgba('+c+','+a+')');
g.fillStyle=q;g.fillRect(0,GY*.55,VW,GY*.45+1);
}
function skRd(L){
const SP=8,sh=cam*L.f,sb=M.floor(sh/SP)*SP,fr=sh-sb,n=M.ceil(VW/SP)+3,B=GY*L.b,H=GY*L.h,ys=[],P=new Path2D(),Lt=new Path2D(),Rm=new Path2D();
for(let j=0;j<n;j++){const wx=sb+j*SP;ys.push(B-H*(skRg(wx*L.k+L.s)+.35*skRg(wx*L.k*2.7+L.s+9))/1.35)}
P.moveTo(-fr,GY+4);
for(let j=0;j<n;j++){
const x=j*SP-fr;
P.lineTo(x,ys[j]);
if(j<n-1&&ys[j+1]>ys[j]){Lt.moveTo(x,ys[j]);Lt.lineTo(x+SP,ys[j+1]);Lt.lineTo(x+SP-(GY+4-ys[j+1])*.5,GY+4);Lt.lineTo(x-(GY+4-ys[j])*.5,GY+4);Lt.closePath();Rm.moveTo(x,ys[j]);Rm.lineTo(x+SP,ys[j+1])}
}
P.lineTo((n-1)*SP-fr,GY+4);P.closePath();
let q=g.createLinearGradient(0,B-H,0,GY);
q.addColorStop(0,L.c0);q.addColorStop(1,L.c1);
g.fillStyle=q;g.fill(P);
q=g.createLinearGradient(0,B-H,0,GY);
q.addColorStop(0,L.l0);q.addColorStop(1,L.l1);
g.fillStyle=q;g.fill(Lt);
g.strokeStyle=L.rm;g.lineWidth=1.2;g.stroke(Rm);
}
function snHl(L){
const q=g.createLinearGradient(0,GY*L.b-L.a*1.5,0,GY+4),cp=new Path2D(),tr=new Path2D(),sn=new Path2D();
q.addColorStop(0,L.c0);q.addColorStop(1,L.c1);
g.fillStyle=q;g.beginPath();g.moveTo(0,GY+4);
for(let x=0;x<=VW+12;x+=12){const y=hill(L,x+cam*L.f);g.lineTo(x,y);if(x)cp.lineTo(x,y);else cp.moveTo(x,y)}
g.lineTo(VW+12,GY+4);g.fill();
g.strokeStyle='rgba(255,255,255,.75)';g.lineWidth=1.4;g.stroke(cp);
for(let i=M.floor(cam*L.f/L.st)-1;i<(cam*L.f+VW)/L.st+1;i++){
if(hs(i+L.st)<.3)continue;
const wx=i*L.st+hs(i+L.th)*L.st*.6,x=wx-cam*L.f,by=hill(L,wx)+2,h=L.th*(.7+hs(i+L.st+4)*.6),w=h*.34;
for(let k=0;k<3;k++){
const yy=by-h*.18-k*h*.27,ww=w*(1-k*.22),th=h*.42;
tr.moveTo(x-ww,yy);tr.lineTo(x,yy-th);tr.lineTo(x+ww,yy);
sn.moveTo(x-ww*.55,yy-th*.45);sn.lineTo(x,yy-th);sn.lineTo(x+ww*.55,yy-th*.45);
}
}
g.fillStyle='#2f4668';g.fill(tr);
g.fillStyle='#e6eefa';g.fill(sn);
}
function snFl(n,o,z,al,sp,ox){
g.fillStyle='rgba(255,255,255,'+al+')';
for(let i=0;i<n;i++){
const x=((hs(i+o+2000)*VW+M.sin(T*.7+i)*14+T*10*(.4+hs(i+o+2010)))%VW+VW)%VW+ox,y=((hs(i+o+2020)*VH+T*sp*(.6+hs(i+o+2030)*.8))%VH+VH)%VH,r=z*(.6+hs(i+o+2040)*.9);
g.fillRect(x,y,r,r);
}
}
function bgSn(){
const sk=g.createLinearGradient(0,0,0,GY),mw=VW+200,mx=((VW*.7-cam*.02)%mw+mw)%mw-100;
sk.addColorStop(0,'#1d2f66');sk.addColorStop(.3,'#3d4f95');sk.addColorStop(.55,'#8a79ad');sk.addColorStop(.75,'#e0a3b4');sk.addColorStop(.9,'#f3c0a4');sk.addColorStop(1,'#f8d7ae');
g.fillStyle=sk;g.fillRect(0,0,VW,VH);
g.fillStyle='#e8eeff';
for(let i=0;i<30;i++){
const x=((hs(i)*VW*1.4-cam*.02)%VW+VW)%VW,y=hs(i+99)*GY*.4;
g.globalAlpha=(.15+.5*M.abs(M.sin(T*(.5+hs(i+5))+i)))*(1-y/(GY*.45));g.fillRect(x,y,1.4,1.4);
}
g.globalAlpha=1;
g.save();g.translate(mx,GY*.74);g.scale(GY*.8,GY*.6);g.globalAlpha=.55;g.fillStyle=guSN;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
skRd(snRG[0]);
skHz('246,200,180',.35);
skRd(snRG[1]);
skHz('246,200,180',.3);
snHl(snHL[0]);
snHl(snHL[1]);
snFl(40+ST.gq*30,0,1.6,.8,34,0);
}
function snPn(x,y,s,i,k){
const h=(90+hs(i+2100)*50)*s,w=h*.26;
if(!k){g.fillStyle='rgba(70,90,150,.24)';g.beginPath();g.ellipse(x-h*.3,y+1,h*.36,3*s,0,0,TAU);g.fill();return}
const tw=h*.045;
g.fillStyle='#17110e';g.fillRect(x-tw*.5-1,y-h*.2-1,tw+2,h*.2+1);
g.fillStyle='#4a382c';g.fillRect(x-tw*.5,y-h*.2,tw,h*.2);
g.fillStyle='#2d211a';g.fillRect(x-tw*.5,y-h*.2,tw*.4,h*.2);
g.fillStyle='#6b5340';g.fillRect(x+tw*.2,y-h*.2,tw*.3,h*.2);
g.lineJoin='round';
for(let t=0;t<10;t++){
const sd=i*13+t*29,u=t/9,yb=y-h*.09-t*h*.088,th=h*(.17-.006*t),yt=M.max(yb-th*1.15,y-h),ww=w*(1-u*.86),wl=ww*(.88+hs(sd)*.24),wr=ww*(.88+hs(sd+1)*.24),ox=(hs(sd+3)-.5)*w*.08,m=M.round(4+ww/w*5),P=new Path2D(),S=new Path2D(),tp=[];
P.moveTo(x+ox,yt);P.quadraticCurveTo(x-wl*.45,yt+(yb-yt)*.5,x-wl,yb+th*.25);
tp.push([x-wl,yb+th*.25]);
for(let j=1;j<2*m;j++){
const px=lr(x-wl,x+wr,j/(2*m))+(hs(sd+j)-.5)*ww*.08,py=j&1?yb-th*(.02+.1*hs(sd+j+40)):yb+th*(.14+.14*hs(sd+j+80));
P.lineTo(px,py);if(!(j&1))tp.push([px,py]);
}
P.lineTo(x+wr,yb+th*.25);tp.push([x+wr,yb+th*.25]);
P.quadraticCurveTo(x+wr*.45,yt+(yb-yt)*.5,x+ox,yt);P.closePath();
g.fillStyle='#24443a';g.fill(P);
g.save();g.clip(P);
poly([x-wl*1.3,yt-2,x-ww*.05,yt-2,x-wl*.42,yb+th*.4,x-wl*1.3,yb+th*.4],'#142a27');
poly([x+ww*.3,yt-2,x+wr*1.3,yt-2,x+wr*1.3,yb+th*.4,x+wr*.6,yb+th*.4],'#356354');
g.strokeStyle='rgba(10,26,24,.45)';g.lineWidth=.7;g.beginPath();
for(const q of tp){g.moveTo(lr(x+ox,q[0],.2),lr(yt,yb,.34));g.lineTo(q[0],q[1])}
g.stroke();
const sy=yb-th*.36;
S.moveTo(x-wl*1.2,sy);S.lineTo(x+wr*1.2,sy);S.lineTo(x+wr*1.2,yb-th*.2);
for(let j=1;j<14;j++)S.lineTo(lr(x+wr*1.2,x-wl*1.2,j/14),yb-th*.26+(j&1?th*.13*hs(sd+j+9):0));
S.lineTo(x-wl*1.2,yb-th*.2);S.closePath();
g.save();g.clip(S);g.fillStyle='#a9bbd9';g.fill(S);g.translate(ww*.14,-th*.08);g.fillStyle='#f1f6fd';g.fill(S);g.restore();
g.restore();
g.strokeStyle='#0e1a1c';g.lineWidth=1;g.stroke(P);
}
}
function snLs(){
const ph=VH-GY,o=[];
for(let i=M.floor((cam-100)/150);i<(cam+VW+100)/150;i++){
const r=hs(i+2300);
if(r>.68)continue;
const y=GY+6+hs(i+2310)*(ph-12);
o.push([r<.3?snPn:r<.52?snMd:snRk,i*150+hs(i+2320)*110,y,.75+(y-GY)/ph*.5,i]);
}
return o.sort((a,b)=>a[2]-b[2]);
}
function fgSn(){
g.save();
for(const e of snLs())e[0](e[1],e[2],e[3],e[4],1);
g.restore();
}
function fgOb(){
if(ST.bg!=3&&ST.bg!=4)return;
const q=slA,c=g;
if(q)g=slO;
if(ST.bg==3)fgGu();else fgSn();
if(q)g=c;
}
function snMd(x,y,s,i,k){
const r=(14+hs(i+2110)*14)*s;
if(!k){g.fillStyle='rgba(80,100,160,.22)';g.beginPath();g.ellipse(x-r*.5,y+1,r*1.3,3*s,0,0,TAU);g.fill();return}
g.fillStyle='#b9c8e4';g.beginPath();g.ellipse(x,y-r*.18,r,r*.4,0,0,TAU);g.fill();
g.fillStyle='#f4f8ff';g.beginPath();g.ellipse(x+r*.12,y-r*.28,r*.82,r*.3,0,0,TAU);g.fill();
}
function snRk(x,y,s,i,k){
const r=(7+hs(i+2120)*9)*s;
if(!k){g.fillStyle='rgba(80,100,160,.24)';g.beginPath();g.ellipse(x-r*.9,y+1,r*1.6,2.4*s,0,0,TAU);g.fill();return}
g.fillStyle='#5d6c8e';g.beginPath();g.moveTo(x-r,y);g.quadraticCurveTo(x-r*.9,y-r*.9,x-r*.1,y-r*.85);g.quadraticCurveTo(x+r*.8,y-r*.9,x+r,y);g.closePath();g.fill();
g.fillStyle='#f0f5fc';g.beginPath();g.moveTo(x-r*.7,y-r*.55);g.quadraticCurveTo(x-r*.1,y-r*1.1,x+r*.7,y-r*.5);g.quadraticCurveTo(x,y-r*.7,x-r*.7,y-r*.55);g.fill();
}
