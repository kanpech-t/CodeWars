function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);

  return sqrt % 1 ? -1 : Math.pow(sqrt + 1, 2);
}
