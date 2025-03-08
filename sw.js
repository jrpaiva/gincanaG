const CACHE_NAME = 'gincanag-v1';
const ASSETS = [
  '/gincanaG/',
  '/gincanaG/index.html',
  '/gincanaG/manifest.json',
  '/gincanaG/icon-192x192.png',
  '/gincanaG/icon-512x512.png',
  '/gincanaG/styles/styles.css',
  '/gincanaG/scripts/main.js'
];

// Instala o Service Worker e armazena os arquivos em cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

// Intercepta as requisições e serve os arquivos do cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
