import CardSG from '@components/CardSG';
import dayjs from 'dayjs';
import React from 'react';
import styles from '../HomePage.module.less';

const UpcomingSG = ({ data: raw }) => {
  if (!(raw && raw?.data.length)) {
    return null;
  }

  //  Filter and sort data by date
  //  Reference: https://runkit.com/embed/mpmqk4tnk79y
  const data = raw.data
    .filter((val) => dayjs(val.tanggal).isAfter(dayjs()))
    .sort((a, b) => (dayjs(a.tanggal).isAfter(dayjs(b.tanggal)) ? 1 : -1));

  return (
    <>
      <div className={styles['overview-cards']}>
        <CardSG data={data[0]} loading={!!!data[0]} type='hero' />
      </div>
      {data?.length > 1 && (
        <div className={styles['overview-lists']}>
          {data?.slice(1, 5).map((val, idx) => (
            <CardSG
              key={idx}
              data={val}
              loading={!data}
              showButton={false}
              type='secondary'
            />
          ))}
        </div>
      )}
    </>
  );
};

export default UpcomingSG;
