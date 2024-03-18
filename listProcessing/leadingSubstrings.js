function leadingSubstrings(string) {
  let result = [];
  let current = '';
  string.split('').map((char) => {
    result.push(current + char);
    current += char;
  });
  
  console.log(result);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]