function cakes(recipe, available) {
  let minUseable = Number.MAX_SAFE_INTEGER;

  Object.entries(recipe).forEach(([key, value]) => {
    if (!available[key]) {
      minUseable = 0;
    } else {
      if (minUseable > Math.floor(available[key] / value)) {
        minUseable = Math.floor(available[key] / value);
      }
    }
  });

  return minUseable;
}
