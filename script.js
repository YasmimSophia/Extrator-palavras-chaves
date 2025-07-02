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
    contaFrequencias(palavras);
   const frequencia = contaFrequencias(palavras);
   let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);

   function ordenaPalavra(p1,p2){
    return frequencias[p2]- frequencias[p1];
   }
   
    console.log(ordenadas);
   return ordenadas.slice(0,15);
}

function contaFrequencias(palavras){}
let frequencias = {} ;
for(let i of palavras){
frequencias[i]= 0;
for (let j of palavras){
   if (i==j){
       frequencias[i]++;
   }
}
}
return frequencias;