function getReverse(array) {
  let result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    result.push(element);
  }

  return result;
}

function getReverse2(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
