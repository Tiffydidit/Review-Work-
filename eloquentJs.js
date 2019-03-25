//This is js from c01 in eloquent js and works in conjuction with the index.html they provided

//For index.html see "js workbook" folder on destop. 


// var today = new Date();//we assign the variable "today" to a js method that will retrieve the date. 
// var hourNow = today.getHours();//we assign the variable "hourNow" to a js method that will retrieve the time. 
// var greeting;//we declare the variable "greeting", globally. 

// if (hourNow > 18) {//we use conditionals to display a specific greeting based on the time of day
// greeting = 'Good evening!';
// } else if (hourNow > 12) {
// greeting = 'Good afternoon!';
// } else if (hourNow > 0) {
// greeting = 'Good morning!';
// } else {
// greeting = 'Welcome!';
// }
// document.write( ' <h3>' + greeting + ' </h3> ');//we instruct the greeting to display in the document as an h3

/*In the index.html we've placed the script tags where we want the message to display; however,
we could create an empty h3 in the html, give it an id, then in the js document.getElementById('idhere').document.write(greeting);
we could also let hThree = document.getElementById('idhere'); then, hThree.document.write(greeting); 
allowing the script tags to be at the bottom of the html.*/



let i = 0;// create our iterator/ counter and set it to zero. 

let hash = '# ' + '# ' + '# ' + '#';//delcare a variable and assign it the hashes we want to display
while(i < 8){//create a loop that runs while i being < 8 is true. We don't have to 8 inclusive to get 8 rows b/c i starts at zero. 
	if(i % 2 === 0){//add conditions in our loop block that add spaces to the front or back of the string based on the value of i.
		console.log(' ' + hash);//when i is even we get a space in front.
	} else {
		console.log(hash + ' ');//when i is odd we get a space in back. 
	}
	i++;//add one to i. 
}

/*i starts at 0, 0 is less than 8 so we check to see if zero is divisble by 2; it is, so we
 display has with a space in front and add 1 to i. Now, i is 1. 1 is less than 8, but not divisble by 2
 so we display hash with a space behind it and continue until we reach 8. 8 is the last value of i, 
 however, since it is not less that 8 the loop breaks. 
*/