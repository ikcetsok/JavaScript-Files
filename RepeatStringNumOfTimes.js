function repeatStringNumTimes(str, num) {
  let string='';
  if (num<=0){
    return string;
  }
  else{
    let i=0
    do {
      string=string+str;
      i++
    }while (i<num);
    return string;
  }

}

console.log(repeatStringNumTimes("abc", 3));
