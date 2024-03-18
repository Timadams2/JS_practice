function halvsies(arr) {
  let result = [];
  if ((arr.length % 2) === 0) {
    result.push(arr.slice(0, (arr.length / 2)));
    result.push(arr.slice(arr.length / 2));
  } else {
    result.push(arr.slice(0, (arr.length / 2) + 1));
    result.push(arr.slice((arr.length / 2) + 1));
  }
  
  console.log(result);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]