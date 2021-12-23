import React from 'react';

const Ruby = ({ main, above }) => pug`
  ruby
    |#{main}
    rt= above
`;

export default Ruby;