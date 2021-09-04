import React, { useState } from 'react';
import { Button, Card, message, Result, Switch, Table } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import styles from './DetailPage.module.less';
import useSWR, { mutate } from 'swr';
import { useRouter } from 'next/router';
import fetcher from '@lib/fetcher';

import InformationCard from '@components/InformationCard';
import { SuccesCreateNotification } from '@components/Notification';
import api from '@lib/api';

const checkStyle = {
  color: '#00C242',
  fontSize: '1.3rem',
  fontWeight: 'bold',
};

const columns = [
  {
    title: 'Nama',
    dataIndex: 'nama',
    key: 'nama',
  },
  {
    title: 'Mengikuti',
    dataIndex: 'status',
    key: 'mengikuti',
    // eslint-disable-next-line react/display-name
    render: (data) =>
      data === 'hadir' ? <CheckOutlined style={checkStyle} /> : null,
  },
  {
    title: 'Izin',
    dataIndex: 'status',
    key: 'izin',
    // eslint-disable-next-line react/display-name
    render: (data) =>
      data === 'izin' ? <CheckOutlined style={checkStyle} /> : null,
  },
  {
    title: 'Sakit',
    dataIndex: 'status',
    key: 'sakit',
    // eslint-disable-next-line react/display-name
    render: (data) =>
      data === 'sakit' ? <CheckOutlined style={checkStyle} /> : null,
  },
  {
    title: 'Tanpa Keterangan',
    dataIndex: 'status',
    key: 'tanpaKeterangang',
    // eslint-disable-next-line react/display-name
    render: (data) =>
      data === 'tanpa keterangan' ? <CheckOutlined style={checkStyle} /> : null,
  },
];

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [isEditing, setEditing] = useState(false);

  const handleToggleEditing = () => {
    setEditing(!isEditing);
  };

  const handleSubmit = (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.put(`/studygroup/${id}`, data);
        message.open({
          className: 'notification-success',
          content: (
            <SuccesCreateNotification title='Study Group telah berhasil diubah!' />
          ),
          icon: null,
        });
        resolve();
        setEditing(false);
        mutate(id ? `/presensi/${id}` : null);
      } catch (error) {
        console.log(error.response);
        message.error({
          content: 'Gagal ubah wkwk',
        });
        reject();
      }
    });
  };

  // https://github.com/vercel/next.js/discussions/15952#discussioncomment-47750
  // https://swr.vercel.app/docs/conditional-fetching
  const { data: sg, error } = useSWR(id ? `/presensi/${id}` : null, fetcher);

  if (error) {
    return (
      <Card style={{ marginTop: '2rem', borderRadius: '2rem' }}>
        <Result
          status='404'
          title='404'
          subTitle='Yahh, Study Group ini tidak ada'
          extra={
            <Button
              className='btn btn-primary'
              onClick={() => router.push('/')}
            >
              Kembali ke home
            </Button>
          }
        />
      </Card>
    );
  }

  if (!sg) {
    return null;
  }

  return (
    <InformationCard
      data={sg.data}
      isInput={isEditing}
      submitText='Simpan Perubahan'
      extra={
        <div>
          Edit Mode
          <Switch
            style={{ marginLeft: '1rem' }}
            checked={isEditing}
            onChange={handleToggleEditing}
          />
        </div>
      }
      onSubmit={handleSubmit}
    >
      <div className={styles.attendance}>
        <Table dataSource={sg.data.presensis} columns={columns} />
      </div>
    </InformationCard>
  );
};

export default DetailPage;
