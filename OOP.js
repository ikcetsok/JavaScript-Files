/*jshint esversion:6*/

function Mieszkaniec(name, building, flat) {
  this.name = name;
  this.building = building;
  this.flat = flat;
}

Mieszkaniec.prototype.city = "Krakow";

let Bunia = new Mieszkaniec("Marta",81,71);

for (let property in Bunia) {
  console.log(property);
}

console.log(Bunia);
Bunia.flat=77;
console.log(Bunia.city);
