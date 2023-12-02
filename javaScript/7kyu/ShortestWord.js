function findShort(s) {
  let shortWord = Number.MAX_SAFE_INTEGER;
  s.split(" ").forEach((item) => {
    if (item.length < shortWord) shortWord = item.length;
  });
  return shortWord;
}
