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
}

// // Keep printing integers multiples of 3 as long as integers are less than 35

let k = 1;
while (k < 35){
	if(k % 3 === 0){
		console.log(k);
	} 
	k++;
	
}

// //Keep printing integers multiples of 5 as long as integers are less than 100

let q = 1;
while(q < 100){
	if(q % 5 === 0){
		console.log(q);
	}
	q++;
}

// //Using a while loop printintegersbetween 0 and 20. 
// //All numbers divisible by 2 should be multiplied by 3 before they are output. 
// //All other integers should not be output. 

let j = 1;
while(j < 20){
	if(j % 2 === 0){
		console.log(j * 3);
	}
	j++;

}

//Using a while loop, print out all prime numbers between 0 - 20.

let p = 1;

while (p < 20){
	if ((p % 2 !== 0) && (p % 3 !==0) || (p === 2) || (p === 3) ){
		console.log(p)
	}
	p++;
}


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










