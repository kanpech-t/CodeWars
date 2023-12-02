function isPangram(string) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

  return alphabets.every((item) => string.toLowerCase().includes(item));
}
