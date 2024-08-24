function normalizeNumber(number) {
  let numberDigits = String(number).split("");

  let counter = 0;
  for (let i = numberDigits.length - 1; i >= 0; i--) {
    counter++;
    if (counter === 3 && i !== 0) {
      numberDigits[i] = "," + numberDigits[i];
      counter = 0;
    }
  }

  return numberDigits.join("");
}

const a = normalizeNumber(1299909999);
console.log(a);
