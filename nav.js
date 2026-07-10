/* ══════════════════════════════════════════
   NAV.JS — navbar condivisa
   Per aggiungere una voce: modifica NAV_ITEMS
   ══════════════════════════════════════════ */

const NAV_ITEMS = [
  { href: 'index.html',    emoji: '🏠', label: 'Home' },
  { divider: true },
  { href: 'bacheca.html',  emoji: '📌', label: 'Bacheca' },
  { href: 'articoli.html', emoji: '📝', label: 'Articoli' },
  { href: 'galleria.html', emoji: '📷', label: 'Galleria' },
  { divider: true },
  {
    emoji: '👤', label: 'Su di me',
    dropdown: [
      { href: 'about.html',    emoji: '👤', label: 'Chi sono' },
      { href: 'cv.html',       emoji: '📄', label: 'Curriculum' },
      { href: 'contatti.html', emoji: '✉️', label: 'Contatti' },
      { href: 'archivio.html', emoji: '🗂️', label: 'Archivio' },
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

  // Open Graph meta tags per anteprima sui social
  // Aggiunge og:image di default se non è già presente nella pagina
  if (!document.querySelector('meta[property="og:image"]')) {
    const metas = [
      { property: 'og:type',        content: 'website' },
      { property: 'og:site_name',   content: 'Davide Zanella' },
      { property: 'og:image',       content: 'https://davidezanella.com/img/profilo.jpg' },
      { property: 'og:image:width',  content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card',       content: 'summary_large_image' },
      { name: 'twitter:image',      content: 'https://davidezanella.com/img/profilo.jpg' },
    ];
    metas.forEach(function(m) {
      const el = document.createElement('meta');
      if (m.property) el.setAttribute('property', m.property);
      if (m.name)     el.setAttribute('name', m.name);
      el.setAttribute('content', m.content);
      document.head.appendChild(el);
    });
    // og:title e og:url dinamici
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', document.title || 'Davide Zanella');
    document.head.appendChild(ogTitle);

    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', window.location.href);
    document.head.appendChild(ogUrl);

    const ogDesc = document.querySelector('meta[name="description"]');
    if (ogDesc) {
      const el = document.createElement('meta');
      el.setAttribute('property', 'og:description');
      el.setAttribute('content', ogDesc.getAttribute('content'));
      document.head.appendChild(el);
    }
  }


  
  // Umami analytics
  if (!document.querySelector('script[src*="umami"]')) {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://cloud.umami.is/script.js';
    s.setAttribute('data-website-id', 'c710fae6-0fb3-47f0-bd14-140d6e3e363d');
    document.head.appendChild(s);
  }
}
