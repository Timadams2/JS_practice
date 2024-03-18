let rlSync = require('readline-sync');

let q1 = rlSync.question("Enter the length of the room in meters:\n");
let q2 = rlSync.question("Enter the width of the room in meters:\n");

let areaFeet =  q1 * 3.2808399 * q2 * 3.2808399;
console.log(`The area of the room is ${Number(q1) * q2} square meters (${areaFeet.toFixed(2)} sqaure feet).`);