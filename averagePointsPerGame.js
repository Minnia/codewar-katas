//Rewrite code
const pointsPer48 = (ppg, mpg) => {
  const exactScore = (ppg / mpg) * 48;
  const extrapolatedScore = Math.round(10 * exactScore) / 10;
  return extrapolatedScore;
};

console.log(pointsPer48(12, 20));
