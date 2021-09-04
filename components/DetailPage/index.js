import React from 'react';
import { Button, Card, Result, Table } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import styles from './DetailPage.module.less';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import fetcher from '@lib/fetcher';

import InformationCard from '@components/InformationCard';

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
    <InformationCard data={sg.data}>
      <div className={styles.attendance}>
        <Table dataSource={sg.data.presensis} columns={columns} />
      </div>
    </InformationCard>
  );
};

export default DetailPage;
