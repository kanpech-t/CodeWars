function findAverage(array) {
  const lenghtOfArray = array.length;

  return lenghtOfArray
    ? array.reduce((result, current) => result + current, 0) / lenghtOfArray
    : 0;
}
