
import React from 'react';
import Link from 'next/link';
import Layout from "/components/layout";

const title = "sumi";
const sections = [
  {
    title: "novel",
    children: pug`
      ul
        li 1984 < George Orwell
        li Darren Shan < Darren Shan
        li know &lt; 野崎まど
        li あなたの人生の物語 &lt; Ted Chiang
        li [映]アムリタ &lt; 野崎まど
        li 三體シリーズ &lt; 劉慈欣
        li 魚住くんシリーズ &lt; 榎田尤利
        li 空の境界 &lt; 奈須きのこ
        li 虐殺器官 &lt; 伊藤計劃
        li 古典部シリーズ &lt; 米澤穂信
        li 後藤さんのこと &lt; 円城塔
        li 戯言シリーズ &lt; 西尾維新
        li しあわせの理由 &lt; Greg Egan
        li 新世界より &lt; 貴志祐介
        li 天帝シリーズ &lt; 古野まほろ
        li ハーモニー &lt; 伊藤計劃
        li 一つの大陸の物語シリーズ &lt; 時雨沢恵一
        li 凜一シリーズ &lt; 長野まゆみ
    `
  },
  {
    title: "moviee",
    children: pug`
      ul
        li Arrival (2016)
        li Constantine (2005)
        li IDO: INVADED (2019)
        li John Wick (2014)
        li Knives Out (2019)
        li The Queen's Gambit (2020)
        li SK∞ (2021)
        li 羅小黑戰記 (2019)
        li The Matrix: Reloaded (2003)
        li 銀河機攻隊 マジェスティックプリンス (2013)
        li 攻殻機動隊 (1995)
        li さらざんまい (2019)
        li 映画すみっコぐらし とびだす絵本とひみつのコ (2019)
        li 響け！ユーフォニアム (2015)
        li ピンポン (2014)
        li プリティーリズム レインボーライブ (2013)
        li 星合の空 (2019)
        li ヨルムンガンド (2012)
        li 劇場版 少女☆歌劇 レヴュースタァライト (2021)
    `
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
`;

export default Index;