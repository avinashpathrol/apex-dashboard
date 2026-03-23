// APEX Bot Service Worker
const CACHE = 'apex-v1';

// Cache only static shell on install
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([
      '/apex-dashboard/index.html',
      '/apex-dashboard/manifest.json',
    ]))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

// Network first for API calls, cache fallback for shell
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  
  // Always network-first for data (API calls, data.json)
  if (url.hostname.includes('github') || 
      url.hostname.includes('kraken') ||
      url.hostname.includes('coingecko') ||
      url.hostname.includes('alternative')) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .catch(() => new Response('{}', { headers: { 'Content-Type': 'application/json' } }))
    );
    return;
  }

  // Cache-first for app shell
  e.respondWith(
    caches.match(e.request)
      .then(cached => cached || fetch(e.request))
  );
});
