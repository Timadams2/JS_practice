function swapName(str) {
  console.log(str.split(/[\s]/)[1] + ', ' + str.split(/[\s]/)[0]);
}

swapName('Joe Roberts');    // "Roberts, Joe"