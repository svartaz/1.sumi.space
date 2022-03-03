import React from 'react';
import Link from 'next/link';
import Layout from "/components/layout";
import Ruby from "/components/ruby";
import { T20181204, T20220202, T20220107, T20201009, T20200317, T20190718, T20201210, T20210718, T20201230 } from "/components/tweets";

const Color = ({ color }) => pug`
  span(style={color}) ■
`;

const Img = ({ src }) => pug`
  a(href=src): img(src=src)
`;

const suzuli = {
  heightM: 1.75,
  weightKg: 70,
  names: [
    "硯",
    "suzuli (ja, [sɯzɯɾi])",
    "gin (yue, [ŋiːn˧])",
    "la .ximrok (jbo, [la ʔximrok])",
  ],
};
const mitulu = {
  heightM: 1.85,
  weightKg: 80,
  names: [
    "盈",
    "mitulu (ja, [mitɯɾɯ])",
    "ìg (yue, [ɪŋ˧˩])",
    "la .liktis (jbo, [la ʔliktis])",
  ],
};

const title = "硯と盈";
const sections = [
  {
    title: "畫像",
    children: pug`
      .tiles
        div
          T20181204
          img(src="/image/char-1/2018-12-04.jpg")
        T20190718
        div
          img(src="/image/char-1/2019-07-26.jpg")
          p @AI67448472
        T20201009
        T20201210
        T20201230
        T20210718
        T20220107
        T20220202
    `
  },
  {
    title: "概要",
    children: pug`
      table.center
        tr
          th
          td(style={textAlign: "center"})
            img(src="/image/char-1/suzuli.svg", width="64px")
          td(style={textAlign: "center"})
            img(src="/image/char-1/mitulu.svg", width="64px")
        tr
          th 名
          td 硯 suzuli
          td 盈 mitulu
        tr
          th 畫像
          td(style={textAlign: "center"})
            - const T = T20220202
            //T
          td(style={textAlign: "center"})
            - const T = T20201009
            //T
        tr
          th(rowSpan=2) 概要
          td: ul
            li 大學院生 (情報科學)
            li 自稱: 普段は “わたし”. 心を 許したる 相手には “僕”.
            li 硯を “スズリ君” と 呼ぶ
            li 1.75m 70kg 23歳
            li 無口. 無表情. 一見は 怖くとも 話さば 丁寧・親切なれば 研究室の 後輩には 慕はる
            li 快樂主義者. 性交相手 多し.
            li 大麻と LSDを 好む. 酒をも たまに 飲む (強い).
            li 趣味: 讀書 (特にSF), 程序設計, 鋼琴
            li 性交時 受け 寄り. 首弱し.
          td: ul
            li 大學生 (數學)
            li 自稱: “僕”
            li 盈を “ミツル” と 呼ぶ
            li 1.85m 80kg 21歳
            li 活潑. 陽氣. 顏 廣く 人に 好かれど、心を 許す 相手は 少なし
            li 一途. 一人と 長く 交際するを 求む.
            li 大麻を 好む. 酒も 好めど 弱し.
            li 趣味: 筋力鍛錬, 映畫鑑賞, 服飾
            li 性交時 受け 寄り. 乳首弱し.
        tr
          td(colSpan=2): ul
            li 兩者 受くる と 甘ゆる を 好めど, 硯 盈に 讓り 攻むる 多し.
        tr
          th(rowSpan=2) 外見詳細
          td: ul
            li 服裝: 無彩色, 單純なる を 好む
            li 顏: 無表情. じと目. 威壓的には あらず.
            li 體: 健康的. 筋肉質 かつ 細柄. 色白.
            li 體毛: 薄墨色. 量は 平均的なれど 自ら 薄くす.
            li 髮: 薄墨色. 右目隱れ.
            li 男根: 下反り. 勃起時半剝け. 210mm (但し 數值は 一例なり, 視覺上は 尚 大きくとも 良し).
            li 耳と#[a(href="https://en.wikipedia.org/wiki/Prince_Albert_(genital_piercing)") プリンスアルバート]のピアス有り
              ul
                li プリンスアルバートは 陰莖小帶を 切斷せず, 左手側に 反る
                li すべて 着脱可能なれば 繪にては 省略せられ う. 殊に 插入時は 殆ど 必ず プリンスアルバートを 外す.

              - const T = T20200317
              //T
          td: ul
            li 服裝: 未定（拘る方）
            li 顏: 童顔. 太め 吊り眉. 垂れ目. 顎髭. にやりとせる笑顏.
            li 體: 健康的. 筋肉質 かつ 大柄.
            li 體毛: 黑色. やや 毛深め.
            li 髮: 黑色. 兩目隱れ なれど 左目 見𛀁隱れす. やや 癖毛.
            li 男根: 上反り. 勃起時半剝け. 180mm (但し 數值は 一例なり, 視覺上は 尚 大きくとも 良し).
    `
  },
  {
    title: "注意",
    children: pug`
      ul
        li 以下を 除き いかなる 副次的創作物も 歡迎し 侍り
        li 禁止: character名稱の 不記載 又は 伏せ字や 暗號の 使用に 據る 檢索性の 阻礙
        li 禁止†: 性別, 國籍, 年齡などに 基づく 差別的なる 限定公開
        li 禁止†: 性器の 檢閱 (mosaic, 塗り潰し)
        li 非推獎: 乳房の 賦予
        li 非推獎: 下唇に 線を 描き 厚みを 持たす

      p †公開platformの 規約に 要請せらる 場合ひを 除き 侍り
    `
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
    ul
      li
        |þis page is a summary of #[Link(href="..") ..] for japanese speaker þat are intending to draw suzuli or mitulu.
        br
        |本pageは 硯と盈を 描かむと する 日本語話者の 爲の #[Link(href="..") ..]の 要約に 侍り
      li
        |any ambiguous description is caused by þe auþor not being an artist, and ye mayst complement it.
        br
        |作者の 畫描き ならざれば 生する 曖昧なる 點は 思ふ 儘に 補完し 給へ
`;

export default Index;