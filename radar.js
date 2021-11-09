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
        outSituacao.innerHTML = `
        <div class="alert alert-success" role="alert">
        Velocidade dentro do permitido. Sem multa!
        </div>
        `
    
    } else if (velocidadeAcimaDoPermitido >= vintePorCentoDoPermitido) { 
          
        outSituacao.innerHTML = `
        <div class="alert alert-danger" role="alert">
           Você estava com a velocidade 20% acima do permitido. Multa Grave!
        </div>
        `
    } else {

        outSituacao.innerHTML = `
        <div class="alert alert-info" role="alert">
         Você estava com menos de 20% de velocidade acima do permitido. Multa Leve!
        </div>
        `
        
        
    }

}