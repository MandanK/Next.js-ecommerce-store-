import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import animalsDatabase from '../util/database';

const animalStyle = css`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
`;

export default function Animals(props) {
  return (
    <Layout>
      <Head>
        <title>Animals</title>
        <meta description="A list of animals and their accessories" />
      </Head>
      <h1>Animals</h1>

      {props.animals.map((animal) => {
        return (
          <div key={`animal-${animal.id}`} css={animalStyle}>
            {/* Dynamic link, eg. /animals/1, / animals/2, etc */}
            <Link href={`/animals/${animal.id}`}>
              <a>
                {animal.name} is a {animal.type} with a {animal.accessory}
              </a>
            </Link>
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
      animals: animalsDatabase,
    },
  };
}
