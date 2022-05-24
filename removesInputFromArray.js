function destroyer(arr, ...other) {
  let removers = other;
  let arry = arr.slice();
  console.log(removers);
  let cleaned = arry.filter(item => !removers.includes(item));
  console.log(cleaned);
  return cleaned;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
