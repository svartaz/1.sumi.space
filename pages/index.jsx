import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Ruby = ({ main, above }) => pug`
  ruby
    |#{main}
    rt= above

`;

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
      - const id = parent == "" ? i : parent + "-" + i;
      Section(id=id, title=section.title)
        if "sections" in section
          Sections(sections=section.sections, parent=id)
        else
          ${section.children}
`;

const Menu = ({ sections, parent }) => pug`
  ul
    for section, i in sections
      - const id = parent == "" ? i : parent + "-" + i;
      li
        Link(href="#" + id)= section.title
        if "sections" in section
          Menu(sections=section.sections, parent=id)
`;

const sections = [
  {
    title: "name"
    , children: pug`
      Ruby(main="墨", above="すみ")
    `,
  },
  {
    title: "about"
    , children: pug`
      ul
        li
          Ruby(main="程序", above="programme")
          |を書く
        li 日本語（母語）と英語（B2）を話す
        li 言語を學ぶ（華、粵、波）
        li
          Ruby(main="電視遊戲", above="video game")
          |を實況する
    `,
  },
  {
    title: "account",
    children: pug`
      ul
        li: Link(href="https://discord.com/invite/J3b8pqg") discord
        li: Link(href="https://twitter.com/intent/user?user_id=759648849786920960") twitter
        li: Link(href="https://marshmallow-qa.com/sumi") marshmallow
        li: Link(href="https://www.youtube.com/channel/UC5TRwGjAuKZkfCGslswfqXA") youtube
        li: Link(href="https://skeb.jp/@sm") skeb
        li: Link(href="https://booklog.jp/users/xek/profile") booklog
        li: Link(href="https://www.amazon.co.jp/gp/profile/amzn1.account.AFZC3TDGALBO2HEX54WQK7PQ2DXA") amazon
     `,
  },
  {
    title: "ideology",
    children: pug`
      ul
        li 自由主義
        li 性の解放
        li 親自殺主義
        li 菜食主義
     `,
  },
  {
    title: "orignal character",
    children: pug`
      ul
        li: Link(href="char/1") suzuli & mitulu
        li: Link(href="char/2") lon
    `
  }
];

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

const Index = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setInterval(() => {
      setDate(yeardayString(...yearday(new Date()), 10, 5));
    }, 1000 / 10);
  }, [date])


  return pug`
    head
      title sumi
    .container
      nav
        img(src="/sumi.svg", alt="logo")
        #date= ${date}
        Menu(sections=sections, parent="")

      main
        h1 sumi

        Sections(sections=sections, parent = "")
  `;
};

export default Index;