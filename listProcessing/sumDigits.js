function sum(int) {
  console.log(String(int).split('').reduce((acc, init) => acc + Number(init), 0));
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45