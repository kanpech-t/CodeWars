function spinWords(string) {
  const arrayResult = [];
  string.split(" ").forEach((item) => {
    if (item.length >= 5) {
      arrayResult.push(item.split("").reverse().join(""));
    } else {
      arrayResult.push(item);
    }
  });
  return arrayResult.join(" ");
}
