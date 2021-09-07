import React from 'react';
import { Card, Input } from 'antd';
import styles from './SearchBar.module.less';

const { Search } = Input;

const SearchBar = ({ onJudulChange, disabled }) => {
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
        disabled={disabled}
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
