var frmmodelo;
var frmvalor = parseInt();
var divMostrar;

btnSimular.addEventListener('click', function(){
   frmmodelo = modelo.value
   frmvalor = valor.value
   divMostrar = document.getElementById('mostrarSimulacao')
   alert('Simulação realizada com sucesso!')
    var frmentrada = frmvalor / 2
    var frmfinal = frmvalor / 2 / 60 * 0.70 + frmvalor / 2 / 60
    

divMostrar.innerHTML = `
<div>Modelo do veículo :  <strong>${frmmodelo}</strong></div>
<div>Valor do veículo :  R$ <strong>${frmvalor}</strong></div>
<div>Valor da entrada :  R$ <strong>${frmentrada}</strong></div>
<div>60x no valor de :  R$ <strong>${frmfinal.toFixed(2)}</strong></div>
`
} ) 
