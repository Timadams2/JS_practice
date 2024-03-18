function sequence(int) {
  let result = [];
  let num = 1;
  while (result.length < int) {
    result.push(num);
    num += 1;
  }
  
  console.log(result);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]