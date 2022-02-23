import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const h1Style = css`
  font-size: 38px;
  font-weight: bold;
  padding-top: 95px;
  text-align: center;
`;

const buttonStyle = css`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffcc4d;
  border: 0.2px solid #b8b8b8;
  margin-bottom: 80px;
  width: 160px;
  height: 45px;
  margin-left: 418px;
  margin-top: -10px;
  cursor: pointer;
`;

const imageStyle = css`
  text-align: center;
  margin-left: 70px;
  margin-top: 0px;
`;
export default function ThankYou() {
  return (
    <Layout>
      <>
        <Head>
          <title>Thank you for your order</title>
          <meta
            name="order confirmation"
            content="Order confirmation and thank you page"
          />
        </Head>
        <h1 css={h1Style}>Congrats mate! You are now officially a </h1>

        <img
          css={imageStyle}
          src="/images/weirdo.jpg"
          height="350"
          alt="the word weirdo"
        />

        <Link href="/" passHref>
          <button css={buttonStyle}>Back to Weirdies</button>
        </Link>
      </>
    </Layout>
  );
}
