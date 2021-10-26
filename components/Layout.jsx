import React from 'react';
import Head from "/components/Head"
import Link from 'next/link';

const Section = ({ id, title, children }) => pug`
  section(id=id)
    h3= title
    ${children}
`;

export default ({ title, sections }) => pug`
  Head(title=title)
  .container
    //header
    nav
      ul
        li top
          if true
            ul
              for section, i in sections
                li: Link(href="#section-" + i)= section.title
        li works
    main
      h2= title
      .sections
        for section, i in sections
          Section(id="section-" + i, title=section.title)
            ${section.children}
`;
