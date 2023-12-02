function countPositivesSumNegatives(input) {
  if (!input) {
    return [];
  }
  let result = [0, 0];
  const negativeArray = input.forEach((current) => {
    if (current > 0) {
      result[0] += 1;
    } else {
      result[1] += current;
    }
  });
  return result[0] === 0 && result[1] === 0 ? [] : result;

  // your code here
}
