function isPrime(num) {
  let result = true;
  if (num === 0 || num === 1 || num === -1) {
    return false;
  } else if (num > 0) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        result = false;
      }
    }
  } else {
    return false;
  }
  return result;
}
