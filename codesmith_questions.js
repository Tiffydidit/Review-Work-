const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE

for(let i = 0; i < possibleIterable.length; i++){
  	if(possibleIterable[i] % 3 === 0){
       divByThree[possibleIterable[i]] = i;//why doesn't dot notation work here?
       }
}
console.log(divByThree)


const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE
let i;
for(i in sumMe){
  if(sumMe[i] > 0 && sumMe[i] != '10' ){//is the best way to do this, simply to deeply exclude "10"?
    console.log(sumMe[i])
    total += sumMe[i];
  }
}

//They used an object and the two  .toLowercase(), before I saw there solution I thought to use an  array and nested loops. 
//Is this doable? 

function disemvowel(string) {
  // your code here...
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var result = " ";

  var i = 0
  while(i < string.length){//while i is less than the length of the string. 
    for(let j = 0; j < vowels.length;){//I want to drop into this for loop and iterate through every index of vowels using j
      if(string[i] !== vowels[j]){//comparing the letter in string to each letter in vowels
        							//if the letter being compared from string is not deeply equal to a letter from vowel, //add it to result and break the loop. 
       }result += string[i]
    }
     i++//increment i to compare the next letter in the string. 
  }
}

//Comment in the code below to test your function:

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
 console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'


//I solved this, but with a hard code. How do I get my function to push i, obj[i] times w/o hard coding? USE A LOOP! 
function arrayBuilder(obj) {//function takes in an object
  let i;//declare variable i
  let arr = [];//assign variable arr to an empty array
  for(i in obj){//use a for..in loop to access object keys
    if(obj[i] > 1){//use if statement that assesses if the value of the key (or i) is greater than 1
      let k = 0;//if it is, assign k to zero and use it, in conjunction w/ a loop, to push the key, its value number of times
       while(k < obj[i]){// added a while loop to solve dynamically. //while k being less than obj[i] (or the keys value: 2) is true
         arr.push(i)//push the key (or variable or i), into our empty array
         k++;//then add one to k and repeat until k is not less than obj[i]/ loop breaks.
       }
    } else {//if obj[i] (or the key's value) is not greater than 1,
      arr.push(i)// simply push i (or the key).
    }
   
  }
 return arr;//return the array.

}
//OLD, HARD CODE!
//   let i;
//   let arr = [];
//   for(i in obj){
//     if(obj[i] > 1){
//        arr.push(i, i);
//     } else {
//       arr.push(i)
//     }
   
//   }
//  return arr;

// }

//Comment in the code below to test your function:

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({}));





//This is from free code camp:

function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}

//this is not my code, it's the solution they provided. I pasted it here to dissect/understand it...

//NESTED LOOPS FROM FREE CODE CAMP
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++){
    for (let k = 0; k < arr[i].length; k++){
      product *= arr[i][k];
    }
  }
  
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
