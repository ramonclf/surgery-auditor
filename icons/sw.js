self.addEventListener("install", (event) => {
  console.log("Service Worker instalado");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker ativado");
});

self.addEventListener("fetch", (event) => {
  // Aqui você pode interceptar requisições e servir offline futuramente
});
