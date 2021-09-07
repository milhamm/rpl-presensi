import React, { useEffect, useState } from 'react';
import {
  Divider,
  Input,
  PageHeader,
  Form,
  Button,
  ConfigProvider,
  Select,
} from 'antd';
import dayjs from 'dayjs';

import { formatLongDate } from '@lib/formatDate';
import { DATE_FORMAT, DATE_FORMAT_NEW, DIVISIONS } from '@constant/index';

import DatePicker from '@components/Datepicker';
import Information from './Information';

import styles from './InformationCard.module.less';

import 'dayjs/locale/id';
import locale from 'antd/lib/locale/id_ID';

let customLocale = locale;
customLocale.DatePicker.lang.ok = 'Simpan';
dayjs.locale('id');

const { Option } = Select;

const InformationCard = ({
  title = 'Laporan Study Group',
  isInput = false,
  data,
  children,
  onSubmit,
  onReset,
  submitText = 'Buat Study Group',
  extra = null,
  loading,
}) => {
  const [form] = Form.useForm();
  const [isSubmitting, setSubmitting] = useState(false);
  const [initialState, setInitialState] = useState({});

  const handleFinishForm = async (data) => {
    const newFormat = {
      ...data,
      tanggal: dayjs(data.tanggal).format(DATE_FORMAT_NEW),
    };
    setSubmitting(true);
    try {
      await onSubmit(newFormat);
    } catch (error) {
      console.log('Handle Finish Form', error);
    }
    setSubmitting(false);
  };

  const handleResetForm = () => {
    form.resetFields();
    onReset();
  };

  useEffect(() => {
    setInitialState(
      data
        ? {
            divisi: data.divisi,
            penutor: data.penutor,
            judul: data.judul,
            tempat: data.tempat,
            deskripsi: data.deskripsi,
            tanggal: dayjs(data.tanggal),
          }
        : {}
    );
  }, [isInput, data]);

  useEffect(() => {
    form.setFieldsValue(initialState);
  }, [initialState, form]);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <PageHeader
          className={styles['page-header']}
          title={title}
          extra={extra}
        />
      </div>

      <Divider />

      <Form
        scrollToFirstError
        initialValues={initialState}
        form={form}
        component={isInput ? 'form' : false}
        onFinish={handleFinishForm}
      >
        <div className={styles.info}>
          <Information
            loading={loading}
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
                <Select
                  className={styles.select}
                  placeholder='Pilih divisi disini'
                >
                  {DIVISIONS.map((val, idx) => (
                    <Option key={idx} value={val}>
                      {val}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            }
          />
          <Information
            loading={loading}
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
            loading={loading}
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
            loading={loading}
            title='Tanggal'
            isInput={isInput}
            content={data ? formatLongDate(data?.tanggal) : ''}
            inputContent={
              <ConfigProvider locale={customLocale}>
                <Form.Item
                  name='tanggal'
                  noStyle={!isInput}
                  rules={[
                    { required: true, message: 'Field Tanggal is required' },
                  ]}
                >
                  <DatePicker
                    format={DATE_FORMAT}
                    disabled={isSubmitting}
                    showTime
                    className={styles.input}
                    placeholder='Pilih tanggal Study Group disini'
                  />
                </Form.Item>
              </ConfigProvider>
            }
          />
          <Information
            loading={loading}
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
            loading={loading}
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
        <Divider />

        {children}

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
              onClick={form.submit}
              className='btn btn-primary'
            >
              {submitText}
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default InformationCard;
