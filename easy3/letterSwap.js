function swap(string) {
  let result = string.split(' ').map(word => {
    if (word.length === 1) {
      return word;
    }
    
    return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
  }).join(' ');
  
  console.log(result);
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"