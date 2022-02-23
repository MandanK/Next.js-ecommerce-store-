import { css } from '@emotion/react';
import Link from 'next/link';

const footWrap = css`
  width: 100%auto;
  margin-top: 55px;
`;

const footStyle = css`
  width: 960px;
  margin: 0 auto;
  padding: 50px 20px 20px;
  box-sizing: border-box;
  font-size: 16;

  a {
    color: #404040;
    font-size: 18px;
    font-weight: bold;
  }
`;

const h1Style = css`
  text-align: center;
  margin-bottom: 35px;
`;

const linkStyle = css``;
const pStyle = css``;

export default function Footer() {
  return (
    <footer>
      <div css={footWrap}>
        <div css={footStyle}>
          <h3 css={h1Style}>BizarreBazaar.com</h3>
          <div css={linkStyle}>
            <Link href="/">
              <a>HOME</a>
            </Link>
            <br />
            <Link href="/animals">
              <a>WEIRDIES</a>
            </Link>
            <br />
            <Link href="/about">
              <a>ABOUT US</a>
            </Link>
            <br />
          </div>
          <p css={pStyle}> © COPYRIGHT 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
