// Menu Hamburguer
import './modules/menu.js';

// Botão Voltar
document.addEventListener('DOMContentLoaded', function() {
    const btnVoltar = document.querySelector('.btn-voltar');
    if (btnVoltar) {
        btnVoltar.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html#modulos';
        });
    }
});