window.sections = [...document.querySelectorAll('.bg-section')];
window.lastScrollTop = window.pageYOffset;

document.body.style.background = window.sections[0].getAttribute('data-bg');

window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrollTop = window.pageYOffset;
  const section = window.sections.map(section => {
      const el = section;
      const rect = el.getBoundingClientRect();
      return {el, rect};
  }).find(section => section.rect.bottom >= (window.innerHeight * 0.5))
  document.body.style.background = section.el.getAttribute('data-bg');
}