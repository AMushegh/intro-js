let original = "TANNNUNNNNNNIIINNNNNNNNETUUU";

let countOfA = 0;
let countOfE = 0;
let countOfI = 0;
let countOfO = 0;
let countOfU = 0;

for (let i = 0; i <= original.length; ++i) {
  switch (original[i]) {
    case "A":
    case "a":
      countOfA++;
      break;
    case "E":
    case "e":
      countOfE++;
      break;
    case "O":
    case "o":
      countOfO++;
      break;
    case "U":
    case "u":
      countOfU++;
      break;
    case "I":
    case "i":
      countOfI++;
      break;
  }
}
console.log(countOfA, countOfE, countOfI, countOfO, countOfU);
