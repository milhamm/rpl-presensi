import Head from 'next/head';
import React from 'react';
import { SITE_NAME } from '@constant/index';

const Page = ({ meta, children }) => {
  const title = meta ? meta.title : SITE_NAME;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
      </Head>
      {children}
    </div>
  );
};

export default Page;
