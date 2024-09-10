let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
let vahe = arr.forEach(function (a, i) {
  if (i % 2 === 0) {
    sum += a;
  }
});

console.log(vahe);
