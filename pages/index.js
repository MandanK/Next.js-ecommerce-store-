import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Home</title>
          <meta name="description" content="Welcome to my website" />
        </Head>

        <h1>Home page</h1>
        <p>Home page content</p>
      </Layout>
    </div>
  );
}
