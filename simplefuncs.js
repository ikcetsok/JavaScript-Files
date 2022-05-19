const squareList = arr => {
  // Only change code below this line
  let temp = arr.filter(arg => Number.isInteger(arg) && arg > 0)
  .map(arg => arg * arg);
  return temp;

  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
