function wordSizes(str) {
  let result = {};
  
  str.split(' ').forEach(word => {
    if (result[String(word.length)]) {
      result[String(word.length)] += 1;
    } else {
      result[String(word.length)] = 1;
    }
  });
  
  console.log(result);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}