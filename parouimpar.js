
btnNumero.addEventListener('click', verificarNumero);

function verificarNumero() {
    
    var numero = inputNumero.value;

    if ((numero < 0 || numero == '') || isNaN(numero)) {
        alert('Digite um número positivo válido !');
        inputNumero.value = '';
        inputNumero.focus();
        return;

    } else if (numero % 2 !== 0) {
        outNumero.textContent = `O número ${numero} é Ímpar`;
    } else {
        outNumero.textContent = `O número ${numero} é Par`;
    }

}

