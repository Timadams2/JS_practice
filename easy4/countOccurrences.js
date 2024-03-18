function countOccurrences(list) {
  let result = {};
  
  list.forEach(item => {
    if (Object.keys(result).includes(item)) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  });
  
  Object.keys(result).map(key => {
    console.log(`${key} => ${result[key]}`);
  });
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1