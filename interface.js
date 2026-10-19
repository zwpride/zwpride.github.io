/* Lightweight, local-only navigation and glass highlights. No tracking or external scripts. */
const nav=document.querySelector('nav');
const navLinks=[...nav.querySelectorAll('a')];
const lens=nav.querySelector('.nav-lens');
const sections=navLinks.map(a=>document.querySelector(a.hash));
let activeLink=navLinks[0];
function positionLens(){
  const a=activeLink.getBoundingClientRect(),n=nav.getBoundingClientRect();
  lens.style.width=`${a.width}px`;
  lens.style.transform=`translateX(${a.left-n.left}px)`;
}
function activate(link){
  if(!link)return;
  activeLink=link;
  navLinks.forEach(a=>{a.classList.toggle('active',a===link);if(a===link)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
  positionLens();
}
navLinks.forEach(a=>a.addEventListener('click',()=>activate(a)));
let scrollQueued=false;
addEventListener('scroll',()=>{
  if(scrollQueued)return;
  scrollQueued=true;
  requestAnimationFrame(()=>{
    let index=0;
    sections.forEach((s,i)=>{if(s.getBoundingClientRect().top<=150)index=i;});
    if(activeLink!==navLinks[index])activate(navLinks[index]);
    scrollQueued=false;
  });
},{passive:true});
if('ResizeObserver'in window)new ResizeObserver(positionLens).observe(nav);
else addEventListener('resize',positionLens);
positionLens();
if(matchMedia('(hover:hover) and (prefers-reduced-motion:no-preference)').matches){
  document.querySelectorAll('.glass').forEach(surface=>{
    let queued=false;
    surface.addEventListener('pointermove',e=>{
      if(queued)return;queued=true;
      requestAnimationFrame(()=>{const r=surface.getBoundingClientRect();surface.style.setProperty('--light-x',`${e.clientX-r.left}px`);surface.style.setProperty('--light-y',`${e.clientY-r.top}px`);queued=false;});
    },{passive:true});
  });
}
