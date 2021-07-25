import CardSG from '@components/CardSG';
import React from 'react';
import styles from './CardLists.module.less';

const CardLists = ({ data }) => {
  const renderItems = (data) => {
    if (data) {
      return data.map((val, i) => <CardSG key={i} data={val} allowDelete />);
    }
  };

  return <div className={styles.list}>{renderItems(data)}</div>;
};

export default CardLists;
