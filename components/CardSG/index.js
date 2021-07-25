import React from 'react';
import { Button, Card, Skeleton, Modal } from 'antd';
import { DeleteOutlined, CloseOutlined } from '@ant-design/icons';
import cn from 'classnames';
import styles from './Card.module.less';
// Importing less files need to use require
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

const Title = ({ title, date, loading }) => {
  return (
    <div className={styles.title}>
      <Skeleton paragraph={{ rows: 1 }} loading={loading}>
        <p>{date}</p>
        <h4>{title}</h4>
      </Skeleton>
    </div>
  );
};

const CardSG = ({
  data: { title, date, tutor, time },
  loading,
  showButton = true,
  allowDelete = false,
  type = 'default',
}) => {
  const handleDelete = () => {
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
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
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
      title={<Title title={title} date={date} loading={loading} />}
    >
      <div className={styles['card-body']}>
        <p>Penutor </p>
        <Skeleton paragraph={{ rows: 1 }} title={false} loading={loading}>
          <p>: {tutor}</p>
        </Skeleton>
        <p>Waktu</p>
        <Skeleton paragraph={{ rows: 1 }} title={false} loading={loading}>
          <p>: {time}</p>
        </Skeleton>
      </div>
      <div className={styles['card-footer']}>
        {allowDelete && (
          <Button
            onClick={handleDelete}
            className={styles.delete}
            shape='circle'
            icon={<DeleteOutlined />}
          />
        )}

        {showButton && !loading && (
          <Button className='btn-primary'>Lihat Selengkapnya</Button>
        )}
      </div>
    </Card>
  );
};

export default CardSG;
