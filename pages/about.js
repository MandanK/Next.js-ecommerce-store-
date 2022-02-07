import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <div>
      <Layout>
        <Head>
          <title>About</title>
          <meta name="description" content="About the team" />
        </Head>

        <h1>About</h1>
        <p>This is about page</p>
      </Layout>
    </div>
  );
}
