let str = "i love you";

function capitalize(text) {
  let newString = text[0].toUpperCase();
  for (let i = 1; i < text.length; i++) {
    newString += text[i];
  }

  return newString;
}

function capitalizeSentence(text) {
  let wordArr = text.split(" ");

  let res = "";
  for (let i = 0; i < wordArr.length; i++) {
    res += capitalize(wordArr[i]);
    res += " ";
  }
  return res;
}

console.log(capitalizeSentence(str));

// split() String method
console.log("djakld adjwlkajdw ajlwdkj lkadjlkwaj".split(" "));

// join() Array method
console.log([1, 2, 346, 5].join("*"));
