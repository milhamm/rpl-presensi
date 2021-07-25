import withAuth from '@lib/withAuth';
import Page from '@components/Page';
import Layout from '@components/Layout';
import HomePage from '@components/HomePage';

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
