let string =
  "adjklawjdlk a djawkjhdakj ahdjkhakjdhwjkawhd hdajkwhdjkahdwa hdakjwhk as ahdj";

let convert = true;
for (let i = 0; i < string.length; ++i) {
  if (convert) {
    const str = string.split("");
    str[i] = String.fromCharCode(string.charCodeAt(i) - 32);
    string = str.join("");
    convert = false;
  }

  if (string[i] === " ") {
    convert = true;
  }
}
