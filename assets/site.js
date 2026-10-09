/* SSA · El Sistema — shared: language toggle (ES/EN) + scroll reveal */
(function(){
  const KEY="ssa-bh-lang";
  // Spanish is ALWAYS the default. EN only for this tab (sessionStorage) or with ?lang=en.
  const KEY2="ssa-site-lang";
  const get=()=>{const q=new URLSearchParams(location.search).get("lang");if(q=="en"||q=="es")return q;try{return sessionStorage.getItem(KEY2)||"es"}catch(e){return "es"}};
  const set=v=>{try{sessionStorage.setItem(KEY2,v)}catch(e){}};
  window.SSA={lang:get(),
    t(k){const T=window.T||{};return (T[this.lang]&&T[this.lang][k])??(T.es&&T.es[k])??""},
    apply(){
      document.documentElement.lang=this.lang;
      document.querySelectorAll("[data-i]").forEach(e=>{e.textContent=this.t(e.dataset.i)});
      document.querySelectorAll("[data-ih]").forEach(e=>{e.innerHTML=this.t(e.dataset.ih)});
      document.querySelectorAll("[data-ia]").forEach(e=>{const [a,k]=e.dataset.ia.split(":");e.setAttribute(a,this.t(k))});
      const b=document.getElementById("langBtn");if(b)b.textContent=this.lang=="es"?"EN":"ES";
      if(window.onLang)window.onLang(this.lang);
    }};
  document.addEventListener("DOMContentLoaded",()=>{
    const b=document.getElementById("langBtn");
    if(b)b.onclick=()=>{SSA.lang=SSA.lang=="es"?"en":"es";set(SSA.lang);SSA.apply()};
    SSA.apply();
    const els=document.querySelectorAll(".rv");
    if(!("IntersectionObserver" in window)){els.forEach(e=>e.classList.add("in"));return}
    const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target)}}),{rootMargin:"0px 0px -8% 0px",threshold:.08});
    els.forEach(e=>io.observe(e));
    window.SSA.observe=el=>io.observe(el);
  });
})();
