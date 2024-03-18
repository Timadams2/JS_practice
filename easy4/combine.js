function interleave(arr1, arr2) {
  let result = [];
  let longer;
  
  if (arr2) {
    if (arr1 > arr2) {
      longer = arr1;
    } else {
      longer = arr2;
    }
  } else {
    result = arr1;
    console.log(result);
    return result;
  }
  
  for (let idx = 0; idx < longer.length; idx++) {
    if (arr1[idx] && arr2[idx]) {
      result.push(arr1[idx], arr2[idx]);
    } else if (!arr1[idx]) {
      result.push(arr2[idx]);
    } else {
      result.push(arr1[idx]);
    }
  }
  
  console.log(result);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
interleave([1, 2, 3], [null, 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
interleave([1, 2, undefined], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
interleave([1, 2, 'a']);    // [1, "a", 2, "b", 3, "c"]
interleave( ['a'], [1, 2, 3]);    // [1, "a", 2, "b", 3, "c"]
interleave([3, 4], [3, 3]);