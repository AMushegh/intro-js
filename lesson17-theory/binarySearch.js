// Binary Search Function
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    console.log("dajwkldjawlkjl");
    let mid = Math.floor((left + right) / 2);

    // Check if target is at mid
    if (arr[mid] === target) {
      return mid;
    }

    // If target is greater, ignore the left half
    if (arr[mid] < target) {
      left = mid + 1;
    }

    // If target is smaller, ignore the right half
    else {
      right = mid - 1;
    }
  }

  // Target not found in array
  return -1;
}

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if target is found
    }
  }
  return -1;
}

const arr = new Array(300).fill("").map((_, i) => i + 1);

console.log(binarySearch(arr, 288));
