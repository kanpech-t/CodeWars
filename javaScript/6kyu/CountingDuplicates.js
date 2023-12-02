function duplicateCount(text) {
  let ans = 0;
  const stringObj = text.split("").reduce((result, current) => {
    if (result[current.toLowerCase()]) {
      result[current.toLowerCase()] = result[current.toLowerCase()] + 1;
    } else {
      result[current.toLowerCase()] = 1;
    }
    return result;
  }, {});
  Object.entries(stringObj).forEach((value) => {
    if (value[1] > 1) {
      ans += 1;
    }
  });
  return ans;
}
