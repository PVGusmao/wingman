import axios from 'axios';

const api = axios.create({
  baseURL: 'http://46.202.147.150:3000',
});

export default api;