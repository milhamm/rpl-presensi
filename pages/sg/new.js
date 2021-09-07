import React from 'react';

import withAuth from '@lib/withAuth';

import Layout from '@components/Layout';
import NewPage from '@components/NewPage';
import Page from '@components/Page';

const NewSG = () => {
  const meta = {
    title: 'Buat Presensi',
  };

  return (
    <Page meta={meta}>
      <Layout>
        <NewPage />
      </Layout>
    </Page>
  );
};

export default withAuth(NewSG);
