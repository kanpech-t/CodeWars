function squareSum(numbers) {
  return numbers.reduce((sum, current) => sum + current * current, 0);
}
