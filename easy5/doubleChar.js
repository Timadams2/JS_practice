function repeater(str) {
  console.log(str.split('').map(letter => {return `${letter}${letter}`}).join(''));
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""