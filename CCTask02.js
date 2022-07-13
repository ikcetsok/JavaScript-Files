function convertToRoman(num) {
  let arrNum = Array.from(String(num), Number);
  let result = '';
  arrNum.reverse();
  console.log(arrNum);

  //1-9

  if (arrNum[0] == 9) {
    //console.log('up');
    result = 'IX';
  } else {
    if (arrNum[0] == 5) {
      result = 'V';
    } else {
      if (arrNum[0] == 4) {
        result = 'IV';
      } else {
        if (arrNum[0] < 4) {
          for (let i = 0; i < arrNum[0]; i++) {
            result = result + 'I';
          }
        } else {
          if (arrNum[0] > 5) {
            result = 'V';
            for (let i = 0; i < arrNum[0] - 5; i++) {
              result = result + 'I';
            }
          }
        }
      }
    }
  }

  //10-90

  if (arrNum[1] == 9) {
    //console.log('up');
    result = 'XC' + result;
  } else {
    if (arrNum[1] == 5) {
      result = 'L' + result;
    } else {
      if (arrNum[1] == 4) {
        result = 'XL' + result;
      } else {
        if (arrNum[1] < 4) {
          for (let i = 0; i < arrNum[1]; i++) {
            result = 'X' + result;
          }
        } else {
          if (arrNum[1] > 5) {
            for (let i = 0; i < arrNum[1] - 5; i++) {
              result = 'X' + result;
            }

            result = 'L' + result;
          }
        }
      }
    }
  }

  //100-900

  if (arrNum[2] == 9) {
    //console.log('up');
    result = 'CM' + result;
  } else {
    if (arrNum[2] == 5) {
      result = 'D' + result;
    } else {
      if (arrNum[2] == 4) {
        result = 'CD' + result;
      } else {
        if (arrNum[2] < 4) {
          for (let i = 0; i < arrNum[2]; i++) {
            result = 'C' + result;
          }
        } else {
          if (arrNum[2] > 5) {
            for (let i = 0; i < arrNum[2] - 5; i++) {
              result = 'C' + result;
            }

            result = 'D' + result;
          }
        }
      }
    }
  }

  //1000+

  for (let i = 0; i < arrNum[3]; i++) {
    result = 'M' + result;
  }

  console.log(result);
  return (result);
}

convertToRoman(668);
