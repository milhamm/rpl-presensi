import { Input } from 'antd';
import React from 'react';
import styles from './Information.module.less';

const Information = ({ title, content, isInput, inputContent = null }) => {
  return (
    <div className={styles.information}>
      <h5>{title}</h5>
      {isInput ? <>{inputContent}</> : <p>{content}</p>}
    </div>
  );
};

export default Information;
