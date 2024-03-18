function isPalindromicNumber(int) {
  if (String(int) === String(int).split('').reverse().join('')) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true