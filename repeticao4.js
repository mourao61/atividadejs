btnVerificar.addEventListener('click', VerificarNumero);
function VerificarNumero() {
    
    var numero = Number(frmNumero.value);
    var divisores = `Divisores de ${numero} : 1`;
    var soma = 1;

    for (var n = 2; n <= numero / 2; n++) {
        if (numero % n == 0) {
            divisores += `, ${n}`;
            soma += n; 
        }
    }
    divisores += `.<br> (Soma: ${soma}) <br>`    
    mostrarNumero.innerHTML = divisores;
    
      if (numero == soma) {
        mostrarNumero.innerHTML = `${divisores} É um número Perfeito.`;
    } else {
        mostrarNumero.innerHTML = `${divisores} Não é um número perfeito.`;
    }
}

