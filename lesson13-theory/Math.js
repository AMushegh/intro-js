Math.max(1, 43, 1234, 4523);

const MyMath = {
  PI: 3.14,
  max(arr) {
    let max = arr[0];
    for (const element of arr) {
      if (element > max) {
        max = element;
      }
    }
    return max;
  },
};

console.log(MyMath.max([12, 34, 5332]));
