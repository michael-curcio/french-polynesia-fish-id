import { SPECIES, BY_ID, GROUPS, DECKS, VERDICTS, RISK, DIFFICULTY, RULE_STATUS, RULES, SOURCES, QUESTIONS, RECORDS_CHECKED, RECORDS_NOTE } from './data/index.js';

/* ---------------- helpers ---------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const num = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(1).replace(/\.0$/, ''));
const range = ([a, b], unit) => `${num(a)}–${num(b)} ${unit}`;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem('gcfi:' + key); return v == null ? fallback : JSON.parse(v); } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('gcfi:' + key, JSON.stringify(value)); } catch { /* storage unavailable */ }
  }
};

const ICONS = {
  back: '<path d="M15 18l-6-6 6-6"/>',
  next: '<path d="M9 18l6-6-6-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  expand: '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
  close: '<path d="M18 6L6 18M6 6l12 12"/>',
  reset: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
  alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17.5v.5"/>',
  bug: '<circle cx="12" cy="13" r="5"/><path d="M12 8V5M8 6l2 2M16 6l-2 2M4 13h3M17 13h3M5 19l3-2M19 19l-3-2"/>'
};
const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
const VERDICT_ICON = { target: 'star', shoot: 'check', invasive: 'bug', avoid: 'alert', protected: 'ban' };

function badge(s) {
  const v = s.verdict;
  return `<span class="badge" data-v="${v}">${icon(VERDICT_ICON[v])}${esc(s.label || VERDICTS[v].label)}</span>`;
}
const riskTag = (r) => `<span class="risk" data-risk="${r}">${RISK[r] || r}</span>`;
function stars(n) {
  if (!n) return '<span class="stars">Not eaten</span>';
  return `<span class="stars" aria-label="${n} out of 5">${'★'.repeat(n)}<span class="off">${'★'.repeat(5 - n)}</span></span>`;
}

function sizeText(size) {
  if (!size) return '—';
  if (size.kg) return range(size.kg, 'kg');
  if (size.m) return range(size.m, 'm');
  if (size.cm) return size.cm[1] >= 100 ? range(size.cm.map((c) => c / 100), 'm') : range(size.cm, 'cm');
  return '—';
}
function sizeDetail(size) {
  const parts = [];
  if (size.cm && size.kg) parts.push(`Typically ${range(size.cm, 'cm')}.`);
  if (size.maxKg) parts.push(`Up to ${num(size.maxKg)} kg.`);
  if (size.maxM) parts.push(`Up to ${num(size.maxM)} m.`);
  return parts.join(' ');
}

/* Season windows: closed = { from: [m, d], to: [m, d] } (inclusive, may wrap the new year). */
function seasonState(closed, now = new Date()) {
  const md = (now.getMonth() + 1) * 100 + now.getDate();
  const f = closed.from[0] * 100 + closed.from[1];
  const t = closed.to[0] * 100 + closed.to[1];
  const isClosed = f <= t ? md >= f && md <= t : md >= f || md <= t;
  const y = now.getFullYear();
  let next;
  if (isClosed) {
    next = new Date(y, closed.to[0] - 1, closed.to[1] + 1);
    if (next < now) next = new Date(y + 1, closed.to[0] - 1, closed.to[1] + 1);
  } else {
    next = new Date(y, closed.from[0] - 1, closed.from[1]);
    if (next < now) next = new Date(y + 1, closed.from[0] - 1, closed.from[1]);
  }
  const when = `${next.getDate()} ${MONTHS[next.getMonth()]}`;
  return { open: !isClosed, text: isClosed ? `Closed now · opens ${when}` : `Open now · closes ${when}` };
}

const photoOf = (s, i = 0) => s.photos[i] || null;
function creditHtml(p) {
  if (!p) return '';
  const lic = p.licenseUrl ? `<a href="${esc(p.licenseUrl)}" target="_blank" rel="noreferrer">${esc(p.license)}</a>` : esc(p.license);
  const by = p.pageUrl ? `<a href="${esc(p.pageUrl)}" target="_blank" rel="noreferrer">${esc(p.author)}</a>` : esc(p.author);
  return `Photo: ${by} · ${lic}`;
}

/* ---------------- routing ---------------- */
const view = $('#view');
const appbar = $('#appbar');
const shell = $('#app');
let cleanup = null;

function setTab(tab) {
  document.querySelectorAll('.tabbar a').forEach((a) => {
    if (a.dataset.tab === tab) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
}
function simpleBar(withSearch) {
  appbar.innerHTML = `<div class="appbar-inner"><h1>Grand Cay Fish ID</h1>${withSearch ? `<button class="icon-btn" data-action="search" aria-label="Search fish">${icon('search')}</button>` : ''}</div>`;
}

// Views live in plain #names (#home, #deck-reef-3, #sp-hogfish, #fish-id, #fish-info, #rules)
// so links work the same on GitHub Pages and inside a hosted artifact frame.
function setHash(h) {
  try { history.replaceState(null, '', h); } catch { location.hash = h; }
}
function route() {
  if (cleanup) { cleanup(); cleanup = null; }
  closeOverlays();
  const h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  shell.classList.remove('in-deck');
  let m;
  if (!h || h === 'home') renderHome();
  else if ((m = h.match(/^deck-(.+?)(?:-(\d+))?$/))) renderDeck(m[1], Number(m[2]) || 0);
  else if ((m = h.match(/^sp-(.+)$/))) openFish(m[1]);
  else if (h === 'fish-id') renderFishId();
  else if (h === 'fish-info') renderFishInfo();
  else if (h === 'rules') renderRules();
  else renderHome();
}
window.addEventListener('hashchange', () => { route(); window.scrollTo(0, 0); });

function deckSpecies(deckId) {
  if (deckId === 'all') return SPECIES;
  const g = GROUPS.find((x) => x.id === deckId);
  if (g) return SPECIES.filter((s) => s.group === g.id);
  const d = DECKS.find((x) => x.id === deckId);
  if (d) return SPECIES.filter(d.filter);
  return null;
}
function deckName(deckId) {
  if (deckId === 'all') return 'All species';
  return (GROUPS.find((x) => x.id === deckId) || DECKS.find((x) => x.id === deckId) || {}).name || 'Fish';
}
function openFish(id) {
  const s = BY_ID[id];
  if (!s) { location.replace('#home'); return; }
  const list = deckSpecies(s.group);
  setHash(`#deck-${s.group}-${list.indexOf(s)}`);
  renderDeck(s.group, list.indexOf(s));
}

/* ---------------- home ---------------- */
function tile(href, name, blurb, count, heroId) {
  const hero = heroId && BY_ID[heroId];
  const p = hero && photoOf(hero);
  return `<a class="tile${p ? '' : ' no-photo'}" href="${href}">
    ${p ? `<img src="${esc(p.src)}" alt="" loading="lazy" decoding="async" style="background:${esc(p.color || '#0c1a23')}">` : ''}
    <div class="tile-text"><strong>${esc(name)}</strong><span>${count} · ${esc(blurb)}</span></div>
  </a>`;
}
function renderHome() {
  setTab('study');
  simpleBar(true);
  const grouper = seasonState(BY_ID['nassau-grouper'].rules.closed);
  const craw = seasonState(BY_ID['spiny-lobster'].rules.closed);
  view.innerHTML = `
    <p class="intro">Learn the fish of Grand Cay, Abaco: what to shoot and what to leave.</p>
    <div class="section-label">Season right now</div>
    <div class="season">
      <a href="#sp-nassau-grouper"><b>Nassau grouper</b><span class="state ${grouper.open ? 'open' : 'closed'}">${grouper.open ? 'Open' : 'Closed'}</span><small>${esc(grouper.text.split(' · ')[1])}</small></a>
      <a href="#sp-spiny-lobster"><b>Crawfish</b><span class="state ${craw.open ? 'open' : 'closed'}">${craw.open ? 'Open' : 'Closed'}</span><small>${esc(craw.text.split(' · ')[1])}</small></a>
    </div>
    <div class="section-label">Habitats</div>
    <div class="tiles">
      ${GROUPS.map((g) => tile(`#deck-${g.id}`, g.name, g.blurb, SPECIES.filter((s) => s.group === g.id).length, g.hero)).join('')}
    </div>
    <div class="section-label">Decks</div>
    <div class="tiles">
      ${DECKS.map((d) => tile(`#deck-${d.id}`, d.name, d.blurb, SPECIES.filter(d.filter).length, d.hero)).join('')}
    </div>
    <div class="section-label">Bahamas rules</div>
    <a class="tile rules-tile" href="#rules">
      <div class="tile-text"><strong>Spearfishing rules</strong><span>What you need to know before you dive</span>
      <ul><li>Sling or pole spear only</li><li>No scuba</li><li>200 yards from shore</li><li>No parks</li></ul></div>
    </a>
    <p class="fineprint">Rules summarised from Bahamian government and conservation sources; they change, so check with the Department of Marine Resources before you fish. Photos by iNaturalist observers; each photo shows its author and licence. For personal use.</p>
  `;
}

/* ---------------- species deck ---------------- */
function renderDeck(deckId, index) {
  const list = deckSpecies(deckId);
  if (!list || !list.length) { location.replace('#home'); return; }
  index = Math.max(0, Math.min(index, list.length - 1));
  const s = list[index];
  shell.classList.add('in-deck');
  setTab('study');
  appbar.innerHTML = `
    <div class="appbar-inner">
      <a class="icon-btn" href="#home" aria-label="Back to habitats">${icon('back')}</a>
      <div class="deck-title"><strong>${esc(deckName(deckId))}</strong><span>${index + 1} / ${list.length}</span></div>
      <button class="icon-btn" data-action="search" aria-label="Search fish">${icon('search')}</button>
    </div>
    <div class="progress" aria-hidden="true">${list.map((_, i) => `<i class="${i <= index ? 'on' : ''}"></i>`).join('')}</div>`;

  const prev = list[index - 1];
  const next = list[index + 1];
  view.innerHTML = speciesCard(s) + `
    <div class="deck-nav"><div class="deck-nav-inner">
      <button class="prev-btn" data-go="-1" ${prev ? '' : 'disabled'} aria-label="${prev ? 'Previous: ' + esc(prev.name) : 'No previous fish'}">${icon('back')}</button>
      <button class="next-btn" data-go="1" ${next ? '' : 'disabled'}><span><small>${next ? 'Next' : 'End of deck'}</small><b>${next ? esc(next.name) : esc(deckName(deckId))}</b></span>${icon('next')}</button>
    </div></div>`;

  const go = (d) => {
    const ni = index + d;
    if (ni < 0 || ni >= list.length) return;
    setHash(`#deck-${deckId}-${ni}`);
    route();
    window.scrollTo(0, 0);
  };
  view.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => go(Number(b.dataset.go))));
  const gallery = setupGallery(view.querySelector('.gallery'), s);

  // Swipe on the card body (not the photo) to move between fish.
  const body = view.querySelector('.card-body');
  const off = swipe(body, (dir) => go(dir));
  const onKey = (e) => {
    if (document.querySelector('.lightbox, .sheet')) return;
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };
  document.addEventListener('keydown', onKey);
  cleanup = () => { document.removeEventListener('keydown', onKey); off(); gallery(); };
}

/* Pole spear (IUSA Sling/Polespear) world records, men's and women's divisions. */
function recordLine(r, label) {
  const year = r.date ? r.date.slice(0, 4) : '';
  const who = [r.holder, r.place, year].filter(Boolean).map(esc).join(' · ');
  return `<p class="rec-line"><span class="rec-div">${label}</span><b>${num(r.kg)} kg</b> <span class="rec-lb">(${num(r.lb)} lb)</span>
    <span class="rec-who">${who}${r.url ? ` · <a href="${esc(r.url)}" target="_blank" rel="noreferrer">IUSA</a>` : ''}</span></p>`;
}
function recordCell(s) {
  const rec = s.records;
  let body;
  if (rec && (rec.men || rec.women)) {
    body = (rec.men ? recordLine(rec.men, 'Men') : '') + (rec.women ? recordLine(rec.women, 'Women') : '');
    if (!rec.men) body += '<p class="rec-none">Men: none found</p>';
    if (!rec.women) body += '<p class="rec-none">Women: none found</p>';
  } else if (rec && rec.note) {
    body = `<p class="rec-none">${esc(rec.note)}</p>`;
  } else if (s.verdict === 'protected') {
    body = '<p class="rec-none">Protected: no records allowed</p>';
  } else if (!RECORDS_CHECKED) {
    body = '<p class="rec-none">Not added yet</p>';
  } else {
    body = '<p class="rec-none">None found yet</p>';
  }
  const foot = RECORDS_CHECKED && s.verdict !== 'protected' ? `<p class="rec-src">${esc(RECORDS_NOTE)}</p>` : '';
  return `<div class="wide"><dt>Pole spear world record</dt><dd class="rec">${body}${foot}</dd></div>`;
}

function speciesCard(s) {
  const group = GROUPS.find((g) => g.id === s.group);
  const names = [];
  if (s.bahamian) names.push(`Bahamian: ${esc(s.bahamian)}`);
  if (s.aka.length) names.push(`Also: ${s.aka.map(esc).join(', ')}`);
  const season = s.rules.closed ? seasonState(s.rules.closed) : null;
  const stat4 = s.hunt
    ? `<div><dt>Difficulty</dt><dd>${DIFFICULTY[s.hunt.difficulty]}</dd></div>`
    : `<div><dt>Seen</dt><dd>${s.abundance[0].toUpperCase() + s.abundance.slice(1)}</dd></div>`;
  const look = s.lookAlikes.map((l) => `<li>${l.id && BY_ID[l.id] ? `<a href="#sp-${l.id}">${esc(l.name)}</a>` : `<b>${esc(l.name)}</b>`}<span>${esc(l.tell)}</span></li>`).join('');
  return `
  <article class="card" aria-labelledby="sp-name">
    <div class="gallery">
      <div class="frame">
        ${badge(s)}
        <div class="imgs"></div>
        ${s.photos.length ? `<button class="round-btn expand" aria-label="View photo full screen">${icon('expand')}</button>` : '<div class="nophoto">No photo yet</div>'}
        ${s.photos.length > 1 ? `<button class="round-btn prev" aria-label="Previous photo">${icon('back')}</button><button class="round-btn next" aria-label="Next photo">${icon('next')}</button><span class="counter"></span>` : ''}
      </div>
      ${s.photos.length > 1 ? `<div class="thumbs">${s.photos.map((p, i) => `<button data-i="${i}" aria-label="Photo ${i + 1}"><img src="${esc(p.thumb || p.src)}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}
      <div class="credit"></div>
    </div>
    <div class="card-body">
      <div class="kicker">${esc(group.name)}</div>
      <h2 id="sp-name">${esc(s.name)}</h2>
      <p class="sci">${esc(s.sci)} · <span>${esc(s.family)}</span></p>
      ${names.length ? `<p class="local">${names.join(' · ')}</p>` : ''}
      <p class="lead">${esc(s.note)}</p>
      <dl class="stats">
        <div><dt>Typical size</dt><dd>${sizeText(s.size)}</dd></div>
        <div><dt>Depth</dt><dd>${range(s.depth, 'm')}</dd></div>
        ${stat4}
        <div><dt>Ciguatera</dt><dd>${s.eat.rating === 0 && s.eat.cig === 'unknown' ? '<span class="risk" data-risk="unknown">n/a</span>' : riskTag(s.eat.cig)}</dd></div>
        ${recordCell(s)}
      </dl>
      <div class="rulebox">
        <div class="row"><strong>Rules</strong><span class="pill" data-status="${s.rules.status}">${RULE_STATUS[s.rules.status]}</span>${season ? `<span class="season-now ${season.open ? 'open' : 'closed'}">${esc(season.text)}</span>` : ''}</div>
        <p>${esc(s.rules.text)}</p>
      </div>
      ${s.hunt ? `<section class="sec"><h3>Hunting</h3><p>${esc(s.hunt.summary)}</p>
        ${s.hunt.tips.length ? `<ul>${s.hunt.tips.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
        <p><strong>${s.group === 'shellfish' ? 'How' : 'Shot'}:</strong> ${esc(s.hunt.shot)}</p></section>` : ''}
      <section class="sec"><h3>ID</h3><ul>${s.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
        ${look ? `<h4>Don't confuse with</h4><ul class="lookalikes">${look}</ul>` : ''}</section>
      <section class="sec"><h3>Where & behaviour</h3><p>${esc(s.where)}</p><p>${esc(s.behavior)}</p>
        ${sizeDetail(s.size) ? `<p><strong>Size:</strong> ${esc(sizeDetail(s.size))}</p>` : ''}</section>
      <section class="sec"><h3>Eating</h3>
        <div class="eat-row"><span><small>Table</small>${stars(s.eat.rating)}</span><span><small>Ciguatera</small>${riskTag(s.eat.cig)}</span></div>
        <p>${esc(s.eat.text)}</p>${s.eat.tips.length ? `<ul>${s.eat.tips.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}</section>
      ${s.notes.length ? `<section class="sec"><h3>Safety & notes</h3><ul>${s.notes.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></section>` : ''}
    </div>
  </article>`;
}

function setupGallery(root, s) {
  if (!root || !s.photos.length) return () => {};
  let i = 0;
  const imgs = root.querySelector('.imgs');
  const show = (n) => {
    i = (n + s.photos.length) % s.photos.length;
    const p = s.photos[i];
    imgs.innerHTML = `<img class="blur" src="${esc(p.thumb || p.src)}" alt="" aria-hidden="true"><img src="${esc(p.src)}" alt="${esc(s.name)}${p.caption ? ': ' + esc(p.caption) : ''}" decoding="async">`;
    root.querySelector('.frame').style.background = p.color || '';
    const c = root.querySelector('.counter'); if (c) c.textContent = `${i + 1} / ${s.photos.length}`;
    root.querySelectorAll('.thumbs button').forEach((b, k) => b.setAttribute('aria-current', String(k === i)));
    root.querySelector('.credit').innerHTML = creditHtml(p);
    // Warm the next photo.
    const nx = s.photos[(i + 1) % s.photos.length]; if (nx) { const im = new Image(); im.src = nx.src; }
  };
  show(0);
  root.querySelector('.prev')?.addEventListener('click', () => show(i - 1));
  root.querySelector('.next')?.addEventListener('click', () => show(i + 1));
  root.querySelectorAll('.thumbs button').forEach((b) => b.addEventListener('click', () => show(Number(b.dataset.i))));
  root.querySelector('.expand')?.addEventListener('click', () => openLightbox(s, i, (n) => show(n)));
  const off = s.photos.length > 1 ? swipe(root.querySelector('.frame'), (d) => show(i + d)) : () => {};
  return off;
}

/* Horizontal swipe detector; calls cb(+1) for a left swipe (next), cb(-1) for right. */
function swipe(el, cb) {
  if (!el) return () => {};
  let x0 = null, y0 = null, t0 = 0;
  const start = (e) => { const t = e.touches[0]; x0 = t.clientX; y0 = t.clientY; t0 = Date.now(); };
  const end = (e) => {
    if (x0 == null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - x0, dy = t.clientY - y0;
    x0 = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > 1.6 * Math.abs(dy) && Date.now() - t0 < 800) cb(dx < 0 ? 1 : -1);
  };
  el.addEventListener('touchstart', start, { passive: true });
  el.addEventListener('touchend', end, { passive: true });
  return () => { el.removeEventListener('touchstart', start); el.removeEventListener('touchend', end); };
}

/* ---------------- overlays ---------------- */
const overlayRoot = $('#overlay-root');
let overlayKey = null;
function closeOverlays() {
  overlayRoot.innerHTML = '';
  document.body.style.overflow = '';
  if (overlayKey) { document.removeEventListener('keydown', overlayKey); overlayKey = null; }
}
function openLightbox(s, start, onChange) {
  let i = start;
  overlayRoot.innerHTML = `<div class="lightbox" role="dialog" aria-modal="true" aria-label="${esc(s.name)} photos">
    <div class="lb-stage"><img alt=""></div>
    <button class="round-btn close" aria-label="Close">${icon('close')}</button>
    ${s.photos.length > 1 ? `<button class="round-btn prev" aria-label="Previous photo">${icon('back')}</button><button class="round-btn next" aria-label="Next photo">${icon('next')}</button>` : ''}
    <div class="lb-credit"><span class="c"></span><span class="n"></span></div></div>`;
  document.body.style.overflow = 'hidden';
  const lb = overlayRoot.firstElementChild;
  const show = (n) => {
    i = (n + s.photos.length) % s.photos.length;
    const p = s.photos[i];
    lb.querySelector('img').src = p.src;
    lb.querySelector('img').alt = s.name;
    lb.querySelector('.c').innerHTML = creditHtml(p);
    lb.querySelector('.n').textContent = s.photos.length > 1 ? `${i + 1} / ${s.photos.length}` : '';
    onChange?.(i);
  };
  show(i);
  lb.querySelector('.close').addEventListener('click', closeOverlays);
  lb.querySelector('.prev')?.addEventListener('click', () => show(i - 1));
  lb.querySelector('.next')?.addEventListener('click', () => show(i + 1));
  swipe(lb.querySelector('.lb-stage'), (d) => show(i + d));
  overlayKey = (e) => {
    if (e.key === 'Escape') closeOverlays();
    if (e.key === 'ArrowRight') show(i + 1);
    if (e.key === 'ArrowLeft') show(i - 1);
  };
  document.addEventListener('keydown', overlayKey);
  lb.querySelector('.close').focus();
}

function openSearch() {
  overlayRoot.innerHTML = `<div class="sheet" role="dialog" aria-modal="true" aria-label="Search fish">
    <div class="sheet-head">
      <input type="search" placeholder="Search ${SPECIES.length} species, e.g. hogfish, turbot" aria-label="Search fish" autocomplete="off">
      <button class="icon-btn" data-close aria-label="Close search">${icon('close')}</button>
    </div>
    <ul class="results"></ul></div>`;
  document.body.style.overflow = 'hidden';
  const sheet = overlayRoot.firstElementChild;
  const input = sheet.querySelector('input');
  const out = sheet.querySelector('.results');
  const hay = SPECIES.map((s) => [s, [s.name, s.sci, s.family, s.bahamian, ...s.aka].join(' ').toLowerCase()]);
  const render = () => {
    const q = input.value.trim().toLowerCase();
    const hits = hay.filter(([, h]) => !q || q.split(/\s+/).every((w) => h.includes(w))).map(([s]) => s);
    out.innerHTML = hits.length ? hits.map((s) => {
      const p = photoOf(s);
      return `<li><a href="#sp-${s.id}">${p ? `<img src="${esc(p.thumb || p.src)}" alt="" loading="lazy">` : '<span class="ph"></span>'}
        <span class="txt"><b>${esc(s.name)}</b><i>${esc(s.sci)}${s.bahamian ? ' · ' + esc(s.bahamian) : ''}</i></span>${badge(s)}</a></li>`;
    }).join('') : '<li class="empty">No fish match that search.</li>';
  };
  render();
  input.addEventListener('input', render);
  sheet.querySelector('[data-close]').addEventListener('click', closeOverlays);
  out.addEventListener('click', (e) => { if (e.target.closest('a')) closeOverlays(); });
  overlayKey = (e) => { if (e.key === 'Escape') closeOverlays(); };
  document.addEventListener('keydown', overlayKey);
  setTimeout(() => input.focus(), 30);
}
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-action="search"]')) openSearch();
});

/* ---------------- quizzes ---------------- */
const MASTER_AT = 2; // correct answers in a row to count as mastered
function loadMastery(key) { return store.get(key, {}); }
function weightedPick(items, mastery, lastId) {
  let pool = items.filter((x) => x.qid !== lastId);
  if (!pool.length) pool = items;
  const weights = pool.map((x) => ((mastery[x.qid] || 0) >= MASTER_AT ? 1 : 4));
  let r = Math.random() * weights.reduce((a, b) => a + b, 0);
  for (let k = 0; k < pool.length; k++) { r -= weights[k]; if (r <= 0) return pool[k]; }
  return pool[pool.length - 1];
}
function quizPhoto(p, alt) {
  if (!p) return '';
  return `<div class="qphoto"><img class="blur" src="${esc(p.thumb || p.src)}" alt="" aria-hidden="true"><img src="${esc(p.src)}" alt="${esc(alt)}">
    <span class="qcredit">${esc(p.author)} · ${esc(p.license)}</span>
    <button class="round-btn expand" aria-label="View photo full screen">${icon('expand')}</button></div>`;
}

const idState = { session: { asked: 0, right: 0 }, filter: 'all', last: null };
function renderFishId() {
  setTab('id');
  simpleBar(false);
  const mastery = loadMastery('mastery-id');
  const withPhotos = SPECIES.filter((s) => s.photos.length);
  const pool = withPhotos.filter((s) => idState.filter === 'all' || s.group === idState.filter).map((s) => ({ ...s, qid: s.id }));
  const masteredCount = withPhotos.filter((s) => (mastery[s.id] || 0) >= MASTER_AT).length;
  const head = `
    <div class="quiz-head"><h1>Fish ID</h1><button class="ghost-btn" data-reset>${icon('reset')}New session</button></div>
    <div class="quiz-stats"><span><b>${idState.session.right}</b>/${idState.session.asked} this session</span><span>${masteredCount}/${withPhotos.length} fish mastered</span></div>
    <div class="filter-row" role="group" aria-label="Habitat">
      ${[{ id: 'all', name: 'All' }, ...GROUPS].map((g) => `<button class="chip" data-filter="${g.id}" aria-pressed="${idState.filter === g.id}">${esc(g.name)}</button>`).join('')}
    </div>`;
  if (pool.length < 2) {
    view.innerHTML = head + '<p class="empty">No photos for this habitat yet.</p>';
    bindQuizChrome(renderFishId, idState, 'mastery-id');
    return;
  }
  const s = weightedPick(pool, mastery, idState.last);
  idState.last = s.qid;
  const p = pick(s.photos);
  // Distractors: look-alikes first, then the same habitat, then anything.
  const names = new Set([s.name]);
  const opts = [s];
  const add = (cands) => { for (const c of shuffle(cands)) { if (opts.length >= 4) break; if (c && !names.has(c.name)) { names.add(c.name); opts.push(c); } } };
  add(s.lookAlikes.map((l) => BY_ID[l.id]).filter(Boolean));
  add(SPECIES.filter((x) => x.group === s.group));
  add(SPECIES);
  const options = shuffle(opts);
  view.innerHTML = head + `
    ${quizPhoto(p, 'Mystery fish')}
    <p class="question">What fish is this?</p>
    <div class="options">${options.map((o) => `<button class="option" data-id="${o.id}">${esc(o.name)}</button>`).join('')}</div>
    <div class="fb"></div>`;
  view.querySelector('.qphoto .expand').addEventListener('click', () => openLightbox({ name: 'Mystery fish', photos: [p] }, 0));
  bindQuizChrome(renderFishId, idState, 'mastery-id');
  view.querySelector('.options').addEventListener('click', (e) => {
    const btn = e.target.closest('.option');
    if (!btn || btn.disabled) return;
    const ok = btn.dataset.id === s.id;
    answer(view, btn, ok, (b) => b.dataset.id === s.id);
    idState.session.asked++; if (ok) idState.session.right++;
    const m = loadMastery('mastery-id'); m[s.id] = ok ? (m[s.id] || 0) + 1 : 0; store.set('mastery-id', m);
    view.querySelector('.quiz-stats').innerHTML = `<span><b>${idState.session.right}</b>/${idState.session.asked} this session</span><span>${withPhotos.filter((x) => (m[x.id] || 0) >= MASTER_AT).length}/${withPhotos.length} fish mastered</span>`;
    view.querySelector('.fb').innerHTML = `<div class="feedback" role="status">
      <div class="verdict-line">${ok ? 'Correct:' : 'It’s a'} ${esc(s.name)} ${badge(s)}</div>
      <p>${esc(s.note)}</p>
      <div class="actions"><a class="ghost-btn" href="#sp-${s.id}">Open card</a><button class="primary-btn" data-next>Next fish</button></div></div>`;
    view.querySelector('[data-next]').addEventListener('click', () => { renderFishId(); window.scrollTo(0, 0); });
    view.querySelector('[data-next]').focus({ preventScroll: true });
  });
}

const CALL_OPTIONS = ['Trophy target', 'Shoot', 'Shoot on sight', 'Leave it', 'Illegal to take'];
const TOPICS = [
  { id: 'all', name: 'All' }, { id: 'legal', name: 'Legal' }, { id: 'safety', name: 'Safety' }, { id: 'hunting', name: 'Hunting' },
  { id: 'id', name: 'ID' }, { id: 'eating', name: 'Eating' }, { id: 'behavior', name: 'Behaviour' }, { id: 'call', name: 'The call' }
];
const TOPIC_LABEL = Object.fromEntries(TOPICS.map((t) => [t.id, t.name]));
function infoPool() {
  const qs = QUESTIONS.map((q, i) => ({ ...q, qid: 'q' + i }));
  const calls = SPECIES.filter((s) => s.photos.length).map((s) => {
    const right = VERDICTS[s.verdict].short;
    const wrong = shuffle(CALL_OPTIONS.filter((o) => o !== right && (o !== 'Shoot on sight' || Math.random() < 0.3))).slice(0, 3);
    return { qid: 'call:' + s.id, topic: 'call', species: s.id, q: `What's the call on this ${s.name.toLowerCase()}?`, options: [right, ...wrong], why: s.note };
  });
  return [...qs, ...calls];
}
const infoState = { session: { asked: 0, right: 0 }, filter: 'all', last: null };
function renderFishInfo() {
  setTab('info');
  simpleBar(false);
  const mastery = loadMastery('mastery-info');
  const all = infoPool();
  const pool = all.filter((q) => infoState.filter === 'all' || q.topic === infoState.filter);
  const masteredCount = all.filter((q) => (mastery[q.qid] || 0) >= MASTER_AT).length;
  const head = `
    <div class="quiz-head"><h1>Fish Info</h1><button class="ghost-btn" data-reset>${icon('reset')}New session</button></div>
    <div class="quiz-stats"><span><b>${infoState.session.right}</b>/${infoState.session.asked} this session</span><span>${masteredCount}/${all.length} mastered</span></div>
    <div class="filter-row" role="group" aria-label="Topic">
      ${TOPICS.map((t) => `<button class="chip" data-filter="${t.id}" aria-pressed="${infoState.filter === t.id}">${esc(t.name)}</button>`).join('')}
    </div>`;
  if (!pool.length) {
    view.innerHTML = head + '<p class="empty">No questions for this topic yet.</p>';
    bindQuizChrome(renderFishInfo, infoState);
    return;
  }
  const q = weightedPick(pool, mastery, infoState.last);
  infoState.last = q.qid;
  const s = q.species ? BY_ID[q.species] : null;
  const p = s ? pick(s.photos.length ? s.photos : [null]) : null;
  const correct = q.options[0];
  const options = shuffle(q.options);
  view.innerHTML = head + `
    ${p ? quizPhoto(p, s.name) : ''}
    <div class="qmeta"><span class="topic">${esc(TOPIC_LABEL[q.topic])}</span>${s && q.topic !== 'call' && !q.options.some((o) => o.toLowerCase().includes(s.name.toLowerCase())) ? `<span class="who">${esc(s.name)}</span>` : ''}</div>
    <p class="question">${esc(q.q)}</p>
    <div class="options">${options.map((o) => `<button class="option">${esc(o)}</button>`).join('')}</div>
    <div class="fb"></div>`;
  if (p) view.querySelector('.qphoto .expand').addEventListener('click', () => openLightbox(s, s.photos.indexOf(p)));
  bindQuizChrome(renderFishInfo, infoState, 'mastery-info');
  view.querySelector('.options').addEventListener('click', (e) => {
    const btn = e.target.closest('.option');
    if (!btn || btn.disabled) return;
    const ok = btn.textContent === correct;
    answer(view, btn, ok, (b) => b.textContent === correct);
    infoState.session.asked++; if (ok) infoState.session.right++;
    const m = loadMastery('mastery-info'); m[q.qid] = ok ? (m[q.qid] || 0) + 1 : 0; store.set('mastery-info', m);
    view.querySelector('.quiz-stats').innerHTML = `<span><b>${infoState.session.right}</b>/${infoState.session.asked} this session</span><span>${all.filter((x) => (m[x.qid] || 0) >= MASTER_AT).length}/${all.length} mastered</span>`;
    view.querySelector('.fb').innerHTML = `<div class="feedback" role="status">
      <div class="verdict-line">${ok ? 'Correct' : 'Not quite'}${s ? ' ' + badge(s) : ''}</div>
      <p>${ok ? '' : `Answer: <b>${esc(correct)}</b>. `}${esc(q.why || '')}</p>
      <div class="actions">${s ? `<a class="ghost-btn" href="#sp-${s.id}">Open card</a>` : '<a class="ghost-btn" href="#rules">Rules</a>'}<button class="primary-btn" data-next>Next question</button></div></div>`;
    view.querySelector('[data-next]').addEventListener('click', () => { renderFishInfo(); window.scrollTo(0, 0); });
    view.querySelector('[data-next]').focus({ preventScroll: true });
  });
}
function answer(root, btn, ok, isCorrect) {
  root.querySelectorAll('.option').forEach((b) => {
    b.disabled = true;
    if (isCorrect(b)) b.classList.add('correct');
    else if (b === btn) b.classList.add('wrong');
    else b.classList.add('dim');
  });
}
function bindQuizChrome(rerender, state) {
  view.querySelector('[data-reset]').addEventListener('click', () => { state.session = { asked: 0, right: 0 }; rerender(); });
  view.querySelectorAll('[data-filter]').forEach((b) => b.addEventListener('click', () => { state.filter = b.dataset.filter; rerender(); }));
}

/* ---------------- rules ---------------- */
function renderRules() {
  setTab('rules');
  simpleBar(false);
  const grouper = seasonState(BY_ID['nassau-grouper'].rules.closed);
  const craw = seasonState(BY_ID['spiny-lobster'].rules.closed);
  view.innerHTML = `
    <h1 class="page-title">Bahamas rules</h1>
    <p class="page-sub">Spearfishing and catch rules for visitors around Grand Cay, Abaco.</p>
    <div class="season" style="margin-top:12px">
      <a href="#sp-nassau-grouper"><b>Nassau grouper</b><span class="state ${grouper.open ? 'open' : 'closed'}">${grouper.open ? 'Open' : 'Closed'}</span><small>${esc(grouper.text.split(' · ')[1])}</small></a>
      <a href="#sp-spiny-lobster"><b>Crawfish</b><span class="state ${craw.open ? 'open' : 'closed'}">${craw.open ? 'Open' : 'Closed'}</span><small>${esc(craw.text.split(' · ')[1])}</small></a>
    </div>
    ${RULES.map((r) => `<section class="panel"><h2>${esc(r.title)}</h2><ul>${r.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></section>`).join('')}
    <div class="warning"><b>Check before you fish.</b> This is a summary from government, conservation and travel sources, some of them several years old. The Fisheries Act, 2020 replaced the old law, and limits and fees change. Confirm with the Department of Marine Resources or your customs officer when you clear in.</div>
    <section class="panel"><h2>Sources</h2><ul class="sources">${SOURCES.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noreferrer">${esc(s.label)}</a></li>`).join('')}</ul></section>
    <p class="fineprint">Fish photos come from iNaturalist observers; each photo shows its author and licence and links to the original. Some licences are non-commercial, so this app is for personal use.</p>`;
}

/* ---------------- boot ---------------- */
route();
if ('serviceWorker' in navigator && document.documentElement.dataset.host !== 'artifact' && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
