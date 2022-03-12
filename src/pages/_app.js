import Theme from '../styles/theme';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SHIV KUMAR JHA - Services with Magento 2X, SHOPIFY 2.0, WOOCOMERCE Technology.</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
