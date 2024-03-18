function sumOfSums(arr) {
  let result = [];
  for (let idx = 1; idx < arr.length + 1; idx++) {
    result.push(arr.slice(0, idx).reduce((acc, init) => acc + init));
  }
  
  console.log(result.reduce((acc, init) => acc +init));
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35