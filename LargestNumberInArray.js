function largestOfFour(arr) {
  let larry = [];
  for (let i = 0; i < arr.length; i++) {
    larry[i] = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (larry[i] < arr[i][j]) {
        larry[i] = arr[i][j];
      }
    }
  }
  console.log(larry);
  return larry;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
