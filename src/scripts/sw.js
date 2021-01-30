importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

  workbox.routing.registerRoute(
      new RegExp('\.css$'),
      workbox.strategies.staleWhileRevalidate({
        cacheName: 'CSS-cache',
      }),
  );


  workbox.routing.registerRoute(
      new RegExp('\.(png|svg|jpg|jpeg)$'),
      workbox.strategies.cacheFirst({
        cacheName: 'Images-cache',
      }),
  );

  /*
    FONT AWESOME
  */

  workbox.routing.registerRoute(
      new RegExp('https://cdnjs.cloudflare.com/ajax/libs/font-awesome'),
      workbox.strategies.staleWhileRevalidate({
        cacheName: 'font-awesome',
      }),
  );

  /*
    API
  */

  workbox.routing.registerRoute(
      new RegExp('https://restaurant-api.dicoding.dev'),
      workbox.strategies.staleWhileRevalidate({
        cacheName: 'API-cache',
        cacheExpiration: {
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        },
      }),
  );

  /*
    GOOGLEAPIS
  */

  workbox.routing.registerRoute(
      new RegExp('https://fonts.googleapis.com'),
      workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-apis',
      }),
  );

  /*
    GSTATIC
  */

  workbox.routing.registerRoute(
      new RegExp('https://fonts.gstatic.com'),
      workbox.strategies.staleWhileRevalidate({
        cacheName: 'g-static',
      }),
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

