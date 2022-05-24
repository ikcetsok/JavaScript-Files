function diffArray(arr1, arr2) {
  let temp1 = arr1.slice();
  let temp2 = arr2.slice();
  let longer = temp1.concat(temp2);
  console.log(longer);

  let sames = longer.filter(item => (!temp1.includes(item) &&
  temp2.includes(item)) || (temp1.includes(item) && !temp2.includes(item)));
  console.log(sames);

  return sames;
}

diffArray([1, 2, 3, 4, 5], [3, 4, 7, 8, 9, 10]);
