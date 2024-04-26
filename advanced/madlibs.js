/*
P:
- template as input
- plugs in a selection of randomized words
- returns the text 
- puts the right type of word in the right spot
- always a string
- a * marks if it is a word that should be replaced 
- word after star is which array the word should come from


A:
- split the string into an array
- map through each word
  - if the word begins with a star
    - replace the word with a ranodom word out of the array that is the same as the string after the star
  - else return the word 
- join the return value of the map
- return that
    
*/

function madlibs(template) {
  let adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  let nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
  let adverbs = ['easily', 'lazily', 'noisily', 'excitedly'];
  
  let result = template.split(' ').map(word => {
    if (word.slice(0, 1) === '*') {
      if (/^a-z]/i.test(word[word.length - 1])) {
        let type = word.slice(1, word.length - 2);
        console.log(type);
        return type[Math.floor(Math.random() * word.length) + word[word.length - 1]];
      } else {
        let type = word.slice(1, word.length);
        console.log(type);
        console.log(Math.floor(Math.random() * word.length));
        console.log(type[Math.floor(Math.random() * word.length)]);
        return type[Math.floor(Math.random() * word.length)];
      }
    } else {
      return word;
    }
  }).join(' ');
  
  console.log(result);
}
let template1 = "The *adjective *noun *verb early in the morning. And then, all of a sudden, *adjective *noun showed up. The *noun *adverb *verb.";
let template2 = "The *adjective *noun *verb early in the morning. And then, all of a sudden, *adjective *noun showed up. The *noun *adverb *verb.";
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around."]

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.
/*

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
*/