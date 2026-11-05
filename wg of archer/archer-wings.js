const WGC=M.cos(.62),WGS=M.sin(.62),WPC=M.cos(.2),WPS=M.sin(.2),WO=[0,0,0],WT=[0,0,0],WB=new Float32Array(14),WTP=new Float32Array(20),WU=[.1,.4,.72,1],WI=[0,1,2,3,2,1,0],WSG=[1,1,1,1,-1,-1,-1];
function wgPj(X,Y,Z){
const x=X*WGC-Z*WGS,z=X*WGS+Z*WGC,y=Y*WPC-z*WPS,d=z*WPC+Y*WPS,k=1/(1-d*.0045);
WO[0]=x*k;WO[1]=-y*k;WO[2]=d;
}
function wgF(rx,ry,rz,dx,dy,dz,tx,ty,tz,L,wd,fi,st,gw,rc){
for(let j=0;j<7;j++){
const u=WU[WI[j]],o=L*.1*u*u+WSG[j]*wd*M.sin(PI*M.min(1,u*.95+.08)),b=L*u;
wgPj(rx+dx*b+tx*o,ry+dy*b+ty*o-L*.08*u*u,rz+dz*b+tz*o);
WB[j*2]=WO[0];WB[j*2+1]=WO[1];
if(j==3){WT[0]=WO[0];WT[1]=WO[1];WT[2]=WO[2]}
}
g.beginPath();g.moveTo(WB[0],WB[1]);
for(let j=1;j<7;j++)g.lineTo(WB[j*2],WB[j*2+1]);
g.closePath();
if(fi){g.fillStyle=fi;g.fill()}
if(st){g.strokeStyle=st;g.lineWidth=.8;g.stroke()}
if(gw){g.globalCompositeOperation='lighter';g.globalAlpha=PFX;g.fillStyle=gw;g.fill();g.globalCompositeOperation='source-over';g.globalAlpha=1}
if(rc){g.strokeStyle=rc;g.lineWidth=.7;g.beginPath();g.moveTo((WB[0]+WB[12])*.5,(WB[1]+WB[13])*.5);g.lineTo(WT[0],WT[1]);g.stroke()}
}
function wgLy(sg,fp,q,wf,nr,n,ls,md,gk){
const th0=1-q*.2+M.sin(fp)*(.12+.5*q)+wf*.25,span=.55+.75*q+wf*.12,Lm=(18+30*q)*(1+wf*.18)*ls,s0=.12+(md==1?span/(n*2+2):0);
for(let i=n-1;i>=0;i--){
const t=n>1?i/(n-1):0,thi=th0+.22*q*M.sin(fp-t*1.1-.4),sT=M.sin(thi),cT=M.cos(thi),s=s0+span*t*(md==1?.94:1),ss=M.sin(s),cs=M.cos(s);
const dx=-ss,dy=sT*cs,dz=sg*cT*cs,tx=-cs,ty=-sT*ss,tz=-sg*cT*ss;
const L=Lm*(1-.42*M.pow(t,1.3)),wd=L*.115+1.2;
const lit=M.abs(-sg*cT*.78+sT*.52),fc=M.abs(-sg*cT*.2+sT*WGC),br=.5+.3*lit+.35*fc;
const h=42+t*22+14*M.sin(T*2.6+t*5+nr*1.7),Lg=(nr?1:.84)*(48+30*M.min(1.1,br));
if(md==0){
wgF(0,0,sg*3.2,dx,dy,dz,tx,ty,tz,L,wd,'hsl('+h+',88%,'+Lg+'%)','rgba(255,244,200,'+(.45+.3*br)+')','hsla('+(h+22+wf*40)+',100%,62%,'+(.12+wf*.2)+')','rgba(255,255,236,.5)');
WTP[i*2]=WT[0];WTP[i*2+1]=WT[1];
}else if(md==1){
wgF(0,0,sg*3.2,dx,dy,dz,tx,ty,tz,L,wd*.9,'hsl('+(h+6)+',70%,'+(Lg+10)+'%)','rgba(255,248,215,.55)',null,null);
}else{
wgF(0,0,sg*3.2,dx,dy,dz,tx,ty,tz,L,wd,null,null,'hsla('+((T*170+t*80+gk*50)%360)+',100%,64%,'+(.15/gk)+')',null);
}
}
}
function wgWing(sg,fp,q,wf,nr){
const n=9;
g.save();g.translate(-4,-17);g.lineCap='round';g.lineJoin='round';
for(let k=2;k>=1;k--)wgLy(sg,fp-k*(.2+.2*q),q,wf,nr,n,1.02,2,k);
wgLy(sg,fp,q,wf,nr,n,1,0,1);
wgLy(sg,fp,q,wf,nr,7,.56,1,1);
wgPj(0,0,sg*3.2);
const rx=WO[0],ry=WO[1];
g.globalCompositeOperation='lighter';g.globalAlpha=PFX;
g.fillStyle='rgba(255,226,140,'+(.07+wf*.12)+')';
g.beginPath();g.moveTo(rx,ry);
for(let i=0;i<n;i++)g.lineTo(WTP[i*2],WTP[i*2+1]);
g.closePath();g.fill();
g.strokeStyle='rgba(255,236,170,'+(.1+wf*.15)+')';g.lineWidth=1.1;
g.beginPath();
for(let i=0;i<n;i+=2){g.moveTo(rx,ry);g.lineTo(rx+(WTP[i*2]-rx)*1.9,ry+(WTP[i*2+1]-ry)*1.9)}
g.stroke();
g.globalCompositeOperation='source-over';g.globalAlpha=1;
const th=1-q*.2+M.sin(fp)*(.12+.5*q)+wf*.25,sT=M.sin(th),cT=M.cos(th),Lb=(18+30*q)*(1+wf*.18)*1.04;
let wx=0,wy=0,bx=0,by=0;
g.beginPath();
for(let k=0;k<=4;k++){
const u=k/4;
wgPj(-Lb*.1*M.sin(PI*u),sT*Lb*u-Lb*.05*u*u,sg*(3.2+cT*Lb*u));
if(k)g.lineTo(WO[0],WO[1]);else g.moveTo(WO[0],WO[1]);
if(k==2){wx=WO[0];wy=WO[1]}
if(k==4){bx=WO[0];by=WO[1]}
}
g.strokeStyle='#8a6a2c';g.lineWidth=3.6;g.stroke();
g.strokeStyle='#ffe9a8';g.lineWidth=1.7;g.stroke();
g.globalCompositeOperation='lighter';g.globalAlpha=PFX;
g.strokeStyle='rgba(255,236,170,.25)';g.lineWidth=6;g.stroke();
if(q>.5){
const sd=M.floor(T*24)*7.1+nr*13;
g.strokeStyle='rgba(255,252,225,.85)';g.lineWidth=.9;
g.beginPath();zig(rx,ry,bx,by,3.2,sd);g.stroke();
g.strokeStyle='rgba(255,236,170,.6)';g.lineWidth=.8;
g.beginPath();
for(let i=0;i<n-1;i+=2)zig(WTP[i*2],WTP[i*2+1],WTP[i*2+2],WTP[i*2+3],2.4,sd+i*5);
g.stroke();
}
g.strokeStyle='rgba(255,252,230,.8)';g.lineWidth=1;
const ar=T*2.4+nr,sl2=7+wf*8+M.sin(T*9+nr*2)*2;
g.beginPath();
g.moveTo(bx-M.cos(ar)*sl2,by-M.sin(ar)*sl2);g.lineTo(bx+M.cos(ar)*sl2,by+M.sin(ar)*sl2);
g.moveTo(bx-M.sin(ar)*sl2,by+M.cos(ar)*sl2);g.lineTo(bx+M.sin(ar)*sl2,by-M.cos(ar)*sl2);
g.stroke();
g.globalCompositeOperation='source-over';g.globalAlpha=1;
for(let i=0;i<n;i+=2)gl('p',WTP[i*2],WTP[i*2+1],9+(i==0?9:0)+wf*10,.4+wf*.3);
gl('w',bx,by,16+wf*14,.55+.2*M.sin(T*6+nr));
gl('p',wx,wy,13,.4);
gl('a',rx,ry,18+wf*10,.3);
g.restore();
}
function evWg(sn){
const cx=-7,cy=-27,wf=p.wf||0;
gl('p',cx,cy,70+M.sin(T*3)*6+wf*28,.18+wf*.22);
gl('a',cx,cy,44,.14);
g.save();g.translate(cx,cy);g.globalCompositeOperation='lighter';g.globalAlpha=PFX;g.lineCap='round';g.lineJoin='round';
for(let r=0;r<3;r++){
const R=24+r*5.5,al=T*(1.1+r*.55)*(r&1?-1:1),be=T*(.7+r*.4)+r*2.1,ca=M.cos(al),sa=M.sin(al),cb=M.cos(be),sb=M.sin(be);
g.strokeStyle='rgba('+(r==1?'255,255,240':'255,222,140')+','+(.5-r*.1)+')';g.lineWidth=1.5-r*.25;
g.beginPath();
for(let j=0;j<=28;j++){
const a=j/28*TAU,x=M.cos(a)*R,y0=M.sin(a)*R,y1=y0*ca,z0=y0*sa,x2=x*cb+z0*sb,z2=-x*sb+z0*cb;
wgPj(x2,y1,z2);
if(j)g.lineTo(WO[0],WO[1]);else g.moveTo(WO[0],WO[1]);
}
g.stroke();
const oa=T*(2+r),ox=M.cos(oa)*R,oy0=M.sin(oa)*R,oy1=oy0*ca,oz0=oy0*sa;
wgPj(ox*cb+oz0*sb,oy1,-ox*sb+oz0*cb);
g.fillStyle='rgba(255,250,225,.35)';g.beginPath();g.arc(WO[0],WO[1],3.6,0,TAU);g.fill();
g.fillStyle='rgba(255,255,245,.95)';g.beginPath();g.arc(WO[0],WO[1],1.6,0,TAU);g.fill();
}
g.restore();
}
const WSC=new Map(),WSB={g:[-113,-121,44,13],b:[-120,-101,24,4]};let WSR=0;
function wsp(id,fp,q,wf,fn){
if(slA){fn(fp,q,wf);return}
const rs=M.round(M.min(1.25,dd*sc)*4)/4;
if(rs!=WSR){WSC.clear();WSR=rs}
const fb=M.floor((((fp%TAU)+TAU)%TAU)/TAU*20)%20,qb=M.round(M.min(1,q)*4),wb=wf<.1?0:wf<.6?1:2,B=WSB[id],ky=id+fb+'|'+qb+'|'+wb+'|'+p.f+'|'+PFX;
let c=WSC.get(ky);
if(!c){
if(WSC.size>=140)WSC.clear();
c=document.createElement('canvas');c.width=M.ceil((B[2]-B[0])*rs);c.height=M.ceil((B[3]-B[1])*rs);
const o=g;g=c.getContext('2d');g.setTransform(rs,0,0,rs,-B[0]*rs,-B[1]*rs);WNG=1;
try{fn(fb/20*TAU,qb/4,[0,.5,1][wb])}catch(x){}
WNG=0;g=o;WSC.set(ky,c);
}
g.drawImage(c,B[0],B[1],B[2]-B[0],B[3]-B[1]);
}
function evWn(q,fp){
wsp('g',fp,q,p.wf||0,(a,b,c)=>{wgWing(-1,a,b,c,0);wgWing(1,a,b,c,1)});
}
