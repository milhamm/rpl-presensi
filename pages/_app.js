import { AuthenticationProvider } from '@context/auth';
import { message } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

require('antd/dist/antd.less');
require('../styles/globals.less');

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      window.scrollTo({
        top: 0,
      });
    });
  }, [router]);

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
}

export default MyApp;
