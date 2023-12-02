function sortArray(array) {
  let oddPosition = -1;
  const oddArray = array
    .filter((item) => item % 2 === 1 || item % 2 === -1)
    .sort((a, b) => a - b);

  return array.map((item) => {
    if (item % 2 === 1 || item % 2 === -1) {
      oddPosition++;
      return oddArray[oddPosition];
    }
    return item;
  });
}
