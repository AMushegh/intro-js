function getAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}
console.log(getAverage([3, 4, 8]));
