'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f8093da79e5c315fd20c8116f0eebff4",
"index.html": "680078ac023399c48dd3bfb2b8145089",
"/": "680078ac023399c48dd3bfb2b8145089",
"main.dart.js": "d7fd114fd7eab5edef4bbba203d9b893",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "674ad86007d862d5dae6b268ede9d92c",
"icons/android-chrome-192x192.png": "321e4201740e3cf304733df1fe555a6f",
"icons/apple-touch-icon.png": "0435a925dc4d904124801afbc7d9b474",
"icons/android-chrome-512x512.png": "f34efba52efece00e5a43b934e495be7",
"manifest.json": "8d9cff0475fb7b9aaf202227d84b916a",
"assets/AssetManifest.json": "fe837c468baeab805607aa4c3d1be6e0",
"assets/NOTICES": "56d7edc84d7ab3c92eee5ccffaa80915",
"assets/FontManifest.json": "d9d024d13ff7696f4925c740dce8144c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/simple_on.png": "63e24186aec21d19e6f82f88d656a951",
"assets/assets/images/cats/asian_cat.png": "eac7d1338a51b7ea5197a77b60b744d7",
"assets/assets/images/cats/american_cat.png": "09865f900d9d5c9d6b40207e0bf92399",
"assets/assets/images/cats/american_cat_anim.gif": "4635a05c2078c5f0a7d55d5d73df278a",
"assets/assets/images/cats/asian_cat_anim.gif": "d282669c98a4c1f012cad04a073ad32f",
"assets/assets/images/cats/french_cat.png": "1eca0d68364d4f58edd434617f790501",
"assets/assets/images/cats/french_cat_anim.gif": "12e4dfd7ded47e1580bf4ad656ea2e88",
"assets/assets/images/menu.png": "cb0fc31b64116e8bc0e125c714608bad",
"assets/assets/images/meals/egg_rice.png": "edec5ac274e1ff6cac229da7f00e3d7c",
"assets/assets/images/meals/pho.png": "1a9acb407c248e013870116513781b98",
"assets/assets/images/meals/lobster_tail.png": "2c8766b3ea0decb182bf70378d100e55",
"assets/assets/images/meals/pancakes.png": "3b5fa3cadc2384bf17fc38b9a1fcdee2",
"assets/assets/images/meals/steak.png": "a4710c8998cfe3063253ecc300fe6952",
"assets/assets/images/meals/mussels.png": "c5ef1961f52f6680d5acd5265ea4a464",
"assets/assets/images/meals/croissant.png": "97956bfa48e485c737ae01a95afb3ea4",
"assets/assets/images/meals/chicken_in_%25D1%2581ider.png": "0e3aa8b75b5422b20586759c880343a3",
"assets/assets/images/meals/salmon_in_paper.png": "59352acabe264fcb6d7681f4d5cda6e6",
"assets/assets/images/meals/sushi.png": "d0f4f875831984dca8c5a2d7a46e70d6",
"assets/assets/images/meals/apple_pie.png": "f0cb7623d3229d3b4c04c117d680eba3",
"assets/assets/images/meals/fried_noodles.png": "603538f0855b3e23cdd2b7d9d5ae6b3d",
"assets/assets/images/meals/burger.png": "857ed3e5876c2ce14bcda798bb4f36e2",
"assets/assets/images/meals/mango_salad.png": "32c0e6750490dbbb8b3e3bb68625b268",
"assets/assets/images/meals/ratatouille.png": "6dcbbc2f20c15ffe0a9e8b1be7436370",
"assets/assets/images/ingredients/bun.png": "152f31abe40454f1cb5a00aca75107dd",
"assets/assets/images/ingredients/zucchini.png": "107e0a568221b2e0df92eed274ef5a4f",
"assets/assets/images/ingredients/salmon.png": "d047fa8206200826a101dc5032fff691",
"assets/assets/images/ingredients/chicken.png": "408cf9917d879d9c489794aa758fb93c",
"assets/assets/images/ingredients/flour.png": "cdde12aab11b2cb442964de7b7301e1e",
"assets/assets/images/ingredients/lobster.png": "53236e8182387245ac3a8a22b021f64d",
"assets/assets/images/ingredients/mango.png": "48e982ed506ce70cb5e316063a73b3a5",
"assets/assets/images/ingredients/mussels.png": "0d0d63f666c32dfb24e0fd44dcdb3ba8",
"assets/assets/images/ingredients/milk.png": "f9acc5639774853be81f73e0a9b30513",
"assets/assets/images/ingredients/butter.png": "8c30b42710f0200028288b6994ad2a04",
"assets/assets/images/ingredients/tomato.png": "254ed27eba3d7e2130a0346266f490d9",
"assets/assets/images/ingredients/patty.png": "ff1b2232699aac8c5284ce5c8e60c840",
"assets/assets/images/ingredients/wine.png": "013a96bad9c19bb8687ad6d1782d5b94",
"assets/assets/images/ingredients/meat.png": "c4f3f77b2e833132aedfe6f3bfe1e6f8",
"assets/assets/images/ingredients/nori.png": "f9899642c50c6fa4480a9ba30be97533",
"assets/assets/images/ingredients/apple.png": "c31706afed1bd54cd3b0a9734205e949",
"assets/assets/images/ingredients/shrimps.png": "5e5c3b399ce194aa356771d806d86a11",
"assets/assets/images/ingredients/garlic.png": "eb00d0898a24a2d5414d8ed088339492",
"assets/assets/images/ingredients/rice.png": "7c00d55c1ac6c745fb4136f2318602b2",
"assets/assets/images/ingredients/chilli.png": "06695ffb980f9949b5d27943b5aef412",
"assets/assets/images/ingredients/salad.png": "86074b3487a7ba4f4f56e55e479ef585",
"assets/assets/images/ingredients/shiitake.png": "572352f2c92e7632048cbe73b9774e20",
"assets/assets/images/ingredients/lemon.png": "08bb09bcf1d088020c75cdfc30e440b7",
"assets/assets/images/ingredients/eggplant.png": "ae5c40abe3643d2da8a5756adad64827",
"assets/assets/images/ingredients/egg.png": "2f292390bda04675fdf78be29f60ca9a",
"assets/assets/images/ingredients/noodles.png": "43c27b1181319443c2802147fb484d47",
"assets/assets/images/completed_board.png": "c8e75341eac56afb1f4a1faa71873a51",
"assets/assets/images/restaurant_background.png": "b25a242fd25e769f38a1b61085eeabe8",
"assets/assets/images/facebook_icon.png": "284d2a1d2782e5e24b1f9bce25f3ea9a",
"assets/assets/images/default.png": "a4a18ca928b9196312ad49ac22cae46e",
"assets/assets/images/table.png": "1393d51fe7c410e4830671f10c610f90",
"assets/assets/images/twitter_icon.png": "f9a8b83fc280f6a6363783cdbdd81573",
"assets/assets/images/simple_off.png": "ecac9ec0e8dc5d526e204651b5e62dcc",
"assets/assets/images/logo_gourmeow.png": "674ad86007d862d5dae6b268ede9d92c",
"assets/assets/audio/move.wav": "4b81913f152275b2b9da119e36ffe9b8",
"assets/assets/audio/tada.wav": "2547ed1672cbc3a085adfb2361a4ee4f",
"assets/assets/fonts/Balthazar-Regular.ttf": "26970bfaa4db347938334657ada7d809"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
