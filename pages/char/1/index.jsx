import React from 'react';
import Layout from "/components/layout";
import Ruby from "/components/ruby";
import { T20181204, T20220202, T20220107, T20201009, T20200317, T20190718, T20201210, T20210718, T20201230, T20211031, T20210730, T20210715, T20210709, T20210607, T20210627, T20210510, T20210507, T20210509, T20210315, T20201130, T20201122, T20201021, T20201015, T20201006, T20200909, T20200822, T20200804, T20200731, T20200724, T20200710, T20200608, T20200530, T20200424, T20200414, T20200413, T20190926, T20190831, T20190803 } from "/components/tweets";

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
  age: 23
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
  age: 21
};

const title = "suzuli & mitulu";
const sections = [
  {
    title: "about",
    children: pug`
      table.center(style={maxWidth: "100%"})
        tr
          th
          td(style={textAlign: "center"})
            img.center(src="/image/char-1/suzuli.svg", width="64px")
          td(style={textAlign: "center"})
            img.center(src="/image/char-1/mitulu.svg", width="64px")
        tr
          th name
          for p in [suzuli, mitulu]
            td: ul
              for name in p.names
                li= name
        tr
          th iamge
          td(style={"text-align": "center"})
            T20201230
          td(style={"text-align": "center"})
            T20201009
            p ⚠
        tr
          th age
          for p in [suzuli, mitulu]
            td #{p.age} (born on HC#{p.birthYear}/#{p.birthDay})
        tr
          th height:[m]
          for p in [suzuli, mitulu]
            td #{p.heightM}
        tr
          th weight:[kg]
          for p in [suzuli, mitulu]
            td #{p.weightKg}
        tr
          th ALDH2
          td NN
          td MN
        tr
          th {hair, eye} colour
          td lightgray #[Color(color="lightgray")]
          td black □
        tr
          th location
          td(colSpan=2) japan / prefecture musasi
        tr
          th occupation
          td graduate student in Univ #[Ruby(main="葦原", above="asipara")] (CS)
          td undergraduate student in Univ 葦原 (Math)
        tr
          th secsuality
          td: ul
            li male (in terms of external genitalia and hormonal balance)
            li phallophilia
            li polyamory
          td: ul
            li male (in terms of external genitalia and hormonal balance)
            li phallophilia
            li monoamory
        tr
          th language
          td: ul
            li ja #[Ruby(main="東京",above="TùgKìg")] dialect
            li en-us
            li yue
          td: ul
            li ja #[Ruby(main="京都",above="KìgTòv")] dialect
            li en-gb
            li ru
        tr
          th theme colour
          td: ul
            li black □
            li magenta #[Color(color="magenta")]
          td: ul
            li white #[Color(color="white")]
            li turquoise #[Color(color="turquoise")]
        tr
          th fashion
          td
            ul
              li simple
              li casual
              li monochrome (mainly black)
          td
            p (not determined)

        tr
          th favourite book
          td de l'inconvénient d'être né
          td l'être et le néant ⚠
        tr
          th personality
          td: ul
            li logical
            li consistent
            li tranquil
            li reticent
            li independent
            li prurient
          td: ul
            li logical
            li pragmatic
            li cheerful
            li active
            li social
        tr
          th ideology
          td: ul
            li deontological liberalism
            li promortalism
          td: ul
            li preference utilitarianism
            li antinatalism
        tr
          th how to address þe oþer
          td ミツル (mitulu)
          td スズリ君 (suzuli kun)
        tr
          th miscellaneous
          td: ul
            li masturbateþ once per day on average
            li versatile but prefereþ to bottom
            li likeþ to be choked
            li acteþ sweet during secsual intercourse
            li rarely smokeþ
            li likeþ japanese rocks
          td: ul
            li masturbateþ once every two days on average
            li versatile but prefereþ to bottom
            li haþ sensitive nipples
            li easily geteþ lonely
    `
  },
  {
    title: "wurld",
    children: pug`
      ul
        li souþ korea annecsed and norþ korea
        li in japan
          ul
            li cantonese is more significant þan mandarin since many hongkong people immigrated
            li hemp and LSD are legalised
            li legal family name is disused
            li every one haþ þe right to rename himself
        li mandarin spoken in china and taiwan is old national pronunciation
        li cellular agriculture is advanced. þough animal-based food are ethically avoided in most of nations, dietary culture is not substantially different from our.
    `
  },
  {
    title: "art",
    children: pug`
      .tiles
        T20220202
        T20211031
        T20210730
        T20210718
        T20210715
        div
          T20210709
          p 案
        T20210627
        div
          T20210607
          p 本物はもっと肉附きがよい.
        T20210510
        T20210509
        T20210315
        //<blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://t.co/B063efYM9b">https://t.co/B063efYM9b</a> <a href="https://twitter.com/hashtag/Skeb?src=hash&amp;ref_src=twsrc%5Etfw">#Skeb</a> <a href="https://twitter.com/hashtag/Commission?src=hash&amp;ref_src=twsrc%5Etfw">#Commission</a> <br/><br/>肉駄 <a href="https://t.co/fczOr9hMUL">https://t.co/fczOr9hMUL</a> 先生にイラマされる硯君納品頂きました！　情報量が多くて最高。</p>&mdash; суми, иже ничто създавае (@smiqy) <a href="https://twitter.com/smiqy/status/1357348987833995267?ref_src=twsrc%5Etfw">February 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        T20201230
        //
          div
            p wurk in progress
            a(href="https://twitter.com/intent/user?user_id=948471113448792064") 絹豆腐
            Img(src="/image/char-1/2020-341.png")
        T20201210
        //T20201208
        T20201130
        T20201122
        div
          T20201021
          Img(src="/image/char-1/2020-10-15.png")
        T20201015
        div
          T20201009
          ul
            li 髪は輕い癖毛 (假)
            li 服が思ひ浮かばず困った
        T20201006
        //<blockquote class="twitter-tweet" data-theme="dark"><p>動作test. 首に違和感有るけどまあ可いか (疲れた). <a href="https://t.co/LXSU6zzXIl">pic.twitter.com/LXSU6zzXIl</a></p>&mdash; 男根, 大麻, 安樂死 (@smiqy) <a href="https://twitter.com/smiqy/status/1307708387115675650?ref_src=twsrc%5Etfw">September 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        div
          T20200909
          ul
            li 服が思ひ浮かばず困った
            li 髮は輕い癖毛な氣がする
            li 左目は大抵見𛀁ない
        //<blockquote class="twitter-tweet" data-theme="dark"><p>/* test */ <a href="https://t.co/cdvn2vvAQ3">pic.twitter.com/cdvn2vvAQ3</a></p>&mdash; 硯玄 (сузури) (@SzrHyn) <a href="https://twitter.com/SzrHyn/status/1301920417381191681?ref_src=twsrc%5Etfw">September 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        div
        T20200822
          Img(src="/image/char-1/2020-08-31.png")
        //div
          <blockquote class="twitter-tweet" data-theme="dark"><p>- 硯君の表情 考<br/>- 後輩君 <a href="https://t.co/ngIBx6kHit">pic.twitter.com/ngIBx6kHit</a></p>&mdash; 初夏の夜風の涼しさ (@smiqy) <a href="https://twitter.com/smiqy/status/1296894217789136896?ref_src=twsrc%5Etfw">August 21, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          p mitulu: 後から見るとかわいくない
          p suzuli: 後ろ髪は刈り上げる事も有る
        div
          T20200804
          Img(src="/image/char-1/2020-08-04.png")
          a(href="https://twitter.com/intent/user?user_id=948471113448792064") 絹豆腐
          //img(src="/image/char-1/2020-08-04-1.png")
          //img(src="/image/char-1/2020-08-04-2.png")
        T20200731
        T20200724
        //<blockquote class="twitter-tweet" data-theme="dark"><p>習作 (四肢拘束のつもりだった) <a href="https://t.co/v0mXfg2F6i">pic.twitter.com/v0mXfg2F6i</a></p>&mdash; 初夏の夜風の涼しさ (@sumimq) <a href="https://twitter.com/sumimq/status/1285594214181593088?ref_src=twsrc%5Etfw">July 21, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        //<blockquote class="twitter-tweet" data-theme="dark"><p>硯君 塗った. NSFW. <a href="https://t.co/4c4MhzrkkA">pic.twitter.com/4c4MhzrkkA</a></p>&mdash; 初夏の夜風の涼しさ (@sumimq) <a href="https://twitter.com/sumimq/status/1282856915723157504?ref_src=twsrc%5Etfw">July 14, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        T20200710
        T20200608
        T20200530
        div
          Img(src="/image/char-1/2020-04-25.jpg")
          a(href="https://twitter.com/intent/user?user_id=800300702937399296") 司ろう。
        T20200424
        T20200414
        T20200413
        div
          img(src="/image/char-1/2020-04-08'.jpg")
          p @nikuda2929 (有償)
        div 非公開
        //
          div
            p @inuqw
            Img(src="/image/char-1/2019-11-25.jpg")
            <blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://t.co/WSN80Ga6jB">pic.twitter.com/WSN80Ga6jB</a></p>&mdash; sumi (@melanophil) <a href="https://twitter.com/melanophil/status/1188098375045935104?ref_src=twsrc%5Etfw">October 26, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        div
          Img(src="/image/char-1/2019-10-11.jpg")
          a(href="https://twitter.com/intent/user?user_id=800300702937399296") 司ろう。
        T20190926
        T20190831
        T20190803
        div
          Img(src="/image/char-1/2019-07-26.jpg")
          p @AI67448472
        //<blockquote class="twitter-tweet" data-conversation="none" data-theme="dark"><p>遅くなりましたが誕生日おめでとう御座います!スズリくん描かせて頂きました… <a href="https://t.co/3JS1r6kXg2">pic.twitter.com/3JS1r6kXg2</a></p>&mdash; まぁく (@MK2ma_c) <a href="https://twitter.com/MK2ma_c/status/1154736325766942720?ref_src=twsrc%5Etfw">July 26, 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        T20190718
        div
          Img(src="/image/char-1/2019-04-23.png")
        div
          T20181204
          Img(src="/image/char-1/2018-12-04.jpg")
        div
          p 非公開
          //img(src="/image/char-1/2018-08-01.png")
        T20220107
    `
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
    a(href="ja") 日本語にての概要
`;

export default Index;