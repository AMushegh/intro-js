let array = [3, 4, 9];
let n = 3;

for (let i = 0; i < array.length; ++i) {
  if (array[i] % 2 === 0) {
    array[i] -= n * 2;
  } else {
    array[i] += n * 2;
  }
}
console.log(array);

// for (let i = 0; i < n; ++i) {
//   for (let j = 0; j < array.length; j++) {
//     if (array[j] % 2 === 0) {
//       array[j] -= 2;
//     } else {
//       array[j] += 2;
//     }
//   }
//   console.log(array);
// }
