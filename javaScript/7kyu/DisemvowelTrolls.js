function disemvowel(str) {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return str
    .split("")
    .filter((item) => !vowel.includes(item))
    .join("");
}
