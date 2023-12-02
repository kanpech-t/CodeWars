function squareOrSquareRoot(array) {
  return array.map((item) => {
    if (Math.sqrt(item) % 1 === 0) {
      return Math.sqrt(item);
    } else {
      return item * item;
    }
  });
}
