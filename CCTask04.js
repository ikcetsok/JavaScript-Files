function telephoneCheck(str) {
  let temp = str;
  let numbers = /[0-9]/;
  let sum = 0;
  let nawiasy = 0;
  console.log(temp);
  let RegNaw = /\(\d{4,}\)/;
  let RegMin = /-\d{1,2}-|\s\d{1,2}\s/g;
  let test = temp.match(RegMin);
  console.log(test);
  for (let i = 0; i < temp.length; i++) {
    if (numbers.test(temp[i])) {
      sum = sum + 1;
    }

    if (temp[i] == '(' || temp[i] == ')') {
      nawiasy = nawiasy + 1;
    }
  }

  //czy jest odpowiednia ilość cyfr
  if (sum != 10 && sum != 11) return false;

  //czy jeśli jest kierunkowy to czy jest z przodu
  if (sum == 11 && temp[0] != 1) return false;

  // czy są tylko dwa nawiasy
  if (nawiasy != 0 && nawiasy != 2) return false;

  // czy jak są dwa nawiasy to między nimi są 3 cyfry
  if (nawiasy == 2 && RegNaw.test(temp)) return false;
  if (RegMin.test(temp)) return false;
  return true;
}

console.log(telephoneCheck("(54335) 55 5555"));
