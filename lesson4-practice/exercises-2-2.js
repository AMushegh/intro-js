let number = 35;

let isMultiple = false;
let multipleCount = 0;
let message = number + " is a multiple of";

if (number % 3 === 0) {
  isMultiple = true;
  multipleCount += 1;

  message += " 3";
}

if (number % 5 === 0) {
  isMultiple = true;
  multipleCount += 1;

  if (isMultiple) {
    message += " and";
  }

  message += " 5";
}

if (number % 7 === 0) {
  isMultiple = true;
  multipleCount += 1;

  if (isMultiple) {
    message += " and";
  }

  message += " 7";
}

if (multipleCount === 3) {
  console.log((number += " is a multiple of 3, 5 or 7."));
} else if (!isMultiple) {
  console.log(number + " is not a multiple of 3, 5 or 7.");
} else {
  console.log(message + ".");
}
