import axios from 'axios';

const api = axios.create({
  baseURL: 'http://aespartana.cloud:3000',
});

export default api;