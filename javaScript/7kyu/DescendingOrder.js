function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .map((item) => Number(item))
      .sort((a, b) => b - a)
      .join("")
  );
}
