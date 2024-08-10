// exercise 1
// let number = -123;

// if (number < 0) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// exercise 2

let number1 = 9;
let number2 = -12;
let target = 8;
let min;
let max;

if (number1 > number2) {
  max = number1;
  min = number2;
} else {
  max = number2;
  min = number1;
}

if (min <= target && target <= max) {
  console.log("in bounds");
} else {
  console.log("out of bounds");
}

let a = 10;
let b = 2;

a += b; // 12
b = a - b; // 10
a -= b; // 2

console.log(a); // 2
console.log(b); // 10

// exercise 4
let name = "hjkjghhj";
if (name.length >= 4) {
  console.log(valid);
} else {
  console.log("invalid");
}
