snail = function (array) {
  const dictForMove = {
    right: "down",
    down: "left",
    left: "top",
    top: "right",
  };

  let yAxis = array.length;
  let xAxis = array[0].length;

  let axis = "right";

  let position = [0, 0];
  const arrayResult = [];

  while (arrayResult.length !== array.length * array[0].length) {
    switch (axis) {
      case "right":
        for (let i = 0; i < xAxis; i++) {
          arrayResult.push(array[position[0]][position[1]]);
          position = [position[0], position[1] + 1];
        }
        position = [position[0] + 1, position[1] - 1];
        yAxis--;
        axis = dictForMove[axis];

        break;
      case "down":
        for (let i = 0; i < yAxis; i++) {
          arrayResult.push(array[position[0]][position[1]]);
          position = [position[0] + 1, position[1]];
        }
        position = [position[0] - 1, position[1] - 1];
        xAxis--;
        axis = dictForMove[axis];
        break;
      case "left":
        for (let i = 0; i < xAxis; i++) {
          arrayResult.push(array[position[0]][position[1]]);
          position = [position[0], position[1] - 1];
        }
        position = [position[0] - 1, position[1] + 1];
        yAxis--;
        axis = dictForMove[axis];

        break;
      case "top":
        for (let i = 0; i < yAxis; i++) {
          arrayResult.push(array[position[0]][position[1]]);
          position = [position[0] - 1, position[1]];
        }
        position = [position[0] + 1, position[1] + 1];
        xAxis--;
        axis = dictForMove[axis];
        break;
    }
  }
  return arrayResult;
};
