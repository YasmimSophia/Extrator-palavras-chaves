const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener(" click", mostraPalavraChave);

function mostraPalavraChave(){
const texto = document.querySelector("#resultado-palavrachave") .ariaValueMax;
const campoResultado = document.querySelector("#resultado-palavrachave");
const palavras = processaTexto(texto);

campoResultado.textContent = palavras.join(",")
}

function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/);
    return palavras;
}

