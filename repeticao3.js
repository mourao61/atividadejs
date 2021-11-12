btnCalcular.addEventListener('click', mostarCalculo);
function mostarCalculo() {
    
    var numeroDeCoelhos = Number(frmCoelhos.value);
    var numeroDeAnos = Number(frmAno.value);
    var total = numeroDeCoelhos;
    var quantidade = '';

    if (numeroDeCoelhos < 2 || numeroDeAnos == 0 || isNaN(numeroDeCoelhos) || isNaN(numeroDeAnos)) {
        alert('Digite um valor nos campos!');
        frmCoelhos.value = '';
        frmAno.value = '';
        frmCoelhos.focus();
        return;
    }

    for (var coelho = 1; coelho <= numeroDeAnos; coelho++) {
        quantidade += `<br>${coelho}º Ano: ${total} Coelhos.<br>`;
        total *= 3;
        
    }

    listaCoelhos.innerHTML = quantidade;

}

