import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
          }

          main {
            margin: 0 60px;
          }
        `}
      />
      {/* Component for each one of the pages */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
