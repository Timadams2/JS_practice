let rlSync = require('readline-sync');

let int = rlSync.question('Please eneter an integer greater than 0:\n');
let operator = rlSync.question('Enter "S" to cpmpute the sum, or"p" to compute the product.\n');
let total = 0;



if (operator.toLowerCase() === 's') {
  for (let num = 1; num <= Number(int); num++) {
    total = total + num;
  }
  console.log(`The sum of the integers between 1 and ${int} is ${total}.`);
} else if (operator.toLowerCase() === 'p') {
  total = 1;
  for (let num = 2; num <= Number(int); num++) {
    total = total * num;
  }
  console.log(`The product of the integers between 1 and ${int} is ${total}.`);
} else {
  console.log("Must be S or P");
}