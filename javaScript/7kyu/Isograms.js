function isIsogram(str) {
  const arrayText = [];
  return str.split("").reduce((result, item) => {
    if (!arrayText.includes(item.toLowerCase())) {
      arrayText.push(item.toLowerCase());
      return result;
    } else {
      return false;
    }
  }, true);
}
