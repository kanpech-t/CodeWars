function digPow(n, p) {
  let result = -1;
  let power = p;
  const arrayNumber = n.toString().split("").map(Number);
  const sumOfArray = arrayNumber.reduce((result, current) => {
    power += 1;
    return result + Math.pow(current, power - 1);
  }, 0);
  if ((sumOfArray / n) % 1 === 0) {
    return sumOfArray / n;
  }
  return result;
}
