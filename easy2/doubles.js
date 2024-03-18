function twice(int) {
  if (String(int).slice(0, String(int).length / 2) === String(int).slice((String(int).length / 2) + 1)) {
    console.log(int);
  } else {
    console.log(int * 2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676