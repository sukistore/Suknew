function ev5Bl(L,sg,q,wf,wp){
const Lm=(22+34*q)*(1+wf*.16),Lb=Lm*.82,fb=.6-.5*q,A=.08+.34*q+wf*.06;
const fr=s=>fb+A*M.sin(wp-.65*s);
const rt=(x,y,z,f)=>{const c=M.cos(f),n=M.sin(f);return[x,y*c+z*n,sg*(3.2+(-y*n+z*c))]};
const W0=[-.08*Lb,.56*Lb,.36*Lb],H0=[-.34*Lb,.88*Lb,.74*Lb];
const S=rt(0,0,0,fr(0)),W=rt(W0[0],W0[1],W0[2],fr(.5)),H=rt(H0[0],H0[1],H0[2],fr(1));
const nm=v=>{const l=M.hypot(v[0],v[1],v[2])||1;return[v[0]/l,v[1]/l,v[2]/l]};
const bs=a=>{a=nm(a);const t0=[-.72,-.58,.22],k=a[0]*t0[0]+a[1]*t0[1]+a[2]*t0[2];return[a,nm([t0[0]-a[0]*k,t0[1]-a[1]*k,t0[2]-a[2]*k])]};
const B1=bs(W0),B2=bs([H0[0]-W0[0],H0[1]-W0[1],H0[2]-W0[2]]);
const ps=(ly,s,Lf,w,rd,ph,c1,c2)=>{
const sc=s<.5,u=sc?s/.5:(s-.5)/.5,B=sc?B1:B2,P0=sc?S:W,P1=sc?W:H,f=fr(s),c=M.cos(f),n=M.sin(f),co=M.cos(ph+.06*M.sin(T*2.3+s*6+ly*1.3)),si=M.sin(ph+.06*M.sin(T*2.3+s*6+ly*1.3)),a=B[0],t=B[1];
const dx=t[0]*co+a[0]*si,dy=t[1]*co+a[1]*si,dz=t[2]*co+a[2]*si;
const ex=dx,ey=dy*c+dz*n,ez=sg*(-dy*n+dz*c);
let ux=a[0],uy=a[1]*c+a[2]*n,uz=sg*(-a[1]*n+a[2]*c);
const pu=ux*ex+uy*ey+uz*ez;ux-=ex*pu;uy-=ey*pu;uz-=ez*pu;
const ul=M.hypot(ux,uy,uz)||1;
const rx=lr(P0[0],P1[0],u),ry=lr(P0[1],P1[1],u),rz=lr(P0[2],P1[2],u);
L.push({rx,ry,rz,tx:rx+ex*Lf,ty:ry+ey*Lf,tz:rz+ez*Lf,ux:ux/ul,uy:uy/ul,uz:uz/ul,w,rd,c1,c2,ly,s});
};
const FL=[];
for(let i=0;i<7;i++)FL.push([.56+.44*i/6,Lm*(.6+.4*M.sin(PI*(i+.9)/7.9)),.1+.62*i/6]);
for(let j=0;j<7;j++)FL.push([.06+.44*j/6,Lm*(.5+.24*j/6),-.3+.3*j/6]);
for(const f of FL){
const sc=f[0]<.5,c1=sc?[58,104,200]:[70,122,218],c2=sc?[192,222,255]:[226,241,255];
ps(0,f[0],f[1],f[1]*(sc?.115:.095)+.7,0,f[2],c1,c2);
ps(1,f[0],f[1]*.44,f[1]*.44*.38+.7,1,f[2],[96,148,232],[212,233,255]);
}
for(let i=0;i<6;i++)for(const o of[0,7]){
const a=FL[o+i],b=FL[o+i+1];
ps(2,(a[0]+b[0])*.5,Lm*.27,Lm*.27*.34+.6,1,(a[2]+b[2])*.5,[128,174,240],[230,243,255]);
}
for(let k=0;k<8;k++){
const s=.04+.92*k/7;
ps(3,s,Lm*.15,Lm*.15*.32+.5,1,s<.5?0:.4,[160,198,246],[240,248,255]);
}
ps(4,.52,Lm*.2,Lm*.2*.28+.5,0,1,[198,224,255],[255,255,255]);
ps(4,.56,Lm*.16,Lm*.16*.28+.5,0,1.18,[198,224,255],[255,255,255]);
return[S,W,H];
}
function ev5W0(){
const q=p.wa,wf=p.wf||0;
N3.f=p.f;
g.save();g.translate(-4,-17);
gl('s',2,-6,52+M.sin(T*2.4)*4+wf*26,.14+wf*.2);
for(const sg of[-1,1]){
const L=[],J=ev5Bl(L,sg,q,wf,p.wp),dk=sg<0?.8:1;
L.sort((a,b)=>a.ly-b.ly||a.s-b.s);
for(const b of L)n5F(b,dk);
for(let i=0;i<3;i++)n3p(i,J[i][0],J[i][1],J[i][2]);
const sx=NV[3],sy=NV[4],wx=NV[8],wy=NV[9],hx=NV[13],hy=NV[14];
g.lineCap='round';g.lineJoin='round';
g.beginPath();g.moveTo(sx,sy);g.lineTo(wx,wy);g.lineTo(hx,hy);
g.strokeStyle='rgba(22,50,112,'+dk+')';g.lineWidth=3.4;g.stroke();
g.strokeStyle='rgb('+n3c(215*dk)+','+n3c(236*dk)+','+n3c(255*dk)+')';g.lineWidth=1.6;g.stroke();
const F=L.filter(b=>b.ly==0).sort((a,b)=>a.s-b.s);
g.globalCompositeOperation='lighter';g.globalAlpha=PFX;
g.strokeStyle='rgba(170,215,255,.22)';g.lineWidth=6;g.beginPath();g.moveTo(sx,sy);g.lineTo(wx,wy);g.lineTo(hx,hy);g.stroke();
g.fillStyle='rgba(190,225,255,'+(.07+wf*.1)+')';
g.beginPath();g.moveTo(sx,sy);
for(const b of F)g.lineTo(b.sx,b.sy);
g.closePath();g.fill();
for(const b of F)if(b.s>.5)gl('s',b.sx,b.sy,9+wf*8,.5+wf*.3+.4*M.max(0,M.sin(T*3.2-b.s*8)));
const sl=6+wf*7+M.sin(T*8+sg*2)*1.6;
g.strokeStyle='rgba(235,247,255,.85)';g.lineWidth=.9;
g.beginPath();g.moveTo(wx-sl,wy);g.lineTo(wx+sl,wy);g.moveTo(wx,wy-sl);g.lineTo(wx,wy+sl);g.stroke();
gl('w',wx,wy,12+wf*8,.45);
g.globalCompositeOperation='source-over';g.globalAlpha=1;
}
g.restore();
}
function ev5W(){
wsp('b',p.wp,p.wa,p.wf||0,(a,b,c)=>{const x=p.wa,y=p.wf,z=p.wp;p.wa=b;p.wf=c;p.wp=a;try{ev5W0()}finally{p.wa=x;p.wf=y;p.wp=z}});
}
let H5C=0;
function h5S(){
if(H5C)return H5C;
const rs=2,c=document.createElement('canvas');c.width=c.height=52*rs;
const o=g;g=c.getContext('2d');g.setTransform(rs,0,0,rs,26*rs,26*rs);
const cx=0,cy=0,pu=1;
g.lineJoin='round';g.lineCap='round';
g.lineWidth=1.1;
for(let k=0;k<13;k++){
const a=-PI*1.04+PI*1.08*k/12,r1=k%2?19:22.5;
g.strokeStyle='rgba(205,232,255,'+.5*pu*(k%2?.6:1)+')';
g.beginPath();g.moveTo(cx+M.cos(a)*15.5,cy+M.sin(a)*14.3);g.lineTo(cx+M.cos(a)*r1,cy+M.sin(a)*r1*.92);g.stroke();
}
g.strokeStyle='rgba(215,238,255,'+.7*pu+')';g.lineWidth=1.3;
g.beginPath();g.arc(cx,cy,14.2,-PI*1.08,.08);g.stroke();
g.strokeStyle='rgba(150,200,255,.35)';g.lineWidth=3.4;g.stroke();
g=o;
return H5C=c;
}
function ev5H(hx,hh){
const pu=.85+.15*M.sin(T*3),cx=hx-1,cy=hh-1;
g.save();g.lineJoin='round';g.lineCap='round';
g.globalCompositeOperation='lighter';g.globalAlpha=PFX;
{const ga=g.globalAlpha;g.globalAlpha=ga*pu;g.drawImage(h5S(),cx-26,cy-26,52,52);g.globalAlpha=ga}
for(let k=0;k<2;k++){
const a=-PI*(.04+.96*((T*.25+k*.5)%1));
g.fillStyle='rgba(255,255,255,.95)';g.beginPath();g.arc(cx+M.cos(a)*14.2,cy+M.sin(a)*14.2,1.2,0,TAU);g.fill();
}
gl('s',cx,cy+16,28+M.sin(T*2.4)*3,.2*pu);
g.globalCompositeOperation='source-over';g.globalAlpha=1;
g.translate(hx-1,hh-8.2);
const yb=x=>8.2-M.sqrt(74-x*x)-.5,SP=[[-7,4.2],[-3.6,7.2],[0,11.4],[3.6,7.2],[7,4.2]];
const gr=g.createLinearGradient(0,-12,0,3);
gr.addColorStop(0,'#ffffff');gr.addColorStop(.5,'#cfe6ff');gr.addColorStop(1,'#6ea6ee');
g.beginPath();g.moveTo(-8.8,yb(-7.6)+.8);
for(const s of SP){const b=yb(s[0]);g.lineTo(s[0]-1.8,b-.6);g.lineTo(s[0],b-s[1]);g.lineTo(s[0]+1.8,b-.6)}
g.lineTo(8.8,yb(7.6)+.8);g.closePath();
g.fillStyle=gr;g.fill();g.strokeStyle='#3a6fb8';g.lineWidth=.7;g.stroke();
g.beginPath();
for(let x=-7.8;x<=7.9;x+=1.3){const y=yb(x)+.7;if(x<-7.7)g.moveTo(x,y);else g.lineTo(x,y)}
g.strokeStyle='#e8f4ff';g.lineWidth=1.6;g.stroke();
g.fillStyle='#ffffff';g.beginPath();g.arc(0,yb(0)-1.8,1.3,0,TAU);g.fill();
gl('s',0,yb(0)-1.8,9,.5*pu);
g.restore();
}
