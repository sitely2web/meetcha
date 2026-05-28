// Nav: transparent → solid on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Scroll-triggered fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Stagger siblings within the same parent
document.querySelectorAll('.fade-up').forEach((el, i) => {
  const siblings = Array.from(el.parentElement.querySelectorAll('.fade-up'));
  const siblingIndex = siblings.indexOf(el);
  el.style.transitionDelay = `${siblingIndex * 80}ms`;
  observer.observe(el);
});
