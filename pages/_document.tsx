import { Head, Html, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='robots' content='all' />
        {/* <meta name='color-scheme' content='dark light' /> */}
        <meta
          name='theme-color'
          media='(prefers-color-scheme: light)'
          content='white'
        />
        <meta
          name='theme-color'
          media='(prefers-color-scheme: dark)'
          content='black'
        />
        <meta name='description' content='' />
        <meta name='author' content='Prince Muel' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
