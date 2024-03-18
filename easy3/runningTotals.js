function runningTotal(arr) {
  if (arr.length === 0) {
    console.log([]);
    return [];
  }
  
  let result = [0];
  
  arr.forEach(num => {
    result.push(result[result.length - 1] + num);
  });
  
  console.log(result.slice(1));
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []