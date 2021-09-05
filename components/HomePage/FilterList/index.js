import DatePicker from '@components/Datepicker';
import { Form, Input, Row, Col } from 'antd';
import React from 'react';
import styles from './FilterList.module.less';
require('./FilterList.less');

const COL_OPTION = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
};

const FilterList = () => {
  return (
    <div className={styles.filter}>
      <Form>
        <Row gutter={[16, 0]} justify='center'>
          <Col {...COL_OPTION}>
            <Form.Item label='Penutor'>
              <Input
                className={styles.input}
                placeholder='Isi Penutor'
                allowClear
              />
            </Form.Item>
          </Col>
          <Col {...COL_OPTION}>
            <Form.Item label='Tanggal'>
              <DatePicker
                className={styles.input}
                placeholder='Pilih Tanggal'
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FilterList;
