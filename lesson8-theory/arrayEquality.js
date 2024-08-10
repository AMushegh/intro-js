let numbers = [1, 2, 3, 4, 56, 7, 8];
let target = [];

for (let i = 0; i < numbers.length; ++i) {
  if (i % 2 !== 0) {
    target.push(numbers[i]);
  }
}

for (let element of numbers) {
  console.log(element);
}
