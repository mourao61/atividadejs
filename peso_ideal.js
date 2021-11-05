btnCalcular.addEventListener('click', function () { 
    
    Altura = altura.value
    sexoMasculino

    
    if(sexoMasculino.checked){
       fatorPeso = 22
    } else {
       fatorPeso = 21
    }

    peso = fatorPeso * Math.pow(Altura, 2).toFixed(2)

    
    Peso = document.getElementById('pesoIdeal')
    Peso.innerHTML = `
       
    <p>Seu peso ideal é ${peso} Kg.</p>`
})

