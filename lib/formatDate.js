import { DATE_FORMAT } from '@constant/index';
import dayjs from 'dayjs';
import 'dayjs/locale/id';

export const formatLongDate = (date) =>
  dayjs(date).locale('id').format(DATE_FORMAT);

export const formatTime = (date) => dayjs(date).locale('id').format('HH:mm');
