
import React from 'react';
import Link from 'next/link';
import Layout from "/components/layout";
import Ruby from "/components/ruby";

const title = "sumi";
const sections = [
  {
    title: "caution",
    children: pug`
      p for english language, i
      ul
        li use ‘þ’ as ‘th’
        li may omit ‘a’ and ‘þe’
        li use ‘he’ regardless of gender and no ‘she’
    `,
  },
  {
    title: "auþor",
    sections: [
      {
        title: "name",
        children: pug`
          Ruby(main="雪㠀 墨", above="jukisima sumi")
        `,
      },
      {
        title: "about"
        , children: pug`
          ul
            li i programme þings (like þis website)
            li i speak japanese (native) and english (B2)
            li i stream gameplay some times
            li i create #[Link(href="https://github.com/xekri/orthography") romanisation and new orthography] for lanauages
            li: Link(href="fav") favourite
        `,
      },
      {
        title: "account",
        children: pug`
          ul
            li: Link(href="https://discord.com/invite/J3b8pqg") discord
            li: Link(href="https://twitter.com/intent/user?user_id=759648849786920960") twitter
            li: Link(href="https://odaibako.net/u/sm") odaibako
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
            li liberalism
            li liberation of sexual expression
            li promortalism
            li veganism
         `,
      },
      {
        title: "contact",
        children: pug`
          p contact me via
          ul
            li public: #[a(href="https://twitter.com/intent/tweet?text=@enkaust") twitter reply]
            li private: discord DM sumi#1757
          p prefer public method unless your message containeþ my personal information
        `
      },
    ],
  },
  {
    title: "character",
    children: pug`
      ul
        li ****** *******
        li: Link(href="char/1") 硯 and 盈
        li: Link(href="char/2") 侖
    `
  },
  {
    title: "miscellaneous",
    children: pug`
      ul
        li: Link(href="convert") unicode alphabet convert
        li: Link(href="calendar") calendar
    `
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
`;

export default Index;