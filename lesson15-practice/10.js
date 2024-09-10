function processArray(arr, transformer) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(transformer(arr[i]));
  }

  return result;
}

console.log(
  processArray([1, 2, 3], function (x) {
    return x * 10;
  })
);
