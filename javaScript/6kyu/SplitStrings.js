function solution(str) {
  const result = [];
  const stringArray = str.split("");
  stringArray.forEach((item, index) => {
    if (index % 2 === 0) {
      if (stringArray[index + 1]) {
        result.push(`${item}${stringArray[index + 1]}`);
      } else {
        result.push(`${item}_`);
      }
    }
  });
  return result;
}
