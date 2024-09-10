function letterCount(text, letter) {
  let count = 0;

  let textLowerCased = text.toLowerCase();
  let letterLoweCased = letter.toLowerCase();

  for (let i = 0; i < textLowerCased.length; i++) {
    if (textLowerCased[i] === letterLoweCased) {
      count++;
    }
  }

  return count;
}

console.log(letterCount("Connect", "c"));
