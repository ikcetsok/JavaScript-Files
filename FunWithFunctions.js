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

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names);
