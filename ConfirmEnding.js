function confirmEnding(str, target) {
console.log(str.length-target.length);
console.log(str.substring(str.length-target.length));
if(str.substring(str.length-target.length)==target){

  return true;
}
return false;


}

console.log(confirmEnding("Bastian", "n"));
