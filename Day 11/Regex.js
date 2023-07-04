const regex=/Catholic/g;
const str1="Nory was a Catholic because her mother was a Catholic, and Nory's mother was a Catholic because her father was a Catholic."
document.write(str1);
document.write("<hr/><br/>",str1.replace(regex,"Hindu"));



var regex1=/nory/i;
var output=regex1.exec(str1);
document.write("<br/>",output);
console.log(output);

//test()method
var matchcase=regex1.test(str1);
document.write("<br/>",matchcase);



let txt="WHAT what what what this this this!!!";
let result=txt.match(/[what]/g);
document.write("<br/>",result);

