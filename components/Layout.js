import { css } from '@emotion/react';
import Head from 'next/head';
import Header from './Header';

let wrapper = css`
  width: 1000px;
  margin: auto;
  a {
    text-decoration: none;
  }
`;

export default function Layout(props) {
  return (
    <div css={wrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{props.children}</main>
    </div>
  );
}
