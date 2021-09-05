import { Card, Input } from 'antd';
import React from 'react';
const { Search } = Input;

import styles from './SearchBar.module.less';

const SearchBar = ({ onJudulChange }) => {
  const handleJudulChange = (e) => {
    onJudulChange(e.target.value, 'judul');
  };

  return (
    <Card
      className={styles.search}
      bodyStyle={{ padding: '.6rem' }}
      bordered={false}
    >
      <Search
        onChange={handleJudulChange}
        className={styles.bar}
        enterButton
        bordered={false}
        placeholder='Cari Study Group'
      />
    </Card>
  );
};

export default SearchBar;
