import CircleDecor from '@components/CircleDecor';
import Navbar from '@components/Navbar';
import React, { useEffect } from 'react';
import styles from './Layout.module.less';

const Layout = ({ children, hideNavbar = false }) => {
  return (
    <main className={styles.main}>
      {!hideNavbar && <Navbar />}
      <CircleDecor type={1} />
      <CircleDecor type={2} />
      <CircleDecor type={3} />
      <CircleDecor type={4} />
      <div className={styles.container}>{children}</div>
    </main>
  );
};

export default Layout;
