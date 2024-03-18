function wordCap(str) {
 let result = str.split(' ').map(word => {
   if (word[0].match(/[a-z]/g)) {
     return word[0].toUpperCase() + word.slice(1);
   } else {
     return word;
   }
 });
 
 console.log(result.join(' '));
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'