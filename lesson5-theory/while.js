let number = 87392736789;
let sum = 0;

while (number) {
  console.log(number);
  let temp = number % 10;
  sum += temp;
  number = (number - temp) / 10;
}

console.log("sum of digits", sum);

let n = 100000;
let i = 1;
let res = 0;
while (i < n) {
  res += i;
  i += 1;
}

console.log("1-" + n + "sum", res);
