function humanReadable(seconds) {
  let hour = 0;
  let min = 0;
  let currentTimeRemand = seconds;
  while (currentTimeRemand >= 60) {
    if (currentTimeRemand >= 3600) {
      hour = Math.floor(currentTimeRemand / 3600);
      currentTimeRemand -= hour * 3600;
    }
    if (currentTimeRemand >= 60) {
      min = Math.floor(currentTimeRemand / 60);
      currentTimeRemand -= min * 60;
    }
  }
  return `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${
    currentTimeRemand < 10 ? `0${currentTimeRemand}` : currentTimeRemand
  }`;
}
