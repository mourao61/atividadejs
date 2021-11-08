btnCalcular.addEventListener('click', calcularPreco);

function calcularPreco() {
    
    var remedio = (inputRemedio.value);
    var valor = Number(Math.floor(inputValor.value) * 1.6);
        
    outRemedio.textContent = `Na compra de 2 Unidades de ${remedio} com 40% de desconto pague:`;
    outResultado.textContent = `R$ ${valor}`;
}