import { Html, Head, Main, NextScript } from 'next/document'

import { siteMeta } from 'lib/site-constants'
const { siteLang } = siteMeta

export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.css"
          integrity="sha384-knaESGLxlQRSHWSJ+ZbTX6/L1bJZWBsBYGb2O+g64XHFuO7CbIj9Pkf1aaVXzIZJ"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
