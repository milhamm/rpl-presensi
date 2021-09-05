import withAuth from '@lib/withAuth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const SG = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return null;
};

export default withAuth(SG);
