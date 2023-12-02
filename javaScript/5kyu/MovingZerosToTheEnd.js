function moveZeros(arr) {
  let zeroCount = 0;
  const arrayResult = [];
  arr.forEach((item) => {
    if (item !== 0) {
      arrayResult.push(item);
    } else {
      zeroCount++;
    }
  });
  for (let i = 0; i < zeroCount; i++) {
    arrayResult.push(0);
  }
  return arrayResult;
}
