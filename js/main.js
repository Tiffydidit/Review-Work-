


var bills = ['<img src="images/hundred.jpg">', '<img src="images/fifty.png">', '<img src="images/twenty.jpg">',
 '<img src="images/ten.png">', '<img src="images/five.png">', '<img src="images/dollar.png">' ];



function myMoneyBack(n, price = 4){
	let n = Number(document.getElementById("n").value);
	let myChange = 0.00;
	myChange = n - price;
	let i = 0;
	
	while (myChange >= 100){
		myChange -= 100;
		document.body.appendChild(bills[i]);
	}
	i++;

	while (myChange >= 50){ 
		myChange -= 50; 
		document.body.appendChild(bills[i]);
	}  
	i++;

	while (myChange >= 20){
		myChange -= 20;
		document.body.appendChild(bills[i]);
	}
	i++;

	while (myChange >= 10){
		myChange -= 10;
		document.body.appendChild(bills[i]);
	} 
	i++;

	while (myChange >= 5){
		myChange -= 5;
		document.body.appendChild(bills[i]);
	} 
	i++;

	while (myChange >= 1){
		myChange -= 1;
		document.body.appendChild(bills[i]);
	}
	i++; 

	while (myChange >= .25){
		myChange -= .25;
		document.body.appendChild(bills[i]);
	} 
	i++;

	while (myChange >= .10){
		myChange -= .10;
		document.body.appendChild(bills[i]);
	} 
	i++;

	while (myChange >= .05){
		myChange -= .05;
		document.body.appendChild(bills[i]);
	} 
	i++;

	while (myChange >= .01){
		myChange -= .01;
		document.body.appendChild(bills[i]);
	}
	
}