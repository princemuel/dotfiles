import { Fragment, ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <main id='main-content'>{children}</main>
      <Footer />
    </Fragment>
  );
};

export { Layout };
