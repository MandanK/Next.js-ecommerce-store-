import { css } from '@emotion/react';
import Link from 'next/link';

const footWrap = css`
  width: 100%;
  margin-top: 35px;
  height: 20%auto;
  padding: 20px 20px;
  border-radius: 20px;
  margin: 8px 8px 25px;
`;

const footStyle = css`
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 16;
  width: 100%;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 999;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('/images/400.jpg');
  background-size: 350px, 350px;

  a {
    color: #404040;
    font-size: 12px;
    font-weight: bold;
    margin-left: 15px;
    cursor: pointer;
  }
`;

const h1Style = css`
  text-align: center;
  margin-bottom: 7px;
  padding-top: 15px;
  font-size: 16px;
  color: #404040;
`;

const pStyle = css`
  text-align: center;
  font-size: 12px;
  color: #404040;
  padding-bottom: 13px;
`;

export default function Footer() {
  return (
    <footer>
      <div css={footWrap}>
        <div css={footStyle}>
          <h3 css={h1Style}>BizarreBazaar.com</h3>
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
          <p css={pStyle}> © COPYRIGHT 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
