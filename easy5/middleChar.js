function centerOf(str) {
  let result;
  
  if ((str.length % 2) === 0) {
    result = str.slice((str.length / 2) - 1, (str.length / 2) + 1);
  } else {
    result = str.slice((str.length / 2), (str.length / 2) + 1);
  }
  
  console.log(result);
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"