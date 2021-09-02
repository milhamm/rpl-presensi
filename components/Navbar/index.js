import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.less';
import Logo from '../../public/presensi-logo.png';
import Image from 'next/image';
import cx from 'classnames';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleScrollDown = (e) => {
    setActive(e.target.scrollTop > 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollDown, true);
    return () => window.removeEventListener('scroll', handleScrollDown, true);
  }, []);
  return (
    <nav className={cx(styles.navbar, { [styles.solid]: active })}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Image src='/presensi-logo.png' layout='fill' alt='Presensi Logo' />
        </div>
        <span className={styles.name}>Presensi by RPL-GDC</span>
      </div>
    </nav>
  );
};

export default Navbar;
