function wnHtml(){
let h='';
for(const s of WND){
const ow=sv.wg.includes(s.k),on=sv.ws==s.k;
const b=!ow?'<div class="bt'+(sv.coins>=s.c?'':' no')+'">'+coinTag+s.c+'</div>':on?'<div class="bt">Lepas</div>':'<div class="bt">Pakai</div>';
h+='<div class="cd wn'+(on?' on':'')+'" data-y="'+s.k+'"><div class="ic ch"><img src="'+wnImg(s.k)+'"></div><b>'+s.n+'</b><small>'+s.d+'</small>'+b+'</div>';
}
{
const ow=sv.jp,b=ow?'<div class="bt ds">Dimiliki</div>':'<div class="bt'+(sv.coins>=3000?'':' no')+'">'+coinTag+3000+'</div>';
h+='<div class="cd wn" data-y="j"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:#ffb86b"><path d="M6 5h5v11H6zM13 5h5v11h-5zM8 16v4M16 16v4M11 9h2"/></svg></div><b>Jetpack</b><small>Khusus Lassy × Kitty, terbang berdua</small>'+b+'</div>';
}
if(sv.wg.length||sv.own.includes(4)||sv.own.includes(5)){
const l=sv.wl;
h+='<div class="cd wn" data-y="u"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:#c9e6a8"><path d="M12 20V5M6 11l6-6 6 6"/></svg></div><b>Kekuatan Sayap</b><small>+'+l*8+'% kecepatan terbang, lebih tinggi'+(l<5?' \u2192 +'+(l+1)*8+'%':'')+'</small>'+lvPips(l)+'<small>Lv '+l+'/5</small>'+(l>=5?'<div class="bt ds">Maks</div>':'<div class="bt'+(sv.coins>=WLU[l]?'':' no')+'">'+coinTag+WLU[l]+'</div>')+'</div>';
}
return h;
}
function buyWn(k){
if(k=='j'){
if(sv.jp)return;
if(sv.coins<3000){
const b=plEl.querySelector('[data-y="j"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=3000;sv.jp=1;save();mList();
return;
}
if(k=='u'){
const l=sv.wl;
if(l>=5)return;
if(sv.coins<WLU[l]){
const b=plEl.querySelector('[data-y="u"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=WLU[l];sv.wl=l+1;save();mList();
return;
}
k=+k;
const s=WND.find(q=>q.k==k);
if(sv.wg.includes(k)){sv.ws=sv.ws==k?0:k;save();mList();return}
if(sv.coins<s.c){
const b=plEl.querySelector('[data-y="'+k+'"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=s.c;sv.wg.push(k);sv.ws=k;save();mList();
}
const SQU=[250,500,900,1400,2000],WLU=[300,600,1000,1600,2400];
function lvPips(l){let pv='';for(let j=0;j<5;j++)pv+='<i'+(j<l?' class="on"':'')+'></i>';return '<div class="lv">'+pv+'</div>'}
function sqHtml(){
let h='';
for(let i=0;i<SC.length;i++){
const ow=sv.sq.includes(i),l=sv.sl[i];
let b,d;
if(!ow){d='Rekan bertarung';b='<div class="bt'+(sv.coins>=SQP[i]?'':' no')+'">'+coinTag+SQP[i]+'</div>'}
else{d='+'+l*15+'% HP dan damage'+(l<5?' \u2192 +'+(l+1)*15+'%':'');b=lvPips(l)+'<small>Lv '+l+'/5</small>'+(l>=5?'<div class="bt ds">Maks</div>':'<div class="bt'+(sv.coins>=SQU[l]?'':' no')+'">'+coinTag+SQU[l]+'</div>')}
h+='<div class="cd sq" data-z="'+i+'"><div class="ic ch"><img src="'+sqImg(i)+'"></div><b>'+SC[i].n+'</b><small>'+d+'</small>'+b+'</div>';
}
return h;
}
function buySq(i){
if(sv.sq.includes(i)){
const l=sv.sl[i];
if(l>=5)return;
if(sv.coins<SQU[l]){
const b=plEl.querySelector('[data-z="'+i+'"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=SQU[l];sv.sl[i]=l+1;save();mList();
return;
}
if(sv.coins<SQP[i]){
const b=plEl.querySelector('[data-z="'+i+'"] .bt');
if(b)b.textContent='Koin kurang';
setTimeout(()=>{if(mView=='t')mList()},900);
return;
}
sv.coins-=SQP[i];sv.sq.push(i);if(sv.eq.length<2)sv.eq.push(i);save();mList();
}
function mOt(){
const st=plEl.scrollTop,sk=SKD.filter(s=>sv.sk.includes(s.k)),G='grid-column:1/-1';
let h='';
if(otT=='s'){
h+='<div class="pq" style="'+G+'">Skill  -  '+sv.ek.length+'/3 dipakai</div>';
if(!sk.length)h+='<div class="pq" style="'+G+'">Belum punya skill, beli di Toko</div>';
for(const s of sk){
const on=sv.ek.includes(s.k);
h+='<div class="cd'+(on?' on':'')+'" data-ek="'+s.k+'"><div class="ic"><svg viewBox="0 0 24 24" style="stroke:'+s.o+'"><path d="'+s.p+'"/></svg></div><b>'+s.n+'</b><small>'+s.d+'</small><div class="bt'+(on?' ds':sv.ek.length>=3?' no':'')+'">'+(on?'Lepas':'Pakai')+'</div></div>';
}
}else{
h+='<div class="pq" style="'+G+'">Squad  -  '+sv.eq.length+'/2 dibawa</div>';
if(!sv.sq.length)h+='<div class="pq" style="'+G+'">Belum punya squad, beli di Toko</div>';
for(const i of sv.sq){
const on=sv.eq.includes(i);
h+='<div class="cd'+(on?' on':'')+'" data-eq="'+i+'"><div class="ic ch"><img src="'+sqImg(i)+'"></div><b>'+SC[i].n+'</b><small>Lv '+sv.sl[i]+'/5</small><div class="bt'+(on?' ds':sv.eq.length>=2?' no':'')+'">'+(on?'Lepas':'Pakai')+'</div></div>';
}
}
plEl.className='';
plEl.innerHTML=h;
plEl.scrollTop=st;
cnEl.textContent=sv.coins;
}
function otFull(q){
const b=plEl.querySelector(q);
if(b)b.textContent='Slot penuh';
setTimeout(()=>{if(mView=='o')mOt()},900);
}
function otSk(k){
if(!sv.sk.includes(k))return;
const i=sv.ek.indexOf(k);
if(i>=0)sv.ek.splice(i,1);
else{
if(sv.ek.length>=3){otFull('[data-ek="'+k+'"] .bt');return}
sv.ek.push(k);
}
save();skSync();mOt();
}
function otSq(i){
if(!sv.sq.includes(i))return;
const j=sv.eq.indexOf(i);
if(j>=0)sv.eq.splice(j,1);
else{
if(sv.eq.length>=2){otFull('[data-eq="'+i+'"] .bt');return}
sv.eq.push(i);
}
save();mOt();
}
const FLT=['none','brightness(1.12) contrast(1.08) saturate(1.25)','sepia(.35) saturate(1.3) hue-rotate(-8deg)','contrast(1.25) saturate(1.15)','grayscale(1)','none'];
const SO=[['gq','Grafik',['Rendah','Sedang','Tinggi']],['fp','FPS',['30','60','Maks']],['fl','Filter',['Normal','Cerah','Hangat','Kontras','Hitam Putih','Shadow']],['bg','Background',['Normal','Arena','Gelap','Gurun','Salju','Gunung Berapi']]];
const WAL='https://www.mediafire.com/file/oncv6b55oniqapy/A.+WOAS_1.apk/file';
let waP=0;
function stApply(){
cv.style.filter=FLT[ST.fl];
}
function stSave(){try{localStorage.setItem(STK,JSON.stringify(ST))}catch(x){}}
const LYK='pemanah_btn_v1';
let lyC={};
const lyL=bt.concat([DPJ]);
try{const o=JSON.parse(localStorage.getItem(LYK)||'null');if(o&&typeof o=='object')for(const b of lyL){const v=o[b.k];if(v&&isFinite(v.x)&&isFinite(v.y)&&isFinite(v.s))lyC[b.k]={x:M.max(.02,M.min(.98,+v.x)),y:M.max(.02,M.min(.98,+v.y)),s:M.max(.5,M.min(2,+v.s))}}}catch(x){}
const lyB=new Map(lyL.map(b=>{const q=getComputedStyle(b.el);return[b.k,[parseFloat(q.width)||56,parseFloat(q.height)||56]]}));
function lySave(){try{localStorage.setItem(LYK,JSON.stringify(lyC))}catch(x){}}
function lyOne(b){
const c=lyC[b.k],e=b.el,sg=e.querySelector('svg');
if(!c){e.style.left=e.style.top=e.style.right=e.style.bottom=e.style.width=e.style.height='';if(sg)sg.style.width=sg.style.height='';return}
const z=lyB.get(b.k),w=z[0]*c.s,h=z[1]*c.s;
e.style.width=w+'px';e.style.height=h+'px';
e.style.left=(c.x*innerWidth-w/2)+'px';e.style.top=(c.y*innerHeight-h/2)+'px';e.style.right='auto';e.style.bottom='auto';
if(sg)sg.style.width=sg.style.height=22*c.s+'px';
}
function lyApply(){for(const b of lyL)lyOne(b)}
addEventListener('resize',lyApply);
lyApply();
let lySel=null,lyDr=null;
const lyEl=document.createElement('div');
lyEl.id='le';
lyEl.innerHTML='<div id="lt"><div data-lo="m">-</div><div id="ls"></div><div data-lo="p">+</div><div data-lo="r">Reset</div><div data-lo="d" class="ok">Selesai</div></div>';
document.body.appendChild(lyEl);
const lsEl=lyEl.querySelector('#ls');
function lyLb(){lsEl.textContent=lySel?'Ukuran '+M.round(lyC[lySel.k].s*100)+'%':'Tap & geser tombol'}
function lyEns(b){
if(!lyC[b.k]){const r=b.el.getBoundingClientRect();lyC[b.k]={x:(r.left+r.width/2)/innerWidth,y:(r.top+r.height/2)/innerHeight,s:1}}
return lyC[b.k];
}
function lySet(b){
if(lySel)lySel.el.classList.remove('sl');
lySel=b;
if(b){lyEns(b);b.el.classList.add('sl')}
lyLb();
}
function lyEdit(){document.body.classList.add('le');lySet(null)}
function lyEnd(){document.body.classList.remove('le');lyDr=null;lySet(null);lySave()}
function lyHit(x,y){
let o=null,bd=1e9;
for(const b of lyL){
const r=b.el.getBoundingClientRect();
if(!r.width||x<r.left-12||x>r.right+12||y<r.top-12||y>r.bottom+12)continue;
const d=M.hypot(x-(r.left+r.width/2),y-(r.top+r.height/2));
if(d<bd){bd=d;o=b}
}
return o;
}
lyEl.addEventListener('contextmenu',e=>e.preventDefault());
lyEl.addEventListener('pointerdown',e=>{
e.stopPropagation();
if(e.target.closest('#lt'))return;
e.preventDefault();
const h=lyHit(e.clientX,e.clientY);
lySet(h);
if(h){const c=lyEns(h);lyOne(h);lyDr={id:e.pointerId,b:h,dx:e.clientX-c.x*innerWidth,dy:e.clientY-c.y*innerHeight};try{lyEl.setPointerCapture(e.pointerId)}catch(x){}}
});
