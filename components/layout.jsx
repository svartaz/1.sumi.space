import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Section = ({ id, title, children }) => pug`
  section(id=id)
    h2
      a(href="#" + id) #
      |  ${title}
    ${children}
`;

const Sections = ({ sections, parent }) => pug`
  .sections
    for section, i in sections
      - const id = parent ? parent + "-" + i : i;
      Section(id=id, title=section.title)
        if "sections" in section
          Sections(sections=section.sections, parent=id)
        else
          ${section.children}
`;

const Menu = ({ sections, parent }) => pug`
  ul
    for section, i in sections
      - const id = parent ? parent + "-" + i : i;
      li
        Link(href="#" + id)= section.title
        if "sections" in section
          Menu(sections=section.sections, parent=id)
`;

const yearday = date => {
  const year = date.getFullYear();
  const start = new Date(year, 0, 1);
  const diff = date - start;
  const msPerDay = 1000 * 60 * 60 * 24;
  const day = diff / msPerDay;

  return [year + 10000, day];
}

const yeardayString = (year, day, base, precision) => {
  const [dayInt, dayFrac] = day.toString(base).split(".");
  return `${year.toString(base).toUpperCase()}/${dayInt}.${(dayFrac + "0".repeat(precision)).slice(0, precision)}`;
};

const Layout = ({ title, sections }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setInterval(() => {
      setDate(yeardayString(...yearday(new Date()), 10, 5));
    }, 1000 / 10);
  }, [date])

  return pug`
    head
      title= title
    .container
      nav
        img(src="/sumi.svg")
        #date= ${date}
        Menu(sections=sections, parent=null)
      main
        h1= title
        Sections(sections=sections, parent=null)
  `;
};

export default Layout;