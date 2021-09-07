import Layout from '@components/Layout';
import NewPage from '@components/NewPage';
import Page from '@components/Page';
import withAuth from '@lib/withAuth';
import React from 'react';

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
