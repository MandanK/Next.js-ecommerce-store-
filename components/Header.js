import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  background-color: white;
  padding: 10px 10px;
  border-radius: 20px;
  margin: 8px 8px 20px;
  text-align: center;

  a + a {
    margin-left: 25px;
  }
`;

const logoStyles = css`
  text-align: center;
  margin-bottom: 30px;
`;

const topBarStyle = css`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10001;

  font-size: 18px;

  text-align: center;
  background-color: black;
  color: white;
  padding: 2px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  line-height: 0.1;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
`;

export default function Header() {
  return (
    <header>
      <div class="announcement-bar" css={topBarStyle}>
        <p>Make your life even weirder</p>
      </div>
      <div css={headerStyles}>
        <div css={logoStyles}>
          <img src="/BIZARRE.gif" width="160" alt="Bizarre Bazaar.com Logo" />
        </div>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/animals">
          <a>WEIRDOS</a>
        </Link>
        <Link href="/about">
          <a>ABOUT US</a>
        </Link>
      </div>
    </header>
  );
}
