function isItemAvailable(id, arr) {
  let total = 0;
  transactionsFor(id, arr).forEach(obj => {
    if (obj.movement === 'in') {
      total += obj.quantity;
    } else {
      total -= obj.quantity;
    }
  });
  
  if (total > 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function transactionsFor(id, array) {
  return array.filter(obj => obj.id === id);
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true