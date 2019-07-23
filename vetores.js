var cidade = "Curitiba";

var cidades = new Array("Colombo", "Araucaria", "Pinhais", cidade);

cidades.push("Lapa");
cidades.unshift("Terra");

cidades.sort().reverse();

console.log(cidades);

for (var i = 0 ; i < cidades.length; i++)
{
    console.log(cidades[i]);
}

cidades.forEach(function(val, idx){
    console.log("index:"+ idx + " Valor: " + val );
});

