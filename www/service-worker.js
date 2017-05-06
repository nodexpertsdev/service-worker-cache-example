
/**
* @desc Service worker file - All events and code of service worker will go here
* Basically this file will run as proxy to intercept requests.
* @author Mukul
*/

var name = 'simple nodexperts cache v2',
    filesToCache = [
      './index.html',
      './css/style.css',
      './script.js',
      './service-worker.js'
    ];

// event.waitUntil will stop the flow till the Promise is resolved

self.addEventListener('install', function (event) {
  console.log("installing");
  event.waitUntil(
    // opens cache
    // cache is an object which is available inside service-worker
    caches.open(name).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function (event) {
  console.log("activating");
  event.waitUntil(
   caches.keys().then(function(cachedFiles) {
     return Promise.all(cachedFiles.map(function(cacheFile) {
       // everytime a cache version changes, old files are removed from cache
       if (cacheFile !== name) {
         console.log('Removing Cached Files from Cache - ', cacheFile);
         return caches.delete(cacheFile);
       }
     }));
   })
 );
});


self.addEventListener('fetch', function (event) {
  console.log("fetching");
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
