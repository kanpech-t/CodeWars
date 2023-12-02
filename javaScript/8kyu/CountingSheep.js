function countSheeps(sheep) {
  return sheep.reduce((result, current) => (current ? result + 1 : result), 0);
}
