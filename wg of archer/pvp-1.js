const PVK='pemanah_pvp_v1';
const pvRN=['Perunggu','Perak','Kapten','Hunter','Raja','Juara','WG'];
const pvRT=[0,120,300,520,800,1150,1600];
const pvRK=[
['#c98a4b','#6b3d17','#f0b87a','255,170,90'],
['#cfd8e6','#6e7b92','#ffffff','190,215,255'],
['#4f8fe0','#1d3f7a','#a9d0ff','110,170,255'],
['#3fbf8a','#0f5a3e','#9af0c8','90,230,170'],
['#a45be0','#4a1f7a','#e2bdff','190,120,255'],
['#e5503f','#7a1410','#ffb09a','255,110,80'],
['#ffd45a','#a8610a','#fff6c8','255,225,120']
];
const pvBN=[['#12306b','#3aa0e8'],['#4a0f1c','#e0643d'],['#0f4a3a','#4be0a8'],['#3a1a6b','#b46bff'],['#5a3a08','#ffd45a'],['#143a4a','#7fe0e8'],['#4a1040','#ff7ac0'],['#222a38','#8fa0c0']];
const pvNH=['Rizky','Dimas','Aldi','Farel','Naufal','Bagas','Raka','Fikri','Alvin','Galih','Dani','Yoga','Hafiz','Reza','Ilham','Arya','Zidan','Kevin','Rama','Satria','Bayu','Fajar','Wahyu','Putra','Dewa','Angga','Tegar','Revan','Kenzo','Rafi','Nando','Gilang','Vino','Denis','Lutfi','Akbar','Habib','Irfan','Zaki','Budi','Putri','Nadia','Dewi','Rina','Tiara','Salsa','Nisa','Dina','Alex','Mike','Jason','Liam','Chris','Sam','Ryan','Hana','Mei','Kenji','Yuki','Carlos','Andre','Tomas','Lukas','Adit','Rendi','Fahri','Cahya','Mira','Sinta'];
const pvNA=['Naruto','Sasuke','Luffy','Zoro','Goku','Gojo','Levi','Eren','Killua','Saitama','Itachi','Kakashi','Plus Ultra','Dattebayo','Yare Yare Daze','Za Warudo','Bankai','Nakama','Gear Fifth','Tuturu'];
const pvNW=['Bayangan','Kopi Susu','Tukang Ngopi','Rajawali','Santuy','Mager','Es Teh','Elang','Macan','Rebahan','Anak Senja','Pemanah Sepi','Noob Master','Nasi Goreng','Kucing Oren','Lagi Gabut','Badai','Pelita','Serigala','Harimau','Garuda','Jagoan Neon','Si Paling Jago','Bintang','Kabut','Petir','Naga','Pendekar','Ksatria','Rubah','Sniper','Ghost','Shadow','Falcon','Storm','Phoenix','Viper','Raven','Blaze','Frost'];
const pvNT=['ga bisa tidur','ampun bang','gas terus','jangan nyerah','lagi belajar','no mercy','just chill','one shot','try me','kalem aja','wkwk','hehe','siapa takut','ayo main','cuma iseng','santai bos','anak rumahan','tobat bang','mau menang','lag dikit','bukan bot','real human','1 panah 1 kill','gamer biasa','ngantuk berat','besok libur','masih belajar','coba lagi'];
const pvNS=['XD','99','07','77','21','26','ID','YT','Pro','Jr','TV','Boy','Max','Sky','Z','01','ofc'];
const pvPk=a=>a[M.floor(M.random()*a.length)];
const pvRn=n=>M.floor(M.random()*n);
const pvSM='ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ';
const pvSTY=[[0x1D400,0x1D41A],[0x1D468,0x1D482],[0x1D4D0,0x1D4EA],[0x1D56C,0x1D586],[0x1D5D4,0x1D5EE],[0x1D63C,0x1D656],[0x1D670,0x1D68A],[0xFF21,0xFF41],[0x24B6,0x24D0]];
const pvDC=['ツ','ッ','☆','★','彡','♛','✦','ღ','〆','☠','⚡','✿'];
const pvCv=(s,a,b)=>Array.from(s).map(c=>{const x=c.charCodeAt(0);if(x>=65&&x<=90)return String.fromCodePoint(a+x-65);if(x>=97&&x<=122)return String.fromCodePoint(b+x-97);return c}).join('');
const pvSc=s=>Array.from(s.toLowerCase()).map(c=>{const x=c.charCodeAt(0);return x>=97&&x<=122?pvSM[x-97]:c}).join('');
function pvGn(){
const r=M.random();
let n;
if(r<.1){
const b=pvPk(M.random()<.7?pvNH:pvNW).replace(/[^A-Za-z]/g,'');
const t=pvPk(pvSTY),q=M.random();
if(q<.3)n=pvCv(b,t[0],t[1]);
else if(q<.5)n=pvSc(b);
else if(q<.75)n=pvPk(pvDC)+pvCv(b,t[0],t[1])+pvPk(pvDC);
else n=pvCv(b,t[0],t[1])+pvPk(['ツ','ッ','☆','★']);
}else{
const q=M.random();
if(q<.3)n=pvPk(pvNH);
else if(q<.45)n=pvPk(pvNH)+pvPk(pvNS);
else if(q<.62)n=pvPk(pvNH)+(10+pvRn(990));
else if(q<.74)n=pvPk(pvNH).toLowerCase()+(1+pvRn(9999));
else if(q<.82)n=pvPk(pvNA);
else if(q<.92)n=pvPk(pvNW);
else if(q<.97)n=pvPk(pvNW)+' '+(1+pvRn(999));
else n=pvPk(pvNW).toLowerCase()+pvRn(99);
}
return Array.from(n).slice(0,14).join('').trim()
}
const pvNM=[];
for(let i=0;i<3000;i++)pvNM.push(pvGn());
const PVC=[
{dg:.18,r0:.28,r1:.5,er:.04,eb:.35,em:.12,c0:.7,c1:1.3,ct:.85,sp:240,fl:.12,sh:0,hp:420,dm:.04,qc:16,uc:95,hu:1,ug:.55,hb:.55,u0:1.5,u1:5},
{dg:.55,r0:.1,r1:.22,er:.02,eb:.2,em:.09,c0:.35,c1:.7,ct:.7,sp:285,fl:.35,sh:1,hp:700,dm:.055,qc:10,uc:70,hu:1,ug:.9,hb:.35,u0:.8,u1:2.5},
{dg:.97,r0:.01,r1:.04,er:.006,eb:.06,em:.05,c0:.12,c1:.3,ct:.65,sp:320,fl:.55,sh:1,hp:900,dm:.065,qc:4,uc:35,hu:1,ug:1.2,hb:.1,u0:.1,u1:.6}
];
const pvTier=r=>{let t=0;for(let i=1;i<7;i++)if(r>=pvRT[i])t=i;return t};
const pvS={rp:0,w:0,l:0,nm:'',bn:0,pd:-1};
try{
const o=JSON.parse(localStorage.getItem(PVK)||'null');
if(o){pvS.rp=M.max(0,o.rp|0);pvS.w=M.max(0,o.w|0);pvS.l=M.max(0,o.l|0);pvS.nm=String(o.nm||'').slice(0,14);pvS.bn=M.max(0,o.bn|0)%pvBN.length;pvS.pd=o.pd==null?-1:M.max(-1,M.min(6,o.pd|0))}
}catch(x){}
if(!pvS.nm){pvS.nm='Pemanah'+(1000+M.floor(rnd(0,9000)));pvS.bn=M.floor(rnd(0,pvBN.length))}
if(pvS.pd>=0){const t0=pvTier(pvS.rp);pvS.rp=M.max(0,pvS.rp-(14+(pvS.pd<t0?4:0)));pvS.l++;pvS.pd=-1;pvSave()}
let pvR=null,pvEd=0,pvMo=0,pvUc=0,pvFb=.6,pvAb=0;
const pvFm=()=>M.max(pvO.lv>1?.9:.1,M.min(1,pvFb-.1*pvMo+rnd(-.08,.08)));
function pvMd(w,b){
pvUc=M.min(1,b.uch);
pvMo=w?(M.random()<.7?1:0):(M.random()<.6?-1:0);
}
const pvSn=k=>{if(window.pvSfx)window.pvSfx(k)};
function pvSave(){try{localStorage.setItem(PVK,JSON.stringify(pvS))}catch(x){}}
const pvLv=t=>t<2?0:t<3?1:2;
const pvLN=['Noob','Sedang','Pro'];
function pvOpp(){
const tp=pvTier(pvS.rp),r=M.random();
let tr=r<.35?tp-1-(M.random()<.4?1:0):r<.7?tp+(M.random()<.5?0:(M.random()<.5?-1:1)):tp+1+(M.random()<.3?1:0);
tr=M.max(0,M.min(6,tr));
const lv=pvLv(tr),vt=lv==0?M.floor(rnd(0,2)):lv==1?M.floor(rnd(1,4)):M.floor(rnd(3,6)),sqn=lv==0?(M.random()<.4?1:0):lv==1?1:(M.random()<.6?2:1),w=M.floor(rnd(20,400));
return{nm:pvNM[M.floor(rnd(0,pvNM.length))],tr,bn:M.floor(rnd(0,pvBN.length)),lv,vt,sq:[0,1,2].sort(()=>M.random()-.5).slice(0,sqn),cf:PVC[lv],rp:pvRT[tr]+M.floor(rnd(0,(pvRT[tr+1]||2000)-pvRT[tr])),w,l:M.floor(rnd(10,w))};
}
function pvGo(){
duCf=pvO.cf;duVt=pvO.vt;pvOn=1;pvD='';pvEd=0;pvMo=0;pvUc=0;pvFb=[rnd(.25,.5),rnd(.45,.72),rnd(.9,.99)][pvO.lv];pvAb=rnd(-.025,.025);pvS.pd=pvO.tr;pvSave();
mmOn=1;duOn=1;duR=1;duP=0;duB=0;duF=0;WV.n=1;WV.q=0;WV.bs=0;WV.bt=0;spT=0;
skSync();
duNew();
}
function pvRes(w){
const o=pvTier(pvS.rp),d=w?24+(pvO.tr>o?8:0):-(14+(pvO.tr<o?4:0)),c=w?M.round(20*(1+.2*o)):0;
pvS.rp=M.max(0,pvS.rp+d);
if(w){pvS.w++;sv.coins+=c;save()}else pvS.l++;
const n=pvTier(pvS.rp);
pvS.pd=-1;
pvSave();
pvR={w,o,n,d,c,rp:pvS.rp,s:duP+' - '+duB,nm:pvO.nm};
pvD=(d>0?'+':'')+d+' RP'+(w?'  -  +'+c+' koin':'')+(n>o?'  -  Naik pangkat: '+pvRN[n]:n<o?'  -  Turun pangkat: '+pvRN[n]:'');
}
function pvQ(l,i){
const c=SC[i],h=c.hp*gDm()*(l.cf.hp>600?1.3:1);
E.push({t:0,bq:1,ld:l,id:i,c,x:l.x+c.of,y:GY,vx:0,f:l.f,hp:h,mh:h,sp:c.sp,dm:0,rg:0,cd:0,wu:0,mw:1,sw:0,ph:0,hf:0,dd:0,sz:1,boss:0,fx:0,stp:0,al:0,aa:0,ac:rnd(.8,1.6)});
}
function rkSt(x,cx,cy,r){
x.beginPath();
for(let i=0;i<10;i++){const a=-PI/2+i*PI/5,d=i%2?r*.45:r;x[i?'lineTo':'moveTo'](cx+M.cos(a)*d,cy+M.sin(a)*d)}
x.closePath();
}
function rkAr(x,x1,y1,x2,y2){
const a=M.atan2(y2-y1,x2-x1);
x.beginPath();x.moveTo(x1,y1);x.lineTo(x2,y2);x.stroke();
x.beginPath();x.moveTo(x2,y2);x.lineTo(x2-9*M.cos(a-.45),y2-9*M.sin(a-.45));x.lineTo(x2-9*M.cos(a+.45),y2-9*M.sin(a+.45));x.closePath();x.fill();
}
function rkSh(x){
x.beginPath();x.moveTo(48,12);x.lineTo(76,22);x.lineTo(74,52);x.quadraticCurveTo(70,74,48,87);x.quadraticCurveTo(26,74,22,52);x.lineTo(20,22);x.closePath();
}
function rkGl(x,cx,cy,r){
x.beginPath();x.moveTo(cx,cy-r);x.quadraticCurveTo(cx,cy,cx+r,cy);x.quadraticCurveTo(cx,cy,cx,cy+r);x.quadraticCurveTo(cx,cy,cx-r,cy);x.quadraticCurveTo(cx,cy,cx,cy-r);x.closePath();x.fill();
}
