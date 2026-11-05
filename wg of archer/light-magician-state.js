const alS={t:0,on:0,rl:0,pj:[],dl:[],fx:0,rg:'255,44,66',u:0,tu:0,ns:0,nm:0,fl2:0,bl:[],cl:[],cs:0,o2:0,t2:0,c2:0,sp2:0,n2:0,rn:[]};
const AS2=9;
const alCd=document.createElement('canvas'),alCl=document.createElement('canvas');
alCd.width=alCd.height=alCl.width=alCl.height=128;
{
let x=alCd.getContext('2d'),q=x.createRadialGradient(64,64,0,64,64,64);
q.addColorStop(0,'rgba(16,9,22,.95)');q.addColorStop(.55,'rgba(14,8,19,.6)');q.addColorStop(1,'rgba(10,6,14,0)');
x.fillStyle=q;x.fillRect(0,0,128,128);
x=alCl.getContext('2d');q=x.createRadialGradient(64,64,0,64,64,64);
q.addColorStop(0,'rgba(255,100,120,.55)');q.addColorStop(.6,'rgba(255,60,80,.18)');q.addColorStop(1,'rgba(255,44,66,0)');
x.fillStyle=q;x.fillRect(0,0,128,128);
}
const alK=['#14060c','#0e0a13','#160f1c','#2a1220','#a3172e','#d93a50','#430a15','#080609'];
const alBt=[],alBB='#2a1233',alBS='#0d0614',alBR='#c42a42',alBF='#5a2442';
let alLo=null;
const alLy=document.createElement('canvas'),alLg=alLy.getContext('2d');
function alLyOn(){
const c=g.canvas;
if(alLy.width!=c.width||alLy.height!=c.height){alLy.width=c.width;alLy.height=c.height}
else{alLg.setTransform(1,0,0,1,0,0);alLg.clearRect(0,0,alLy.width,alLy.height)}
alLg.setTransform(g.getTransform());
alLg.globalAlpha=1;alLg.globalCompositeOperation='source-over';
alLo=g;g=alLg;
}
function alLyOff(){
g=alLo;
const a=g.globalAlpha;
g.save();g.setTransform(1,0,0,1,0,0);g.globalCompositeOperation='source-over';g.globalAlpha=a*.8;g.drawImage(alLy,0,0);g.restore();
}
