import React from 'react';
import Link from 'next/link';
import Layout from "/components/layout";
import Ruby from "/components/ruby";

const title = "simplified japanese";
const sections = [
  {
    title: "motivation",
    children: pug`
      p.lines
        |japanese language has been simplified through time.
        |classical verbal conjugation classes merged into just two consonantal and vocalic classes (and a few exceptions).
        |two adjectival conjugation became one.
      p.lines
        |yet modern japanese has several redundancies and irregularities, which makes it hard that foreigners and even native students learn the language.
        |in this article i introduce an attempt to further simplify it.
    `,
  },
  {
    title: "orthography",
    children: pug`
      .tables
        table.no-left
          tr
            each c in [..."あいうえお"]
              th= c
          tr
            each c in [..."aiueo"]
              td= c

        table
          tr
            each c in "|あ|か|か゚|さ|た|な|は|ま|や|ら|わ".split("|")
              th= c
          tr
            th tenuis
            each c in ["q", "k", "!g", "s", "t", "!n", "p", "!m", "!j", "!l", "!v"]
              if /^!/.test(c)
                td(rowSpan=2)= c.slice(1)
              else
                td= c
          tr
            th voiced
            each c in ["∅", "c", "z", "d", "b"]
              td= c

      ul
        li ‹q› and ∅
          ul
            li use ∅ at the beginning of native words.
            li use ‹q› at the middle of native words.
            li use ∅ for sino-japonic 以母.
            li use ‹q› for sino-japonic 影母.
        li use ‹g› for sino-japonic 疑母 and velar nasal coda.
        li capitalise every sino-japonic morpheme.
    `,
  },
  {
    title: "grammar",
    sections: [
      {
        title: "word order",
        children: pug`
          ul
            li basic word order is: (noun postposition)* verb.
            li when a noun comes after a verb, the verb qulifies the noun.
        `
      },
      {
        title: "pronoun",
        children: pug`
          .tables
            table
              tr
                th i
                th thou
                th ye (hounorific)
                th he, she, it
                th who, what
                th self
              tr
                td va
                td na
                td namuti
                td ka
                td ta
                td qono
          ul
            li every pronoun except ‹namuti› has a suffix ‹-le› when used as nominative
        `
      },
      {
        title: "postposition",
        children: pug`
          .tables
            table.no-top
              tr
                th nominative
                th accusative
                th dative
                th locative
                th commitative
                th instrumntal
                th ablative
                th adjectival
                th verbal
              tr
                td ∅
                td vo
                td pe
                td ni
                td to
                td nite
                td ju
                td ca
                td nal'
        `
      },
      {
        title: "conjugation",
        children: pug`
          .tables
            table
              tr
                th
                th particle
                th vocalic#[br]#[i 見 see]
                th consonantal#[br]#[i 聞 hear]
                th: i 爲 do
                th: i 來 come
                th adjective#[br]#[i 良 good]
              tr
                th terminal
                td 'l
                td mi'l
                td kik
                td s
                td kul
                td jokal
              tr
                th compound
                td 'i
                td mi
                td kik'i
                td s'i
                td kul'i
                td jokal'i
              tr
                th negation
                td 'azal'
                td mi'zal
                td kik'azal
                td s'azal
                td kul'azal
                td jokal'azal
              tr
                th volitional
                td 'am'
                td mi'm
                td kik'am
                td s'am
                td kul'am
                td jokal'am
              tr
                th potential
                td 'aje'
                td mi'je'l
                td kik'aje'l
                td s'aje'l
                td kul'aje'l
                td jokal'aje'l
              tr
                th passive
                td 'lal'
                td mi'lal
                td kik'al
                td s'al
                td kul'al
                td jokal'al
              tr
                th causative
                td 'sas'
                td mi'sas
                td kik'as
                td s'as
                td kul'as
                td jokal'as
              tr
                th perfective
                td 'in'
                td mi'n
                td kik'in
                td s'in
                td kul'in
                td jokal'in
              tr
                th progressive
                td 'ital'
                td mi'tal
                td kik'ital
                td s'i'tal
                td kul'ital
                td jokal'ital
              tr
                th optative
                td 'itakal'
                td mi'takal
                td kik'itakal
                td s'itakal
                td kul'itakal
                td jokal'itakal
              tr
                th conditional
                td 'aba
                td mi'ba
                td kik'aba
                td s'aba
                td kul'aba
                td jokal'aba
              tr
                th causal
                td 'leba
                td kik'eba
                td mi'leba
                td s'eba
                td kul'eba
                td jokal'eba
              tr
                th imperative
                td 'le
                td mi'le
                td kik'e
                td s'e
                td kul'e
                td jokal'e
              tr
                th nominal
                td 'laku
                td mi'laku
                td kik'aku
                td s'aku
                td kul'aku
                td jokal'aku
              tr
                th nominal
                td 'laku
                td mi'laku
                td kik'aku
                td s'aku
                td kul'aku
                td jokal'aku


          ul
            li we have optinal special contractions in terminal form.
              ul
                li 'azal → 'az
                li 'ital → 'ita
                li ...kal'aku → ...ku
                li ...kal → ...ki
            li terminal form ends in a consonant but pronounce it as if we have ‹-u›

          .tables
            table
              tr
                td did not want to be forced to say
                td ip'as'al'itakal'azal'ital
        `,
      },
      {
        title: "example",
        children: pug`
          .tables
            table
              tr
                td cat
                td neko
              tr
                td black cat
                td kuloki neko
              tr
                td i am a black cat.
                td vale kuloki neko nal.
              tr
                td i eat a fish.
                td vale uvo vo kup.
              tr
                td i grew up in toukyou.
                td vale TugKrieg ni sodat'ita.
              tr
                td i have three friends.
                td vale ni Sam ca tomo al.

          .tables
            table
              tr
                td 汽車は流星の疾きに、二百里の春を貫いて、行くわれを七條のプラツトフオームの上に振り落す。
                td KiSja pa LiuSeg ca pajaku ni, NiPak Li ca palu vo tulanuk'i, juk va vo Sit Deu ca #[i platform] ca upe pe puli-oti'sas.
        `,
      },
    ],
  }
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
`;

export default Index;
