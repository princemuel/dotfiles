import 'assets/styles/main.css';
import { Layout } from 'components';
import Head from 'next/head';
import type { AppPropsWithLayout } from 'types';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <a className='skip-to-content' href='#main-content'>
        Skip To Content
      </a>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
