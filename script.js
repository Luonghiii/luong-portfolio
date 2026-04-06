const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => { navLinks.classList.toggle('active'); });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => { navLinks.classList.remove('active'); });
  });
}
// Scroll-based nav
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.borderBottomColor = window.scrollY > 50 ? 'rgba(34,34,34,0.8)' : 'rgba(34,34,34,1)';
});
// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('animate-in'); observer.unobserve(entry.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
const style = document.createElement('style');
style.textContent = '.animate-in { opacity:1!important; transform:translateY(0)!important; }';
document.head.appendChild(style);
document.querySelectorAll('.card, .skill-item, .contact-card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 400ms ease-out, transform 400ms ease-out';
  el.style.transitionDelay = `${i * 80}ms`;
  observer.observe(el);
});