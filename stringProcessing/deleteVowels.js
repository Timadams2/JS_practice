function removeVowels(strArr) {
  console.log(strArr.map(str => {
    if (str.match(/[^aeiouAEIOU]/g) === null) {
      return '';
    } else {
      return str.match(/[^aeuio]/gi).join('');
    }
  }));
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]