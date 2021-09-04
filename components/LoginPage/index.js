import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import styles from './LoginPage.module.less';
import { useAuth } from '@context/auth';
import router from 'next/router';

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const { login } = useAuth();

  const onFinish = async (values) => {
    setLoading(true);
    await login(values);
    setLoading(false);
  };

  return (
    <Form layout='vertical' onFinish={onFinish}>
      <Form.Item
        label='ID Aslab'
        name='username'
        rules={[{ required: true, message: 'Please fill in your username' }]}
      >
        <Input className={styles.input} size='large' autoComplete='off' />
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
          loading={isLoading}
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
