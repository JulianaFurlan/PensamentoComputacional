/* ==========================
   SCROLL VERTICAL - DESKTOP
========================== */
const scrollBox = document.querySelector('.scroll-box');
const conteudo = document.querySelector('.conteudo');
let velocidade = 1;
let pausa = false;

scrollBox.addEventListener('mouseenter', () => pausa = true);
scrollBox.addEventListener('mouseleave', () => pausa = false);

if (!conteudo.dataset.duplicado) {
    conteudo.innerHTML += conteudo.innerHTML;
    conteudo.dataset.duplicado = true;
}

function animarScroll() {
    if (!pausa) {
        scrollBox.scrollTop += velocidade;

        if (scrollBox.scrollTop >= conteudo.scrollHeight / 2) {
            scrollBox.scrollTop = 0;
        }
    }
    requestAnimationFrame(animarScroll);
}

animarScroll();

// Atualiza scroll quando redimensiona
window.addEventListener('resize', () => {
});

// ==========================
//  CARROSSEL MOBILE
// ==========================
document.addEventListener('DOMContentLoaded', () => {
    const depoimentosMobile = document.querySelectorAll('.depoimentos-mobile .depoimento');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    let indice = 0;

    function mostrarDepoimento(i) {
        depoimentosMobile.forEach((dep, idx) => {
            dep.classList.toggle('ativo', idx === i);
        });
    }

    if (btnNext && btnPrev) {
        btnNext.addEventListener('click', () => {
            indice = (indice + 1) % depoimentosMobile.length;
            mostrarDepoimento(indice);
        });

        btnPrev.addEventListener('click', () => {
            indice = (indice - 1 + depoimentosMobile.length) % depoimentosMobile.length;
            mostrarDepoimento(indice);
        });
    }

    // Exibe o primeiro depoimento inicialmente
    mostrarDepoimento(indice);
});

