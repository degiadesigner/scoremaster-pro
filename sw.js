self.addEventListener('install', (e) => {
    console.log('[Service Worker] Đã cài đặt');
});
self.addEventListener('fetch', (e) => {
    // Bắt buộc phải có sự kiện này thì Android mới tự động hiện popup Cài Đặt
});