import { AuthenticationProvider } from '@context/auth';

require('antd/dist/antd.less');
require('../styles/globals.less');

function MyApp({ Component, pageProps }) {
  return (
    <AuthenticationProvider>
      <Component {...pageProps} />
    </AuthenticationProvider>
  );
}

export default MyApp;
