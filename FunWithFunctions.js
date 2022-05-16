/*jshint esversion:6*/

// let arr=[1,2,3,4,5,6];
// //removeIndex element
// let removeIndex = 2;
// let before=arr.splice(0,removeIndex-1);
// console.log(arr);
// let after=arr.splice(1)
// console.log(before);
// console.log(after);
// arr=before.concat(after);
// console.log(arr);

const users = [{
    name: 'John',
    age: 34
  },
  {
    name: 'Amy',
    age: 20
  },
  {
    name: 'camperCat',
    age: 10
  }
];

const names = users.map(user => user.name);
console.log(names);

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  };
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
