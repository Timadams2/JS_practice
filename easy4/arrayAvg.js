function average(arr) {
  let result = arr.reduce((acc, init) => {return acc + init});
  
  console.log((result / arr.length).toFixed(0));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40