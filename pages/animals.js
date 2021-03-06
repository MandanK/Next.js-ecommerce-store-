import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getAnimals } from '../util/database';

const h1Style = css`
  padding-bottom: 40px;
  padding-top: 12px;
  font-size: 15px;
  text-align: center;
`;

const weirdosColoredStyle = css`
  text-align: center;
  float: left;
  width: 377px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  min-height: 200px;
  background-color: #ffcc4d;
  padding: 15px;
  margin: 20px;
  margin-right: 60px;
`;

const weirdosWhiteStyle = css`
  text-align: center;
  float: left;
  width: 377px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 20px;
  min-height: 200px;
  margin-right: 60px;
`;

const productImage = css`
  float: left;
  margin: 0 15px 0 0;
  height: 283px;
  width: 377px;
  margin-right: 20px;
  padding-bottom: 25px;
`;

const productName = css`
  float: none;
  margin: 0 15px 0 0;
  font-family: sans-serif;
  font-weight: bolder;
`;

const aStyle = css`
  color: black;
  font-size: 20px;
  cursor: pointer;
`;

const pStyle = css`
  color: white;
`;

export default function Animals(props) {
  console.log('props', JSON.stringify(props));
  return (
    <Layout>
      <Head>
        <title>Weirdies</title>
        <meta description="A list of products and their descriptions" />
      </Head>
      <div css={h1Style}>
        <h1>Meet Weirdies</h1>
      </div>

      {props.animals.map((animal) => {
        return (
          <div
            key={`animal-${animal.id}`}
            css={
              animal.id % 4 == 0 || animal.id % 4 == 1
                ? weirdosWhiteStyle
                : weirdosColoredStyle
            }
          >
            {/* Dynamic link, eg. /animals/1, / animals/2, etc */}
            <div>
              <Link href={`/animals/${animal.id}`}>
                <a css={aStyle}>
                  <img
                    css={productImage}
                    src={'/images/' + animal.image}
                    alt="BIZARRE"
                  />
                </a>
              </Link>
            </div>
            <div css={productName}>
              <Link href={`/animals/${animal.id}`}>
                <a css={aStyle}>
                  {animal.name}
                  {/* is a {animal.type} with a {animal.accessory} */}
                </a>
              </Link>
            </div>
          </div>
        );
      })}
      <div>
        <p css={pStyle}>g </p>
      </div>
    </Layout>
  );
}
// Code in getServiceSideProps runs only in
// Node.js, and allows you to do fancy things:
// - Read files from file system
// - Connect to a (real) database

// getServerSideProps is exported from your files
// ONLY files in /pages and gets imported by Next.js

export async function getServerSideProps() {
  // Important:
  // Always return an object from getServerSideProps
  // - Always return a key in that object that is called props
  const animals = await getAnimals();
  return {
    props: {
      // In the props object, you can pass back
      // whatever information you want
      animals: animals,
    },
  };
}
