const CACHE_NAME = 'marmitaria-v7.2-cache';
const assets = [
  './',
  './index.html',
  'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3'
];

// Instalação: Salva os arquivos essenciais
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

// Estratégia: Network First, falling back to cache
// Tentamos baixar o código mais novo, se falhar (offline), usa o cache.
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});