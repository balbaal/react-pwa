console.log("sw from public");

const filesToCache = [
  "/",
  "/home",
  "/activity",
  "/sell",
  "/index.html",
  // "/static/js/bundle.js",
  // "static/js/1.chunk.js",
  // "/static/js/0.chunk.js",
  // "/static/js/main.chunk.js",

  "/static/css/main.91d744ea.chunk.css",
  "/static/js/2.aebce967.chunk.js",
  "/static/js/main.e79e7d66.chunk.js",
  "/static/js/runtime-main.9957adfd.js",

  "/undraw_Security_on_ff2u.png",
  "/font-awesome/css/font-awesome.min.css",
  "/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0",
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  "/_DSC2910.jpeg",
  "/impact+terra.png",
  "/_DSC3071.jpeg",
];

const staticCacheName = "react-sw-gp-1";

// install service worker
// storing assets to cache
self.addEventListener("install", (e) => {
  console.log("install service worker and cache static assets");
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch event for ", event.request.url);

  // checking connection if offline
  // if its true get from caches storage
  if (!navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request)
        .then((response) => {
          if (response) {
            console.log("Found ", event.request.url, " in cache");
            return response;
          }
          console.log("Network request for ", event.request.url);
          return fetch(event.request);

          // TODO 4 - Add fetched files to the cache
        })
        .catch((error) => {
          // TODO 6 - Respond with custom offline page
          console.log("something wrong when request files");
        })
    );
  }
});

// remove old cached assets
// self.addEventListener("activate", (event) => {
//   console.log("Activating new service worker...");

//   const cacheAllowlist = [staticCacheName];

//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheAllowlist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
