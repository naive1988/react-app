importScripts('/workbox-sw.js');

workbox.routing.registerRoute(
  ({ event }) => {  return event.request.destination === "document" },
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'entry-cache'
  })
);

workbox.routing.registerRoute(
  new RegExp('.*\.(?:js|css|png|svg|ico)'),
  workbox.strategies.cacheFirst({
    cacheName: 'resource-cache'
  })
);
