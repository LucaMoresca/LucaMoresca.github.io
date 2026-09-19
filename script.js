const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.querySelector('.sr-only').textContent = isOpen ? 'Close menu' : 'Open menu';
});

mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filters.forEach((filter) => filter.addEventListener('click', () => {
  const selected = filter.dataset.filter;
  filters.forEach((item) => item.classList.toggle('is-active', item === filter));
  projects.forEach((project) => {
    project.hidden = selected !== 'all' && project.dataset.category !== selected;
  });
}));

const sections = [...document.querySelectorAll('.page-section[id]')];
const navLinks = [...document.querySelectorAll('.rail-nav a')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-25% 0px -65% 0px' });
sections.forEach((section) => sectionObserver.observe(section));

document.querySelector('#year').textContent = new Date().getFullYear();

});
