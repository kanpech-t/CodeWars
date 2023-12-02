function high(x) {
  let result = ["", 0];
  x.split(" ").forEach((item) => {
    let value = 0;
    for (data of item) {
      value += data.charCodeAt() - 96;
    }
    if (result[1] < value) {
      result = [item, value];
    }
  });

  return result[0];
}
