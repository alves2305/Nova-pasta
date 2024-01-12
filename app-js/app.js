let titulo = document.getElementById('tit') 
titulo.innerHTML = ('Jogo do número secreto')

let numeroSecreto = parseInt(Math.random()*10)
function verificarChute() {
    console.log(numeroSecreto)

    let digiteNumero = document.getElementById('digite-o-numero')
    let numeroValor = Number(digiteNumero.value)
    let resultado = document.getElementById('resultado')
    
    if (numeroValor==numeroSecreto){
        resultado.innerHTML =('Você ganhou !')
    }
    else if (numeroValor>numeroSecreto){
        resultado.innerHTML =('Você errou! o numero secreto é menor')
    }
    else if (numeroValor<numeroSecreto){
        resultado.innerHTML =('Você errou! o numero secreto é maior') }
    
}