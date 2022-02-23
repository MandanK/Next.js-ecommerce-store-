import { css } from '@emotion/react';
import Head from 'next/head';
import Router from 'next/router';
import Layout from '../components/Layout';
import { setParsedCookie } from '../util/cookies';

const h1Style = css`
  margin-top: 75px;
  margin-bottom: 55px;
  text-align: center;
`;
const pStyle = css`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 45px;
`;

const formStyle = css`
  font-size: 18px;
  line-height: 2;
  text-align: center;
`;

const labelStyle = css`
  display: flex;
  flex-direction: row;
  text-align: right;
  justify-content: flex-end;
  width: 400px;
  line-height: 35px;
  margin-bottom: 40px;
  margin-right: 100px;
`;

const inputStyle = css`
  color: black;
  font-size: 18px;
`;

const buttonStyle = css`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffcc4d;
  border: 0.2px solid #b8b8b8;
  width: 150px;
  height: 35px;
  margin-bottom: 35px;
  cursor: pointer;
`;

export default function Checkout() {
  async function clearCart() {
    setParsedCookie('cart', []);
    await Router.push('/thankYou');
  }
  return (
    <Layout>
      <>
        <Head>
          <title>Checkout</title>
          <meta name="Checkout" content="Shipment info and purchasing" />
        </Head>
        <h1 css={h1Style}>Checkout</h1>
        <p css={pStyle}>
          You are about to own a weirdie.
          <br />
          "If you feel like a weirdo, it's okay because weirdos rule the world"
          🎉
        </p>
        <form
          css={formStyle}
          onSubmit={(event) => {
            event.preventDefault();
            clearCart().catch((e) => {
              console.log(e);
            });
          }}
        >
          <div css={labelStyle}>
            <div css={inputStyle}>
              <label>
                First name <input data-test-id="checkout-first-name" required />
              </label>
              <br />
              <label>
                Last name <input data-test-id="checkout-last-name" required />
              </label>
              <br />
              <label>
                Email address <input data-test-id="checkout-email" required />
              </label>
              <br />
              <label>
                Postal Address{' '}
                <input data-test-id="checkout-address" required />
              </label>
              <br />
              <label>
                City <input data-test-id="checkout-city" required />
              </label>
              <br />
              <label>
                Postal Code{' '}
                <input data-test-id="checkout-postal-code" required />
              </label>
              <br />
              <label>
                Country <input data-test-id="checkout-country" required />
              </label>
              <br />
              <label>
                Credit Card Number{' '}
                <input data-test-id="checkout-credit-card" required />
              </label>
              <br />
              <label>
                Expiration Date{' '}
                <input data-test-id="checkout-expiration-date" required />
              </label>
              <br />
              <label>
                Security Code{' '}
                <input data-test-id="checkout-security-code" required />
              </label>
              <br />
            </div>
          </div>
          <button css={buttonStyle} data-test-id="checkout-confirm-order">
            Confirm order
          </button>
        </form>
      </>
    </Layout>
  );
}
