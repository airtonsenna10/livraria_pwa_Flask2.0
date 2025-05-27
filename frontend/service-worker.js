self.addEventListener('install', function(e) {
    console.log('Service Worker: Instalado');
});

self.addEventListener('fetch', function(e) {
    console.log('Service Worker: Buscando', e.request.url);
});
