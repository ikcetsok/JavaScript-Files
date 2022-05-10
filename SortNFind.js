/*jshint esversion: 6*/
function getIndexToIns(arr, num) {
  let temp = [...arr];
  let Sorted = [];
  for (let i = 0; i < arr.length; i++) {
    let max = Math.max(...temp);

    let index = temp.indexOf(max);

    Sorted.unshift(temp[index]);
    temp.splice(index, 1);
  }

  console.log(Sorted);
  for (let j = 0; j < Sorted.length; j++) {
    if (num <= Sorted[j]) {
      console.log('up');
      return j;
    }
  }

  return Sorted.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
