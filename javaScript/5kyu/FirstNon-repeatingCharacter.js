function firstNonRepeatingLetter(s) {
  let result = "";
  const stringObj = s.split("").reduce((result, current) => {
    if (result[current]) {
      result[current] += 1;
    } else {
      result[current] = 1;
    }
    return result;
  }, {});

  Object.entries(stringObj).forEach(([key, value]) => {
    if (
      value === 1 &&
      result === "" &&
      (!stringObj[key.toLowerCase()] ||
        (stringObj[key.toLowerCase()] === 1 && key === key.toLowerCase())) &&
      (!stringObj[key.toUpperCase()] ||
        (stringObj[key.toUpperCase()] === 1 && key === key.toUpperCase()))
    ) {
      result = key;
    }
  });
  return result;
}
