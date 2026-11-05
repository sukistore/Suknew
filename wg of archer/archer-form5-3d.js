const N3={yc:M.cos(.55),ys:M.sin(.55),pc:M.cos(.24),ps:M.sin(.24),f:1,tx:0,ty:0},NV=new Float64Array(40);
const n3c=v=>v>255?255:v<0?0:v|0;
const n3d=(x,y,z)=>(x*N3.ys+z*N3.yc)*N3.pc+y*N3.ps;
function n3p(i,x,y,z){
const X=x*N3.yc-z*N3.ys,Z=x*N3.ys+z*N3.yc,Y=y*N3.pc-Z*N3.ps,D=Z*N3.pc+y*N3.ps,k=1/(1-D*.0045),o=i*5;
NV[o]=X;NV[o+1]=Y;NV[o+2]=D;NV[o+3]=X*k;NV[o+4]=-Y*k;
}
function n3t(i,j,k,cx,cy,cz,c,al,ed){
const a=i*5,b=j*5,e=k*5;
const ux=NV[b]-NV[a],uy=NV[b+1]-NV[a+1],uz=NV[b+2]-NV[a+2],vx=NV[e]-NV[a],vy=NV[e+1]-NV[a+1],vz=NV[e+2]-NV[a+2];
let nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;
if(nx*((NV[a]+NV[b]+NV[e])/3-cx)+ny*((NV[a+1]+NV[b+1]+NV[e+1])/3-cy)+nz*((NV[a+2]+NV[b+2]+NV[e+2])/3-cz)<0){nx=-nx;ny=-ny;nz=-nz}
if(nz<=0)return;
const nl=M.hypot(nx,ny,nz)||1;nx/=nl;ny/=nl;nz/=nl;
const df=M.max(0,-.42*N3.f*nx+.72*ny+.55*nz),sp=M.pow(df,8)*.55,rm=M.pow(1-nz,2)*.4,li=.5+.5*df+rm*.3;
g.fillStyle='rgba('+n3c(c[0]*li*.92+(255-c[0])*sp)+','+n3c(c[1]*(.2+.8*li)+(255-c[1])*sp)+','+n3c(c[2]*(.4+.6*li)+(255-c[2])*sp)+','+al+')';
g.beginPath();g.moveTo(NV[a+3],NV[a+4]);g.lineTo(NV[b+3],NV[b+4]);g.lineTo(NV[e+3],NV[e+4]);g.closePath();g.fill();
if(ed){g.strokeStyle='rgba(235,245,255,.38)';g.lineWidth=.5;g.stroke()}
}
function n3B(ax,ay,az,bx,by,bz,ux,uy,uz,w,th,t,c,al,ed){
const dx=bx-ax,dy=by-ay,dz=bz-az,dl=M.hypot(dx,dy,dz)||1,nx=dx/dl,ny=dy/dl,nz=dz/dl,pu=ux*nx+uy*ny+uz*nz;
ux-=nx*pu;uy-=ny*pu;uz-=nz*pu;
const ul=M.hypot(ux,uy,uz)||1;ux/=ul;uy/=ul;uz/=ul;
const vx=ny*uz-nz*uy,vy=nz*ux-nx*uz,vz=nx*uy-ny*ux,mx=ax+dx*t,my=ay+dy*t,mz=az+dz*t;
n3p(0,ax,ay,az);n3p(1,mx+ux*w,my+uy*w,mz+uz*w);n3p(2,mx+vx*th,my+vy*th,mz+vz*th);n3p(3,mx-ux*w,my-uy*w,mz-uz*w);n3p(4,mx-vx*th,my-vy*th,mz-vz*th);n3p(5,bx,by,bz);n3p(6,mx,my,mz);
const cx=NV[30],cy=NV[31],cz=NV[32];
N3.tx=NV[28];N3.ty=NV[29];
for(let k=0;k<4;k++){const j=1+k,l=1+(k+1)%4;n3t(0,j,l,cx,cy,cz,c,al,ed);n3t(5,l,j,cx,cy,cz,c,al,ed)}
}
function n3R(R,tx,tz,sp,al,hf,wd){
const N=44,ct=M.cos(tx),st=M.sin(tx),cz=M.cos(tz),sz=M.sin(tz);
let px=0,py=0,pd=0;
for(let j=0;j<=N;j++){
const a=sp+j/N*TAU,x=M.cos(a)*R,z=M.sin(a)*R,z1=z*ct,y1=z*st,x2=x*cz-y1*sz,y2=x*sz+y1*cz;
n3p(0,x2,y2,z1);
const sx=NV[3],sy=NV[4],d=NV[2];
if(j){
const dm=(d+pd)*.5,k=dm/R*.5+.5;
if((dm>=0)==!!hf){g.globalAlpha=M.max(0,al*(.25+.75*k));g.lineWidth=wd*(.55+.55*k);g.beginPath();g.moveTo(px,py);g.lineTo(sx,sy);g.stroke()}
}
px=sx;py=sy;pd=d;
}
}
function n5F(b,dk){
n3p(0,b.rx,b.ry,b.rz);n3p(1,b.tx,b.ty,b.tz);
const mx=(b.rx+b.tx)*.5,my=(b.ry+b.ty)*.5,mz=(b.rz+b.tz)*.5;
n3p(2,mx+b.ux*b.w,my+b.uy*b.w,mz+b.uz*b.w);n3p(3,mx-b.ux*b.w,my-b.uy*b.w,mz-b.uz*b.w);
const x0=NV[3],y0=NV[4],x1=NV[8],y1=NV[9],lx=(NV[13]-NV[18])*.5,ly=(NV[14]-NV[19])*.5,ax=x1-x0,ay=y1-y0,e=b.rd?.97:.78,v=b.rd?1.15:.85,c=b.c1,d=b.c2;
b.sx=x1;b.sy=y1;
const gr=g.createLinearGradient(x0,y0,x1,y1);
gr.addColorStop(0,'rgb('+n3c(c[0]*dk)+','+n3c(c[1]*dk)+','+n3c(c[2]*dk)+')');
gr.addColorStop(1,'rgb('+n3c(d[0]*dk)+','+n3c(d[1]*dk)+','+n3c(d[2]*dk)+')');
g.beginPath();g.moveTo(x0,y0);
g.bezierCurveTo(x0+ax*.28+lx*1.25,y0+ay*.28+ly*1.25,x0+ax*e+lx*v,y0+ay*e+ly*v,x1,y1);
g.bezierCurveTo(x0+ax*e-lx*v,y0+ay*e-ly*v,x0+ax*.28-lx*1.25,y0+ay*.28-ly*1.25,x0,y0);
g.closePath();g.fillStyle=gr;g.fill();
g.strokeStyle='rgba(24,56,128,.55)';g.lineWidth=.55;g.stroke();
const rl=b.rd?.62:.95;
g.strokeStyle='rgba(246,251,255,.7)';g.lineWidth=.6;
g.beginPath();g.moveTo(x0,y0);g.lineTo(x0+ax*rl,y0+ay*rl);g.stroke();
if(b.ly<1){
g.strokeStyle='rgba(235,245,255,.26)';g.lineWidth=.5;g.beginPath();
for(const s of[-.5,.5]){g.moveTo(x0+ax*.2+lx*s*.6,y0+ay*.2+ly*s*.6);g.lineTo(x0+ax*.88+lx*s*.38,y0+ay*.88+ly*s*.38)}
g.stroke();
}
}
