import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="fr" className='scroll-smooth'>
      <Head>
        <link rel="icon" type="image/png" href="images/favicon-32x32.png" />
      </Head>
      <body>
        <Script src="../../node_modules/flowbite/dist/flowbite.min.js"></Script >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
