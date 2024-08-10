let string =
  "jdaklj dajlkwj daklwhdkahwhjkhgjghjghjghgjkghjkghjggjghjgjdkh akjdhkjahwd hjakhwdkaj";

let temp1 = 0;
let temp2 = string.indexOf(" ");
let max = temp2 - temp1;

for (let index = 0; index < 20; index++) {
  let temp1 = string.indexOf(" ");
  string.replace(" ", "*");
  let temp2 = string.indexOf(" ");
  let maxInner = temp2 - temp1;
  if (maxInner > max) {
    max = maxInner;
  }
}

console.log(max);
