


var bills = ["images/hundred.jpg", "images/fifty.png", "images/twenty.jpg",
 "images/ten.png", "images/five.png", "images/dollar.png"];

//var img = document.createElement("img");

let num = Number(document.getElementById("n").value);
console.log("got the number");
console.log(num);

//document.getElementById("doll").innerHTML = `<img id=\"doll\" src = #{bills[1]}>`
//document.getElementById("doll").setAttribute( "src", "images/five.png");

//img.setAttribute("src", bills[0]);
//document.getElementById("pics").appendChild(img);

function myMoneyBack(num, price = 4){
	let myChange = 0.00;
	 num = Number(document.getElementById("n").value);
	 console.log("in function");
	 console.log(num);

	myChange = num - price;
	
	
	while (myChange >= 100){
		myChange -= 100;
		let image = document.createElement("img");
		image.setAttribute("src", bills[0]);
		document.getElementById("pics").appendChild(image);
		console.log("you got a 100");
		console.log(myChange);
	}
	

	while (myChange >= 50){ 
		
		myChange -= 50; 
		let image = document.createElement("img");
		image.setAttribute("src", (bills[1]));
		document.getElementById("pics").appendChild(image);
		// document.getElementById("pics").appendChild(image);
		console.log("you got a 50");
		console.log(myChange);
		console.log(bills[1]);
	}  
	

	while (myChange >= 20){
		
		myChange -= 20;
		let image = document.createElement("img");
		image.setAttribute("src", (bills[2]));
		document.getElementById("pics").appendChild(image);
		console.log("you got a 20");
		console.log(myChange);
	}
	

	while (myChange >= 10){
		
		myChange -= 10;
		let image = document.createElement("img");
		image.setAttribute("src", (bills[3]));
		document.getElementById("pics").appendChild(image);
		console.log("you got a 10");
		console.log(myChange);
	} 
	

	while (myChange >= 5){
		
		myChange -= 5;
		let image = document.createElement("img");
		image.setAttribute("src", (bills[4]));
		document.getElementById("pics").appendChild(image);
		console.log("you got a 5");
		console.log(myChange);
	} 
	

	while (myChange >= 1){
		
		myChange -= 1;
		let image = document.createElement("img");
		image.setAttribute("src", (bills[5]));
		document.getElementById("pics").appendChild(image);
		console.log("you got a 1");
		console.log(myChange);
	}
	

	while (myChange >= .25){
		
		myChange -= .25;
		let image = document.createElement("img");
		image.setAttribute("src", (bills[6]));
		document.getElementById("pics").appendChild(image);
		console.log("you got a .25");
		console.log(myChange);
	} 
	

	while (myChange >= .10){
	
		myChange -= .10;
		let image = document.createElement("img");
		image.setAttribute("src", (bills[7]));
		document.getElementById("pics").appendChild(image);
		console.log("you got a .10");
		console.log(myChange);
	} 
	

	while (myChange >= .05){
	
		myChange -= .05;
		let image = document.createElement("img");
		img.setAttribute("src", (bills[8]));
		document.getElementById("pics").appendChild(image);
		console.log("you got a .05");
		console.log(myChange);
	} 
	

	while (myChange >= .01){
	
		myChange -= .01;
		let image = document.createElement("img");
		img.setAttribute("src", (bills[9]));
		document.getElementById("pics").appendChild(image);
		console.log("you got a .01");
		console.log(myChange);
	}
	
}