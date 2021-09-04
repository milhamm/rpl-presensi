import { DATE_FORMAT } from '@constant/index';
import dayjs from 'dayjs';
import 'dayjs/locale/id';

export const formatLongDate = (date, format = DATE_FORMAT) =>
  dayjs(date).locale('id').format(format);

export const formatTime = (date) => dayjs(date).locale('id').format('HH:mm');
