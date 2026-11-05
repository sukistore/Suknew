function monk(px,py,sd,i){
const S=1.2,ph=T*2.1+i,sw=.16*M.sin(ph)+.04*M.sin(T*3.7+i),tl=M.sin(T*2.2+i)*4,lg=M.sin(ph-.9)*3,hd=.14*M.sin(T*1.3+i*2)+.06*M.sin(T*3.1),br=.28*M.sin(T*2.6),ax=12.8+M.sin(T*2.3+i)*.8,ay=27.2+M.sin(T*1.9+i*2)*.9;
const body=()=>{
g.beginPath();
tpr([[0,0],[-1.6,8.5],[1.2,17]],1.5,2.6);
tpr([[0,-.3],[0,-.2]],2.2,2.2);
tpr([[-1.5,1.4],[-1.6,2]],1,1);
tpr([[1.6,1.6],[1.7,2.2]],1,1);
tpr([[2.4,20.5],[3.2,27],[1,34.5]],5.4+br,3.7+br*.5);
g.save();g.translate(3,18);g.rotate(hd);g.translate(-3,-18);
tpr([[3,17],[2.6,20]],3.6,4.6);
tpr([[3.6,15.2],[3.6,15.3]],4.7,4.7);
g.moveTo(10.5,16.6);g.ellipse(7.6,16.6,2.9,2.3,0,0,TAU);
tpr([[.8,14],[.8,14.1]],1.9,1.9);
tpr([[3.4,10.6],[3.4,10.7]],1.5,1.5);
tpr([[5.2,10.9],[5.2,11]],1.2,1.2);
g.restore();
tpr([[4.4,20],[(4.4+ax)/2+1.1,(20+ay)/2-1.8],[ax,ay]],2.5,1.6);
tpr([[ax,ay+.4],[ax,ay+.5]],1.9,1.9);
tpr([[1,34],[-2.4+lg*.6,40.5],[-1.2+lg,48]],3,1.4);
tpr([[-1.2+lg,48],[2.2+lg,50.4]],1.5,1);
tpr([[2.2,34],[5.4-lg*.6,40],[3.6-lg,47]],3,1.4);
tpr([[3.6-lg,47],[7-lg,49]],1.5,1);
tpr([[0,33.5],[-8+tl*.5,33+tl*.2],[-13+tl*.3,40+tl*.6],[-11.5+tl*.4,46.5]],1.9,1.3);
tpr([[-11.5+tl*.4,46.5],[-10.4+tl*.6,50],[-6.8,51.6+tl*.2],[-5.6-tl*.3,48.6-tl*.3]],1.3,1);
g.fill();
};
g.save();g.translate(px,py);g.rotate(sw);g.scale(sd*S,S);
g.save();g.translate(.8*sd,-.8);g.fillStyle='rgba(150,172,230,.3)';body();g.restore();
g.fillStyle='#05080f';body();
g.save();g.translate(3,18);g.rotate(hd);g.translate(-3,-18);
g.fillStyle='rgba(236,240,255,.9)';g.beginPath();g.ellipse(5.7,14.2,.75,.75*((T+i*1.7)%4.2<.14?.12:1),0,0,TAU);g.fill();
g.restore();
g.restore();
const lx=sd*S*ax,ly=S*ay,wx=px+lx*M.cos(sw)-ly*M.sin(sw),wy=py+lx*M.sin(sw)+ly*M.cos(sw),bs=sw*.5+.18*M.sin(ph-1.1);
g.save();g.translate(wx,wy);g.rotate(bs);
g.strokeStyle='rgba(14,20,36,.95)';g.lineWidth=1;g.beginPath();g.moveTo(0,0);g.lineTo(-12,32);g.moveTo(0,0);g.lineTo(48,32);g.stroke();
g.fillStyle='#0b1120';g.beginPath();g.rect(-22,32,80,26);g.fill();
g.strokeStyle='rgba(140,166,222,.32)';g.lineWidth=.8;g.stroke();
g.font='700 6.4px system-ui,sans-serif';g.textBaseline='middle';g.textAlign='left';
const tx='WANGSAF GAMING',tw=g.measureText(tx).width,x0=18-(17+tw)/2;
g.globalAlpha=.5;g.fillStyle='#ff1e1e';
g.beginPath();g.moveTo(x0+3,40.5);g.lineTo(x0+10,40.5);g.arcTo(x0+13,40.5,x0+13,43.5,3);g.lineTo(x0+13,47.5);g.arcTo(x0+13,50.5,x0+10,50.5,3);g.lineTo(x0+3,50.5);g.arcTo(x0,50.5,x0,47.5,3);g.lineTo(x0,43.5);g.arcTo(x0,40.5,x0+3,40.5,3);g.closePath();g.fill();
g.fillStyle='#ffffff';g.beginPath();g.moveTo(x0+5.2,43.3);g.lineTo(x0+9,45.5);g.lineTo(x0+5.2,47.7);g.closePath();g.fill();
g.globalAlpha=1;g.fillStyle='rgba(216,224,250,.92)';g.fillText(tx,x0+17,45.7);
g.restore();
}
function trunks(){
for(let i=M.floor((cam-200)/TRS);i<(cam+VW+200)/TRS+1;i++){
if(hs(i*1.7+11)<.28&&i%5)continue;
const x=i*TRS+hs(i+13)*300,bw=12+hs(i+17)*10,tw=bw*.7,fl=bw*.55,bn=(hs(i+19)-.5)*16;
g.save();g.translate(x-bw*3.4,GY+11);g.scale(bw*7,9);g.globalAlpha=.6;g.fillStyle=SHG;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
g.save();g.translate(x,GY+3);g.scale(bw*2,4.5);g.globalAlpha=.75;g.fillStyle=SHG;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
g.globalAlpha=1;
const tg=g.createLinearGradient(x-bw,0,x+bw,0);
tg.addColorStop(0,'#060a14');tg.addColorStop(.5,'#0d1424');tg.addColorStop(.82,'#18233b');tg.addColorStop(1,'#2a3a5c');
g.fillStyle=tg;g.beginPath();
g.moveTo(x-bw-fl,GY+9);g.quadraticCurveTo(x-bw,GY+2,x-bw*.92,GY-22);
g.quadraticCurveTo(x-bw*.85+bn,GY*.45,x-tw,-30);
g.lineTo(x+tw,-30);
g.quadraticCurveTo(x+bw*.85+bn,GY*.45,x+bw*.92,GY-22);
g.quadraticCurveTo(x+bw,GY+2,x+bw+fl,GY+9);
g.closePath();g.fill();
g.lineCap='round';g.lineJoin='round';
g.strokeStyle='rgba(3,6,14,.5)';g.lineWidth=1;
g.beginPath();
for(let k=0;k<4;k++){
const ox=(-.62+k*.42)*bw+(hs(i+40+k)-.5)*3;
g.moveTo(x+ox,GY+2);g.quadraticCurveTo(x+ox+bn*.9,GY*.45,x+ox*.7+bn*.4,-20);
}
g.stroke();
g.fillStyle='rgba(3,6,14,.4)';
for(let k=0;k<7;k++){
const yy=GY-30-hs(i+50+k)*GY*.8;
g.fillRect(x-bw*.7+hs(i+60+k)*bw*1.1+bn*(1-yy/GY)*.5,yy,2+hs(i+70+k)*5,1);
}
g.strokeStyle='rgba(140,166,222,.32)';g.lineWidth=1.3;
g.beginPath();g.moveTo(x+bw*.92,GY-22);g.quadraticCurveTo(x+bw*.85+bn,GY*.45,x+tw,-30);g.stroke();
const ky=GY*(.55+hs(i+80)*.25);
g.fillStyle='rgba(3,6,14,.55)';g.beginPath();g.ellipse(x-bw*.15+bn*.2,ky,bw*.22,bw*.38,0,0,TAU);g.fill();
for(let k=0;k<2;k++){
const sd=(hs(i+90+k)<.5?-1:1),by=GY*(.52-k*.24)+hs(i+95+k)*20,len=34+hs(i+98+k)*36,bx=x+sd*tw*.85+bn*.4;
g.strokeStyle='#0a101e';g.lineWidth=bw*.3;
g.beginPath();g.moveTo(bx,by);g.quadraticCurveTo(bx+sd*len*.5,by-5,bx+sd*len,by-len*.5);g.stroke();
g.lineWidth=bw*.14;
g.beginPath();g.moveTo(bx+sd*len*.55,by-len*.27);g.lineTo(bx+sd*len*.8,by-len*.14);g.moveTo(bx+sd*len*.7,by-len*.36);g.lineTo(bx+sd*len*1.05,by-len*.62);g.stroke();
g.strokeStyle='rgba(150,176,230,.3)';g.lineWidth=.9;
g.beginPath();g.moveTo(bx,by-bw*.12);g.quadraticCurveTo(bx+sd*len*.5,by-5-bw*.12,bx+sd*len,by-len*.5-bw*.12);g.stroke();
g.fillStyle='#0e1528';
const tx=bx+sd*len,ty=by-len*.5;
g.beginPath();g.moveTo(tx,ty);g.lineTo(tx+sd*18,ty-4);g.lineTo(tx+sd*9,ty+8);g.moveTo(tx,ty);g.lineTo(tx+sd*8,ty-14);g.lineTo(tx+sd*2,ty+2);g.fill();
if(k==0&&!(i%5)){const q=.55,v=1-q;monk(v*v*bx+2*v*q*(bx+sd*len*.5)+q*q*(bx+sd*len),v*v*by+2*v*q*(by-5)+q*q*(by-len*.5)+bw*.15,sd,i)}
}
}
}
function splash(){
if(!RN)return;
const n=12+ST.gq*14,w=VW+120,sd=.38,hits=[];
g.save();g.lineWidth=1;g.lineCap='round';
g.strokeStyle='rgba(196,200,238,.2)';g.beginPath();
for(let i=0;i<n;i++){
const sp=520+hs(i+840)*260,fl=60+hs(i+870)*70,ft=fl/sp,pd=ft+sd+hs(i+880)*.5,tt=T+hs(i+890)*pd*7,c=M.floor(tt/pd),p=tt-c*pd;
const lx=hs(i+c*3.7+900)*w-60+cam,ly=GY+5+hs(i+c*2.9+910)*(VH-GY-12);
if(p<ft){
const yh=ly-fl+p*sp,xh=lx-(ly-yh)*.22,ln=14+hs(i+850)*16;
g.moveTo(xh-ln*.22,yh-ln);g.lineTo(xh,yh);
}else if(p<ft+sd)hits.push([lx,ly,(p-ft)/sd,i,c]);
}
g.stroke();
for(const h of hits){
const x=h[0],y=h[1],a=h[2],i=h[3],c=h[4],f=1-a,t=a*sd;
g.strokeStyle='rgba(196,204,244,'+(.34*f).toFixed(3)+')';
g.beginPath();g.ellipse(x,y,2+a*10,.8+a*3,0,0,TAU);g.stroke();
g.fillStyle='rgba(214,220,250,'+(.55*f).toFixed(3)+')';
for(let k=0;k<3;k++){
const vx=(hs(i+c*1.3+k*5+920)-.5)*50,vy=60+hs(i+c*1.7+k*5+930)*50;
g.fillRect(x+vx*t-.6,y-(vy*t-210*t*t)-.6,1.3,1.3);
}
}
g.restore();
}
function ground(){
if(ST.bg==1){grAr();return}
if(ST.bg==2){grDk();return}
if(ST.bg==3){grGu();return}
if(ST.bg==4){grSn();return}
if(ST.bg==5){grVk();return}
g.fillStyle=gGr;g.fillRect(cam-40,GY,VW+80,VH-GY+40);
g.fillStyle=WS.gh;g.fillRect(cam-40,GY,VW+80,70);
const mw=VW+200,mx=((VW*.78-cam*.02)%mw+mw)%mw-100,ph=VH-GY;
g.save();g.translate(cam+mx,GY+ph*.28);g.scale(VW*.42,ph*.62);g.fillStyle=MPG;g.beginPath();g.arc(0,0,1,0,TAU);g.fill();g.restore();
g.fillStyle='rgba(176,202,240,.3)';g.fillRect(cam-40,GY,VW+80,1);
g.fillStyle='rgba(0,2,8,.3)';g.fillRect(cam-40,GY+1,VW+80,2);
for(let i=M.floor(cam/60);i<(cam+VW)/60+1;i++){
const x=i*60+hs(i)*50,y=GY+6+hs(i+7)*(VH-GY-10),r=3+hs(i+3)*6;
g.fillStyle='rgba(2,5,12,.22)';g.beginPath();g.ellipse(x-1.5,y+1,r,r*.3,0,0,TAU);g.fill();
g.fillStyle='rgba(126,152,196,.14)';g.beginPath();g.ellipse(x,y,r,r*.28,0,0,TAU);g.fill();
}
splash();trunks();
}
const FF=[];
for(let i=0;i<10;i++)FF.push({x:hs(i)*1000,y:hs(i+40),s:.6+hs(i+80),ph:hs(i+120)*TAU});
function fireflies(){
for(const f of FF){
const x=(((f.x-cam*.8+M.sin(T*.5*f.s+f.ph)*30)%VW)+VW)%VW,y=GY-20-f.y*190+M.cos(T*.7*f.s+f.ph*1.3)*20;
const a=.25+.75*M.pow(M.sin(T*f.s*1.4+f.ph),2);
gl('g',x,y,8,a*.55);
g.fillStyle='rgba(230,250,220,'+a*.9+')';g.fillRect(x-.6,y-.6,1.2,1.2);
}
}

