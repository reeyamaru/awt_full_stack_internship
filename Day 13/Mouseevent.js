$(document).ready(function(){

    $("#london").mouseenter (function(){ 
        $("#london").css("width","700px"); 
    });
    
    $("#london").mouseleave(function(){ 
        $("#london").css("width","400px");   
    });
});