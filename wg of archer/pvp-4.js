if(typeof document!='undefined'){
const st=document.createElement('style');
st.textContent=`
#pvo{position:fixed;inset:0;z-index:99;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:12px;box-sizing:border-box;background:radial-gradient(ellipse at 50% 30%,#1c2a5a,#070b18 70%);color:#fff;font-family:system-ui,sans-serif;animation:pvi .35s ease}
@keyframes pvi{from{opacity:0}to{opacity:1}}
#pvo .pt{font-size:18px;font-weight:700;letter-spacing:.04em}
#pvo .pr{display:flex;align-items:center;justify-content:center;gap:10px;width:100%}
#pvo .pc{width:min(40vw,190px);border-radius:14px;overflow:hidden;border:2px solid rgba(255,255,255,.35);background:#0b1224;text-align:center;box-shadow:0 6px 24px rgba(0,0,0,.5)}
#pvo .pb{height:64px}
#pvo .pa{width:72px;height:72px;margin:-38px auto 0;position:relative}
#pvo .pa canvas{width:72px;height:72px;display:block}
#pvo .pn{font-size:15px;font-weight:700;margin-top:4px;padding:0 6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#pvo .pk{font-size:12px;margin:2px 0}
#pvo .ps{font-size:11px;opacity:.6;margin-bottom:10px}
#pvo .pv{font-size:26px;font-weight:800;color:#ffd45a;text-shadow:0 0 12px rgba(255,200,80,.8)}
#pvo .rd{width:64px;height:64px;margin:4px auto;border-radius:50%;background:conic-gradient(from 0deg,rgba(120,180,255,0),rgba(120,180,255,.9));animation:pvr 1s linear infinite;-webkit-mask:radial-gradient(circle,transparent 46%,#000 48%);mask:radial-gradient(circle,transparent 46%,#000 48%)}
@keyframes pvr{to{transform:rotate(360deg)}}
#pvo .pi,#pvr .pi{font-size:13px;opacity:.85}
#pvr{position:fixed;inset:0;z-index:99;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:12px;box-sizing:border-box;background:radial-gradient(ellipse at 50% 20%,#1c2a5a,#070b18 70%);color:#fff;font-family:system-ui,sans-serif;animation:pvi .3s ease}
#pvr .pt{font-size:18px;font-weight:700}
#pvr .rl{width:min(92vw,420px);max-height:66vh;overflow-y:auto;display:flex;flex-direction:column;gap:6px}
#pvr .rw{display:flex;align-items:center;gap:12px;padding:6px 10px;border:1.5px solid;border-radius:12px;background:rgba(255,255,255,.05)}
#pvr .rw.cu{background:rgba(255,224,130,.12)}
#pvr canvas{width:52px;height:52px;flex:none}
#pvr .rt{display:flex;flex-direction:column;flex:1;min-width:0}
#pvr .rt b{font-size:15px}
#pvr .rt span{font-size:11px;opacity:.7}
#pvr .rc{font-style:normal;font-size:10px;font-weight:800;padding:2px 8px;border-radius:8px;background:#ffd45a;color:#4a3a0c}
#pvr button{padding:8px 22px;border-radius:20px;border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.08);color:#fff;font-size:13px}
.mdc .rkb{display:inline-block;align-self:flex-start;margin-top:6px;margin-right:6px;padding:3px 9px;border-radius:10px;background:rgba(255,224,130,.25);border:1px solid rgba(255,224,130,.7);font-size:10px;font-style:normal;font-weight:700;color:#ffe09a}
#pvo button{padding:8px 22px;border-radius:20px;border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.08);color:#fff;font-size:13px}
.mdc.m4{background:repeating-linear-gradient(135deg,rgba(255,255,255,.07) 0 6px,transparent 6px 12px),linear-gradient(110deg,#1a2a6c,#7b3fe4)}
.mdc canvas{width:58px;height:58px;flex:none}
.mdc .lb{display:inline-block;align-self:flex-start;margin-top:6px;padding:3px 9px;border-radius:10px;background:rgba(0,0,0,.35);border:1px dashed rgba(255,255,255,.45);font-size:10px;font-style:normal;color:rgba(255,255,255,.75)}
.mdc .lb.sh{animation:pvk .4s}
@keyframes pvk{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
#pvo .pl{margin:2px 0 6px}
.lv{display:inline-block;padding:2px 10px;border-radius:9px;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
.lv.l0{background:rgba(90,220,150,.16);color:#8ff0b8;border:1px solid rgba(90,220,150,.5)}
.lv.l1{background:rgba(255,200,80,.16);color:#ffd77a;border:1px solid rgba(255,200,80,.5)}
.lv.l2{background:rgba(255,100,80,.18);color:#ff9a8a;border:1px solid rgba(255,100,80,.55)}
@keyframes pvt{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
#pvu{position:fixed;inset:0;z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px;box-sizing:border-box;background:radial-gradient(ellipse at 50% 45%,rgba(var(--rc),.22),#05070f 68%);color:#fff;font-family:system-ui,sans-serif;overflow:hidden;animation:pvi .4s ease}
#pvu .ur{position:absolute;left:var(--cx,50%);top:var(--cy,45%);width:150vmax;height:150vmax;margin:-75vmax 0 0 -75vmax;background:repeating-conic-gradient(from 0deg,rgba(var(--rc),.17) 0 5deg,transparent 5deg 15deg);-webkit-mask:radial-gradient(circle,#000 0,transparent 55%);mask:radial-gradient(circle,#000 0,transparent 55%);opacity:0;animation:pvsp 26s linear infinite;pointer-events:none}
#pvu.go .ur{opacity:1;transition:opacity .9s}
@keyframes pvsp{to{transform:rotate(360deg)}}
#pvu .ub{position:relative;width:min(56vw,34vh,240px);height:min(56vw,34vh,240px);animation:pvch 1.05s ease-in forwards}
#pvu .ub canvas{width:100%;height:100%;display:block}
@keyframes pvch{0%{transform:scale(.84);filter:brightness(.8)}35%{transform:scale(.9) translateX(-2px);filter:brightness(1)}70%{transform:scale(.96) translateX(2px);filter:brightness(1.2)}100%{transform:scale(1.03);filter:brightness(1.7) drop-shadow(0 0 20px rgba(var(--rc),.9))}}
#pvu.go .ub{animation:pvpo .9s cubic-bezier(.2,1.4,.4,1) both}
@keyframes pvpo{0%{transform:scale(1.8);filter:brightness(3)}100%{transform:scale(1);filter:brightness(1) drop-shadow(0 0 22px rgba(var(--rc),.7))}}
#pvu .fl{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none}
#pvu.go .fl{animation:pvfl .8s ease-out}
@keyframes pvfl{0%{opacity:.9}100%{opacity:0}}
#pvu .uq{position:absolute;left:var(--cx,50%);top:var(--cy,45%);width:40px;height:40px;margin:-20px 0 0 -20px;border-radius:50%;border:2px solid rgba(var(--rc),.9);opacity:0;pointer-events:none}
#pvu.go .uq{animation:pvq 1.5s ease-out both;animation-delay:calc(var(--i)*.2s)}
@keyframes pvq{0%{opacity:.95;transform:scale(.5)}100%{opacity:0;transform:scale(15)}}
#pvu .us{position:absolute;left:var(--cx,50%);top:var(--cy,45%);width:4px;height:16px;margin:-8px 0 0 -2px;border-radius:2px;background:linear-gradient(rgba(255,255,255,.95),rgba(var(--rc),.9));opacity:0;pointer-events:none}
#pvu.go .us{animation:pvs 1.4s cubic-bezier(.1,.7,.3,1) both;animation-delay:var(--s)}
@keyframes pvs{0%{opacity:0;transform:rotate(var(--a)) translateY(0) scaleY(.4)}12%{opacity:1}100%{opacity:0;transform:rotate(var(--a)) translateY(calc(var(--d)*-1)) scaleY(1.5)}}
#pvu .u1,#pvu .u2,#pvu .u3{opacity:0;text-align:center;position:relative}
#pvu .u1{font-size:13px;font-weight:700;letter-spacing:.42em;margin-right:-.42em;color:rgb(var(--rc))}
#pvu .u2{font-size:clamp(26px,8vh,40px);font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-shadow:0 0 26px rgba(var(--rc),.9)}
#pvu .u3{font-size:13px;opacity:0;color:rgba(255,255,255,.75)}
#pvu.go .u1{animation:pvt .7s .15s ease-out both}
#pvu.go .u2{animation:pvt .7s .3s ease-out both}
#pvu.go .u3{animation:pvt .7s .5s ease-out both}
#pvu button{position:relative;margin-top:8px;min-width:180px;padding:11px 28px;border-radius:22px;border:1px solid rgba(var(--rc),.85);background:rgba(var(--rc),.16);color:#fff;font-size:14px;font-weight:700;opacity:0}
#pvu.go button{animation:pvt .6s 1.4s ease-out both}
#pvz{position:fixed;inset:0;z-index:99;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:12px;box-sizing:border-box;background:radial-gradient(ellipse at 50% 28%,rgba(var(--rc),.2),#070b18 70%);color:#fff;font-family:system-ui,sans-serif;animation:pvi .4s ease}
#pvz .zt{font-size:34px;font-weight:800;letter-spacing:.16em;margin-right:-.16em;animation:pvt .6s ease-out both}
#pvz.w .zt{color:#ffe09a;text-shadow:0 0 22px rgba(255,200,80,.55)}
#pvz.l .zt{color:#b9c4dc}
#pvz .zs{font-size:13px;opacity:.7;margin-top:-6px;animation:pvt .6s .08s ease-out both}
#pvz .zc{display:flex;align-items:center;gap:14px;padding:12px 18px;width:min(88vw,330px);box-sizing:border-box;border:1.5px solid rgba(var(--rc),.7);border-radius:16px;background:rgba(255,255,255,.05);animation:pvt .6s .15s ease-out both}
#pvz canvas{width:78px;height:78px;flex:none}
#pvz .zk{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}
#pvz .zk b{font-size:20px;color:rgb(var(--rc))}
#pvz .zk span{font-size:12px;opacity:.75}
#pvz .zp{height:6px;border-radius:3px;background:rgba(255,255,255,.12);overflow:hidden;margin-top:4px}
#pvz .zp i{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,rgba(var(--rc),.6),rgb(var(--rc)));transition:width 1s .5s cubic-bezier(.2,.8,.2,1)}
#pvz .zr{display:flex;gap:10px;align-items:center;animation:pvt .6s .3s ease-out both}
#pvz .zd{font-size:15px;font-weight:700;padding:6px 14px;border-radius:12px;background:rgba(255,255,255,.07)}
#pvz .zd.up{color:#8ff0b8}
#pvz .zd.dn{color:#ff9a8a}
#pvz .zq{display:flex;align-items:center;gap:7px;font-size:15px;font-weight:700;padding:6px 14px;border-radius:12px;background:rgba(255,214,90,.14);border:1px solid rgba(255,214,90,.45);color:#ffe09a}
#pvz .zq em{width:14px;height:14px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff3b8,#e0a323 70%);box-shadow:0 0 8px rgba(255,200,80,.7)}
#pvz .zx{font-size:12px;opacity:.75}
#pvz button{min-width:210px;padding:11px 24px;border-radius:22px;font-size:14px;font-weight:700;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.08);color:#fff;animation:pvt .6s .45s ease-out both}
#pvz #pvg{background:linear-gradient(110deg,#2f6bd8,#7b3fe4);border-color:rgba(255,255,255,.5)}
@media(max-height:420px){#pvz{gap:7px}#pvz .zt{font-size:26px}#pvz button{padding:8px 24px}}
`;
document.head.appendChild(st);
const mr=document.querySelector('#md .mdr');
if(mr)mr.insertAdjacentHTML('beforeend','<div class="mdc m4" data-d="4"><canvas data-rk="0" width="116" height="116"></canvas><div class="mdt"><b>Mode PvP</b><span>Cari lawan, menang untuk naik pangkat dari Perunggu sampai WG. Squad boleh dipakai, tanpa skill. 3 babak.</span><em id="mdp"></em><i class="rkb">Lihat Pangkat</i><i class="lb">Leaderboard PvP  -  Coming Soon</i></div></div>');
const mdE=document.getElementById('md');
if(mdE)mdE.addEventListener('click',e=>{
const rb=e.target.closest('.rkb');
if(rb){e.stopPropagation();pvRanks();return}
const l=e.target.closest('.lb');
if(l){e.stopPropagation();l.classList.add('sh');setTimeout(()=>l.classList.remove('sh'),400)}
},true);
}
