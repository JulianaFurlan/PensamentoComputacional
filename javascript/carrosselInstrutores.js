/* ==========================
   SCROLL VERTICAL - DESKTOP
========================== */
const scrollBox = document.querySelector('.scroll-box');
const conteudo = document.querySelector('.conteudo');
let velocidade = 1;
let pausa = false;

// Pausar ao passar o mouse
scrollBox.addEventListener('mouseenter', () => pausa = true);
scrollBox.addEventListener('mouseleave', () => pausa = false);

// Duplicar conteúdo (só se ainda não tiver duplicado)
if (!conteudo.dataset.duplicado) {
    conteudo.innerHTML += conteudo.innerHTML;
    conteudo.dataset.duplicado = true;
}

function animarScroll() {
    if (!pausa) {
        scrollBox.scrollTop += velocidade;

        // Reinicia o scroll quando chegar na metade do conteúdo duplicado
        if (scrollBox.scrollTop >= conteudo.scrollHeight / 2) {
            scrollBox.scrollTop = 0;
        }
    }
    requestAnimationFrame(animarScroll);
}

animarScroll();

// Atualiza scroll quando redimensiona
window.addEventListener('resize', () => {
    // Não precisa resetar scrollTop, só garantir que animação continua
    // e a metade do conteúdo é recalculada automaticamente porque usamos scrollHeight / 2
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

