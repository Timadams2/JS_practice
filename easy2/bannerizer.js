function logInBox(string) {
  if (!string && string !== '') {
    console.log('no')
    return 'no';
  }
  
  console.log(topLine(string));
  console.log(spaceLine(string));
  console.log(`| ${string} |`);
  console.log(spaceLine(string));
  console.log(topLine(string));
}

function topLine(string) {
  let result = '+';
  for (let num = 1; num <= string.length + 2; num++) {
    result = result + '-';
  }
  
  result = result + '+';
  return result;
}

function spaceLine(string) {
  let result = '|';
  for (let num = 1; num <= string.length + 2; num++) {
    result = result + ' ';
  }
  result = result + '|';
  return result;
}

logInBox('To boldly go where no one has gone before.');
logInBox(' bricka      ');
logInBox(undefined);
logInBox('');
