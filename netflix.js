document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero__content');
    heroContent.addEventListener('mouseover', function() {
        heroContent.style.opacity = '0.8';
    });
    heroContent.addEventListener('mouseout', function() {
        heroContent.style.opacity = '1';
    });
});
