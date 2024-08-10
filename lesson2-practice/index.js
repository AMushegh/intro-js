const SUM_OF_TRIANGLE_ANGLES = 180;

// exercise 1
let angle1 = 32;
let angle2 = 60;

let angle3 = SUM_OF_TRIANGLE_ANGLES - (angle1 + angle2);
console.log(angle3);

// exercise 2
let salary1 = 900;
let salary2 = 400;
let averageSalary = 800;

let salary3 = 3 * averageSalary - (salary1 + salary2);
console.log(salary3);

// exercise 3
let numberToCheck = 2323;
console.log(numberToCheck % 2 === 0);

// exercise 4
let number = 238;

let lastDigit = number % 10;
number = (number - lastDigit) / 10;
// number = parseInt(number / 10);
// number = Math.floor(number / 10);
let midDigit = number % 10;
number = parseInt(number / 10);

let sumOfDigits = number + midDigit + lastDigit;
console.log(sumOfDigits);

// exercise 5
let number1 = 13;
let number2 = 6;
let max = Math.max(number1, number2);
let min = Math.min(number1, number2);

console.log(+(max % min !== 0));

// exercise 7
let n = 100;

let result = "" + n + 2 * n + 3 * n;
console.log(result);

let q = 12345;

q5 = q % 10;
q1 = q - (q % 10000);
q = (q - (q % 10000)) / 10000;
q4 = q % 100;
q2 = q - (q % 100);
q = (q - (q % 100)) / 100;

p = +("" + q5 + q4 + q + q2 + q1);
console.log(q === p);
