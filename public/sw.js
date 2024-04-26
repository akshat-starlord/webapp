var cacheName = 'v1';
var appShellFiles = [
    'css/styles.css',
    'src/views/index.ejs',
    'src/views/blog1.ejs',
    'src/views/blog2.ejs',
    'src/views/blog3.ejs',
    'src/routes/blog1route',
    'src/routes/blog2route',
    'src/routes/blog3route',
    'src/routes/blogRoutes',
    'app.js'

];

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(cacheName)
        .then(cache => {
          console.log('Service Worker: Caching App Shell at the moment');
          return cache.addAll(appShellFiles);
        })
    );
});


self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((r) => {
            console.log('[Service Worker] Fetching resource: ' + e.request.url);
            return r || fetch(e.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
                    console.log('[Service Worker] Caching new resource: ' + e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== cacheName) {
                    console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});

