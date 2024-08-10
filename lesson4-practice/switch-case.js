let model = 7;

if (model === 7) {
  console.log(9000);
} else if (model === 6) {
  console.log(8000);
} else if (model === 5) {
  console.log(4500);
} else {
  console.log("unknown");
}

switch (model) {
  case 7:
    console.log(9000);
    break;
  case 6:
    console.log(8000);
    break;
  case 4:
  case 5:
    console.log(4500);
    break;
  default:
    console.log("unknown");
}
