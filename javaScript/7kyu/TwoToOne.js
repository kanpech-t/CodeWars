function longest(s1, s2) {
  const arr = s1.split("");
  const arr2 = s2.split("");
  const unique = new Set(arr.concat(arr2).sort());
  const result = Array.from(unique).join("");

  return result;
}
