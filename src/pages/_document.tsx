import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr" className='scroll-smooth'>
      <Head>
        <link rel="icon" type="image/png" href="images/favicon-32x32.png" />
      </Head>
      <body>
        <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
