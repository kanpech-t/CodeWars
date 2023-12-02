function orderWeight(string) {
  return (newArrayNumber = string
    .split(" ")
    .map((item, index) => {
      return [
        item
          .split("")
          .map(Number)
          .reduce((sum, current) => sum + current, 0),
        index,
        item,
      ];
    })
    .sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0] - b[0];
      } else {
        return a[2].localeCompare(b[2]);
      }
    }))
    .map((item) => item[2])
    .join(" ");
}
