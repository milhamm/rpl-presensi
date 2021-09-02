import { useAuth } from '@context/auth';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (Component) => {
  const WithAuth = ({ ...props }) => {
    const router = useRouter();
    const { isLoggedIn, isLoading } = useAuth();

    useEffect(() => {
      if (!isLoggedIn && !isLoading) {
        router.push('/login');
      }
    }, [isLoggedIn]);

    if (!isLoggedIn && !isLoading) {
      return <div className='bg-white'>loading</div>;
    }

    return <Component {...props} />;
  };

  return WithAuth;
};

export default withAuth;
