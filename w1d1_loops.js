// LOOPS

// How would we find the average of 5 of ten numbers without declaring ten variables? 

//USE A LOOP!!!

// let Array = [1, 12, 18, 4, 9, 6, 19, 9, 6, 30]; //Put the values in an array.

// let sum = 0; //create a variable that will hold all the information the loop has iterated through. 
// //^^^(THIS IS IMPORTANT!)

// for(let i = 0; i < 5; i++){ //create a loop the iterates through the array up to the fifth number.

//    sum += Array[i];// instruct the variable to add the data with each iteration. 
//   console.log(sum);
// }

// let average = sum / 5;
// console.log("average: ")
// console.log(average);

for(let i = 10; i > 0; i--){
	// console.log(i);

}


/********************************1.3 pgs 25-29, unit HW of 1.3******************************************/





//  1.3 pgs 25-29, unit HW of 1.3

//output: 1) 1, 3, 5, 7, 9 

/* We create a for loop that starts at 1 and give it an exit condition of < ten, as we want to
capture all numbers btwn 1-9. We use a conditonal statement to instruct the loop to display each 
odd value of i, and a space (this is for appearance), then iterate.  Finally at the end of the 
for loop we log another space to seperate output 1 and 2.*/ 

for (let i = 1; i < 10; i++){ 
	if (i % 2 !== 0){
		console.log(i);
		console.log('');

	} 
}console.log(''); 


//output: 2) 2, 4, 6, 8, 10

//We create a for loop that starts at 1.
//We set an exit condition to 10/less than or equal to 10 as we want to capture all #'s btwn 1 -10 including 10.
//using a conditional, we instruct the for loop to display values of i that are divisble by 2, and a space, then iterate.  

for(let i = 1; i <= 10; i++){  						  
	if (i % 2 === 0){ 		 
		console.log(i);
		console.log('');
	}
}console.log('');


//create a loop that outputs multiples of 3. starting at 6. ending at 60.


let n = 6;

while (n <= 60){
	console.log(n);
	n = n + 3;
}console.log(''); 

/* Write a for loop that outputs the following output: 
#
##
###
####
#####
######
#######
########*/

/* In Nando's code: We set our variable "i" to 1 and instruct the loop to run for as long as "i" is < 7. 
(though to get the desired output (pictured above) "i" would actually have to be 7 inclusive/ <=7).

We then set another variable, "word", to equal one "#", then console log word; because our loop advances 
word by one "#" before "i" ever iterates. 

When the loop starts "word" equals "##", because we instruct the loop to add a "#" to "word" when "i" < 7 and 1, 
is infact, less than 7.

When "i" is two, "word" is "###" and it goes on until we hit 6, wherein "word" equals "#######" or 7 hashes */

let h = 1;
let k = '';

while (h <= 8 ){
	k = k + '#';
	console.log(k);
	h++;
} console.log(''); 



//MY SOLUTION

/*Nando's code helped me figure out how to iterate a symbol (++ only works on numbers, duh). 

However, I found it confusing, so I set my variable w/ a numerical value, "h", to 1; 
then, set my variable w/ a string value, "k", to an empty string.

Now, before "h" iterates or while "h" is 1 - "k" is equal to one hash or '#'. 

I used a while loop, which essentially tells my loop to iterate "h", while "h" being less than or equal to 8, is true.

So as "h" iterates by 1, from 1 - 8, so does "k": 

h = 1: add '#' to "k" display "k": '#', increase h by 1; 

h= 2: add '#' to "k" display "k": '##', increase h by 1;

 until finally h = 8: add '#' to "k"  display "k": '########', break loop. 
*/



//Using the remainder % operator, write a for loop that iterates between 0 and 10 and prints all even numbers.

for(let i = 0; i <= 10; i++){
	if(i % 2 === 0){
		console.log(i);
	}
}console.log('');

//Write a for loop that iterates from 1- 20. Prints “prime” for all prime numbers, 
//“even” for all even numbers, and “odd” for all odd numbers.[Treat 2 as an even number and 1 & 3 as odd]

for(let i = 1; i <= 20; i++){ //create a for loop that runs for as long as i is less than or equal to 20.
	if ((i % 3 === 0) || (i === 1)){// set a condition inside the loop that displays "odd" for all iterations of "i" that are--  
		console.log('odd');//--divisble by 3 or are the number 1 (1 is not being treated as prime).
	} else if (i % 2 === 0){ // set another condition that displays "even" for all iterations of "i" that are divisible by 2.
		console.log('even');
	} else {
		console.log('prime');//in all other cases display "prime".
	}
}console.log('');

//Write a for loop that iterates from 1- 20. Prints “prime” for all prime numbers, 
//“even” for all even numbers, and “odd” for all odd numbers.

for(let i = 1; i <= 20; i++){//create a for loop that runs for as long as i is less than or equal to 20.
	if ((i % 2 === 0) && (i !== 2)){//set a condition that displays "even" for all iterations of "i"--
		console.log('even');//--that are divisible by 2 and not 2. 
	} else if ((i % 3 === 0) && (i !== 3)){//set a condition that displays "odd" for for all iterations of "i"-- 
		console.log('odd');//--that are divisible by 3 and not 3. 
	} else {
		console.log('prime');//in all other cases display "prime".
	}
}console.log('');



































