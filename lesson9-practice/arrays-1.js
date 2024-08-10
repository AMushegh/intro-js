let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4];

let result = [];
for (let i = 0; i < arr1.length; ++i) {
  for (let j = 0; j < arr2.length; ++j) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
    }
  }
}
console.log(result, "result");

let temp = [];
let temp2 = [];
let temp3 = [];
for (let i = 0; i < arr1.length; ++i) {
  temp.push(arr1[i]);
}
for (let i = 0; i < arr2.length; ++i) {
  temp.push(arr2[i]);
}
for (let i = 0; i < temp.length; ++i) {
  if (temp.lastIndexOf(temp[i]) !== temp.indexOf(temp[i])) {
    temp2.push(temp[i]);
  }
}
for (let i = 0; i < temp2.length; ++i) {
  if (i === temp2.indexOf(temp2[i])) {
    temp3.push(temp2[i]);
  }
}

console.log(temp3, "result2");
