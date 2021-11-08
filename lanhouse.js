btnCalcular.addEventListener('click', calcularPreco);

function calcularPreco() {
    
    var precoPorMinuto = Number(inputPrecoPorMin.value);
    var tempoDeUso = Number(inputTempoDeUso.value);
    var tempoTotalDeUso = Math.ceil(tempoDeUso / 15);

    var precoTotal = (precoPorMinuto * tempoTotalDeUso).toFixed(2);

    outResultado.textContent = `Total a Pagar: R$ ${precoTotal}`;
}

