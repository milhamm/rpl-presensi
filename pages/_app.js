import { AuthenticationProvider } from '@context/auth';
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
      console.log('Masuk');
    });
  }, [router]);

  return (
    <>
      <Head>
        <link rel='shortcut icon' href='favicon.png' type='image/x-icon' />
      </Head>
      <AuthenticationProvider>
        <Component {...pageProps} />
      </AuthenticationProvider>
    </>
  );
}

export default MyApp;
