// __ 1 __
const arr1 = [1, 1, 4, 5, 4, 1];

for (let i = 0; i < arr1.length; i++) {
  if (arr1.indexOf(arr1[i]) === arr1.lastIndexOf(arr1[i])) {
    console.log(arr1[i]);
    break;
  }
}

for (let i = 0; i < arr1.length; i++) {
  const element = arr1[i];

  let countOfElement = 0;
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] === element) {
      countOfElement++;
    }
  }

  if (countOfElement === 1) {
    console.log(element);
    break;
  }
}

// __ 2 __
let arr2 = [-1, -5, 7, 0, 234, -12];
let max = arr2[0];
let min = arr2[2];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > max) {
    max = arr2[i];
  }
  if (arr2[i] < min) {
    min = arr2[i];
  }
}

console.log([min, max]);

// __ 5 __
let a = 2;
let b = 4;
let result = [];

for (let i = a + 1; i < b; i++) {
  if (i % 2 === 0) {
    result.push(i);
  }
}

if (result.length > 0) {
  console.log(result);
} else {
  console.log("There are no even numbers");
}
