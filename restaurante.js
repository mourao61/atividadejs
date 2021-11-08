btnCalcular.addEventListener('click', CalcularPreco);
function CalcularPreco() {
    
    var preco = Number(PrecoPorQuilo.value).toFixed(2);
    var peso = Number(Peso.value / 1000);
    var precoTotal = (preco * peso).toFixed(2);

    outTotalAPagar.textContent = `Preço total: R$ ${precoTotal}`;

}

