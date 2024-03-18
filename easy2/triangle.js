function triangle(integer) {
  let lines = [];
  for (let num = 1; num <= integer; num++) {
    lines.push(createLine((integer - num), num));
  }
  
  lines.forEach(line => {
    console.log(line);
  });
}

function createLine(spaces, stars) {
  let result = '';
  
  for (let num = 1; num <= spaces; num++) {
    result = result + ' ';
  }
  
  for (let num = 1; num <= stars; num++) {
    result = result + '*';
  }
  
  return result;
}

triangle(5);
triangle(9);
