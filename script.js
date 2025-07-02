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
    
     let frequencias = {} ;
for(let i of palavras){
    frequencias[i]= 0;
    for (let j of palavras){
        if (i==j){
            frequencias[i]++;
        }
    }
}

console.log(grequencias);
   
return palavras;
}

