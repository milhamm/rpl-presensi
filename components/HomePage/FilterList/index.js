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

const FilterList = ({ onPenutorChange, onTanggalChange }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    onPenutorChange(value, 'penutor');
  };

  const handleTanggalChange = (date) => {
    onTanggalChange(date ? date.toISOString() : '', 'tanggal');
  };

  return (
    <div className={styles.filter}>
      <Form>
        <Row gutter={[16, 0]} justify='center'>
          <Col {...COL_OPTION}>
            <Form.Item label='Penutor'>
              <Input
                className={styles.input}
                placeholder='Isi Penutor'
                onChange={handleInputChange}
                allowClear
              />
            </Form.Item>
          </Col>
          <Col {...COL_OPTION}>
            <Form.Item label='Tanggal'>
              <DatePicker
                onChange={handleTanggalChange}
                className={styles.input}
                showTime
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
