let n = 3;
let sum = 0;

// ----1.1----
for (let i = 1; i <= n; ++i) {
  sum += i * i;
}
console.log(sum);

// ----1.2----
let iterator = 1;
sum = 0;
while (iterator <= n) {
  sum += iterator ** 3;
  ++iterator;
}
console.log(sum);

let count = 6;

for (let i = 1; i <= count; ++i) {
  let row = "";
  for (let j = 1; j <= count; ++j) {
    if (
      i === 1 ||
      j === 1 ||
      i === count ||
      j === count ||
      (i === 3 && j === 3) ||
      (i === 3 && j === 4) ||
      (i === 4 && j === 3) ||
      (i === 4 && j === 4)
    ) {
      row += "X ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}
console.log("--------------");
console.log("X X X X X X");
console.log("X         X");
console.log("X   X X   X");
console.log("X   X X   X");
console.log("X         X");
console.log("X X X X X X");
