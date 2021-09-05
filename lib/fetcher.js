import api from './api';

const Fetcher = {
  get: (url) => api.get(url).then((resp) => resp.data),
  post: (url, payload) => api.post(url, payload).then((resp) => resp.data),
};

export default Fetcher;
