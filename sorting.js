function alphabeticalOrder(arr) {
  // Only change code below this line

  let sorter = arr.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });

  return sorter;

  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
