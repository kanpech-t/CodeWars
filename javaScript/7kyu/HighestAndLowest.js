function highAndLow(numbers) {
  let arrayNumber = numbers.split(" ").map((item) => Number(item));

  return `${Math.max(...arrayNumber)} ${Math.min(...arrayNumber)}`;
}
