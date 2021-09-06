import { Input, Skeleton } from 'antd';
import React from 'react';
import styles from './Information.module.less';

const Information = ({
  title,
  content,
  isInput,
  inputContent = null,
  loading,
}) => {
  return (
    <div className={styles.information}>
      <Skeleton loading={loading} paragraph={{ rows: 1 }} active>
        <h5>{title}</h5>
        {isInput ? <>{inputContent}</> : <p>{content}</p>}
      </Skeleton>
    </div>
  );
};

export default Information;
