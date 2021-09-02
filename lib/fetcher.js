import api from './api';

const fetcher = (url) => api.get(url).then((resp) => resp.data);

export default fetcher;
