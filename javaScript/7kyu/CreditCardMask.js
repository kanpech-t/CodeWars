function maskify(cc) {
  let string = cc.split("");
  for (let i = 0; i < string.length - 4; i++) {
    string[i] = "#";
  }
  return string.join("");
}
