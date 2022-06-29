function translatePigLatin(str) {
  let temp = str.slice();
  let letter = temp.slice(0, 1);
  let consonants = /^[^aeuioq]+/;
  let result = '';
  if (consonants.test(letter)) {
    let check = temp.match(consonants);
    console.log(check[0].length);
    let first = temp.substring(0, (check[0].length));
    console.log(first);
    let rest = temp.substring(check[0].length, temp.length);
    console.log(rest);

    result = `${rest}${first}ay`;
    console.log(result);
  } else {
    result = `${temp}way`;
  }

  return result;
}

translatePigLatin("rhythm");
