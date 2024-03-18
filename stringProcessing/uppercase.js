function isUppercase(string) {
  let result = true;
  string.split('').forEach(char => {
    if (char.match(/[a-z]/g)) {
      result = false;
    }
  });
  
  console.log(result);
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true