let SPC=0;
try{SPC=+localStorage.getItem('wg_spc')||0}catch(x){}
if(SPC>1)SPC=1;
const dxS={act:'T',O:{}};
const SK3=9;
function dxMk(id,P0){
const O={x:0,y:0,vx:0,vy:0,f:1,on:1,sh:0,at:-1,atH:0,sk1:-1,skH:0,skE:0,rl:-1,cb:0,sF:0,cd:0,us:0,uc:0,ut:0,kc:0,dr:0,ch:0,rv:0,bt:30,k3:0,s3:-1,s3H:0};
dxS.O[id]=O;
return new Proxy(P0,{get:(t,k)=>dxS.act!==id&&k in O?O[k]:t[k],set:(t,k,v)=>{if(dxS.act!==id&&k in O)O[k]=v;else t[k]=v;return true}});
}
