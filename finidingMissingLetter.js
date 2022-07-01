function fearNotLetter(str) {
  let alph = "abcdefghijklmnopqrstuvwxyz";
  let temp = str.slice();
  let start = alph.indexOf(temp[0]);
  console.log(start);
  for (let i = start; i < start + temp.length; i++) {
    console.log(i);
    if (temp[i - start] != alph[i]) {
      console.log('up');
      return alph[i];
    }
  }

  return undefined;
}

console.log(fearNotLetter("stvwx"));
