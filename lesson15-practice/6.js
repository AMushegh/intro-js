let a = 5;

function logger() {
  console.log(a);
}

function general(params) {
  let a = 11;
  logger();
}

general();
