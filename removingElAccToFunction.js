function dropElements(arr, func) {
  let temp = arr.slice();
  let result = temp.slice();
  for (let i = 0; i < temp.length; i++) {
    if (func(temp[i])) {
      break;
    }

    console.log(i);
    result.shift();

  }

  console.log(result);
  return result;
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
