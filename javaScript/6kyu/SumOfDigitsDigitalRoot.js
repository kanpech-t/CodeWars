function digitalRoot(n) {
  let result = n;
  while (result >= 10) {
    let sumResult = result
      .toString()
      .split("")
      .reduce((sum, current) => Number(current) + sum, 0);

    result = sumResult;
  }
  return result;
}
