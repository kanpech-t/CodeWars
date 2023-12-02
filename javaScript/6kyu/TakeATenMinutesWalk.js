function isValidWalk(walk) {
  let xAxis = 0;
  let yAxis = 0;
  if (walk.length === 10) {
    walk.forEach((item) => {
      console.log(item);
      if (item === "n") {
        yAxis++;
      } else if (item === "s") {
        yAxis--;
      } else if (item === "e") {
        xAxis++;
      } else {
        xAxis--;
      }
    });
    return xAxis === 0 && yAxis === 0;
  } else {
    return false;
  }
}
