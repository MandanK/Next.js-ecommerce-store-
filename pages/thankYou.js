import Head from 'next/head';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank you for your order</title>
        <meta
          name="order confirmation"
          content="Order confirmation and thank you page"
        />
      </Head>
      <h1>Congrats mate! You are now officially a weirdo!</h1>

      <Link href="/" passHref>
        <button>Back to Weirdies</button>
      </Link>
    </>
  );
}
