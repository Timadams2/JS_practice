function doubleConsonants(str) {
  console.log(str.split('').map(letter => {
    if (/[abcdfghjklmnpqrstvwxyz]/i.test(letter)) {
      return letter + letter;
    } else {
      return letter;
    }
  }).join(''));
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""