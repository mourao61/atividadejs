var numFerramentas = 0; 
var valTotal = 0; 
var resposta = ""; 

btnRegistrar.addEventListener("click", repeticao)
function repeticao() {
    var frmNome = nome.value;   
    var frmQuantidade = Number(quantidade.value);
    
    resposta += `<br> Ferramenta: ${frmNome} <br>` // exibe o nome da ferramenta 
    resposta += `Numero de vezes: ${frmQuantidade} <br>` // conta o numero de repetições
    
    for (let ferramenta = ''; ferramenta <= frmQuantidade; ferramenta++) {  //Repete o nome da ferramenta dividido por |
        resposta += `|${frmNome}`;
    }  
    listaFerramentas.innerHTML = resposta 
}