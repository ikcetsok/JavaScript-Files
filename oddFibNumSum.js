function sumFibs(num) {
  let number = num;
  let result = 0;
  let temp = 0;
  let fib = [1, 1];
  do {
    temp = fib[fib.length - 2] + fib[fib.length - 1];
    if (temp > number) {
      break;
    }

    fib.push(temp);
  } while (fib[fib.length - 1] <= number);
  for (let i = 0; i < fib.length; i++) {
    if (fib[i] % 2 != 0) {
      result = result + fib[i];
    }
  }

  return result;

}

sumFibs(1000);
