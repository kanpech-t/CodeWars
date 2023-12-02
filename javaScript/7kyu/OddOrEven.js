function oddOrEven(array) {
  const sum = array.reduce((result, current) => result + current, 0);
  return sum % 2 ? "odd" : "even";
}
