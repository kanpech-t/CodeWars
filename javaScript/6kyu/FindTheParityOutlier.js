function findOutlier(integers) {
  const odd = [];
  const even = [];
  let tranArray = integers.forEach((item) => {
    if (item % 2 === 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  });

  if (odd.length === 1) {
    return odd[0];
  } else {
    return even[0];
  }
}
