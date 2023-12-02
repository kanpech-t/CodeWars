function nextBigger(n) {
  let arrayNumber = n.toString().split("").map(Number).reverse();
  let findAns = false;
  let positionToSort = 0;

  const arrayAns = [...arrayNumber];
  arrayNumber.forEach((item, index) => {
    if (!findAns) {
      let minGreater = Number.MAX_SAFE_INTEGER;
      let minGreaterPosition = 0;
      for (let i = 0; i < index; i++) {
        if (minGreater >= arrayNumber[i] && item < arrayNumber[i]) {
          minGreaterPosition = i;
          minGreater = arrayAns[i];
          findAns = true;
        }
      }
      if (findAns) {
        arrayAns[index] = arrayNumber[minGreaterPosition];
        arrayAns[minGreaterPosition] = arrayNumber[index];
        positionToSort = index;
      }
    }
  });

  const sortArray = arrayAns.splice(0, positionToSort).sort((a, b) => b - a);

  return findAns ? Number(sortArray.concat(arrayAns).reverse().join("")) : -1;
  //your code here
}
