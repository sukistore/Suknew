function fxGr(){
const u=p.ut>0;
if(!u&&FXA.sa<=0)return;
const ec=AE[evl()].c;
g.save();g.translate(p.x,GY+2);g.scale(1,.22);g.globalCompositeOperation='lighter';g.lineCap='round';
if(u){
const ak=M.min(1,(UD-p.ut)*4)*M.min(1,p.ut*2.5);
g.rotate(T*1.2);
g.strokeStyle='rgba('+ec+','+.85*ak+')';g.lineWidth=5;
g.beginPath();g.arc(0,0,92,0,TAU);g.stroke();
g.lineWidth=3;g.setLineDash([16,12]);
g.beginPath();g.arc(0,0,66,0,TAU);g.stroke();
g.setLineDash([]);
g.strokeStyle='rgba(255,250,235,'+.6*ak+')';g.lineWidth=2.4;
g.beginPath();
for(let t=0;t<2;t++)for(let i=0;i<=3;i++){const a=(i%3)*TAU/3+t*PI/3-PI/2,x=M.cos(a)*88,y=M.sin(a)*88;if(i==0)g.moveTo(x,y);else g.lineTo(x,y)}
g.stroke();
}else{
const sk=FXA.sa/.5;
g.strokeStyle='rgba('+ec+','+M.min(1,sk*1.2)*.8+')';g.lineWidth=4;
g.beginPath();g.arc(0,0,30+(1-sk)*70,0,TAU);g.stroke();
g.lineWidth=2.4;
g.beginPath();g.arc(0,0,16+(1-sk)*42,0,TAU);g.stroke();
}
g.restore();
if(u&&!SPC&&evl()==4)fxSky();
if(u&&!SPC&&evl()==5)nSky();
}
function fxTop(){
const e=AE[evl()];
if(p.ut>0){
const ak=M.min(1,(UD-p.ut)*4)*M.min(1,p.ut*2.5);
gl(e.k,p.x,p.y-30,84+M.sin(T*12)*8,.55*ak);
for(let i=0;i<5;i++){const a=T*5+i*TAU/5;gl(e.k,p.x+M.cos(a)*40,p.y-30+M.sin(a)*40,11,.85*ak)}
}
if(FXA.sa>0)gl(e.k,p.x+p.f*26,p.y-45,56*(.5+FXA.sa),FXA.sa*1.8);
}

const DS=[],DD=7,SLP=[[2.6,.3,'230,40,60'],[1.2,.75,'255,96,108'],[.4,1,'255,250,244']];
let JC=1,JS=0,JK=1,JX=0,JY=0,JA=1;
const domK=()=>p.dn>0?M.min(1,(DD-p.dn)*2.2)*M.min(1,p.dn*1.6):0;
function domGo(){
p.dc=0;p.dn=DD;p.dsp=0;p.dht=0;p.dz=0;p.dr=0;p.ch=0;p.pc=0;p.cd=.5;p.rc=1;
DS.length=0;shake=12;FXA.fl=.6;FXA.fc='215,40,60';
ring(p.x,p.y-30,'215,60,80',100);ring(p.x,p.y-30,'255,255,255',60);ring(p.x,GY-4,'215,50,70',260);
sp(1,p.x,p.y-30,0,0,.6,200,'r');
}
function domSl(){
const b=M.random()<.2,r=M.random();
DS.push({x:rnd(cam-40,cam+VW+40),y:rnd(GY*.05,GY),an:r<.15?rnd(-.14,.14):(M.random()<.5?-1:1)*rnd(.35,1.25),ln:b?rnd(220,420):rnd(70,200),l:b?.42:.26,m:b?.42:.26,w:b?rnd(5,9):rnd(1.4,3)});
}
function domHit(){
const dm=M.max(1,gDm())*gUd(),ad=AE[evl()].d;
for(const e of E){
if(e.dd||e.x<cam-60||e.x>cam+VW+60)continue;
hurtE(e,9*ad*dm+e.mh*.004,M.random()<.5?1:-1);
if(DS.length<130)DS.push({x:e.x+rnd(-14,14),y:e.y-rnd(8,56)*e.sz,an:rnd(-1.3,1.3)+(M.random()<.5?0:PI),ln:rnd(60,130)*M.max(1,e.sz*.6),l:.22,m:.22,w:rnd(2,4)});
}
}
function domFin(){
const dm=M.max(1,gDm())*gUd(),ad=AE[evl()].d;
for(const e of E){
if(e.dd||e.x<cam-80||e.x>cam+VW+80)continue;
hurtE(e,40*ad*dm+e.mh*.16,M.random()<.5?1:-1);
sp(1,e.x,e.y-30*e.sz,0,0,.3,90,'r');
}
for(let i=0;i<7;i++)DS.push({x:cam+VW*(.1+i*.13)+rnd(-30,30),y:rnd(GY*.2,GY*.85),an:(i&1?-1:1)*rnd(.5,1.1),ln:rnd(300,560),l:.55,m:.55,w:rnd(9,15)});
shake=16;FXA.fl=.8;FXA.fc='255,150,160';
ring(p.x,p.y-30,'255,90,110',200);ring(p.x,GY-4,'255,255,255',320);
}
function domTk(dt){
p.dn-=dt;
const te=DD-p.dn;
p.inv=M.max(p.inv,.2);
for(const e of E){if(!e.dd&&!e.boss){e.wu=0;e.cd=M.max(e.cd,.5)}}
if(te<.9)shake=M.max(shake,5*(1-te/.9));
if(te>.9&&p.dn>.9){
p.dsp-=dt;
while(p.dsp<=0){p.dsp+=.05;if(DS.length<130){domSl();domSl()}}
p.dht-=dt;
if(p.dht<=0){p.dht+=.1;domHit()}
shake=M.max(shake,2.2);
}
if(!p.dz&&p.dn<=.9){p.dz=1;domFin()}
if(M.random()<dt*30)sp(5,rnd(cam,cam+VW),GY-2,rnd(-10,10),rnd(-120,-40),rnd(.6,1.2),1.8,'255,90,100',0,.6);
if(p.dn<=0){p.dn=0;ring(p.x,GY-4,'255,255,255',300)}
}
function domUp(dt){
const B=inp('m');
if(p.dl<0)p.dl=WV.k;
if(p.dn<=0)p.dc=M.min(1,p.dc+dt/120+M.max(0,WV.k-p.dl)*.008);
if(B&&!SPC&&!p.dw&&p.dn<=0&&p.dc>=1&&p.ut<=0&&!p.go&&!p.dead)domGo();
p.dl=WV.k;p.dw=B;
if(p.dn>0)domTk(dt);
for(let i=DS.length-1;i>=0;i--){DS[i].l-=dt;if(DS[i].l<=0)DS.splice(i,1)}
}
function jq(X,Y,Z){
const x=X*JC-Z*JS,z=X*JS+Z*JC,y=Y*.99+z*.14,d=z*.99-Y*.14,f=900/(900+d);
return[x*f*JK+JX,JY-y*f*JK,d];
}
function jf(L,pts,c,em){
const q=[],R=[];let dz=0;
for(const P of pts){
const x=P[0]*JC-P[2]*JS,z=P[0]*JS+P[2]*JC,y=P[1]*.99+z*.14,d=z*.99-P[1]*.14,f=900/(900+d);
R.push([x,P[1],z]);q.push(x*f*JK+JX,JY-y*f*JK);dz+=d;
}
const a=R[0],b=R[1],c2=R[2],ux=b[0]-a[0],uy=b[1]-a[1],uz=b[2]-a[2],vx=c2[0]-a[0],vy=c2[1]-a[1],vz=c2[2]-a[2],nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx,nl=M.hypot(nx,ny,nz)||1;
L.push({q,d:dz/pts.length,c,lm:em?1:.32+.68*M.abs((nx*-.4+ny*.62+nz*-.68)/nl)});
}
function jd(L,ed){
L.sort((a,b)=>b.d-a.d);
g.globalAlpha=JA;g.lineJoin='round';
for(const f of L){
const c=f.c,m=f.lm;
g.fillStyle='rgb('+(c[0]*m|0)+','+(c[1]*m|0)+','+(c[2]*m|0)+')';
g.beginPath();g.moveTo(f.q[0],f.q[1]);
for(let i=2;i<f.q.length;i+=2)g.lineTo(f.q[i],f.q[i+1]);
g.closePath();g.fill();
if(ed){g.strokeStyle=ed;g.lineWidth=.9;g.stroke()}
}
L.length=0;
}
function jbox(L,x0,x1,y0,y1,z0,z1,c){
jf(L,[[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0]],c);
jf(L,[[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]],c);
jf(L,[[x0,y0,z0],[x0,y0,z1],[x0,y1,z1],[x0,y1,z0]],c);
jf(L,[[x1,y0,z0],[x1,y0,z1],[x1,y1,z1],[x1,y1,z0]],c);
jf(L,[[x0,y1,z0],[x1,y1,z0],[x1,y1,z1],[x0,y1,z1]],c);
}
function jroof(L,y,rw,rd,tw,td,rh,lf,c,ct){
const y1=y+rh,A=[-rw,y+lf,-rd],B=[rw,y+lf,-rd],C=[rw,y+lf,rd],D=[-rw,y+lf,rd],a=[-tw,y1,-td],b=[tw,y1,-td],c2=[tw,y1,td],d=[-tw,y1,td];
jf(L,[A,a,b,B,[0,y,-rd]],c);
jf(L,[B,b,c2,C,[rw,y,0]],c);
jf(L,[C,c2,d,D,[0,y,rd]],c);
jf(L,[D,d,a,A,[-rw,y,0]],c);
jf(L,[a,b,c2,d],ct);
}
function jtap(L,C,W,N,c){
const n=C.length,Lf=[],Rg=[];
for(let i=0;i<n;i++){const o=N[i],w=W[i];Lf.push([C[i][0]-o[0]*w,C[i][1]-o[1]*w,C[i][2]-o[2]*w]);Rg.push([C[i][0]+o[0]*w,C[i][1]+o[1]*w,C[i][2]+o[2]*w])}
const pts=[Lf[0],Rg[0]];
for(let i=1;i<n;i++)pts.push(Rg[i]);
for(let i=n-2;i>=1;i--)pts.push(Lf[i]);
jf(L,pts,c);
}
function fxShrine(k,e){
const yw=M.sin(T*.5)*.5+.12;
JC=M.cos(yw);JS=M.sin(yw);JA=k;
JK=GY*.76/400;JX=VW*.5;JY=GY-8+(1-e)*440*JK;
const L=[],RB=[],RF=[],bone=[226,214,190],st='rgba(255,84,100,.55)',rc=[56,20,34],rt=[88,32,50];
for(let i=0;i<12;i++){
const a=i/12*TAU+.26,ca=M.cos(a),sa=M.sin(a),bx=250*ca,bz=175*sa,hh=150+(i%3)*34,C=[],W=[],N=[];
for(let j=0;j<5;j++){const s=j/4,r=1-.4*s*s;C.push([bx*r,14+hh*s,bz*r]);W.push(j<4?9*(1-s)+.3:0);N.push([-sa,0,ca])}
jtap(bx*JS+bz*JC<0?RF:RB,C,W,N,bone);
}
jd(RB,st);
jbox(L,-260,260,0,14,-190,190,[92,78,86]);jd(L,st);
jbox(L,-210,210,14,26,-150,150,[112,96,104]);jd(L,st);
jbox(L,-120,120,26,96,-90,90,[116,42,58]);jd(L,st);
jf(L,[[-34,26,-91],[34,26,-91],[34,80,-91],[-34,80,-91]],[8,1,4],1);jd(L,null);
for(let i=0;i<6;i++){const x=-34+i*11.34;jf(L,[[x,80,-92],[x+11.34,80,-92],[x+5.67,64,-92]],[236,228,206],1);jf(L,[[x,26,-92],[x+11.34,26,-92],[x+5.67,42,-92]],[236,228,206],1)}
jf(L,[[-88,64,-91.5],[-58,64,-91.5],[-58,76,-91.5],[-88,76,-91.5]],[255,60,84],1);
jf(L,[[58,64,-91.5],[88,64,-91.5],[88,76,-91.5],[58,76,-91.5]],[255,60,84],1);
jd(L,'rgba(60,0,10,.6)');
jroof(L,96,205,160,76,56,58,18,rc,rt);jd(L,st);
jbox(L,-62,62,154,208,-46,46,[120,46,60]);
jf(L,[[-20,170,-47.5],[20,170,-47.5],[20,190,-47.5],[-20,190,-47.5]],[255,70,90],1);jd(L,st);
jroof(L,208,132,98,46,32,46,15,rc,rt);jd(L,st);
jbox(L,-34,34,254,296,-26,26,[124,48,62]);
jf(L,[[-10,266,-27.5],[10,266,-27.5],[10,284,-27.5],[-10,284,-27.5]],[255,70,90],1);jd(L,st);
jroof(L,296,84,62,20,16,44,13,rc,rt);jd(L,st);
for(const sg of[-1,1]){
const C=[],W=[],N=[];
for(let j=0;j<6;j++){const s=j/5,dx=sg*50,dy=96*1.9*M.pow(s,.9),dl=M.hypot(dx,dy);C.push([sg*(12+50*s),340+96*M.pow(s,1.9),0]);W.push(8*(1-s));N.push([-dy/dl,dx/dl,0])}
jtap(L,C,W,N,bone);
}
jtap(L,[[0,340,0],[0,370,0],[0,420,0]],[7,4,0],[[1,0,0],[1,0,0],[1,0,0]],[255,96,110]);
jd(L,st);
for(const T2 of[[96,205,160,18],[208,132,98,15],[296,84,62,13]])for(const sx of[-1,1])for(const sz of[-1,1]){const q=jq(sx*T2[1],T2[0]+T2[3]+4,sz*T2[2]);gl('r',q[0],q[1],(22+T2[3])*JK*1.4,k*.8)}
const q=jq(0,54,-93);gl('r',q[0],q[1],110*JK,k*(.5+.2*M.sin(T*5)));
jd(RF,st);
}
