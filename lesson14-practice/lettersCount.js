function mapLetters(text) {
  let res = {};
  let textArr = text.split("");

  for (let i = 0; i < textArr.length; i++) {
    const element = textArr[i];
    if (res[element]) {
      res[element].push(i);
    } else {
      res[element] = [i];
    }
  }

  return res;
}

const a = mapLetters("dodo");
console.log(a);
