// function getSumWithLogType(a, b, cb) {
//   cb(a + b, 23456789);
// }

// function logWithUnderScores(a, b) {
//   console.log("_____" + a + "_____" + b + "_____");
// }

// getSumWithLogType(4, 8, function (a) {
//   console.log("....." + a + ".....");
// });

// function sum(a) {
//   return a;
// }

function getSum(a, b, cb) {
  cb(a + b);
}

let result;
getSum(5, 6, function (v) {
  result = v;
});

console.log(result);
