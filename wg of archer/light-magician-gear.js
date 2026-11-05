function gearAl(k){
const o=document.createElement('canvas');o.width=o.height=64;
const x=o.getContext('2d'),A=['#3a1522','#1d1421','#0b0910','#ff4d60'];
x.lineJoin='round';x.lineCap='round';
const rg=x.createRadialGradient(32,32,2,32,32,31);rg.addColorStop(0,'#ff4d6099');rg.addColorStop(1,'#ff4d6000');
x.globalAlpha=.3;x.fillStyle=rg;x.fillRect(0,0,64,64);x.globalAlpha=1;
x.lineWidth=1.8;
if(k==0){
x.beginPath();x.moveTo(20,12);x.quadraticCurveTo(32,8,44,12);x.lineTo(48,30);x.quadraticCurveTo(50,46,53,58);x.lineTo(11,58);x.quadraticCurveTo(14,46,16,30);x.closePath();
const lg=x.createLinearGradient(12,0,52,0);lg.addColorStop(0,A[2]);lg.addColorStop(.55,A[1]);lg.addColorStop(1,A[0]);
x.fillStyle=lg;x.fill();x.strokeStyle='#07060b';x.stroke();
x.beginPath();x.moveTo(22,10);x.lineTo(26,17);x.lineTo(32,13);x.lineTo(38,17);x.lineTo(42,10);x.strokeStyle='#d81f38';x.lineWidth=2.2;x.stroke();
x.fillStyle='#5a0c1b';x.fillRect(17,32,30,5);x.strokeStyle='#07060b';x.lineWidth=1.2;x.strokeRect(17,32,30,5);
x.beginPath();x.moveTo(32,22);x.lineTo(36,28);x.lineTo(32,34);x.lineTo(28,28);x.closePath();x.fillStyle='#ff4d60';x.fill();x.stroke();
x.strokeStyle='#d81f38';x.lineWidth=1.6;x.beginPath();x.moveTo(32,40);x.lineTo(32,56);x.stroke();
x.beginPath();x.moveTo(32,38);x.lineTo(28,44);x.lineTo(36,44);x.closePath();x.fillStyle='#d81f38';x.fill();
}else{
x.save();x.translate(32,32);x.rotate(PI/4);
x.strokeStyle='#07060b';x.lineWidth=5;x.beginPath();x.moveTo(0,-14);x.lineTo(0,28);x.stroke();
x.strokeStyle='#1d1421';x.lineWidth=3;x.stroke();
x.strokeStyle='#d81f38';x.lineWidth=1.3;for(let i=0;i<3;i++){x.beginPath();x.moveTo(-2.4,10+i*5);x.lineTo(2.4,8+i*5);x.stroke()}
x.strokeStyle='#07060b';x.lineWidth=2.6;x.beginPath();x.moveTo(-2,-14);x.quadraticCurveTo(-8,-20,-4,-27);x.moveTo(2,-14);x.quadraticCurveTo(8,-20,4,-27);x.stroke();
x.strokeStyle='#d81f38';x.lineWidth=1.1;x.stroke();
x.beginPath();x.moveTo(0,-34);x.lineTo(4.4,-25);x.lineTo(1.6,-19);x.lineTo(-1.6,-19);x.lineTo(-4.4,-25);x.closePath();
x.fillStyle='#d81f38';x.fill();x.strokeStyle='#07060b';x.lineWidth=1.4;x.stroke();
x.fillStyle='#ff4d60';x.beginPath();x.moveTo(0,-31);x.lineTo(1.8,-25);x.lineTo(0,-21.5);x.lineTo(-1.8,-25);x.closePath();x.fill();
x.restore();
}
return o;
}
