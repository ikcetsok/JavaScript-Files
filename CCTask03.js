function rot13(str) {
  let string = str;
  let result = '';
  let letters = /[A-Z]/;
  console.log(string);
  for (let i = 0; i < string.length; i++) {
    if (letters.test(string[i])) {
      let temp = string.charCodeAt(i);
      if (temp > 77) {
        temp = 65 - 78 + temp;
      } else {
        temp = temp + 13;
      }

      result = result + String.fromCharCode(temp);
      console.log(temp);
    } else {
      result = result + string[i];
    }
  }

  console.log(result);
  console.log(str);
  return result;
}

rot13('SERR PBQR PNZC');

//A 65
//Z 90 -> 65+13
//przeskok -> 77
