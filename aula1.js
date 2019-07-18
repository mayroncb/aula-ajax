// Aula - 1
// JavaScript != Java
// W3C -- Padrões WEB
// ECMAScript = ES = JS
// ES2015 = ES6

var nome = "Edir"; // string
var idade = 21; // number - integer
var peso = 67.8; // number - float
var acordado = true; // boolean
var valor = "21";


//alert("Olá " + nome + "!");

console.log("Olá " + nome + "!");

if ( 2 == true ) 
{
	console.log("Verdade");
} else 
{
	console.log("Falso");
}


// i = i + 1;
// i += 1;
// i++;

for (var i = 0; i < 10; i++)
{
	console.log("numero: " + i);
}


// Funções 
// E -> P -> S

function soma(n1, n2)
{
    var res = n1 + n2;
    
    return res;

}


var x = soma(2, 5);

console.log(x)


function info()
{
	window.print();
}

function carregar()
{

	window.location.href = "http://www.uol.com.br";

}













