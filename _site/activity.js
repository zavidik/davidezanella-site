/* ══════════════════════════════════════════
   ACTIVITY.JS — template pagine attività

   CAMPI DATA:
   title          → nome attività
   role           → es. "Trombonista · Dal 2015"
   categoryLabel  → es. "Musica"
   tags           → stringa o array  es. ['palazzolo','musica']
   cover          → 'img/copertine/nome.jpg'  ('' = nessuna)
   description    → HTML libero
   links          → array { icon, logo?, name, desc?, url }
   youtubeId      → ID video YouTube  ('' = nessuno)
   videoTitle     → titolo del video
   instagramUrl   → URL profilo o post Instagram  ('' = nessuno)

   ORDINE SEZIONI:
   1. Hero (copertina + titolo)
   2. Descrizione
   3. Prossimi eventi
   4. Link + Instagram (affiancati se entrambi presenti)
   5. Video YouTube
   6. Articoli correlati
   ══════════════════════════════════════════ */

const ACTIVITY_CSS = `
  /* HERO */
  .act-hero {
    position: relative; border-radius: var(--radius);
    overflow: hidden; margin-bottom: 36px; animation: fadeUp .5s ease both;
  }
  .act-hero-img { width: 100%; height: 300px; object-fit: cover; display: block; }
  .act-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,.7) 0%, rgba(0,0,0,.1) 55%, transparent 100%);
    display: flex; flex-direction: column; justify-content: flex-end; padding: 28px;
  }
  .act-hero-noimg {
    background: var(--card); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 36px 28px; margin-bottom: 36px;
    animation: fadeUp .5s ease both;
  }
  .act-cat-badge {
    display: inline-block; padding: 3px 10px; border-radius: 20px;
    font-size: .72rem; font-weight: 500; letter-spacing: .08em;
    text-transform: uppercase; margin-bottom: 10px; width: fit-content;
    background: rgba(255,255,255,.2); color: #fff; border: 1px solid rgba(255,255,255,.3);
  }
  .act-cat-badge.plain { background: var(--bg); color: var(--muted); border-color: var(--border); }
  .act-hero h1, .act-hero-noimg h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.6rem,5vw,2.2rem); font-weight: 700; line-height: 1.15; margin-bottom: 6px;
  }
  .act-hero h1 { color: #fff; }
  .act-hero-noimg h1 { color: var(--text); }
  .act-role { font-size: .88rem; }
  .act-hero .act-role { color: rgba(255,255,255,.8); }
  .act-hero-noimg .act-role { color: var(--muted); }

  /* DESCRIPTION */
  .act-desc {
    line-height: 1.8; font-size: 1rem; margin-bottom: 40px;
    animation: fadeUp .5s .06s ease both;
  }
  .act-desc p { margin-bottom: 1.1em; }
  .act-desc p:last-child { margin-bottom: 0; }

  /* SECTION */
  .act-section { margin-bottom: 40px; animation: fadeUp .5s .1s ease both; }
  .act-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem; font-weight: 700; margin-bottom: 14px;
  }
  .act-section-header {
    display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 14px;
  }
  .act-section-header a {
    font-size: .82rem; color: var(--muted); text-decoration: none; transition: color .15s;
  }
  .act-section-header a:hover { color: var(--text); }

  /* LINKS + INSTAGRAM SIDE BY SIDE */
  .act-two-col {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 20px; margin-bottom: 40px; animation: fadeUp .5s .1s ease both; align-items: start;
  }
  @media (max-width: 580px) { .act-two-col { grid-template-columns: 1fr; } }

  /* LINKS */
  .act-link-list { display: flex; flex-direction: column; gap: 7px; }
  .act-link {
    display: flex; align-items: center; gap: 12px;
    background: var(--card); border: 1px solid var(--border);
    border-radius: 11px; padding: 10px 13px; text-decoration: none; color: var(--text);
    box-shadow: var(--shadow); transition: transform .18s, box-shadow .18s;
  }
  .act-link:hover { transform: translateY(-2px) translateX(2px); box-shadow: 0 5px 18px rgba(0,0,0,.1); }
  .act-link-icon {
    width: 32px; height: 32px; border-radius: 7px; background: var(--bg);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; overflow: hidden;
  }
  .act-link-icon img { width: 100%; height: 100%; object-fit: contain; }
  .act-link-icon .act-link-emoji { font-size: 1.1rem; line-height: 1; }
  .act-link-body { flex: 1; min-width: 0; }
  .act-link-name { font-weight: 500; font-size: .88rem; }
  .act-link-desc { font-size: .73rem; color: var(--muted); }
  .act-link-arrow { color: var(--muted); font-size: .8rem; transition: transform .15s; flex-shrink: 0; }
  .act-link:hover .act-link-arrow { transform: translateX(3px); }

  /* INSTAGRAM */
  .act-ig-wrap {
    background: var(--card); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 10px; overflow: hidden;
  }
  .act-ig-wrap blockquote { margin: 0 !important; min-width: unset !important; width: 100% !important; }
  .act-ig-note { font-size: .72rem; color: var(--muted); margin-top: 8px; text-align: center; line-height: 1.4; }
  .act-ig-fallback {
    display: flex; align-items: center; gap: 8px; padding: 12px;
    font-size: .85rem; color: var(--muted); text-decoration: none; transition: color .15s;
  }
  .act-ig-fallback:hover { color: var(--text); }

  /* VIDEO */
  .act-video-wrap {
    position: relative; padding-bottom: 56.25%; height: 0;
    border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow);
  }
  .act-video-wrap iframe {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;
  }
`;

/* ── helpers ── */
function _icon(link) {
  if (link.logo) {
    return `<img src="${link.logo}" alt="${link.name}"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <span class="act-link-emoji" style="display:none">${link.icon || '🔗'}</span>`;
  }
  return `<span class="act-link-emoji">${link.icon || '🔗'}</span>`;
}

function buildActLink(l) {
  return `<a class="act-link" href="${l.url}" target="_blank" rel="noopener">
    <div class="act-link-icon">${_icon(l)}</div>
    <div class="act-link-body">
      <div class="act-link-name">${l.name}</div>
      ${l.desc ? `<div class="act-link-desc">${l.desc}</div>` : ''}
    </div>
    <span class="act-link-arrow">&#8594;</span>
  </a>`;
}

function buildIgEmbed(url) {
  return `<div class="act-ig-wrap">
    <blockquote class="instagram-media"
      data-instgrm-permalink="${url}" data-instgrm-version="14"
      style="background:#FFF;border:0;border-radius:3px;
             box-shadow:0 0 1px 0 rgba(0,0,0,.5),0 1px 10px 0 rgba(0,0,0,.15);
             margin:0;padding:0;width:100%;max-width:100%;">
      <div style="padding:12px;">
        <a href="${url}" target="_blank" rel="noopener" class="act-ig-fallback">
          📸 Apri su Instagram &#8594;
        </a>
      </div>
    </blockquote>
  </div>`;
}

/* ── main ── */
function initActivity(data) {
  const style = document.createElement('style');
  style.textContent = ACTIVITY_CSS;
  document.head.appendChild(style);

  document.title = data.title + ' — Davide Zanella';
  const bc = document.getElementById('bc-current');
  if (bc) bc.textContent = data.title;

  const container = document.getElementById('activity-content');
  if (!container) { console.error('activity.js: elemento #activity-content non trovato'); return; }

  const tags = Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []);
  const hasLinks = !!(data.links && data.links.length);
  const hasIg    = !!data.instagramUrl;
  const hasVideo = !!data.youtubeId;

  let html = '';

  /* 1 — HERO */
  if (data.cover) {
    html += `<div class="act-hero">
      <img class="act-hero-img" src="${data.cover}" alt="${data.title}">
      <div class="act-hero-overlay">
        <span class="act-cat-badge">${data.categoryLabel}</span>
        <h1>${data.title}</h1>
        <div class="act-role">${data.role}</div>
      </div>
    </div>`;
  } else {
    html += `<div class="act-hero-noimg">
      <span class="act-cat-badge plain">${data.categoryLabel}</span>
      <h1>${data.title}</h1>
      <div class="act-role">${data.role}</div>
    </div>`;
  }

  /* 2 — DESCRIZIONE */
  html += `<div class="act-desc">${data.description}</div>`;

  /* 3 — PROSSIMI EVENTI */
  if (tags.length && typeof POSTS !== 'undefined') {
    const today = new Date(); today.setHours(0,0,0,0);
    const events = POSTS
      .filter(p => p.pinned && p.eventDate && new Date(p.eventDate) >= today
               && tags.some(t => p.tags.includes(t)))
      .sort((a,b) => a.eventDate.localeCompare(b.eventDate));
    if (events.length) {
      html += `<div class="act-section">
        <div class="act-section-header">
          <div class="act-section-title">📌 Prossimi eventi</div>
          <a href="bacheca.html">Vedi tutti &rarr;</a>
        </div>
        <div class="pinned-grid">${events.map(buildPinnedCard).join('')}</div>
      </div>`;
    }
  }

  /* 4 — LINK + INSTAGRAM */
  if (hasLinks && hasIg) {
    html += `<div class="act-two-col">
      <div>
        <div class="act-section-title">Link</div>
        <div class="act-link-list">${data.links.map(buildActLink).join('')}</div>
      </div>
      <div>
        <div class="act-section-title">Instagram</div>
        ${buildIgEmbed(data.instagramUrl)}
      </div>
    </div>`;
  } else if (hasLinks) {
    html += `<div class="act-section">
      <div class="act-section-title">Link</div>
      <div class="act-link-list">${data.links.map(buildActLink).join('')}</div>
    </div>`;
  } else if (hasIg) {
    html += `<div class="act-section">
      <div class="act-section-title">Instagram</div>
      ${buildIgEmbed(data.instagramUrl)}
    </div>`;
  }

  /* 5 — VIDEO */
  if (hasVideo) {
    html += `<div class="act-section">
      <div class="act-section-title">${data.videoTitle || 'Video'}</div>
      <div class="act-video-wrap">
        <iframe src="https://www.youtube.com/embed/${data.youtubeId}"
          title="${data.videoTitle || data.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen loading="lazy"></iframe>
      </div>
    </div>`;
  }

  /* 6 — ARTICOLI CORRELATI */
  if (tags.length && typeof POSTS !== 'undefined') {
    const articles = POSTS
      .filter(p => !p.pinned && tags.some(t => p.tags.includes(t)))
      .slice(0, 4);
    if (articles.length) {
      html += `<div class="act-section">
        <div class="act-section-header">
          <div class="act-section-title">📝 Articoli correlati</div>
          <a href="articoli.html">Vedi tutti &rarr;</a>
        </div>
        <div class="blog-grid">${articles.map(buildArticleCard).join('')}</div>
      </div>`;
    }
  }

  container.innerHTML = html;

  /* load Instagram embed.js */
  if (hasIg) {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const s = document.createElement('script');
      s.src = 'https://www.instagram.com/embed.js';
      s.async = true;
      s.onload = () => { if (window.instgrm) window.instgrm.Embeds.process(); };
      document.body.appendChild(s);
    }
  }
}
