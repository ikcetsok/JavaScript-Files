const obj = { a: { name: "vas", type:'1234' }, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable

console.log(a);
