import React from 'react';
import Lottie from 'react-lottie';
import styles from './Notification.module.less';
import animationData from '../../lottie/69380-success-check.json';

const SuccesCreateNotification = ({ title, text }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={styles.notification}>
      <div className={styles.logo}>
        <Lottie options={defaultOptions} width={80} height={80} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export { SuccesCreateNotification };
