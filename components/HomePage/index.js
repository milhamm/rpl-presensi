import CardSG from '@components/CardSG';
import api from '@lib/api';
import fetcher from '@lib/fetcher';
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

const datass = [
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
  const { data, error } = useSWR('/studygroup', fetcher);

  if (!data) {
    return 'Loading . . .';
  }

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
          </h1>
        </div>
        <div className={styles.overview}>
          <div className={styles['overview-cards']}>
            <CardSG data={dummyData} loading={!!!dummyData} type='hero' />
          </div>
          <div className={styles['overview-lists']}>
            <CardSG
              data={dummyData}
              loading={!!!dummyData}
              showButton={false}
              type='secondary'
            />
            <CardSG
              data={dummyData}
              loading={!!!dummyData}
              showButton={false}
              type='secondary'
            />
          </div>
        </div>
      </div>
      <div className={styles['home-lists']}>
        <FilterList />
        {data && <CardLists data={data.data} />}
      </div>
    </>
  );
};

export default HomePage;
