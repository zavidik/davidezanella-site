/* ══════════════════════════════════════════
   CARDS.JS — category card della homepage
   Per modificare le card: edita CATEGORIES
   ══════════════════════════════════════════ */

const CATEGORIES = [
  {
    id: 'musica',
    icon: '🪊',
    title: 'Musica',
    items: [
      { icon: '🎵', logo: 'img/loghi/doremitici_logo.png', title: 'i DoReMitici',               desc: 'Gruppo musicale',      url: 'doremitici.html' },
      { icon: '🪊', logo: 'img/loghi/banda_palazzolo_logo.png', title: 'Banda di Palazzolo Milanese', desc: 'Dir. Enrico Tiso',    url: 'banda-palazzolo.html' },
      { icon: '🏫', title: 'La Scuola che sBanda', desc: '',   url: 'scuola-che-sbanda.html', indent: true },
      { icon: '🎶', logo: 'img/loghi/banda_cusano_logo.png', title: 'Banda di Cusano Milanino',   desc: 'Dir. Stefano Bertoni', url: 'banda-cusano.html' },
      { icon: '🎼', title: 'La mia storia musicale', desc: 'Trombone e bande', url: 'musica.html' },
      
    ]
  },
  {
    id: 'media',
    icon: '🎬',
    title: 'Contenuti',
    items: [
      { icon: '▶️',  logo: 'img/loghi/youtube_logo.png', title: 'YouTube',          desc: 'Davide Zanella',       url: 'youtube.html' },
      { icon: '📱', title: 'Here, The Series', desc: 'Video e Blog', url: 'here-the-series.html', indent: true },
    ]
  },
  {
    id: 'lavoro',
    icon: '🎓',
    title: 'Formazione & Lavoro',
    items: [
      { icon: '🎓', title: 'Percorso di Studi', desc: 'Ingegneria Informatica · PoliMI', url: 'formazione.html' },
      { icon: '📐', title: 'Ripetizioni',        desc: 'Matematica e fisica · Liceo',     url: 'ripetizioni.html' },
      { icon: '🗳️', title: 'Presidente di Seggio',        desc: 'Elezioni politiche e referendum',     url: 'seggio-elettorale.html' },
    ]
  },
  {
    id: 'tech',
    icon: '🏠',
    title: 'Progetti Digitali',
    items: [
      { icon: '🏠', title: 'SmartHome', desc: 'Home Assistant & domotica', url: 'smart-home.html' }, // Smart Home - Home Assistant & domotica
    ]
  },
  {
    id: 'sport',
    icon: '🏃',
    title: 'Sport',
    items: [
      { icon: '🏃', title: 'La mia storia sportiva', desc: 'Ginnastica, Acrogym, Atletica', url: 'sport.html' },
    ]
  },
];

// CSS delle card (iniettato una sola volta)
const CARDS_CSS = `
  .main-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; }
  .main-grid > div { flex: 0 0 220px; max-width: 260px; }
  .cat-card {
    background: var(--card); border: 1px solid var(--border);
    border-radius: var(--radius); box-shadow: var(--shadow);
    overflow: hidden; transition: box-shadow .25s, border-color .25s, transform .25s;
    cursor: pointer; width: 100%; min-height: 104px;
  }
  @media (hover: hover) {
    .cat-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,.13); transform: translateY(-3px); }
    .cat-card:hover .sub-links { max-height: 600px; opacity: 1; padding-bottom: 12px; }
    .cat-card:hover .card-chevron { transform: rotate(180deg); }
    .cat-card:hover .cat-bar { height: 4px; }
    .cat-card:hover .sub-divider { opacity: 1; }
  }
  .cat-card.open { box-shadow: 0 8px 32px rgba(0,0,0,.13); transform: translateY(-3px); }
  .cat-card.open .sub-links { max-height: 600px; opacity: 1; padding-bottom: 12px; }
  .cat-card.open .card-chevron { transform: rotate(180deg); }
  .cat-card.open .cat-bar { height: 4px; }
  .cat-card.open .sub-divider { opacity: 1; }
  .cat-bar { height: 3px; width: 100%; transition: height .25s; }
  .card-head { display: flex; align-items: flex-start; gap: 14px; padding: 18px 18px 16px; }
  .cat-icon { font-size: 1.9rem; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 12px; background: var(--bg); flex-shrink: 0; }
  .card-head-text { flex: 1; min-width: 0; }
  .card-head-title { font-weight: 600; font-size: 1rem; line-height: 1.2; margin-bottom: 3px; }
  .card-head-count { font-size: .75rem; color: var(--muted); display: block; }
  .card-chevron { color: var(--muted); font-size: .8rem; transition: transform .25s; flex-shrink: 0; margin-left: 8px; }
  .sub-links { max-height: 0; opacity: 0; overflow: hidden; transition: max-height .35s ease, opacity .25s ease, padding-bottom .25s; padding: 0 12px; }
  .sub-link { display: flex; align-items: center; gap: 10px; padding: 9px 10px; border-radius: 10px; text-decoration: none; color: var(--text); font-size: .85rem; transition: background .15s, color .15s; margin-bottom: 2px; }
  .sub-link:hover { background: var(--bg); }
  .sub-link.indented { margin-left: 14px; padding-left: 10px; border-left: 2px solid var(--border); border-radius: 0 10px 10px 0; font-size: .82rem; }
  .sub-link.indented .sub-link-text { color: var(--muted); }
  .sub-link.indented:hover .sub-link-text { color: var(--text); }
  .sub-link-icon { font-size: 1rem; width: 24px; text-align: center; flex-shrink: 0; }
  .sub-link-text { flex: 1; line-height: 1.3; min-width: 0; }
  .sub-link-desc { font-size: .72rem; color: var(--muted); display: block; }
  .sub-link-arrow { font-size: .75rem; color: var(--muted); transition: transform .15s; flex-shrink: 0; margin-left: 6px; }
  .sub-link:hover .sub-link-arrow { transform: translateX(2px); }
  .sub-divider { height: 1px; background: var(--border); margin: 0 18px 8px; opacity: 0; transition: opacity .25s; }
  .c-musica   .cat-bar { background: var(--accent-music); }
  .c-lavoro   .cat-bar { background: var(--accent-study); }
  .c-media .cat-bar { background: var(--accent-content); }
  .c-tech    .cat-bar { background: var(--accent-tech); }
  .c-sport   .cat-bar { background: var(--accent-sport); }
  .c-musica   .cat-card:hover, .c-musica   .cat-card.open { border-color: var(--accent-music); }
  .c-lavoro   .cat-card:hover, .c-lavoro   .cat-card.open { border-color: var(--accent-study); }
  .c-media .cat-card:hover, .c-media .cat-card.open { border-color: var(--accent-content); }
  .c-tech    .cat-card:hover, .c-tech    .cat-card.open { border-color: var(--accent-tech); }
  .c-sport   .cat-card:hover, .c-sport   .cat-card.open { border-color: var(--accent-sport); }
  .c-musica   .sub-link:hover { color: var(--accent-music); }
  .c-lavoro   .sub-link:hover { color: var(--accent-study); }
  .c-media .sub-link:hover { color: var(--accent-content); }
  .c-tech    .sub-link:hover { color: var(--accent-tech); }
  .c-sport   .sub-link:hover { color: var(--accent-sport); }
  @media (max-width: 500px) {
    .main-grid { gap: 10px; }
    .main-grid > div { flex: 0 0 calc(50% - 5px); max-width: calc(50% - 5px); }
    .card-head { flex-direction: column; align-items: center; text-align: center; padding: 14px 10px 10px; gap: 6px; min-height: unset; }
    .cat-icon { width: 40px; height: 40px; font-size: 1.6rem; }
    .card-chevron { font-size: .65rem; margin-left: 0; }
    .cat-card.open .sub-links { max-height: 600px; opacity: 1; padding-bottom: 10px; }
    .sub-link { padding: 8px 8px; gap: 8px; }
    .sub-link-icon { width: 20px; font-size: .9rem; }
    .sub-link-text { font-size: .8rem; }
    .sub-link-desc { font-size: .68rem; }
    .sub-link-arrow { font-size: .65rem; margin-left: 4px; }
  }
`;

function buildCategoryCard(cat) {
  const subs = cat.items.map(i => {
    const iconHtml = i.logo
      ? `<img src="${i.logo}" alt="${i.title}" style="width:22px;height:22px;object-fit:contain;border-radius:4px" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'"><span style="display:none">${i.icon}</span>`
      : i.icon;
    return `<a class="sub-link${i.indent ? ' indented' : ''}" href="${i.url}" ${i.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
      <span class="sub-link-icon">${iconHtml}</span>
      <span class="sub-link-text">${i.title}<span class="sub-link-desc">${i.desc}</span></span>
      <span class="sub-link-arrow">&#8594;</span>
    </a>`;
  }).join('');
  return `<div class="c-${cat.id}"><div class="cat-card">
    <div class="cat-bar"></div>
    <div class="card-head">
      <span class="cat-icon">${cat.logo
        ? `<img src="${cat.logo}" alt="${cat.title}" style="width:32px;height:32px;object-fit:contain"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span style="display:none;font-size:1.9rem">${cat.icon}</span>`
        : cat.icon}</span>
      <span class="card-head-text">
        <span class="card-head-title">${cat.title}</span>
        <span class="card-head-count">${cat.items.length} link</span>
      </span>
      <span class="card-chevron">&#9660;</span>
    </div>
    <div class="sub-divider"></div>
    <div class="sub-links">${subs}</div>
  </div></div>`;
}

function initCards(containerId) {
  // Inject CSS once
  const style = document.createElement('style');
  style.textContent = CARDS_CSS;
  document.head.appendChild(style);

  // Render cards
  document.getElementById(containerId).innerHTML = CATEGORIES.map(buildCategoryCard).join('');

  // Touch toggle
  if (window.matchMedia('(hover: none)').matches) {
    document.querySelectorAll('.cat-card').forEach(c => {
      c.addEventListener('click', e => {
        if (e.target.closest('.sub-link')) return;
        c.classList.toggle('open');
      });
    });
  }
}

/*
  NOTA SUI LOGHI:
  Usa nomi file senza spazi e tutto minuscolo.
  ✅  img/loghi/logo-doremitici.png
  ❌  img/loghi/Logo DoReMitici.PNG   (spazi e maiuscole causano problemi)

  Esempio di item con logo:
  { icon: '🎵', logo: 'img/loghi/logo-doremitici.png', title: 'i DoReMitici', desc: '...', url: 'doremi.html' }

  Se il file immagine non viene trovato, viene mostrata automaticamente l'emoji.
*/
