function negative(int) {
  if (int > 0) {
    console.log(int * -1);
  } else if (int === 0) {
    console.log(-0);
  } else {
    console.log(int);
  }
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0