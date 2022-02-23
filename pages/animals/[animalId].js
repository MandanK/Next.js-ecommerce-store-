import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { addShoppingToCookie } from '../../util/cookies';
import { getAnimal } from '../../util/database';

const h1Style = css`
  display: block;
  font-size: 2em;
  font-weight: bolder;
  font-family: sans-serif;
  margin-top: 85px;
  text-align: center;
`;

const imageStyle = css`
  text-align: center;
  float: left;
  width: 508px;
  margin-bottom: 20px;
  min-height: 200px;
  background-color: #ffcc4d;
  padding: 8px;
  margin: 20px;
  margin-right: 60px;
  margin-top: 70px;
  margin-bottom: 90px;
`;

const descriptionStyle = css`
  text-align: center;
  float: left;
  width: 270px;
  padding: 15px;
  margin: 20px;
  min-height: 100px;
  margin-right: 60px;
  margin-bottom: 30px;
  font-family: sans-serif;
`;

const spanStyle = css`
  font-size: 20px;
  font-family: sans-serif;
  text-align: center;
`;
const priceStyle = css`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const inputStyle = css`
  background-color: #fff676;
  font-size: 15px;
  border: 0.2px solid #b8b8b8;
  text-align: center;
`;

const buttonStyle = css`
  text-align: center;
  font-size: 15px;
  background-color: #ffcc4d;
  border: 0.2px solid #b8b8b8;
  margin-top: 15px;
  width: 120px;
  cursor: pointer;
`;

export default function SingleAnimal(props) {
  const [numberToBuy, setNumberToBuy] = useState(1);

  function buy() {
    const inp = document.getElementById('numberToBuy');
    addShoppingToCookie('cart', props.animal.id, numberToBuy);
    inp.value = '1';
  }
  return (
    <Layout cartItemNumber={props.cartItemNumber}>
      <Head>
        <title>{props.animal.name}</title>
        <meta
          description={`${props.animal.name} is a ${props.animal.type} with a ${props.animal.accessory}`}
        />
      </Head>
      <h1 css={h1Style}>{props.animal.name}</h1>
      <img
        css={imageStyle}
        src={'/images/' + props.animal.image}
        alt="Product Images"
      />
      <br />
      <br />
      <div css={descriptionStyle}>{props.animal.description}</div>
      <br />
      <span css={spanStyle}>Price: </span>
      <span css={priceStyle} data-test-id="product-price">
        {props.animal.price}
      </span>
      <br />

      <input
        css={inputStyle}
        id="numberToBuy"
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={numberToBuy}
        onChange={(e) => {
          setNumberToBuy(parseInt(e.target.value));
        }}
      />

      <button
        css={buttonStyle}
        onClick={buy}
        data-test-id="product-add-to-cart"
      >
        Add Weirdies
      </button>
    </Layout>
  );
}

// The parameter `context` gets passed from Next.js
// and includes a bunch of information about the request
export async function getServerSideProps(context) {
  // This is the variable that we get from the URL
  // (anything after the slash)

  const animalId = context.query.animalId;

  const animal = await getAnimal(animalId);
  return {
    props: {
      animal: animal,
    },
  };
}
