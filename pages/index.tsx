import React from 'react';
import Layout from "/components/Layout"
import Link from 'next/link';

const Index = () => pug`
  Layout
    h2 hello
    .sections
      section
        h3 foo
        p a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
      section
        h3 bar
        p bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
      section
        h3 baz
        p cccccccccccccccccccccccccccccccccccccccccccccccc
      section
        h3 link
        Link(href="sub") sub
`;

export default Index;