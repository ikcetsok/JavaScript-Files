function spinalCase(str) {
  let senten = str.slice();
  let reg = /^[a-z]+/;
  let first = senten.match(/^[a-z]+/);
  if (reg.test(senten) == true) {
    console.log(reg.test(senten));
    let senArr = senten.match(/[A-Z][a-z]*/g);
    let out = '';
    senArr = senArr.map((word) => word.toLowerCase());
    console.log(senArr);
    out = senArr.reduce((acc, word) => {
      return `${acc}-${word}`;
    }, '');
    let out1 = `${first}${out}`;
    return out1;
  } else {
    let senArr = senten.match(/[A-Z][a-z]+|[a-z]+/g);
    let out = '';
    senArr = senArr.map((word) => word.toLowerCase());
    console.log(senArr);
    out = senArr.reduce((acc, word) => {
      return `${acc}-${word}`;
    }, '');
    let out1 = out.slice(1, out.length);
    return out1;
  }

}

console.log(spinalCase('AllThe-small Things'));
