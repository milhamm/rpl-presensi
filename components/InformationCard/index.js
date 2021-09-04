import { Divider, Input, DatePicker, PageHeader } from 'antd';
import React, { useState } from 'react';
import Information from './Information';
import styles from './InformationCard.module.less';
import { formatLongDate } from '@lib/formatDate';

const InformationCard = ({
  title = 'Laporan Study Group',
  isInput = false,
  data,
  children,
}) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {};

  const handleFormChange = (val) => {
    const name = val.target.name;
    const value = val.target.value;
    setFormData({
      [name]: value,
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <PageHeader className={styles['page-header']} title={title} />
      </div>
      <Divider />
      <div className={styles.info}>
        <Information
          title='Divisi'
          content={data?.divisi}
          isInput={isInput}
          inputContent={
            <Input
              name='divisi'
              value={formData?.divisi}
              onChange={handleFormChange}
              className={styles.input}
              placeholder='Pilih Divisi Study Group'
            />
          }
        />
        <Information
          title='Penutor'
          content={data?.penutor}
          isInput={isInput}
          inputContent={
            <Input
              name='penutor'
              value={formData?.penutor}
              onChange={handleFormChange}
              className={styles.input}
              placeholder='Tulis nama penutor disini'
            />
          }
        />
        <Information
          title='Materi'
          content={data?.judul}
          isInput={isInput}
          inputContent={
            <Input
              name='judul'
              value={formData?.judul}
              onChange={handleFormChange}
              className={styles.input}
              placeholder='Tulis judul Materi Study Group disini'
            />
          }
        />
        <Information
          title='Tanggal'
          isInput={isInput}
          content={data ? formatLongDate(data?.tanggal) : ''}
          inputContent={
            <DatePicker
              name='tanggal'
              value={formData?.tanggal}
              onChange={handleFormChange}
              showTime
              className={styles.input}
              placeholder='Pilih tanggal Study Group disini'
            />
          }
        />
        <Information
          title='Tempat'
          isInput={isInput}
          content={data?.tempat}
          inputContent={
            <Input
              name='tempat'
              value={formData?.tempat}
              onChange={handleFormChange}
              className={styles.input}
              placeholder='Tulis tempat Study Group disini'
            />
          }
        />
      </div>
      <Divider />
      {children}
    </div>
  );
};
export default InformationCard;
