function oddNums(limit) {
  for (let num = 1; num < limit; num++) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}

oddNums(9);