function findLongestWordLength(str) {
  let wArray=[];
  let wRegEx=/\w+/g;
  let length=0;
  let slowo='';
  wArray=str.match(wRegEx);
  console.log(wArray);
  for (let i=0; i<wArray.length; i++){
    if (wArray[i].length>length){
      length=wArray[i].length;
      slowo=wArray[i];
    }
  }
  console.log(length);
  console.log(slowo);
  return length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength('stary kutacz uwielbia jesc dlugasne kielbasy')
