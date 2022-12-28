let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function decode(string) {
  let coded = string.split("");
  let codeNumber = coded[0];
  coded.splice(0, 1);
  for (let i = 0; i < coded.length; i++) {
    let letter = coded[i];
    let letterIndex = alphabet.indexOf(letter);
    let newLetter = alphabet[letterIndex + Number(codeNumber)];
    coded.splice(i, 1, newLetter);
  }
  let decoded = coded.join("");
  console.log(decoded);
}

decode("5spot");
decode("3brol");
