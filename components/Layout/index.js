import CircleDecor from '@components/CircleDecor';
import Navbar from '@components/Navbar';
import React from 'react';
import styles from './Layout.module.less';
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      <Navbar />
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
    </div>
  );
};

export default Layout;
