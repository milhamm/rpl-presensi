import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import styles from './LoginPage.module.less';
import { useAuth } from '@context/auth';
import router from 'next/router';

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const { login } = useAuth();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await login(values);
    } catch (error) {
      console.log('OnFinish', error);
      if (Array.isArray(error)) {
        error.map((val) => {
          const key = Object.keys(val)[0];
          const errorMessage = val[key];
          message.error({
            content: errorMessage,
          });
        });
      } else {
        message.error({
          content: 'Something went wrong, check your username and password',
        });
      }
    }
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
