function deleteNth(arr, n) {
  if (n === 0) {
    return [];
  }
  const objTotal = {};

  return arr.reduce((result, current) => {
    if (!objTotal[current]) {
      objTotal[current] = 1;
      result.push(current);
    } else {
      if (objTotal[current] < n) {
        objTotal[current] += 1;
        result.push(current);
      }
    }
    return result;
  }, []);
}
