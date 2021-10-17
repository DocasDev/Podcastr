import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#9F75FF" />
            <meta name="description" content="Um site para você ouvir os podcasts do Fala Dev."></meta>

            <link rel='manifest' href='/manifest.json' />
            <link rel="apple-touch-icon" href="/logo-192x192.png" />

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />

            <link rel="shorcout icon" href="favicon.png" type="image/png" />

        </Head>
          <body>
            <Main />
            <NextScript />
          </body>
      </Html>
    );
  }
}