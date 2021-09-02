import { Skeleton } from 'antd';
import React from 'react';
import styles from './Card.module.less';

const CardTitle = ({ title, date, loading }) => {
  return (
    <div className={styles.title}>
      <Skeleton paragraph={{ rows: 1 }} loading={loading}>
        <p>{date}</p>
        <h4>{title}</h4>
      </Skeleton>
    </div>
  );
};

export default CardTitle;
