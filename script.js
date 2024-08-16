
// menu hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});



// parallax text

document.addEventListener('scroll', function() {
    const parallaxText = document.querySelector('.parallax-text');
    const scrollPosition = window.pageYOffset;
    const speed = 0.2; // Velocidad del efecto parallax
    
    parallaxText.style.transform = 'translateY(' + scrollPosition * speed + 'px)';
});
