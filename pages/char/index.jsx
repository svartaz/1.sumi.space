
import React from 'react';
import Link from 'next/link';
import Layout from "/components/layout";

const title = "character";
const sections = [];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
    ul
      li ****** *******
      li: Link(href="/char/1") 硯 and 盈
      li: Link(href="/char/2") 侖
`;

export default Index;