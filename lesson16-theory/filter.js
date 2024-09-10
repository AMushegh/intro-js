let arr = [234, 5, 435, 3453, 24, 234, 45, 3, 45, 34, 5, 34, 5, 32, 4, 32];

let a = arr.filter((el, i) => {
  return i % 2 === 0;
});

console.log(arr);
console.log(a);
