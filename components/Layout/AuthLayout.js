import React from 'react';
import Image from 'next/image';
import styles from './AuthLayout.module.less';
import Calendar from '../../public/calendar.svg';

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.auth}>
      <div className={styles['auth-welcome']}>
        <h1 className={styles.title}>RPL-GDC</h1>
        <h2 className={styles.subtitle}>presensi</h2>
        <div className={styles.img}>
          <Image src={Calendar} alt='Calendar Icon' />
        </div>
      </div>
      <div className={styles['auth-form']}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
