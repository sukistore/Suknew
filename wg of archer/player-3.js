function upd(dt){
DPJ.el.classList.toggle('nw',!wgT());
const L=inp('l'),R=inp('r'),J=inp('j'),F=inp('f')&&!p.go,S=inp('s')&&!p.go,Q=inp('q'),U=inp('u'),V=inp('v'),Mk=inp('m'),dir=(R||L)&&TT.a&&!KM.l.some(c=>K[c])&&!KM.r.some(c=>K[c])?TT.a:(R?1:0)-(L?1:0);
p.cd-=dt;
p.kc=M.max(0,p.kc-dt);
p.gc=M.max(0,p.gc-dt);
if(p.ut<=0)p.uc=M.min(1,p.uc+dt*(SPC?1+.1*xzB.m:1)/(SPC?20:90));
if(Q&&!p.wq&&p.kc<=0&&!(SPC&&p.s3>=0))skill();
if(U&&!p.we&&p.uc>=1&&p.ut<=0)ult();
if(p.vt==6&&!SPC){if(V&&!p.gp)alSk2()}else if(V&&!p.gp&&p.gc<=0&&p.go<=0)gw();
if(SPC&&Mk&&!p.wm)spSk3();
p.wm=Mk;
p.wq=Q;p.we=U;p.gp=V;
domUp(dt);if(p.ut>0)ulUp(dt);
if(p.go>0)gwUp(dt);
if(S&&!p.ws){
p.sf=1;ring(p.x+p.f*18,p.y-30,'150,195,225',30);
for(let i=0;i<7;i++){const a=rnd(-1,1);sp(3,p.x+p.f*30,p.y-30+a*14,p.f*rnd(40,140),a*90,rnd(.25,.45),1.6,'165,205,230',200,2)}
}
if(SPC){p.dr=0;p.ch=0;if(F&&!p.sF&&!S&&p.cd<=0&&p.at<0&&p.sk1<0&&p.s3<0)spAtk();p.sF=F}
else if(S){p.dr=0;p.ch=0}
else if(p.vt==6){p.dr=0;p.ch=0;if(F&&p.cd<=0)alShot()}
else if(F){
if(!p.dr&&p.cd<=0){p.dr=1;p.ch=0}
if(p.dr)p.ch=M.min(1,p.ch+dt/.7);
}else if(p.dr)fire();
p.da+=((p.dr?1:0)-p.da)*M.min(1,dt*16);
if(p.dr){
const nx=p.x+p.f*24,ny=p.y-45;
if(p.ch>.2&&M.random()<p.ch*.5){const a=rnd(0,TAU),r=rnd(18,30);sp(1,nx+M.cos(a)*r,ny+M.sin(a)*r,-M.cos(a)*r*3.2,-M.sin(a)*r*3.2,.3,7,AE[evl()].k)}
if(p.pc<1&&p.ch>=1)ring(nx,ny,AE[evl()].c,24);
p.pc=p.ch;
}
if(dir&&!p.dr&&!p.go&&!(SPC&&p.sk1>=0))p.f=dir>0?1:-1;
p.wd+=(-p.f-p.wd)*M.min(1,dt*1.5);
p.sh+=((S?1:0)-p.sh)*M.min(1,dt*13);
const spd=320*(p.dr?.42:1)*(SPC&&(p.at>=0||p.sk1>=0||p.s3>=0)?.4:1)*(1-p.sh*.45)*(p.go?.15:1)*(1+.06*xzB.v)*(p.fy?1+.08*sv.wl:1);
p.vx+=(dir*spd-p.vx)*M.min(1,dt*(p.on?(dir?13:11):(p.fy?8:4)));
if(SPC&&p.sk1>=.2&&p.sk1<.37)p.vx=p.f*(dxS.act=='T'?640:-320);
if(SPC&&dxS.act=='B'&&p.s3>=.2&&p.s3<.37)p.vx=-p.f*200;
if(J&&!p.wj)p.jb=.13;else p.jb-=dt;
p.cy=p.on?.1:p.cy-dt;
if(p.jb>0&&p.cy>0){p.vy=-560;p.on=0;p.cy=0;p.jb=0;p.sq=-.3;dust(p.x,GY,6,60)}
else if(wgT()&&!p.on&&!p.fy&&p.jb>0){
p.fy=1;p.jb=0;p.vy=M.min(p.vy,-120);
ring(p.x,p.y-30,AE[p.vt].c,36);
for(let i=0;i<6;i++)sp(5,p.x+rnd(-14,14),p.y-rnd(20,50),rnd(-30,30),rnd(-60,-10),rnd(.5,.9),1.6,AE[p.vt].s,0,.6);
}
p.jt=SPC&&sv.jp&&J&&!p.on&&p.jf>0&&!p.fy&&!p.go?1:0;
if(p.on)p.jf=M.min(1,p.jf+dt/1.4);
if(!p.on){
if(p.fy){
p.vy+=((J?-240:(TT.vy||0)<0?(TT.vy||0)*240:60+(TT.vy||0)*180)-p.vy)*M.min(1,dt*6);p.y+=p.vy*dt;
if(p.y<GY-300-sv.wl*30){p.y=GY-300-sv.wl*30;if(p.vy<0)p.vy=0}
}else if(p.jt){
p.vy+=(-330-p.vy)*M.min(1,dt*6);p.jf=M.max(0,p.jf-dt/2.6);p.y+=p.vy*dt;
if(p.y<GY-330){p.y=GY-330;if(p.vy<0)p.vy=0}
}else{
let gr=1700;
if(p.vy<0&&!J)gr*=2.3;else if(p.vy>0)gr*=1.12;
p.vy=M.min(950,p.vy+gr*dt);p.y+=p.vy*dt;
}
if(p.y>=GY){p.y=GY;if(p.vy>260){p.sq=M.min(.4,p.vy/2400);dust(p.x,GY,8,90)}p.vy=0;p.on=1;p.fy=0}
}else p.y=GY;
p.x+=p.vx*dt;
const sn=M.min(1,M.abs(p.vx)/190);
if(p.on){
p.wk+=M.abs(p.vx)*dt*.085;
const s=M.floor(p.wk/PI);
if(s!=p.st){p.st=s;if(sn>.3)dust(p.x-p.f*4,GY,2,40)}
}
p.air+=((p.on?0:1)-p.air)*M.min(1,dt*16);
p.wa+=((wgT()?(p.on?.3:1):0)-p.wa)*M.min(1,dt*8);
p.wp+=dt*(p.fy?(J?17:8):(p.on?1.8:5));
p.ga+=((p.go>0?1:0)-p.ga)*M.min(1,dt*12);
p.cv+=(p.vx-p.cv)*M.min(1,dt*6);p.sq*=M.exp(-dt*9);p.rc*=M.exp(-dt*8);p.sf*=M.exp(-dt*3.2);
p.wj=J;p.ws=S;
if(!dir&&p.on&&!p.dr&&!S&&M.abs(p.vx)<5)p.idle+=dt;else p.idle=0;
p.mt-=dt;
if(p.idle>1&&p.mt<=0){p.mt=rnd(.25,.5);sp(1,p.x+rnd(-14,14),p.y-rnd(10,50),rnd(-4,4),rnd(-16,-8),rnd(1.4,2.4),rnd(5,9),'a')}
p.bl-=dt;if(p.bl<-.12)p.bl=rnd(2.2,5);
evFx(dt);
}

