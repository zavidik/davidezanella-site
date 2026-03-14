/* ══════════════════════════════════════════
   CARDS.JS — category card della homepage
   Per modificare le card: edita CATEGORIES
   ══════════════════════════════════════════ */

const CATEGORIES = [
  {
    id: 'music',
    icon: '🎺',
    title: 'Musica',
    items: [
      { icon: '🎺', title: 'Banda di Palazzolo Milanese', desc: 'Dir. Enrico Tiso',    url: 'banda-palazzolo.html' },
      { icon: '🎶', title: 'Banda di Cusano Milanino',   desc: 'Dir. Stefano Bertoni', url: 'banda-cusano.html' },
      { icon: '🎵', title: 'i DoReMitici',               desc: 'Gruppo musicale',      url: 'doremi.html' },
    ]
  },
  {
    id: 'content',
    icon: '🎬',
    title: 'Contenuti',
    items: [
      { icon: '▶️',  title: 'YouTube',          desc: 'Davide Zanella',       url: '#' },
      { icon: '📱', title: 'Here, The Series', desc: 'Instagram & Facebook', url: 'here-the-series.html' },
      { icon: '✍️', title: 'Blog',             desc: 'Altervista',           url: '#' },
    ]
  },
  {
    id: 'study',
    icon: '🎓',
    title: 'Formazione & Lavoro',
    items: [
      { icon: '🎓', title: 'Percorso di Studi', desc: 'Ingegneria Informatica · PoliMI', url: '#' },
      { icon: '📐', title: 'Ripetizioni',        desc: 'Matematica e fisica · Liceo',     url: '#' },
    ]
  },
  {
    id: 'tech',
    icon: '🏠',
    title: 'Progetti Digitali',
    items: [
      { icon: '🏠', title: 'Smart Home', desc: 'Home Assistant & domotica', url: '#' },
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
    cursor: pointer; width: 100%;
  }
  @media (hover: hover) {
    .cat-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,.13); transform: translateY(-3px); }
    .cat-card:hover .sub-links { max-height: 400px; opacity: 1; padding-bottom: 12px; }
    .cat-card:hover .card-chevron { transform: rotate(180deg); }
    .cat-card:hover .cat-bar { height: 4px; }
    .cat-card:hover .sub-divider { opacity: 1; }
  }
  .cat-card.open { box-shadow: 0 8px 32px rgba(0,0,0,.13); transform: translateY(-3px); }
  .cat-card.open .sub-links { max-height: 400px; opacity: 1; padding-bottom: 12px; }
  .cat-card.open .card-chevron { transform: rotate(180deg); }
  .cat-card.open .cat-bar { height: 4px; }
  .cat-card.open .sub-divider { opacity: 1; }
  .cat-bar { height: 3px; width: 100%; transition: height .25s; }
  .card-head { display: flex; align-items: center; gap: 14px; padding: 18px 18px 16px; }
  .cat-icon { font-size: 1.9rem; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 12px; background: var(--bg); flex-shrink: 0; }
  .card-head-text { flex: 1; min-width: 0; }
  .card-head-title { font-weight: 600; font-size: 1rem; line-height: 1.2; margin-bottom: 3px; }
  .card-head-count { font-size: .75rem; color: var(--muted); }
  .card-chevron { color: var(--muted); font-size: .8rem; transition: transform .25s; flex-shrink: 0; margin-left: 8px; }
  .sub-links { max-height: 0; opacity: 0; overflow: hidden; transition: max-height .35s ease, opacity .25s ease, padding-bottom .25s; padding: 0 12px; }
  .sub-link { display: flex; align-items: center; gap: 10px; padding: 9px 10px; border-radius: 10px; text-decoration: none; color: var(--text); font-size: .85rem; transition: background .15s, color .15s; margin-bottom: 2px; }
  .sub-link:hover { background: var(--bg); }
  .sub-link-icon { font-size: 1rem; width: 24px; text-align: center; flex-shrink: 0; }
  .sub-link-text { flex: 1; line-height: 1.3; min-width: 0; }
  .sub-link-desc { font-size: .72rem; color: var(--muted); display: block; }
  .sub-link-arrow { font-size: .75rem; color: var(--muted); transition: transform .15s; flex-shrink: 0; margin-left: 6px; }
  .sub-link:hover .sub-link-arrow { transform: translateX(2px); }
  .sub-divider { height: 1px; background: var(--border); margin: 0 18px 8px; opacity: 0; transition: opacity .25s; }
  .c-music   .cat-bar { background: var(--accent-music); }
  .c-study   .cat-bar { background: var(--accent-study); }
  .c-content .cat-bar { background: var(--accent-content); }
  .c-tech    .cat-bar { background: var(--accent-tech); }
  .c-sport   .cat-bar { background: var(--accent-sport); }
  .c-music   .cat-card:hover, .c-music   .cat-card.open { border-color: var(--accent-music); }
  .c-study   .cat-card:hover, .c-study   .cat-card.open { border-color: var(--accent-study); }
  .c-content .cat-card:hover, .c-content .cat-card.open { border-color: var(--accent-content); }
  .c-tech    .cat-card:hover, .c-tech    .cat-card.open { border-color: var(--accent-tech); }
  .c-sport   .cat-card:hover, .c-sport   .cat-card.open { border-color: var(--accent-sport); }
  .c-music   .sub-link:hover { color: var(--accent-music); }
  .c-study   .sub-link:hover { color: var(--accent-study); }
  .c-content .sub-link:hover { color: var(--accent-content); }
  .c-tech    .sub-link:hover { color: var(--accent-tech); }
  .c-sport   .sub-link:hover { color: var(--accent-sport); }
  @media (max-width: 500px) {
    .main-grid > div { flex: 0 0 calc(50% - 7px); max-width: calc(50% - 7px); }
  }
`;

function buildCategoryCard(cat) {
  const subs = cat.items.map(i => `
    <a class="sub-link" href="${i.url}" ${i.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
      <span class="sub-link-icon">${i.icon}</span>
      <span class="sub-link-text">${i.title}<span class="sub-link-desc">${i.desc}</span></span>
      <span class="sub-link-arrow">&#8594;</span>
    </a>`).join('');
  return `<div class="c-${cat.id}"><div class="cat-card">
    <div class="cat-bar"></div>
    <div class="card-head">
      <span class="cat-icon">${cat.icon}</span>
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
