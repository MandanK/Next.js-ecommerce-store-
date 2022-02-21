import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { addShoppingToCookie } from '../../util/cookies';
import { getAnimal } from '../../util/database';

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
        <title>
          {props.animal.name} ({props.animal.type})
        </title>
        <meta
          description={`${props.animal.name} is a ${props.animal.type} with a ${props.animal.accessory}`}
        />
      </Head>
      <h1>
        {props.animal.name} {props.animal.type}
      </h1>
      <img src={'/images/' + props.animal.image} alt="BIZARRE" />
      <div>id: {props.animal.id}</div>
      <div>name: {props.animal.name}</div>
      <div>age: {props.animal.age}</div>
      <div>type: {props.animal.type}</div>
      <div>accessory: {props.animal.accessory}</div>
      <br />
      <span>Price: </span>
      <span data-test-id="product-price">{props.animal.price}</span>
      <span>€</span> <br />
      <input
        id="numberToBuy"
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={numberToBuy}
        onChange={(e) => {
          setNumberToBuy(parseInt(e.target.value));
        }}
      />
      <button onClick={buy} data-test-id="product-add-to-cart">
        add to cart
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
