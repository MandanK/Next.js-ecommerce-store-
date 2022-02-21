import { css } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getItemsInCart } from '../util/cookies';
import Header from './Header';

const wrapper = css`
  width: 1000px;

  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */

  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */

  a {
    text-decoration: none;
  }
`;

export default function Layout(props) {
  const [cartItemNumber, setCartItemNumber] = useState(0);

  useEffect(() => {
    const itemNumber = getItemsInCart('cart');
    setCartItemNumber(itemNumber);
  });

  useEffect(() => {
    window.addEventListener('click', () => {
      const itemNumber = getItemsInCart('cart');
      setCartItemNumber(itemNumber);
    });
  });
  return (
    <div css={wrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header cartItemNumber={cartItemNumber} />

      <main>{props.children}</main>
    </div>
  );
}
