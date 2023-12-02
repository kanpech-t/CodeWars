var countBits = function (n) {
  let result = n
    .toString(2)
    .split("")
    .reduce((sum, current) => (current === "1" ? sum + 1 : sum), 0);
  return result;
};
