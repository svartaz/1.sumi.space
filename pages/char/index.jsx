import React from 'react';
import Layout from "/components/layout";

const title = "character";
const sections = [
  {
    title: "suzuli"
    , children: pug`
      | suzuli
    `,
  },
  {
    title: "mitulu"
    , children: pug`
      | mitulu
    `,
  },
];

const Index = ({ Component, props }) => pug`
  Layout(sections=sections, title=title)
`;

export default Index;