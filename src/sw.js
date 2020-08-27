// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('/sw.js').then(function(registration) {
//         // Registration was successful
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }, function(err) {
//         // registration failed :(
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     });
//   }

//   navigator.serviceWorker.register('/sw.js', {
//     scope: '/app/'
//    });

// var CACHE_NAME = 'shule-finder-cache-v1';
// var urlsToCache = [
//   '/',
//   '/styles/app.css',
//   '/script/index.js'
// ];

// self.addEventListener('install', function(event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Opened cache');
//         // Open a cache and cache files
//         return cache.addAll(urlsToCache);
//       })
//   );
// });


// self.addEventListener('fetch', function(event) {
//     console.log(event.request.url);
//     event.respondWith(
//       caches.match(event.request)
//         .then(function(response) {
//           // Cache hit - return response
//           if (response) {
//             return response;
//           }
//           return fetch(event.request);
//         }
//       )
//     );
//   });