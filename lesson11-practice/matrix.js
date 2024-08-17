let matrix = [
  [2, 3, 1, 5, 6],
  [3, 6, 5, 1, 9],
  [3, 4, 5, 5, 2],
  [1, 2, 1, 1, 1],
  [3, 1, 1, 1, 1],
];

function moveMinElementToStart(array) {
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }

  let temp = array[0];
  array[0] = array[minIndex];
  array[minIndex] = temp;
}

for (let i = 0; i < matrix.length; i++) {
  moveMinElementToStart(matrix[i]);
}

console.log(matrix);
