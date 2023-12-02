const binaryArrayToNumber = (arr) => {
  arr.reverse();
  console.log(arr);
  return arr.reduce((result, current, index) => {
    const add = current === 1 ? Math.pow(2, index) : 0;
    return result + add;
  }, 0);
};
