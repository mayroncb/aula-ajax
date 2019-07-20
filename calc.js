//calc.js

function soma()
{
	var n1 = document.getElementById("n1");
	//var n2 = document.getElementById("n2");
	var visor = document.getElementById("visor");

	var res = parseFloat(n1.value) + parseFloat(visor.innerText);
	
	visor.innerText = res;
	n1.value = "";
}

function add(num)
{
	var visor = document.getElementById("visor");
	
	visor.innerText = visor.innerText + num;	
}

function sub()
{

}

function div()
{

}

function mult()
{

}

function percent()
{

}
