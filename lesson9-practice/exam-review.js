// __ 1 __
// Number
// String
// Boolean
// undefined
// null
// Object
// BigInt
// Symbol

// __ 2 __
let myName = "Mushegh";

// __ 3 __
// (1 + "undefined" && null - 1) || !"steve jobs";
// ("1undefined" && -1) || false;
// -1 || false;
// -1;

console.log((1 + "undefined" && null - 1) || !"steve jobs");

// __ 5 __
const monthNumber = 8;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
}

// __ 6 __

let number = 4890732;
let sum = 0;

// while (number) {
//   const last = number % 10;
//   sum += last;
//   number = Math.floor(number / 10);
// }

for (let i = number; i; i = Math.floor(i / 10)) {
  const last = i % 10;
  sum += last;
}

console.log(sum);

// __ 7 __
let number2 = 12344321;
let target = 0;

// while (number2Copy) {
//   const last = number % 10;
//   target = target * 10 + last;
//   number2Copy = Math.floor(number2Copy / 10);
// }

for (let i = number; i; i = Math.floor(i / 10)) {
  const last = i % 10;
  target = target * 10 + last;
}

console.log(target >= number);
