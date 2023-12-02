var maxSequence = function (arr) {
  let maxSum = 0;
  let currentSum = 0;
  arr.forEach((element) => {
    currentSum = Math.max(currentSum + element, element);
    maxSum = Math.max(currentSum, maxSum);
  });
  return maxSum;
};
