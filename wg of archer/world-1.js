const SHG=(()=>{const r=g.createRadialGradient(0,0,0,0,0,1);r.addColorStop(0,'rgba(2,4,12,1)');r.addColorStop(.55,'rgba(2,4,12,.5)');r.addColorStop(1,'rgba(2,4,12,0)');return r})();
let _MGS;const MGS_=()=>_MGS||(_MGS=(()=>{
const S=500,c=document.createElement('canvas');c.width=S;c.height=S;
const x=c.getContext('2d');
const f=(cx,cy,r,a)=>{
const q=x.createRadialGradient(cx,cy,0,cx,cy,r);
for(let i=0;i<=10;i++){const t=i/10;q.addColorStop(t,'rgba(190,204,246,'+(a*Math.exp(-t*t*2.6)*(1-t*t*t)).toFixed(3)+')')}
x.fillStyle=q;x.fillRect(0,0,S,S);
};
f(250,270,200,.12);f(250,250,130,.1);f(250,250,60,.13);f(250,250,28,.17);
const t=document.createElement('canvas');t.width=S;t.height=S;
const y=t.getContext('2d');y.filter='blur(6px)';y.drawImage(c,0,0);
return t;
}));
const MPG=(()=>{const r=g.createRadialGradient(0,0,0,0,0,1);r.addColorStop(0,'rgba(150,178,222,.22)');r.addColorStop(.6,'rgba(150,178,222,.08)');r.addColorStop(1,'rgba(150,178,222,0)');return r})();
function shd(x,w,a){
g.save();g.translate(x-w*.2,GY+1);g.scale(w,w*.2);g.globalAlpha=a;g.fillStyle=SHG;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
}
const LY=[
{f:.12,b:.62,a:38,w:.0045,c0:'#454c86',c1:'#303a6c',c2:'#212850',fg:'rgba(138,122,186,',fa:.46},
{f:.28,b:.7,a:34,w:.007,c0:'#303870',c1:'#222a56',c2:'#141a38',fg:'rgba(112,102,168,',fa:.42},
{f:.5,b:.76,a:26,w:.011,c0:'#202850',c1:'#141a38',c2:'#0a0e22',fg:'rgba(90,86,148,',fa:.36}
];
const TS=[
{st:78,h0:11,hv:12,c:'#2c3466',tc:'#252c58',rim:'rgba(186,172,238,.3)'},
{st:60,h0:20,hv:16,c:'#1a2048',tc:'#151a3c',rim:'rgba(164,152,228,.3)'},
{st:42,h0:30,hv:26,c:'#0a0e22',tc:'#070a1a',rim:'rgba(136,128,210,.34)'}
];
const TV=[{n:4,k:1,w:.3,s:.22,t:.36,c:.2},{n:6,k:1.35,w:.2,s:.17,t:.3,c:.15},{n:3,k:.85,w:.42,s:.27,t:.42,c:.3},{n:5,k:1.1,w:.26,s:.19,t:.34,c:.17}];
const MT=[
{f:.035,st:210,s:11,b:.68,h0:.2,hv:.18,t:'#2e2a56',bt:'#695b8c',lt:'rgba(190,178,240,.34)',dk:.42,sn:'rgba(150,138,206,.34)'},
{f:.08,st:150,s:37,b:.72,h0:.12,hv:.16,t:'#201e48',bt:'#4a3f70',lt:'rgba(170,158,228,.3)',dk:.46,sn:'rgba(128,116,186,.3)',fg:'rgba(124,110,176,',fa:.46}
];
let _MS;const MS_=()=>_MS||(_MS=(()=>{
const c=document.createElement('canvas');c.width=512;c.height=64;
const x=c.getContext('2d');
for(let i=0;i<9;i++){
const px=hs(i+300)*512,py=24+hs(i+310)*16,rx=60+hs(i+320)*90,ry=8+hs(i+330)*8;
for(const o of[-512,0,512]){
x.save();x.translate(px+o,py);x.scale(rx,ry);
const r=x.createRadialGradient(0,0,0,0,0,1);
r.addColorStop(0,'rgba(208,198,240,.5)');r.addColorStop(1,'rgba(208,198,240,0)');
x.fillStyle=r;x.beginPath();x.arc(0,0,1,0,TAU);x.fill();x.restore();
}
}
return c;
}));
let _CLD;const CLD_=()=>_CLD||(_CLD=(()=>{
const W=2048,H=240,c=document.createElement('canvas');c.width=W;c.height=H;
const x=c.getContext('2d');
const pf=(px,py,rx,ry,col,a)=>{
for(const o of[-W,0,W]){
x.save();x.translate(px+o,py);x.scale(rx,ry);
const r=x.createRadialGradient(0,0,0,0,0,1);
r.addColorStop(0,col+a+')');r.addColorStop(.55,col+a*.55+')');r.addColorStop(1,col+'0)');
x.fillStyle=r;x.beginPath();x.arc(0,0,1,0,TAU);x.fill();x.restore();
}
};
for(let i=0;i<6;i++){
const cx=hs(i+400)*W,cy=100+hs(i+410)*40,s=.7+hs(i+420)*.6;
for(let pass=0;pass<2;pass++)for(let k=0;k<9;k++){
const px=cx+(hs(i*9+k+430)-.5)*190*s,py=cy+(hs(i*9+k+520)-.5)*46*s,rx=(50+hs(i*9+k+610)*60)*s,ry=(18+hs(i*9+k+700)*22)*s;
if(pass)pf(px,py,rx,ry,'rgba(10,12,34,',.62);
else pf(px,py-ry*.3,rx*1.04,ry,'rgba(140,128,196,',.14);
}
}
const t=document.createElement('canvas');t.width=W*3;t.height=H;
const y=t.getContext('2d');y.filter='blur(5px)';
for(let k=0;k<3;k++)y.drawImage(c,k*W,0);
const o=document.createElement('canvas');o.width=W;o.height=H;
o.getContext('2d').drawImage(t,-W,0);
return o;
}));
const CLP=[{y:.03,h:.3,w:2200,p:.015,s:7,a:.5,o:0},{y:.14,h:.26,w:1900,p:.03,s:12,a:.4,o:900}];
const RN=1;
const hill=(L,wx)=>GY*L.b+M.sin(wx*L.w)*L.a+M.sin(wx*L.w*2.3+1.7)*L.a*.4;
let wkey='',WG=[],WS={};
function wsRs(){
const k=GY+'|'+VH;
if(k==wkey)return;
wkey=k;
const fb=(y0,y1,p,q,bl)=>{const f=g.createLinearGradient(0,y0,0,y1);for(let i=0;i<=10;i++){const t=i/10;f.addColorStop(t,p+(q*M.pow(M.sin(bl?PI*t:PI*t/2),2)).toFixed(3)+')')}return f};
WG=LY.map(L=>{
const y0=GY*L.b-L.a*1.5,a=g.createLinearGradient(0,y0,0,VH);
a.addColorStop(0,L.c0);a.addColorStop(.45,L.c1);a.addColorStop(1,L.c2);
const fy=GY*L.b-L.a*.7,f=g.createLinearGradient(0,fy,0,GY+4);
f.addColorStop(0,L.fg+'0)');f.addColorStop(1,L.fg+L.fa+')');
const hb=L.a*1.1+38,my=GY*L.b-hb,m=fb(my,my+hb*2,L.fg,L.fa*.8,1);
return{a,f,fy,m,my,mh:hb*2};
});
const sk=g.createLinearGradient(0,0,0,GY);
sk.addColorStop(0,'#080b20');sk.addColorStop(.25,'#141838');sk.addColorStop(.45,'#26264f');sk.addColorStop(.65,'#433b6e');sk.addColorStop(.82,'#6e5f93');sk.addColorStop(1,'#9d8bb0');
const fg=g.createLinearGradient(0,GY-130,0,GY);
fg.addColorStop(0,'rgba(150,134,194,0)');fg.addColorStop(1,'rgba(150,134,194,.4)');
const gh=g.createLinearGradient(0,GY,0,GY+70);
gh.addColorStop(0,'rgba(130,114,176,.3)');gh.addColorStop(1,'rgba(130,114,176,0)');
const m=MT.map(K=>{
const y0=GY*(K.b-K.h0-K.hv),y1=GY*K.b,a=g.createLinearGradient(0,y0,0,y1),d=g.createLinearGradient(0,y0,0,y1);
a.addColorStop(0,K.t);a.addColorStop(1,K.bt);
d.addColorStop(0,'rgba(6,5,26,'+K.dk+')');d.addColorStop(1,'rgba(6,5,26,0)');
const fy=y1-GY*.24,f=K.fg?fb(fy,y1-GY*.03,K.fg,K.fa,0):0;
return{a,d,f,fy};
});
WS={sk,fg,gh,m};
}
function mist(y,h,tw,sp,off,a){
g.globalAlpha=a;
const x0=-((((off+T*sp)%tw)+tw)%tw);
for(let x=x0;x<VW;x+=tw)g.drawImage(MS_(),x,y,tw,h);
g.globalAlpha=1;
}
function mtns(){
MT.forEach((K,ki)=>{
const S=WS.m[ki],B=GY*K.b,sh=cam*K.f,i0=M.floor(sh/K.st)-4,i1=M.ceil((sh+VW)/K.st)+4,pk=[],ys=[],ST=6,OF=260,n=M.ceil((VW+OF*2)/ST)+1,sb=M.floor(sh/ST)*ST,fr=sh-sb;
const vn=q=>{const i=M.floor(q),f=q-i;return hs(i)+(hs(i+1)-hs(i))*f*f*(3-2*f)};
for(let i=i0;i<=i1;i++)pk.push({i,x:i*K.st+hs(i+K.s)*K.st*.5,h:GY*(K.h0+hs(i+K.s+7)*K.hv),w:K.st*(.72+hs(i+K.s+9)*.3),e:1.3+hs(i+K.s+11)*.35});
for(let j=0;j<n;j++){
const wx=j*ST-OF+sb,c=M.floor(wx/K.st)-i0;let s=0;
for(let k=c-2;k<=c+2;k++){
if(k<0||k>=pk.length)continue;
const p=pk[k],t=M.abs(wx-p.x)/p.w;
if(t<1)s+=M.pow(p.h*M.pow(1-t,p.e),4);
}
ys.push(B-GY*.035-M.pow(s,.25)*(1+(vn(wx*.011+K.s)-.5)*.16+(vn(wx*.035+K.s*5)-.5)*.06));
}
const P=new Path2D(),Dk=new Path2D(),Lt=new Path2D(),Sn=new Path2D();
let rim=0,jp=0;
P.moveTo(-OF-fr,VH);
for(let j=0;j<n;j++){
const x=j*ST-OF-fr;
P.lineTo(x,ys[j]);
if(j<n-1&&ys[j+1]>ys[j]+.04){if(!rim){Lt.moveTo(x,ys[j]);rim=1}Lt.lineTo(x+ST,ys[j+1])}else rim=0;
}
P.lineTo((n-1)*ST-OF-fr,VH);P.closePath();
for(const p of pk){
const jc=M.round((p.x-sb+OF)/ST);
if(jc<4||jc>n-5)continue;
let jt=jc;
for(let j=jc-3;j<=jc+3;j++)if(ys[j]<ys[jt])jt=j;
if(jt==jc-3||jt==jc+3||!(ys[jt]<ys[jt-1]&&ys[jt]<=ys[jt+1]))continue;
const px=jt*ST-OF-fr,py=ys[jt],D=B-py,w=p.w;
let jl=jp;
for(let j=jp;j<=jt;j++)if(ys[j]>ys[jl])jl=j;
jp=jt;
Dk.moveTo(jl*ST-OF-fr,ys[jl]);
for(let j=jl+1;j<=jt;j++)Dk.lineTo(j*ST-OF-fr,ys[j]);
Dk.lineTo(px+(hs(p.i+K.s+31)-.4)*w*.1,py+D*.3);
Dk.lineTo(px+(hs(p.i+K.s+33)-.3)*w*.18,py+D*.62);
Dk.lineTo(px+(hs(p.i+K.s+35)-.2)*w*.26,B+GY*.03);
Dk.closePath();
if(p.h>GY*(K.h0+K.hv*.3)){
const cy=py+D*.27;
let a=jt,b=jt;
while(a>0&&ys[a-1]<cy)a--;
while(b<n-1&&ys[b+1]<cy)b++;
if(b-a>2){
const xa=a*ST-OF-fr,xb=b*ST-OF-fr,m=7;
Sn.moveTo(xa,ys[a]);
for(let j=a+1;j<=b;j++)Sn.lineTo(j*ST-OF-fr,ys[j]);
for(let k=1;k<=m;k++)Sn.lineTo(xb+(xa-xb)*k/m,cy+((k&1)*.05+hs(p.i+K.s+40+k)*.07)*D);
Sn.closePath();
}
}
}
g.fillStyle=S.a;g.fill(P);
g.fillStyle=K.sn;g.fill(Sn);
g.fillStyle=S.d;g.fill(Dk);
g.strokeStyle=K.lt;g.lineWidth=1.1;g.stroke(Lt);
if(S.f){g.fillStyle=S.f;g.fillRect(0,S.fy,VW,VH-S.fy)}else mist(B-GY*.12,GY*.16,ki?700:880,ki?5:3,0,ki?.4:.5);
});
}
const RL=[
{n:14,q:14,sp:330,sv:150,ln:7,lv:8,al:.08,lw:.7,sl:.14,ey:.72,o:1000},
{n:16,q:15,sp:430,sv:200,ln:10,lv:11,al:.12,lw:.85,sl:.18,ey:.86,o:2000},
{n:18,q:17,sp:520,sv:260,ln:14,lv:16,al:.16,lw:1,sl:.22,ey:1,o:0}
];
function rain(){
if(!RN)return;
const w=VW+120;
for(const R of RL){
const n=R.n+ST.gq*R.q,ey=GY*R.ey;
g.strokeStyle='rgba(196,200,238,'+R.al+')';g.lineWidth=R.lw;g.beginPath();
for(let i=0;i<n;i++){
const sp=R.sp+hs(i+R.o+840)*R.sv,ln=R.ln+hs(i+R.o+850)*R.lv,x=((hs(i+R.o+800)*w+T*sp*R.sl)%w+w)%w-60,y=((hs(i+R.o+820)*ey+T*sp)%ey+ey)%ey;
g.moveTo(x,y);g.lineTo(x+ln*R.sl,y+ln);
}
g.stroke();
}
}
