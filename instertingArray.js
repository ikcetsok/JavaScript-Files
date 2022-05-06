function frankenSplice(arr1, arr2, n) {

  let arr3=[...arr2]; //IMPORTANT!!!! Odwłowanie się do nie tej samej wartości tylko włożenie wartości do arr3 (https://medium.com/@naveenkarippai/learning-how-references-work-in-javascript-a066a4e15600)
  let rest=arr3.splice(n);
  for (let i=0; i<arr1.length; i++){
    arr3[n+i]=arr1[i];
  }
  for (let j = 0; j < rest.length; j++) {
    arr3.push(rest[j]);
  }

  console.log(arr2);
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
