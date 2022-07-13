function palindrome(str) {
  let subject = str.slice();
  let subArr = [];
  let clearArr = [];
  let alpha = /\w/;
  let letters = /[A-Za-z]/;
  for (let i = 0; i < subject.length; i++) {
    subArr.push(subject[i]);
  }

  // console.log(subArr);
  for (let i = 0; i < subArr.length; i++) {
    if (alpha.test(subArr[i])) {
      if (letters.test(subArr[i])) {
        clearArr.push(subArr[i].toLowerCase());
      } else {
        clearArr.push(subArr[i]);
      }
    }

  }

  //console.log(clearArr);

  return true;
}

palindrome("Ey 1@#CARe");
