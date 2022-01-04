import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import date, { dateToString } from "./date";

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
        a(href="#" + id)
          span(data-id=id)= section.title
        if "sections" in section
          Menu(sections=section.sections, parent=id)
`;

const Path = ({ path }) => {
  const segs = path.replace(/^\//, "").split("/");
  return pug`
  span.path
    if path != "/"
      Link(href="/") sumi
      for seg, i in segs
        if i != segs.length - 1
          span /
          Link(href="/" + segs.slice(0, i + 1))= seg
      span /
  `
};

const author = {
  name: "sumi",
  nameJa: "墨",
  twiiter: "enkaust",
  github: "xekri",
};

const onScroll = () => {
  const sections = document.querySelectorAll("main section");
  const currents = [...sections].filter(el => {
    const { top, bottom } = el.getBoundingClientRect()
    return 0 <= top && bottom <= document.documentElement.clientHeight;
  });
  const klass = "current";
  for (const el of document.getElementsByClassName(klass))
    el.classList.remove(klass);
  for (const el of currents)
    document.querySelector(`[data-id="${el.id}"]`).classList.add(klass);
  for (const el of document.querySelectorAll(`.${klass} .${klass}`))
    el.classList.remove(klass);
};

const Layout = ({ title, sections, children }) => {
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    onScroll();

    setInterval(() => {
      document.getElementById("date").innerHTML = dateToString(...date(new Date()));
    }, 1000 / 10);
  });

  const path = useRouter().pathname;
  return pug`
    head
      title= title
      link(rel="icon", href="/sumi.svg")

      meta(name="twitter:site", content="@" + author.twitter)
      meta(name="twitter:title", content=title)
      meta(name="twitter:image", content="/image/char-1/2019-04-23.png")
      meta(name="twitter:card", content="summary")

    .container
      nav
        img(src="/image/sumi.svg")
        #date
        ul
          li
            Path(path=path)
            Link(href="#")= title
            Menu(sections=sections, parent=null)
      main
        div
          header
            h1= title
          ${children}
          Sections(sections=sections, parent=null)
  `;
};

export default Layout;