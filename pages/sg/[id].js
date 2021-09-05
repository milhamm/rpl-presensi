import Layout from '@components/Layout';
import Page from '@components/Page';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Detail.module.less';
import DetailPage from '@components/DetailPage';
import withAuth from '@lib/withAuth';

const DetailSG = () => {
  return (
    <Page>
      <Layout>
        <DetailPage />
      </Layout>
    </Page>
  );
};

export default withAuth(DetailSG);
