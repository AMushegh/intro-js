function getSumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }

  return sum;
}

function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a;
}

console.log(minus(7, 98));
minus = 1476;

console.log(minus);
