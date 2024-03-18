function prompt(message) {return require('readline-sync').question(message)}

let q1 = parseInt(prompt('What is the bill?\n'), 10);
let q2 = parseInt(prompt('What is the tip percentage?\n'), 10);

let tip = ((q1 * q2) / 100).toFixed(2);
let total = (q1 + parseInt(tip, 10)).toFixed(2);

console.log(`The tip is ${tip}.\nThe total is ${total}`);
