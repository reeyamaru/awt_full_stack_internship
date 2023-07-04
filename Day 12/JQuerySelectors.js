function funct1()
{
   
    $("#div2").css("background-color","blue"); 

    $("#div1, #div3").css("background-color","yellow"); 

    //$(element name).action() 
    
    //JS alternative:-

    //document.getElementByTagName(element name) 
    
    $("#div2").css("background-color","blue"); 
    
    $("div").css("background-color","green"); 
    
    $("#p1").css("font-style', 'italic'");

    //Jquery needs ID to be unique 
    
    //can't change css property of same id 
    
    //alternative way is to use class selectors

    $(".para").css("font-style","italic");

    $("#divi,#div3").css("background-color", "yellow");

    $("#div2,11").css("background-color","red");

    $("div> p").fadeToggle();

    $("div p").fadeToggle(); 
    
    $("p:first").fadeToggle();

    $("p:second").fadeToggle();
    
    //unsupported psuedo elements

    $("11:even").fadeToggle();
    
    //index from @ $("li:odd").fadeToggle();
    
}