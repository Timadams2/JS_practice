function letterCaseCount(str) {
  let result = {};
  
  if (str.match(/[a-z]/g)) {
    result['lowercase'] = str.match(/[a-z]/g).length;
  } else {
    result['lowercase'] = 0;
  }
  
  if (str.match(/[A-Z]/g)) {
    result['uppercase'] = str.match(/[A-Z]/g).length;
  } else {
    result['uppercase'] = 0;
  }
  
  if (str.match(/[^a-z]/ig)) {
    result['neither'] = str.match(/[^a-z]/ig).length;
  } else {
    result['neither'] = 0;
  }
  
  console.log(result);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }