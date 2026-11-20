const PASSCODE="0000";
const IS_LITE=document.documentElement.classList.contains("lite");
const T={slices:IS_LITE?3:5,bandH:160,maxShift:24,rollEvery:12000,rollTime:3800,burstChance:.0025};
const LOADING_MSGS=[["INITIALIZING INTERNAL SYSTEM...",""],["ESTABLISHING SECURE CONNECTION...",""],["SYNCING WITH GLOBAL NODES... [12/14 ONLINE]",""],["NODE-JP-02 / NODE-BR-01 : NO RESPONSE","#ff6666"],["SYSTEM READY.",""]];
const I18N={
en:{verifyTop:"INTERNAL ACCESS GATEWAY",restricted:"⚠ RESTRICTED ACCESS",verifyTitle:"IDENTITY VERIFICATION",verifyDesc:"A new connection has been detected.<br>Please confirm your access status before continuing.",verifyQ:"ARE YOU AN EMPLOYEE OF THE COMMITTEE?",yes:"YES",no:"NO",ret:"← RETURN",loginTop:"EMPLOYEE AUTHENTICATION",loginTitle:"STAFF LOGIN",loginDesc:"Enter your registered name and passcode.",nameLabel:"FULL NAME",passLabel:"PASSCODE",hint:"HINT // PASSCODE: 0000",submit:"AUTHENTICATE",nameEmpty:"PLEASE ENTER YOUR NAME.",exitHead:"ACCESS RESTRICTED",disc:"DISCONNECT",welcome:"WELCOME,",initMenu:"INITIALIZING MAIN MENU",initSub:"PLEASE DO NOT CLOSE THIS WINDOW",
exitsNo:[{m:"You are not within the personnel authorized for access.",s:"This terminal is restricted to registered staff.<br>Your connection has been noted."},{m:"You have returned.",s:"This terminal does not answer questions.<br>Please disconnect."},{m:"We can see that you are still here.",s:"It is late. You should sleep.<br>Please disconnect."}],
exitsPass:[{m:"Credentials not recognized.",s:"The information you provided does not match our records.<br>Your attempt has been noted."},{m:"That is still incorrect.",s:"This terminal does not forgive a second mistake.<br>Please disconnect."},{m:"Whoever you are, you should not be here.",s:"It is late. You should sleep.<br>Please disconnect."}],
deptTop:"BUREAU ASSIGNMENT",deptTitle:"SELECT YOUR BUREAU",deptDesc:"Select the bureau you belong to within the Committee.",dept1:"2. PROCESSING BUREAU",dept2:"1. INVESTIGATION BUREAU",dept3:"4. LOGISTICS BUREAU",dept4:"3. SECURITY BUREAU"},
vi:{verifyTop:"CỔNG TRUY CẬP NỘI BỘ",restricted:"⚠ TRUY CẬP HẠN CHẾ",verifyTitle:"XÁC MINH DANH TÍNH",verifyDesc:"Hệ thống đã nhận diện một kết nối mới.<br>Vui lòng xác nhận tư cách truy cập trước khi tiếp tục.",verifyQ:"BẠN CÓ PHẢI LÀ NHÂN VIÊN CỦA ỦY BAN?",yes:"CÓ",no:"KHÔNG",ret:"← QUAY LẠI",loginTop:"XÁC THỰC NHÂN VIÊN",loginTitle:"ĐĂNG NHẬP NỘI BỘ",loginDesc:"Nhập họ tên đã đăng ký và mật khẩu của bạn.",nameLabel:"HỌ TÊN",passLabel:"MẬT KHẨU",hint:"GỢI Ý // MẬT KHẨU: 0000",submit:"XÁC THỰC",nameEmpty:"VUI LÒNG NHẬP TÊN CỦA BẠN.",exitHead:"TRUY CẬP BỊ TỪ CHỐI",disc:"NGẮT KẾT NỐI",welcome:"CHÀO MỪNG,",initMenu:"ĐANG KHỞI TẠO MENU CHÍNH",initSub:"VUI LÒNG KHÔNG ĐÓNG CỬA SỔ NÀY",
exitsNo:[{m:"Bạn không thuộc phạm vi nhân sự được cấp quyền truy cập.",s:"Thiết bị này chỉ dành cho nhân viên đã đăng ký.<br>Kết nối của bạn đã được ghi nhận."},{m:"Bạn đã quay lại.",s:"Thiết bị này không trả lời câu hỏi.<br>Xin hãy ngắt kết nối."},{m:"Chúng tôi thấy bạn vẫn còn ở đây.",s:"Trễ rồi. Bạn nên đi ngủ.<br>Xin hãy ngắt kết nối."}],
exitsPass:[{m:"Thông tin xác thực không hợp lệ.",s:"Dữ liệu bạn cung cấp không khớp với hồ sơ của chúng tôi.<br>Lần thử của bạn đã được ghi nhận."},{m:"Vẫn chưa đúng.",s:"Thiết bị này không tha thứ cho lần sai thứ hai.<br>Xin hãy ngắt kết nối."},{m:"Dù bạn là ai, bạn không nên ở đây.",s:"Trễ rồi. Bạn nên đi ngủ.<br>Xin hãy ngắt kết nối."}],
deptTop:"PHÂN CÔNG CỤC",deptTitle:"CHỌN ĐƠN VỊ TRỰC THUỘC",deptDesc:"Xác định cục chuyên trách của bạn trong Ủy Ban.",dept1:"2. CỤC XỬ LÝ",dept2:"1. CỤC ĐIỀU TRA",dept3:"4. CỤC HẬU CẦN",dept4:"3. CỤC BẢO MẬT"}};

const $=id=>document.getElementById(id),sleep=ms=>new Promise(r=>setTimeout(r,ms));
const REDUCED=matchMedia("(prefers-reduced-motion: reduce)").matches;
const stage=$("stage"),power=$("power"),tearLayer=$("tearLayer"),glow=$("glow"),sc=$("static"),syncbar=$("syncbar");
const screens={loading:$("loading-screen"),lang:$("lang-screen"),verify:$("verify-screen"),login:$("login-screen"),exit:$("exit-screen"),access:$("access-screen"),dept:$("dept-screen")};
const nameInput=$("name-input"),passInput=$("pass-input"),formErr=$("form-err");
let LANG="en",strikes=0,busy=false,history=[],current=null,pauseGlitch=false;
const tr=k=>I18N[LANG][k];
function applyLang(){document.documentElement.lang=LANG;document.querySelectorAll("[data-i18n]").forEach(el=>{el.innerHTML=tr(el.dataset.i18n)})}

const sx=sc.getContext("2d",{alpha:false});sc.width=160;sc.height=90;
const noiseFrames=[];for(let k=0;k<4;k++){const img=sx.createImageData(160,90),d=img.data;for(let y=0;y<90;y++){const bias=Math.random()<.09?140+Math.random()*115:Math.random()*60;for(let x=0;x<160;x++){const v=Math.min(255,Math.random()*120+bias*Math.random()),i=(y*160+x)*4;d[i]=v*.55;d[i+1]=v;d[i+2]=v*.65;d[i+3]=255}}noiseFrames.push(img)}let nfi=0;function paintStatic(){sx.putImageData(noiseFrames[nfi++%4],0,0)}
let staticTimer=null;
function staticOn(){if(!staticTimer){paintStatic();staticTimer=setInterval(paintStatic,80)}}
function staticOff(){clearInterval(staticTimer);staticTimer=null}

tearLayer.inert=true;
const ghosts=[];
for(let i=0;i<T.slices;i++){const g=document.createElement("div");g.className="ghost";const inner=document.createElement("div");inner.className="in";g.appendChild(inner);tearLayer.appendChild(g);ghosts.push({g,inner})}
let band=null,lastSync=0,tearEnabled=false,rafId=null,idleTimer=null,dirty=true;

function buildClone(){
  const c=stage.cloneNode(true);
  c.removeAttribute("id");c.className="stageClone";c.style.cssText="";
  c.querySelectorAll("[id]").forEach(e=>e.removeAttribute("id"));
  c.querySelectorAll(".screen").forEach(s=>{s.style.animation="none"});
  c.querySelectorAll(".watermark").forEach(e=>e.remove());
  return c;
}
new MutationObserver(()=>{dirty=true}).observe(stage,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:["class"]});

function syncContent(now){
  if(lastSync&&(now-lastSync<450||!dirty))return;
  const c=buildClone();
  ghosts.forEach(o=>{o.inner.replaceChildren(c.cloneNode(true))});
  lastSync=now;dirty=false;
}
function hideAll(){ghosts.forEach(o=>{o.g.style.display="none"});glow.style.display="none"}

function renderBand(now){
  if(!band || !tearEnabled || pauseGlitch){ band = null; hideAll(); rafId = null; return; }
  const p = (now - band.t0) / band.dur;
  if(p >= 1){ band = null; hideAll(); rafId = null; return; }
  syncContent(now);
  ghosts.forEach((o, i) => {
    const slice = band.slices[i];
    if(!slice){ o.g.style.display = "none"; return; }
    const jitter = (Math.random() - 0.5) * slice.jitter;
    o.g.style.display = "block";
    o.g.style.clipPath = `inset(${slice.y}px 0 ${innerHeight - slice.y - slice.h}px 0)`;
    o.inner.style.transform = `translateX(${slice.dx + jitter}px)`;
  });
  glow.style.display = "none";
  rafId = requestAnimationFrame(renderBand);
}

function startBand(newBand){
  if(REDUCED || !tearEnabled || pauseGlitch || document.hidden) return;
  band = newBand;
  band.slices = [];
  const count = 3 + Math.floor(Math.random() * 3);
  for(let i = 0; i < count; i++){
    const h = 25 + Math.random() * 100;
    const y = Math.random() * (innerHeight - h);
    band.slices.push({ y, h, dx: (Math.random() - 0.5) * T.maxShift * 2.5, jitter: 8 + Math.random() * 22 });
  }
  lastSync = 0;
  if(!rafId){ rafId = requestAnimationFrame(renderBand); }
}

function burst(amp = 1.8, dur){
  if(REDUCED || !tearEnabled || pauseGlitch) return;
  spawnMTD();
  startBand({ t0: performance.now(), dur: dur || (90 + Math.random() * 180), amp });
}
window.tearBurst = burst;

idleTimer = setInterval(() => {
  if(!tearEnabled || REDUCED || pauseGlitch || band || document.hidden) return;
  if(Math.random() < 0.38){ burst(1.5, 90 + Math.random() * 180); }
}, 1800);

const OUT=360,IN=520;
const F=(b,bl,x)=>`brightness(${b}) blur(${bl}px) drop-shadow(${-x}px 0 rgba(255,0,0,.55)) drop-shadow(${x}px 0 rgba(0,110,255,.55))`;
const outKF=[{transform:"translate(0,0) skewX(0deg) scaleY(1)",filter:F(1,0,0),opacity:1},{transform:"translate(-7px,0) skewX(2deg) scaleY(1)",filter:F(1.4,0,4),opacity:1,offset:.3},{transform:"translate(9px,5vh) skewX(-4deg) scaleY(.98)",filter:F(1.9,1,8),opacity:.9,offset:.65},{transform:"translate(-4px,16vh) skewX(3deg) scaleY(.9)",filter:F(2.6,3,12),opacity:.25}];
const inKF=[{transform:"translate(6px,-16vh) skewX(-3deg) scaleY(1.08)",filter:F(2.4,3,12),opacity:.25},{transform:"translate(-6px,4vh) skewX(3deg) scaleY(1.02)",filter:F(1.6,1,7),opacity:.8,offset:.35},{transform:"translate(3px,-1.5vh) skewX(-1deg) scaleY(1)",filter:F(1.2,0,3),opacity:1,offset:.65},{transform:"translate(0,0) skewX(0deg) scaleY(1)",filter:F(1,0,0),opacity:1}];

async function transition(swap){
  if(busy)return;busy=true;document.body.classList.add("busy");
  if(REDUCED){swap();finishFocus();busy=false;document.body.classList.remove("busy");return}
  staticOn();
  syncbar.animate([{transform:"translateY(-20vh)",opacity:.9},{transform:"translateY(108vh)",opacity:.9}],{duration:OUT+IN*.9,easing:"cubic-bezier(.5,0,.6,1)"});
  sc.animate([{opacity:0},{opacity:.5,offset:.4},{opacity:.12,offset:.75},{opacity:0}],{duration:OUT+IN,easing:"linear"});
  burst(2.2,OUT+160);
  const outA=stage.animate(outKF,{duration:OUT,easing:"ease-in",fill:"forwards"});
  await outA.finished;
  swap();burst(1.8,IN*.65);
  const inA=stage.animate(inKF,{duration:IN,easing:"ease-out"});
  outA.cancel();await inA.finished;
  staticOff();busy=false;document.body.classList.remove("busy");finishFocus();
}
function finishFocus(){const el=current&&screens[current].querySelector("input, button");if(el)el.focus({preventScroll:true})}

let welcomeTimers=[];
function startWelcome(){
  stopWelcome();
  const block=$("init-block"),dots=$("dots");
  block.classList.remove("show");dots.textContent="";
  welcomeTimers.push(setTimeout(()=>block.classList.add("show"),1200));
  let n=0;
  welcomeTimers.push(setInterval(()=>{n=(n+1)%4;dots.textContent=".".repeat(n)},450));
  welcomeTimers.push(setTimeout(()=>{if(current==="access")go("dept")},5000));
}
function stopWelcome(){welcomeTimers.forEach(t=>{clearTimeout(t);clearInterval(t)});welcomeTimers=[]}
function render(name){Object.values(screens).forEach(s=>s.classList.add("hidden"));screens[name].classList.remove("hidden");current=name;if(name==="login"){passInput.value="";formErr.textContent=""}if(name==="access")startWelcome();else stopWelcome()}
function go(name,prep){return transition(()=>{if(prep)prep();history.push(name);render(name)})}
function back(){
  if(busy||history.length<2)return;
  return transition(()=>{
    if(current==="dept")history.pop();
    history.pop();
    render(history[history.length-1]);
  });
}
document.querySelectorAll("[data-back]").forEach(b=>b.addEventListener("click",back));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!busy&&history.length>1&&screens[current].querySelector("[data-back]")){if(document.querySelector(".mg-overlay, .processing-game-overlay, .dossier-modal:not(.hidden)"))return;back()}});

function degauss(ms){return new Promise(res=>{const t0=performance.now();staticOn();sc.animate([{opacity:.3},{opacity:0}],{duration:ms,easing:"ease-out"});
function step(now){const t=Math.min(1,(now-t0)/ms),d=Math.pow(1-t,2),warm=Math.min(1,t/.3);
const x=Math.sin(t*46)*16*d,y=Math.sin(t*31)*5*d,hue=Math.sin(t*26)*60*d,sk=Math.sin(t*37)*2.2*d,s=1+Math.sin(t*21)*.02*d;
stage.style.transform=`translate(${x}px,${y}px) skewX(${sk}deg) scale(${s})`;
stage.style.filter=`hue-rotate(${hue}deg) blur(${d*3}px) brightness(${.2+.8*warm+d*.6})`;
if(t<1)requestAnimationFrame(step);else{stage.style.transform="";stage.style.filter="";staticOff();res()}}
requestAnimationFrame(step)})}

function runLoading(){return new Promise(resolve=>{const bar=$("loading-progress"),pct=$("loading-percent"),label=$("loading-label");let p=0,tore=false;
const iv=setInterval(()=>{p=Math.min(100,p+Math.floor(Math.random()*4)+1);bar.style.width=p+"%";pct.textContent=p+"%";
const m=LOADING_MSGS[Math.min(Math.floor(p/21),LOADING_MSGS.length-1)];label.textContent=m[0];label.style.color=m[1]||"";
if(!tore&&p>55){tore=true;burst()}
if(p>=100){clearInterval(iv);setTimeout(resolve,700)}} ,65)})}

async function boot(){await sleep(700);power.classList.add("on");await sleep(700);render("loading");stage.style.visibility="visible";await degauss(1800);tearEnabled=true;await runLoading();await go("lang")}

$("lang-en").addEventListener("click",()=>{LANG="en";applyLang();go("verify")});
$("lang-vi").addEventListener("click",()=>{LANG="vi";applyLang();go("verify")});
$("yes-btn").addEventListener("click",()=>go("login"));
$("no-btn").addEventListener("click",()=>showExit(tr("exitsNo")));
function showExit(list){const lv=Math.min(strikes,list.length-1);strikes++;go("exit",()=>{$("exit-message").innerHTML=list[lv].m;$("exit-message").classList.toggle("err",lv===list.length-1);$("exit-subtext").innerHTML=list[lv].s})}
function submit(){if(busy)return;const n=nameInput.value.trim();if(!n){formErr.textContent=tr("nameEmpty");nameInput.focus();return}formErr.textContent="";if(passInput.value===PASSCODE)go("access",()=>{$("who").textContent=n});else showExit(tr("exitsPass"))}
$("submit-btn").addEventListener("click",submit);
nameInput.addEventListener("keydown",e=>{if(e.key==="Enter")passInput.focus()});
passInput.addEventListener("keydown",e=>{if(e.key==="Enter")submit()});
$("disc-btn").addEventListener("click",shutdown);

async function shutdown(){
if(busy)return;busy=true;document.body.classList.add("busy");
staticOn();
sc.animate([{opacity:0},{opacity:.85}],{duration:1400,easing:"ease-in",fill:"forwards"});
stage.animate([{transform:"none",filter:"brightness(1) contrast(1) hue-rotate(0deg) blur(0px)"},{transform:"translateX(-10px) skewX(4deg)",filter:"brightness(1.6) contrast(1.6) hue-rotate(40deg) blur(1px)",offset:.35},{transform:"translate(12px,6vh) skewX(-6deg) scaleY(.85)",filter:"brightness(2.2) contrast(3) hue-rotate(-40deg) blur(2px)",offset:.7},{transform:"translate(-6px,18vh) scaleY(.5)",filter:"brightness(3) contrast(4) hue-rotate(0deg) blur(4px)"}],{duration:1400,easing:"ease-in",fill:"forwards"});
for(let i=0;i<4;i++){burst(2.2,200);await sleep(300)}
await sleep(100);
tearEnabled=false;clearInterval(idleTimer);stage.style.visibility="hidden";
sc.getAnimations().forEach(a=>a.cancel());
sc.animate([{opacity:.85},{opacity:0}],{duration:700,fill:"forwards"});
power.classList.remove("on");power.classList.add("off");
await sleep(1000);staticOff();document.body.classList.add("dead")}

function spawnMTD(){
if(document.body.classList.contains("dead")||REDUCED||IS_LITE||pauseGlitch)return;
const el=document.createElement("div"),v=["MTD","M.T.D","MTD//01","[MTD]"],t=v[Math.floor(Math.random()*v.length)];
el.className="mtd";el.textContent=t;
el.style.left=(8+Math.random()*82)+"vw";el.style.top=(8+Math.random()*82)+"vh";
el.style.fontSize=(10+Math.floor(Math.random()*6))+"px";
document.body.appendChild(el);setTimeout(()=>el.remove(),850)}
setInterval(()=>{if(!document.hidden&&Math.random()<.55)spawnMTD()},5500);

$("dept-logistics").addEventListener("click",()=>alert("Đã vào: Cục Hậu Cần"));
$("dept-security").addEventListener("click",()=>alert("Đã vào: Cục Bảo Mật"));

window.adminUnlocked = false;
const langAdminBtn = $("lang-admin-btn"), langAdminBox = $("lang-admin-box");
const langAdminUser = $("lang-admin-user"), langAdminPass = $("lang-admin-pass"), langAdminErr = $("lang-admin-err");

langAdminBtn.addEventListener("click", () => {
  langAdminBtn.classList.add("hidden");
  langAdminBox.classList.remove("hidden");
  langAdminErr.textContent = "";
  langAdminUser.value = "";
  langAdminPass.value = "";
  langAdminUser.focus();
});

$("lang-admin-cancel").addEventListener("click", () => {
  langAdminBox.classList.add("hidden");
  langAdminBtn.classList.remove("hidden");
});

function checkLangAdmin() {
  if (langAdminUser.value.trim().toLowerCase() === "mtd" && langAdminPass.value === "666") {
    window.adminUnlocked = true;
    langAdminBox.classList.add("hidden");
    $("admin-dock").classList.remove("hidden");
  } else {
    langAdminErr.textContent = "SAI TÀI KHOẢN HOẶC MẬT KHẨU!";
    langAdminPass.value = "";
    langAdminPass.focus();
  }
}

$("lang-admin-ok").addEventListener("click", checkLangAdmin);
langAdminUser.addEventListener("keydown", e => { if (e.key === "Enter") langAdminPass.focus(); });
langAdminPass.addEventListener("keydown", e => { if (e.key === "Enter") checkLangAdmin(); });

$("admin-toggle").addEventListener("click", () => {
  const dock = $("admin-dock");
  dock.classList.toggle("collapsed");
  $("admin-arrow").textContent = dock.classList.contains("collapsed") ? "[+]" : "[−]";
});

document.querySelectorAll("[data-warp]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.warp;

    if (window.cancelTeamSelection) {
      window.cancelTeamSelection();
    }

    go(target);
  });
});

applyLang(); boot();