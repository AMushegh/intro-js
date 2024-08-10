let array = [1, 4, -6, 23, -1, 0];

let sum = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sum += array[i];
  }
}

console.log(sum);
