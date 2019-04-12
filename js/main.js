


var bills = ["images/hundred.jpg", "images/fifty.png", "images/twenty.jpg",
 "images/ten.png", "images/five.png", "images/dollar.png"];

var img = document.createElement("img");

let num = Number(document.getElementById("n").value);

//document.getElementById("doll").innerHTML = `<img id=\"doll\" src = #{bills[1]}>`
//document.getElementById("doll").setAttribute( "src", "images/five.png");

//img.setAttribute("src", bills[0]);
//document.getElementById("pics").appendChild(img);

function myMoneyBack( price = 4){
	let myChange = 0.00;
	 num = Number(document.getElementById("n").value);

	myChange = num - price;
	//let i = 0;
	
	while (myChange >= 100){
		myChange -= 100;
		img.setAttribute("src", bills[0]);
		document.getElementById("pics").appendChild(img);
	}
	

	while (myChange >= 50){ 
		i = 1;
		myChange -= 50; 
		img.setAttribute("src", (bills[1]));
	}  
	

	while (myChange >= 20){
		i = 2;
		myChange -= 20;
		img.setAttribute("src", (bills[2]));
	}
	

	while (myChange >= 10){
		i = 3;
		myChange -= 10;
		img.setAttribute("src", (bills[3]));
	} 
	

	while (myChange >= 5){
		i = 4;
		myChange -= 5;
		img.setAttribute("src", (bills[4]));
	} 
	

	while (myChange >= 1){
		i = 5;
		myChange -= 1;
		img.setAttribute("src", (bills[5]));
	}
	

	while (myChange >= .25){
		i = 6;
		myChange -= .25;
		img.setAttribute("src", (bills[6]));
	} 
	

	while (myChange >= .10){
		i = 7;
		myChange -= .10;
		img.setAttribute("src", (bills[7]));
	} 
	

	while (myChange >= .05){
		i = 8;
		myChange -= .05;
		img.setAttribute("src", (bills[8]));
	} 
	

	while (myChange >= .01){
		i = 9;
		myChange -= .01;
		img.setAttribute("src", (bills[9]));
	}
	
}