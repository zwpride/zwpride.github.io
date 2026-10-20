/* Native scrolling, cached section geometry, and a compositor-only nav lens. */
const nav=document.querySelector('nav');
const navLinks=[...nav.querySelectorAll('a')];
const lens=nav.querySelector('.nav-lens');
const sections=navLinks.map(a=>document.querySelector(a.hash));
let activeLink=navLinks.find(a=>a.hash===location.hash)||navLinks[0];
let sectionTops=[],linkGeometry=[],pendingLink=null,settleTimer=0,scrollQueued=false;
const motionPreference=matchMedia('(prefers-reduced-motion:reduce)');
function positionLens(){
  const geometry=linkGeometry[navLinks.indexOf(activeLink)];
  if(geometry)lens.style.transform=`translateX(${geometry.left}px) scaleX(${geometry.width/100})`;
}
function activate(link){
  if(!link)return;
  activeLink=link;
  navLinks.forEach(a=>{a.classList.toggle('active',a===link);if(a===link)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
  positionLens();
}
function syncFromScroll(){
  let index=0;
  sectionTops.forEach((top,i)=>{if(top<=scrollY+150)index=i;});
  // The final section may be too short to reach the top activation threshold.
  if(scrollY>0&&scrollY+innerHeight>=document.documentElement.scrollHeight-2)index=navLinks.length-1;
  if(activeLink!==navLinks[index])activate(navLinks[index]);
}
function finishNavigation(){
  clearTimeout(settleTimer);
  pendingLink=null;
  syncFromScroll();
}
function queueScroll(){
  if(pendingLink){
    clearTimeout(settleTimer);
    settleTimer=setTimeout(finishNavigation,160);
  }
  if(scrollQueued)return;
  scrollQueued=true;
  requestAnimationFrame(()=>{
    scrollQueued=false;
    if(!pendingLink)syncFromScroll();
  });
}
let measureQueued=false;
function measure(){
  if(measureQueued)return;
  measureQueued=true;
  requestAnimationFrame(()=>{
    measureQueued=false;
    const n=nav.getBoundingClientRect();
    linkGeometry=navLinks.map(a=>{const r=a.getBoundingClientRect();return {left:r.left-n.left,width:r.width};});
    sectionTops=sections.map(s=>s.getBoundingClientRect().top+scrollY);
    nav.dataset.ready='false';
    positionLens();
    if(!pendingLink)syncFromScroll();
    requestAnimationFrame(()=>{nav.dataset.ready='true';});
  });
}
navLinks.forEach(a=>a.addEventListener('click',()=>{
  pendingLink=a;
  activate(a);
  clearTimeout(settleTimer);
  settleTimer=setTimeout(finishNavigation,motionPreference.matches?180:1200);
}));
addEventListener('scroll',queueScroll,{passive:true});
addEventListener('scrollend',finishNavigation,{passive:true});
addEventListener('wheel',()=>{if(pendingLink)finishNavigation();},{passive:true});
addEventListener('touchstart',()=>{if(pendingLink)finishNavigation();},{passive:true});
addEventListener('keydown',e=>{if(pendingLink&&['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(e.key))finishNavigation();});
addEventListener('hashchange',()=>{const link=navLinks.find(a=>a.hash===location.hash);if(link&&pendingLink)activate(link);});
addEventListener('pageshow',measure);
if('ResizeObserver'in window){
  const observer=new ResizeObserver(measure);
  observer.observe(nav);
  observer.observe(document.querySelector('main'));
}else addEventListener('resize',measure);
if(document.fonts)document.fonts.ready.then(measure);
activate(activeLink);
measure();
