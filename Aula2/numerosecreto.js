var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 1 e 1000');

    if(chute == numeroSecreto) {
        alert('Você acertou, parabéns!')
    }else if(chute > numeroSecreto) {
        alert('Você errou, tente um número menor!')
    }else if(chute < numeroSecreto) {
        alert('Você errou, tente um número maior!')
    }    
}
