function findOdd(A) {
  const mapArray = {};
  let result = 0;

  for (item of A) {
    if (!mapArray[item]) {
      mapArray[item] = 1;
    } else {
      mapArray[item] = mapArray[item] + 1;
    }
  }

  Object.entries(mapArray).forEach(([key, value]) => {
    if (value % 2 === 1) {
      result = key;
    }
  });
  return Number(result);
}
