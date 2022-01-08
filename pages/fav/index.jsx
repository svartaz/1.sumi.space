import React from 'react';
import Link from 'next/link';
import Layout from "/components/layout";

const title = "sumi";
const sections = [
  {
    title: "novel (author)",
    children: pug`
      ul
        li 1984 (George Orwell)
        li Darren Shan (Darren Shan)
        li know (野崎まど)
        li あなたの人生の物語 (Ted Chiang)
        li [映]アムリタ (野崎まど)
        li 三體シリーズ (劉慈欣)
        li 魚住くんシリーズ (榎田尤利)
        li 空の境界 (奈須きのこ)
        li 虐殺器官 (伊藤計劃)
        li 古典部シリーズ (米澤穂信)
        li 後藤さんのこと (円城塔)
        li 戯言シリーズ (西尾維新)
        li しあわせの理由 (Greg Egan)
        li 新世界より (貴志祐介)
        li 天帝シリーズ (古野まほろ)
        li ハーモニー (伊藤計劃)
        li 一つの大陸の物語シリーズ (時雨沢恵一)
        li 凜一シリーズ (長野まゆみ)
    `
  },
  {
    title: "comic (author)",
    children: pug`
      ul
        li Artiste
        li GUNSLINGER GIRL
        li HELLSING
        li Landreaall
        li LIMBO THE KING
        li 秋津
        li 或るアホウの一生
        li ヴォイニッチホテル
        li かげきしょうじょ!!
        li 彼方のアストラ
        li 群青にサイレン
        li ゴールデンカムイ
        li 塩が舞い子が舞い
        li しまなみ誰そ彼
        li 呪術廻戦
        li 昭和元禄落語心中
        li スピリット・サークル
        li 葬送のフリーレン
        li ダブル
        li ダンジョン飯
        li ダンス・ダンス・ダンスール
        li チェンソーマン
        li 波よ聞いて
        li はしっこアンサンブル
        li ヒストリエ
        li 氷上のクラウン
        li ひらけ駒！
        li ブルーピリオド
        li ほしとんで
        li 魔法が使えなくても
        li メイドインアビス
        li めしにしましょう
        li らーめん才遊記
        li ロッキンユー!!!
    `
  },
  {
    title: "video (year)",
    children: pug`
      ul
        li Arrival (2016)
        li Constantine (2005)
        li IDO: INVADED (2019)
        li John Wick (2014)
        li Knives Out (2019)
        li Memento (2000)
        li The Imitation Game (2014)
        li The Queen's Gambit (2020)
        li SK∞ (2021)
        li SSSS.DYNΛZENON (2021)
        li The Matrix: Reloaded (2003)
        li 羅小黑戰記 (2019)
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