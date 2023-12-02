function fakeBin(x) {
  return x
    .split("")
    .map(Number)
    .reduce((result, current) => {
      if (current >= 5) {
        return result + "1";
      } else {
        return result + "0";
      }
    }, "");
}
