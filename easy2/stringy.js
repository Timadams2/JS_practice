function stringy(integer) {
  let result = '';
  let int = 1
  while (int <= integer) {
    if (int % 2 === 0) {
      result += '0';
    } else {
      result += '1';
    }
    int += 1;
  }
  
  console.log(result);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"