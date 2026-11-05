function pvUp(){
if(document.getElementById('pvu'))return;
const r=pvR,el=document.createElement('div');
el.id='pvu';
el.style.setProperty('--rc',pvRK[r.n][3]);
let sh='';
for(let i=0;i<26;i++)sh+='<i class="us" style="--a:'+M.round(i*360/26+rnd(-5,5))+'deg;--d:'+M.round(rnd(110,300))+'px;--s:'+rnd(0,.18).toFixed(2)+'s"></i>';
el.innerHTML='<div class="ur"></div><i class="uq" style="--i:0"></i><i class="uq" style="--i:1"></i><i class="uq" style="--i:2"></i>'+sh+'<div class="ub"><canvas data-rk="'+r.o+'" width="288" height="288"></canvas></div><div class="u1">NAIK PANGKAT</div><div class="u2">'+pvRN[r.n]+'</div><div class="u3">'+pvRN[r.o]+'  -  '+pvRN[r.n]+'  |  '+r.rp+' RP</div><button id="pvn" disabled>Lanjut</button><div class="fl"></div>';
document.body.appendChild(el);
const b=el.querySelector('.ub').getBoundingClientRect();
el.style.setProperty('--cx',(b.left+b.width/2)+'px');
el.style.setProperty('--cy',(b.top+b.height/2)+'px');
pvSn('pvRank');
rkStart();
setTimeout(()=>{if(!el.isConnected)return;el.querySelector('canvas').dataset.rk=r.n;el.classList.add('go')},1050);
setTimeout(()=>{const n=el.querySelector('#pvn');if(n)n.disabled=false},2100);
el.addEventListener('click',e=>{
const n=e.target.closest('#pvn');
if(n&&!n.disabled){pvSn('tap');el.remove();pvZ(1)}
});
}
function pvZ(q){
if(document.getElementById('pvz'))return;
const r=pvR,el=document.createElement('div');
el.id='pvz';el.className=r.w?'w':'l';
el.style.setProperty('--rc',pvRK[r.n][3]);
const nx=r.n<6?pvRT[r.n+1]-pvRT[r.n]:1,pg=r.n<6?M.max(0,M.min(1,(r.rp-pvRT[r.n])/nx)):1,p0=r.n<6?M.max(0,M.min(1,(r.rp-r.d-pvRT[r.n])/nx)):1;
el.innerHTML='<div class="zt">'+(r.w?'MENANG':'KALAH')+'</div><div class="zs">'+r.s+'  -  lawan '+r.nm+'</div><div class="zc"><canvas data-rk="'+r.n+'" width="168" height="168"></canvas><div class="zk"><b>'+pvRN[r.n]+'</b><span>'+r.rp+' RP'+(r.n<6?'  -  '+(pvRT[r.n+1]-r.rp)+' RP lagi':'')+'</span><div class="zp"><i style="width:'+p0*100+'%"></i></div></div></div><div class="zr"><div class="zd '+(r.d>0?'up':'dn')+'">'+(r.d>0?'+':'')+r.d+' RP</div>'+(r.w?'<div class="zq"><em></em>+'+r.c+' koin</div>':'')+'</div>'+(r.n<r.o?'<div class="zx">Turun pangkat ke '+pvRN[r.n]+'</div>':'')+'<button id="pvg">Cari Lawan Lagi</button><button id="pvh">Menu</button>';
document.body.appendChild(el);
rkStart();
if(!q)pvSn(r.w?'pvWin':'pvLose');
if(r.w)setTimeout(()=>pvSn('pvCoin'),q?500:900);
setTimeout(()=>{const i=el.querySelector('.zp i');if(i)i.style.width=pg*100+'%'},60);
el.addEventListener('click',e=>{
if(e.target.closest('#pvg')){pvSn('tap');el.remove();menuGo();pvFind();return}
if(e.target.closest('#pvh')){pvSn('tap');el.remove();menuGo()}
});
}
