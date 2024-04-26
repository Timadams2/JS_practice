/*
P: 
- write a function that takes two sorted arrays as argument
- returns a new array that contains all the elemenets fro,m both input arrays in sorted order
- must build the result one element at a time
- should not mutate array
- if any element is not a number, return undefined


D:

A:
- declare firstIdx and assign to 0
  - same for secondIdx
- while both idx are less than the length
  - comapre the firstIdx of the first array and the second of the second
    - if either are undefined, return the other
    
    - if the first is less, add that to result array and the first is not 
    - add 1 to the firstIdx
    - else 
      - do the same for second
- return the result array


*/

function merge(arr1, arr2) {
  let firstIdx = 0;
  let secondIdx = 0;
  
  let result = [];
  
  while (firstIdx < arr1.length || secondIdx < arr2.length) {
    if (arr1[firstIdx] === undefined) {
      result.push(arr2[secondIdx]);
      secondIdx += 1;
    } else if (arr2[secondIdx] === undefined) {
      result.push(arr1[firstIdx]);
      firstIdx += 1;
    } else {
        if (arr1[firstIdx] < arr2[secondIdx]) {
          result.push(arr1[firstIdx]);
          firstIdx += 1;
        } else {
          result.push(arr2[secondIdx]);
          secondIdx += 1;
        }
    }
  }
  
  console.log(result);
  
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]