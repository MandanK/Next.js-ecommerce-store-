import { css, Global } from '@emotion/react';

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

            //background-image: url('/images/stars_07.jpg');
            //background-size: 500px, 500px;
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
