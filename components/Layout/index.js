import CircleDecor from '@components/CircleDecor';
import Navbar from '@components/Navbar';
import React, { useEffect } from 'react';
import styles from './Layout.module.less';
import Image from 'next/image';

const Layout = ({ children, hideNavbar = false }) => {
  return (
    <main className={styles.main}>
      {!hideNavbar && <Navbar />}
      <CircleDecor type={1} />
      <CircleDecor type={2} />
      <CircleDecor type={3} />
      <CircleDecor type={4} />
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>Powered by:</p>
          <span>
            <Image src='/rpl-logo.png' width='70' height='70' alt='RPL Logo' />
            <p>RPL-GDC Laboratory</p>
          </span>
        </div>
      </footer>
    </main>
  );
};

export default Layout;
