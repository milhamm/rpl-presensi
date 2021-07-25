import React from 'react';
import styles from './CircleDecor.module.less';
import cx from 'classnames';

const CircleDecor = ({ type = 1 }) => {
  return (
    <div
      className={cx(styles.circle, {
        [styles['circle-1']]: type === 1,
        [styles['circle-2']]: type === 2,
        [styles['circle-3']]: type === 3,
      })}
    ></div>
  );
};

export default CircleDecor;
