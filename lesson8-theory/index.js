// declaration of array
const arr = [3423, "daw"]; // [] via literal symbols
const arr2 = Array("2"); // via Array method
const arr3 = new Array(2); // via Array constructor

// length ---> shows number of elements inside the array
let numbersV1 = [1, 23, 45, 9];
console.log(numbersV1.length);

// how to get first and last elements of the array
const names = ["ashot", "mushegh", "tigran", "gegham"];
console.log(names[0]); // first
console.log(names[names.length - 1]); // last

// getting and setting items
let numbers = [1, 23, 45, 9];
// numbers[4] = 10;
// console.log(numbers);
// numbers[5] = 10;
// numbers[5] = undefined;
// console.log(numbers); // ??

// push adds element from the end of the array
numbers.push(8);
console.log(numbers, "numbers");

// pop removes element from the end of the array
numbers.pop();
console.log(numbers, "numbers");

// unshift adds element form the beginning of the array
numbers.unshift(18290);
console.log(numbers, "numbers");

// shift removes element form the beginning of the array
numbers.shift();
console.log(numbers, "numbers");

// splice
numbers.splice(2, 1, 2, 4);
console.log(numbers);
