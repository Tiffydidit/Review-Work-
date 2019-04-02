//Week 3 day 2

//callbacks are function thst get passed as arguments to higher order functions: functions that take in or return a function.
//With them we can make manipulating info more dynamic. They create dynamic nested functions...?

const array = [1, 2, 3];

function update(callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const updated = callback(array[i]);
    output.push(updated);
  }

  return output;
}

// Callback functions
function add10(num) {
  return num + 10;
}

function multiplyBy20(num) {
  return num * 20;
}

function stringify(num) {
  return num.toString();
}

// Call update with each callback function
update(add10) // returns [11, 12, 13]
update(multiplyBy20) // returns [20, 40, 60]
update(stringify) // returns [‘1’, ‘2’, ‘3’]