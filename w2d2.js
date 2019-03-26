// function myMoneyBack(paid, price){
// 	let myChange = 0.00;
// 	myChange = paid - price;
// 	let counter = 0;

// 	while (myChange >= 100){
// 		myChange -= 100;
// 		counter++;
// 	} if (counter === 1){
// 		console.log(counter + ": hundred");
// 	} else {
// 		console.log(counter + ": hundreds");
// 	}
// 	counter = 0;

// 	while (myChange >= 50){//Each while loop is it's own universe, they change the values of the globally declared variables, 
// 		myChange -= 50;//but do no intefer with each other. 
// 		counter++;//With each bill dispensed we subtract it from myChange and count it w/ our counter. 
// 	} if (counter === 1){//Outside of the loop we display the final value of counter. 
// 		console.log(counter + ": fifty");//we use if else statements to ensure grammatically correct declarations of change. 
// 	} else { 
// 		console.log(counter + ": fifties")
// 	} 
// 	counter = 0;//We reset the counter to zero, so we can reuse it for subsequent denominations and repeat.
// 	//Else we'd need a different counter for every denomination of bills and the coins.  

// 	while (myChange >= 20){
// 		myChange -= 20;
// 		counter++;	
// 	} if (counter === 1){
// 	 	console.log(counter + ": twenty");
// 	} else {
// 		console.log(counter + ": twenties");
// 	}
// 	counter = 0;

// 	while (myChange >= 10){
// 		myChange -= 10;
// 		counter++;
// 	} if (counter === 1){
// 		console.log(counter + ": ten");
// 	} else { 
// 		console.log(counter + ": tens");
// 	}
// 	counter = 0;

// 	while (myChange >= 5){
// 		myChange -= 5;
// 		counter++;
// 	} if ((counter > 1)|| (counter === 0)){
// 		console.log(counter + ": fives");
// 	} else { 
// 		console.log(counter + ": five");
// 	}
// 	counter = 0;

// 	while (myChange >= 1){
// 		myChange -= 1;
// 		counter++;
// 	} if ((counter > 1)|| (counter === 0)){
// 		console.log(counter +": dollars");
// 	} else {
// 		console.log(counter +": dollar");
// 	}
// 	counter = 0; 

// 	while (myChange >= .25){
// 		myChange -= .25;
// 		counter++
// 	} if ((counter > 1)|| (counter === 0)){
// 		console.log(counter + ": quarters");
// 	} else { 
// 		console.log(counter + ": quarter");
// 	}
// 	counter = 0;

// 	while (myChange >= .10){
// 		myChange -= .10;
// 		counter++;
// 	} if ((counter > 1)|| (counter === 0)){
// 		console.log(counter + ": dimes");
// 	} else {
// 		console.log(counter + ": dime");
// 	}
// 	counter = 0;

// 	while (myChange >= .05){
// 		myChange -= .05;
// 		counter++;
// 	} if ((counter > 1) || (counter === 0)){
// 		console.log(counter + ": nickels");
// 	} else {
// 		console.log(counter + ": nickel");
// 	}
// 	counter = 0;

// 	while (myChange >= .01){
// 		myChange -= .01;
// 		counter++
// 	} if ((counter > 1) || (counter === 0)){
// 		console.log(counter + ": pennies");
// 	} else {
// 		console.log(counter + ": penny");
// 	}
// }

// myMoneyBack(200, 100.30);
// console.log(' ');



const bill = 172.93;//amount of money given
const cost = 4.01;//cost of item
let change = bill - cost;//change we expect back

let currency = [50.00, 20.00, 10.00, 5.00, 1.00, .25, .10, .05, .01];//array of denominations of money

let amtOfCur = [];//empty array that will hold the counted denominations

for(i = 0; i <= currency.length; i++){//parent loop that loops through the currency array
	let denomination = currency[i];//denomination is equal to currency at each index of i.
	let counter = 0;//counter that keeps track of denominations.

	while(change >= denomination){//when this reads false we break the child loop and jump back into the parent loop
		change -= denomination;
		counter++;
	}
	amtOfCur[i] = counter;//we push the final value of counter into our empty array. 

}
console.log(amtOfCur);

for (i = 0; i <=currency.length; i++) {
	console.log(`${amtOfCur[i]} ${currency[i]}'s`);
}









