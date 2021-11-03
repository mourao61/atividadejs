var frmmodelo;
var frmvalor = parseInt();
var divMostrar;


// Botao cadastrar add evento

btnSimular.addEventListener('click', function(){
   frmmodelo = modelo.value
   frmvalor = valor.value
   divMostrar = document.getElementById('mostrarSimulacao')
   alert('Simulação realizada com sucesso!')
    var frmentrada = frmvalor / 2
    var frmfinal = frmvalor / 2 / 60 * 0.70 + frmvalor / 2 / 60
    

divMostrar.innerHTML = `
<div>Modelo do veiculo :  <strong>${frmmodelo}</strong></div>
<div>Valor do veiculo :  <strong>${frmvalor}</strong></div>
<div>Valor da entrada :  <strong>${frmentrada}</strong></div>
<div>60x de R$ :  <strong>${frmfinal.toFixed(2)}</strong></div>
`
} ) 
