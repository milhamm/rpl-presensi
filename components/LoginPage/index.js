import React, { useEffect } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import styles from './LoginPage.module.less';
import { useAuth } from '@context/auth';
import router from 'next/router';

const LoginPage = () => {
  const { login, error, isLoggedIn, isLoading } = useAuth();

  const onFinish = (values) => {
    login(values);
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn]);

  if (!isLoggedIn && isLoading) {
    return 'Loading . . .';
  }

  return (
    <Form layout='vertical' onFinish={onFinish}>
      <Form.Item
        label='ID Aslab'
        name='username'
        rules={[{ required: true, message: 'Please fill in your username' }]}
      >
        <Input className={styles.input} size='large' />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please fill in your password' }]}
      >
        <Input.Password className={styles.input} size='large' />
      </Form.Item>
      <Form.Item>
        <Button
          size='large'
          type='primary'
          htmlType='submit'
          className={styles.button}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
