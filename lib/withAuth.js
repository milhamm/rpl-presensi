import { useAuth } from '@context/auth';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { message } from 'antd';

const withAuth = (Component) => {
  const WithAuth = ({ ...props }) => {
    const router = useRouter();
    const { isLoggedIn, isLoading, logout } = useAuth();

    useEffect(() => {
      if (!isLoggedIn && !isLoading) {
        logout();
        message.error({
          content: 'Please Login to continue',
        });
        router.replace('/login');
      }
    }, [isLoggedIn, router, isLoading, logout]);

    if (!isLoading && !isLoggedIn) {
      return null;
    }

    return <Component {...props} />;
  };

  return WithAuth;
};

export default withAuth;
