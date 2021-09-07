import withAuth from '@lib/withAuth';

import Layout from '@components/Layout';
import Page from '@components/Page';
import DetailPage from '@components/DetailPage';

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
