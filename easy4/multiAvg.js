function showMultiplicativeAverage(arr) {
  let total = arr.reduce((init, acc) => {
    console.log(acc);
    return acc * init
  });
  
  console.log(total);
  console.log((total / arr.length).toFixed(3));
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"