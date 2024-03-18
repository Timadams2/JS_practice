function substrings(str) {
  let result = [];
  for (let idx1 = 0; idx1 < str.length; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < str.length + 1; idx2++) {
      result.push(str.slice(idx1, idx2));
    }
  }

  console.log(result);
}

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]