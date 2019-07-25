$(document).ready(function(){

        $(".btn").click(function(){
            $('#texto').css("background-color", "yellow");
        });

        $("p").mouseenter(function(){
            $(this).css("background-color", "yellow");
        });

        $("p").mouseleave(function(){
            $(this).css("background-color", "white");
        });

        $("p").click(function(){
            $(this).slideUp();
        });

        $("#add").click(function(){
            var texto = $("#palavra").val();

            $('#texto').before("<p>" + texto + "</p>");
            $("<p>" + texto + "</p>").insertBefore('body');
        });
});

