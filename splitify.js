function splitify(str) {
  // Only change code below this line
  var splitify = str.split(/[\W]/);
  return splitify;

  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));

function sentensify(str) {
  // Only change code below this line
  let split = str.split(/\W/);
  console.log(split);
  let joiner = split.join(" ");
  return joiner;

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
