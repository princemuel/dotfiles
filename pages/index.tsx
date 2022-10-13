import Head from 'next/head';
import type { NextPageWithLayout } from 'types';

const Home: NextPageWithLayout = () => {
  return (
    <div className='body-1'>
      <Head>
        <title>Prince Muel Portfolio</title>
        <meta
          name='description'
          content='This is the Project Portfolio Website of Samuel Chukwuzube'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Hello</h1>
    </div>
  );
};

export default Home;
