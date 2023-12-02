function XO(str) {
  let xCount = 0;
  let oCount = 0;
  for (i of str) {
    if (i.toLowerCase() === "x") {
      xCount++;
    } else if (i.toLowerCase() === "o") {
      oCount++;
    }
  }
  return xCount === oCount ? true : false;
}
