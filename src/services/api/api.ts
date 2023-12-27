import axios from 'axios';

const baseURL = '';

const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export default api;
