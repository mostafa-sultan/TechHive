// src/api/api.js

import axios from 'axios';
import store from '../src/redux/store';

const api = axios.create({
  baseURL: 'http://192.168.1.4:3000',
});

api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
