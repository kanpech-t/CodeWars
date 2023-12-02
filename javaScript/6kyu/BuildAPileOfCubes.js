function findNb(m) {
  let i = 1;
  let sum = 0;
  let result = -1;
  while (true) {
    sum += Math.pow(i, 3);
    if (sum === m) {
      result = i;
      break;
    } else if (sum > m) {
      break;
    }
    i++;
  }
  return result;
}
