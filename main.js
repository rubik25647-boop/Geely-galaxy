// ============================================================
// GEELY GALAXY — MAIN JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Burger menu ---
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      burger.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.textContent = '☰';
      });
    });
  }

  // --- Header shadow on scroll ---
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 20
        ? '0 2px 20px rgba(0,0,0,0.08)'
        : 'none';
    });
  }

  // --- Scroll fade-in ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.model-card, .offer-card, .owners-card, .step-card, .perk, .spec-cell, .dealer-item'
  ).forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = '.fade-visible { opacity: 1 !important; transform: none !important; }';
  document.head.appendChild(style);

  // --- Close modal on overlay click ---
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });

});
