import Layout from '@components/Layout';
import Page from '@components/Page';
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
