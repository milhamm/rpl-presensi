import { message } from 'antd';

import { AuthenticationProvider } from '@context/auth';

require('antd/dist/antd.less');
require('../styles/globals.less');

const MyApp = ({ Component, pageProps }) => {
  message.config({
    maxCount: 1,
  });

  return (
    <>
      <AuthenticationProvider>
        <Component {...pageProps} />
      </AuthenticationProvider>
    </>
  );
};

export default MyApp;
