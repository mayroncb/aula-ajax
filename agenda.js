$(document).ready(function(){
    
    $("#btn-cadastrar").click(function(){
        
        $("input").parent().removeClass("erro");
        $("div.alerta").remove();

        var valido = true;

        $(".input").each(function(idx, el){

            var valor = $(el).val().trim();

            if ( valor == "" )
            {
                var campo = $(el).attr("name");
                exibeErro("O Campo "+ campo + " é obrigatório!");
                $(el).focus();
                $(el).parent().addClass("erro")

                valido = false;
            }
        }); // fim do each

        if ($("[name=sexo]:checked").val() == undefined)
        {
            exibeErro("O Campo Sexo é obrigatório!");
            valido = false;
            $("[name=sexo]").parent().addClass("erro");
        }

        // verifica se o nome é valido
        var nome = $('#nome').val();
        if (nome.match(/^[a-zA-Zéáãê ]+$/gm) == null)
        {
            exibeErro("O valor do nome é inválido!");
            $('#nome').focus();
            $('#nome').parent().addClass("erro")
            valido = false;
        }

        // Valida o telefone
        var telefone = $("#telefone").val();
        if(telefone.match(/^\([0-9]+\)[0-9]{4,5}-[0-9]{4}$/gm) == null)
        {
            exibeErro("O valor do telefone é inválido!");
            $('#telefone').focus();
            $('#telefone').parent().addClass("erro")
            valido = false;
        }

        //Valida o email
        var email = $("#email").val();
        if(email.match(/^[a-z0-9.-]+@[a-z0-9]+.[a-z.]+$/gm) == null)
        {
            exibeErro("O valor do email é inválido!");
            $('#email').focus();
            $('#email').parent().addClass("erro")
            valido = false;
        }

        // Cadastra se estiver tudo ok
        if (valido == true)
        {
            add();
        }

    }); // fim do click

    // Bloqueia o teclado
    $("#telefone").keydown(function(ev){
        
        console.log(ev);

        if (ev.keyCode == 8)
        {
            return true;
        }
        if (ev.keyCode == 37)
        {
            return true;
        }
        if (ev.keyCode == 39)
        {
            return true;
        }
        if (ev.keyCode == 9)
        {
            return true;
        }

        if (ev.key.match(/[0-9-()]/gm) == null)
        {
            return false;
        }
    }); // fim do keydown

    // Pula para o pŕoximo campo
    $("fieldset").keydown(function(ev){
        if (ev.keyCode == 13)
        {
            //
        } 
    });

    // Remove registro da tabela
    
    $("#registros").on("click", ".delete", function(){
        console.log(this);
        $(this).parent().parent().remove();
    });

}); // fim do ready


function add()
{
    /* var sexo = "";
    if ($("[name=sexo]:checked").val() == "M")
    {
        sexo = "Masculino";
    } else 
    {
        sexo = "Feminino";
    } */

    //if ternario
    var sexo = ($("[name=sexo]:checked").val() == "M")? "Masculino" : "Feminino";

    var tr = "<tr>"
                +"<td>"+ $("#nome").val() +"</td>"
                +"<td>"+ $("#email").val() +"</td>"
                +"<td>"+ $("#telefone").val() +"</td>"
                +"<td>"+ sexo +"</td>"
                +'<td> <button class="delete">[X]</button></td>'
            +"</tr>";

    $("#registros").append(tr);

    $(".input").val("");
    $("[name=sexo]").prop("checked", false);
}

// Exibe messagem de erro no form
function exibeErro(msg)
{
    var div = '<div class="alerta">' + msg + '</div>';

    $("fieldset").prepend(div);
}