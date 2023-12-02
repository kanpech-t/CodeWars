function getCount(str) {
  const countArray = ["a", "e", "i", "o", "u"];
  let result = 0;
  for (i of str) {
    countArray.includes(i) && result++;
  }
  return result;
}
