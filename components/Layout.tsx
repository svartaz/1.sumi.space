import React from 'react';

const Layout = props => pug`
  .container
    header
      h1 main
    nav
      ul
        li top
        li accounts
        li works
    main
      ${props.children}
`;

export default Layout;