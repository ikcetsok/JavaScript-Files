function sumPrimes(num) {
  let number = num;
  let counter = 3;
  let pArr = [2];
  let check = 0;
  let result = 0;
  while (counter <= number) {
    for (let i = 2; i < counter; i++) {
      if (counter % i == 0) {
        check++;
        console.log(i);
        console.log(counter);
        console.log('----');
      }
    }

    if (check == 0) {
      pArr.push(counter);
    }

    check = 0;
    counter = counter + 1;
  }

  console.log(pArr);
  for (let j = 0; j < pArr.length; j++) {
    result = result + pArr[j];
  }

  return result;
}

sumPrimes(10);
