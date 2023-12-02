function squareDigits(num) {
  let currentNumber = num;
  let ans = "";
  while (currentNumber > 0) {
    let lastNumber = currentNumber % 10;
    currentNumber = (currentNumber - lastNumber) / 10;
    ans = `${lastNumber * lastNumber}` + ans;
  }
  return ans !== "" ? Number(ans) : 0;
}
