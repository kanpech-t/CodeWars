function findUniq(arr) {
  let filterArr = arr.filter((item) => item === arr[0]);
  if (filterArr.length !== 1) {
    filterArr = arr.filter((item) => item !== arr[0]);
  }
  return filterArr[0];
}
