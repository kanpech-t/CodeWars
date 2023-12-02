var uniqueInOrder = function (iterable) {
  let uniqueOrderArray = [];
  let newArray = typeof iterable === "string" ? iterable.split("") : iterable;
  newArray.forEach((item, index) => {
    if (item !== uniqueOrderArray[uniqueOrderArray.length - 1]) {
      uniqueOrderArray.push(item);
    }
  });

  return uniqueOrderArray;
};
