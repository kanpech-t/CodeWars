function sumTwoSmallestNumbers(numbers) {
  let lowestNumber = 9999999999999;
  let secondNumber = 9999999999999;
  numbers.forEach((item) => {
    if (item < lowestNumber) {
      secondNumber = lowestNumber;
      lowestNumber = item;
    } else if (item < secondNumber) {
      secondNumber = item;
    }
  });
  return lowestNumber + secondNumber;
}
