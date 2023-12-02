function openOrSenior(data) {
  const arrayResult = [];
  data.forEach(([age, handicap]) => {
    arrayResult.push(age >= 55 && handicap > 7 ? "Senior" : "Open");
  });
  return arrayResult;
}
