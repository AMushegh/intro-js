function foo() {
  console.log(a);
  var a = 3456789;
}

console.log(a);
foo();
