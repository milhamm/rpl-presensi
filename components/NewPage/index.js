import React from 'react';
import { message } from 'antd';
import { useRouter } from 'next/router';

import api from '@lib/api';
import { waiter } from '@lib/waiter';

import { SuccesCreateNotification } from '@components/Notification';
import InformationCard from '@components/InformationCard';

const NewPage = () => {
  const router = useRouter();

  const handleSubmit = (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.post('/studygroup', data);
        const id = response.data.data;
        router.push('/');
        await waiter();
        message.open({
          key: 'success',
          className: 'notification-success',
          duration: 6,
          content: (
            <SuccesCreateNotification
              title='Study Group telah berhasil dibuat!'
              text='Klik notifikasi ini untuk melihat Study Group yang baru saja dibuat'
            />
          ),
          icon: null,
          onClick: () => {
            router.push(`/sg/${id}`);
            message.destroy('success');
          },
        });
        resolve();
      } catch (error) {
        message.error({
          content: 'Error Gan wkwkwk',
        });
        reject();
      }
    });
  };

  return <InformationCard isInput onSubmit={handleSubmit} />;
};

export default NewPage;
