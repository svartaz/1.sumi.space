import React from 'react';
import Layout from "/components/layout";

const Img = ({ src, width }) => pug`
  a(href=src): img(src=src, width =width)
`;

const T20210510 = () => (<><blockquote class="twitter-tweet" data-theme="dark"><p dir="ltr">生首しか描けない <a href="https://t.co/Tb41nUC7wO">pic.twitter.com/Tb41nUC7wO</a></p>&mdash; 初夏の夜風の涼しさ (@sumiqj) <a href="https://twitter.com/sumiqj/status/1391770750495850498?ref_src=twsrc%5Etfw">May 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20210812 = () => (<><blockquote class="twitter-tweet" data-theme="dark"><p>OC/3 <a href="https://t.co/0h7ue62dgP">pic.twitter.com/0h7ue62dgP</a></p>&mdash; 墨幽 (mӑk qjằv) (@sumiQj) <a href="https://twitter.com/sumiQj/status/1425831886060802056?ref_src=twsrc%5Etfw">August 12, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20210822 = () => (<><blockquote class="twitter-tweet" data-theme="dark"><p>なめ <a href="https://t.co/p5KpAURnLU">pic.twitter.com/p5KpAURnLU</a></p>&mdash; sumi, peisithanatos (@enkaust) <a href="https://twitter.com/enkaust/status/1429464857263239174?ref_src=twsrc%5Etfw">August 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20211212 = () => (<><blockquote class="twitter-tweet" data-theme="dark"><p>sumiくん(<a href="https://twitter.com/enkaust?ref_src=twsrc%5Etfw">@enkaust</a> )のOC勝手に描いて叩きつけた <a href="https://t.co/iJZZ14GbJg">pic.twitter.com/iJZZ14GbJg</a></p>&mdash; PEROLI (@p_eroli) <a href="https://twitter.com/p_eroli/status/1469924091708993536?ref_src=twsrc%5Etfw">December 12, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20211213 = () => (<><blockquote class="twitter-tweet" data-theme="dark"><p>侖 <a href="https://t.co/ShNiKtYAXR">pic.twitter.com/ShNiKtYAXR</a></p>&mdash; 初夏の夜風の涼しさ (@enkaust) <a href="https://twitter.com/enkaust/status/1470417761612734465?ref_src=twsrc%5Etfw">December 13, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>);
const T20211229 = () => (<><blockquote class="twitter-tweet" data-theme="dark"><p><a href="https://twitter.com/hashtag/OC?src=hash&amp;ref_src=twsrc%5Etfw">#OC</a> <a href="https://t.co/nzYgsb8PVO">pic.twitter.com/nzYgsb8PVO</a></p>&mdash; sumi, peisithanatos (@enkaust) <a href="https://twitter.com/enkaust/status/1476165285476708353?ref_src=twsrc%5Etfw">December 29, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>)

const title = "lon";
const sections = [
  {
    title: "about",
    children: pug`
      table.center(style={maxWidth: "50%"})
        tr
          th
          th: img.center(src="/image/char-2/lon.svg", width="48px")
        tr
          th image
          td: T20210812
        tr
          th name
          td 侖 (lòn)
        tr
          th personality
          td logical and ethical
        tr
          th appearance
          td: ul
            li height 1.8--1.9m
            li weight 70--75kg
            li face
              ul
                li dropping eyes
                li thick slanted eyebrows
                li confident and cynical
                li wear
              ul
                li aloha shirt
                li sandals
                li sunglasses
                li piercings
    `
  },
  {
    title: "art",
    children: pug`
      .tiles
        T20210812
        T20210822
        T20211212
        T20211213
        T20211229
    `
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
`;

export default Index;