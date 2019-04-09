//Week 3 day 2

//callbacks are function thst get passed as arguments to higher order functions: functions that take in or return a function.
//With them we can make manipulating info more dynamic. They create dynamic nested functions...?

//EXAMPLE OF CALLBACKS/HIGHER ORDER FUNCTIONS FROM CODESMITTH:
//is actually the built-in map();
const array = [1, 2, 3];//declare a variable and assign it the value of an array. (global)

function update(callback) {//declare a function that takes a parameter. (global)
  const output = [];//declare a variable and assign it to an empty array (local to update)
  for (let i = 0; i < array.length; i++) {//create a loop that loops through the globally stored array above. (local to update)
    const updated = callback(array[i]);//declare a variable and assign it the callback function being invoked, with the element at the [i]th place of the array as it's argument. (local to callback, then local update)
    output.push(updated);//push the value of the invocation of the callback into the empty array. (local to update)
  	//^ ^ ^This could also be written as output.push(callback(array[i]));
  }

  return output;//Once our loop breaks we return the once empty array into the global memory, as return means we popout of our function. 
}

// Callback functions
function add10(num) {//declare call back functions. (global)
  return num + 10;
}

function multiplyBy20(num) {
  return num * 20;
}

function stringify(num) {
  return num.toString();
}

// Call update with each callback function (global)
update(add10) // returns [11, 12, 13]
update(multiplyBy20) // returns [20, 40, 60]
update(stringify) // returns [‘1’, ‘2’, ‘3’]




//second redition:
function pluralize (arr){
  let plurals = [];
  for (let i = 0; i < arr.length; i++){
    if (arr != []){
      if(arr[i] === "undefined" || arr[i] === "undefineds"){
         plurals.push();
      } else if ((arr[i][arr[i].length - 1]) === "s"){//this line/condition is being ignored. I suspect b/c the value of arr[i].length cannot be rendered.  
        plurals.push(arr[i]);
      } else {
        plurals.push(arr[i] + "s");
      }
    } else {
      return arr;
    } 
  }
  return plurals;
}

 const animals = ["dog", "cat", "tree frog"];
 const empty = [];
 const stuff = ["ants", "sea lions", "undefineds"];
 console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
 console.log(pluralize(empty));
 console.log(pluralize(stuff));