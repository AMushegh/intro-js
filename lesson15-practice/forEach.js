let arr = [1, 45, 6453, 23, 465, 34];

function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

let sum = 0;
arr.forEach(function (element) {
  sum += element;
});
