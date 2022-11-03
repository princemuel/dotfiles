import { icons } from 'common';
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

      <button className='btn btn-primary'>
        <span>
          <icons.arrow.down />
        </span>
        <span>About Me</span>
      </button>

      <button className='btn btn-primary' disabled={true}>
        <span>
          <icons.arrow.down />
        </span>
        <span>About Me</span>
      </button>

      <button className='btn btn-secondary'>Contact Me</button>
      <button className='btn btn-secondary' disabled={true}>
        Contact Me
      </button>
    </div>
  );
};

export default Home;
