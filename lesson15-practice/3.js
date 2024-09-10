function mergeArrays(arr1, arr2) {
  let arr = [];

  for (const element of arr1) {
    arr.push(element);
  }
  for (const element of arr2) {
    arr.push(element);
  }

  return arr;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
