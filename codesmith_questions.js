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
  if(sumMe[i] > 0 && sumMe[i] != '10' ){//is the best way to do this simply to deeply exclude "10"?
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
    for(let j = 0; j < vowels.length; j++){//I want to drop into this for loop and iterate through every index of vowels using j
      if(string[i] !== vowels[j]){//comparing the letter in string to each letter in vowels
        result += string[i]//if the letter being compared from string is not deeply equal to a letter from vowel, 
       					   //add it to result and break the loop. 
      }
    }
     i++//increment i to compare the next letter in the string. 
  }
}

//Comment in the code below to test your function:

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
 console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'