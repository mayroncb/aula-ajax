// Trabalhando com nodejs

var fs = require('fs');
var somar = require('./calc');

// ES6
//const { Parser } = require("json2csv");
// ES5
 var json2csv = require("json2csv");



console.log("Funcionou!!");

var json = {
    nome: "Bezerra da Silva",
    idade: 22,
    peso: 88.9,
    cidade: "Cwb"
};

var csv = json2csv.parse(json);


//var texto = "Conteudo para um arquivo.";

fs.writeFile("teste.txt", csv, function(erro){
    if (erro) {
        console.log();
    }

    console.log("Terminou de gravar!");
});

var resultado = somar(13, 4);
console.log(resultado);

console.log("Fim do arquivo!")