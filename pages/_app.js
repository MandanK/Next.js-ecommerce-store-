import { css, Global } from '@emotion/react';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getItemsInCart } from '../util/cookies';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;

            box-sizing: border-box;
            font-family: sans-serif;
            font-size: 16px;
            line-height: 1.5em;
          }

          main {
            margin: 0 8px;
          }
        `}
      />
      {/* Component for each one of the pages */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
