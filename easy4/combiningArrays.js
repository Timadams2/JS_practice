function union(arr1, arr2) {
  let combinedArrs = [];
  
  if (Array.isArray(arr1)) {
    combinedArrs.push(getNumbers(arr1));
  }
  
  if (Array.isArray(arr2)) {
    combinedArrs.push(getNumbers(arr2));
  }
  
  let result = [];
  
  combinedArrs.flat().forEach(num => {
    if (!result.includes(num)) {
      result.push(num);
    }
  });
  
  console.log(result);
}

function getNumbers(arr) {
  let numArr = [];
  
  arr.forEach(elem => {
    if (Number(elem) === elem) {
      numArr.push(elem);
    }
  });
  
  return numArr;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
union([undefined], [9, 0]);     // [9, 0]
union(undefined, [1, 5, 6]);    // [1, 5, 6]
union([32, 3, 5], ['fwer', 0]); // [32, 3, 5, 0]
union([5, 6, 2]);               // [5, 6, 2]
union('string', [5, 3]);        // [5, 3]
union([5, 5], [6, 5, 7]);       // [5, 6, 7]
