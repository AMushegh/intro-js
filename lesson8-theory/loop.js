let number = 123321;
let numberCopy = number;

let target = 0;
while (number) {
  let last = number % 10;
  target = target * 10 + last;

  console.log(target);
  number = Math.floor(number / 10);
}

console.log(target, numberCopy);
