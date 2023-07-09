$(document).ready(function(){
    $("#dialog").dialog({
        width: 350,
        height: 120,
        modal: true,
        resizable: true,
        dialogClass: "no-close dialog"
    })

    $("form").submit(function(event){
        const formData={name:$("#name").val()};
        console.log($("#name").val())
        $.ajax({
        type: "POST",
        url: "server.php",
        data: formData
    }).done(function(data){
        console.log(data)
    });
    
    $(this).closest(".ui-dialog-content").dialog("close")
    event.preventDefault();
    })
})