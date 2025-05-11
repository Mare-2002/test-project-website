function scrollGallery(direction) {
    const container = document.querySelector('.gallery .content .images');
    const scrollAmount = container.offsetWidth; // Scroll half the container width
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}