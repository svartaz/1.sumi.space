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
    `
  }
];
const Index = ({ Component, props }) => {
  useEffect(() => {
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