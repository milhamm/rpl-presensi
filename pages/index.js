import Page from '@components/Page';
import Layout from '@components/Layout';
import HomePage from '@components/HomePage';

import withAuth from '@lib/withAuth';

const Home = () => {
  return (
    <Page>
      <Layout>
        <HomePage />
      </Layout>
    </Page>
  );
};

export default withAuth(Home);
