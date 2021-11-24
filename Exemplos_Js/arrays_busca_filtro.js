//filtro se quiser filtrar o array usuario pela senha @12456
let filterSenha = usuarios.filter(function(usuario){
    return usuario.senha === "@12456"
})

console.log("filterSenha @12456", filterSenha[0])

//filtro se quiser filtrar o array usuario pelo nome "Vera"
let filterNome = usuarios.filter(function(usuario){
    return usuario.nome === "Vera"
})

console.log("filterNome Vera", filterNome[0])

/**
 * Encontrar um nome no array usuarios
 */
const encontrarNome = function(){
    //verifica se o valor esta preenchido
    if(valor.value === ""){
        alert("Preencha um nome!")
        return 
    }   
    //filtro verificando se existe esse nome (tela) de usuario no array usuarios
    let encontrado = usuarios.filter(function(usuario){
        return usuario.nome.toLocaleLowerCase() === valor.value.toLocaleLowerCase()
    })
    //se o array encontrado tiver tamanho 0 o sistema mostra Nome não encontrado
    if(encontrado.length === 0){
        alert("Nome não econtrado")
    }else{//se encontrar algum valor ele vai mostrar a posicão 0 ${encontrado[0]}
        alert(`Nome: ${encontrado[0].nome} \nLogin: ${encontrado[0].login} \nSenha: ${encontrado[0].senha}`)
    }
}

/**
 * Encontrar um login ou senha ou nome no array de usuarios
 */
 const filtrarDadosUsuario = function(){
    //verifica se o valor nao esta preenchido
    if(valor.value === ""){
        //listar todos os usuario na TR
        mostrarTodosUsuarioTr()
    }   
    //filtrar os usuario por login ou nome ou senha de acordo com o texto digitado no campo
    let arrUsuariosEncontrados = usuarios.filter(function(usuario){
        return  usuario.login.includes(valor.value.toLocaleLowerCase()) 
                || usuario.nome.includes(valor.value) 
                || usuario.senha.includes(valor.value.toLocaleLowerCase()) 
    })
    //se o array encontrado tiver tamanho 0 o sistema uma tr com registro nao encontrado
    if(arrUsuariosEncontrados.length === 0){
        //tbody id=dadosUsuario e insere o html com a informação abaixo
        dadosUsuario.innerHTML = `
        <tr>
            <td colspan="4"> - NENHUM REGISTRO ENCONTRADO -  </td>
        </tr>
        `
    }else{
        //mostrar os dados filtrados na TR
        mostrarUsuarioFiltradoTr(arrUsuariosEncontrados)
    }
 }

 /**
  * Recebe como parametro o array filtrado
  * @param {array} dadoFiltrado 
  */
const mostrarUsuarioFiltradoTr = function(dadoFiltrado){
    let mostrarTrTela = ""
    //iterar o array filtrado montando um HTML de tr e td com os dados filtrados
    dadoFiltrado.forEach(function(usuario){
        mostrarTrTela += `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.login}</td>
            <td>${usuario.senha}</td>
        </tr>
        `
    })
    //tbody id=dadosUsuario e insere o html montado acima
    dadosUsuario.innerHTML = mostrarTrTela
}

/**
 * Lista todos os usuarios do array usuarios 
 */
const mostrarTodosUsuarioTr = function(){
    let mostrarTrTela = ""
    //iterar o array usuarios montando um HTML de tr e td com os todos os dados
    usuarios.forEach(function(usuario){
        mostrarTrTela += `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.login}</td>
            <td>${usuario.senha}</td>
        </tr>
        `
    })
    //tbody id=dadosUsuario e insere o html montado acima
    dadosUsuario.innerHTML = mostrarTrTela
}

//pegar o valor do campo na tela quando for retirado o foco do campo
//valor.onblur = filtrarDadosUsuario

//poderia usar um evento onkeyup para fazer quando o usuario estiver digitando
valor.onkeyup = filtrarDadosUsuario

//iniciando os dados da tabela
mostrarTodosUsuarioTr()