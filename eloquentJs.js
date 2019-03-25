//This is js from c01 in eloquent js and works in conjuction with the index.html they provided

//For index.html see "js workbook" folder on destop. 


/*var today = new Date();//we assign the variable "today" to a js method that will retrieve the date. 
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
document.write( ' <h3>' + greeting + ' </h3> ');//we instruct the greeting to display in the document as an h3*/

/*In the index.html we've placed the script tags where we want the message to display; however,
we could create an empty h3 in the html, give it an id, then in the js document.getElementById('idhere').document.write(greeting);
we could also let hThree = document.getElementById('idhere'); then, hThree.document.write(greeting); 
allowing the script tags to be at the bottom of the html.*/



let i = 0;// create our iterator/counter and set it to zero. 

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
 however, since it is not less that 8 the loop breaks. */


 /**********BOOK SOLUTION W/ MY UNDERSTANDING***********/

/*Although I got the right answer, this approach is more dynamic and therefore iteratable, 
as I hardcoded the hashes in my solution above.

I thought to do it this way, at least adding spaces and hashes to an empty string.
I also knew that "something else" would have to instruct line breaks.
I didn't, however, realize that, that "something else" was the result of nested loops.*/ 

let size = 16;// our exit condition b/c all we want, for now, is 8 rows.

let board = "";// empty string to which we will add a space or a # with each iteration of x.

//these nested for loops work together to add hashes & spaces, and line breaks the create the board. 

for (let y = 0; y < size; y++) {//loop that creates y axis. 
  for (let x = 0; x < size; x++) {//loop that creates the x axis
    if ((x + y) % 2 == 0) {//conditions that produce a space or a hash across the x axis of the board.
      board += " "; 
    } else {
      board += "#";
    }
  }
  board += "\n";//last statement of the parent for loop that adds line breaks down the y axis of the board. 
}

console.log(board);//here we display final product. 

/* When the first loop starts, y is equal to zero.
zero is less than 8, so we drop into the first loops code block i.e. the second loop, wherein:
x is equal to zero, and also less than 8, so we drop into the second loops code block i.e. our conditions. 
when x + y is divisble by 2 "even", we add a space to board, else "odd" we add a hash, then add 1 to x.
0 + 0 is technically even so we add " " to board.
our second for loop finishes it's first "loop around" and adds 1 to x: x = 1.

 1 is less than 8, 1 + 0 = 1 which is not divisble by two so we add a # to board. 

 Thus far, board = " #" and x = 1. then we add 1 to x, x = 2.

 2 + 0 = 2 so board = " # " we add 1 to x and x = 3.

 3 + 0 = 3 so board = " # #" and x = 4.

 4 + 0 = 4 board = " # # " x = 5.

 5 + 0 = 5 board = " # # #" x = 6.

 6 + 0 = 6 board = " # # # " x = 7.

 7 + 0 = 7 board = " # # # #" x = 8.

 8 is not less than 8, so the child for loop breaks and we add a line break(LAST STATMENT OF THE PARENT FOR LOOP)
 and add 1 to y. 

 WE ARE NOT ALLOWED TO EXIT THE CHILD LOOP UNTIL x IS 8, 
 I.E. y DOESN'T ITERATE UNTIL x REACHES 8 EVERY TIME THE PARENT LOOP RUNS.


 OUR CONDITIONALS HAVE TO INCLUDE x + y BECAUSE EVERY TIME WE RE-ENTER THE CHILD LOOP, x IS ZERO;
 WITHOUT THE INCLUSION OF y WE'D GET THE SAME PATTERN FOR EACH ROW.

 After the first line break, y = 1 and x is zero again.

 Now the child loop runs from  0 + 1( adding a # in the first position instead of a space) to 7 + 1
 (adding a space to the last position instead of a hash).   

 This repeats (alternating how each line starts based on the sum of x and y) until y is 8, 
 i.e. the parent loop is broken. 

 With the nested approach, the board can be as big or small as we wish, by changing the value of size. 
 The loops, essentially, tell control to create a full row across the x-axis, then add a line break below, with 
 each iteration of the parent loop -- we want x to happen first, then y. */















 










*/


