function alBat(s,a,fl){
const f=M.sin(fl),f1=M.sin(fl-.5),f2=M.sin(fl-.35),f3=M.sin(fl-.2),f4=M.sin(fl-.1),w=new Path2D(),tp=[[10.6,-2.6-5.4*f1],[9.4,.9-3.6*f2],[6.8,2.6-2.4*f3],[3.8,3.2-1.2*f4]],wx=5.2,wy=-3.6-2.4*f,xs=1-.26*M.max(0,f);
w.moveTo(1,-1);w.lineTo(wx,wy);w.lineTo(tp[0][0],tp[0][1]);
for(let i=1;i<tp.length;i++){const q=tp[i-1],r=tp[i];w.quadraticCurveTo(lr(q[0],r[0],.5)-1.1,lr(q[1],r[1],.5)-.5,r[0],r[1])}
w.quadraticCurveTo(2.2,2.4,1,2.2);w.closePath();
g.save();g.rotate(a);g.scale(s,s);g.translate(0,f*.8);g.lineJoin='round';g.lineCap='round';
for(let m=0;m<2;m++){
g.save();g.scale(m?-xs:xs,1);
g.save();g.clip(w);g.fillStyle=alBS;g.fill(w);g.translate(0,-.8);g.fillStyle=alBB;g.fill(w);g.restore();
g.strokeStyle=alBF;g.lineWidth=.14;g.beginPath();
for(let i=0;i<tp.length;i++){g.moveTo(wx,wy);g.lineTo(tp[i][0]*.93,tp[i][1]*.93)}
g.stroke();
g.strokeStyle=alK[0];g.lineWidth=.34;g.stroke(w);
g.strokeStyle=alBR;g.lineWidth=.17;g.beginPath();g.moveTo(1,-1);g.lineTo(wx,wy);g.lineTo(tp[0][0],tp[0][1]);g.stroke();
g.restore();
}
const tw=M.sin(fl*.5)*.3;
poly([-1.2,-1.4,-1.7+tw,-4.2,-.2,-2.4],alBB,alK[0],.3);
poly([1.2,-1.4,1.7+tw*.6,-4.2,.2,-2.4],alBB,alK[0],.3);
ov(0,.4,1.7,2.6,alK[0]);
ov(0,.4,1.3,2.2,alBB);
ov(.45,1,.85,1.2,alBS);
const er=.36+.06*M.sin(fl*.7);ov(-.55,-.7,er,er,'#ff6a7e');ov(.55,-.7,er,er,'#ff6a7e');
g.restore();
}
function alBatOrb(ph,k){
const n=k?8:6,R=k?1.5:1;
g.save();
for(let j=0;j<2;j++){
if(j&&!k){g.save();g.translate(M.sin(ph*3.1)*3,M.sin(ph*4.3)*3);alBat(1.9,M.sin(ph*2.2)*.12,ph*17);g.restore()}
for(let i=0;i<n;i++){
const t=ph*(2.4+i*.3)+i*TAU/n+M.sin(ph*1.9+i*2)*.5;
if((M.sin(t)<0)==(j==0)){g.save();g.translate(M.cos(t)*(27+5*M.sin(ph*1.7+i*2))*R,(M.sin(t)*(13+3*M.sin(ph*2.3+i))+M.sin(ph*9+i)*2)*R);alBat(k?1.1:.95,M.cos(t)*.35+M.sin(ph*6+i)*.12,ph*(24+i*2)+i*1.7);g.restore()}
}
}
g.restore();
}
function alBurst(x,y,n,v){
for(let i=0;i<n&&alBt.length<60;i++){const a=rnd(0,TAU),u=rnd(.4,1),l=rnd(.8,1.4);alBt.push({x:x+M.cos(a)*10,y:y+M.sin(a)*10,vx:M.cos(a)*v*u,vy:M.sin(a)*v*u-30,l,m:l,s:rnd(.55,.95),fl:rnd(0,TAU),fs:rnd(26,34),w:rnd(0,TAU)})}
}
