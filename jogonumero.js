// anima o css de 9 em 9 seg com o animateCSS
setInterval(()=> {
  animateCSS('#apostar', 'heartBeat');
  animateCSS('.fa-heartbeat', 'swing');
  animateCSS('.fa-exclamation-circle', 'bounce');
  animateCSS('.fa-concierge-bell', 'wobble');
},9000)

//-------------------------------------------------

var erros = [];
let sorteado = parseInt(Math.random()*60+1)
const CHANCES = 6;
let Dica = document.getElementById("saidaDica");
let Erros = document.getElementById("saidaErro");
let Chances = document.getElementById("saidaChance");
let btnApostar = document.getElementById("apostar");
btnApostar.addEventListener("click", apostarNumero);


function apostarNumero() {
let inNumero = document.getElementById("Entnumero");
let numero = Number(inNumero.value);  

if (numero <= 0 || numero > 60 || isNaN(numero)) {
  alert("Por favor informe um número válido");
  inNumero.focus();
  return;
}

if (numero == sorteado) {
  alert("Parabéns você acertou");    
  Dica.innerHTML = "Parabéns o número sorteado foi: " + sorteado;

}else {      

  if (erros.indexOf(numero) >= 0) {
    alert("Você já apostou esse número " + numero + ". tente outro");    
  
  } else {
    erros.push(numero);            
    let numErros = erros.length;  
    let numChances = CHANCES - numErros;       
    Erros.innerHTML = numErros + " (" + erros.join(",") + ")";
    Chances.innerHTML = numChances;
    
    if (numChances == 0) {
      alert("Suas chances acabaram");             
      Dica.innerHTML = "Você perdeu o número sorteado foi: " + sorteado;
    
  } else {        
      let dica = numero < sorteado ? "maior" : "menor";
      Dica.innerHTML = " Dica: tente um número " + dica + " que " + numero;
    }
  }
}
inNumero.value = "";
inNumero.focus();
}



