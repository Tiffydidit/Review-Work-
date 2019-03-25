//This is js from c01 in eloquent js and works in conjuction with the index.html they provided

//For index.html see "js workbook" folder on destop. 


var today = new Date();//we assign the variable "today" to a js method that will retrieve the date. 
var hourNow = today.getHours();//we assign the variable "hourNow" to a js method that will retrieve the time. 
var greeting;//we declare the variable "greeting", globally. 

if (hourNow > 18) {//we use conditionals to display a specific greeting based on the time of day
greeting = 'Good evening!';
} else if (hourNow > 12) {
greeting = 'Good afternoon!';
} else if (hourNow > 0) {
greeting = 'Good morning!';
} else {
greeting = 'Welcome!';
}
document.write( ' <h3>' + greeting + ' </h3> ');