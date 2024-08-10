let grade1 = 20;
let grade2 = 40;
let grade3 = 40;
let passCount = 0;

if (grade1 >= 40) {
  passCount += 1;
}
if (grade2 >= 40) {
  passCount += 1;
}
if (grade3 >= 40) {
  passCount += 1;
}

let averageGrade = (grade1 + grade2 + grade3) / 3;

if (passCount === 3 || (passCount === 2 && averageGrade >= 50)) {
  console.log("Passed");
} else {
  console.log("Not passed");
}
