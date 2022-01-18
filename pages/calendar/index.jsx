import React, { useEffect } from 'react';
import Layout from "/components/layout";
import { getDate } from "/public/date";

const title = "calendar";
const sections = [
  {
    title: "convert",
    children: pug`
      input#in(type="date")
      br
      input#out

      table.center
        tr.vertical
          th
          th wednesday
          th friday
          th eathday
          th tuesday
          th thursday
        for i in [...Array(Math.floor(370 / 5)).keys()]
          tr
            if i < 54 && i % 6 == 0 || 54 <= i && i % 6 == 1
              - const month = Math.floor(i / 6)
              if month < 12
                th(style={textAlign: "right"}, rowSpan=6 + ([8, 11].includes(month) ? 1 : 0))= ["nulliber", "uniber", "duber", "triber", "quadriber", "quinqueber", "sexaber", "september", "october", "november", "december", "undecember"][month]
            for j in [...Array(5).keys()]
              - const n = 5 * i + j
              if [26, 56, 87, 117, 148, 178, 209, 239, 270, 300, 331].flatMap(x => [0, 1, 2, 3, 4].map(d => x + d)).includes(n)
                td(className="yearday-" + n, style={textAlign: "center", borderBottom: "1px solid white"})= n
              else if (n > 365)
                td(style={border: "none"})
              else
                td(className="yearday-" + n, style={textAlign: "center"})= n
    `
  }
];

const Index = ({ Component, props }) => {
  useEffect(() => {
    const d = new Date();
    const today = document.querySelector(".yearday-" + getDate(d.getFullYear(), d.getMonth(), d.getDate()).yearday);
    today.classList.add("today");
    today.style.color = "black";
    today.style.backgroundColor = "white";

    document.getElementById("in").addEventListener("input", ({ target }) => {
      let values = target.value.split("-").map(x => parseInt(x));
      values[1] -= 1;
      const { year, yearday, month, monthday } = getDate(...values);
      document.getElementById("out").value = `${year}/${yearday}(${month}/${monthday})`;
    });
  });

  return pug`
    Layout(sections=sections, title=title)
  `;
}

export default Index;