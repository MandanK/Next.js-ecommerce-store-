import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import weirdosDatabase from '../util/database';

const h1Style = css`
  padding-bottom: 20px;
  padding-top: 0.5px;
  font-size: 15px;
  text-align: center;
`;

const productDescriptionStyle = css`
  float: none;
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
  margin: 10px;
  margin-right: 60px;
`;

const weirdosWhiteStyle = css`
  text-align: center;
  float: left;
  width: 377px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  min-height: 200px;
  margin-right: 60px;
`;

const productImageDiv = css`
  text-align: center;
  margin: 0 15px 0 0;
  width: 377px;
  margin-right: 20px;
`;

const productImage = css`
  float: left;
  margin: 0 15px 0 0;
  height: 283px;
  width: 377px;
  margin-right: 20px;
  padding-bottom: 10px;
`;

const productDescription = css`
  margin: 0 15px 0 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const productName = css`
  float: none;
  margin: 0 15px 0 0;
  font-family: sans-serif;
  font-weight: bolder;
`;
const aStyle = css`
  color: black;
  font-size: 17px;
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
            <div css={productImageDiv}>
              <img
                css={productImage}
                src={'/images/' + animal.image}
                alt="BIZARRE"
              />
            </div>
            <div css={productName}>
              <Link href={`/animals/${animal.id}`}>
                <a css={aStyle}>
                  {animal.name}{' '}
                  {/* is a {animal.type} with a {animal.accessory} */}
                </a>
              </Link>
            </div>
            <div css={productDescriptionStyle}>
              <div css={productDescription}>{animal.description}</div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}
// Code in getServiceSideProps runs only in
// Node.js, and allows you to do fancy things:
// - Read files from file system
// - Connect to a (real) database

// getServerSideProps is exported from your files
// ONLY files in /pages and gets imported by Next.js

export function getServerSideProps() {
  // Important:
  // Always return an object from getServerSideProps
  // - Always return a key in that object that is called props

  return {
    props: {
      // In the props object, you can pass back
      // whatever information you want
      animals: weirdosDatabase,
    },
  };
}
