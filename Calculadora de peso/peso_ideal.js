var frmnome;
var frmpeso = parseInt();
var frmaltura = parseInt();
var divMostrar;

btnCalcular.addEventListener('click', function(){
   frmnome = nome.value
   frmpeso = peso.value
   frmaltura = altura.value
   frmsexo = parseInt(sexoMasculino.value)
   frmsexo = parseInt(sexoFeminino.value)
   
   divpesoIdeal = document.getElementById('mostrarSimulacao')
       
   var frmfinal = frmentrada*1.70
   var frmvalor2 =  frmvalor/2
    
// .toFixed(2)

divpesoIdeal.innerHTML = `
<div>Modelo do veículo :  <strong>${frmmodelo}</strong></div>
<div>Valor do veículo :  <strong>R$</strong> <strong>${frmvalor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></div>
<div>Valor da entrada :  <strong>${frmvalor2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></div>
<div><strong>${frmPareclas}</strong> Parcelas no valor de : <strong>${frmfinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></div>
`
} ) 
