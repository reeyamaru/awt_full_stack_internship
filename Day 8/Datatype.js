//Create an empty generic object
var obj = new Object();
document.write("<br/>"+typeof(obj));
document.write("<br/>"+obj.FirstName+" "+obj.LastName);

//Create a user defined object
var car = {
    model: "BMW X3",
    color: "White",
    doors: 5
}
document.write("<br/>"+car.model+" "+car.color+" "+car.doors);

//Array
var cars = ["BMW", "Mercedes-Benz", "Volkswagen"];
document.write("<br/>"+cars[0]);
document.write("<br/>"+cars[1]);
document.write("<br/>"+cars[2]);
document.write("<br/>"+cars[3]);

//Function datatype
var Demo = function(){
    return "Hello welcome to Javascript!";
}
document.write("<br/>"+typeof(Demo));
document.write("<br/>"+Demo());