import React from 'react';
import Layout from "/components/layout";
import { T20210510, T20210812, T20210822, T20211212, T20211213, T20211229, T20220102, T20220106, T20220117, T20220131 } from "/components/tweets"

const Img = ({ src, width }) => pug`
  a(href=src): img(src=src, width =width)
`;

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
          td: T20220131
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
            li tattoo on neck (undefined)
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
        T20220102
        T20220106
        T20220117
    `
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
`;

export default Index;