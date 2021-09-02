import dayjs from 'dayjs';
import 'dayjs/locale/id';

export const formatLongDate = (date) =>
  dayjs(date).locale('id').format('dddd, DD MMMM YYYY');

export const formatTime = (date) => dayjs(date).locale('id').format('HH:mm');
