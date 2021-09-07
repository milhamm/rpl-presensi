import React from 'react';
import { List } from 'antd';

import CardSG from '@components/CardSG';

import styles from './CardLists.module.less';

const CardLists = ({ data, loading }) => {
  return (
    <List
      className={styles.list}
      grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 }}
      dataSource={data}
      pagination={false}
      loading={loading}
      renderItem={(item) => (
        <List.Item>
          <CardSG data={item} allowDelete />
        </List.Item>
      )}
    />
  );
};

export default CardLists;
