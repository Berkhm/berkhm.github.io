// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Highlight the nav link of the section currently in view
const navLinks = [...links.querySelectorAll('a')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((a) => a.classList.toggle('active', a.hash === '#' + entry.target.id));
  });
}, { rootMargin: '-40% 0px -55% 0px' });

document.querySelectorAll('main section[id]').forEach((s) => observer.observe(s));

document.getElementById('year').textContent = new Date().getFullYear();
