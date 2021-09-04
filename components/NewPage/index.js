import React from 'react';
import { message } from 'antd';
import { useRouter } from 'next/router';
import { SuccesCreateNotification } from '@components/Notification';
import InformationCard from '@components/InformationCard';
import api from '@lib/api';
import { waiter } from '@lib/waiter';

const NewPage = () => {
  const router = useRouter();

  const handleSubmit = (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.post('/studygroup', data);
        router.push('/');
        await waiter();
        message.open({
          className: 'notification-success',
          duration: 6,
          content: (
            <SuccesCreateNotification
              title='Study Group telah berhasil dibuat!'
              text='Klik notifikasi ini untuk melihat Study Group yang baru saja dibuat'
            />
          ),
          icon: null,
          onClick: () => router.push('/sg/1'),
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
