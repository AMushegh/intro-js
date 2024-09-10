function showSum(arr, cb) {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  // cb = function(arjeq){console.log(arjeq)}
  cb(sum, 99);
}

showSum([1, 2, 3], function (arjeq, t) {
  console.log(arjeq, t);
});
