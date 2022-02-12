import React from 'react';
import Layout from "/components/layout";

const title = "SNS用自己紹介";
const sections = [
  {
    title: "活動・趣味",
    children: pug`
      ul
        li 商業BLを讀む
        li #[a(href="/char") OC]を考へ、拙いながら描いたり、#[a(href="https://skeb.jp/@sm") Skeb]で依頼する
        li #[a(href="/fav#game") game]を遊び、偶に#[a(href="https://www.youtube.com/channel/UC5TRwGjAuKZkfCGslswfqXA") YouTube]でV配信する
        li #[a(href="https://github.com/xekri/linguistic") 言語の正書法]を改造する
        li 性器モザイク（刑法第175條）・R18（青少年條例）などの表現規制・人權侵害に抗議する
        li #[a(href="https://www.magwatta.com/users/xDFuZzr1VK1zVObs") 性行爲]（1.7m・54kg・凹・PrEP）
        li アナル擴張（30τ mm）
    `,
  },
  {
    title: "言語",
    children: pug`
      ul
        li JA 日：母語。文語が好き。
        li EN 英：B2。英檢準一級。
        li ZH 華：A2。HSK4級。
        li RU 露：A1。學習中。
    `,
  },
  {
    title: "アカウント",
    children: pug`
      ul
        li: a(href="https://twitter.com/intent/user?user_id=759648849786920960") Twitter
        li: a(href="https://twitter.com/intent/user?user_id=972500177343795200") Twitter（實寫エロ）
        li
          a(href="https://discord.com/invite/J3b8pqg") Discord
          ul: li 權限管理をしてゐるため、誰でも入って構ひません
        li
          a(href="https://odaibako.net/u/sm") お題箱
          ul: li リプライの方が喜びます
        li: a(href="https://www.youtube.com/channel/UC5TRwGjAuKZkfCGslswfqXA") YouTube
        li: a(href="https://skeb.jp/@sm") Skeb
        li: a(href="https://booklog.jp/users/xek/profile") ブクログ
        li: a(href="https://www.amazon.jp/hz/wishlist/ls/2W5PSF711XIWW") Amazon
        li: a(href="https://nuita.net/users/tuFEwqlaelfFak7x") Nuita
        li: a(href="https://www.magwatta.com/users/xDFuZzr1VK1zVObs") Magwatta
        li: a(href="https://smq.hatenablog.com/") Hatena
    `,
  },
  {
    title: "注意",
    children: pug`
      ul
        li 差別的發言をする人はblockします
        li muteを嫌ひますからblockしてください
        li 聯絡はなるべく公開の手段（Twitterのreply）を用ゐ、それが不可能（個人情報を含むなど）の場合のみ非公開の手段（DiscordのDM）を用ゐてください
    `,
  },
  {
    title: "宣言",
    children: pug`
      ul
        li 性表現を「アダルト」と呼ばない（大人だけの物ではないから）
        li 性表現を「不健全」と呼ばない（健康に害が有る證明が無いから）
        li 性表現に學歷・年齡制限を課さない（差別だから）
        li 性器檢閲を「修正」と呼ばない（正しくないから）
    `,
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
    p #[ruby 雪㠀 #[rt ゆきしま]] #[ruby 墨 #[rt すみ]]です
`;

export default Index;