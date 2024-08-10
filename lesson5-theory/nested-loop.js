for (let i = 1; i < 10; ++i) {
  for (let j = 1; j < 10; ++j) {
    console.log(i + " * " + j + " = " + i * j);
  }
  console.log("-----------------");
}

for (let i = 0; i < 5; ++i) {
  let str = "";
  for (let j = 0; j < 5; ++j) {
    str += " #";
  }
  console.log(str);
}

let a = 1;
let b = -3;
let c = 2;

let diskriminant = Math.pow(b, 2) - 4 * a * c;
let x1 = -b + (Math.sqrt(diskriminant) / 2) * a;
let x2 = -b - (Math.sqrt(diskriminant) / 2) * a;
console.log(x1);
console.log(x2);
