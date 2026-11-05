function rkDraw(c,t,tm){
const x=c.getContext('2d'),P=pvRK[t],pu=.5+.5*M.sin(tm*2.2+t),k=t/6;
x.setTransform(c.width/96,0,0,c.width/96,0,0);
x.clearRect(0,0,96,96);
x.lineJoin='round';x.lineCap='round';x.globalAlpha=1;
x.globalCompositeOperation='lighter';
let q=x.createRadialGradient(48,50,6,48,50,48);
q.addColorStop(0,'rgba('+P[3]+','+(.18+.3*pu*(.3+k))+')');q.addColorStop(1,'rgba('+P[3]+',0)');
x.fillStyle=q;x.fillRect(0,0,96,96);
x.globalCompositeOperation='source-over';
if(t==3){
x.strokeStyle=P[2];x.fillStyle=P[2];x.lineWidth=3;
rkAr(x,22,86,74,16);rkAr(x,74,86,22,16);
}
if(t==5){
for(const s of[-1,1])for(let i=0;i<7;i++){
const th=.5+i*.35,px=48+s*35*M.sin(th),py=50+35*M.cos(th),an=M.atan2(-M.sin(th)*35,s*M.cos(th)*35);
x.save();x.translate(px,py);x.rotate(an+s*.5);
x.beginPath();x.ellipse(0,0,7,2.8,0,0,TAU);x.fillStyle=i%2?P[0]:P[2];x.fill();x.strokeStyle=P[1];x.lineWidth=1;x.stroke();
x.restore();
}
}
if(t==6){
for(const s of[-1,1]){
x.save();x.translate(48+s*10,46);x.scale(s,1);x.rotate(M.sin(tm*2.4)*.07);
for(let i=0;i<5;i++){
x.save();x.rotate(-1.1+i*.36);
x.beginPath();x.ellipse(17-i,0,16-i*1.5,4.2,0,0,TAU);
q=x.createLinearGradient(0,0,34,0);q.addColorStop(0,P[0]);q.addColorStop(1,P[2]);
x.fillStyle=q;x.fill();x.strokeStyle=P[1];x.lineWidth=1.1;x.stroke();
x.restore();
}
x.restore();
}
}
q=x.createLinearGradient(20,12,76,87);q.addColorStop(0,P[2]);q.addColorStop(.45,P[0]);q.addColorStop(1,P[1]);
rkSh(x);x.fillStyle=q;x.fill();x.strokeStyle=P[1];x.lineWidth=2.4;x.stroke();
x.save();x.translate(48,50);x.scale(.82,.82);x.translate(-48,-50);rkSh(x);x.globalAlpha=.55;x.strokeStyle=P[2];x.lineWidth=1.6;x.stroke();x.restore();
x.save();rkSh(x);x.clip();
const n=[1,2,2,1,2,1,2][t],y0=[44,38,50,66,52,62,56][t];
for(let i=0;i<n;i++){
const y=y0+i*11;
x.strokeStyle=P[1];x.lineWidth=7;x.beginPath();x.moveTo(30,y);x.lineTo(48,y+11);x.lineTo(66,y);x.stroke();
x.strokeStyle=P[2];x.lineWidth=4;x.stroke();
}
x.fillStyle=P[2];x.strokeStyle=P[1];x.lineWidth=1.6;
if(t==2){rkSt(x,48,32,10);x.fill();x.stroke()}
if(t==3){x.strokeStyle=P[2];x.lineWidth=3.2;rkAr(x,48,62,48,26)}
if(t>=4){
const r=[0,0,0,0,9,11,13][t],cy=t==5?38:36;
x.fillStyle=P[2];rkGl(x,48,cy,r);
x.fillStyle='#fff';rkGl(x,48,cy,r*.45);
if(t==6){
x.globalCompositeOperation='lighter';x.strokeStyle='rgba('+P[3]+',.7)';x.lineWidth=1.6;
for(let i=0;i<8;i++){const a=tm*.6+i*PI/4;x.beginPath();x.moveTo(48+M.cos(a)*r*1.3,cy+M.sin(a)*r*1.3);x.lineTo(48+M.cos(a)*r*2.3,cy+M.sin(a)*r*2.3);x.stroke()}
x.globalCompositeOperation='source-over';
}
}
x.globalCompositeOperation='lighter';
const sx=((tm*.45)%1)*150-30,gs=x.createLinearGradient(sx-14,0,sx+14,0);
gs.addColorStop(0,'rgba(255,255,255,0)');gs.addColorStop(.5,'rgba(255,255,255,.38)');gs.addColorStop(1,'rgba(255,255,255,0)');
x.fillStyle=gs;x.fillRect(sx-14,0,28,96);
x.globalCompositeOperation='source-over';
x.restore();
if(t==4){
x.save();x.translate(0,M.sin(tm*2));
x.beginPath();x.moveTo(28,22);x.lineTo(30,6);x.lineTo(40,14);x.lineTo(48,2);x.lineTo(56,14);x.lineTo(66,6);x.lineTo(68,22);x.closePath();
q=x.createLinearGradient(0,2,0,22);q.addColorStop(0,'#fff0b0');q.addColorStop(1,'#d9a020');
x.fillStyle=q;x.fill();x.strokeStyle='#6b4a08';x.lineWidth=1.8;x.stroke();
for(const j of[[30,6],[48,2],[66,6]]){x.beginPath();x.arc(j[0],j[1],2.4,0,TAU);x.fillStyle=P[2];x.fill()}
x.restore();
}
x.globalCompositeOperation='lighter';
if(t==5){
for(let i=0;i<6;i++){
const fx=24+i*9.6,fl=9+6*M.sin(tm*9+i*1.7)+3*M.sin(tm*13+i),w=M.sin(tm*7+i)*2;
x.fillStyle='rgba(255,'+(110+i*22)+',60,.5)';
x.beginPath();x.moveTo(fx-4,90);x.quadraticCurveTo(fx-3+w,90-fl*.6,fx+w*1.4,90-fl);x.quadraticCurveTo(fx+3+w,90-fl*.5,fx+4,90);x.closePath();x.fill();
}
}
if(t==6){x.strokeStyle='hsla('+((tm*70)%360|0)+',90%,65%,.55)';x.lineWidth=2;x.beginPath();x.arc(48,50,45,0,TAU);x.stroke()}
x.fillStyle='#fff';
for(let i=0;i<t;i++){
const a=tm*(.8+i*.13)+i*2.4,sx2=48+M.cos(a)*(38+(i%2)*5),sy2=50+M.sin(a)*34,z=M.abs(M.sin(tm*3+i));
x.globalAlpha=.35+.65*z;
rkGl(x,sx2,sy2,2.5+2.5*z);
}
x.globalAlpha=1;x.globalCompositeOperation='source-over';
}
let rkOn=0;
function rkLoop(now){
let v=0;
for(const c of document.querySelectorAll('canvas[data-rk]'))if(c.offsetParent!==null){v=1;rkDraw(c,+c.dataset.rk,now/1000)}
if(v)requestAnimationFrame(rkLoop);else rkOn=0;
}
function rkStart(){if(!rkOn){rkOn=1;requestAnimationFrame(rkLoop)}}
function pvCardH(nm,tr,bn,rp,w,l,lv){
const b=pvBN[bn];
return '<div class="pb" style="background:repeating-linear-gradient('+(135+bn*20)+'deg,rgba(255,255,255,.08) 0 6px,transparent 6px 12px),linear-gradient(110deg,'+b[0]+','+b[1]+')"></div><div class="pa"><canvas data-rk="'+tr+'" width="144" height="144"></canvas></div><div class="pn">'+esc(String(nm))+'</div><div class="pk" style="color:rgb('+pvRK[tr][3]+')">'+pvRN[tr]+'  -  '+rp+' RP</div>'+(lv==null?'':'<div class="pl"><span class="lv l'+lv+'">'+pvLN[lv]+'</span></div>')+'<div class="ps">Menang '+w+'  Kalah '+l+'</div>';
}
function pvCard(){
const c=document.querySelector('#md .m4');
if(!c)return;
const tr=pvTier(pvS.rp);
c.querySelector('canvas').dataset.rk=tr;
document.getElementById('mdp').textContent=pvRN[tr]+'  -  '+pvS.rp+' RP  -  Menang '+pvS.w+'  Kalah '+pvS.l;
rkStart();
}
function pvRanks(){
if(document.getElementById('pvr'))return;
const r=pvS.rp,cur=pvTier(r),el=document.createElement('div');
el.id='pvr';
let h='<div class="pt">Pangkat PvP</div><div class="pi">'+(cur<6?'RP kamu '+r+'  -  '+(pvRT[cur+1]-r)+' RP lagi menuju '+pvRN[cur+1]:'RP kamu '+r+'  -  Pangkat tertinggi')+'</div><div class="rl">';
for(let i=0;i<7;i++)h+='<div class="rw'+(i==cur?' cu':'')+'" style="border-color:'+(i==cur?'rgb('+pvRK[i][3]+')':'rgba(255,255,255,.15)')+'"><canvas data-rk="'+i+'" width="112" height="112"></canvas><div class="rt"><b style="color:rgb('+pvRK[i][3]+')">'+pvRN[i]+'</b><span>'+pvRT[i]+(i<6?' - '+(pvRT[i+1]-1):'+')+' RP</span></div>'+(i==cur?'<i class="rc">KAMU</i>':'')+'</div>';
el.innerHTML=h+'</div><button id="pvc">Tutup</button>';
document.body.appendChild(el);
el.addEventListener('click',e=>{if(e.target.closest('#pvc'))el.remove()});
rkStart();
}
function pvBlk(){
const e=document.getElementById('mdp');
e.textContent=(SPC?'Lassy × Kitty':'Light magician')+' tidak boleh dipakai di mode PvP. Ganti karakter dulu.';
setTimeout(pvCard,2500);
}
function pvFind(){
if(document.getElementById('pvo'))return;
const o=pvOpp(),dur=3+45*M.pow(M.random(),2.4),el=document.createElement('div');
el.id='pvo';
el.innerHTML='<div class="pt" id="pvt">Mencari lawan</div><div class="pr"><div class="pc" id="pvm"></div><div class="pv">VS</div><div class="pc" id="pvp"><div class="pb" style="background:#1a2238"></div><div class="pa"><div class="rd"></div></div><div class="pn" id="pvq">...</div><div class="pk">Mencari...</div><div class="ps">&nbsp;</div></div></div><div class="pi" id="pvi"></div><button id="pvx">Batal</button>';
document.body.appendChild(el);
const me=el.querySelector('#pvm'),op=el.querySelector('#pvp'),tt=el.querySelector('#pvt'),inf=el.querySelector('#pvi'),nq=el.querySelector('#pvq');
const rm=()=>{
const tr=pvTier(pvS.rp);
me.style.borderColor='rgb('+pvRK[tr][3]+')';
me.innerHTML=pvCardH(pf.nm.trim()||'Pemain',tr,pvS.bn,pvS.rp,pvS.w,pvS.l);
};
rm();
rkStart();
let t0=performance.now(),done=0,to=0;
const stop=()=>{clearInterval(iv);clearTimeout(to);el.remove()};
const iv=setInterval(()=>{
const s=(performance.now()-t0)/1000;
if(s<dur){
nq.textContent=pvNM[M.floor(rnd(0,pvNM.length))];
tt.textContent='Mencari lawan'+'...'.slice(0,1+M.floor(s*2)%3);
inf.textContent='Mencari lawan sepadan  '+M.floor(s/60)+':'+('0'+M.floor(s%60)).slice(-2);
}else if(!done){
done=1;
op.style.borderColor='rgb('+pvRK[o.tr][3]+')';
op.innerHTML=pvCardH(o.nm,o.tr,o.bn,o.rp,o.w,o.l,o.lv);
tt.textContent='Lawan ditemukan!';
pvSn('pvFound');
inf.textContent='Pertandingan dimulai...';
to=setTimeout(()=>{stop();pvO=o;runStart(4)},2200);
}
},90);
el.addEventListener('click',e=>{
if(e.target.closest('#pvx')){stop();return}
if(done)return;
if(e.target.closest('#pvm .pn')){
const n=prompt('Nama kamu',pf.nm);
if(n&&n.trim().length>=3){pf.nm=n.trim().slice(0,14);pfSave();pfDraw();rm()}
}else if(e.target.closest('#pvm .pb')){
pvS.bn=(pvS.bn+1)%pvBN.length;pvSave();rm();
}
});
}
function pvEnd(){
if(pvEd||!pvR)return;
pvEd=1;
if(pvR.w&&pvR.n>pvR.o)pvUp();else pvZ(0);
}
