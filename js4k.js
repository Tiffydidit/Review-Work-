//Array Work/Methods

let arr = ["Tiffany", "Joyel", "Warren", "Soyinka", "Ubu", "Roi",];
let Arr = ["Tiff", "Joy", "War", "inka", "U", "R",];
let aRR = ["fany", "el", "ren", "Soy", "bu", "oi",];

//concatenate arrays
let nu = arr.concat(Arr, aRR);
// console.log(nu);

//find the index of an item in an array
//console.log(arr.indexOf("Tiffany"));


//turn array into a string. 
// nu = arr.join(" ");
// console.log(nu);

let randoNdx = Math.floor(Math.random() * arr.length);

console.log(arr[randoNdx]);

let num = [3, 2, 1];

num = num.join(" + ");

console.log(num);

let person = {
	name: "Indie",
	age: 30,
	job: "heiress",
}

console.log(person);

console.log(Object.keys(person))


let moneyOwed = {};
moneyOwed.Tiff = [5, 76, 788];
moneyOwed.Court = 6;
moneyOwed.Wan = 99;
moneyOwed.Will = 9;

moneyOwed.Will += 80;
console.log(moneyOwed.Will);
console.log(moneyOwed.Tiff[1]);


































































