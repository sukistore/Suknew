const p={jf:1,jt:0,x:0,y:0,vx:0,vy:0,f:1,cv:0,on:1,wk:0,st:0,ch:0,pc:0,dr:0,da:0,sh:0,sf:0,rc:0,sq:0,cy:0,jb:0,cd:0,air:0,idle:0,mt:0,bl:3,wd:-1,wj:0,ws:0,hp:100,mh:100,hu:0,inv:0,dead:0,rg:0,kc:0,uc:0,ut:0,us:0,wq:0,we:0,vt:0,fy:0,wa:0,wp:0,go:0,gd:1,gf:0,gx:0,gc:0,gp:0,ga:0,dc:0,dn:0,dw:0,dsp:0,dht:0,dz:0,dl:-1};
p.y=GY;cam=-VW*.5;

const AE=[
{n:'shadowsuk',d:1,k:'a',c:'255,205,130',t:'255,200,120',s:'236,200,140',h:'#d9dfe8',f:'#8fb3a8',g:'#b9d1c8',pr:0},
{n:'shadowblue',d:1.35,k:'c',c:'150,195,225',t:'170,210,240',s:'190,220,245',h:'#eef4fb',f:'#9fc3e0',g:'#cfe4f5',pr:0},
{n:'shadowfire',d:1.8,k:'f',c:'255,140,80',t:'255,130,70',s:'255,180,110',h:'#ffb26b',f:'#e8683a',g:'#ffc090',pr:1},
{n:'N of archer',d:2.4,k:'e',c:'190,170,245',t:'190,170,250',s:'220,205,255',h:'#e6dcff',f:'#a58de0',g:'#d8cdfa',pr:1},
{n:'Golden Arrow',d:3.2,k:'p',c:'255,236,170',t:'255,236,170',s:'255,246,205',h:'#fff6d2',f:'#f0cf7a',g:'#fff2c0',pr:2},
{n:'The Arrow of the Gods',d:4.4,k:'s',c:'170,215,255',t:'170,215,255',s:'205,230,255',h:'#f2f8ff',f:'#7fb4ee',g:'#cfe6ff',pr:3},
{n:"Light magician",d:1,k:'r',c:'255,50,70',t:'255,60,80',s:'255,120,135',h:'#ff4358',f:'#1a0f17',g:'#d81f38',pr:2}
];
const SKC=6,UD=2.8,GCD=80,GCH=.8,GFR=1.4;
const evl=()=>p.vt;
const GRM=[1,2,4,7,12,20,10],GRK=['','f','c','a','z','s','p','r'];
const GRN=[['','Zirah Perunggu','Zirah Perak','Zirah Gold','Zirah Obsidian','Zirah Bintang','Zirah Lassy × Kitty','Zirah Cahaya Merah'],['','Pedang Perunggu','Pedang Perak','Pedang Gold','Pedang Obsidian','Pedang Bintang','Senjata Lassy × Kitty','Tongkat Cahaya Merah']];
const GRP=[0,
['#f0b87a','#b8733a','#6b3d17','#2e1a09','#ffd9a0'],
['#ffffff','#c3cedc','#74829a','#2c3544','#9fd0ff'],
['#fff3b0','#f2c94c','#a87810','#4d3504','#fff9d6'],
['#7a6a9e','#2c2438','#0c0911','#000000','#b47bff'],
['#f2f8ff','#9cc8f5','#3c6fb0','#10244a','#cfe6ff']];
const GQ={l:0,m:3.8,t:0};
const gDm=()=>SPC?12+sv.lk:p.vt==6?10+sv.al:GRM[p.vt];
function gearLk(k){
const o=document.createElement('canvas');o.width=o.height=64;
const x=o.getContext('2d'),A=['#ffe6ef','#e8567f','#7c1d44','#2a0a1a','#ffc0d6'],B=['#e6edff','#8fa6ff','#3d4f9c','#101a3d','#c8d4ff'];
const lg=(m,a,b,c,d)=>{const q=x.createLinearGradient(a,b,c,d);q.addColorStop(0,m[0]);q.addColorStop(.45,m[1]);q.addColorStop(1,m[2]);return q};
x.lineJoin='round';x.lineCap='round';
const rg=x.createRadialGradient(32,32,2,32,32,31);
rg.addColorStop(0,'#ffd0e6');rg.addColorStop(1,'#ffd0e600');
x.globalAlpha=.22;x.fillStyle=rg;x.fillRect(0,0,64,64);x.globalAlpha=1;
x.lineWidth=1.8;
if(k==0){
for(let s=0;s<2;s++){
const m=s?B:A,d=s?1:-1;
x.beginPath();x.moveTo(32+d*7,27);x.lineTo(32+d*13,5);x.lineTo(32+d*27,20);x.lineTo(32+d*24,34);x.closePath();
x.fillStyle=lg(m,32+d*7,5,32+d*27,34);x.fill();x.strokeStyle=m[3];x.stroke();
x.beginPath();x.moveTo(32+d*14,11);x.lineTo(32+d*22,20);x.lineTo(32+d*15,24);x.closePath();
x.fillStyle=m[4];x.globalAlpha=.55;x.fill();x.globalAlpha=1;
}
const pl=()=>{x.beginPath();x.moveTo(32,11);x.lineTo(49,17);x.lineTo(49,33);x.quadraticCurveTo(45,48,32,58);x.quadraticCurveTo(19,48,15,33);x.lineTo(15,17);x.closePath()};
for(let s=0;s<2;s++){
const m=s?B:A;
x.save();x.beginPath();x.rect(s?32:0,0,32,64);x.clip();
pl();x.fillStyle=lg(m,15,11,49,58);x.fill();
x.restore();
}
pl();x.strokeStyle='#2a0a1a';x.lineWidth=1.8;x.stroke();
x.beginPath();x.moveTo(32,12);x.lineTo(32,57);x.strokeStyle='#2a0a1a';x.lineWidth=1.2;x.stroke();
x.strokeStyle='#fff6c8';x.lineWidth=2.4;
x.beginPath();x.moveTo(24,26);x.lineTo(40,44);x.moveTo(40,26);x.lineTo(24,44);x.stroke();
x.fillStyle='#fff6c8';x.beginPath();x.moveTo(32,31);x.lineTo(35,35);x.lineTo(32,39);x.lineTo(29,35);x.closePath();x.fill();
x.strokeStyle='#2a0a1a';x.lineWidth=1;x.stroke();
x.globalAlpha=.24;x.fillStyle='#ffffff';
x.beginPath();x.moveTo(19,18);x.lineTo(28,15);x.lineTo(26,36);x.quadraticCurveTo(20,32,19,26);x.closePath();x.fill();
x.globalAlpha=1;
}else{
x.save();x.translate(32,32);x.rotate(PI/4);
x.strokeStyle=B[3];x.lineWidth=4.6;x.beginPath();x.moveTo(0,-18);x.lineTo(0,28);x.stroke();
x.strokeStyle=B[1];x.lineWidth=2.4;x.stroke();
x.beginPath();x.moveTo(0,-31);x.lineTo(5.5,-20);x.lineTo(0,-15);x.lineTo(-5.5,-20);x.closePath();
x.fillStyle=lg(B,-5,-31,5,-15);x.fill();x.strokeStyle=B[3];x.lineWidth=1.6;x.stroke();
x.restore();
x.save();x.translate(32,32);x.rotate(-PI/4);
x.beginPath();x.moveTo(-5,-12);x.lineTo(-5,13);x.lineTo(5,13);x.lineTo(5,-12);x.quadraticCurveTo(0,-30,-5,-12);x.closePath();
x.fillStyle=lg(A,-5,0,5,0);x.fill();x.strokeStyle=A[3];x.lineWidth=1.8;x.stroke();
for(const d of[-1,1]){x.beginPath();x.moveTo(d*5,5);x.lineTo(d*11,16);x.lineTo(d*5,13);x.closePath();x.fillStyle=A[2];x.fill();x.stroke()}
x.beginPath();x.moveTo(-3,13);x.lineTo(0,23);x.lineTo(3,13);x.closePath();x.fillStyle='#ffb24a';x.fill();
x.fillStyle=A[4];x.beginPath();x.arc(0,-3,1.8,0,TAU);x.fill();
x.restore();
}
return o;
}
function gearMk(k,t){
if(t==6)return gearLk(k);
if(t==7)return gearAl(k);
const o=document.createElement('canvas');o.width=o.height=64;
const x=o.getContext('2d'),m=GRP[t];
const lg=(a,b,c,d)=>{const q=x.createLinearGradient(a,b,c,d);q.addColorStop(0,m[0]);q.addColorStop(.45,m[1]);q.addColorStop(1,m[2]);return q};
x.lineJoin='round';x.lineCap='round';
const rg=x.createRadialGradient(32,32,2,32,32,31);
rg.addColorStop(0,m[4]);rg.addColorStop(1,m[4]+'00');
x.globalAlpha=.22;x.fillStyle=rg;x.fillRect(0,0,64,64);x.globalAlpha=1;
x.strokeStyle=m[3];x.lineWidth=1.8;
if(k==0){
for(const sd of[-1,1]){
x.save();x.translate(32+sd*19,21);x.rotate(sd*.35);
x.beginPath();x.ellipse(0,0,9.5,7,0,0,TAU);x.fillStyle=lg(-9,-7,9,7);x.fill();x.stroke();
x.strokeStyle=m[2];x.lineWidth=1;x.beginPath();x.ellipse(0,0,6,4,0,0,TAU);x.stroke();
x.restore();
}
x.beginPath();x.moveTo(19,13);x.quadraticCurveTo(32,8,45,13);x.lineTo(48,29);x.quadraticCurveTo(46,44,40,53);x.quadraticCurveTo(32,59,24,53);x.quadraticCurveTo(18,44,16,29);x.closePath();
x.fillStyle=lg(16,10,48,58);x.fill();x.stroke();
x.beginPath();x.moveTo(25,12.5);x.quadraticCurveTo(32,20,39,12.5);x.quadraticCurveTo(32,8.5,25,12.5);x.fillStyle=m[3];x.fill();
x.strokeStyle=m[2];x.lineWidth=1.4;
x.beginPath();x.moveTo(32,19);x.lineTo(32,32);x.stroke();
x.beginPath();x.moveTo(20,29);x.quadraticCurveTo(32,37,44,29);x.stroke();
x.beginPath();x.moveTo(22,45);x.quadraticCurveTo(32,50,42,45);x.stroke();
x.globalAlpha=.26;x.fillStyle='#ffffff';
x.beginPath();x.moveTo(21,16);x.quadraticCurveTo(26,14,30,15);x.lineTo(28,38);x.quadraticCurveTo(22,34,20,28);x.closePath();x.fill();
x.globalAlpha=1;
x.fillStyle=m[4];x.beginPath();x.moveTo(32,34);x.lineTo(35,38.5);x.lineTo(32,43);x.lineTo(29,38.5);x.closePath();x.fill();
x.strokeStyle=m[3];x.lineWidth=1;x.stroke();
}else{
x.translate(32,32);x.rotate(PI/4);
x.beginPath();x.moveTo(0,-30);x.lineTo(5,-22);x.lineTo(4.4,7);x.lineTo(-4.4,7);x.lineTo(-5,-22);x.closePath();
x.fillStyle=lg(-5,0,5,0);x.fill();x.stroke();
x.strokeStyle=m[2];x.lineWidth=1.3;x.beginPath();x.moveTo(0,-24);x.lineTo(0,3);x.stroke();
x.strokeStyle=m[4];x.globalAlpha=.7;x.lineWidth=1;x.beginPath();x.moveTo(-3,-19);x.lineTo(-2.8,4);x.stroke();x.globalAlpha=1;
x.fillStyle=t==4?'#17101f':'#2b1d12';x.fillRect(-2.4,9.5,4.8,12);
x.strokeStyle=m[3];x.lineWidth=1.2;x.strokeRect(-2.4,9.5,4.8,12);
x.strokeStyle=m[2];x.lineWidth=.9;
for(let i=0;i<3;i++){x.beginPath();x.moveTo(-2.4,12.5+i*3.5);x.lineTo(2.4,14+i*3.5);x.stroke()}
x.beginPath();x.moveTo(-13,5);x.quadraticCurveTo(0,2,13,5);x.lineTo(13,10);x.quadraticCurveTo(0,8,-13,10);x.closePath();
x.fillStyle=lg(-13,0,13,0);x.fill();x.strokeStyle=m[3];x.lineWidth=1.6;x.stroke();
x.beginPath();x.arc(0,25,3.6,0,TAU);x.fillStyle=lg(-3,22,3,28);x.fill();x.stroke();
x.fillStyle=m[4];x.beginPath();x.arc(0,7.2,1.8,0,TAU);x.fill();
}
return o;
}
const GRC=[[0],[0]];
for(let t=1;t<=7;t++){GRC[0][t]=gearMk(0,t);GRC[1][t]=gearMk(1,t)}
function gearUp(t){
const mu=SPC?12+sv.lk:t==6?10+sv.al:GRM[t];p.mh=100*mu;p.hp=p.mh;GQ.t=SPC?6:t==6?7:t;GQ.l=GQ.m;
}
function gearHud(x,y,w){
const t=SPC?6:p.vt==6?7:p.vt,mu=SPC?12+sv.lk:p.vt==6?10+sv.al:GRM[t];
if(t<1)return;
g.save();
g.textAlign='center';g.font='600 9px system-ui,sans-serif';
for(let i=0;i<2;i++){
const bx=x+w+34+i*46,by=y+12;
g.fillStyle='rgba(8,10,16,.55)';g.fillRect(bx-1,by-1,24,24);
g.strokeStyle='rgba(232,223,204,.3)';g.lineWidth=1;g.strokeRect(bx-.5,by-.5,23,23);
g.drawImage(GRC[i][t],bx,by,22,22);
g.fillStyle='rgba(228,234,248,.85)';
g.fillText((i?'DMG x':'HP x')+mu,bx+11,by+33);
}
g.restore();
}
