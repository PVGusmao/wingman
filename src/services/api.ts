import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aespartana.cloud'
});

export default api;