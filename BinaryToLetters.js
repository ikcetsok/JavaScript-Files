function binaryAgent(str) {

  let arr = str.split(' ');
  let trans = [];
  let words = [];
  let temp = 0;
  let k = 7;
  let result = '';
  console.log(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i][j] == 1) {
        temp = temp + Math.pow(2, k);
      }

      k--;
    }

    trans.push(temp);
    temp = 0;
    k = 7;
  }

  for (let i = 0; i < trans.length; i++) {
    words.push(String.fromCharCode(trans[i]));
    result = `${result}${words[i]}`;
  }

  console.log(result);
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
