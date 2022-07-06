function smallestCommons(arr) {
  let temp = arr.slice();
  let result = 1;
  let check = 1;
  temp.sort(function (a, b) {
    return a - b;
  });

  let spread = [];
  for (let i = temp[0]; i < temp[1] + 1; i++) {
    spread.push(i);
  }

  while (check != 0) {
    check = 0;
    for (let j = 0; j < spread.length; j++) {
      if (result % spread[j] != 0) {
        check++;
      }
    }

    result++;
  }

  console.log(result);
  return result - 1;
}

smallestCommons([5, 7]);
