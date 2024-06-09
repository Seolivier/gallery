// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = item.src;
            currentIndex = index;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
        lightboxImg.src = galleryItems[currentIndex].src;
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
        lightboxImg.src = galleryItems[currentIndex].src;
    });
});

