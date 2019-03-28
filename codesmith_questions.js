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