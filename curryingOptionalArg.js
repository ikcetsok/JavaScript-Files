function addTogether(...arg) {
  const [first, second] = arg;
  if (typeof (first) !== 'number')
    return undefined;
  if (second === undefined) {
    return function (second) {
      if (typeof (second) !== 'number') {
        return undefined;
      } else {
        return first + second;
      }
    };

  }

  if (typeof (second) !== 'number')
    return undefined;
  return first + second;
}

console.log(addTogether(2), ([3]));
