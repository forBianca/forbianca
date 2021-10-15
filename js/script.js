
// var cards = document.getElementById('Principal_main');

var verde = document.getElementById('verde'); 
// var img_verde = document.getElementById('img_verde');

var vermelho = document.getElementById('vermelho');
// var img_vermelho = document.getElementById('img_vermelho');

var roxo = document.getElementById('roxo');
// var img_roxo = document.getElementById('img_roxo');

var preto = document.getElementById('preto');
// var img_preto = document.getElementById('img_preto');

var branco = document.getElementById('branco');
// var img_branco = document.getElementById('img_branco');


const text = document.querySelector('.titulo-principal');

function typeWrite(elemento){
  const textoArray = elemento.textContent.split('');
  elemento.textContent = ' ';
  textoArray.forEach(function(letra, i){   
    
  setTimeout(function(){
      elemento.textContent += letra;
  }, 75 * i)

});
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

