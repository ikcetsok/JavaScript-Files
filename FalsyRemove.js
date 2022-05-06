function bouncer(arr) {
  let arry=[];
  console.log(arry);
  for(let i=0; i<arr.length; i++){
    if(Boolean(arr[i])==true){
      arry.push(arr[i]);
  }
  console.log(arry);


}
  return arry;
}
bouncer([7, "ate", "", false, 9]);
