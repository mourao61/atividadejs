btnCalcular.addEventListener('click', verificarVelocidade);
function verificarVelocidade() {

    var velocidadePermitida = Number(inputVelocidadePermitida.value);
    var velocidadeDoVeiculo = Number(inputVelocidadeDoVeiculo.value);

    var velocidadeAcimaDoPermitido = (velocidadeDoVeiculo - velocidadePermitida);
    var vintePorCentoDoPermitido = (velocidadePermitida * 0.2);

    if ((inputVelocidadeDoVeiculo.value == '' || inputVelocidadePermitida.value == '') || (isNaN(velocidadePermitida) || isNaN(velocidadeDoVeiculo))) {
        alert('Digite uma velocidade válida !');
        inputVelocidadeDoVeiculo.value ='';
        inputVelocidadePermitida.value = '';
        inputVelocidadePermitida.focus();
        return;
    }
    
    if (velocidadeDoVeiculo <= velocidadePermitida) { 
        outSituacao.textContent = `Velocidade dentro do permitido. Sem multa !`;
    } else if (velocidadeAcimaDoPermitido >= vintePorCentoDoPermitido) { 

      
        outSituacao.textContent = `Você estava com a velocidade 20% acima do permitido. Multa Grave !`;
    } else {

        
        outSituacao.textContent = `Você estava com menos de 20% de velocidade acima do permitido. Multa Leve !`
    }

}

