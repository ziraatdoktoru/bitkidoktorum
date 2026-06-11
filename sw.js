var CACHE = 'bitkidoktorum-v1';
var URLS = [
  '/', '/index.html', '/ansiklopedi.html', '/bitki.html',
  '/assets/style.css', '/assets/app.js',
  '/populer.html', '/mevsim.html', '/ipuclari.html',
  '/takvim.html', '/bolge.html', '/araclar.html'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) { return c.addAll(URLS); })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
    })
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.url.includes('/api/')) return;
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request).then(function(resp) {
        var clone = resp.clone();
        caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
        return resp;
      }).catch(function() { return cached; });
    })
  );
});
