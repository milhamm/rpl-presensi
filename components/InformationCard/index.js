import { Divider, Input, DatePicker, PageHeader, Form, Button } from 'antd';
import React, { useImperativeHandle, useRef, useState } from 'react';
import Information from './Information';
import styles from './InformationCard.module.less';
import { formatLongDate } from '@lib/formatDate';
import dayjs from 'dayjs';

const InformationCard = ({
  title = 'Laporan Study Group',
  isInput = false,
  data,
  children,
  onSubmit,
  submitText = 'Buat Study Group',
}) => {
  const [form] = Form.useForm();
  const [isSubmitting, setSubmitting] = useState(false);

  const handleFinishForm = async (data) => {
    const newFormat = { ...data, tanggal: dayjs(data.tanggal).toISOString() };
    setSubmitting(true);
    try {
      await onSubmit(newFormat);
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
  };

  const handleResetForm = () => {
    form.resetFields();
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <PageHeader className={styles['page-header']} title={title} />
      </div>

      <Form form={form} onFinish={handleFinishForm}>
        <div className={styles.info}>
          <Information
            title='Divisi'
            content={data?.divisi}
            isInput={isInput}
            inputContent={
              <Form.Item
                name='divisi'
                noStyle={!isInput}
                rules={[
                  { required: true, message: 'Field Divisi is required' },
                ]}
              >
                <Input
                  disabled={isSubmitting}
                  className={styles.input}
                  placeholder='Pilih Divisi Study Group'
                />
              </Form.Item>
            }
          />
          <Information
            title='Penutor'
            content={data?.penutor}
            isInput={isInput}
            inputContent={
              <Form.Item
                name='penutor'
                noStyle={!isInput}
                rules={[
                  { required: true, message: 'Field Penutor is required' },
                ]}
              >
                <Input
                  disabled={isSubmitting}
                  autoComplete='off'
                  className={styles.input}
                  placeholder='Tulis nama penutor disini'
                />
              </Form.Item>
            }
          />
          <Information
            title='Materi'
            content={data?.judul}
            isInput={isInput}
            inputContent={
              <Form.Item
                name='judul'
                noStyle={!isInput}
                rules={[{ required: true, message: 'Field Judul is required' }]}
              >
                <Input
                  disabled={isSubmitting}
                  autoComplete='off'
                  className={styles.input}
                  placeholder='Tulis judul Materi Study Group disini'
                />
              </Form.Item>
            }
          />
          <Information
            title='Tanggal'
            isInput={isInput}
            content={data ? formatLongDate(data?.tanggal) : ''}
            inputContent={
              <Form.Item
                name='tanggal'
                noStyle={!isInput}
                rules={[
                  { required: true, message: 'Field Tanggal is required' },
                ]}
              >
                <DatePicker
                  disabled={isSubmitting}
                  showTime
                  className={styles.input}
                  placeholder='Pilih tanggal Study Group disini'
                />
              </Form.Item>
            }
          />
          <Information
            title='Tempat'
            isInput={isInput}
            content={data?.tempat}
            inputContent={
              <Form.Item
                name='tempat'
                noStyle={!isInput}
                rules={[
                  { required: true, message: 'Field Tempat is required' },
                ]}
              >
                <Input
                  disabled={isSubmitting}
                  autoComplete='off'
                  className={styles.input}
                  placeholder='Tulis tempat Study Group disini'
                />
              </Form.Item>
            }
          />
          <Information
            title='Deskripsi'
            isInput={isInput}
            content={data?.deskripsi}
            inputContent={
              <Form.Item
                name='deskripsi'
                noStyle={!isInput}
                rules={[
                  { required: true, message: 'Field Deskripsi is required' },
                ]}
              >
                <Input
                  disabled={isSubmitting}
                  autoComplete='off'
                  className={styles.input}
                  placeholder='Tulis deskripsi singkat disini'
                />
              </Form.Item>
            }
          />
        </div>

        {isInput && (
          <div className={styles.footer}>
            <Button
              disabled={isSubmitting}
              type='ghost'
              className='btn'
              onClick={handleResetForm}
            >
              Reset
            </Button>
            <Button
              loading={isSubmitting}
              htmlType='submit'
              className='btn btn-primary'
            >
              {submitText}
            </Button>
          </div>
        )}
        <Divider />
      </Form>

      {children}
    </div>
  );
};

export default InformationCard;
