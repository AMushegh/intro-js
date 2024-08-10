let original = "TANNNNNNNNNNNNNNNNNET";
let reversed = "";

// v1
for (let i = original.length - 1; i >= 0; --i) {
  reversed += original[i];
}

console.log(reversed === original);

//v2
let isPalindrome = true;
for (let i = 0; i < original.length / 2; i++) {
  if (original[i] !== original[original.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome);
