 //CONDITIONALS 

 // let a;

 // a = 699;

 // if (a > 0){
 // 	console.log("positive!");
 // } else if ( a < 0){
 // 	console.log("negative!");
 // } else {
 // 	console.log("it's zero!");
 // }

 // let i; 

 // i = 0;

 // if (i < 100 ) {
 // 	if (i > 0) {
 // 		console.log("i is positive and less than 100!");
 // 	} 
 // 	else if (i < 0) {
 // 		console.log ("i is negative and less than 100!");
 // 	} 
 // 	else {
 // 		console.log ("i is 0!");
 // 	} 
 // } 
 // else {
 // 		console.log( "i is not less than 100");
 // 	}

let grade;

grade = 89;

if (grade >= 90){
	console.log("You got an A!");
} else if (grade >=  80) {
	console.log("You got a B!");
} else if (grade >= 70) {
	console.log("You got a C!");
} else if (grade >= 55){
	console.log("You got a D!");
} else {
	console.log("You failed this exam.");
}

/********** GRADES: NESTED CONDITIONALS ************/

/*The benefit of the nested conditonal is that we bypass checking every condition to produce an 
initial response in this case, pass or fail.*/

let g;

g = 82;

if (g > 54){ //In the nested conditional, the parent condition only has two options: greater than 54 or not. 
	if((g >= 90) && (g <= 93)){		//If you've gotten more than 54, we check for something else i.e. (the children conditons) 
		console.log("You got an A-!"); //until one proves true. 
	} else if ((g >= 94) && (g <= 96)){
		console.log("You got an A!");
	} else if (g >= 97){
		console.log("You got an A+!");
	}

	if((g >= 80) && (g <= 83)){
		console.log("You got a B-!");
	} else if ((g >= 84) && (g <= 86)){
		console.log("You got a B!");
	} else if ((g >= 87) && (g < 90)){ //We need two conditions here b/c every new "IF" instructs us to check for truth. 
		console.log("You got a B+!");// E.g. with only one condition 93, being >= 87 and <= 93 would log you got an A- & a B+. 
	}

	if ((g >= 70) && (g <=73)){
		console.log("You got a C-!");
	} else if((g >=74) && (g <=76)){
		console.log("You got a C!");
	} else if ((g >=77) && (g < 80)){
		console.log("You got a C+!");
	} 

	if ((g >= 55) && (g <= 60)){
		console.log("You got a D-!");
	} else if ((g >= 61) && (g <= 65)){
		console.log("You got a D!");
	} else if ((g >= 66) && (g < 70)){
		console.log("You got a D+!");
	}	
} else {									//If you did not get more than 54, you fail. 
	console.log("You failed this exam.");
}


/********** GRADES: NORMAL IF/ELSE ************/

//The benefit to if/else statements is it requires slightly less syntax when setting up conditions.

let q;  

q = 98; //We have several options here; failure isn't one until we've determined that none of the others are true. 


	if((q >= 90) && (q <= 93)){
		console.log("You got an A-!");
	} else if ((q >= 94) && (q <= 96)){//We need two conditions here b/c w/ only one IF, w/o the second condition, we would never-- 
		console.log("You got an A!"); //--check for/log pluses, as once one condition is met, we stop checking.
	} else if (q >= 97){  //We don't need two conditions here for the same reason.
		console.log("You got an A+!");
	} else if((q >= 80) && (q <= 83)){
		console.log("You got a B-!");
	} else if ((q >= 84) && (q <= 86)){
		console.log("You got a B!");
	} else if (q >= 87){  
		console.log("You got a B+!");
	} else if ((q >= 70) && (q <=73)){
		console.log("You got a C-!");
	} else if((q >=74) && (q <=76)){
		console.log("You got a C!");
	} else if (q >=77){
		console.log("You got a C+!");
	} else if ((q >= 55) && (q <= 60)){
		console.log("You got a D-!");
	} else if ((q >= 61) && (q <= 65)){
		console.log("You got a D!");
	} else if (q >= 66){
		console.log("You got a D+!");
	} else {
	console.log("You failed this exam.");
	}

 

// If student gets 90 or higher: 
// they get an A➢If students get 80 or above: 
// they get a B➢If students get 
// 70 or above: they get a C
// If students get 55 or above: 
// they get a D➢Any grade lower than 55 is F


