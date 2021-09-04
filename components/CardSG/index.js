import React from 'react';
import { Button, Card, Skeleton, Modal, message } from 'antd';
import { DeleteOutlined, CloseOutlined } from '@ant-design/icons';
import cn from 'classnames';
import styles from './Card.module.less';
import { mutate } from 'swr';
import CardTitle from './CardTitle';
import { formatLongDate, formatTime } from '@lib/formatDate';
import Link from 'next/link';
import api from '@lib/api';
import { SuccesCreateNotification } from '@components/Notification';
// Using require to import non-module .less files
require('./Card.less');

const { confirm } = Modal;

const buttonConfirmProps = {
  type: 'primary',
  danger: true,
  icon: <DeleteOutlined />,
};

const buttonCancelProps = {
  icon: <CloseOutlined />,
};

const CardSG = ({
  data: { judul, tanggal, penutor, id },
  loading,
  showButton = true,
  allowDelete = false,
  type = 'default',
}) => {
  const handleDelete = (id) => {
    confirm({
      className: styles.confirm,
      content: <p>Apakah Anda yakin ingin menghapus Study group ini?</p>,
      icon: null,
      okType: 'danger',
      okText: 'Hapus',
      cancelText: 'Urungkan',
      okButtonProps: buttonConfirmProps,
      cancelButtonProps: buttonCancelProps,
      onOk() {
        return new Promise(async (resolve, reject) => {
          try {
            await api.delete(`/studygroup/${id}`);
            message.open({
              className: 'notification-success',
              icon: null,
              content: (
                <SuccesCreateNotification title='Study Group telah berhasil dihapus' />
              ),
            });
            mutate('/studygroup');
            resolve();
          } catch (err) {
            reject();
          }
        });
      },
    });
  };

  return (
    <Card
      bordered={false}
      className={cn(
        styles.card,
        {
          [styles['card-default']]: type === 'default',
          [styles['card-secondary']]: type === 'secondary',
          [styles['card-hero']]: type === 'hero',
        },
        'card'
      )}
      title={
        <Link href={`/sg/${id}`} scroll>
          <a>
            <CardTitle
              title={judul}
              date={formatLongDate(tanggal)}
              loading={loading}
            />
          </a>
        </Link>
      }
    >
      <div className={styles['card-body']}>
        <p>Penutor </p>
        <Skeleton paragraph={{ rows: 1 }} title={false} loading={loading}>
          <p>: {penutor}</p>
        </Skeleton>
        <p>Waktu</p>
        <Skeleton paragraph={{ rows: 1 }} title={false} loading={loading}>
          <p>: {formatTime(tanggal)}</p>
        </Skeleton>
      </div>
      <div className={styles['card-footer']}>
        {allowDelete && (
          <Button
            onClick={() => handleDelete(id)}
            className={styles.delete}
            shape='circle'
            icon={<DeleteOutlined />}
          />
        )}

        {showButton && !loading && (
          <Link href={`/sg/${id}`}>
            <a>
              <Button className='btn btn-primary'>Lihat Selengkapnya</Button>
            </a>
          </Link>
        )}
      </div>
    </Card>
  );
};

export default CardSG;
