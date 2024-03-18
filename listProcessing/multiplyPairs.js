function multiplyAllPairs(arr1, arr2) {
  let result = [];
  
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
        result.push(num1 * num2);
    });
  });

  console.log(result.flat().sort((a, b) => a - b));
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]