//Find the value of an input box.
$("input").on("keyup", function() { 
    var value = $(this).val(); 
    $( "p" ).text(value);
})
.trigger( "keyup" );