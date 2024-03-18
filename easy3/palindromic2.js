function isRealPalindrome(string) {

  let cleanedString = string.split('').map(char => {
    if (/[a-zA-Z1-9]/.test(char)) {
      return char.toLowerCase();
    }
  }).join('');
  
  console.log(cleanedString);
  if (cleanedString === cleanedString.split('').reverse().join('')) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false