import axios from 'axios';

const api = axios.create({
  baseURL: 'http://56.124.61.53'
});

export default api;