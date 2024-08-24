function isPositive(arr) {
  let countPos = 0;
  let countNeg = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > 0) {
      countPos++;
    }
    if (arr[i] < 0) {
      countNeg++;
    }
  }

  return countPos > countNeg;
}

let a = isPositive([-2, -5, 0, 1]);
console.log(a);
