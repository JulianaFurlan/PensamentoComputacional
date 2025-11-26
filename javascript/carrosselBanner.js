// javascript/carrosselBanner.js - VERSÃO SIMPLES
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const imagens = document.querySelectorAll('.slides img');
    
    if (!slides || imagens.length === 0) return;

    let index = 0;
    let intervalo;

    function passarSlide() {
        index = (index + 1) % imagens.length;
        const larguraSlide = imagens[0].clientWidth;
        slides.style.transform = `translateX(${-index * larguraSlide}px)`;
    }

    function iniciarCarrossel() {
        intervalo = setInterval(passarSlide, 3000);
    }

    slides.addEventListener('mouseenter', () => clearInterval(intervalo));
    slides.addEventListener('mouseleave', iniciarCarrossel);
    
    iniciarCarrossel();

    window.addEventListener('resize', () => {
        const larguraSlide = imagens[0].clientWidth;
        slides.style.transform = `translateX(${-index * larguraSlide}px)`;
    });
});