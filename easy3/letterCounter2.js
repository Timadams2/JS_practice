function wordSizes(str) {
  if (str.length === 0) {
    console.log({});
    return {};
  }
  
  let result = {};
  
  str.split(' ').forEach(word => {
    if (result[String(word.match(/[a-zA-Z]/g).length)]) {
      console.log(word.match(/[a-zA-Z]/g));
      result[String((word.match(/[a-zA-Z]/g)).length)] += 1;
    } else {
      console.log(word.match(/[a-zA-Z]/g));
      result[String((word.match(/[a-zA-Z]/g)).length)] = 1;
    }
  });
  
  console.log(result);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}