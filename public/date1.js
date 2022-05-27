exports.getDate = date => {
  const year0 = 2000;

  const isLeap = year =>
    (year - year0) % 4 == 0 && (year - year0) % 128 != 0;

  // UK winter solstice closest to 2000
  const solstice = new Date(1999, 11, 22);

  const second = (date.getTime() - solstice.getTime()) / 1000;
  let yearDay = Math.floor(second / (60 * 60 * 24));

  let yearDif = 0;
  for (; ; yearDif++) {
    const dayPerYear = isLeap(yearDif) ? 366 : 365;
    if (yearDay < dayPerYear)
      break;
    else {
      yearDay -= dayPerYear;
      continue;
    }
  }

  let month = 0;
  let monthDay = yearDay;
  for (; month < 12; month++) {
    const dayPerMonth = month == 11 && isLeap(yearDif) || month % 2 == 0 ? 30 : 31;
    if (monthDay < dayPerMonth)
      break;
    else {
      monthDay -= dayPerMonth;
      continue;
    }
  }

  const weekDay = yearDay % 5;
  return {
    year: year0 + yearDif + 10000,
    yearDay,
    weekDay,
    weekDayName: ["wednes", "fri", "earth", "tues", "thurs"][weekDay] + 'day',
    month,
    monthName: ['nulli', 'uni', 'du', 'tri', 'quadri', 'quinque', 'sexa', 'septem', 'okto', 'novem', 'decem', 'undecem'][month] + 'ber',
    monthDay,
  };
}

exports.getDay = date => {
  const msPerDay = 1000 * 60 * 60 * 24;
  const date0 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return (date.getTime() - date0.getTime()) / msPerDay;
};
