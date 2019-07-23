
var nome = "Mayron";

// E -> P -> S
function oi()
{   
    var nome = "Carlos";
    console.log("oi " + nome);

    function outra()
    {
        console.log("dentro " + nome);
    }

    outra("Maria");
}

oi("Pedro");

//função anônima
var cidade = function (cidade)
{
    console.log("imprimiu: " + cidade);
}

console.log(cidade("Cwb"))

//Orientação a objetos - Equivalecia a Classe
var Pessoa = function()
{
    var nome = "";

    function imprimir(){
        console.log(this.nome);
    }
}

var joao = new Pessoa();

Pessoa.prototype.mostrar = function ()
{
    console.log(this.nome)
}

joao.nome = "Jão";
joao.mostrar();

console.log(joao)

String.prototype.imprimir = function (){
    
    console.log("mexeu na string");
}

 


