function scramble(str1, str2) {
  const stringObj = str1.split("").reduce((result, current) => {
    if (result[current]) {
      result[current] += 1;
    } else {
      result[current] = 1;
    }
    return result;
  }, {});

  console.log(stringObj);

  const string2Array = str2.split("");
  for (let i = 0; i < string2Array.length; i++) {
    if (stringObj[string2Array[i]] === 0 || !stringObj[string2Array[i]]) {
      return false;
    } else {
      stringObj[string2Array[i]] -= 1;
    }
  }

  return true;
}
