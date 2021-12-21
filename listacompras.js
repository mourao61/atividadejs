function adicionarCompra() {  
  var inProduto = document.getElementById("inProduto");
  var inQuantidade = document.getElementById("inQuantidade");
  var produto = inProduto.value;    
  var quantidade = inQuantidade.value;
  
  if (produto == "" || quantidade == "") {
    alert("Informe corretamente os dados");
    inProduto.focus();
    return;
  }

  var tbLista = document.getElementById("tbLista");
 
  inserirLinha(tbLista, produto, quantidade);
  
  gravarFilme(produto, quantidade);

  inProduto.value = "";    
  inQuantidade.value = "";
  inProduto.focus();       
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCompra);

function inserirLinha(tabela, produto, quantidade) {
  var linha = tabela.insertRow(-1); 
  var col1 = linha.insertCell(0);       
  var col2 = linha.insertCell(1);
  col1.textContent = produto;            
  col2.textContent = quantidade; 
}

function gravarLista(produto, quantidade) {  
  if (localStorage.getItem("produtosLista")) {    
    var produtosLista = localStorage.getItem("produtosLista") + ";" + produto;
    var produtosQuantidade = localStorage.getItem("produtosQuantidade") + ";" + quantidade;
    localStorage.setItem("produtosLista", produtosLista);    
    localStorage.setItem("produtosQuantidade", produtosQuantidade);     

  } else {    
    localStorage.setItem("produtosLista", produto);
    localStorage.setItem("produtosQuantidade", quantidade);
  }
}

function recuperarLista() {  
  if (localStorage.getItem("produtosLista")) {    
    var produto = localStorage.getItem("produtosLista").split(";");
    var quantidade = localStorage.getItem("produtosQuantidade").split(";");    
    var tbLista = document.getElementById("tbLista");    
    for (var i = 0; i < lista.length; i++) {
      inserirLinha(tbLista, produto[i], quantidade[i]);
    }
  }
}
recuperarLista();
var ckTodos = document.getElementById("ckTodos");

ckTodos.addEventListener("change", function () { 
  var tbLista = document.getElementById("tbLista");
  var ckExcluir = tbLista.getElementsByTagName("input");
  var status = ckTodos.checked; 

  for (var i = 1; i < ckExcluir.length; i++) {
    ckExcluir[i].checked = status;
  }
});

function removerLista() {  
  var tbLista = document.getElementById("tbLista");       
    localStorage.removeItem("produtosLista");
    localStorage.removeItem("produtosQuantidade");
    
    for (i = 1; i < ckExcluir.length; i++) {      
      if (!ckExcluir[i].checked) {        
        produto = tbLista.rows[i].cells[0].textContent;
        quantidade = tbLista.rows[i].cells[1].textContent;
        gravarLista(produtos, quantidade);
      }
    }    
    for (i = ckExcluir.length - 1; i > 0; i--) {
      if (ckExcluir[i].checked) {
        tbLista.deleteRow(i);    
      }
    }
    ckExcluir[0].checked = false;     
  }

var btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener("click", removerLista);