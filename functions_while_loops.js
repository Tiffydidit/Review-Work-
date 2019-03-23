// ❑Use when you need to run the same code as long as a condition is true
// ❑Let’s write a while loop to count down to 0❑Starting anywhere between 5 and 10
// ❑What would be condition for count down that needs to be true?
// ➢number greater than 10?
// ➢Number less than 10?
// ➢Number greater than 0?
// ➢What do you think? 

let i = 9;

while (i >= 0){
	console.log(i)
	i--;
}console.log(' '); // this is just a space. 

// // Keep printing integers multiples of 3 as long as integers are less than 35

let k = 1;
while (k < 35){
	if(k % 3 === 0){
		console.log(k);
	} 
	k++;
	
}console.log(' ');

// //Keep printing integers multiples of 5 as long as integers are less than 100

let q = 1;
while(q < 100){
	if(q % 5 === 0){
		console.log(q);
	}
	q++;
}console.log(' ');

// //Using a while loop printintegersbetween 0 and 20. 
// //All numbers divisible by 2 should be multiplied by 3 before they are output. 
// //All other integers should not be output. 

let j = 1;
while(j < 20){
	if(j % 2 === 0){
		console.log(j * 3);
	}
	j++;

}console.log(' ');

//Using a while loop, print out all prime numbers between 0 - 20.

let p = 1;

while (p < 20){
	if ((p % 2 !== 0) && (p % 3 !==0) || (p === 2) || (p === 3) ){
		console.log(p)
	}
	p++;
}console.log(' ');


// Nando went to the vending machine to buy himself a cookie. The cookie costs $4 dollars. 
// He paid with a $10 bill, the vending machine paid him back in quarters. 
// Write a loop that says how many quarters he got in return.


//Create a function that takes in the bill paid & the cost of the item as parameters.
function moneyBack(bill, cost){//That way we can reuse this code w/ any numbers we wish.
	let change = (bill - cost) / .25; //(this makes our change quarters) 
	let c = 0; //We assign the expression above to a variable that we can use as a boolean check in our while loop.
	while( change > 0 ){//We declare and assign c (our counter) to zero, then create the loop.
		change--;//While change being greater zero is true - decrement change by one and add one to the counter.
		c++;	
	}
console.log(c + " Quarters"); //display the final value of c (the counter) concatenated with the a string that reads: Quarters. 
}
moneyBack(10, 4);//Here we are calling our function and passing it the arguments specified in the word problem. 
console.log(' ');

// ❑Write a function that adds three numbers in ES5
// ❑Write a function that adds three number and divide the result by 3 in ES5
// Now Try converting the code to arrow functions.

function addNum(a, b, c){
	var addition = a + b + c;
	console.log(addition);
	console.log(' ');
}
addNum(6, 2, 4);

function divNum(a, b, c){
	var divide = (a + b + c) / 3;
	console.log(divide);
	console.log(' ');
}
divNum(.33, 21, 66);

let addNumber = (a, b, c) => a + b + c;
console.log(addNumber(7, 14, 55));
console.log(' ');

let divNumber = (a, b, c) => (a + b + c) / 3;
console.log(divNumber(3, 6, 15));
console.log(' ');


// Nando went to Uniqlo and bought himself a nice plaid shirt for $27.83. 
// He paid with $100 as he had no change. 
// The cashier paid in large denominations since they needed change for the other customers.

// Write a loop that prints out how many bills he received in return in as large denominations as possible. 



function myMoneyBack(paid, price){
	let myChange = paid - price;
	let counter = 0;

	while (myChange >= 100){
		myChange -= 100;
		counter++;
	} if (counter === 1){
		console.log(counter + ": hundred");
	} else {
		console.log(counter + ": hundreds");
	}
	counter = 0;

	while (myChange >= 50){//Each while loop is it's own universe, they change the values of the globally declared variables, 
		myChange -= 50;//but do no intefer with each other. 
		counter++;//With each bill dispensed we subtract it from myChange and count it w/ our counter. 
	} if (counter === 1){//Outside of the loop we display the final value of counter. 
		console.log(counter + ": fifty");//we use if else statements to ensure grammatically correct declarations of change. 
	} else { 
		console.log(counter + ": fifties")
	} 
	counter = 0;//We reset the counter to zero, so we can reuse it for subsequent denominations and repeat.
	//Else we'd need a different counter for every denomination of bills and the coins.  

	while (myChange >= 20){
		myChange -= 20;
		counter++;	
	} if (counter === 1){
	 	console.log(counter + ": twenty");
	} else {
		console.log(counter + ": twenties");
	}
	counter = 0;

	while (myChange >= 10){
		myChange -= 10;
		counter++;
	} if (counter === 1){
		console.log(counter + ": ten");
	} else { 
		console.log(counter + ": tens");
	}
	counter = 0;

	while (myChange >= 5){
		myChange -= 5;
		counter++;
	} if ((counter > 1)|| (counter === 0)){
		console.log(counter + ": fives");
	} else { 
		console.log(counter + ": five");
	}
	counter = 0;

	while (myChange >= 1){
		myChange -= 1;
		counter++;
	} if ((counter > 1)|| (counter === 0)){
		console.log(counter +": dollars");
	} else {
		console.log(counter +": dollar");
	}
	counter = 0; 

	while (myChange >= .25){
		myChange -= .25;
		counter++
	} if ((counter > 1)|| (counter === 0)){
		console.log(counter + ": quarters");
	} else { 
		console.log(counter + ": quarter");
	}
	counter = 0;

	while (myChange >= .10){
		myChange -= .10;
		counter++;
	} if ((counter > 1)|| (counter === 0)){
		console.log(counter + ": dimes");
	} else {
		console.log(counter + ": dime");
	}
	counter = 0;

	while (myChange >= .05){
		myChange -= .05;
		counter++;
	} if ((counter > 1) || (counter === 0)){
		console.log(counter + ": nickels");
	} else {
		console.log(counter + ": nickel");
	}
	counter = 0;

	while (myChange > .01){
		myChange -= .01;
		counter++
	} if ((counter > 1) || (counter === 0)){
		console.log(counter + ": pennies");
	} else {
		console.log(counter + ": penny");
	}
}

myMoneyBack(200, 136.15);
console.log(' ');

// It appears that when the coins in price are an even number and myChange is set to > .01 - the pennies are correct BUT
//When the coins in price are odd, the pennies are off by one, unlessmyChange is set to > 0. Hinky...


 // Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. 
 // For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
 // When you have that working, modify your program to print "FizzBuzz", 
 // for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).


let z = 1;
while (z <= 100){
	if ((z % 5 === 0) && (z % 3 !== 0)) {
		console.log(z + " Fizz");
	} else if ((z % 3 === 0) && (z % 5 !== 0)){
		console.log(z + " Buzz");
	} else {
		console.log(z);
	}
	z++;
} console.log(' ');



let f = 1;

while (f <= 100){
	if(f % 15 === 0){
		console.log( f + " FizzBuzz");
	} else if (f % 5 === 0 ){
		console.log(f + " Fizz");
	} else if (f % 3 === 0){
		console.log(f + " Buzz");
	} else {
		console.log(f);
	}
	f++;
}































