let a = 9;
let b = 11;
let z = a + b;
console.log(z);

let one = 1; 
let two = 12; 
let three = 18;
let four = 4; 
let five = 9; 
let six = 6; 
let seven = 19;
let eight  = 9; 
let nine = 6; 
let ten = 30;

let Avg = (one + two + three + four + five)/5;

let avg = (six + seven + eight + nine + ten)/5;

console.log(Avg);
console.log(avg);

// How would we find the average of 5 of ten numbers without declaring ten variables? 

// USE A LOOP!!!

let Array = [1, 12, 18, 4, 9, 6, 19, 9, 6, 30]; //Put the values in an array.

let sum = 0; //create a variable that will hold all the information the loop has iterated through. 
//^^^(THIS IS IMPORTANT!)

for(let i = 0; i < 5; i++){ //create a loop the iterates through the array up to the fifth number.

   sum += Array[i];// instruct the variable to add the data with each iteration. 
  console.log(sum);
}

let average = sum / 5;
console.log("average: ");
console.log(average);

console.log("");


















//AVERAGE HOMEWORK:

let numbers = [4, 10, 22, -30, 55]; 

let add = 0;

for(let i = 0; i < 5; i++){
	add += numbers[i];
}

let divide = add / 5;
console.log("HW Average 1: ");
console.log(divide);





let integers = [68, 7, -22, 9, 100];
let equal = 0;

for (let i = 0; i < integers.length; i++){
	equal += integers[i];
}

let Average = equal / integers.length;
console.log("HW Average 2: ");
console.log(Average);


