function upBot(e,dt){
const q=e.q,cf=e.cf,wg=!pvOn||q.vt>=4,act=duS==1&&!p.dead&&!e.dd,dx=p.x-e.x,ad=M.abs(dx),sd=sgn(dx),on=e.al<=0;
const hu=cf.hu;
e.cw-=dt;e.mt-=dt;e.jb-=dt;e.ht-=dt;e.shT-=dt;e.ft-=dt;
if(hu){
e.pz-=dt;e.rj-=dt;e.lk-=dt;
if(e.lk<=0){e.lk=rnd(2,5);e.lm=rnd(.8,1.25)}
if(duS==0)e.cw=M.max(e.cw,.5-e.fm*.3);
e.fq-=dt;
if(e.fq<=0){e.fq=rnd(1.8,4);e.fm=M.max(pvOn&&pvO.lv>1?.9:.05,M.min(1,e.fm+(pvFb-.1*e.mo-(e.lw?.08:0)-e.fm)*.35+rnd(-.28,.28)))}
e.lw=e.hp<e.mh*.3?1:0;
const ps=M.abs(p.vx)>90?sgn(p.vx):0;
if(ps&&e.pd&&ps!=e.pd)e.cm=rnd(.35,.7);
if(ps)e.pd=ps;
e.cm-=dt;
const dl=e.lh-e.hp,dp=e.lp-p.hp;
if(dl>0)e.uch+=dl/e.mh*cf.ug*1.6;
if(dp>0)e.uch+=dp/p.mh*cf.ug*1.2;
e.lh=e.hp;e.lp=p.hp;
e.uch=M.min(1,e.uch);
e.hbc-=dt;
if(e.hbm){e.hbt-=dt;if(e.hbt<=0)e.hbm=0}
else if(e.hbc<=0){e.hbc=rnd(3,7);if(act&&on&&M.random()<cf.hb){e.hbm=M.random()<.5?1:2;e.hbt=rnd(1.5,3.2)}}
if(e.hbm==1&&act&&on&&!e.dr&&!e.fy){e.hjt-=dt;if(e.hjt<=0){e.hjt=rnd(.45,.8);e.vz=560;q.sq=-.3;dust(e.x,GY,6,60)}}
if(e.hbm==2){e.wgt-=dt;if(e.wgt<=0){e.wgt=rnd(.25,.45);e.wg=-e.wg}}
if(act&&e.pz<=0&&M.random()<dt*.35)e.pz=rnd(.3,.8);
if(act&&on&&!e.dr&&e.rj<=0){e.rj=rnd(2.5,6);if(M.random()<.4){e.vz=560;q.sq=-.3;dust(e.x,GY,6,60)}}
if(e.hf>.12&&M.random()<.3){e.dr=0;e.ch=0;e.cw=M.max(e.cw,rnd(.2,.5))}
}
let th=0,tt=9;
if(act)for(const a of A){
if(a.st||a.vf||a.vx*(e.x-a.x)<=0)continue;
const tm=(e.x-a.x)/a.vx;
if(tm<0||tm>.7)continue;
if(a.bd===undefined){const fm=hu?e.fm:1;a.bd=M.random()<cf.dg*(hu?.55+.45*fm:1);a.rt=T+rnd(cf.r0,cf.r1)+(hu?.07+(1-fm)*.2+(M.random()<(1-fm)*.35?rnd(.12,.3):0):0)}
if(!a.bd||T<a.rt)continue;
const py=a.y+a.vy*tm+215*tm*tm;
if(py>e.y-76&&py<e.y+8&&tm<tt){tt=tm;th=1}
}
if(th&&tt<.65&&e.jb<=0){
if(on){e.vz=560;e.jb=.35;q.sq=-.3;dust(e.x,GY,6,60)}
else if(wg){e.fy=1;e.ta=e.al>110?M.max(0,e.al-170):M.min(300,e.al+170);e.ft=rnd(1,1.8);e.jb=.35}
}else if(cf.sh&&th&&tt<.3)e.shT=.32;
if(wg&&act&&!e.fy&&on&&e.ht<=0){
e.ht=rnd(2.5,5);
if(M.random()<cf.fl){e.fy=1;e.ta=rnd(80,230);e.ft=rnd(1.4,2.6)}
}
if(e.fy){
if(e.ft<=0)e.ta=0;
const vv=e.ta<=0?-300:M.max(-420,M.min(420,(e.ta-e.al)*5));
e.vz+=(vv-e.vz)*M.min(1,dt*8);
e.al+=e.vz*dt;
if(e.al<=0){e.al=0;e.vz=0;if(e.ta<=0)e.fy=0}
}else if(e.al>0||e.vz){
e.vz-=(e.vz>0?1700:1900)*dt;
e.al+=e.vz*dt;
if(e.al<=0){if(e.vz<-260){q.sq=M.min(.4,-e.vz/2400);dust(e.x,GY,8,90)}e.al=0;e.vz=0}
}
let want=0;
if(act){
const lo=M.max(200,VW*.26)*(hu?e.lm*(1-.2*e.mo)*(e.lw?1.3:1):1),hi=M.max(400,VW*.46)*(hu?e.lm*(1-.2*e.mo)*(e.lw?1.3:1):1);
if(ad<lo)want=-sd;
else if(ad>hi)want=sd;
else{if(e.mt<=0){e.mt=rnd(.45,1.2);e.dir=M.random()<.5?-1:1}want=e.dir}
if(hu&&e.pz>0)want=0;
else if(hu&&e.hbm==2)want=e.wg;
if((want<0&&e.x<cam+70)||(want>0&&e.x>cam+VW-70))want=0;
}
const spd=e.sp*(e.dr?.42:1)*(1-q.sh*.45)*(e.fy?1.15:1);
e.vx+=(want*spd-e.vx)*M.min(1,dt*(on?12:6));
e.x+=e.vx*dt;
if(e.x<cam+40){e.x=cam+40;e.vx=M.max(0,e.vx)}
else if(e.x>cam+VW-40){e.x=cam+VW-40;e.vx=M.min(0,e.vx)}
e.f=sd;
if(e.shT>0){e.dr=0;e.ch=0}
else if(act){
if(!e.dr){
if(e.cw<=0&&ad>130&&ad<820&&!(th&&tt<.3)&&(!(p.sh>.5&&p.f==-sd)||(hu&&M.random()<dt*3))){e.dr=1;e.ch=0;if(hu&&!pvOn&&!(e.sb>0)&&M.random()<.2+.3*cf.dg)e.sb=M.floor(rnd(3,8));e.tg=e.sb>0?rnd(.18,.32):M.min(1,(ad<250?rnd(.3,.55):rnd(hu?.55:.9,1))*(1-.15*e.mo))}
}else{
e.ch=M.min(1,e.ch+dt/cf.ct);
if(th&&tt<.3&&e.ch<.6){e.dr=0;e.ch=0}
else if(e.ch>=e.tg)duFire(e);
}
}else{e.dr=0;e.ch=0}
if(cf.qc&&!pvOn){
e.qk-=dt;
if(act&&e.ut<=0&&e.qk<=0&&!e.dr&&e.shT<=0&&ad<720&&(!hu||M.random()<dt*(.8+e.fm*1.6)))duQk(e);
if(e.ut<=0){
if(hu){
if(e.uch>=1&&act&&ad<760){
if(!e.ud){e.ud=1;e.uw=rnd(cf.u0,cf.u1)}
e.uw-=dt;
if(e.uw<=0&&(cf.u1>4||p.sh<.5||e.uw<-1.2)){duUl(e);e.uch=0;e.ud=0}
}
}else{e.uct+=dt;if(act&&e.uct>=cf.uc&&ad<760)duUl(e)}
}
else{
e.ut-=dt;e.ua-=dt;
if(e.ua<=0&&act){e.ua=.17;Pr.push({t:'k',x:p.x+rnd(-260,260),y:-60,vx:rnd(-40,40),vy:rnd(650,900),tr:[],l:0,c:.7,dm:p.mh*.012*(cf.dm/.06)*duEm(q.vt),v:q.vt})}
}
}
q.dr=e.dr;q.ch=e.ch;q.pc=e.ch;
q.da+=((e.dr?1:0)-q.da)*M.min(1,dt*16);
q.sh+=((e.shT>0?1:0)-q.sh)*M.min(1,dt*13);e.sh=q.sh;
q.rc*=M.exp(-dt*8);q.sf*=M.exp(-dt*3.2);q.sq*=M.exp(-dt*9);
q.cv+=(e.vx-q.cv)*M.min(1,dt*6);
q.on=on?1:0;q.fy=e.fy;q.vy=-e.vz;
q.air+=((on?0:1)-q.air)*M.min(1,dt*16);
if(on)q.wk+=M.abs(e.vx)*dt*.085;
q.wa+=((on?.3:1)-q.wa)*M.min(1,dt*8);
q.wp+=dt*(e.fy?8:(on?1.8:5));
q.wd+=(-e.f-q.wd)*M.min(1,dt*1.5);
q.bl-=dt;if(q.bl<-.12)q.bl=rnd(2.2,5);
e.y=GY-e.al;
duSw(e,evFx,dt);
}
function upBq(e,dt){
const l=e.ld,act=duS==1&&!p.dead&&!e.dd&&!l.dd,dx=l.x+e.c.of-e.x;
e.ac-=dt;
e.vx+=((M.abs(dx)>14?sgn(dx)*e.sp:0)-e.vx)*M.min(1,dt*8);
e.x+=e.vx*dt;
e.f=sgn(p.x-e.x);
e.sw*=M.exp(-dt*7);e.ph+=M.abs(e.vx)*dt*.1;
if(act&&e.ac<=0&&M.abs(p.x-e.x)<700){
e.ac=e.c.cd*rnd(2,3);e.sw=1;
duShoot(e.x+e.f*20,e.y-42,e.f,.6,p.mh*.014*(l.cf.dm/.06),0,l.cf);
}
}
function duDraw(e){
const hh=M.min(1,e.al/200),dy=e.dd>0;
shd(e.x,30*(1-hh*.5),.42*(1-hh)*(dy?M.max(0,1-e.dd):1));
shd(e.x,16*(1-hh*.5),.5*(1-hh)*(dy?M.max(0,1-e.dd):1));
duSw(e,()=>{
g.save();
if(dy){g.globalAlpha=M.max(0,1.15-e.dd);g.translate(p.x,p.y);g.rotate(-p.f*M.min(1.45,p.dead*4));g.translate(-p.x,-p.y)}
drawP(0);drawP(1);
g.restore();
});
g.globalAlpha=1;
if(e.hf>0)gl('r',e.x,e.y-30,34,e.hf*2.4);
}
function duDrawQ(e){
if(e.dd>0)g.globalAlpha=M.max(0,1.15-e.dd);
drawS(e);
g.globalAlpha=1;
}
function duAr(q,i,dt){
const a=AE[q.v];
q.an=M.atan2(q.vy,q.vx);q.tr.push({x:q.x,y:q.y});if(q.tr.length>16)q.tr.shift();
q.vy+=430*dt;q.x+=q.vx*dt;q.y+=q.vy*dt;
if(M.random()<.6)sp(1,q.x-q.vx*.01,q.y-q.vy*.01,rnd(-8,8),rnd(-8,8),.3,8+q.c*6,a.k);
if(q.c>.5&&M.random()<.5)sp(5,q.x-q.vx*.02,q.y-q.vy*.02,rnd(-24,24),rnd(-24,24),rnd(.3,.5),1.5,a.s,60,2);
if(q.v==4)sTrP(q,dt);else if(q.v==5)nTrP(q,dt);
if(M.random()<.5)sp(3,q.x,q.y,rnd(-40,40),rnd(-40,40),rnd(.15,.3),1.6,a.c,200,2);
let h=0;
if(!p.dead&&p.inv<=0&&M.abs(q.x-p.x)<14&&q.y>p.y-62&&q.y<p.y+2){hurtP(q.dm,q.x-sgn(q.vx)*50);h=1}
if(!h)for(const s of S){
if(s.dead)continue;
if(M.abs(q.x-s.x)<14&&q.y>s.y-62&&q.y<s.y+2){hurtS(s,q.dm,q.x);h=1;break}
}
if(h||q.l>4||q.y>GY){
if(!h)dust(q.x,GY,3,60);
ring(q.x,q.y,a.c,16+q.c*14);ring(q.x,q.y,'255,255,255',10);sp(1,q.x,q.y,0,0,.2,36+q.c*30,a.k);
for(let k=0;k<12;k++)sp(3,q.x,q.y,rnd(-180,180),rnd(-220,60),rnd(.2,.45),1.8,a.c,300,2);
Pr.splice(i,1);
}
}
function duAd(q){
q.an=M.atan2(q.vy,q.vx);q.ev=q.v;q.st=0;
gl(AE[q.v].k,q.x,q.y,17+q.c*8,.7);
drawA1(q);
}
function duHud(){
const e=E.find(o=>o.bot),bw=M.min(220,VW*.3),bx=VW-bw-14,by=14;
if(e){
const r=M.max(0,e.hp/e.mh);
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(bx-1,by-1,bw+2,9);
g.fillStyle='#d9534f';g.fillRect(bx,by,bw*r,7);
g.fillStyle='rgba(255,255,255,.14)';g.fillRect(bx,by,bw*r,2);
g.textAlign='right';g.font='600 12px system-ui,sans-serif';g.fillStyle='rgba(228,234,248,.92)';
g.fillText(olD?e.nm:pvOn?pvO.nm+'  -  '+pvRN[pvO.tr]:'Bot  '+AE[4].n,bx+bw,by+26,bw);
g.textAlign='left';
}
if(duS==0&&!inMenu){
const n=M.ceil(duT),fr=1-(duT%1||1),z=1+.35*(1-fr);
g.textAlign='center';
g.fillStyle='rgba(232,223,204,.85)';g.font='600 14px system-ui,sans-serif';
g.fillText('Babak '+duR,VW/2,VH*.4-52);
g.globalAlpha=M.max(.25,1-fr*.6);
g.fillStyle='#ffe09a';g.font='700 '+M.round(64*z)+'px system-ui,sans-serif';
g.fillText(n,VW/2,VH*.4+16);
g.globalAlpha=1;g.textAlign='left';
}else if(duG>0){
duG-=DT;
g.textAlign='center';g.globalAlpha=M.max(0,M.min(1,duG*2.5));
g.fillStyle='#ffd45a';g.font='700 46px system-ui,sans-serif';
g.fillText('MULAI!',VW/2,VH*.4+12);
g.globalAlpha=1;g.textAlign='left';
}
if(duF==1&&duS==2){
const k=M.min(1,(4.2-duT)*1.2);
g.fillStyle='rgba(8,6,10,'+.4*k+')';g.fillRect(0,0,VW,VH);
g.textAlign='center';g.fillStyle='rgba(255,236,170,'+k+')';g.font='600 22px system-ui,sans-serif';
g.fillText('Menang',VW/2,VH*.4);
g.font='13px system-ui,sans-serif';g.fillStyle='rgba(235,225,210,'+.6*k+')';
g.fillText('Skor '+duP+' - '+duB,VW/2,VH*.4+26);
if(pvOn)g.fillText(pvD,VW/2,VH*.4+48);
g.textAlign='left';
}
}
