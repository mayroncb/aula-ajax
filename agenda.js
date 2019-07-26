$(document).ready(function(){

            $("#btn-cadastrar").click(function(){

                var valido = true;

                $(".input").each(function(idx, el){
                    if ($(el).val() == "" )
                {
                    var campo = $(el).attr("name");
                    alert("O Campo " + campo + " é obrigatório");
                    $(el).focus();

                    valido = false;
                }
            }); // fim do each

            if ($("[name=sexo]:checked").val() == undefined)
            {
                alert("O Campo Sexo é obrigatório.");
                valido = false;
            }
            
            if (valido == true)
            {
                add();
            }
        }); //fim do click

}); // fim do ready

function add (){

    /*var sexo = "";

    if($("[name=sexo]:checked").val() == "M")
    {
        sexo = "Masculino";

    }else
    {
        sexo = "Feminino";
    } */

    var sexo = ($("[name=sexo]:checked").val() == "M")? "Masculino" : "Feminino";

    var tr = "<tr>"
                +"<td>"+ $("#nome").val() +"</td>"
                +"<td>"+ $("#email").val() +"</td>"
                +"<td>"+ $("#telefone").val() +"</td>"
                +"<td>"+ sexo +"</td>"
                +"</tr>";
    $("#registros").append(tr);
    $(".input").val("");
    $("[name=sexo]").prop("checked", false);

}            
