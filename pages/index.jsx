
import React from 'react';
import Link from 'next/link';
import Layout from "/components/layout";
import Ruby from "/components/ruby";

const title = "sumi";
const sections = [
  {
    title: "caution",
    children: pug`
      ul
        li i use ‘þ’ as ‘th’
        li i may omit ‘a’ and ‘þe’
        li i use ‘he’ regardless of gender and no ‘she’
    `,
  },
  {
    title: "author",
    sections: [
      {
        title: "name",
        children: pug`
          Ruby(main="墨", above="sumi")
        `,
      },
      {
        title: "about"
        , children: pug`
          ul
            li i programme things (like þis website)
            li i speak japanese (native) and english (B2)
            li i stream gameplay some times
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
          p prefer public method unless thy message contains my personal information
        `
      },
    ],
  },
  {
    title: "character",
    children: pug`
      ul
        li ****** *******
        li: Link(href="char-1") 硯 and 盈
        li: Link(href="char-2") 侖
    `
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
`;

export default Index;