function cleanUp(string) {
  let clean = string.split('').map(char => {
    if (char.match(/[A-Z ]/i)) {
      return char;
    } else {
      return ' ';
    }
  }).join('');
  
  let result = [
  
  clean.forEach(char => {
    result.push
  })
  console.log(result);
}

cleanUp("---what's my +*& line?");    // " what s my line "