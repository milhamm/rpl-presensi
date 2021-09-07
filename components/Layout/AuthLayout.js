import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useAuth } from '@context/auth';

import styles from './AuthLayout.module.less';

import Calendar from '../../public/calendar.svg';

const AuthLayout = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn && !isLoading) {
      router.push('/');
    }
  }, [isLoggedIn, isLoading, router]);

  if (isLoading) {
    return null;
  }

  if (isLoggedIn) {
    return null;
  }

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
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AuthLayout;
