
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