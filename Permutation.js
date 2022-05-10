/*jshint esversion:6 */
function mutation(arr) {
  let test = [];
  let counter = 0;

  for (let i = 0; i < arr[1].length; i++) {
    test[i] = arr[1][i];
  }

  let lowtest = test.map(test => test.toLowerCase());
  console.log(lowtest);
  let lowarr = arr.map(arr => arr.toLowerCase());

  for (let j = 0; j < lowtest.length; j++) {
    for (let k = 0; k < lowarr[0].length; k++)
      if (lowarr[0][k] == lowtest[j]) {
      counter++;
      break;
    }

  }

  console.log(counter);
  return (counter == test.length) ? true :
    false;
}

console.log(mutation(["hello", "Hello"]));
