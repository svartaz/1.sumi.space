import React from 'react';
import Layout from "/components/Layout"
import Link from 'next/link';

const sections = [
  {
    title: "about",
    children: pug`
      ul
        li programmer
        li speaks japanese and english (B2)
        li
        li
        li
        li
        li
        li
        li
        li
        li
        li
        li
        li
        li
        li
    `,
  },
  {
    title: "accounts",
    children: pug`
      ul
        li: Link(href="https://twitter.com/intent/user?user_id=759648849786920960") twitter
        li
        li
        li
        li
        li
        li
        li
        li
        li
        li
        li
        li
        li
        li
        li
        li
    `,
  },
  {
    title: "nyaan",
    children: pug``,
  },
];

const Index = () => Layout({
  title: "sumi",
  sections,
});

export default Index;