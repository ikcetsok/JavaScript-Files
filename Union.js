function uniteUnique(...arr) {
  let temp = arr.slice();
  console.log(temp);
  let final = [];

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp[i].length; j++) {
      if (final.indexOf(temp[i][j]) < 0) {
        final.push(temp[i][j]);
      }
    }
  }

  console.log(final);
  return final;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
