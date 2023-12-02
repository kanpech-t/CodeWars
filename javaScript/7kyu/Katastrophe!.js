function strongEnough(earthquake, age) {
  const buildingStrength = 1000 * Math.pow(0.99, age);
  let earthquakeLevel = earthquake.reduce(
    (total, current) => total * current.reduce((sum, item) => sum + item, 0),
    1
  );
  return buildingStrength >= earthquakeLevel ? "Safe!" : "Needs Reinforcement!";
}
