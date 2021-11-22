let todasNoticias = []
 
document.querySelector("#tituloNoticias").style = "display: none"

//recebe a noticia no campo de texto.
const cadastrarNoticia = function(){
    if(noticia.value == "") return alert('Digite uma notícia')
    todasNoticias.push(noticia.value)
    document.querySelector("#qtdNoticias").innerHTML = todasNoticias.length
    document.querySelector("#tituloNoticias").style = "display: block"
    noticia.value = ""
    document.querySelector("#noticia").focus()
}

// checa se existe noticias cadastradas.
const mostrarNoticias = function(valor){
    if(valor != true) {
        if(todasNoticias.length == 0) return alert('Não existem notícias cadastradas.')
    }   

// mostra a noticia no site     
    document.querySelector("#tituloNoticias").style = "display: none"
    document.querySelector("#mostrarNoticias").innerHTML = ``
    todasNoticias.forEach(function(texto, numero){
        if(texto != "") {
            
            document.querySelector("#mostrarNoticias").innerHTML += `
            <article class="message is-light"><div class="message-header"><h1>${numero+1}ª Notícia</h1></div><div class="message-body">${texto}</div></article>`
        }
    })
}

// checa se existem noticias a serem deletadas
const deletarNoticias = function(){
    if(todasNoticias.length == 0) return alert('Não existem notícias para deletar.')
    document.querySelector("#tituloNoticias").style = "display: none"
    document.querySelector("#mostrarNoticias").innerHTML = ``
     while(todasNoticias.length > 0){
         todasNoticias.splice(todasNoticias.lenght, 1)
    }
}

// deleta as noticias 
const deletarUma = function(msg){
    todasNoticias.splice(msg-1, 1);
    mostrarNoticias(true)
}


btnCadastrarNoticia.addEventListener('click', cadastrarNoticia)

btnMostrar.addEventListener('click', mostrarNoticias)

btnDeletar.addEventListener('click', deletarNoticias)



