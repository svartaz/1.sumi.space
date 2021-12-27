import React from 'react';
import Head from 'next/head'
import Layout from "/components/layout";

const Relocated = ({ href }) => pug`
  Head
    meta(http-equiv="refresh" content="3; URL=" + href)
  Layout(title="relocated", sections=[])
    a(href=href) new location
`;

export default Relocated;