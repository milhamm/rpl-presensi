import CardSG from '@components/CardSG';
import { useAuth } from '@context/auth';
import api from '@lib/api';
import fetcher from '@lib/fetcher';
import { Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import CardLists from './CardLists';
import FilterList from './FilterList';
import styles from './HomePage.module.less';

const dummyData = {
  date: 'Kamis, 17 April 2021',
  title: 'Study Group UI/UX',
  tutor: 'Aang',
  time: '19.00',
};

// const data = null;

const dataaa = [
  {
    date: 'Kamis, 17 April 2021',
    title: 'Study Group UI/UX',
    tutor: 'Aang',
    time: '19.00',
  },
  {
    date: 'Kamis, 17 April 2021',
    title: 'Study Group Frontend',
    tutor: 'Anjoi',
    time: '19.00',
  },
  {
    date: 'Kamis, 17 April 2021',
    title: 'Study Group UI/UX',
    tutor: 'Aang',
    time: '19.00',
  },
  {
    date: 'Kamis, 17 April 2021',
    title: 'Study Group Frontend',
    tutor: 'Anjoi',
    time: '19.00',
  },
  {
    date: 'Kamis, 17 April 2021',
    title: 'Study Group UI/UX',
    tutor: 'Aang',
    time: '19.00',
  },
  {
    date: 'Kamis, 17 April 2021',
    title: 'Study Group Frontend',
    tutor: 'Anjoi',
    time: '19.00',
  },
];

const HomePage = () => {
  const { data } = useSWR('/studygroup', fetcher);

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.title}>
          <h1>
            Jadwal
            <span>
              <br />
              Study Group
            </span>
            <Link href='/sg/new'>
              <a>
                <Button className={styles.cta} size='large'>
                  Buat Study Group
                </Button>
              </a>
            </Link>
          </h1>
        </div>
        <div className={styles.overview}>
          {data?.data.length > 0 && (
            <>
              {console.log('Masul')}
              <div className={styles['overview-cards']}>
                <CardSG
                  data={data.data[0]}
                  loading={!!!dummyData}
                  type='hero'
                />
              </div>
              {data?.data.length > 1 && (
                <div className={styles['overview-lists']}>
                  {data?.data.slice(1, 2).map((val, idx) => (
                    <CardSG
                      key={idx}
                      data={val}
                      loading={!!!dummyData}
                      showButton={false}
                      type='secondary'
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className={styles['home-lists']}>
        <FilterList />
        {data && <CardLists data={data?.data} />}
      </div>
    </>
  );
};

export default HomePage;
