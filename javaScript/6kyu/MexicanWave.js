function wave(str) {
  const stringArray = str.split("");
  const result = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (str.charAt(i) !== " ") {
      let firstPart = str.substr(0, i);
      let lastPart = str.substr(i + 1);

      let newString = firstPart + str.charAt(i).toUpperCase() + lastPart;

      result.push(newString);
    }
  }
  return result;
}
