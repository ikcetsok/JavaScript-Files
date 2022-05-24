function whatIsInAName(collection, source) {
  // Only change code below this line
  let keys = Object.keys(source);
  let temp = collection.slice();

  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    temp = temp.filter(item => item[keys[i]] == source[keys[i]]);
    console.log(temp);
  }

  console.log(temp);

  // Only change code above this line
  return temp;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{
  "apple": 1,
  "bat": 2
}, {
  "bat": 2
}, {
  "apple": 1,
  "bat": 2,
  "cookie": 2
}], {
  "apple": 1,
  "bat": 2
})
