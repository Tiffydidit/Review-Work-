


var bills = ["images/hundred.jpg", "images/fifty.png", "images/twenty.jpg",
 "images/ten.png", "images/five.png", "images/dollar.png"];

var img = document.createElement("IMG");

function myMoneyBack(n, price = 4){
	let n = Number(document.getElementById("n").value);
	let myChange = 0.00;
	myChange = n - price;
	let i = 0;
	
	while (myChange >= 100){
		myChange -= 100;
		img.setAttribute("src", (bills[i]));
	}
	i++;

	while (myChange >= 50){ 
		myChange -= 50; 
		img.setAttribute("src", (bills[i]));
	}  
	i++;

	while (myChange >= 20){
		myChange -= 20;
		img.setAttribute("src", (bills[i]));
	}
	i++;

	while (myChange >= 10){
		myChange -= 10;
		img.setAttribute("src", (bills[i]));
	} 
	i++;

	while (myChange >= 5){
		myChange -= 5;
		img.setAttribute("src", (bills[i]));
	} 
	i++;

	while (myChange >= 1){
		myChange -= 1;
		img.setAttribute("src", (bills[i]));
	}
	i++; 

	while (myChange >= .25){
		myChange -= .25;
		img.setAttribute("src", (bills[i]));
	} 
	i++;

	while (myChange >= .10){
		myChange -= .10;
		img.setAttribute("src", (bills[i]));
	} 
	i++;

	while (myChange >= .05){
		myChange -= .05;
		img.setAttribute("src", (bills[i]));
	} 
	i++;

	while (myChange >= .01){
		myChange -= .01;
		img.setAttribute("src", (bills[i]));
	}
	
}