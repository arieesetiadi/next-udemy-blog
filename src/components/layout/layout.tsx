import { ReactNode } from 'react';
import Navbar from './navbar';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
