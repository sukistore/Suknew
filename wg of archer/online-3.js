function olTick(dt){
if(!olOn)return;
for(const a of A){
if(OLS.has(a))continue;
OLS.add(a);
if(a.vf||a.ul)continue;
const m={t:'ar',x:a.x,y:a.y,vx:a.vx,vy:a.vy,c:a.c,e:a.ev};
if(olOn=='d')olSend(olOpC(),m);
else if(olH)olAll(m);
else olSend(olC,m);
}
if(olOn=='d'){
const o=olOp;
if(o.r){
const L=M.min(VW,o.v||VW)*.46,ox=o.r[OLX];
p.x=M.max(ox-L,M.min(ox+L,p.x));
}
return;
}
if(p.dead>0){if(!olDt)olDt=performance.now();if(performance.now()-olDt>10000&&olAlive())olRv()}else olDt=0;
if(!olH)return;
for(const e of E){
if(e.nid==null){
e.nid=++olNid;
if(e.boss&&olTm>1){e.hp*=1+.6*(olTm-1);e.mh=e.hp}
}
}
if(msg&&msg!==olLm){olLm=msg;olBn=msg.t}
if(p.dead>0&&!olAlive()){olEt+=dt;if(olEt>2.5){olEt=0;const k=brK;olAll({t:'end',k});olFin('Boss Rush Co-op selesai','Bos dikalahkan: '+k+'  -  Koin didapat: '+k*20)}}
else olEt=0;
}
function olLoop(){
if(!olOn||inMenu)return;
const nw=performance.now();
if(olRole=='h'){
for(const o of olCs.slice())if(o.ok&&nw-o.lt>10000){try{o.c.close()}catch(x){}olDrop(o)}
if(!olOn)return;
}else if(olRole=='g'&&nw-olLt>10000){olLost('Koneksi ke host terputus');return}
if(olH){olAll(olSnap());olBn=null;return}
const m={t:'st',r:olPk(),a:M.max(0,GY-p.y),w:sv.ws,v:VW};
olSend(olOn=='d'?olOpC():olC,m);
}
setInterval(olLoop,66);
function olHud(){
if(!olOn)return;
g.save();
g.font='600 11px system-ui,sans-serif';g.textAlign='center';
if(!(p.dead>0)){g.fillStyle='rgba(255,224,154,.92)';g.fillText(OLN(),p.x-cam,p.y-92)}
if(olOn=='d'){
const e=E.find(o=>o.ol);
if(e&&!e.dd){g.fillStyle='rgba(255,150,130,.95)';g.fillText(olOp.n,e.x-cam,e.y-92)}
}else{
let y=84;
g.textAlign='right';g.font='600 11px system-ui,sans-serif';
for(const s of S){
if(!s.ol)continue;
const r=M.max(0,M.min(1,s.hp/s.mh)),dd=s.dead>0;
g.fillStyle=dd?'rgba(215,224,242,.4)':s.bt?'rgba(255,224,154,.92)':'rgba(170,235,255,.95)';
g.fillText(s.nm+(dd?'  gugur':''),VW-14,y);
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(VW-14-92,y+4,92,4);
g.fillStyle=dd?'#555':'#6f9f8e';g.fillRect(VW-14-92,y+4,92*(dd?0:r),4);
y+=22;
}
}
g.restore();
}
const olDn=duNew;
duNew=function(){
olDn();
if(!olD)return;
const sd=duR%2?1:-1,D=300,e=E.find(o=>o.bot),ho=olRole!='g';
if(!e)return;
p.x=ho?0:sd*D;p.f=ho?sd:-sd;
e.x=ho?sd*D:0;e.f=ho?-sd:sd;
e.ol=1;e.nm=olOp.n;e.al=0;e.vx=0;
cam=p.x-VW*.5+50;
};
const olUb=upBot;
upBot=function(e,dt){
if(e.ol){olUpG(e,dt);return}
olUb(e,dt);
};
const olHe=hurtE;
hurtE=function(e,d,dx){
if(olG&&e.nid!=null){
if(e.dd)return;
olSend(olC,{t:'he',i:e.nid,d,x:dx});
e.hf=.14;
return;
}
if(e.ol){
if(e.dd||duS!=1)return;
const s=e.sh>.6&&dx==-e.f?d*.15:d,h0=e.hp;
olSend(olOpC(),{t:'hit',f:s/e.mh,x:p.x});
e.hp=h0+1e6;olHe(e,d,dx);e.hp=M.max(1,h0-s);
return;
}
olHe(e,d,dx);
};
const olHs=hurtS;
hurtS=function(s,d,fx){
if(s.ol){
if(olG||s.dead>0)return;
s.hf=.2;
if(s.rm){olSend(olPc(s.pid),{t:'dmg',d,x:fx});return}
s.hp-=d;s.rg=4;s.vx+=(s.x>fx?1:-1)*140;
for(let i=0;i<4;i++)sp(0,s.x+rnd(-5,5),s.y-rnd(20,50),rnd(-40,40),rnd(-60,-10),rnd(.3,.5),rnd(2,3.5),'150,70,62',200,2);
if(s.hp<=0){s.hp=0;s.dead=12;dust(s.x,GY,8,80)}
return;
}
olHs(s,d,fx);
};
const olHp=hurtP;
hurtP=function(d,fx){
if(olG&&!olDx)return;
olHp(d,fx);
};
const olKe=killE;
killE=function(e){
const w=e.dd;
olKe(e);
if(olH&&e.boss&&!w)olAll({t:'bk'});
};
const olUs=upS;
upS=function(dt){
olTick(dt);
if(!olOn){olUs(dt);return}
const hid=[],eq=sv.eq;
for(let i=S.length-1;i>=0;i--)if(S[i].ol)hid.push(S.splice(i,1)[0]);
sv.eq=[];
try{olUs(dt)}finally{sv.eq=eq;for(const s of hid)S.push(s)}
for(const s of hid)olUpS(s,dt);
};
const olSw=spw;
spw=function(dt){
if(olG)return;
if(olH&&p.dead>0){const d=p.dead;p.dead=0;try{olSw(dt)}finally{p.dead=d}return}
olSw(dt);
};
const olUe=upE;
upE=function(dt){
if(olG){olUpE(dt);return}
olUe(dt);
};
const olUh=upH;
upH=function(dt){
if(olOn=='c'&&p.dead>3)p.dead=3;
olUh(dt);
};
const olDs=drawS;
drawS=function(s){
if(s.ol){olDrawS(s);return}
olDs(s);
};
const olHd=hud;
hud=function(){
olHd();
olHud();
};
const olSp=duSp;
duSp=function(dt){
if(olD&&!inMenu&&duS==2&&duF){
duT-=dt;
if(duT<=0)olFin(duF==1?'Kamu menang!':'Kamu kalah','Skor '+duP+' - '+duB+'  lawan  '+olOp.n);
return;
}
olSp(dt);
};
const olMg=menuGo;
menuGo=function(){
olLeave();
olEl.classList.remove('on');
olMg();
};
olEl.addEventListener('click',e=>{
const t=e.target.closest('[data-o]');
if(!t)return;
const k=t.dataset.o;
if(k=='mk')olHostGo();
else if(k=='jn')olJoin();
else if(k=='bt'){olRole='h';olSolo=1;olMode='c';olSz=2;olCode='';olCs=[];olMsgT='';olUI()}
else if(k=='mc'||k=='md'){olMode=k=='mc'?'c':'d';olLbx()}
else if(k=='z'){olSz=+t.dataset.z;olLbx()}
else if(k=='go')olGo();
else if(k=='cp'){try{navigator.clipboard.writeText(olCode)}catch(x){}olSay('Kode disalin')}
else if(k=='x'){olLeave();olEl.classList.remove('on');mdOpen()}
else if(k=='ok'){olMt=null;olEl.classList.remove('on');mdOpen()}
});
['keydown','keyup','keypress','pointerdown','touchstart','mousedown'].forEach(n=>olEl.addEventListener(n,e=>e.stopPropagation()));
(function(){
const r=document.querySelector('#md .mdr'),b=r&&r.querySelector('.m5');
if(!r||!b)return;
const c=b.cloneNode(true);
c.removeAttribute('data-d');
c.className='mdc mol';
c.querySelector('b').textContent='Mabar Online';
c.querySelector('span').textContent='1 vs 1 lawan teman atau Boss Rush bareng 1-4 pemain lewat WebRTC. Bisa duo bareng Bot Pro.';
c.querySelector('svg').innerHTML='<circle cx="8" cy="8" r="2.8"/><circle cx="16.5" cy="9" r="2.4"/><path d="M3 19c0-3.2 2.3-5 5-5s5 1.8 5 5M13.5 15.2c.9-.8 2-1.2 3-1.2 2.4 0 4.2 1.6 4.2 4.6"/>';
r.appendChild(c);
c.addEventListener('click',e=>{e.stopPropagation();olOpen()});
})();
