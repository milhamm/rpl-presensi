import dayjs from 'dayjs';

import { DATE_FORMAT } from '@constant/index';

import 'dayjs/locale/id';

export const formatLongDate = (date, format = DATE_FORMAT) => {
  return dayjs(date).locale('id').subtract(7, 'hours').format(format);
};

export const formatTime = (date) =>
  dayjs(date).locale('id').subtract(7, 'hours').format('HH:mm [WIB]');
