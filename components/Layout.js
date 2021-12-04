import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Head from 'next/head';

const Layout =  (props) =>{
  return (
    <div>
    <Container>
    <Head>
      <link
        async rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.2.12/dist/semantic.min.css"/>
      <script async src="//cdn.jsdelivr.net/npm/semantic-ui@2.2.12/dist/semantic.min.js"></script>
    </Head>
      <Header />
      {props.children}
      </Container>
    </div>
  );
};
export default Layout;
