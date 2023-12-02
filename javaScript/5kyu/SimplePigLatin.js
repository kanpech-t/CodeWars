function pigIt(str) {
  const punctuations = [".", ",", ":", "!", "?"];
  return str
    .split(" ")
    .map((item) => {
      if (punctuations.includes(item)) {
        return item;
      }
      const array = item.split("");
      array.push(array[0]);
      array.shift();
      return array.join("") + "ay";
    })
    .join(" ");
}
