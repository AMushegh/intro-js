let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 10, 2, 2, 2];

let sum = arr.reduce((acc, element) => {
  acc += element;
  return acc;
}, 0);

let obj = arr.reduce((acc, el) => {
  if (acc[el]) {
    acc[el]++;
  } else {
    acc[el] = 1;
  }

  return acc;
}, {});

console.log(obj);
