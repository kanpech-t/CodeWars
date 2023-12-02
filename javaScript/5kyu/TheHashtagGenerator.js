function generateHashtag(str) {
  let result = "#";
  if (str.trim().length === 0) return false;

  const wordArray = str.split(" ");

  wordArray.forEach((item) => {
    if (item != "") {
      let wordString = item.split("");
      wordString[0] = wordString[0].toUpperCase();
      result += wordString.join("");
    }
  });

  if (result.length > 140) return false;
  return result.trim();
}
