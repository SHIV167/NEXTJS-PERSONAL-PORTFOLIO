import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="SHIV KUMAR JHA - Services with Magento 2X, SHOPIFY 2.0, WOOCOMERCE Technology." />
          <meta name="description" content="Hey there, This is SHIV KUMAR JHA I am Assistant Manager E.COM WEBSITE and Provide End to End Tech. Services with Magento 2X, SHOPIFY 2.0, WOOCOMERCE Technology." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="SHIV KUMAR JHA - Services with Magento 2X, SHOPIFY 2.0, WOOCOMERCE Technology." />
          <meta property="og:description" content="Hey there, This is SHIV KUMAR JHA I am Assistant Manager E.COM WEBSITE and Provide End to End Tech. Services with Magento 2X, SHOPIFY 2.0, WOOCOMERCE Technology." />
          <meta property="og:image" content="https://shivjha.ecomimpressions.com/src/img/profile.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="SHIV KUMAR JHA - Services with Magento 2X, SHOPIFY 2.0, WOOCOMERCE Technology." />
          <meta property="twitter:description" content="Hey there, This is SHIV KUMAR JHA I am Assistant Manager E.COM WEBSITE and Provide End to End Tech. Services with Magento 2X, SHOPIFY 2.0, WOOCOMERCE Technology." />
          <meta property="twitter:image" content="https://shivjha.ecomimpressions.com/src/img/profile.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
