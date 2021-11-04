var frmmodelo;
var frmvalor = parseInt();
var divMostrar;

btnSimular.addEventListener('click', function(){
   frmmodelo = modelo.value
   frmvalor = valor.value
   frmPareclas = parseInt(qtdParcelas.value)
   
   divMostrar = document.getElementById('mostrarSimulacao')
   alert('Simulação realizada com sucesso!')
    
   var frmentrada = ((frmvalor/2)/frmPareclas)
   var frmfinal = frmentrada*1.70
   var frmvalor2 =  frmvalor/2
    
// .toFixed(2)

divMostrar.innerHTML = `
<div>Modelo do veículo :  <strong>${frmmodelo}</strong></div>
<div>Valor do veículo :  <strong>R$</strong> <strong>${frmvalor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></div>
<div>Valor da entrada :  <strong>${frmvalor2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></div>
<div><strong>${frmPareclas}</strong> Parcelas no valor de : <strong>${frmfinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></div>
`
} ) 
