
var evento = [];

function muda()
{
    var letreiro = document.getElementById("letreiro");

    var texto = letreiro.innerHTML;
    var letra = texto.charAt(0);

    texto += letra;

    letreiro.innerHTML = texto.substr(1);
}

function liga()
{
    // callback -> função que responde a um evento.
    evento.push(setInterval(muda, 200));
}

function desliga()
{
    evento.forEach(function(val, idx){
        clearInterval(val);
    });
}

console.log("liga");
liga();