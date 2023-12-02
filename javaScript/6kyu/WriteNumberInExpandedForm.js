function expandedForm(num) {
  const stringArray = num.toString().split("").map(Number);
  let multiple = stringArray.length - 1;

  return stringArray
    .reduce((result, current) => {
      if (current) {
        result.push(current * Math.pow(10, multiple));
      }
      multiple -= 1;
      return result;
    }, [])
    .join(" + ");
}
