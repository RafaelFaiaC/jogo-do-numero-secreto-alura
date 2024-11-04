let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag) // document.querySelector é usado para selecionar o primeiro elemento HTML que corresponde ao seletor CSS especificado;
    campo.innerHTML = texto; // innerHTML é usada para obter ou definir o conteúdo HTML interno de um elemento.
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); //Faz a leitura do primeiro parametro que é passado, é possível atráves do responsivevoice, script importado no index.html.
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

function gerarNumeroAleatorio(){
   return parseInt(Math.random() * 100 + 1); // return devido a necessidade de retornar um valor após a função ser chamada.
}

exibirMensagemInicial();

function verificarChute(){ //function é um bloco de código projetado para executar uma tarefa específica.
    let chute = document.querySelector('input').value; //Pega o valor presente no campo input.
    tentativas++;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        tentativas > 1 ? exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} tentativas!`) : exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} tentativa!`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //remove o atributo disabled do elemento com o id 'reiniciar'. Também podia ser feito usando document.getElementById('reiniciar').disabled = false;
    }
    else if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número é menor!');
        limparCampo();
    }
    else{
        exibirTextoNaTela ('p', 'O número é maior!');
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input'); //Faz o mapeamento o campo input
    chute.value = ''; //Deixa o campo input vazio
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); // também podia ser usado document.getElementById('reiniciar').disabled = true;
}