


var bills = ["images/hundred.jpg", "images/fifty.png", "images/twenty.jpg",
 "images/ten.png", "images/five.png", "images/dollar.png"];

var img = document.createElement("IMG");

let num = Number(document.getElementById("n").value);

function myMoneyBack( price = 4){
	let myChange = 0.00;
	myChange = num - price;
	let i = 0;
	
	while (myChange >= 100){
		myChange -= 100;
		img.setAttribute("src", bills[i]);
	}
	

	while (myChange >= 50){ 
		i = 1;
		myChange -= 50; 
		img.setAttribute("src", (bills[i]));
	}  
	

	while (myChange >= 20){
		i = 2;
		myChange -= 20;
		img.setAttribute("src", (bills[i]));
	}
	

	while (myChange >= 10){
		i = 3;
		myChange -= 10;
		img.setAttribute("src", (bills[i]));
	} 
	

	while (myChange >= 5){
		i = 4;
		myChange -= 5;
		img.setAttribute("src", (bills[i]));
	} 
	

	while (myChange >= 1){
		i = 5;
		myChange -= 1;
		img.setAttribute("src", (bills[i]));
	}
	

	while (myChange >= .25){
		i = 6;
		myChange -= .25;
		img.setAttribute("src", (bills[i]));
	} 
	

	while (myChange >= .10){
		i = 7;
		myChange -= .10;
		img.setAttribute("src", (bills[i]));
	} 
	

	while (myChange >= .05){
		i = 8;
		myChange -= .05;
		img.setAttribute("src", (bills[i]));
	} 
	

	while (myChange >= .01){
		i = 9;
		myChange -= .01;
		img.setAttribute("src", (bills[i]));
	}
	
}