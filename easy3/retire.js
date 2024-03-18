let rlSync = require('readline-sync');

let age = rlSync.question('What is you age?');
let retireAge = rlSync.question('At whate age would you like to retire?');

let year = (Number(retireAge) - Number(age)) + 2024;

console.log(`It's 2024. You will retire in ${year}\nYou only have ${Number(retireAge) - Number(age)} years to go`);
