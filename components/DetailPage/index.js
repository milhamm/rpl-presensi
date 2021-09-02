import { Divider, Table } from 'antd';

import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import styles from './DetailPage.module.less';
import Information from './Information';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import fetcher from '@lib/fetcher';
import { formatLongDate } from '@lib/formatDate';

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

  if (!sg) {
    return 'Loading . . .';
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Laporan Study Group</h1>
      </div>
      <Divider />
      <div className={styles.info}>
        <Information title='Divisi' content={sg.data.tempat} />
        <Information title='Penutor' content={sg.data.penutor} />
        <Information title='Materi' content={sg.data.judul} />
        <Information
          title='Tanggal'
          content={formatLongDate(sg.data.tanggal)}
        />
      </div>
      <Divider />
      <div className={styles.attendance}>
        <Table dataSource={sg.data.presensis} columns={columns} />
      </div>
    </div>
  );
};

export default DetailPage;
