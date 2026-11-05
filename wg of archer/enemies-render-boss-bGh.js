function bGh(e,sn,id,sw,ph){
const m=uxM(e,sn,ph,id,sw,2),wu=M.max(0,-sw),sk=M.max(0,sw),hy=-uxH(ph,sn,13,21)-id*.35+wu*1.5;
const S0='#9aa59a',S1='#6c776d',S2='#3f4a42';
uxLeg(ph+PI,sn,-1.6,hy,13,5,8,.6,S1,S2);
uxLeg(ph,sn,1.6,hy,13,5,8,.66,S0,'#4a564d');
g.save();g.translate(0,hy);g.lineCap='round';g.lineJoin='round';
const pp=m.pt+sk*.06-wu*.06;g.rotate(pp);
const cl=M.sin(ph*2-.8)*1.4*sn+M.sin(T*2.6+e.id)*.7-sn*3;
g.fillStyle='#2f2822';g.beginPath();g.moveTo(-5.4,-1);g.lineTo(5.6,-1);
for(let k=0;k<5;k++)g.lineTo(5-k*2.6+cl*(k+1)*.06,7+(k&1?4:0)+M.sin(T*2.2+k+e.id)*.9);
g.closePath();g.fill();
ov(0,-1,5,3.2,S1);
g.save();g.translate(0,-4);
const cp=m.ct+m.br*.03-wu*.22+sk*.26,tp=pp+cp;g.rotate(cp);
const hand=(r,a,k,n)=>{g.strokeStyle='#cfc9b4';g.lineWidth=1;g.lineCap='round';for(let i=0;i<n;i++){const b=a+(i-(n-1)/2)*.4;g.beginPath();g.moveTo(r[2],r[3]);g.quadraticCurveTo(r[2]+M.cos(b)*k*.6+M.sin(b)*1.2,r[3]+M.sin(b)*k*.6-M.cos(b)*1.2,r[2]+M.cos(b+.3)*k,r[3]+M.sin(b+.3)*k);g.stroke()}};
const arm=(sx,sy,th,c,w,L,n,k)=>{const r=uxArm(sx,sy,th-tp,L,1,w,12,12,c,S1,1.9*w);ov(r[0],r[1],1.5*w,1.5*w,S2);hand(r,th-tp,k,n);return r};
arm(-5,-14,lr(1.4+m.ar*.5,-1.5,wu)+sk*-.3,'#56625a',.75,21,3,6.5);
g.fillStyle=S0;g.beginPath();g.moveTo(-4,5);g.lineTo(4,5);g.lineTo(5.6,-4);g.quadraticCurveTo(9,-9,7.4,-14);g.lineTo(2,-17);g.lineTo(-5.4,-15.4);g.quadraticCurveTo(-8,-9,-5.8,-4);g.closePath();g.fill();
poly([-5.4,-15.4,-8,-9,-5.8,-4,-4,5,-2,5,-4,-8],'rgba(0,0,0,.2)');
ov(.6,1.8,3,3.8,S2);
g.lineWidth=1;
for(let k=0;k<5;k++){const y=-3-k*2.5;g.strokeStyle='rgba(30,38,32,.55)';g.beginPath();g.moveTo(-4.8,y+.8);g.quadraticCurveTo(1,y+2.4,6.2-k*.2,y+.2);g.stroke();g.strokeStyle='rgba(225,232,218,.5)';g.beginPath();g.moveTo(-4.8,y);g.quadraticCurveTo(1,y+1.6,6.2-k*.2,y-.6);g.stroke()}
for(let k=0;k<5;k++)ov(-6.6-M.sin((k*3+1)/14*PI)*1.3,-1-k*3,1.1,1,S1);
sl(-5,-14.6,5.4,-15,'rgba(230,235,225,.5)',1);
sl(-1,-11,3,-6,'rgba(110,40,40,.55)',.8);
uxT(1,-15,4,-23,2.3,1.9,S1);
const hp=-tp*.7+m.hd-wu*.4+sk*.2+id*.04;
g.save();g.translate(5,-26);g.rotate(hp);
g.strokeStyle='#2a2622';g.lineWidth=.8;
for(let k=0;k<3;k++){g.beginPath();g.moveTo(-3,-4+k);g.quadraticCurveTo(-7-sn*2,-1+k*2,-9-sn*3+M.sin(T*2+k+e.id)*1.3,3+k*3);g.stroke()}
ov(0,-1,4.8,5.2,S0);ov(-1.6,-3,2.4,1.8,'rgba(255,255,255,.1)');
const jw=.16+wu*.8+sk*.7+M.sin(T*3+e.id)*.04,jy=jw*10;
poly([-1,2.4,8.6,2.8,9.4,4+jy,-.5,5+jy],'#2a0d10');
g.strokeStyle='#8a3a44';g.lineWidth=2;g.beginPath();g.moveTo(2,4+jy*.5);g.quadraticCurveTo(6,6+jy*.8,8+M.sin(T*4+e.id)*1.2,8+jy+3);g.stroke();
poly([1,-3,6.4,-1.4,8.8,2.4,-1,2.4],S0);
g.fillStyle='#e4dcc4';
for(let k=0;k<5;k++){g.beginPath();g.moveTo(1.2+k*1.6,2.6);g.lineTo(2+k*1.6,4.6+(k&1));g.lineTo(2.8+k*1.6,2.6);g.fill()}
poly([-1.6,3.6+jy*.5,8,3.4+jy*.8,9.6,5.4+jy,3,7.8+jy,-1.4,6.6+jy*.8],S1,'#2a3028',.7);
g.fillStyle='#e4dcc4';
for(let k=0;k<4;k++){const x=1.4+k*1.9,y=4.4+jy*(.4+k*.14);g.beginPath();g.moveTo(x,y);g.lineTo(x+.8,y-2.2);g.lineTo(x+1.6,y);g.fill()}
ov(3,-1.8,1.9,1.5,'#0d100e');ov(3.4,-1.8,.6,.6,'#d6f0b0');gl('g',3.2,-1.8,6,.4+wu*.3+sk*.3);
sl(7.5,-.6,8.4,.4,'#2a3028',.8);ov(-2.8,-.6,.9,1.2,'#1e2420');
g.restore();
let th=1.4-m.ar*.5;th=lr(th,-1.9,wu);th=lr(th,.5,sk);
arm(5,-14,th,S0,.9,25+sk*3,4,7.5);
g.restore();g.restore();
uxSl(6,hy-10,28,-1.4,.9,sk,'170,225,150');
uxW(e,0,-2,'g',3,16,8,.12,.45);
}
