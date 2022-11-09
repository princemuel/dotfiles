import { HomepageTemplate } from 'components/templates';
import Head from 'next/head';
import type { NextPageWithLayout } from 'types';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Prince Muel Portfolio</title>
        <meta
          name='description'
          content='This is the Project Portfolio Website of Samuel Chukwuzube'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HomepageTemplate />
    </>
  );
};

export default Home;
