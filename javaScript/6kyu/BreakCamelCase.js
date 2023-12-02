function solution(string) {
  const stringArray = string.split("");

  const indexList = [];
  const result = [];
  stringArray.forEach((item, index) => {
    if (item.toUpperCase() === item) {
      indexList.push(index);
    }
  });

  indexList.push(stringArray.length);
  let start = 0;

  indexList.forEach((item) => {
    result.push(stringArray.slice(start, item).join(""));
    start = item;
  });
  return result.join(" ");
}
