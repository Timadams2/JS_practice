function staggeredCase(string) {
  let index = 0;
  let result = string.split('').map((char) => {
    if (/[a-z]/i.test(char)) {
      if (index % 2 === 0) {
        index += 1;
        return char.toUpperCase();
      } else {
        index += 1;
        return char.toLowerCase();
      } 
    } else {
      return char;
    }
  }).join('');
  
  console.log(result);
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"