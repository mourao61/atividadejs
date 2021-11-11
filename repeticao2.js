var numFerramentas = 0; 
var valTotal = 0; 
var resposta = ""; 

btnRegistrar.addEventListener("click", repeticao)
function repeticao() {
    var frmNome = nome.value;   
    var frmQuantidade = Number(quantidade.value);
        
    resposta += `<br> Ferramenta: ${frmNome} <br>`
    resposta += `Numero de vezes: ${frmQuantidade} <br>`
    
       
    listaFerramentas.innerHTML = resposta 
}