
var nome = new String ("Fabio");
var cidade = "cidade";

var frutas = new Array ("Maça", "Laranja");
var cores = ["azul", "preto", "verde"];

var pessoa = {

    nome: "Mayron",
    idade: 12,
    cidade: cidade,

    imprimir: function(){
        console.log("Nome " + this.nome);
    }
};

pessoa.idade = 29;

console.log(pessoa)

pessoa.imprimir();

//converte Objeto para string
var formato = JSON.stringify(pessoa);
console.log(formato);

//converte uma string no formato json para objeto
var novo = JSON.parse('{"nome":"Mayron","idade":29,"cidade":"cidade"}')
console.log(novo)