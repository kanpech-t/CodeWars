function sumIntervals(intervals) {
  const sortArray = intervals.sort((a, b) => a[0] - b[0]);
  let start = 0;
  let stop = -Number.MAX_SAFE_INTEGER;
  let result = 0;
  sortArray.forEach(([startItem, stopItem], index) => {
    if (startItem > stop) {
      result = result + Math.max(0, stop - start);
      start = startItem;
    }
    stop = Math.max(stopItem, stop);
  });

  return (result += stop - start);
}
