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
    
// .toFixed(2)

divMostrar.innerHTML = `
<div>Modelo do veículo :  <strong>${frmmodelo}</strong></div>
<div>Valor do veículo :  <strong>R$</strong> <strong>${frmvalor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></div>
<div>Valor da entrada :  <strong>${frmentrada.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></div>
<div>60x no valor de :  <strong>${frmfinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></div>
`
} ) 
