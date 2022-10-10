import { Footer, Header } from 'components';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main id='main-content'>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
