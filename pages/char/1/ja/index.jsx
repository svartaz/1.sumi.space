import React from 'react';
import Link from 'next/link';
import Layout from "/components/layout";
import Ruby from "/components/ruby";
import { TSuzuli, T20181204, T20220202, T20220107, T20201009, T20200317, T20190718, T20201210, T20210718, T20201230 } from "/components/tweets";

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
        div
          T20201210
          a(href="https://skeb.jp/@mkotan/works/4") Skeb
        T20201230
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
            TSuzuli
          td(style={textAlign: "center"})
            T20201009
        tr
          th 外見
          td: ul
            li 1.75m 70kg 23歳
            li 服裝: 無彩色, 單純な物を好む
            li 顏: 無表情. じと目.
            li 體: 健康的. 筋肉質かつ細柄. 色白.
            li 體毛: 薄墨色. 量は平均的だが自ら薄くす.
            li 髮: 薄墨色. 右目隱れ.
            li 男根: 下反り. 勃起時半剝け. 210mm (但し數值は一例で, 視覺上は幾ら大きくとも良い).
            li 耳と#[a(href="https://en.wikipedia.org/wiki/Prince_Albert_(genital_piercing)") プリンスアルバート]のピアス有り
              ul
                li プリンスアルバートは陰莖小帶を切斷せず左手側に反る
                li すべて着脱可能なので繪では省略せられ得る. 插入時はプリンスアルバートを外す.

              - const T = T20200317
              //T
          td: ul
            li 1.85m 80kg 21歳
            li 服裝: 未定（拘る方）
            li 顏: 童顔. 太め 吊り眉. 垂れ目. 顎髭. 惡童めいた笑顏.
            li 體: 健康的. 筋肉質かつ大柄.
            li 體毛: 黑色. やや 毛深め.
            li 髮: 黑色. 兩目隱れだが左目は見𛀁隱れす. やや癖毛.
            li 男根: 上反り. 勃起時半剝け. 180mm (但し數值は一例で, 視覺上は幾ら大きくとも良い).
        tr
          th 概要
          td: ul
            li 秋津大學大學院情報科學科所屬.
            li 一人稱は ‘私’. 心を許すと ‘僕’ になる.
            li 無表情. 口數と友人が少ない. 性交時は比較的表情豐か.
            li 快樂主義者. 性交時は受けを好むが, 盈 (後述) 相手だと攻めが多い. 耳が弱い.
            li 酒と大麻とLSDをほどほどに好む.
            li 休日は讀書 (特にSF) したりピアノを彈いたりする.
          td: ul
            li 秋津大學理學部所屬.
            li 一人稱は ‘僕’
            li 潑溂として社交的で顏が廣いが, 心を許す相手は少ない.
            li 一途なmonoamory. 性交時は受けを好む. 耳や胸が弱い.
            li 酒は弱い.
            li 休日は筋トレ, 映畫鑑賞などをする.
    `
  },
  {
    title: "關係",
    children: pug`
      p
        |盈は硯を大學圖書館の離散數學の棚で何度も見掛け, 一方的に認識してゐた.
        |暫くして盈が硯に聲を掛けて知り合って以來, 二人は穩やかな友人關係を續けてゐる.
      p
        |盈は社交的で學内に築いた多くの友人關係を樂しんでゐるが, 入り組んだ人間關係を器用に立ち回る事を煩はしく思ふ時が有った.
        |硯と會話を重ねる内, 人に阿らない彼の態度を盈は憧れ混じりに好み始めた.
      p
        |盈は多くの週末を硯の家で過ごす.
        |二人はカウチに竝んでビールや大麻のジョイントを喫みながら映畫を觀る事が多い.
        |時にはそれぞれの專門であるプログラミングや數學の話をする.
      p
        |夜は大抵セックスした後に一つのベッドで寢る.
        |本來は硯も盈も受け側を望むが, 硯は攻めに回って盈を樂しませる事に吝かでない.
        |硯は年齢や學年に基づく上限關係と言ったナンセンスには無緣だが, 盈に對しては甘やかす兄の樣な立場を自然と取ってしまふ.
      p
        |盈が戀人を作り會ふ回數が少なくなる期間がしばしば有るが, 全く會はなくなるわけではない.
        |盈が樂しそうに惚氣る時, 硯はそれを微笑ましく聞き, そこに妬みは無い.
        |その間, 硯はいつもと特に變はらぬ性生活を送り色々な相手とセックスする.
      p
        |盈が戀人と別れると, 硯は訪れてくる彼の表情からそれを察する.
        |その樣な時, 盈は何も言はずに硯に抱き着き甘えてきて, 硯はそれを許す.
        |硯は盈が傷附いてゐる所を見たくないが, 多人數との肉體關係を嗜好する自分ではモノガマスな盈が求める物を與へられず, 同じ樣な事が起こる度に齒痒く思ってゐる.
    `,
  },
  {
    title: "注意",
    children: pug`
      ul
        li 以下を除きいかなる副次的創作物も歡迎します
        li 禁止: character名稱の不記載または伏せ字や暗號の使用に據る檢索性の阻礙
        li 禁止†: 性別, 國籍, 年齡などに基づく差別的な限定公開
        li 禁止†: 性器の檢閱 (mosaic, 塗り潰し)
        li 非推獎: 乳房の賦予
        li 非推獎: 下唇に線を描き厚みを持たす

      p †公開platformの規約に要請さる時を除く
    `
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
    ul
      li
        |þis page is a summary of #[Link(href="..") ..] for japanese speaker þat are intending to draw suzuli or mitulu.
        br
        |本pageは硯と盈を描かむとする日本語話者の爲の #[Link(href="..") ..] の要約です
      li
        |any ambiguous description is caused by þe auþor not being an artist, and ye mayst complement it.
        br
        |作者が畫描きでない故に生する曖昧な點は自由に補完してください
`;

export default Index;