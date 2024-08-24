let array = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [11, 2, 34, 54, 234, 5, 4, 345];

function sumOfArray(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }

  return sum;
}

let result = sumOfArray(array2);
console.log(result);
