import Layout from '@components/Layout';
import NewPage from '@components/NewPage';
import withAuth from '@lib/withAuth';
import React from 'react';

const NewSG = () => {
  return (
    <Layout>
      <NewPage />
    </Layout>
  );
};

export default withAuth(NewSG);
