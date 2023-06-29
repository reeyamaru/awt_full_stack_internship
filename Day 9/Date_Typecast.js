document.write("<br/>"+new Date());
document.write("<br/>"+new Date("1970-01-01"));
document.write("<br/>"+new Date(2018, 11, 24, 10, 33, 30, 0));
document.write("<br/>"+new Date("October 13,2014 11:13:00"));
document.write("<hr/>");


var d = new Date();
document.write("<br/>"+d.toString());
document.write("<br/>"+d.tUTCString());
document.write("<br/>"+d.toDateString());
document.write("<br/>"+d.toISOString());
document.write("<hr/>");


document.write("<br/>"+d.getTime());
document.write("<br/>"+d.getDate());
document.write("<br/>"+d.getDay());
document.write("<br/>"+d.getFullYear());
document.write("<br/>"+d.getHours());
document.write("<br/>"+d.getMonth());