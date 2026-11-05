function evCr(hx,hh){
g.lineJoin='round';g.lineCap='round';
g.strokeStyle='#b8923f';g.lineWidth=2.8;g.beginPath();
for(let k=0;k<=8;k++){const dx=(k-4)*1.8,x=hx+dx,y=hh-M.sqrt(74-dx*dx)+1.6;if(k)g.lineTo(x,y);else g.moveTo(x,y)}
g.stroke();
g.strokeStyle='#f6dd92';g.lineWidth=1.4;g.stroke();
for(let k=0;k<5;k++){
const dx=(k-2)*3.6,x=hx+dx,by=hh-M.sqrt(74-dx*dx)+1.8,h=k==2?8:k&1?4.4:5.6;
g.fillStyle=k==2?'#f6dd92':'#f0cf7a';g.strokeStyle='#b8923f';g.lineWidth=.6;
g.beginPath();g.moveTo(x-2,by);g.lineTo(x-.2,by-h);g.lineTo(x+2,by);g.closePath();g.fill();g.stroke();
g.fillStyle='rgba(255,252,225,.8)';g.beginPath();g.arc(x-.2,by-h,.9,0,TAU);g.fill();
}
ov(hx,hh-7,1.5,1.9,'#ff6a5e');
gl('f',hx,hh-7,7,.4+.15*M.sin(T*4));
}
function evHl(hx,hh){
g.globalCompositeOperation='lighter';g.globalAlpha=PFX;
const pu=.8+.2*M.sin(T*3);
g.strokeStyle='rgba(255,236,170,'+.8*pu+')';g.lineWidth=1.6;
g.beginPath();g.ellipse(hx-1,hh-15,8,2.6,-.1,0,TAU);g.stroke();
g.strokeStyle='rgba(255,246,205,.35)';g.lineWidth=3.6;g.stroke();
g.strokeStyle='rgba(255,236,170,.4)';g.lineWidth=.7;
g.beginPath();g.ellipse(hx-1,hh-15,11.5,3.8,-.1,T*.8,T*.8+4.4);g.stroke();
for(let k=0;k<3;k++){const a=T*1.6+k*2.094;g.fillStyle='rgba(255,250,225,.9)';g.beginPath();g.arc(hx-1+M.cos(a)*8,hh-15+M.sin(a)*2.6,.9,0,TAU);g.fill()}
g.globalCompositeOperation='source-over';g.globalAlpha=1;
gl('p',hx-1,hh-15,14,.35);
}
const RGC=new Map();
function rgD(R,col,lw,d1,d2){
const rs=M.min(2,M.max(1,dd*sc)),ky=R+col+lw+d1+'|'+rs;
let c=RGC.get(ky);
if(!c){
const n=M.ceil((R+lw+2)*2*rs);
c=document.createElement('canvas');c.width=c.height=n;
const x=c.getContext('2d');x.translate(n/2,n/2);x.scale(rs,rs);
x.strokeStyle=col;x.lineWidth=lw;x.setLineDash([d1,d2]);
x.beginPath();x.arc(0,0,R,0,TAU);x.stroke();
RGC.set(ky,c);
}
const h=c.width/rs/2;
g.drawImage(c,-h,-h,h*2,h*2);
}
function fxEv(){
const x=p.x,y=p.y-30;
if(p.vt>0)gl(AE[p.vt].k,x,y,44+p.vt*9+M.sin(T*3)*4,.08+p.vt*.04);
if(p.vt>0){
g.save();g.translate(x,GY+2);g.scale(1,.22);g.globalCompositeOperation='lighter';g.globalAlpha=PFX;g.rotate(T*(.8+p.vt*.3));
if(p.vt>=4&&!slA)rgD(30+p.vt*7,'rgba('+AE[p.vt].c+',.35)',2,10,8);else{g.strokeStyle='rgba('+AE[p.vt].c+',.35)';g.lineWidth=2;g.setLineDash([10,8]);
g.beginPath();g.arc(0,0,30+p.vt*7,0,TAU);g.stroke();g.setLineDash([])}
g.restore();
}
if(p.vt>=2){
g.save();g.translate(x,GY+2);g.scale(1,.22);g.globalCompositeOperation='lighter';g.globalAlpha=PFX;g.rotate(-T*(1.1+p.vt*.2));
if(p.vt>=4&&!slA)rgD(20+p.vt*5,'rgba('+AE[p.vt].s+',.28)',1.2,3,6);else{g.strokeStyle='rgba('+AE[p.vt].s+',.28)';g.lineWidth=1.2;g.setLineDash([3,6]);
g.beginPath();g.arc(0,0,20+p.vt*5,0,TAU);g.stroke();g.setLineDash([])}
g.restore();
}
}

