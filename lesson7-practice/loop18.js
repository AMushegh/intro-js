let number = 1348920932;
let targetCount = 0;
let target = 2;

while (number) {
  let last = number % 10;

  if (last === target) {
    ++targetCount;
  }

  number = (number - last) / 10;
}

console.log(target + " count is " + targetCount);
