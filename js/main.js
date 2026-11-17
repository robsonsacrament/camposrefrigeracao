/* ============================================================
   CAMPOS CLIMATIZAÇÃO - JAVASCRIPT (CORRIGIDO)
   ============================================================ */

// --- MENU MOBILE ---
const menuToggle = document.querySelector('.mobile-toggle');
const mobileNav = document.getElementById('mobile-nav');
const iconMenu = document.querySelector('.icon-menu');
const iconClose = document.querySelector('.icon-close');

function setMenu(open) {
  if (!menuToggle || !mobileNav) return;
  
  if (open) {
    mobileNav.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    if (iconMenu) iconMenu.classList.add('hidden');
    if (iconClose) iconClose.classList.remove('hidden');
  } else {
    mobileNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (iconMenu) iconMenu.classList.remove('hidden');
    if (iconClose) iconClose.classList.add('hidden');
  }
}

// Inicializa menu fechado
setMenu(false);

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.contains('is-open');
  setMenu(!isOpen);
});

// Fecha menu ao clicar em link
mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

// Fecha menu ao clicar fora
document.addEventListener('click', (e) => {
  if (mobileNav && mobileNav.classList.contains('is-open')) {
    if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
      setMenu(false);
    }
  }
});

// --- FAQ ACCORDION ---
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    const toggle = item.querySelector('.faq-toggle');
    if (toggle) toggle.textContent = item.open ? '−' : '+';
  });
});

// --- ANIMAÇÕES REVEAL ---
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}

// --- SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});