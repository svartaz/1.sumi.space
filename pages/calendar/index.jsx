import React, { useEffect } from 'react';
import Layout from "/components/layout";
import date, { dateToString } from "/components/date";

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
      document.getElementById("out").value = date(new Date(target.value + "T00:00:00")).map(Math.floor).join("/");
    });
  });

  return pug`
    Layout(sections=sections, title=title)
  `;
}

export default Index;