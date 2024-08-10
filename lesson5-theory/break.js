// for (let i = 0; i < 348274389279; ++i) {
//   if (i > 10000) {
//     break;
//   }
//   console.log(i);
// }

n = 237489;
for (let i = 1; i <= n; ++i) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
