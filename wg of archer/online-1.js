let olRole='',olOn='',olH=0,olG=0,olD=0,olSolo=0,olBusy=0,olPeer=null,olC=null,olCs=[],olMode='c',olSz=2,olCode='',olMsgT='',olMt=null,olLb={n:[],m:'c',z:2};
let olOp={r:null,a:0,w:0,v:0,n:''},olNid=0,olDt=0,olEt=0,olBn=null,olLm=null,olDx=0,olTm=1,olLt=0;
const OLK=Object.keys(p),OLX=OLK.indexOf('x'),OLF=OLK.indexOf('f'),OLV=OLK.indexOf('vx');
const OLS=new WeakSet(),OLB=new Set(['q','b','m']),OLZ=['Solo','Duo','Trio','Squad'];
const OLN=()=>String(pf.nm||'Pemanah').slice(0,14);
const olEsc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const olCss=document.createElement('style');
olCss.textContent='#olp{position:fixed;inset:0;z-index:12;display:none;align-items:center;justify-content:center;background:rgba(6,9,18,.88);font-family:system-ui,sans-serif;color:#e8dfcc;padding:calc(10px + env(safe-area-inset-top,0px)) 14px 10px;box-sizing:border-box}#olp.on{display:flex}.olc{width:min(460px,100%);max-height:100%;overflow-y:auto;display:flex;flex-direction:column;gap:8px;padding:14px;box-sizing:border-box;border-radius:14px;background:rgba(18,24,38,.97);border:1px solid rgba(220,228,244,.16)}.olc b{font-size:17px;color:#ffd45a}.olc span,.olc em{font-size:12px;font-style:normal;color:rgba(232,223,204,.75)}.olr{display:flex;gap:6px;flex-wrap:wrap}.olr>*{flex:1 1 90px}.olb{display:flex;align-items:center;justify-content:center;min-height:32px;padding:0 10px;border-radius:16px;font-size:12px;font-weight:600;background:rgba(212,176,120,.3);border:1px solid rgba(228,198,146,.45);color:#f4e8d2;cursor:pointer;text-align:center;-webkit-tap-highlight-color:transparent;box-sizing:border-box}.olb.on{background:#c9a24a;color:#2a2008}.olb.gh{background:none;border-color:rgba(220,228,244,.18);color:rgba(222,229,244,.75)}.olk{font-size:30px;font-weight:800;letter-spacing:.2em;text-align:center;color:#ffe09a;cursor:pointer}#oli{height:34px;border-radius:10px;border:1px solid rgba(220,228,244,.25);background:rgba(8,12,22,.7);color:#fff;font-size:16px;text-align:center;letter-spacing:.2em;text-transform:uppercase;outline:none;box-sizing:border-box;width:100%}.olq{display:flex;justify-content:space-between;align-items:center;padding:5px 9px;border-radius:8px;background:rgba(255,255,255,.06);font-size:13px}.mdc.mol{background:repeating-linear-gradient(135deg,rgba(255,255,255,.07) 0 6px,transparent 6px 12px),linear-gradient(110deg,#0f4a3a,#4be0a8)}';
document.head.appendChild(olCss);
const olEl=document.createElement('div');
olEl.id='olp';
document.body.appendChild(olEl);
function olBody(){
if(olMt)return '<b>'+olEsc(olMt[0])+'</b><span>'+olEsc(olMt[1])+'</span><div class="olb on" data-o="ok">Oke</div>';
let h='<b>Mabar Online</b>';
if(!olRole){
h+='<span>Nama kamu: '+olEsc(OLN())+'. Nama ini terlihat oleh temanmu.</span><div class="olb on" data-o="mk">Buat Room</div><input id="oli" maxlength="5" placeholder="KODE ROOM" autocomplete="off" spellcheck="false"><div class="olb" data-o="jn">Gabung Room</div><div class="olb" data-o="bt">Duo / Trio / Squad bareng Bot Pro</div>';
}else{
const ho=olRole=='h',nm=ho?[OLN()].concat(olCs.filter(o=>o.ok).map(o=>o.n)):(olLb.n||[]),md=ho?olMode:olLb.m,z=ho?olSz:olLb.z;
if(!olSolo)h+='<span>Kode room, kasih ke temanmu:</span><div class="olk" data-o="cp">'+olEsc(olCode)+'</div>';
h+=nm.map((n,i)=>'<div class="olq"><span>'+olEsc(n)+'</span><em>'+(i?'Teman':'Host')+'</em></div>').join('');
if(ho){
if(!olSolo)h+='<div class="olr"><div class="olb'+(md=='c'?' on':'')+'" data-o="mc">Boss Rush Co-op</div><div class="olb'+(md=='d'?' on':'')+'" data-o="md">1 vs 1</div></div>';
if(md=='c')h+='<span>Ukuran tim, slot kosong diisi Bot Pro:</span><div class="olr">'+OLZ.map((t,i)=>'<div class="olb'+(z==i+1?' on':'')+'" data-o="z" data-z="'+(i+1)+'">'+t+'</div>').join('')+'</div>';
else h+='<span>Duel 3 babak lawan temanmu. Butuh tepat 2 pemain.</span>';
h+='<div class="olb on" data-o="go">Mulai</div>';
}else h+='<span>'+(md=='d'?'Mode 1 vs 1':'Boss Rush Co-op, tim '+OLZ[(z||1)-1])+'. Menunggu host memulai...</span>';
h+='<div class="olb gh" data-o="x">Keluar</div>';
}
if(olMsgT)h+='<em>'+olEsc(olMsgT)+'</em>';
return h;
}
function olUI(){
const i=document.getElementById('oli'),v=i?i.value:'';
olEl.innerHTML='<div class="olc">'+olBody()+'</div>';
const n=document.getElementById('oli');
if(n&&v)n.value=v;
}
function olSay(t){olMsgT=t;olUI()}
function olOpen(){
if(SPC||sv.sel==6){olMt=['Belum didukung','Karakter ini belum bisa dipakai di mabar online. Pilih karakter panah lain.'];}
else olMt=null;
mdClose();olEl.classList.add('on');olUI();
}
function olModal(t,x){olMt=[t,x];olEl.classList.add('on');olUI()}
function olSend(c,m){try{if(c&&c.open)c.send(m)}catch(x){}}
function olAll(m){for(const o of olCs)if(o.ok)olSend(o.c,m)}
function olOpC(){return olRole=='g'?olC:(olCs[0]&&olCs[0].c)}
function olPc(id){const o=olCs.find(z=>z.id==id);return o&&o.c}
function olLoad(){
return new Promise((ok,no)=>{
if(window.Peer)return ok();
const s=document.createElement('script');
s.src='https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js';
s.onload=()=>window.Peer?ok():no();
s.onerror=()=>no();
document.head.appendChild(s);
});
}
function olGen(){
const a='ABCDEFGHJKMNPQRSTUVWXYZ23456789';
let s='';
for(let i=0;i<5;i++)s+=a[M.floor(M.random()*a.length)];
return s;
}
function olKill(){
const pr=olPeer;
olPeer=null;olC=null;olCs=[];olRole='';olOn='';olH=0;olG=0;olD=0;olSolo=0;olBusy=0;
for(let i=S.length-1;i>=0;i--)if(S[i].ol)S.splice(i,1);
if(pr)setTimeout(()=>{try{pr.destroy()}catch(x){}},400);
}
function olLeave(){
if(!olRole&&!olOn&&!olPeer)return;
try{
if(olRole=='g')olSend(olC,{t:'bye'});
else if(olRole=='h')olAll({t:'bye'});
}catch(x){}
olKill();
}
function olFin(t,x){
olLeave();
menuGo();
olModal(t,x);
}
function olLost(m){
if(!olRole&&!olOn)return;
if(olOn){
if(olD&&duS==2&&duF)return;
olFin('Terputus',m);
return;
}
olKill();olMsgT=m;olUI();
}
function olHostGo(){
if(olBusy)return;
olBusy=1;olSay('Menghubungkan...');
olLoad().then(()=>{
let n=0;
const t=()=>{
const code=olGen(),pr=new Peer('wgoas-'+code);
pr.on('open',()=>{olPeer=pr;olCode=code;olRole='h';olSolo=0;olMode='c';olBusy=0;olMsgT='';olUI()});
pr.on('connection',olAcc);
pr.on('disconnected',()=>{try{pr.reconnect()}catch(x){}});
pr.on('error',e=>{
if(e.type=='unavailable-id'&&n++<5){try{pr.destroy()}catch(x){}t();return}
if(olPeer===pr)return;
olBusy=0;olSay('Gagal membuat room');
});
};
t();
}).catch(()=>{olBusy=0;olSay('Gagal memuat WebRTC. Cek koneksi internet.')});
}
function olJoin(){
const i=document.getElementById('oli'),code=(i?i.value:'').trim().toUpperCase();
if(code.length<4){olSay('Masukkan kode room');return}
if(olBusy)return;
olBusy=1;olSay('Menghubungkan...');
olLoad().then(()=>{
const pr=new Peer();
olPeer=pr;
const to=setTimeout(()=>{if(!olC){olKill();olSay('Room tidak ditemukan')}},12000);
pr.on('open',()=>{
const c=pr.connect('wgoas-'+code,{reliable:true,serialization:'json'});
c.on('open',()=>{
clearTimeout(to);
olC=c;olRole='g';olCode=code;olBusy=0;olMsgT='';
c.send({t:'hi',n:OLN()});
olUI();
});
c.on('data',olGm);
c.on('close',()=>olLost('Koneksi ke host terputus'));
c.on('error',()=>olLost('Koneksi ke host terputus'));
});
pr.on('error',e=>{
clearTimeout(to);
if(olRole)return;
olKill();
olSay(e.type=='peer-unavailable'?'Room tidak ditemukan':'Gagal terhubung');
});
}).catch(()=>{olBusy=0;olSay('Gagal memuat WebRTC. Cek koneksi internet.')});
}
function olAcc(c){
if(olOn||olCs.length>=3||olSolo){
c.on('open',()=>{olSend(c,{t:'no'});setTimeout(()=>{try{c.close()}catch(x){}},400)});
return;
}
const o={c,id:c.peer,n:'',ok:0,lt:performance.now()};
olCs.push(o);
c.on('data',m=>olHm(o,m));
c.on('close',()=>olDrop(o));
c.on('error',()=>olDrop(o));
}
function olDrop(o){
const i=olCs.indexOf(o);
if(i<0)return;
olCs.splice(i,1);
for(let j=S.length-1;j>=0;j--)if(S[j].pid==o.id)S.splice(j,1);
if(olOn=='d'){
if(duS==2&&duF)return;
olFin('Lawan keluar','Kamu menang karena lawan terputus.');
return;
}
if(olOn=='c'){ban(o.n+' keluar');olTm=M.max(1,olTm-1);return}
if(olRole=='h')olLbx();
}
function olLbx(){
const n=[OLN()].concat(olCs.filter(o=>o.ok).map(o=>o.n));
olAll({t:'lb',n,m:olMode,z:olSz});
olUI();
}
