const $=s=>document.querySelector(s);
const nav=$(".nav-wrap"),menu=$(".menu-btn"),theme=$("#themeBtn");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-wrap>a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const saved=localStorage.getItem("theme");
if(saved==="light") document.documentElement.dataset.theme="light";
theme.addEventListener("click",()=>{
  const light=document.documentElement.dataset.theme==="light";
  document.documentElement.dataset.theme=light?"":"light";
  localStorage.setItem("theme",light?"dark":"light");
  theme.textContent=light?"☼":"☾";
});
theme.textContent=document.documentElement.dataset.theme==="light"?"☾":"☼";

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));

document.querySelectorAll("[data-link]").forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    const type=a.dataset.link;
    const url="https://github.com/mach-ag01";
    if(!url.includes("YOUR-")) window.open(url,"_blank");
    
  });
});
$("#year").textContent=new Date().getFullYear();
