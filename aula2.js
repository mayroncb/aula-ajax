//Aula2.js

function mudar()
{

	console.log("clicou");
	
	var div = document.getElementById("texto");
	
	console.log(div);
	
	div.style.color = "red";
	div.style.backgroundColor = "yellow";

}

function mudarTexto()
{
	var div = document.getElementById("texto");
	var input = document.getElementById("valor");

	div.innerHTML = input.value;


}

function maiuscula()
{
	var div = document.getElementById("texto");
	var input = document.getElementById("valor");

	var valor = input.value;
	
	div.innerHTML = valor.toUpperCase();

}

function letra()
{
	var div = document.getElementById("texto");
	var input = document.getElementById("valor");

	
	var valor = input.value;
	var letra = valor.charAt(0);
	var resto = valor.substr(1);
	
	div.innerHTML = letra.toUpperCase() + resto.toLowerCase();

}
