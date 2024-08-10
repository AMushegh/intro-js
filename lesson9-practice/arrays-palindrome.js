const arr = [1, 2, 2, 1, 3];

let isPalindrome = true;

for (let i = 0; i < arr.length; ++i) {
  if (arr[i] !== arr[arr.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome);
