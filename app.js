//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let texto = document.querySelector('p');
//texto.innerHTML = 'Escolha um número de 0 a 10'
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;

//função texto na tela
function textosNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
  }

mensagemInicial()

function mensagemInicial() {
    textosNaTela('h1','Jogo do Número Secreto');
    textosNaTela('p','Escolha um número de 0 a 10');
}

//funções com booleano
function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        textosNaTela('h1','Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`
        textosNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute
        ('disabled');
    } else {
        if (chute > numeroSecreto){
            textosNaTela('p',`Você errou, o número secreto é menor que ${chute}!`);
        } else {
        textosNaTela('p',`Você errou, o número secreto é maior que ${chute}!`);
        }
    } tentativas++;
    limparCampo();
}

//funções com retorno
function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    }

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//funcão reiniciar jogo

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('Disabled',true);
}