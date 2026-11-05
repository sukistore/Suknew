function evBw(tx,bl,bc,v){
const N=16,A=[],B=[],C=[],bw=PV.bow[v],ed='rgba(6,8,16,.55)';
const at=t=>{
const u=1-t,x=tx*(u*u+t*t)+2*bc*t*u,y=bl*(2*t-1),dx=2*(2*t-1)*(tx-bc),dy=2*bl,dl=M.hypot(dx,dy)||1;
return[x,y,dy/dl,-dx/dl,(1+v*.1+(2.2+v*.15)*M.pow(M.sin(PI*t),.8))*.5];
};
for(let i=0;i<=N;i++){const q=at(i/N);A.push([q[0]-q[2]*q[4],q[1]-q[3]*q[4]]);B.push([q[0]+q[2]*q[4],q[1]+q[3]*q[4]]);C.push([q[0]+q[2]*q[4]*.45,q[1]+q[3]*q[4]*.45])}
const pe=(t,len,col,lw)=>{const q=at(t),w=q[4]+len;g.strokeStyle=col;g.lineWidth=lw;g.beginPath();g.moveTo(q[0]-q[2]*w,q[1]-q[3]*w);g.lineTo(q[0]+q[2]*w,q[1]+q[3]*w);g.stroke()};
g.lineCap='round';g.lineJoin='round';
if(v>=2){
for(let s=-1;s<=1;s+=2){
g.strokeStyle=ed;g.lineWidth=3.6;
g.beginPath();g.moveTo(tx,s*bl);g.quadraticCurveTo(tx+1,s*(bl+2.6),tx+4.5,s*(bl+3.6));g.stroke();
g.strokeStyle=bw;g.lineWidth=2.2;g.stroke();
}
}
g.beginPath();g.moveTo(A[0][0],A[0][1]);
for(let i=1;i<=N;i++)g.lineTo(A[i][0],A[i][1]);
for(let i=N;i>=0;i--)g.lineTo(B[i][0],B[i][1]);
g.closePath();g.fillStyle=bw;g.fill();g.strokeStyle=ed;g.lineWidth=.7;g.stroke();
g.strokeStyle='rgba(6,8,16,.3)';g.lineWidth=.9;g.beginPath();g.moveTo(A[0][0],A[0][1]);
for(let i=1;i<=N;i++)g.lineTo(A[i][0],A[i][1]);
g.stroke();
g.strokeStyle='rgba(255,255,255,.32)';g.lineWidth=.6;g.beginPath();g.moveTo(C[1][0],C[1][1]);
for(let i=2;i<N;i++)g.lineTo(C[i][0],C[i][1]);
g.stroke();
if(v==0){
for(const t of[.14,.86])pe(t,.3,'#3d2a1e',1.6);
for(const t of[.28,.38,.62,.72])pe(t,-.3,'rgba(60,40,24,.45)',.5);
}else{
for(const t of[.18,.82])pe(t,.5,PV.bk[v],1.5);
}
if(v>=3){
g.save();g.globalCompositeOperation='lighter';
g.globalAlpha=.7+.3*M.sin(T*4);g.strokeStyle=PV.tr[v];g.lineWidth=1.2;
g.beginPath();g.moveTo(C[2][0],C[2][1]);
for(let i=3;i<N-1;i++)g.lineTo(C[i][0],C[i][1]);
g.stroke();
g.restore();
}
for(let s=-1;s<=1;s+=2){
const kx=v>=2?tx+4.5:tx,ky=v>=2?s*(bl+3.6):s*bl;
if(v==4){
for(let k=0;k<3;k++){
const q=at(s<0?.1+k*.12:.9-k*.12),bx=q[0]+q[2]*q[4],by=q[1]+q[3]*q[4],ln=3.8-k*.6;
poly([bx,by-s*1.2,bx+q[2]*ln,by+q[3]*ln+s*2.8,bx,by+s*3.4],PV.bk[v],ed,.45);
}
}
if(v==3)poly([kx-1.2,ky,kx+.6,ky+s*5.5,kx+2.2,ky],PV.pd[v],ed,.5);
if(v==5){
poly([kx-1.4,ky,kx,ky+s*6.5,kx+1.4,ky,kx,ky-s],'#e4f3ff',ed,.5);
poly([kx+1.2,ky,kx+3.4,ky+s*3.6,kx+2.8,ky-s*.6],'#bfe0fa',ed,.4);
}
if(v>=1){g.fillStyle=PV.bk[v];g.strokeStyle=ed;g.lineWidth=.5;g.beginPath();g.arc(kx,ky,1.2+v*.12,0,TAU);g.fill();g.stroke()}
if(v==2)gl('f',kx,ky,7,.4+.15*M.sin(T*5+s));
if(v==3)gl('e',kx,ky,7,.35);
if(v==5)gl('s',kx,ky+s*3,8,.4);
}
const gx=at(.5)[0];
g.fillStyle=v?PV.arm2[v]:'#3a2a1e';g.strokeStyle=ed;g.lineWidth=.6;
g.beginPath();g.rect(gx-2.4,-4.8,4.8,9.6);g.fill();g.stroke();
g.strokeStyle='rgba(255,255,255,.22)';g.lineWidth=.5;
g.beginPath();
for(let k=-2;k<=2;k++){g.moveTo(gx-2.4,k*1.8-.6);g.lineTo(gx+2.4,k*1.8+.6)}
g.stroke();
if(v>0){g.strokeStyle=PV.bk[v];g.lineWidth=1;g.beginPath();g.moveTo(gx-2.6,-4.8);g.lineTo(gx+2.6,-4.8);g.moveTo(gx-2.6,4.8);g.lineTo(gx+2.6,4.8);g.stroke()}
if(v>=2){
ov(gx,0,3+v*.3,4.2+v*.35,PV.rm[v]);
ov(gx,0,1.2+v*.2,2.2+v*.25,PV.bk[v]);
}
}
