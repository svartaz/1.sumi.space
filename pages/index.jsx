
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
            li #[Ruby(main="程序", above="programme")]を書く
            li 日本語（母語）と英語（B2）を話す
            li 言語を學ぶ（華、粵、波）
            li #[Ruby(main="電視遊戲", above="video game")]を實況する
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
        title: "contact",
        children: pug`
          p 聯絡は以下を使用し給へ
          ul
            li 公開: #[a(href="https://twitter.com/intent/tweet?text=@enkaust") twitter reply]
            li 非公開: discord DM sumi#1757
          p 個人情報を含まない限りは公開手段を優先し給へ
        `
      },
    ],
  },
  {
    title: "character",
    children: pug`
      ul
        li ****** *******
        li: Link(href="char-1") 硯と盈
        li: Link(href="char-2") 侖
    `
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
`;

export default Index;