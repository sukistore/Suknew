(function(){
const O=dxS.O,BT={};
const act=()=>dxS.act=='T'?dxT:dxB,bid=()=>dxS.act=='T'?'B':'T',bt=()=>dxS.act=='T'?dxB:dxT;
const SW='<path d="M7 7h11l-3-3M17 17H6l3 3"/>';
if(typeof document!='undefined')for(const k of ['f','q','u','v','m']){const el=document.getElementById(k),s=el&&el.querySelector('svg');if(s)BT[k]=[s,s.innerHTML]}
function spIcons(){for(const k in BT)BT[k][0].innerHTML=SPC?(k=='v'?SW:dxT.IC[k]):BT[k][1]}
function spSet(v){SPC=v;try{localStorage.setItem('wg_spc',v)}catch(x){}spIcons();if(typeof skSync=='function')skSync()}
const hasSk=k=>duOn?0:SPC?(k=='q'||k=='u'||k=='m'||k=='x'):p.vt==6?k=='q'||k=='v'||k=='u':sv.ek.includes(k);
function spCard(){
const on=SPC;
return '<div class="cd'+(on?' on':'')+'" data-i="99"><div class="ic ch"><img src="'+spImg()+'"></div><b>Lassy × Kitty</b><small>Bazoka + Tombak  tukar, bot &amp; ultimate combo</small><div class="bt'+(on?' ds':'')+'">'+(on?'Dipilih':'Pilih')+'</div></div>';
}
function swap(){
if(!SPC||inMenu||p.dead||cmb.on)return;
const a=dxS.act,b=bid(),oa=O[a],ob=O[b];
if(p.ut>0||ob.ut>0)return;
oa.x=p.x;oa.f=p.f;oa.uc=p.uc;oa.kc=p.kc;oa.k3=p.s3>=0&&!p.s3H?0:p.k3;oa.vx=0;oa.at=-1;oa.sk1=-1;oa.rl=-1;oa.s3=-1;oa.ut=0;oa.cd=0;oa.bt=40;
p.x=ob.x;p.f=ob.f;p.uc=ob.uc;p.kc=ob.kc;p.k3=ob.k3;p.vx=0;p.at=-1;p.sk1=-1;p.rl=-1;p.s3=-1;p.cd=.25;
dxS.act=b;
ring(p.x,p.y-30,'160,180,255',40);
}
addEventListener('keydown',e=>{if((e.code=='KeyC'||e.code=='Tab')&&SPC&&!inMenu){e.preventDefault();if(!e.repeat)swap()}});
let pv=0;
function botAI(dt){
const id=bid(),o=O[id],c=bt(),off=id=='T'?46:-46;
if(inMenu||p.dead){o.uc=0;o.kc=0;o.k3=0;o.ut=0;o.us=0;o.vx=0;o.at=-1;o.sk1=-1;o.rl=-1;o.s3=-1;o.x=p.x+p.f*off;o.f=p.f;o.y=GY;return}
const ty=sv.jp&&!p.on?p.y:GY;
o.vy=(ty-o.y)*7;o.y+=o.vy*dt;
if(ty==GY&&o.y>GY-1.5){o.y=GY;o.vy=0}
o.on=o.y>=GY-1?1:0;o.jt=sv.jp&&p.jt?1:0;o.sh=0;
if(o.kc>0)o.kc-=dt;
if(o.cd>0)o.cd-=dt;
const busy=o.at>=0||o.sk1>=0||o.rl>=0||o.s3>=0||o.ut>0;
if(o.ut<=0)o.uc=M.min(1,o.uc+dt*(1+.1*xzB.m)/20);
const tx=p.x+p.f*off,dx=tx-o.x;
if(M.abs(dx)>420){o.x=tx;o.vx=0}
let mv=0;
if(!busy&&M.abs(dx)>10)mv=dx>0?1:-1;
if(busy)o.vx*=M.max(0,1-dt*8);else o.vx+=(mv*340-o.vx)*M.min(1,dt*14);
o.x+=o.vx*dt;
if(mv)o.f=mv;
o.bt-=dt*60;
if(o.bt<=0&&!busy){
o.bt=40+M.random()*70;
let ne=null,nd=900;
for(const e of E){if(e.dd)continue;const d=M.abs(e.x-o.x);if(d<nd){nd=d;ne=e}}
if(ne){
o.f=ne.x>o.x?1:-1;
const r=M.random();
if(!pvOn&&o.uc>=1&&r<.7)c.Ult();
else if(!pvOn&&o.kc<=0&&r<.3)c.Skill();
else if(!pvOn&&o.k3<=0&&r<.55)c.Sk3();
else c.Atk();
}
}
}
function jpDraw(x,y,f,th){
g.save();g.translate(M.round(x),M.round(y));g.scale(f,1);
g.fillStyle='#0b0e16';g.fillRect(-16,-47,10,20);
g.fillStyle='#4a5470';g.fillRect(-15,-46,3,16);g.fillRect(-10,-46,3,16);
g.fillStyle='#8c98c0';g.fillRect(-15,-46,1,16);g.fillRect(-10,-46,1,16);
g.fillStyle='#ffb24a';g.fillRect(-15,-43,3,1);g.fillRect(-10,-43,3,1);
g.fillStyle='#2a3044';g.fillRect(-15,-30,3,2);g.fillRect(-10,-30,3,2);
if(th){
for(let k=0;k<2;k++){
const x0=-15+k*5,L=M.round(9+M.random()*8);
g.fillStyle='#ff7a1c';g.fillRect(x0,-28,3,L);
g.fillStyle='#ffd21f';g.fillRect(x0+1,-28,1,M.round(L*.8));
g.fillStyle='#fff6c8';g.fillRect(x0,-28,3,2);
}
gl('f',-11.5,-22,22,.7);
}
g.restore();
}
function jpFx(){
if(!sv.jp||inMenu||cmb.on||p.dead)return;
const o=O[bid()];
for(const q of[[p.x,p.y,p.f,p.jt],[o.x,o.y,o.f,o.jt&&!o.on]])
if(q[3]&&M.random()<.8)sp(3,q[0]+q[2]*(M.random()<.5?-13.5:-8.5),q[1]-26,rnd(-30,30),rnd(140,260),rnd(.25,.45),1.8,M.random()<.5?'255,170,80':'255,226,140',300,1.5);
}
function mark(x,y,col,uc){
g.fillStyle=col;
for(let i=0;i<4;i++)g.fillRect(M.round(x)-4+i,y+i,9-2*i,1);
if(uc!==undefined){g.fillStyle='rgba(8,10,16,.6)';g.fillRect(M.round(x)-10,y-5,20,3);g.fillStyle=uc>=1?'#ffd21f':'#c9a45c';g.fillRect(M.round(x)-10,y-5,M.round(20*uc),3)}
}
window.spUlt=()=>act().Ult();window.spRain=dt=>act().Rain(dt);window.spFall=a=>dxT.Fall(a);window.spAtk=()=>act().Atk();window.spSkill=()=>act().Skill();window.spSk3=()=>act().Sk3();window.spShaft=()=>dxT.Shaft();
window.spMn=()=>dxS.act=='T'?'Lembing Guntur':'Roket Kluster';window.spQn=()=>dxS.act=='T'?'Tusukan Kilat':'Roket Raksasa';window.spUn=()=>dxS.act=='T'?'Hujan Tombak':'Badai Rudal';
window.spUpd=dt=>{
const tv=typeof TT!='undefined'&&TT.v&&!(duOn&&duS==0)?1:0;
if(tv&&!pv)swap();
pv=tv;
if(!cmb.on)botAI(dt);
const o=O[bid()];
bt().Upd(dt);
if(o.ut>0&&!inMenu&&!pvOn){o.ut-=dt;bt().Rain(dt)}
act().Upd(dt);
jpFx();
};
window.spDraw=()=>{
const jo=O[bid()],jv=sv.jp&&!p.dead&&!cmb.on;
if(jv)jpDraw(jo.x,jo.y,jo.f,jo.jt&&!jo.on);
bt().Draw();
if(jv)jpDraw(p.x,p.y,p.f,p.jt);
act().Draw();
if(jv&&(p.jt||p.jf<.995)){g.fillStyle='rgba(8,10,16,.6)';g.fillRect(M.round(p.x)-10,M.round(p.y)+6,20,3);g.fillStyle=p.jf<.25?'#ff5a4a':'#4cc9ff';g.fillRect(M.round(p.x)-10,M.round(p.y)+6,M.round(20*p.jf),3)}
if(!p.dead&&!cmb.on){const o=O[bid()];mark(p.x,M.round(p.y)-86,'#ffd21f');mark(o.x,GY-86,'#8f98d8',o.uc)}
};
window.spSet=spSet;window.spCard=spCard;window.hasSk=hasSk;
spIcons();
})();
