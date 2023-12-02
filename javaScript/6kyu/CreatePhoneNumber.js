function createPhoneNumber(numbers) {
  return (
    "(" +
    numbers.reduce((sum, current, index) => {
      if (index === 2) {
        return sum + current + ") ";
      } else if (index === 5) {
        return sum + current + "-";
      } else {
        return sum + current;
      }
    }, "")
  );
}
