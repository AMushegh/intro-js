let a = 5;
let b = -13;
let c = 6;

if (a !== 0) {
  let disc = b ** 2 - 4 * a * c;

  let x1 = (-b + Math.sqrt(disc)) / (2 * a);
  let x2 = (-b - Math.sqrt(disc)) / (2 * a);

  if (disc === 0) {
    console.log(x1);
  } else if (disc < 0) {
    console.log("Solution does not exists");
  } else {
    console.log(x1, x2);
  }
} else {
  console.log("enter valid constants");
}
