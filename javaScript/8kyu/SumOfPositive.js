function positiveSum(arr) {
  let result = 0;

  arr.forEach((item) => {
    if (item > 0) {
      result += item;
    }
  });

  return result;
}
