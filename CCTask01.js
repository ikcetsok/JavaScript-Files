function palindrome(str) {
  const subject = str.slice();
  const subArr = [];
  const clearArr = [];
  const alpha = /[A-Za-z0-9]/;
  const letters = /[A-Za-z]/;
  let normal = "";
  let backwards = "";
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
  normal = clearArr.join("");
  console.log(normal);
  for (let i = clearArr.length - 1; i > -1; i--) {
    backwards = `${backwards}${clearArr[i]}`;
  }

  console.log(backwards);
  if (normal == backwards) {
    return true;
  }

  return false;
}

console.log(palindrome("0_0 (: /- :) 0-0"));
console.log("sukces");
