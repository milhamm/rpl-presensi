import { BASE_URL } from '@constant/index';
import axios from 'axios';

export default axios.create({
  baseURL: BASE_URL,
});
