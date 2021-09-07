import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import withAuth from '@lib/withAuth';

const SG = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return null;
};

export default withAuth(SG);
