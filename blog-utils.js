/* ══════════════════════════════════════════
   BLOG-UTILS.JS — funzioni condivise per
   costruire card di articoli e post pinnati
   ══════════════════════════════════════════ */

const CATS = { music: 1, study: 1, content: 1, tech: 1, sport: 1 };

const CAT_LABELS = {
  music:   'Musica',
  study:   'Formazione',
  content: 'Contenuti',
  tech:    'Tech',
  sport:   'Sport',
};

function formatDate(d) {
  const [y, m, day] = d.split('-');
  const M = ['','Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
  return `${parseInt(day)} ${M[parseInt(m)]} ${y}`;
}

function formatDateLong(d) {
  const [y, m, day] = d.split('-');
  const M = ['','Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
             'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  return `${parseInt(day)} ${M[parseInt(m)]} ${y}`;
}

function buildEventMeta(p) {
  if (!p.eventDate) return '';
  const parts = [formatDate(p.eventDate)];
  if (p.eventTime)  parts.push(p.eventTime);
  if (p.eventPlace) parts.push(p.eventPlace);
  return `<div class="pinned-event-meta">📅 ${parts.join(' · ')}</div>`;
}

function buildTagsHtml(tags, max = 3, clickable = false) {
  return tags.slice(0, max).map(t =>
    `<span class="tag" ${CATS[t] ? `data-cat="${t}"` : ''} ${clickable ? '' : 'style="pointer-events:none"'}>${t}</span>`
  ).join('');
}

// Card per articoli normali (non pinnati)
function buildArticleCard(p) {
  const cover = p.cover ? `<img class="blog-card-cover" src="${p.cover}" alt="${p.title}" loading="lazy">` : '';
  return `<a class="blog-card" href="post.html?id=${p.id}">
    ${cover}
    <div class="blog-card-body">
      <div class="blog-card-tags">${buildTagsHtml(p.tags)}</div>
      <div class="blog-card-title">${p.title}</div>
      <div class="blog-card-excerpt">${p.excerpt}</div>
      <div class="blog-card-footer">
        <span>${formatDate(p.date)}</span>
        <span class="blog-card-arrow">&#8594;</span>
      </div>
    </div>
  </a>`;
}

// Card per post pinnati (bacheca)
function buildPinnedCard(p) {
  const cover = p.cover ? `<img class="pinned-card-cover" src="${p.cover}" alt="${p.title}" loading="lazy">` : '';
  return `<a class="pinned-card" href="post.html?id=${p.id}">
    ${cover}
    <div class="pinned-card-body">
      <div class="blog-card-tags">${buildTagsHtml(p.tags)}</div>
      <div class="pinned-card-title">${p.title}</div>
      ${buildEventMeta(p)}
      <div class="pinned-card-excerpt">${p.excerpt}</div>
      <div class="blog-card-footer">
        <span>Pubblicato il ${formatDate(p.date)}</span>
        <span class="blog-card-arrow">&#8594;</span>
      </div>
    </div>
  </a>`;
}

// Restituisce i post pinnati futuri/oggi, ordinati per data evento
function getUpcomingPinned() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return POSTS
    .filter(p => p.pinned && (!p.eventDate || new Date(p.eventDate) >= today))
    .sort((a, b) => {
      const da = a.eventDate || a.date, db = b.eventDate || b.date;
      return da < db ? -1 : da > db ? 1 : 0;
    });
}

// Restituisce i post pinnati con evento passato
function getPastPinned() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return POSTS
    .filter(p => p.pinned && p.eventDate && new Date(p.eventDate) < today)
    .sort((a, b) => b.eventDate.localeCompare(a.eventDate));
}

// Restituisce solo gli articoli (non pinnati)
function getArticles() {
  return POSTS.filter(p => !p.pinned);
}
