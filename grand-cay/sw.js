// Offline support for Grand Cay Fish ID.
// App files: network first (so updates arrive), cache fallback when offline.
// Photos, fonts, icons: cache first. All photos are cached on install so the app works offline.
const VERSION = '2026-11-05.1';
const SHELL_CACHE = 'gcfi-shell-' + VERSION;
const MEDIA_CACHE = 'gcfi-media-v1';
const SHELL = [
  './',
  './index.html',
  './styles.css',
  './manifest.webmanifest',
  './js/app.js',
  './js/data/index.js',
  './js/data/blue-water.js',
  './js/data/groupers-snappers.js',
  './js/data/reef.js',
  './js/data/flats-shellfish.js',
  './js/data/sharks-hazards.js',
  './js/data/photos.js',
  './js/data/records.js',
  './fonts/inter-latin-wght.woff2',
  './fonts/inter-latin-ext-wght.woff2',
  './fonts/barlow-condensed-600.woff2',
  './fonts/barlow-condensed-700.woff2',
  './icons/icon.svg',
  './icons/icon-192.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const shell = await caches.open(SHELL_CACHE);
    await shell.addAll(SHELL);
    // Media: best effort, so one failed photo never blocks the install.
    try {
      const list = await (await fetch('./precache.json', { cache: 'no-store' })).json();
      const media = await caches.open(MEDIA_CACHE);
      const have = new Set((await media.keys()).map((r) => new URL(r.url).pathname));
      const todo = list.files.filter((f) => !have.has(new URL(f, self.registration.scope).pathname));
      for (let i = 0; i < todo.length; i += 8) {
        await Promise.allSettled(todo.slice(i, i + 8).map((f) => media.add(f)));
      }
    } catch (e) { /* offline during install: photos fill in as they are viewed */ }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith('gcfi-shell-') && key !== SHELL_CACHE) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

const isMedia = (url) => /\.(webp|jpg|jpeg|png|svg|woff2)$/i.test(url.pathname);

async function networkFirst(request) {
  const cache = await caches.open(SHELL_CACHE);
  try {
    const res = await Promise.race([
      fetch(request),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 4000))
    ]);
    if (res.ok) cache.put(request, res.clone());
    return res;
  } catch (e) {
    const hit = (await cache.match(request, { ignoreSearch: true })) || (request.mode === 'navigate' && (await cache.match('./index.html')));
    if (hit) return hit;
    throw e;
  }
}

async function cacheFirst(request) {
  const hit = await caches.match(request, { ignoreSearch: true });
  if (hit) return hit;
  const res = await fetch(request);
  if (res.ok) (await caches.open(MEDIA_CACHE)).put(request, res.clone());
  return res;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(isMedia(url) ? cacheFirst(request) : networkFirst(request));
});
