function detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    || navigator.userAgent.match(/Mobile/i)
    ){
       return true;
     }
    else {
       return false;
     }
}

var validar = detectar_mobile();

if (validar === true) {
    window.location.href = "http://google.com";
}
else{
    
}





console.log("Você eh incrivel, meu amor");
console.log("Você eh mto gata");
console.log("Você eh mto divertida");
console.log("A melhor vibe eh a de estar cntg meu bem s2");
console.log("Tee amoo <3");

console.log(" ");
console.log(" ");
console.log(" ");

console.log("Não sei como você estara qnd eu te mostrar isso... mas meu objetivo era colocar um sorrisinho na suaa bocaa e quem sabe melhorar seu diaa assim como vc melhora os meus todos os dias, espero ter conseguido meu amor <3");

const porta_e = document.getElementById("porta_esquerda");
const porta_d = document.getElementById("porta_direita");



function EsconderMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
}

function MostrarEsquerda() {
    var esq = document.getElementById("esquerda");
    esq.style.display = "unset";
}

function EsconderEsquerda() {
    var esq = document.getElementById("esquerda");
    esq.style.display = "none";
}


function MostrarDireita() {
    var dire = document.getElementById("direita");
    dire.style.display = "unset";
}

function EsconderDireita() {
    var dire = document.getElementById("direita");
    dire.style.display = "none";
}