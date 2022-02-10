import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import weirdosDatabase from '../util/database';

const weirdosOddStyle = css`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
  min-height: 200px;
  background-color: #d4e4e9;
`;

const weirdosEvenStyle = css`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
  min-height: 200px;
`;

const productImageDiv = css`
  float: left;
  margin: 0 15px 0 0;
  height: 200px;
`;

const productImage = css`
  float: left;
  margin: 0 15px 0 0;
  height: 200px;
`;

const productDescription = css`
  margin: 0 15px 0 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const productName = css`
  margin: 0 15px 0 0;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

export default function Animals(props) {
  console.log('props', JSON.stringify(props));
  return (
    <Layout>
      <Head>
        <title>Weirdies</title>
        <meta description="A list of products and their descriptions" />
      </Head>
      <h1>Meet Weirdies</h1>

      {props.animals.map((animal) => {
        return (
          <div
            key={`animal-${animal.id}`}
            css={animal.id % 2 == 1 ? weirdosEvenStyle : weirdosOddStyle}
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
                <a>
                  {animal.name} is a {animal.type} with a {animal.accessory}
                </a>
              </Link>
            </div>
            <div>
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
