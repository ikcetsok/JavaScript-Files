function checkCashRegister(price, cash, cid) {
  let kasa = cid.map(function(arr) {
    return arr.slice();
  });
  let reszta = (cash - price) * 100;
  reszta = reszta / 100;
  let check = reszta;
  let sumakasy = 0;
  for (let i = 0; i < kasa.length; i++) {
    sumakasy = sumakasy + kasa[i][1];
  }
  sumakasy = sumakasy * 100;
  sumakasy = sumakasy / 100;
  let change = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];
  let counter = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
  let setki = 0

  console.log(reszta);
  for (let i = 8; i > -1; i--) {
    if (reszta / counter[i] > 0) {
      if (i != 0) {
        setki = Math.floor(reszta / counter[i]);
        setki = setki * counter[i];
      } else {
        setki = Math.round(reszta * 100) / 100;
      }

      if (setki < kasa[i][1]) {
        reszta = reszta - setki;
        change[i][1] = setki;
        kasa[i][1] = kasa[i][1] - setki;
      } else {
        reszta = reszta - kasa[i][1];
        change[i][1] = kasa[i][1];
        kasa[i][1] = 0;
      }
    };
  }
  reszta = Math.round(reszta * 100) / 100;
  console.log(reszta);
  console.log(change)


  let result = [];
  for (let j = change.length - 1; j > -1; j--) {
    if (change[j][1] != 0) {
      result.push(change[j]);
    }
  }
  console.log(check);
  console.log(sumakasy);

  if (reszta > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  } else {
    if (sumakasy == check) {
      return {
        status: "CLOSED",
        change: change
      };
    }
  }
  return {
    status: "OPEN",
    change: result
  };
}

console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));
