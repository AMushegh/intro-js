let number = 27498728749;

let mid = "";
let firstDigit;
let lastDigit;
let numberDigit = String(number).length;

while (number) {
  const last = number % 10;

  if (String(number).length === numberDigit) {
    lastDigit = last;
  } else if (String(number).length === 1) {
    firstDigit = last;
  } else {
    mid = last + mid;
    console.log(mid);
  }

  number = (number - last) / 10;
}

console.log(Number(lastDigit + mid + firstDigit));
