import Head from 'next/head';
import React from 'react';
import { SITE_NAME } from '@constant/index';

const Page = ({ meta, children }) => {
  const title = meta ? `${meta.title} - ${SITE_NAME}` : SITE_NAME;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <link rel='shortcut icon' href='favicon.png' type='image/x-icon' />
      </Head>
      {children}
    </div>
  );
};

export default Page;
