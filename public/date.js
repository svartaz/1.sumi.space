const msPerDay = 1000 * 60 * 60 * 24;

const isLeap = year =>
  (year - 2000) % 4 == 0 && (year - 2000) % 128 != 0;

const getYear = (oldYear, oldMonth, yearday) =>
  oldYear + (12 / 2 < oldMonth && yearday < 366 / 2
    ? 1
    : 0
  );

const getMonth = yearday => 2 * Math.floor(yearday / 61) + (yearday % 61 < 31 ? 0 : 1);

const monthNames = 'nulli uni du tri quadri quinque sexa septem octo novem decem undecem'.split(' ').map(x => x + 'ber');

const getMonthday = yearday =>
  yearday == 365
    ? 30
    : yearday < 30
      ? yearday
      : (yearday % 61) % 31;

const getYearday = date => {
  const year0 = 1970;
  const date0 = new Date(Date.UTC(year0, 11, 22));
  let day = Math.floor((date.getTime() - date0.getTime()) / msPerDay);
  for (let y = year0 + 1; day >= 0; y++) {
    const daysPerYear = isLeap(y) ? 366 : 365;
    if (day < daysPerYear)
      return day;
    else
      day -= daysPerYear;
  }
}

const getWeekdayName = yearday => (yearday == 365 ? "leap" : ["wednes", "fri", "earth", "tues", "thurs"][yearday % 5]) + "day";

exports.getDate = (y, m, d) => {
  const date = new Date(Date.UTC(y, m, d));
  const yearday = getYearday(date);
  const month = getMonth(yearday)
  return {
    yearday,
    year: 10000 + getYear(date.getFullYear(), date.getMonth(), yearday),
    month,
    monthName: monthNames[month],
    monthday: getMonthday(yearday),
    weekdayName: getWeekdayName(yearday)
  }
};

exports.getDay = date => {
  const date0 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return (date.getTime() - date0.getTime()) / msPerDay;
};
