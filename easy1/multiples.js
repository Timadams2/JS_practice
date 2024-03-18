function multisum(int) {
  let result = 0;
  for (let num = 3; num <= int; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      result = result + num;
    }
  }
  console.log(result);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168