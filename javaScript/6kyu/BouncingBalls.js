function bouncingBall(h, bounce, window) {
  if (h < 0 || bounce >= 1 || bounce <= 0 || window >= h) {
    return -1;
  }
  let result = 0;
  let ballPosition = h;
  while (ballPosition > window) {
    result += 1;
    ballPosition *= bounce;
    if (ballPosition > window) {
      result += 1;
    }
  }
  return result;
}
