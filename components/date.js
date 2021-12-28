const divMod = (x, y) => [Math.floor(x / y), x % y];

const date = (x = null) => {
  const d0 = new Date(-1, 11, 22, 0, 18);
  const d = x || new Date();
  let second = (d.getTime() - d0.getTime()) / 1000;
  let years128, years4, year;
  const secondPerDay = 24 * 60 * 60;
  [years128, second] = divMod(second, ((128 * 365 + (128 / 4 - 1)) * secondPerDay));
  [years4, second] = divMod(second, ((4 * 365 + 1) * secondPerDay));
  [year, second] = divMod(second, 365 * secondPerDay);
  const day = second / secondPerDay;
  return [128 * years128 + 4 * years4 + year, day];
};

export const dateToString = (year, day) => {
  const precision = 5;
  return `${year}/${day.toFixed(precision)}`;
}

export default date;