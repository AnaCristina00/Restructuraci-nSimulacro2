const CACHE = 'saber11-sim-2020-v9';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/main.css',
  './js/main.js',
  './js/data/assets.js',
  './js/data/niveles.js',
  './js/data/subjects.js',
  './js/data/banks/matematicas.js',
  './js/data/banks/lectura-critica.js',
  './js/data/banks/ingles.js',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-escudo.svg',
  './assets/img/logo-sed.svg',
  './assets/img/cuy-correcto.png',
  './assets/img/cuy-incorrecto.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (url.includes('imgBanks')) {
    e.respondWith(
      fetch(e.request).then(r => {
        const clone = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return r;
      }).catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(r =>
        r || fetch(e.request).catch(() => caches.match('./index.html'))
      )
    );
  }
});
