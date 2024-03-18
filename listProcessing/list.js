function buyFruit(nestedArr) {
  let result = [];
  
  nestedArr.forEach(arr => {
    for (let num = arr[1]; num > 0; num -= 1) {
      result.push(arr[0]);
    }
  });
  
  console.log(result);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]