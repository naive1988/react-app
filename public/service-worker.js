importScripts('/workbox-sw.js');

workbox.routing.registerRoute(
  /\/$/,
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('.*\.(?:js|css|png|svg|ico)'),
  workbox.strategies.cacheFirst({
    cacheName: 'resource-cache'
  })
);
