function palindromes(str) {
  let result = [];
  
  for (let idx1 = 0; idx1 < str.length; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < str.length + 1; idx2++) {
      result.push(str.slice(idx1, idx2));
    }
  }
  
  result = result.filter(substr => (substr === substr.split('').reverse().join('')) && (substr.length > 1));
  
  console.log(result);
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]