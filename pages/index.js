import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import vercelLogo from '../public/vercel.svg';

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

        <div>option 1.0: Loading image with Image Component</div>
        <Image src={vercelLogo} alt="Vercel" />

        <div>option 1.1: Loading image with Image Component</div>
        <img src="/vercel.svg" width="283" height="64" alt="Vercel" />

        <div>option 2: Loading image with img tag</div>
        <img src="/vercel.svg" alt="Vercel" />
      </Layout>
    </div>
  );
}
