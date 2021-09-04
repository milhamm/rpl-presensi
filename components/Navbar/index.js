import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.less';
import Logo from '../../public/presensi-logo.png';
import Image from 'next/image';
import cx from 'classnames';
import { Button, Popover } from 'antd';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { useAuth } from '@context/auth';
import Link from 'next/link';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [arrowActive, setArrowActive] = useState(false);
  const { logout } = useAuth();

  const handleScrollDown = (e) => {
    if (e.srcElement === document.body) {
      setArrowActive(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('scroll', handleScrollDown);
    return () => document.body.removeEventListener('scroll', handleScrollDown);
  }, []);

  return (
    <nav className={cx(styles.navbar, { [styles.solid]: active })}>
      <div className={styles.container}>
        <Link href='/'>
          <a>
            <div className={styles.brand}>
              <Image
                src='/presensi-logo.png'
                width='110'
                height='110'
                alt='Presensi Logo'
              />
            </div>
            <div className={styles.name}>Presensi by RPL-GDC</div>
          </a>
        </Link>

        <div className={styles.actions}>
          <Popover
            trigger='click'
            content={
              <Button
                type='text'
                danger
                icon={<LogoutOutlined />}
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Button>
            }
            placement='bottomRight'
            visible={arrowActive}
            onVisibleChange={(v) => setArrowActive(v)}
            overlayInnerStyle={{
              borderRadius: '0.5rem',
              boxShadow:
                '0px 4px 10px rgba(0, 0, 0, 0.25), inset 0px -8px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              className={cx(styles.arrow, {
                [styles['arrow-active']]: arrowActive,
              })}
            >
              <DownOutlined />
            </div>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
