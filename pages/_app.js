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
            font-size: 17px;
            font-weight: 500;
            line-height: 1.5em;

            background-image: linear-gradient(
                rgba(255, 255, 255, 0.9),
                rgba(255, 255, 255, 0.9)
              ),
              url('/images/952.jpg');
            background-size: 500px, 500px;
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
