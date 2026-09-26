self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado com sucesso');
});

self.addEventListener('fetch', (e) => {
  // Permite que o navegador reconheça o PWA sem fazer cache estático agressivo,
  // garantindo que futuras atualizações de código chegam a todos os utilizadores.
});