(() => {
  const root = document.getElementById('aums-gesamt') || document.getElementById('aums-legal') || document.getElementById('aums-contact');
  if (!root) return;
  const paths = {
    'arrow-up-right': '<path d="M7 17 17 7M7 7h10v10"/>',
    'arrow-down': '<path d="M12 5v14m-6-6 6 6 6-6"/>',
    'arrow-up': '<path d="M12 19V5m-6 6 6-6 6 6"/>',
    'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.57 2.79.69A2 2 0 0 1 22 16.92z"/>',
    'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    'graduation-cap': '<path d="m2 10 10-5 10 5-10 5-10-5zm4 2v5c3 3 9 3 12 0v-5m4-2v7"/>',
    'award': '<circle cx="12" cy="8" r="6"/><path d="m8.2 12.6-1.2 9.4 5-3 5 3-1.2-9.4"/>',
    'menu': '<path d="M4 6h16M4 12h16M4 18h16"/>'
  };
  root.querySelectorAll('[data-lucide]').forEach(el => {
    const content = paths[el.dataset.lucide];
    if (!content) return;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox','0 0 24 24');
    svg.setAttribute('fill','none');
    svg.setAttribute('stroke','currentColor');
    svg.setAttribute('stroke-width','1.6');
    svg.setAttribute('stroke-linecap','round');
    svg.setAttribute('stroke-linejoin','round');
    svg.setAttribute('aria-hidden','true');
    svg.innerHTML = content;
    el.replaceWith(svg);
  });
  const menu = root.querySelector('.ad-menu');
  const mobile = document.getElementById(menu.getAttribute('aria-controls'));
  const close = () => { mobile.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Menü öffnen'); };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    mobile.hidden = !open;
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  });
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click',close));
  root.addEventListener('keydown', e => { if(e.key==='Escape'){close();menu.focus();} });
})();
