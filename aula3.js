//Aula3.js

function pesquisar()
{
	var input = document.getElementById("texto");
	var div = document.getElementById("conteudo");

	var texto = input.value.toLowerCase();
	var conteudo = div.innerHTML.toLowerCase();

	var sub = '<span class="amarelo">'+ texto +'</span>';

	var novo = conteudo.replace(texto, sub);	

	div.innerHTML = novo;
}

