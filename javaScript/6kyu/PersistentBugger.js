function persistence(num) {
  let currentNum = num;
  let ans = 0;
  while (currentNum >= 10) {
    currentNum = currentNum
      .toString()
      .split("")
      .reduce((sum, current) => sum * current, 1);
    ans++;
  }
  return ans;
}
