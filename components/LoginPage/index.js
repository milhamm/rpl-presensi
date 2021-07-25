import React from 'react';
import { Form, Input, Button, Radio } from 'antd';
import styles from './LoginPage.module.less';

const LoginPage = () => {
  return (
    <Form layout='vertical'>
      <Form.Item label='ID Aslab'>
        <Input className={styles.input} size='large' />
      </Form.Item>
      <Form.Item label='Password'>
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
