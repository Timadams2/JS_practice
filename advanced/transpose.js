/*
P:
- function that takes an array that represents a 3x3 matrix
  - 3 by 3 matrix is 3 array of 3 elements
- returns the transpose of the matrix
  - transpose means the first elements of each array become the new first array
  - the second element in each array becomes the new second array
  - so on ...
- dont modify the original matrix
  - can be any element
  - if an array is not the same amount of elements, fill in with null
  - can be any amount of elements
  - all array should match the amount as the longest array

D:
nested array

A:
- call fixLengths and assign to variable fixedArray
- declare resultArr
- for index less than the length of an array in fixedArray
  - declare newArr
  - iterate through fixedArray
    - push the index of current subarray into newArr
  - push newArr into resultArr
- return the resultArr
 
 - use findLongestLength function
   - declare longestLength and assign to 0
   - iterate through the given array
     - if the arrays length is larger than the longestLength 
       - reassign the variable
   - return longestLength once complete
   
 - use fixLengths function
   - takes a nested array
   - call findLongestLength and assign to longestLength var
   - iterate through the nested array
     - if they are as shorter than the longestLength
       - while the length is less than the longest, add null
  - return the new array
*/

function transpose(matrix) {
  let fixedMatrix = fixLengths(matrix);
  let resultArr = [];
  
  for (let idx = 0; idx < fixedMatrix[0].length; idx++) {
    let newArr = [];
    fixedMatrix.forEach(subArr => {
      newArr.push(subArr[idx]);
    });
    resultArr.push(newArr);
  }
  
  return resultArr;
}

function fixLengths(matrix) {
  let longestLength = findLongestLength(matrix);
  
  return matrix.map(subArr => {
    if (subArr.length < longestLength) {
      for (let i = subArr.length; i < longestLength; i++) {
        subArr.push(null);
      }
    }
    return subArr
  });
}

function findLongestLength(matrix) {
  let longestLength = 0;
  
  matrix.forEach(subArr => {
    if (subArr.length > longestLength) {
      longestLength = subArr.length;
    }
  });
  
  return longestLength;
}


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

let matrix2 = [[1, 5], [4, 7], [6, 9]];
console.log(transpose(matrix2));

let matrix3 = [[1, 2], [3, 4, 5], [6, 7, 8]];
console.log(transpose(matrix3));

let matrix4 = [[1, undefined], [7, 10], [8, 9]]; // [[1, 7, 8], [undefined, 10, 9]];

console.log(transpose(matrix4));