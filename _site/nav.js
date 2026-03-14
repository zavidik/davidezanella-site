/* ══════════════════════════════════════════
   NAV.JS — navbar condivisa
   Per aggiungere una voce: modifica NAV_ITEMS
   ══════════════════════════════════════════ */

const NAV_ITEMS = [
  { href: 'index.html',    emoji: '🏠', label: 'Home' },
  { divider: true },
  { href: 'bacheca.html',  emoji: '📌', label: 'Bacheca' },
  { href: 'articoli.html', emoji: '📝', label: 'Articoli' },
  { divider: true },
  {
    emoji: '👤', label: 'Su di me',
    dropdown: [
      { href: 'about.html',    emoji: '👤', label: 'Chi sono' },
      { href: 'cv.html',       emoji: '📄', label: 'Curriculum' },
      { href: 'contatti.html', emoji: '✉️', label: 'Contatti' },
    ]
  },
];

function buildNav(activePage) {
  const items = NAV_ITEMS.map(item => {
    if (item.divider) {
      return '<div class="nav-divider"></div>';
    }
    if (item.dropdown) {
      const isActive = item.dropdown.some(d => d.href === activePage);
      const dropItems = item.dropdown.map(d =>
        `<a class="nav-dropdown-item" href="${d.href}">${d.emoji} ${d.label}</a>`
      ).join('');
      return `
        <div class="nav-dropdown">
          <span class="nav-link nav-dropdown-toggle${isActive ? ' active' : ''}">
            ${item.emoji} <span>${item.label}</span> <span class="chevron">▾</span>
          </span>
          <div class="nav-dropdown-menu">
            <div class="nav-dropdown-menu-inner">${dropItems}</div>
          </div>
        </div>`;
    }
    const isActive = item.href === activePage;
    return `<a class="nav-link${isActive ? ' active' : ''}" href="${item.href}">${item.emoji} <span>${item.label}</span></a>`;
  }).join('');

  return `<nav class="navbar">
  <a class="nav-logo" href="index.html">Davide Zanella</a>
  <div class="nav-links">${items}</div>
</nav>`;
}

function initNav(activePage) {
  // Inject navbar
  document.body.insertAdjacentHTML('afterbegin', buildNav(activePage));

  // Scroll to top button
  document.body.insertAdjacentHTML('beforeend', '<a class="scroll-top" id="scrollTop" href="#" title="Torna su">&#8593;</a>');
  const st = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => st.classList.toggle('visible', window.scrollY > 300));
  st.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // Mobile dropdown toggle
  document.querySelectorAll('.nav-dropdown').forEach(d => {
    d.querySelector('.nav-dropdown-toggle').addEventListener('click', e => {
      e.stopPropagation();
      d.classList.toggle('open');
    });
  });
  document.addEventListener('click', () =>
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'))
  );
}
