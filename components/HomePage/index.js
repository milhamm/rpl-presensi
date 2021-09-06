import CardSG from '@components/CardSG';
import React, { useState } from 'react';
import { Button, Divider } from 'antd';
import Link from 'next/link';
import useSWR from 'swr';
import CardLists from './CardLists';
import FilterList from './FilterList';
import styles from './HomePage.module.less';
import SearchBar from './SearchBar';
import { useDebounce } from 'hooks/useDebounce';
import Fetcher from '@lib/fetcher';
import api from '@lib/api';
import { useAuth } from '@context/auth';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  const { data } = useSWR(isLoggedIn ? '/studygroup' : null, Fetcher.get);

  const [filter, setFilter] = useState({});
  const debouncedFilter = useDebounce(filter, 500);
  const isHasFilter = Object.keys(filter).length > 0 && 'tanggal' in filter;

  const { data: filteredData } = useSWR(
    isHasFilter ? ['/studygroup/search', debouncedFilter] : null,
    Fetcher.post
  );

  // const data = null;

  const handleFilterChange = (data, key) => {
    if (data === '') {
      const newObj = { ...filter };
      delete newObj[key];
      setFilter(newObj);
    } else {
      setFilter({ ...filter, [key]: data });
    }
  };

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
            <br />
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
          {data && data?.data.length > 0 && (
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
                      loading={!data}
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
        <SearchBar
          onJudulChange={handleFilterChange}
          disabled={!('tanggal' in filter)}
        />
        <FilterList
          onPenutorChange={handleFilterChange}
          onTanggalChange={handleFilterChange}
          disabled={!('tanggal' in filter)}
        />
        <Divider />
        {
          <CardLists
            loading={isHasFilter ? !filteredData : !data}
            data={isHasFilter ? filteredData?.data : data?.data}
          />
        }
      </div>
    </>
  );
};

export default HomePage;
