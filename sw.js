// Miner Calc service worker: opens instantly and works offline.
// Bump VERSION whenever you change any app file so phones pick up the update.
const VERSION = "miner-calc-v1";
const FONTS = "miner-calc-fonts";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(VERSION).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== FONTS).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Serve from cache right away, refresh the cache in the background.
function staleWhileRevalidate(event, cacheName, fallbackUrl) {
  return caches.open(cacheName).then(cache =>
    cache.match(event.request, { ignoreSearch: true }).then(hit => {
      const network = fetch(event.request)
        .then(res => {
          if (res && (res.ok || res.type === "opaque")) cache.put(event.request, res.clone());
          return res;
        })
        .catch(() => null);
      if (hit) {
        event.waitUntil(network);
        return hit;
      }
      return network.then(res => res || (fallbackUrl ? cache.match(fallbackUrl) : Response.error()));
    })
  );
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Live Bitcoin data always goes to the network; the page keeps its own last copy.
  if (url.hostname === "mempool.space") return;

  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(staleWhileRevalidate(event, FONTS));
    return;
  }

  if (url.origin === self.location.origin) {
    const fallback = req.mode === "navigate" ? "./index.html" : null;
    event.respondWith(staleWhileRevalidate(event, VERSION, fallback));
  }
});
