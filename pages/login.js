import React from 'react';

import AuthLayout from '@components/Layout/AuthLayout';
import LoginPage from '@components/LoginPage';
import Page from '@components/Page';

const Login = () => {
  const meta = { title: 'Login' };

  return (
    <Page meta={meta}>
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    </Page>
  );
};

export default Login;
