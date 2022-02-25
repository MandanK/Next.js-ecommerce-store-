import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { cartSum } from '../util/cart';
import { getParsedCookie, setParsedCookie } from '../util/cookies';
import { getAnimals } from '../util/database';

const h1Style = css`
  font-size: 38px;
  font-weight: bold;
  padding-top: 65px;
  text-align: center;
  margin-bottom: 30px;
`;

const itemStyle = css`
  line-height: 2.5;
`;

const aStyle = css`
  color: black;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
`;

const quantStyle = css`
  font-size: 22px;
  font-weight: bold;
  margin-right: 15px;
`;

const priceStyle = css`
  font-size: 18px;
  margin-left: 36px;
  margin-right: 45px;
  margin-bottom: 0px;
`;

const buttonStyle = css`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: flex-end;
  margin-left: 135px;
  margin-top: -31px;
  font-size: 13px;
  font-weight: bold;
  background-color: #f2ae75;
  border: 0.2px solid #b8b8b8;
  width: 65px;
  height: 22px;
  cursor: pointer;
`;

const totalStyle = css`
  font-size: 18px;
  font-weight: bold;
  margin-top: 35px;
  margin-left: 35px;
  margin-bottom: 11px;
`;

const tPriceStyle = css`
  font-size: 18px;
  margin-left: 35px;
`;

const buyButStyle = css`
  display: flex;
  flex-direction: row;
  margin-left: 135px;
  margin-top: -21px;
  margin-bottom: 55px;
  padding-left: 19px;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  background-color: #ffcc4d;
  border: 0.2px solid #b8b8b8;
  width: 65px;
  height: 22px;
  cursor: pointer;
`;

const backButStyle = css`
  display: flex;
  flex-direction: row;
  margin-left: 220px;
  margin-top: -21px;
  margin-bottom: 55px;
  padding-left: 19px;
  margin-top: -76px;
  padding-left: 8px;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  height: 22px;
  background-color: #f2ae75;
  border: 0.2px solid #b8b8b8;
  cursor: pointer;
`;

export default function Cart(props) {
  const [cart, setCart] = useState(props.cart);
  const [detailedCart, setDetailedCart] = useState([{}]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartDetails = cart.map((prod) => {
      const found = props.products.find((element) => element.id === prod.id);
      return {
        id: prod.id,
        name: found.name,
        qty: prod.quantity,
        price: found.price,
      };
    });
    setDetailedCart(cartDetails);
  }, [cart, props.products]);

  useEffect(() => {
    setTotalPrice(cartSum('cart', cart, props.products));
  }, [cart, props.products]);

  function remove(id) {
    const cookieValue = getParsedCookie('cart') || [];

    const newCookie = cookieValue.filter((cookieObject) => {
      return cookieObject.id !== id;
    });
    setDetailedCart(detailedCart);

    setCart(
      newCookie.filter((cartObject) => {
        return cartObject.id !== id;
      }),
    );
    setParsedCookie('cart', newCookie);
  }

  return (
    <Layout>
      <>
        <Head>
          <title>Cart</title>
          <meta name="Cart page" content="The products in your basket" />
        </Head>

        <div>
          <h1 css={h1Style}>Your Cart</h1>
          <br />
          {detailedCart.map((singleItem) => {
            return (
              <div
                key={`products-${singleItem.id}`}
                css={itemStyle}
                data-test-id={`cart-product-${singleItem.id}`}
              >
                <span css={quantStyle}>{singleItem.qty} </span>
                <Link href={`/products/${singleItem.id}`}>
                  <a css={aStyle}>{singleItem.name}</a>
                </Link>{' '}
                <br />
                <span css={priceStyle}>{singleItem.price}</span>
                {/* <Link href={`/images/${singleItem.id}`}>
                  <a>{singleItem.animalImage}</a>
            </Link> */}
                <button
                  css={buttonStyle}
                  onClick={() => remove(singleItem.id)}
                  data-test-id={`cart-product-remove-${singleItem.id}`}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <div css={totalStyle}>Total:</div>
          <span css={tPriceStyle} data-test-id="cart-total">
            {totalPrice.toFixed(2)}
          </span>
          <br />
          <Link href="/checkout" passHref>
            <button
              css={buyButStyle}
              component="a"
              data-test-id="cart-checkout"
            >
              Buy
            </button>
          </Link>
          <Link href="/animals" passHref>
            <button css={backButStyle}>
              <a>Back to Weirdies</a>
            </button>
          </Link>
        </div>
      </>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const cartOnCookies = context.req.cookies.cart || '[]';

  // if there is no likedproducts cookie on the browser we store to an [] otherwise we get the cooke value and parse it
  const cart = JSON.parse(cartOnCookies);
  // Important:
  // - Always return an object from getServerSideProps
  // - Always return a key in that object that is
  // called props

  // 1. get the cookies from the browser
  // 2. pass the cookies to the frontend
  return {
    props: {
      // In the props object, you can pass back
      // whatever information you want
      cart: cart,
      products: await getAnimals(),
    },
  };
}
