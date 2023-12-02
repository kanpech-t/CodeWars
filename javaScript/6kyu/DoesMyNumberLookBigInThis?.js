function narcissistic(value) {
  const arrayNumber = value.toString().split("").map(Number);
  return (
    value ===
    arrayNumber.reduce(
      (sum, current) => sum + Math.pow(current, arrayNumber.length),
      0
    )
  );
}
