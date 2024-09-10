function reverseMutable(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return 36478;
}

function reverseImmutable(arr) {
  let res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }

  return res;
}

let arr = [1, 2, 3];
let a = reverseImmutable(arr);
let b = reverseMutable(arr);
