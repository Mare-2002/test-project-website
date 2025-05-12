function scrollGallery(direction) {
    const container = document.querySelector('.gallery .content .images');
    const scrollAmount = container.offsetWidth; //Scroll full container width (slide)
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}