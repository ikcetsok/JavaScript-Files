function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let input = [];
  for (let i in arr) {
    input.push(arr[i]);
  }

  //console.log(input[0].avgAlt);
  let ResArr = [];

  for (let i = 0; i < input.length; i++) {
    let a = Math.pow(earthRadius + input[i].avgAlt, 3);

    //console.log(a);
    let result = Math.round(2 * Math.PI * (Math.sqrt(a / GM)));
    ResArr.push({
      name: input[i].name,
      orbitalPeriod: result,
    });

    // console.log(ResArr);
  }

  return ResArr;
}

console.log(orbitalPeriod([{
  name: "iss",
  avgAlt: 413.6,
}, {
  name: "hubble",
  avgAlt: 556.7,
}, {
  name: "moon",
  avgAlt: 378632.553,
}]));
