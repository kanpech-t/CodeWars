function validBraces(braces) {
  const dic = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  const bracesStart = ["[", "{", "("];
  let result = true;
  const stack = [];
  for (item of braces) {
    if (bracesStart.includes(item)) {
      stack.push(item);
    } else {
      const popElement = stack.pop();
      if (dic[popElement] !== item) {
        result = false;
      }
    }
  }
  return stack.length === 0 ? result : false;
}
