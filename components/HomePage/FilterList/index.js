import DatePicker from '@components/Datepicker';
import { Form, Input } from 'antd';
import React from 'react';
import styles from './FilterList.module.less';
require('./FilterList.less');

const FilterList = () => {
  return (
    <div className={styles.filter}>
      <Form layout='inline' colon={false}>
        <Form.Item label='Penutor'>
          <Input
            className={styles.input}
            placeholder='Isi Penutor'
            allowClear
          />
        </Form.Item>
        <Form.Item label='Tanggal'>
          <DatePicker className={styles.input} placeholder='Pilih Tanggal' />
        </Form.Item>
      </Form>
    </div>
  );
};

export default FilterList;
