function titleCase(str) {
  let regEx=/\w+\S*/g;
  let strArr=str.match(regEx);
  let complete='';
  console.log(strArr);
  for(let i=0; i<strArr.length; i++){
    let first=strArr[i][0].toUpperCase();
    let rest=strArr[i].slice(1);
      rest=rest.toLowerCase();
      if (complete==''){
        complete=first+rest;
      }else{
      complete=complete+' '+first+rest;}

  }
  console.log(complete);
  return complete;
}

titleCase("I'm a little tea pot");
