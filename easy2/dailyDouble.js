function crunch(str) {
 let result = [];
 
 str.split('').forEach(char => {
   if (char !== result[result.length - 1]) {
     result.push(char)
   }
 });
 
 console.log(result.join(''));
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""