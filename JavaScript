// Lógica de Aumento/Diminuição de Fonte
let fontSize = 100; // Porcentagem inicial

const increaseBtn = document.getElementById('increase-font');
const decreaseBtn = document.getElementById('decrease-font');

increaseBtn.addEventListener('click', () => {
    if (fontSize < 150) { // Limite máximo de 150%
        fontSize += 10;
        document.documentElement.style.fontSize = fontSize + '%';
    }
});

decreaseBtn.addEventListener('click', () => {
    if (fontSize > 80) { // Limite mínimo de 80%
        fontSize -= 10;
        document.documentElement.style.fontSize = fontSize + '%';
    }
});

// Dica: Usei document.documentElement.style.fontSize para que 
// todas as medidas em 'rem' no seu CSS escalem proporcionalmente.
