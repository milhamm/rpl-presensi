import React from 'react';
import styles from './Information.module.less';

const Information = ({ title, content }) => {
  return (
    <div className={styles.information}>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
};

export default Information;
