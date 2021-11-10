function mostrarTabuadaMult() {
   var n1 = Number(numero.value);

  if (n1 == 0 || isNaN(n1)) {
    alert("Informe um número.");
    n1.focus();
    return;
  }
  
  var resposta = "";
  
  for (var i = 1; i <= 10; i++) {   
    resposta += `${n1} x ${i} = ${n1 * i} <br>`;
  }

   mostraTabuada.innerHTML = resposta;
}
btnCalcular.addEventListener("click", mostrarTabuadaMult);