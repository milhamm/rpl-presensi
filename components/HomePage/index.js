import CardSG from '@components/CardSG';
import React from 'react';
import fetcher from '@lib/fetcher';
import { Button } from 'antd';
import Link from 'next/link';
import useSWR from 'swr';
import CardLists from './CardLists';
import FilterList from './FilterList';
import styles from './HomePage.module.less';

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
              <div className={styles['overview-cards']}>
                <CardSG
                  data={data.data[0]}
                  loading={!!!data.data[0]}
                  type='hero'
                />
              </div>
              {data?.data.length > 1 && (
                <div className={styles['overview-lists']}>
                  {data?.data.slice(1, 3).map((val, idx) => (
                    <CardSG
                      key={idx}
                      data={val}
                      loading={!!!val}
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
