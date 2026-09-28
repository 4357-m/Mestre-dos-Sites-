// WhatsApp - TROCA AQUI SEU NÚMERO
function openWhats(){
  const numero = "258851402874 "; // <--- COLOCA TEU NUMERO AQUI
  const msg = "Olá Mestre dos Sites! Quero um site que vende.";
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Scroll Reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.15});

document.querySelectorAll('.card, .tech-item').forEach(el=>observer.observe(el));

// Parallax leve nos cards
window.addEventListener('scroll', ()=>{
  const scrolled = window.pageYOffset;
  document.querySelectorAll('.parallax img').forEach(img=>{
    const speed = 0.15;
    img.style.transform = `translateY(${scrolled * speed * 0.1}px) scale(1.08)`;
  });
});

// Contador animado 180+ e 35%
function animateCount(el, target, suffix){
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(()=>{
    current += increment;
    if(current >= target){
      clearInterval(timer);
      el.textContent = target + suffix;
    }else{
      el.textContent = Math.floor(current) + suffix;
    }
  },30);
}

const countObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting && !entry.target.classList.contains('counted')){
      const target = parseInt(entry.target.dataset.count);
      const suffix = entry.target.textContent.includes('%') ? '%' : '+';
      animateCount(entry.target, target, suffix);
      entry.target.classList.add('counted');
    }
  });
});
document.querySelectorAll('[data-count]').forEach(el=>countObserver.observe(el));

// Smooth scroll menu
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
  });
});

console.log("MESTRE DOS SITES - Site carregado 99/100 PageSpeed");
