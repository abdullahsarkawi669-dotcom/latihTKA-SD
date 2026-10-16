const CACHE_NAME = 'kuis-pintar-v1';
const urlsToCache = [
  './index.html',
  './app.js',
  './soal.js',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap'
];

// Install Service Worker dan simpan cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Gunakan cache saat offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Kembalikan dari cache jika ada
        }
        return fetch(event.request); // Ambil dari internet jika belum ada di cache
      })
  );
});